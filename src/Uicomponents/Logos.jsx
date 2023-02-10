import React, {useState} from 'react';
import {FaSlack} from 'react-icons/fa'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
import {SiEnvato} from 'react-icons/si'
import slack from '../img/logos/slack.png'
import geekWire from '../img/logos/geekWire.png'
import forbes from '../img/logos/forbes.png'
import usaToday from '../img/logos/usaToday.png'
import envato from '../img/logos/envato.png'


const Logos = () => {


    return (
        <div className='logos'>
            <div className='slider'>
                <div className='slide-track'>

                    <div className='slide'>
                        <img className='imgLogo' src={slack} alt="" />
                    </div>
                    <div className='slide'>
                        <img className='imgLogo' src={geekWire} alt="" />
                    </div>
                    <div className='slide'>
                        <img className='imgLogo' src={forbes} alt="" />
                    </div>
                    <div className='slide'>
                        <img className='imgLogo' src={usaToday} alt="" />
                    </div>
                    <div className='slide'>
                        <img className='imgLogo' src={envato} alt="" />
                    </div>

                    {/* doubled */}

                    <div className='slide'>
                        <img src={slack} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={geekWire} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={forbes} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={usaToday} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={envato} alt="" />
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default Logos;