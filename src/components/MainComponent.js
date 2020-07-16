import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import NavBar from './Navigator';
import Footer from './FooterComponent';
import Card from './CardComponent';
import MemberCard from './MemberComponent';
import Amenities from './AmenitiesComponent';
import Contact from './ContactComponent';
import Cafe from './CafeComponent';
import { MEMBERS } from '../shared/members';
import {CARDS} from '../shared/cards';
import { AMENITIES } from '../shared/amenities';





export default class Main extends Component{
   
    constructor(props){
         super(props);
         this.state ={
            cards:CARDS,
             members:MEMBERS,
             amenities: AMENITIES 

         }
    }


    render(){
        const HomePage = ()=> {
            return(
                <React.Fragment>
                 <Header/>
                 <Card cards = {this.state.cards}/>
                <MemberCard members = {this.state.members}/>
                 <Amenities amenities = {this.state.amenities}/>
                 </React.Fragment>
                 
            );
        }
        return(
        <div className="App">
        <NavBar/>
        <Switch>
        
          <Route exact path='/home' component={HomePage} />
        
          <Route path='/contact' component={Contact} />
          <Route path='/cafe' component={Cafe}/>
          <Redirect to='/home' />
          
        </Switch>
        <Footer />
        </div>);


    }

}