import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Compare extends Component {

    constructor(props) {
        super(props)

        this.state = {
            carAttributes: [
                {"text": "", "attr": "name"},
                {"text": "ราคา", "attr": "price"},
                {"text": "อัตราการกินน้ำมันเชื้อเพลิง", "attr": "oilConsumption"}
            ]
        }
    }

    render() {
        let { selectedCars } = this.props.location.state
        let { carAttributes } = this.state

        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Back</Link>
                    </li>
                </ul>
                <table className="table">
                    {
                        carAttributes.map(
                            (carAttr, i) => 
                                <tr>
                                    <td>{carAttr.text}</td>
                                    {
                                        selectedCars.map(
                                            (selectedCar, i) => 
                                            <td>{selectedCar[carAttr.attr]}</td>
                                        )
                                    }
                                </tr>                            
                        )
                    }
                </table>
            </div>
        )
    }
}

export default Compare;