import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../Layout/Default/Header';
import Footer from '../Layout/Default/Footer';

import { withStyles } from '@mui/styles';

const styles = {
    main: {
        minHeight: "100vh"
    }
};

class Activities extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        const {classes} = this.props;        
        return (
            <React.Fragment>
                <CssBaseline />

                <Header

                />
                
                <Container className={classes.main + " container"}>

                    <main>


                        
                    </main>

                </Container>

                <Footer 

                />
                
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Activities);