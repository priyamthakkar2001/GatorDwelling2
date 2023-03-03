import * as React from 'react';
import { useState } from 'react';
import {Drawer, Toolbar, AccordionSummary, Box, AccordionDetails, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/AddRounded';
import MinusIcon from '@mui/icons-material/RemoveRounded';
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';

const drawerWidth = 284;

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
	'&:before': {
	  display: 'none',
	},
  }));

export default function Filter() {

	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);
	const [open7, setOpen7] = useState(false);
	const [open8, setOpen8] = useState(false);
	const [open9, setOpen9] = useState(false);
	const [open10, setOpen10] = useState(false);
	const [open11, setOpen11] = useState(false);

  	return (
      	<Drawer
			sx={{
			width: drawerWidth,
			flexShrink: 0,
			'& .MuiDrawer-paper': {
				width: drawerWidth,
				boxSizing: 'border-box',
			},
			}}
			variant="permanent"
			anchor="left"
		>
        	<Toolbar />
        	<Box sx={{padding: 2}}>
				<Typography variant="h3" fontSize={18} fontWeight="bold" sx={{marginBottom: "3px"}}>Find Your Dream Home</Typography>
				<Typography variant="body1" fontSize={12}>Over 200 homes available</Typography>
				<Accordion expanded={open1} onChange={() => setOpen1(!open1)}>
					<AccordionSummary expandIcon={open1 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Price Range</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open2} onChange={() => setOpen2(!open2)}>
					<AccordionSummary expandIcon={open2 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Rental Type</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open3} onChange={() => setOpen3(!open3)}>
					<AccordionSummary expandIcon={open3 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Beds/Baths</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open4} onChange={() => setOpen4(!open4)}>
					<AccordionSummary expandIcon={open4 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Location</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open5} onChange={() => setOpen5(!open5)}>
					<AccordionSummary expandIcon={open5 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Features</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open6} onChange={() => setOpen6(!open6)}>
					<AccordionSummary expandIcon={open6 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Amenities</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open7} onChange={() => setOpen7(!open7)}>
					<AccordionSummary expandIcon={open7 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Transportation</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open8} onChange={() => setOpen8(!open8)}>
					<AccordionSummary expandIcon={open8 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Pet Policy</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open9} onChange={() => setOpen9(!open9)}>
					<AccordionSummary expandIcon={open9 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Safety</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open10} onChange={() => setOpen10(!open10)}>
					<AccordionSummary expandIcon={open10 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Leasing Period</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={open11} onChange={() => setOpen11(!open11)}>
					<AccordionSummary expandIcon={open11 ? <MinusIcon /> : <AddIcon/>}>
						<Typography variant="h6" fontSize={16}>Ratings</Typography>
					</AccordionSummary>
					<AccordionDetails>
						
					</AccordionDetails>
				</Accordion>
		</Box>
      </Drawer>
  );
}