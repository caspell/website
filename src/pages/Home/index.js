import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { withStyles } from '@mui/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Header from '../Layout/Default/Header';
import Footer from '../Layout/Default/Footer';

import Main from './Main';
import Nft from './Nft';
import Activities from './Activities';
import Faq from './Faq';

// img6.jpg
const styles = {

};

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch('https://us-central1-wunicorns-df883.cloudfunctions.net/helloWorld', {
            mode: 'no-cors',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            console.log(response);
            return response.json()
        }).then((json)=>{
            console.log(json);
            return json;
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        // const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline />

                <Header

                />
                
                <Container className="container">

                    <main>

                        <Main />

                        <Divider variant="middle" />

                        <Nft />

                        <Divider variant="middle" />

                        <Activities />

                    </main>

                    <Footer 

                    />

                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Home);