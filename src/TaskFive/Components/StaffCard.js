import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '3px', transform: 'scale(0.8)'}}
  >
    
  </Box>
);

export default function StaffCard()  {

  const getData=JSON.parse(localStorage.getItem('leaveUser'))
// if(getData && "total" === "endDate"-"startDate")
  return (
<>


<div style={{display:"flex",flexDirection:"column",fontSize:"25px",fontWeight:"bold"}}>
      <div>Total</div>
     <div>Pending</div>
     <div>Approved</div>
     <div>Rejected</div>
      </div>
    
    <Card sx={{ minWidth: "275",display:"inline-block" ,margin:"0 auto",marginTop:"30px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,fontWeight:"bold" }} color="text.secondary" gutterBottom>
          Leave for
        </Typography>
        <Typography sx={{ fontSize: 14,fontWeight:"bold" }} color="text.secondary" gutterBottom>
          Number of days
        </Typography>
        <Typography sx={{ fontSize: 14,fontWeight:"bold" }} color="text.secondary" gutterBottom>
          Reason
        </Typography>
         <Typography sx={{ fontSize: 14,fontWeight:"bold" }} color="text.secondary" gutterBottom>
          Status
        </Typography>
      </CardContent>
     
    </Card>
    </>
  );
 
}
