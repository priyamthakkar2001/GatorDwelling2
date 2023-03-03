import React, { useEffect, useState } from "react";
import {FormControl, InputLabel, Select, MenuItem, Grid, Toolbar, Box} from '@mui/material';
import MuiBox from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Filter from "../components/filter";
import DwellingCard from "../components/card";
import useService from '../service';
import Loading from '../components/loading';

const Main = styled((props) => (
	<MuiBox component="main" {...props} />
  ))(({ theme }) => ({
	marginLeft: 284
  }));

export default function Home() {

    const [dwellings, loading] = useService();
    const [sortby, setSortby] = useState("Reviews");

    return (
        <>
            <Filter />
            <Main>
                {loading ? <Loading/> :
                <Grid container>
                    <Grid item xs={12}><Toolbar/></Grid>
                    <Grid item xs={6} sx={{padding: 2}}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box sx={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                                <FormControl size="small">
                                    <InputLabel>Sort By</InputLabel>
                                    <Select
                                        value={sortby}
                                        label="Sort By"
                                        onChange={(e) => setSortby(e.target.value)}
                                    >
                                        <MenuItem value={"Reviews"}>Reviews</MenuItem>
                                        <MenuItem value={"Newest"}>Newest</MenuItem>
                                        <MenuItem value={"Oldest"}>Oldest</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                            {dwellings.map(d => <Grid item xs={6}><DwellingCard dwelling={d}/></Grid>)}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{backgroundColor: "blue", width: "100%", height: "100%"}}>
                            Map goes here    
                        </div>
                    </Grid>
                </Grid>
                }
            </Main>
        </>
    )
}