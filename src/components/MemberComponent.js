import React,{Component} from 'react';


export default class MemberCard extends Component {
    

    render() {
        return (
            <React.Fragment>
                <div className='title'>
                    <h3 id='member'><strong>MEMBERSHIP PLANS</strong></h3>
                    <hr />
                </div>
                <div className='member'>
                    {this.props.members.map(member => {
                        return (
                            <React.Fragment>
                                <div className='row'>
                                    <div className='card'>
                                        <div className='card-content'>
                                            <div className='d-flex'>
                                                <h5><strong>{member.title}</strong></h5>
                                                <h6><b>{member.price}</b></h6>
                                            </div>
                                            <p>{member.description}</p>
                                        </div>
                                    </div>
                                </div>
                                </React.Fragment>);
                                
                    })
                    }    
         
            
            

                </div>
                
                </React.Fragment>
                
           
            
        );
    }
}
