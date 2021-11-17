import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import { useNavigate, useLocation } from 'react-router-dom';

export default function Header(props) {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <header className="sticky-top py-3">
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img">
              <title> Logo </title>
              
            </svg>
            <span className="fs-4">Cipher Assembly</span>
          </a>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">            
            <a className="me-3 py-2 text-dark text-decoration-none" href="#main">Home</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#nft">NFT</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#activities">Activities</a>
          </nav>

        </div>

      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
