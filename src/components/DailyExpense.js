import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../App.css';

class DailylyExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/expense?q=Daily')
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
            <BootstrapTable data={ this.state.data } striped hover condensed>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='cost'>Cost</TableHeaderColumn>
                <TableHeaderColumn dataField='occurrence'>Occurrence</TableHeaderColumn>
                <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default DailylyExpense;