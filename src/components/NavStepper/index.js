import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import { makeStyles } from '@mui/styles';

import jquery from 'jquery';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
    stepper: {
        position: "fixed",
        width: "120px"
    }
}));

const steps = [
    {label: 'Main', value: "#main"},
    {label: 'About', value: "#about"},
    {label: 'Roadmap', value: "#roadmap"}
];

export default function VerticalLinearStepper() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

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

    const handleStep = (step) => (e) => {
        setActiveStep(step);    
        return clickHandler(steps[step].value)(e);    
    };

    return (
        <Box sx={{ width: '100%' }} className={classes.stepper}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((el, index) => (
            <Step key={el.label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                {el.label}
                </StepButton>
            </Step>
            ))}
        </Stepper>
        </Box>
    );
}
