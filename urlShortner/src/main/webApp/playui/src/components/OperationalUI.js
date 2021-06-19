import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import UI from './UI'

class  OperationalUI extends React.Component
{
    render() {
        console.log(this.props)
        return (
            <Grid container justify="center"  alignItems="center"  direction="column" style={{minHeight:"100vh"}} spacing={5}>
            <Grid item>
                <Typography variant="h5" color="primary" style={{textShadow:"2px 1px"}}>Shorten the URL</Typography>
            </Grid>
            <Grid item style={{border:"0.2px solid grey"}}>
                 <UI generateShortURL={this.props.props.generateShortURL}/>
            </Grid>
            </Grid>
        );
    }
    
}



export default OperationalUI;