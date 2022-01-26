import React, { Component } from 'react'
import Axios from 'axios';
import Select from 'react-select'

export default class NameDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectOptions: [],
            user_id: 0,
            name: ""
        }
    }

    async getOptions() {
        const res = await Axios.get('http://localhost:8080/app/users/all');
        const data = res.data;

        const options = data.map(d => ({
            "value": d.user_id,
            "label": d.name
        }))

        this.setState({ selectOptions: options })
    }

    handleChange = (event) => {
        this.setState({
            user_id: event.value,
            name: event.value
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
                <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.user_id}</strong></p>
            </div>
        )
    }
}