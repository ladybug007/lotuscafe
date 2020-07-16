import React from 'react';


function Slider() {

    return (
        <div className='container-slider'style={{backgroundImage: "url('assets/images/slider.jpeg')"}}>

            <div className='slider'>
                <h4>Not ready to join but want to be in the know? Stay connected with our Newsletter</h4>

                <form className='col-9 offset-md-1'>
                    <div className='form-group row'>
                        <div className='col-md-4'>
                            <label htmlFor="fname"></label>
                            <input className=' form-control' type='text' id='fname' name='firstName' placeholder='First Name' />
                        </div>
                        <div class='col-md-4'>
                            <label htmlFor="lname"></label>
                            <input className='form-control' type='text' id='lname' name='lastName' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-md-8'>
                            <label htmlFor="email"></label>
                            <input className='form-control' type='email' id='email' name='email' placeholder='Email' />
                        </div>
                    </div>
                    <div className='form-group row '>
                        <button type='submit' className='btn btn-lg btn-primary offset-md-3'>SUBSCRIBE</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default function Amenities(props){
    const amenities = props.amenities.map(amenity => {
        
            return(
               <div className='col col-sm-3 features'>
                <div className='icon'>
                    <span><i className={amenity.icon}></i>
                        <h6>{amenity.text}</h6>
                    </span>
                </div>
            </div>
            );
        })
    
   
    return (
            <React.Fragment>
                <div className='title'>
                    <h3><strong>AMENITIES</strong></h3>
                    <hr />
                </div>

                <div className='container'>
                    <div className='row'>
                    {amenities}
                </div>
                </div>
                <Slider />
            </React.Fragment>);

    }        






