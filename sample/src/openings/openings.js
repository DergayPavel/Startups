import ImgOpen from '../images/openings1.png'
import ImgOpen2 from '../images/openings2.png'
import './openings.css'

function Openings() {
    return (
        <>
            <div className = 'openingsBox'>
                <img className = 'openingsBox-img' src = {ImgOpen} alt='ImgOpen'/>
                <div className = 'openingsBox-info'>
                    <div className = 'openingsBox-info_name'>
                        We are hiring!
                    </div>
                    <div className = 'openingsBox-info_text'>
                        We're always looking for talented people to join and help build our startups. Check out our current openings
                    </div>
                    <div className = 'openingsBox-info_btn'>
                        See current openings
                    </div>
                </div>
                <img className = 'openingsBox-img' src = {ImgOpen2} alt='ImgOpen2'/>
            </div>
        </>
    ) ;
  }

export default Openings;