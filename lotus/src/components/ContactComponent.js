import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleBlur = (field) => () => {
        this.setState({ touched: { ...this.state.touched, [field]: true } });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log('Current value is : ' + JSON.stringify(this.state));
        alert(('Current value is : ' + JSON.stringify(this.state)));
        event.preventDefault();
    }

    validate(firstName, lastName, phoneNum, email) {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: ''
        }

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First Name must contain atleast 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First Name must not contain more than 15 characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'last Name must contain atleast 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'last Name must not contain more than 15 characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'Phone number should contain only numbers.';
        }
        if (this.state.touched.email && !email.includes('@')) {
            errors.email = "Email should contain @.";
        }

        return errors;
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
        return (
            <React.Fragment>
                <div className='container' style={{ width: '100%', marginBottom: '100px', marginLeft: '-40px', marginRight: '-40px' }}>
                    <div className='row'>
                        <h2 className='title'>Find Us</h2>
                        <hr />
                        <div className='col-md-9'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6525.344569620411!2d-89.81437382473065!3d35.13985082129588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9c630fcc44b7%3A0xffa884d968f05860!2sShelby%20Farms%20Park%2C%20Memphis%2C%20TN%2038018!5e0!3m2!1sen!2sus!4v1588286762347!5m2!1sen!2sus"
                                width="1000" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false"
                                tabindex="0" title='map'>
                            </iframe>
                        </div>



                        <div className="col-md-3">
                            <h4>Address</h4>
                            <hr id='u' />
                            <p>1234 Main street,<br /> Memphis, TN-38018</p><br />
                            <h6>Hours</h6>
                            <p>Mon - Sun 6.00 am - 8.00 pm</p>
                        </div>



                    </div>





                    <div className='row'>
                        <div className="col-12">
                            <h2>Send us your Feedback</h2>
                            <hr />
                        </div>
                        <div className='col-md-12'>
                            <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginBottom: '90px' }}>
                                <FormGroup row>
                                    <Label htmlFor='firstName' md={2}>First Name</Label>
                                    <Col md={7}>
                                        <Input id='firstName' type='text' name='firstName' placeholder='First Name'
                                            value={this.state.firstName}
                                            onBlur={this.handleBlur('firstName')}
                                            invalid={errors.firstName}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor='lastName' md={2}>Last Name</Label>
                                    <Col md={7}>
                                        <Input id='lastName' type='text' name='lastName' placeholder='Last Name'
                                            value={this.state.lastName}
                                            onBlur={this.handleBlur('lastName')}
                                            invalid={errors.lastName}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Label htmlFor='email' md={2}>Email</Label>
                                    <Col md={7}>
                                        <Input type='email' name='email' placeholder='Email'
                                            value={this.state.email}
                                            onBlur={this.handleBlur('email')}
                                            invalid={errors.email}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Label htmlFor='phoneNum' md={2}>Phone Number</Label>
                                    <Col md={7}>
                                        <Input type='tel' id='phoneNum' name='phoneNum' placeholder='Phone Number'
                                            value={this.state.phoneNum}
                                            onBlur={this.handleBlur('phoneNum')}
                                            invalid={errors.phoneNum}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.phoneNum}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type='checkbox' name='agree' checked={this.state.agree}
                                                    onChange={this.handleInputChange} />{' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <Input type='select' name='contactType'
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='feedback' md={2}>Message</Label>
                                    <Col md={7}>
                                        <Input type='textarea' rows='4' columns='10' id='feedback' name='feedback'
                                            value={this.state.feedback}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Button color='primary' type='submit'>Send Feedback</Button>
                                    </Col>
                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );


    }
}
