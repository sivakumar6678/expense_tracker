import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import './Dashboard.css';

function Dashboard() {
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     // Fetch user data after login
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await fetch('http://127.0.0.1:5000/api/user-data', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     // Include any necessary authentication headers here
    //                 },
    //             });
    //             const data = await response.json();
    //             if (response.ok) {
    //                 setUserData(data);
    //             } else {
    //                 console.error('Error fetching user data:', data.error);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    // if (!userData) {
    //     return <Typography>Loading...</Typography>;
    // }

    return (
        <h2>hellow</h2>

        // <Container>
        //     <Box my={4}>
        //         <Typography variant="h4" component="h1" gutterBottom>
        //             Welcome, {userData.fullName}
        //         </Typography>
        //         <Paper elevation={3}>
        //             <Box p={2}>
        //                 <Typography variant="h6">Your Dashboard</Typography>
        //                 <Grid container spacing={2}>
        //                     <Grid item xs={12} sm={6} md={4}>
        //                         <Paper elevation={1}>
        //                             <Box p={2}>
        //                                 <Typography variant="body1">Account Balance: ${userData.accountBalance}</Typography>
        //                             </Box>
        //                         </Paper>
        //                     </Grid>
        //                     <Grid item xs={12} sm={6} md={4}>
        //                         <Paper elevation={1}>
        //                             <Box p={2}>
        //                                 <Typography variant="body1">Recent Transactions</Typography>
        //                                 <ul>
        //                                     {userData.recentTransactions.map((transaction, index) => (
        //                                         <li key={index}>{transaction.description}: ${transaction.amount}</li>
        //                                     ))}
        //                                 </ul>
        //                             </Box>
        //                         </Paper>
        //                     </Grid>
        //                     {/* Add more dashboard items here */}
        //                 </Grid>
        //             </Box>
        //         </Paper>
        //     </Box>
        // </Container>
    );
}

export default Dashboard;