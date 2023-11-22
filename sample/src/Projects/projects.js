import './projects.css';
import project1 from '../images/Project1.png'
import project2 from '../images/Project2.png'
import project3 from '../images/Project3.png'
import project4 from '../images/Project4.png'

function Projects() {
  return (
    <>
        <div className='projectsBox'>
            <div className='projectsBox_name'>
                Our works
            </div>
            <div className ='projectsBox_projects'>
                <div className='projectsBox_project'>
                    <div style={{color:"#A9BC87"}} className='projectsBox_project-name' >
                        Tolq
                    </div>
                    <div className='projectsBox_project-text'>
                        Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.
                    </div>
                    <div className='projectsBox_project-image'>
                        <img src={project1} alt='project1'/>
                    </div>
                    <div className='projectsBox_project-btn'>
                        More
                    </div>
                </div>   

                <div className='projectsBox_project'>
                    <div style={{color:"#8BB5C9"}} className='projectsBox_project-name'>
                        Feedback Labs
                    </div>
                    <div className='projectsBox_project-text'>
                        Feedback Labs turns feedback into actionable insights for your team.
                    </div>
                    <div className='projectsBox_project-image'>
                        <img src={project2} alt='project2'/>
                    </div>
                    <div className='projectsBox_project-btn'>
                        More
                    </div>
                </div>  

                <div className='projectsBox_project'>
                    <div style={{color:"#00A0B6"}} className='projectsBox_project-name'>
                        Codekeeper
                    </div>
                    <div className='projectsBox_project-text'>
                        Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.
                    </div>
                    <div className='projectsBox_project-image'>
                        <img src={project3} alt='project3'/>
                    </div>
                    <div className='projectsBox_project-btn'>
                        More
                    </div>
                </div>

                <div className='projectsBox_project'>
                    <div style={{color:'#8B60D3'}} className='projectsBox_project-name'>
                        LegalSite
                    </div>
                    <div className='projectsBox_project-text'>
                        Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.
                    </div>
                    <div className='projectsBox_project-image'>
                        <img src={project4} alt='project4'/>
                    </div>
                    <div className='projectsBox_project-btn'>
                        More
                    </div>
                </div>   
            </div>
        </div>
    </>
  ) ;
}

export default Projects;