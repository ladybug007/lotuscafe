import React from 'react';



export default function Carousel(){

return(
<div className ='container'>
        
        <div className='col-md-8 offset-md-2'>
            <div id='homeCarousel' className='carousel slide' data-ride='carousel'>
                <ol className='carousel-indicators'>
                    <li data-target='#homeCarousel' data-slide-to='0' class='active'></li>
                    <li data-target='#homeCarousel' data-slide-to='1'></li>
                    <li data-target='#homeCarousel' data-slide-to='2'></li>
                    <li data-target='#homeCarousel' data-slide-to='3'></li>
                </ol>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='assets\images\scott-c-new.jpg' alt='none'/>
                        <div className='carousel-caption'>
                            <h3>WORK.GROW.INSPIRE</h3>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img className ='d-block w-100' src='assets\images\nathan-dumlao-6VhPY27jdps-unsplash.jpg'alt='none' />
                        <div className ='carousel-caption'>
                            <h3>RELAX.REFRESH.RECHARGE</h3>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='assets/images/workspace-ch.jpg'alt='none' />
                        <div className='carousel-caption'>
                            <h3>OFFICE.SPACE.REDEFINED</h3>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='assets/images/dogs_workplace.jpg'alt='none' />
                        <div className='carousel-caption'>
                            <h3>WE.WELCOME.PETS</h3>
                        </div>
                    </div>

                </div>
                <a className='carousel-control-prev' href={'#homeCarousel'} role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon'></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='carousel-control-next' href={'#homeCarousel'} role='button' data-slide='next'>
                    <span className='carousel-control-next-icon'></span>
                    <span className='sr-only'>Next</span>
                </a>
            </div>

        </div>
    </div>);
    
}