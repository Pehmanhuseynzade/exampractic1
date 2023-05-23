import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Helmet } from "react-helmet";

function Add() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 style={{ textAlign: "center", marginTop: "220px" }}>Add Page</h1>
      <div style={{ margin: "30px 40px", display: "flex", gap: 20 }}>
        <TextField id="outlined-basic" label="name" variant="outlined" />
        <TextField id="outlined-basic" label="date" variant="outlined" />
        <TextField id="outlined-basic" label="first desc" variant="outlined" />
        <TextField id="outlined-basic" label="second desc" variant="outlined" />
        <TextField id="outlined-basic" label="image" variant="outlined" />
        <Button style={{ padding: "15px 40px" }} variant="contained" color="success">Add</Button>
      </div>
    </>
  )
}

export default Add
