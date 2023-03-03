import React, { useState } from "react";
import {styled} from '@mui/material/styles';
import { Grid, Box,Typography } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Tube = styled((props) => (
    <LinearProgress variant="determinate" {...props} />
  ))(({ theme }) => ({
    height: 8,
    width: "100%",
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.colorPrimary,
    },
  }));

export default function Rating() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6">Overall</Typography>
                    <Tube value={50}/>
                    <Typography variant="body2" color="secondary">5.0</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
        </Grid>
    )
}