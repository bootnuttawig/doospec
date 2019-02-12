import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addCar, removeCar } from './actions'

import CarItem from './CarItem'

class Select extends Component {


    constructor(props) {
        super(props)
        this.state = {
            cars: this.getMockData(),
            selectedCars: []
        }

        this.handlerCarSelected = this.handlerCarSelected.bind(this)
        
        this.newHandlerCarSelected = this.newHandlerCarSelected.bind(this)
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
            selectedCars: selectedCars
        })
    }

    newHandlerCarSelected(selectedCar, isSelect) {

        let { dispatch } = this.props

        console.log('isSelect ', isSelect)

        if (isSelect) {
            dispatch(addCar(selectedCar))
        } else {
            dispatch(removeCar(selectedCar))
        }

    }

    render() {

        let { counter, selectedCars } = this.props

        let { cars } = this.state
        
        console.log('render counter', counter)
        console.log('render selectedCars', selectedCars)

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
                                <CarItem car={car} 
                                onCarSelected={this.newHandlerCarSelected}/>
                            </li>
                        )
                    }
                </ul>

                <ul>
                    {
                        selectedCars.map(
                            (car, i) => 
                            <li key={car.id+999}>
                                <CarItem car={car} />
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

//export default Select;


const mapStateToProps = state => ({
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0,
    selectedCars: state.CarSelector || []
  })
  
const AppWithConnect = connect(mapStateToProps)(Select)

export default AppWithConnect