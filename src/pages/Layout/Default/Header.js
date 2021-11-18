import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import { useNavigate, useLocation } from 'react-router-dom';

import jquery from 'jquery';
import $ from 'jquery';

export default function Header(props) {
  const outerDivRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  const clickHandler = (pageId) => {
      
    // const { deltaY } = e;
    // const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
    // const pageHeight = window.innerHeight;
    // window.scroll(0, offsetTop);

    return (e)=>{
      e.preventDefault();

      const offsetTop = document.querySelector(pageId).offsetTop;

      console.log(offsetTop);

    }
    
  }

  useEffect(()=>{
    
    

  });

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

          <nav ref={outerDivRef} className="d-inline-flex mt-2 mt-md-0 ms-md-auto">            
            <a onClick={clickHandler('#main')} className="me-3 py-2 text-dark text-decoration-none">Home</a>
            <a onClick={clickHandler('#nft')} className="me-3 py-2 text-dark text-decoration-none">NFT</a>
            <a onClick={clickHandler('#activities')} className="me-3 py-2 text-dark text-decoration-none">Activities</a>
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
