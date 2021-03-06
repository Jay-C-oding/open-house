import React, { useState, useEffect } from 'react';

import { Slide, Fade } from 'react-awesome-reveal';

const Discount = () => {
  const end = 10;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    if (start > 0 && start < 10) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 150);
    }
  }, [start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className='discount_porcentage'>
            <span>{start}</span>
            <span>person</span>
          </div>
        </Fade>

        <Slide right>
          <div className='discount_description'>
            <h3>Book your place before it runs out</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
