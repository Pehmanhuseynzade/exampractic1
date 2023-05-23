import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Helmet } from "react-helmet";
import { useFormik } from "formik"
import { InfoSchema } from '../../validation/Infovalidation';
import { postDataByID } from '../../api/httpsrequests';
function Add() {
  function handleSubmit(actions, values) {
    postDataByID(values)
    console.log(values);
    actions.resetForm();
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      desc: '',
      ImageURL: ''
    },
    validationSchema: InfoSchema,
    onSubmit: handleSubmit,
  })
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 style={{ textAlign: "center", marginTop: "220px" }}>Add Page</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px 40px", display: "flex", gap: 20 }}>
        <TextField error={formik.errors.name && formik.touched.name ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" type='text' id="outlined-basic" label="name" variant="outlined" />
        {formik.errors.name && formik.touched.name && <p style={{ color: 'red' }}>{formik.errors.name}</p>}
        <TextField error={formik.errors.datee && formik.touched.datee ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="datee" type='text' id="outlined-basic" label="date" variant="outlined" />
        {formik.errors.datee && formik.touched.datee && <p style={{ color: 'red' }}>{formik.errors.datee}</p>}
        <TextField error={formik.errors.desc && formik.touched.desc ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="desc" type='text' id="outlined-basic" label="first desc" variant="outlined" />
        {formik.errors.desc && formik.touched.desc && <p style={{ color: 'red' }}>{formik.errors.desc}</p>}
        <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} name="ImageURL" value={formik.values.ImageURL} error={formik.errors.ImageURL && formik.touched.ImageURL ? true : false} type='text' id="outlined-basic" label="image" variant="outlined" />
        {formik.errors.ImageURL && formik.touched.ImageURL && <p style={{ color: 'red' }}>{formik.errors.ImageURL}</p>}
        <Button type='submit' style={{ padding: "15px 40px" }} variant="contained" color="success">Add</Button>
      </form>
      <div style={{ height: "140px" }}></div>
    </>
  )
}

export default Add
