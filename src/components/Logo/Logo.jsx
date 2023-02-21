import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () =>{
    return(
      <div className="ma4 mt0 pos" >
        <Tilt glareColor='#ffffff' glareBorderRadius='3' className='Tilt br5 b--white-10 shadow-5' style={{height: '150px', width: '150px'}}>
            <div className='pa3'>
              <a href='#input'>
                <img src={brain} alt="brain"/>
              </a>
            </div>
        </Tilt>

      </div>
    )
}

export default Logo;