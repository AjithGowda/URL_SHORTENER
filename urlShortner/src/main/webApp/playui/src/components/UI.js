import React from 'react'
import {TextField,Grid,Button} from '@material-ui/core';
import axios from 'axios';

class UI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullUrl : null,
            shortUrl : null
        };
    }

    handleChange = (e) => {
        this.setState({
            fullUrl : e.target.value
        })
    }

    async getDataUrl(){
        const response = await axios.get("http://localhost:8080/rest/getShortUrl/",
            {params: { fullUrl : this.state.fullUrl}}
        );
        if(response.data) {
            this.setState({shortUrl : response.data})
        }
    }

    handleClick = () => {
       this.getDataUrl();
    }

    render(){
        console.log(this.props.shortUrls);
        return(
            <Grid container  direction="column" alignItems="center" justify="center" >
               <TextField   id="outlined-basic" label="Full URL" variant="outlined" style={{marginBottom:"2em"}} onChange={this.handleChange}></TextField> 
               <TextField   id="outlined-basic" label={this.state.shortUrl ? this.state.shortUrl :"Short URL"} value ={this.state.shortUrl} variant="outlined" style={{marginBottom:"2em"}}></TextField>
               <Button size="large" variant="contained" onClick={()=>{this.handleClick()}} color="primary"> Click here to get short URL</Button> <br/>

               <Button size="small" variant="contained" color="secondary">Existing  Short URL's</Button>
            </Grid>
        );
    }
}

export default UI;