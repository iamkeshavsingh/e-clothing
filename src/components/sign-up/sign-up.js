import React, { Component } from 'react';

import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, storeUser } from '../../firebase/firebase.util';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password and confirmPassword dosn't match");
            return;
        }

        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            await storeUser(user.user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
        catch (error) {
            console.log(error);
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
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up With your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput onChange={this.handleChange} type="text" name="displayName" value={displayName} label="Display Name" required />
                    <FormInput onChange={this.handleChange} type="email" name="email" value={email} label="Email" required />
                    <FormInput onChange={this.handleChange} type="password" name="password" value={password} label="Password" required />
                    <FormInput onChange={this.handleChange} type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" required />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
