import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className='blk_red'>
      <Fade delay={200}>
        <div className='footer_logo_venue font_righteous'>
          Connox Open-House
        </div>
        <div className='footer_copyright'>all rights not really reserved</div>
      </Fade>
    </footer>
  );
};

export default Footer;
