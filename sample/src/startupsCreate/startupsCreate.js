// import './problems.css';
import Thumb1 from '../images/Thumb1.png'
import Thumb2 from '../images/Thumb2.png'

function StartupsCreate() {
    return (
      <>
        <div className='problems_box' style={{width:'1066px', height:'135px', position:'static'}}>
              <div className='problems_box-center' style={{width:'1066px', height:'135px'}}>
                <img src={Thumb1} alt='like' className='problems_Thumb'/>
                <div className='problems_box-text' style={{width:'882px', height:'135px'}}>
                    Startups create a world that actually is better.
                    Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
                </div>
                <img src={Thumb2} alt='like' className='problems_Thumb'/>
            </div>
        </div>
      </>
    ) ;
  }

export default StartupsCreate;