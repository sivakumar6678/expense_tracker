import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper, Collapse } from '@mui/material';
import './Login.css';

function Login_Register() {
    const [loginActive, setLoginActive] = useState(false);
    const [signupActive, setSignupActive] = useState(false);
    const [forgotPasswordActive, setForgotPasswordActive] = useState(false);
    const [signupFormData, setSignupFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordsMatch: true,
    });
    const [resetPasswordFormData, setResetPasswordFormData] = useState({
        email: '',
        newPassword: '',
        confirmNewPassword: '',
        passwordsMatch: true,
    });

    const handleLoginClick = () => {
        setLoginActive(!loginActive);
        setSignupActive(false);
        setForgotPasswordActive(false);
    };

    const handleSignupClick = () => {
        setSignupActive(!signupActive);
        setLoginActive(false);
        setForgotPasswordActive(false);
    };

    const handleForgotPasswordClick = () => {
        setForgotPasswordActive(!forgotPasswordActive);
        setLoginActive(false);
        setSignupActive(false);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log('Login form submitted');
    };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;
        setSignupFormData({
            ...signupFormData,
            [name]: value,
        });
    };

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = signupFormData;
        if (password !== confirmPassword) {
            setSignupFormData({ ...signupFormData, passwordsMatch: false });
            return;
        }
        console.log('Signup form submitted');
        setSignupFormData({
            username: '',
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordsMatch: true,
        });
    };

    const handleResetPasswordChange = (event) => {
        const { name, value } = event.target;
        setResetPasswordFormData({
            ...resetPasswordFormData,
            [name]: value,
        });
    };

    const handleResetPasswordSubmit = (event) => {
        event.preventDefault();
        const { newPassword, confirmNewPassword } = resetPasswordFormData;
        if (newPassword !== confirmNewPassword) {
            setResetPasswordFormData({ ...resetPasswordFormData, passwordsMatch: false });
            return;
        }
        console.log('Reset password form submitted');
        setResetPasswordFormData({
            email: '',
            newPassword: '',
            confirmNewPassword: '',
            passwordsMatch: true,
        });
    };

    return (
        <Container style={{ maxWidth: '100%' }} className="login-register-container">
            <Box display="flex" justifyContent="center" mb={2}>
                <Button variant="contained" color="success" onClick={handleLoginClick}>Log In</Button>
                <Button variant="contained" color="success" onClick={handleSignupClick} sx={{ ml: 2 }}>Sign Up</Button>
            </Box>
            
            <Collapse in={loginActive}>
                <Paper component="form" onSubmit={handleLoginSubmit} className="form" sx={{ p: 2 }}>
                    <Typography variant="h5">Login</Typography>
                    <TextField type="email" label="Email" fullWidth required margin="dense" />
                    <TextField type="password" label="Password" fullWidth required margin="dense" />
                    <Button type="submit" variant="contained" color="secondary" fullWidth>Login</Button>
                    <Button type="button" onClick={handleForgotPasswordClick} fullWidth sx={{ mt: 1 }} color="secondary">Forgot Password?</Button>
                </Paper>
            </Collapse>

            <Collapse in={signupActive}>
                <Paper component="form" onSubmit={handleSignupSubmit} className="form" sx={{ p: 2 }}>
                    <Typography variant="h5">Sign Up</Typography>
                    <TextField name="username" label="Username" fullWidth onChange={handleSignupChange} margin="dense" />
                    <TextField name="fullName" label="Full Name" fullWidth onChange={handleSignupChange} margin="dense" />
                    <TextField name="email" label="Email" type="email" fullWidth onChange={handleSignupChange} margin="dense" />
                    <TextField name="password" label="Password" type="password" fullWidth onChange={handleSignupChange} margin="dense" />
                    <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth onChange={handleSignupChange} margin="dense" />
                    {!signupFormData.passwordsMatch && <Typography color="error">Passwords do not match</Typography>}
                    <Button type="submit" variant="contained" color="secondary" fullWidth>Register</Button>
                </Paper>
            </Collapse>

            <Collapse in={forgotPasswordActive}>
                <Paper component="form" onSubmit={handleResetPasswordSubmit} className="form" sx={{ p: 2 }}>
                    <Typography variant="h5">Reset Password</Typography>
                    <TextField name="email" label="Email" type="email" fullWidth onChange={handleResetPasswordChange} margin="dense" />
                    <TextField name="newPassword" label="New Password" type="password" fullWidth onChange={handleResetPasswordChange} margin="dense" />
                    <TextField name="confirmNewPassword" label="Confirm New Password" type="password" fullWidth onChange={handleResetPasswordChange} margin="dense" />
                    {!resetPasswordFormData.passwordsMatch && <Typography color="error">Passwords do not match</Typography>}
                    <Button type="submit" variant="contained" color="secondary" fullWidth>Reset Password</Button>
                </Paper>
            </Collapse>
        </Container>
    );
}

export default Login_Register;
