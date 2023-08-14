
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import StaffCard from "../Components/StaffCard";

function StaffDashboard({ StaffCard }) {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [showModal, setShowModal] = useState(false);

  const [statusObj, setStatusObj] = useState({ status: 'pending' });


  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    key:uuidv4(),
    status:""
    

  })
  const [modal, setModal] = useState([])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const signInPerson = JSON.parse(window.localStorage.getItem('signIn'));

  const registerPerson = JSON.parse(window.localStorage.getItem('register'));

const logPerson = registerPerson === signInPerson;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }


  const handleCloseModal = () => {
    setShowModal(false);
  };

  

  const handleClick2 = (e) => {
    e.preventDefault();
    // setData([...modal,data])

    setData({
      startDate: "",
      endDate: "",
      reason: "",
      status: "pending"
    })
    const updatedData = [...modal, data]

   const leaveUser = localStorage.setItem("leaveData", JSON.stringify(updatedData));

   
  
    setModal([...modal, data])
// const getData=localStorage.getItem(JSON.parse(leaveUser))

    navigate("StaffCard")

  }


  const handleClick = () => {

    setOpen(true)


  }
  return (
    <>
      <Button variant='contained' onClick={handleClick}>Apply Leave</Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <form onSubmit={handleSubmit}> */}
          <label style={{ fontSize: "25px", fontWeight: "bold" }}>Leave Details</label>
          <div>
            <label style={{ fontWeight: "bold", flexDirection: "row" }}>From:</label>
          </div>
          <input type="date" value={data.startDate} name='startDate' onChange={handleChange} ></input>
          <div>
            <label style={{ fontWeight: "bold", flexDirection: "row" }}>To:</label> </div>
          <input type="date" value={data.endDate} name='endDate' onChange={handleChange} />
          <div>
            <label style={{ fontWeight: "bold" }}>Reason</label>
          </div>
          <textarea style={{ border: "1.5px solid gray" }} name='reason' value={data.reason} onChange={handleChange} />

         
          <Button onClick={handleClick2} variant='contained' style={{ marginLeft: "30px", border: "black" }} type="submit">Submit</Button>

          {/* </form> */}
        </Box>
      </Modal>


    </>
  )
}

export default StaffDashboard





