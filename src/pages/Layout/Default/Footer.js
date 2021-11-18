import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <React.Fragment>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
          <img className="mb-2" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
          <small className="d-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
          </ul>
          </div>
          <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
          </ul>
          </div>
          <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
          </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
