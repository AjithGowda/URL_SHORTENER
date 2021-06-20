import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import UI from './UI'

class  OperationalUI extends React.Component
{
    render() {
        console.log(this.props)
        return (
            <Grid container justify="center"  alignItems="center"  direction="column" style={{minHeight:"100vh",width:"100%"}} spacing={5}>
            <Grid item>
                <Typography variant="h3" color="primary" style={{textShadow:"3px 1px"}}>Shorten the URL</Typography>
            </Grid>
            <Grid item style={{border:"0.2px solid grey",width:"75%"}}>
                 <UI generateShortURL={this.props.props.generateShortURL}/>
            </Grid>
            </Grid>
        );
    }
    
}



export default OperationalUI;