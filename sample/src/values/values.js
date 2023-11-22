import './values.css';
import light from '../images/light.png'

function Values() {
  return (
    <>  
        <div className='valuesBox'>
            <div className ='valuesBox_top'>
                <div className='valuesBox_top-left'>
                    Our core values
                </div>
                <div className='valuesBox_top-right'>
                    <img src={light} alt='light' className='valuesBox_img'/>
                </div>
            </div>
            <div className='valueBox_bot'>
                <div className='valueBox_bot-left'>
                    <div className='valueBox_bot-name'>
                        01. Innovation
                    </div>
                    <div className='valueBox_bot-line'></div>
                    <div className='valueBox_bot-text'>
                        Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.
                    </div>
                </div>
                <div className='valueBox_bot-right'>
                    <div className='valueBox_bot-name'>
                        02. People
                    </div>
                    <div className='valueBox_bot-line'></div>
                    <div className='valueBox_bot-text'>
                        Talent is what enable us to create great companies.                    
                    </div>
                </div>
            </div>
        </div>
    </>
  ) ;
}

export default Values;