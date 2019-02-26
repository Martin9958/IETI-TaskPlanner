import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export class Cards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <CardContent>
                   <Avatar aria-label="Recipe">
                       TD
                   </Avatar>
                   <Typography variant="h6" component="h2">
                       {this.props.dueDate.format("MMMM d, YYYY ")}
                   </Typography>
                   <Typography>
                       # {this.props.priority}. {this.props.text}
                   </Typography>

            </CardContent>

        );
    }

}