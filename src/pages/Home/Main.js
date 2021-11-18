import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

export default function Main(props) {
    const theme = useTheme();
    
    return (
        <React.Fragment>
            <section id="main" className="text-center">

                <article className="row row-cols-1 mb-3 pt-100">
                    <h1 className="display-4 fw-normal">Cipher Assembly</h1>

                    <p className="fs-5 text-muted">
                        Site Description Or Sub title.
                    </p>

                    <div className="image_holder">
                        <Box elevation={8}>
                            <img src="images/img6.jpg" />
                        </Box>
                    </div>
                </article>

            </section>
        </React.Fragment>
    );

}