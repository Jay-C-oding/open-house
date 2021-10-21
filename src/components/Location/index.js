import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        title='connox'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.158791657107!2d9.741636851251045!3d52.36754065517009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b074b5b3fe63bd%3A0x4855b63ce85d880e!2sAegidientorpl.%202A%2C%2030159%20Hannover!5e0!3m2!1sko!2sde!4v1634762748571!5m2!1sko!2sde'
        width='100%'
        height='500'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Location;
