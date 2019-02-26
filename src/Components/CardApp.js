import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./Components/CardList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


export class CardApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    render() {



        return (


            <div>
                <br/>
                <br/>
                <Grid container spacing={8} >
                    <Grid item xs>
                        <form onSubmit={this.handleSubmit} className="todo-form">
                            <h2>New Activity </h2>
                            <br/>
                                <TextField
                                      id="outlined-name"
                                      label="Text"
                                      value={this.state.text}
                                      onChange={this.handleTextChange}
                                      margin="normal"
                                      variant="outlined"
                                 />
                             <br/>
                             <br/>
                                 <TextField
                                       id="outlined-name"
                                       label="Priority"
                                       value={this.state.priority}
                                       onChange={this.handlePriorityChange}
                                       margin="normal"
                                       variant="outlined"
                                  />
                            <br/>
                            <br/>

                            <DatePicker
                                id="due-date"
                                selected={this.state.dueDate}
                                placeholderText="Due date"
                                onChange={this.handleDateChange}>

                            </DatePicker>

                            <br/>
                            <br/>
                            <Button variant="raised" type="submit" color="secondary" size="small">
                                Add #{this.state.items.length + 1}
                            </Button>
                            <br/>
                        </form>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs>
                            <Card>
                                <CardList todoList={this.state.items}/>
                            </Card>

                    </Grid>
                </Grid>

            </div>
        );
    }


    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}
export default CardApp