import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export const experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermadiate</small>
              </div>
              
            </article>
            <article className="experience_details">
              
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Git/GitHub</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Intermadiate</small>
              </div>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth'>Intermadiate</small>
              </div>
              
            </article>
          </div>
        </div>
        {/* end of Frontend */}
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
           
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-ligth'>Experience</small>
              </div>
              
            </article>
            
          </div>

        </div>
       </div>
    </section>
  )
}

export default experience