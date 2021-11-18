import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';

import { useNavigate, useLocation } from 'react-router-dom';

// import { SmoothScrollContext } from '../../../contexts/SmoothScroll.context'
// import LocomotiveScroll from 'locomotive-scroll';

import jquery from 'jquery';
import $ from 'jquery';


const useStyles = makeStyles((theme) => ({
  cursor: {
    cursor: "pointer"
  }
}));

function Header(props) {
  // const { scroll } = useContext(SmoothScrollContext)

  const classes = useStyles();

  const outerDivRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  const clickHandler = (pageId) => {
      
    return (e)=>{

      var target = $(pageId);
      target = target.length ? target : $('[name=' + pageId + ']');
      if (target.length) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  }

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
            <a onClick={clickHandler('#main')} className={classes.cursor + " me-3 py-2 text-dark text-decoration-none"}>Home</a>
            <a onClick={clickHandler('#nft')} className={classes.cursor + " me-3 py-2 text-dark text-decoration-none"}>NFT</a>
            <a onClick={clickHandler('#activities')} className={classes.cursor + " py-2 text-dark text-decoration-none"}>Activities</a>
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