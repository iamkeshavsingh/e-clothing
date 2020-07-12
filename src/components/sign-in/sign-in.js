import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange(e) {
        var { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} value={this.state.email} required type="email" label="Email" />

                    <FormInput name="password" handleChange={this.handleChange} value={this.state.password} required type="password" label="Password" />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}


export default SignIn;