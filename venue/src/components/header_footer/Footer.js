import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className='blk_red'>
      <Fade delay={200}>
        <div className='footer_logo_venue font_righteous'>The venue</div>
        <div className='footer_copyright'>
          The venue 2021 all rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
