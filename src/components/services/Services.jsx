import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services_container'>

                <article className='service'>
                    <div className="service_head">
                       <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Identify the brand and the user </p> 
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Research on customers. </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Examine what you discovered. </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Make prototypes, wireframes, or site maps. </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Deliver the design answer to the customer or business. </p>
                        </li>
                    </ul>
                </article>
                {/* en of ui/ux design */}


                <article className='service'>
                    <div className="service_head">
                        <h3>Web Developement</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Professional website </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Professional email </p>
                        </li>
                        
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Free Domain Name </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>SSL security certificate </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>3 months of free support </p>
                        </li>
                    </ul>
                </article>
                {/* WEB DEVELOPEMENT */}

                <article className='service'>
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Creation of logos </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Creation of business cards </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>creation of facebook pro pages </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Infographics </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>3D imaging </p>
                        </li>
                    </ul>
                </article>
                {/* content creation */}


            </div>

        </section>
    )
}
export default services
