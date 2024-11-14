import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Chart from './Chart';
import FeaturedInfo from './featuredInfo/FeaturedInfo';
import ListUsers from './lisUsers/ListUsers';
export default function Dashboard() {
    return (
        <div className="container">
            <Grid container spacing={3}>
                <Grid size={4}>
                    menu
                </Grid>
                <Grid size={8}>
                    <Grid size={8}>
                        <FeaturedInfo />
                    </Grid>
                    <Grid size={8}>
                        <Chart />
                    </Grid>
                    <Grid size={8}>
                        <ListUsers />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
} 
