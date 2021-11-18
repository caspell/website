import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';

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
      <footer class="footer mt-auto bg-light text-center">
        <div class="container">
          <small className="d-block text-muted">Cipher Assembly &copy; 2021 All rights reserved.</small>
        </div>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
