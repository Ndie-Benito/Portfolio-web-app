import React from 'react'
import './portofolio.css'
import img1 from '../../assets/logo/1.jpg'
import img2 from '../../assets/logo/2.jpg'
import img3 from '../../assets/logo/3.png'
import img4 from '../../assets/logo/4.jpg'
import img5 from '../../assets/logo/5.jpeg'
import img6 from '../../assets/logo/6.jpg'

const Portofolio = () => {
    return (
        <section id="portfolio">
            <h5> My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>Natural Food Mall Garden</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://garden.naturalfoodmall.cm/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img2} alt="" />
                    </div>

                    <h3>Netrac Sarl</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://netracsarl.naturalfoodmall.cm/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img5} alt="" />
                    </div>

                    <h3>Dflogistique</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://dflogistique.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img4} alt="" />
                    </div>

                    <h3>Casco Sarl</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://cascosarl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img3} alt="" />
                    </div>

                    <h3>Global Freightage Services</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://www.globalfreightageservices.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img6} alt="" />
                    </div>

                    <h3>Mbogning Group</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
                        <a href="https://naturalfoodmall.cm/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
               
            
            </div> 

        </section>
    )
}
export default Portofolio