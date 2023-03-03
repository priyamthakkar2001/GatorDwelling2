import React, { useState } from "react";
import useService from '../services/detailService';
import {Box, Toolbar, Grid, Typography, OutlinedInput, InputAdornment, Button, FormControl,
    Paper, InputLabel, Select, MenuItem,} from '@mui/material';
import '../css/style.css';
import Header from "../components/header";
import Loading from '../components/loading';
import WriteIcon from '@mui/icons-material/EditRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import Contact from "../components/contact";

export default function Details() {

    const [dwelling, loading] = useService();
    const [sortby, setSortby] = useState("Newest First");
    const [score, setScore] = useState("All Ratings");

    return (
        <Box sx={{padding: 2}}>
            <Toolbar/>
            {loading ? <Loading /> :
                <>
                    <Header dwelling={dwelling}/>
                    <Grid container spacing={3} sx={{paddingLeft: 15, paddingRight: 15, paddingTop: 3}}>
                        <Grid item xs={8}>
                            <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
                                <Button size="large" sx={{color: "white.main", height: 52, fontSize: 13}} variant="contained" startIcon={<WriteIcon />}>
                                    Write a Review
                                </Button>
                                <FormControl>
                                    <InputLabel>Sort By</InputLabel>
                                    <Select
                                        value={sortby}
                                        label="Sort By"
                                        onChange={(e) => setSortby(e.target.value)}
                                    >
                                        <MenuItem value={"Newest First"}>Newest First</MenuItem>
                                        <MenuItem value={"Highest Rating"}>Highest Rating</MenuItem>
                                        <MenuItem value={"Lowest Rating"}>Lowest Rating</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>Ratings</InputLabel>
                                    <Select
                                        value={score}
                                        label="Ratings"
                                        onChange={(e) => setScore(e.target.value)}
                                    >
                                        <MenuItem value={"All Ratings"}>All Ratings</MenuItem>
                                        <MenuItem value={"Low Ratings"}>Low Ratings</MenuItem>
                                        <MenuItem value={"High Ratings"}>High Ratings</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel>Search</InputLabel>
                                    <OutlinedInput
                                        label="Search"
                                        endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Contact id={dwelling.id} phone={dwelling.phone} website={dwelling.website} hours={dwelling.hours}/>
                        </Grid>
                    </Grid>
                </>
            }
        </Box>
    )
}