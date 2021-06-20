import React from 'react'
import {TextField,Grid,Button} from '@material-ui/core';
import axios from 'axios';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

class UI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullUrl : null,
            shortUrl : null,
            shortUrlList : [],
            showModal: false
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

    async getShortUrlList(){
        const response = await axios.get("http://localhost:8080/rest/shortUrlList/" );
        if(response.data) {
            var urlList = [];
            response.data.forEach(eachUrl => urlList.push(eachUrl + "   ,   "))
            this.setState({shortUrlList : urlList})
            console.log(response.data);
        }
    }

    handleClick = () => {
        if(this.state.fullUrl) {
            this.getDataUrl();
        }
    }

    handleAccordion = () => {
        this.getShortUrlList();
    }

    render(){
        console.log(this.props.shortUrls);
        return(
            <Grid container  direction="column" alignItems="center" justify="center" >
               <TextField   id="outlined-basic" label="Full URL" variant="outlined" style={{marginBottom:"2em",width:"100%"}} onChange={this.handleChange}></TextField> 
               <TextField   id="outlined-basic" label={this.state.shortUrl != null ? this.state.shortUrl :"Short URL"} value ={this.state.shortUrl} variant="outlined" style={{marginBottom:"2em",width:"100%"}}></TextField>
               <Button size="large" variant="contained" onClick={this.handleClick} style={{fontSize: "17px", fontFamily: "fangsong"}} color="primary"> Click here to get short URL</Button> <br/>
               <Accordion onClick={this.handleAccordion}>
                <AccordionSummary justify="center" style={{backgroundColor: 'rgba(0, 0, 0, .03)',borderBottom: '1px solid rgba(0, 0, 0, .125)',minHeight: 56}}>
                <Typography align="center" justify="center" style={{fontSize: "17px", fontFamily: "fangsong"}} ><h3>View Short URL List</h3></Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{fontSize:"1em"}}>
                    {this.state.shortUrlList}
                </Typography>
                </AccordionDetails>
                </Accordion>
                
            </Grid>
        );
    }
}



export default UI;



