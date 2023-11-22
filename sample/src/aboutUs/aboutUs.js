import './aboutUs.css';
import React from 'react';
import que from '../images/que.png'



function AboutUs() {
  return (
    <>
        <div className='aboutUsBlock'>
            <div className='aboutUsBlock_TopBox'>
                <div className='aboutUsBlock_TopBox-left'>
                    <div className='aboutUsBlock_TopBox-leftName'>
                        Who we are
                    </div>
                    <div className='aboutUsBlock_TopBox-leftText'>
                        We create products that have innovation and technology at their core. We value working with talented people that understand the possibilities of today.
                    </div>
                </div>
                <div className='aboutUsBlock_TopBox-right'>
                    <img src = {que} alt = "que" className='aboutUsQue'/>
                </div>
            </div> 
            <div className='aboutUsBlock_BotBox'>
                <div className='aboutUsBlock_BotBox-infoBox'>
                    <div className='aboutUsBlock_BotBox-infoBox_Number'>
                        01
                    </div>
                    <div className='aboutUsBlock_BotBox-infoBox_Line'></div>
                    <div className='aboutUsBlock_BotBox-infoBox_Info'>
                        We develop innovative products, systems and services
                    </div>
                </div>
                <div className='aboutUsBlock_BotBox-infoBox'>
                    <div className='aboutUsBlock_BotBox-infoBox_Number'>
                        02
                    </div>
                    <div className='aboutUsBlock_BotBox-infoBox_Line'></div>
                    <div className='aboutUsBlock_BotBox-infoBox_Info'>
                        Next we build teams to scale them into companies
                    </div>
                </div>
                <div className='aboutUsBlock_BotBox-infoBox'>
                    <div className='aboutUsBlock_BotBox-infoBox_Number'>
                        03
                    </div>
                    <div className='aboutUsBlock_BotBox-infoBox_Line'></div>
                    <div className='aboutUsBlock_BotBox-infoBox_Info'>
                        Each startup solving one problem at a time
                    </div>
                </div>
            </div>
        </div>
    </>
  ) ;
}

export default AboutUs;