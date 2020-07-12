import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

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

    async handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }
        catch (e) {

        }

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

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn type="button" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;