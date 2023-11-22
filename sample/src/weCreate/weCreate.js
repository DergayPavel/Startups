import './weCreate.css';
import React from 'react';
import pageImg from "../images/2.png"

function WeCreate() {
  return (
    <>
        <div className='weCreateInfoBlock'>
            <div className='weCreateLeftBlock'>
                <div className='weCreateName'>
                    We Create Startups.
                </div>
                <div className='weCreateText'>
                    We are startup studio that develops and launches new companies.
                </div>
                <div className='weCreateBtn'>
                    See our works
                </div>
            </div> 
            <img src = {pageImg} alt = "pageimg" className='weCreateOurWorksImg'/>
        </div>
    </>
  ) ;
}

export default WeCreate;