import React, {Component} from 'react';
import '../App.css';

class Expense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/expense')
            .then(resp => resp.json())
            .then(json => json.map(expense =>
                this.setState( {
                    data: json
                }
            )))
            .catch(error => console.error("Error: "+ error));
    }

    render() {
        return (
            <table>
                <tbody>
                {JSON.stringify(this.state.data)}
                </tbody>
            </table>)
    }
}

export default Expense;