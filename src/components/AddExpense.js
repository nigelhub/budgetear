import React, {Component} from 'react';

class AddExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cost: 0,
            occurrence: '',
            category: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/expense', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    cost: this.state.cost,
                    occurrence: this.state.occurrence,
                    category: this.state.category
                })
            })
            .then(alert("Successfully saved item: " + this.state.name))
            .catch(alert("ERROR: Unable to save item: " + this.state.name + "!"));
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Item:
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                <br/>
                <label>
                    Cost:
                    <input
                        name="cost"
                        type="number"
                        value={this.state.cost}
                        onChange={this.handleChange}
                    />
                </label>
                </div>
                <div>
                <br/>
                <label>
                    Occurrence:
                    <select
                        name="occurrence"
                        value={this.state.occurrence}
                        onChange={this.handleChange}
                    >
                        <option value="OneTime">One Time</option>
                        <option value="Daily">Daily</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Annually">Annually</option>
                    </select>
                </label>
                </div>
                <div>
                <br/>
                <label>
                    Category:
                    <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="OnlineServices">Online Serivces</option>
                        <option value="HomeImprovement">Home Improvement</option>
                        <option value="BuisnessMiscellaneous">Buisness Misc</option>
                        <option value="Groceries">BuisnessMiscellaneous</option>
                        <option value="Cable">Cable</option>
                        <option value="Dinning">Dinning</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Travel">Travel</option>
                        <option value="Clothing/Shoes">Clothing/Shoes</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Postage">Postage</option>
                    </select>
                </label>
                </div>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddExpense;