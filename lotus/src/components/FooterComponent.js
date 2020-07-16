import React from 'react';
import{Link} from 'react-router-dom';

export default function Footer() {

    return (

        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8 social'>
                        <a href="http://facebook.com/" >
                            <i className="fa fa-facebook size"></i></a>
                        <a href="http://twitter.com/" >
                            <i className="fa fa-twitter size"></i></a>
                        <a href="http://instagram.com/"><i className="fa fa-instagram size"></i></a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 col-sm-9 footer'>
                    <ul className="list-unstyled">
                            <li><Link to='/home'>HOME</Link></li>
                            <li><Link to='/home'>MEMBERSHIP</Link></li>
                            <li><Link to='/cafe'>CAFE</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='row address' style={{ display: 'inline', whiteSpace: 'nowrap'}}>


                    <div style={{ display: 'inline', marginRight:'10px', marginLeft: '150px' }}>
                        <img src="assets/images/lotus-white.png" height='50px' width='50px' alt='none' />
                    </div>

                    <div style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                    Lotus Cowork Cafe 1234, Main street, Memphis,
                        TN-38013.
                        Ph- 999-999-9999
                    </div>


                </div>

            </div>
        </footer>


    );

}