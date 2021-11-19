import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img7.jpg"
]

export default function About(props) {

    return (
        <React.Fragment>
            <section id="about" className="text-center">
                <div className="row row-cols-1 mb-3 pt-100">

                    <h1 className="mb-3">About</h1>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <ThemeProvider theme={lightTheme}>
                            {images.map((v, index)=>(
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Item key={v} elevation={8} className="nft_holder">
                                        {<img src={v} />}
                                    </Item>
                                </Grid>
                            ))}
                        </ThemeProvider>
                    </Grid>
                </div>
            </section>
        </React.Fragment>
    );

}