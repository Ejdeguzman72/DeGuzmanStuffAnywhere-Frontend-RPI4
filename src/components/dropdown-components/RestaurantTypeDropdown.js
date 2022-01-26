import React, { Component } from 'react'
import Axios from 'axios';
import Select from 'react-select'

export default class NameDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectOptions: [],
            restaurant_type_id: 0,
            descr: ""
        }
    }

    async getOptions() {
        const res = await Axios.get('http://localhost:8080/app/restaurant-types/all');
        const data = res.data;

        const options = data.map(d => ({
            "value": d.restaurant_type_id,
            "label": d.descr
        }))

        this.setState({ selectOptions: options })
    }

    handleChange = (event) => {
        this.setState({
            restaurant_type_id: event.value,
            descr: event.value
        })
    }

    componentDidMount() {
        this.getOptions();
    }

    render() {
        console.log(this.state.selectOptions)

        return (
            <div>
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.restaurant_type_id}</strong></p>
            </div>
        )
    }
}