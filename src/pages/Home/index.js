import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { withStyles } from '@mui/styles';

import Header from '../Layout/Default/Header';
import Footer from '../Layout/Default/Footer';

import Main from './Main';
import About from './About';
import Roadmap from './Roadmap';

import NavStepper from '../../components/NavStepper';

import jquery from 'jquery';
import $ from 'jquery';

const styles = {
    cursor: {
        cursor: "pointer"
    }
};

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // fetch('https://us-central1-wunicorns-df883.cloudfunctions.net/helloWorld', {
        //     mode: 'no-cors',
        //     credentials: 'include',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then((response)=>{
        //     console.log(response);
        //     return response.json()
        // }).then((json)=>{
        //     console.log(json);
        //     return json;
        // }).catch((err)=>{
            
        // });
    }

    render(){
        // const classes = useStyles();
        return (
            <React.Fragment>

                <CssBaseline />

                <Header

                />
                
                <Container className="container">

                    <NavStepper />

                    <main>

                        <Main />

                        <Divider variant="middle" />

                        <About />

                        <Divider variant="middle" />

                        <Roadmap />

                    </main>


                </Container>

                <Footer 

                />
                
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Home);