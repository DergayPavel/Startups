import React from 'react';
import logoFooter from '../images/logoFooter.png'
import twitter from '../images/Twitter.png'
import linkedin from '../images/Linkedin.png'
import instagram from '../images/instagram.png'
import './footer.css'

function Footer() {
    return(
      <>
        <div className='footerBox'>
            <div className='footerBox_conteiner'>
                <img src={logoFooter} alt='logoFooter' className='footerBox_conteiner-logo'/>
                <div className='footerBox_conteiner-comment'>
                    © 2020 Startupz. 
                    All rights reserved. 
                </div>
            </div>

            <div className='footerBox_conteiner'>
                <div className='footerBox_conteiner-name'>
                    Companies
                </div>
                <div className='footerBox_conteiner-text'>
                    Tolq
                </div>
                <div className='footerBox_conteiner-text'>
                    LegalSite
                </div>
                <div className='footerBox_conteiner-text'>
                    Codekeeper
                </div>
                <div className='footerBox_conteiner-text'>
                    Feedback Labs
                </div>
            </div>

            <div className='footerBox_conteiner'>
                <div className='footerBox_conteiner-name'>
                    Contact
                </div>
                <div style={{width:'328px',marginBottom:'11px', color:" #939393", lineHeight:'24px'}} className='footerBox_conteiner-text'>
                    World Trade Center - The Hague
                    Prinses Margrietplantsoen 33
                    <br/>2595 AM The Hague
                    <br/>The Netherlands
                </div>
                <div style={{lineHeight:'30px', width:'auto'}} className='footerBox_conteiner-text'>
                    Send us an email
                </div>
            </div>

            <div className='footerBox_conteiner'>
                <div className='footerBox_conteiner-name'>
                    Follow us
                </div>
                <div className='ImgBox'>
                  <img src={twitter} alt='twitter' className='footerBox_conteiner-link'/>
                    <img src={linkedin} alt='LinkedIn' className='footerBox_conteiner-link'/>
                    <img src={instagram} alt='instagram' className='footerBox_conteiner-link'/>
                </div>
            </div>
        </div>
      </>
    ) ;
  }
  
  export default Footer;