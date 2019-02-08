import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class CarItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: false,
            car: this.props.car
        }

        this.toggleSelected = this.toggleSelected.bind(this)
    }

    toggleSelected() {
        let { onCarSelected } = this.props
        let isSelect = !this.state.selected

        this.setState({
            selected: isSelect
        })

        onCarSelected(this.state.car, isSelect)
    }

    render() {
        
        let { car } = this.state

        return (
            <div>
                <input 
                    type="checkbox"
                    value="selected"
                    onClick={this.toggleSelected}/>
                <strong>{car.name}</strong> {car.price} 

            </div>
        )
    }
}

export default CarItem;