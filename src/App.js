import React, {Component} from 'react';
import YearlyExpense from './components/YearlyExpense';
import MonthlyExpense from './components/MonthlyExpense';
import DailyExpense from './components/DailyExpense';
import AddExpense from './components/AddExpense';
import BudgetChart from './components/BudgetChart';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'
import Chart from 'chart.js';
import './App.css';

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});


    showAdd = () => {
        this.setState({show: 'add', open: false });
    };

    showDaily = () => {
        this.setState({show: 'daily', open: false });
    };


    showYearly = () => {
        this.setState({show: 'yearly', open: false });
    };

    showMonthly = () => {
        this.setState({show: 'monthly', open: false });
    };

    showChart = () => {
        this.setState({show: 'chart', open: false });
    };

    render() {
        let content = null;
        let paperTitle = null;

        switch(this.state.show) {

            case 'add':
                content = (<AddExpense/>);
                paperTitle = "Add Expense"
                break;

            case 'daily':
                content = (<DailyExpense/>);
                paperTitle = "Daily Expense"
                break;

            case 'monthly':
                content = (<MonthlyExpense/>);
                paperTitle = "Monthly Expenses";
                break;

            case 'yearly':
                content = (<YearlyExpense/>);
                paperTitle = "Yearly Expenses";
                break;

            case 'chart':
                content = (<BudgetChart/>);
                paperTitle = "Chart";
                break;

            default:
                content = <h1>Welcome</h1>
        }

        return (
            <div className="App">

                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="BudgetTear"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <AppBar title="Menu"/>
                    <MenuItem id="showAddId" onClick={this.showAdd}>Add Expense</MenuItem>
                    <MenuItem id="showDailyId" onClick={this.showDaily}>Show Daily</MenuItem>
                    <MenuItem id="showMonthlyId" onClick={this.showMonthly}>Show Monthly</MenuItem>
                    <MenuItem id="showYearlyId" onClick={this.showYearly}>Show Yearly</MenuItem>
                    <MenuItem id="showChartId" onClick={this.showChart}>Show Charts</MenuItem>

                </Drawer>
                <Paper style={paperStyle} zDepth={5}>

                    <Toolbar style={{"justifyContent": "center"}}>
                        <ToolbarTitle text={paperTitle}/>
                    </Toolbar>
                    {content}
                </Paper>
            </div>
        );
    }
}

export default App;