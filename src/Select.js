import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import CarItem from './CarItem'

class Select extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cars: this.getMockData(),
            selectedCars: []
        }

        this.handlerCarSelected = this.handlerCarSelected.bind(this)
    }

    handlerCarSelected(selectedCar, isSelect) {

        let selectedCars = this.state.selectedCars
        
        if (isSelect) {
            selectedCars = selectedCars.concat(selectedCar)
        } else {
            let idx = selectedCars.findIndex((c)=>{ return c.id == selectedCar.id })
            selectedCars.splice(idx, 1);
        }
        
        this.setState({
            cars: this.getMockData(),
            selectedCars: selectedCars
        })
    }

    render() {

        let { cars } = this.state
        
        let selectedCars = this.state.selectedCars
        let selectedCarsSize = selectedCars.length
        let displaySelectedCarsSize = selectedCarsSize ? "(" + selectedCarsSize + ")" : ""

        return (
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to={{
                                pathname: '/compare',
                                state: {
                                    selectedCars: selectedCars
                                }
                            }}>Compare {displaySelectedCarsSize}</Link>
                    </li>
                </ul>

                <ul>
                    {
                        cars.map(
                            (car, i) => 
                            <li key={car.id}>
                                <CarItem car={car} onCarSelected={this.handlerCarSelected}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    getMockData() {
        let mockCars = [
            {
                id: "001",
                name: "New Mazda3 2.0 SP Sports",
                price: 1149000,
                oilConsumption: 15.4
            },
            {
                id: "002",
                name: "New Civic TURBO RS",
                price: 1219000,
                oilConsumption: 16.2
            },
            {
                id: "003",
                name: "HRV",
                price: 999999,
                oilConsumption: 16.0
            }
        ]

        return mockCars
    }

}

export default Select;