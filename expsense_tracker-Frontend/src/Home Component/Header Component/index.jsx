import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

function HeaderComponent() {
    return (
        <header>
            <nav>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Expense Tracker
                        </Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit" disabled>Disabled</Button>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>
    );
}

export default HeaderComponent;