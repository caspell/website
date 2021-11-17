import React from 'react';
import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
];
  
function valuetext(value) {
    return `${value}°C`;
}

export default function Roadmap(props) {

    return (
        <React.Fragment>
            <section id="activities" className="text-center">
                <div className="row row-cols-1 mb-3 pt-100">

                    <h1>Activities</h1>

                    <div className="activities">
                        <Slider
                            getAriaLabel={() => 'Temperature'}
                            orientation="vertical"
                            getAriaValueText={valuetext}
                            defaultValue={[20, 37]}
                            marks={marks}
                        />
                    </div>
                </div>

            </section>
        </React.Fragment>
    );

}