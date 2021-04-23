import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';import { useFlexyTagStyles } from '@mui-treasury/styles/tag/flexy';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ThemeProvider } from '@material-ui/styles'; 
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';

//const redTheme = createMuiTheme({ palette: { primary: red } })
const Integrated = () => {
  const classes = useFlexyTagStyles();
  const gutterStyles = usePushingGutterStyles();
  
  return (
    <Box className={gutterStyles.parent}>
      <Button style={{
       
        background: '#FFFFFF',              
        boxShadow:' 0px 13px 19px rgba(171, 233, 170, 0.51)',
        borderRadius: '17px',
        padding: "18px 36px",
       
        fontSize: "20px",
        fontWeight:"600",
        fontFamily: "Open Sans",
        /* identical to box height */


        color: 'rgba(7, 7, 7, 0.8)',

        opacity: '0.8',
        
    }}
    variant="contained" classes={{ root: classes.root, label: classes.label }}>
        DashBoards Integerated!
        <CheckCircleIcon className={classes.icon} />
      </Button>
    </Box>
  );
  
};

export default Integrated;