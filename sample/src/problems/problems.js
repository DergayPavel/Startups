import './problems.css';
import Thumb1 from '../images/Thumb1.png'
import Thumb2 from '../images/Thumb2.png'
import message from '../images/message.png'

 function Problems() {
  return (
    <>
        <div className='problems_box'>
            <div className='problems_box-center'>
                <img src={Thumb1} alt='like' className='problems_Thumb'/>
                <div className='problems_box-text'>
                    We love solving problems!
                </div>
                <img src={Thumb2} alt='like' className='problems_Thumb'/>
            </div>
            <div className='problems_box-message'>
              <div className='problems_box-messageTop'>
                <div className='problems_box-message_message'>
                  Hi! I am Ben, your virtual assistant. 
                  How can I make your day better?
                </div>
                <div className='problems_box-message_close'>
                  x
                </div>
              </div>
              <img src={message} alt='like' className='problems_box-message_img'/>
            </div>
        </div>
    </>
  ) ;
}

// function StartupsCreate() {
//     return (
//       <>
//         <div className='problems_box'>
//               <div className='problems_box-center' style={{width:'1066px', height:'135px'}}>
//                 <img src={Thumb1} alt='like' className='problems_Thumb'/>
//                 <div className='problems_box-text' style={{width:'882px', height:'135px'}}>
//                     Startups create a world that actually is better.
//                     Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
//                 </div>
//                 <img src={Thumb2} alt='like' className='problems_Thumb'/>
//             </div>
//         </div>
//       </>
//     ) ;
//   }

export default Problems;