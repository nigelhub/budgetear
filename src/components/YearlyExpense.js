import React, {Component} from 'react';
import '../App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class YearlyExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/expense?q=Annually')
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
            <BootstrapTable data={ this.state.data } striped={true} hover={true} condensed={true}>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='cost'>Cost</TableHeaderColumn>
                <TableHeaderColumn dataField='occurrence'>Occurrence</TableHeaderColumn>
                <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
            </BootstrapTable>
        );
    }

}


export default YearlyExpense;