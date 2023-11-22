import './form.css';
import React from 'react';
import Subtract from '../images/Subtract.png'


function Form() {
  return (
    <>
        <div className='formBox'>
            <div className='formBox-info'>
                <div className='formBox-info_name'>
                    Are you ready <br/> to board this rocket ship?
                </div>
                <div className='formBox-info_text'>
                    Share your excitement with us.
                </div>
                <div className='formBox-info_form'>
                    <input type='text' className='form_name'/>
                    <input type="email" className='form_email'/>
                    <input type="text" className='form_message'/>
                    <div className='form_btn'>
                        Shoot us a message
                    </div>
                </div>
            </div>
            <img src={Subtract} alt='Subtract' className='formBox_img'/>
        </div>
    </>
  ) ;
}

export default Form;