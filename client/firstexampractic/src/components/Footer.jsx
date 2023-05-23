import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Footer() {
  return (
    <>
      <footer style={{bottom:"0", width:"100%", backgroundColor: "#04091E", padding: "50px",display:"flex",gap:"60px",alignItems:"center",justifyContent:"space-between" }}>
        <div className='foot1'>
          <h3 style={{ color: 'white' }}>About Us</h3>
          <div style={{marginTop:"20px" }} >
            <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
            <p style={{ color: "gray" }}>eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
          <div style={{marginTop:"20px"}}>
            <p style={{ color: "gray" }}>Copyright ©2023 All rights reserved | This template is made with</p>
            <p  style={{ color: "gray",lineHeight:"1.5" }}><span style={{ color: "orange" }}>&#10084;</span>by <span style={{ color: "orange" }}>Colorlib</span></p>
          </div>
        </div>

        <div className='foot2'>
          <h3 style={{ color: 'white' }}>Newsletter</h3>
          <p style={{marginTop:"20px", color: "gray" }}>Stay update with our latest</p>
          <div style={{marginTop:"20px", display: "flex", gap: "10px" }}>
            <TextField style={{backgroundColor:"white"}} id="outlined-uncontrolled" />
            <Button style={{padding:"5px 50px"}} variant='contained' color='warning'>Add</Button>
          </div>
        </div>

        <div className='foot3'>
        <h3 style={{ color: 'white' }}>Follow Us</h3>
        <p style={{marginTop:"15px", color: "gray" }}>Let us be social</p>
        <div style={{marginTop:"15px",display:"flex",gap:"20px",fontSize:"20px"}}>
        <i class="fa-brands fa-facebook footicon"></i>
        <i class="fa-brands fa-twitter footicon"></i>
        <i class="fa-solid fa-globe footicon"></i>
        <i class="fa-brands fa-behance footicon"></i>
        </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
