import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Header.css'
function HeaderComponent() {
    return (
        <header  >
            <nav>
                <AppBar id='header' color='none' >
                    <Toolbar>
                        <Typography id='brand' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Welcome to SpendSmart
                        </Typography>
                        <Button id='login' 
                                color="secondary" 
                                size='medium'
                                >Login</Button>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>
    );
}
export default HeaderComponent;