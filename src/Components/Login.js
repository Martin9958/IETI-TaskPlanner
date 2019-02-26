import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props) {
          super(props);
          this.state = {user:"",password:""};
          this.handleSubmit = this.handleSubmit.bind(this);
                              this.handleUserTextChange=this.handleUserTextChange.bind(this);
                              this.handlePasswordTextChange=this.handlePasswordTextChange.bind(this);
    }


    render(){

        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Task Planner</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange = {this.handleUserTextChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordTextChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className= {classes.submit}
                                onClick={this.handleSubmit}

                            >
                                LOGIN
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleSubmit(e) {

        if(localStorage.getItem('User')===this.state.user  && localStorage.getItem('Password')===this.state.password ){
            localStorage.setItem('IsLoggedIn', "true");
        }

    }
    handleUserTextChange(e) {
        console.log(e.target.value);

        this.setState({
            user: e.target.value

        });
    }

    handlePasswordTextChange(e) {
        console.log(e.target.value);
        this.setState({
            password: e.target.value
        });
    }

}