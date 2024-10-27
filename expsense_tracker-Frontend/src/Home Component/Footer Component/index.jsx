import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

function FooterComponent() {
    return (
        <footer>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                        © 2024 Expense Tracker
                    </Typography>
                    <Link href="https://github.com/your-github-username" color="inherit" target="_blank" rel="noopener">
                        GitHub
                    </Link>
                </Toolbar>
            </AppBar>
        </footer>
    );
}

export default FooterComponent;