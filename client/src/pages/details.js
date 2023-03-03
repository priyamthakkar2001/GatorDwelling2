import React, { useState } from "react";
import useService from '../services/detailService';
import {Box, Toolbar, Grid, Typography} from '@mui/material';
import '../css/style.css';
import Header from "../components/header";
import Loading from '../components/loading';

export default function Details() {

    const [dwelling, loading] = useService();

    return (
        <Box sx={{padding: 2}}>
            <Toolbar/>
            {loading ? <Loading /> :
                <Header dwelling={dwelling}/>
            }
        </Box>
    )
}