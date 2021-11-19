import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { withStyles, makeStyles } from '@mui/styles';

import { useNavigate, useLocation } from 'react-router-dom';

// import DescDrawer from '../../../components/DescDrawer';

const useStyles = makeStyles((theme) => ({
  
}));

function Header(props) {

  useEffect(()=>{
    

  });

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <header className="sticky-top py-3">
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none sample_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bank2 sample_icon" viewBox="0 0 16 16">
              <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
            </svg>
            <span className="fs-4">Cipher Assembly</span>
          </a>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">            
            <Link href="/" className={" me-3 py-2 text-dark text-decoration-none"}> Home </Link>
            <Link href="/nft" className={" me-3 py-2 text-dark text-decoration-none"}> NFT </Link>
            <Link href="/activities" className={" py-2 text-dark text-decoration-none"}> Activities </Link>
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

export default Header;