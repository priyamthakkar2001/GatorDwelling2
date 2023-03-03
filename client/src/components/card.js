import React, { useState } from "react";
import {Box, Typography} from '@mui/material';

export default function DwellingCard() {
    return (
        <Box>
            <img src="alight.png" width={225} height={125} style={{borderRadius: 7}}/>
            <Typography fontSize={14} sx={{marginTop: "2px"}}>Alight Gainesville</Typography>
        </Box>
    )
}