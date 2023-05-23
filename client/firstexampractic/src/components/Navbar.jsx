import React from 'react'
import "../../src/App.css"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
function Navbar() {
  return (
     <>
     <header>
          <nav>
          <div className="nav">
          <img src="https://preview.colorlib.com/theme/security/img/logo.png.webp" alt="navimage" />
          </div>
          <div>
               <ul style={{}}>
               <Link to = '/' ><Button style={{color:"white"}} variant="text">Home</Button></Link>
               <Link to = '/add' ><Button style={{color:"white"}} variant="text">Add</Button></Link>
               <Button style={{color:"white"}} variant="text">About Us</Button>
               <Button style={{color:"white"}} variant="text">Service</Button>
               <Button style={{color:"white"}} variant="text">Team</Button>
               <Button style={{color:"white"}} variant="text">Price</Button>
               <Button style={{color:"white"}} variant="text">Blog</Button>
               <Button style={{color:"white"}} variant="text">Contact</Button>
               </ul>
          </div>
          </nav>
     </header>
     </>
  )
}

export default Navbar
