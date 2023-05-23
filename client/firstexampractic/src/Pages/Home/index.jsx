import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { deleteDatasByID, getAlldatas } from '../../api/httpsrequests';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Servicecards from '../../components/Servicecards';
import Boxes from '../../components/Boxes';
import Gridd from "../../components/Gridd"
//import { Helmet } from "react-helmet";


function Home() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    getAlldatas()
      .then(data => {
        setInfo(data);
        console.log(data);
      });
  }, []);


  function handleClick(id) {
    deleteDatasByID(id)
    setInfo(info.filter((x) => x._id !== id))
  }

  function handleChange(event) {
    setInput(event.target.value)
  }

  return (
    <>
{/* {      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </div>} */}
      {/* first main */}
      <main >
        <div style={{ width: "100%" }} className='image-hero' >
          <div style={{ color: 'white', lineHeight: "1.5", marginLeft: 200 }}>
            <p>OPENNING ON 21ST FEBRUARY, 2018</p>
            <h1 style={{ fontSize: "40px" }}>Exhibition on Modern Era</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <p>aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</p>
            <button style={{ marginTop: "15px" }} className='getstarted'>GET STARTED</button>
          </div>
        </div>
      </main>


      {/* section first */}

      <section className='offered '>
        <h1 style={{ fontSize: "50px" }}>Our Offered Services</h1>
        <p style={{ color: "gray" }}>Who are in extremely love with eco friendly system.</p>
      </section>


      {/* section second cards */}
      <Servicecards />

      <div className='secondtitle' >
        <h1 style={{ fontSize: "30px" }}>Some Features that Made us Unique</h1>
        <p style={{ color: "gray" }}>Who are in extremely love with eco friendly system.</p>
      </div>


      {/* section third boxes */}
      <Boxes />

      {/* section 4nd numbers and info */}

      <section style={{ width: "100%" }} className='info-num'>
        <div><h1>2536</h1><p>Projects Completed</p></div>
        <div><h1>6784</h1><p>Really Happy Clients</p></div>
        <div><h1>1059</h1><p>Total Tasks Completed</p></div>
        <div><h1>2239</h1><p>Cups of Coffee Taken</p></div>
        <div><h1>434</h1><p>In House Professionals</p></div>
      </section>

      <div className='nexttitle' >
        <h1 style={{ fontSize: "30px" }}>Latest From Our Gallery</h1>
        <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        <p style={{ color: "gray" }}>dolore magna aliqua.</p>
      </div>

      {/* 5nd section Grid */}
      <Gridd />

      <div className='secondtitle' >
        <h1 style={{ fontSize: "30px" }}>Some Features that Made us Unique</h1>
        <p style={{ color: "gray" }}>Who are in extremely love with eco friendly system.</p>
      </div>






      <div><TextField onChange={(event) => handleChange(event)} placeholder='Search' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="outlined-basic" variant="outlined" /></div>
      <div className='card'>
        {info && info.filter((item) => {
          if (item === '') {
            return info;
          }
          else if (item.name.toLowerCase().trim().includes(input.toLowerCase().trim())) {
            return item;
          }
        }).map((d) => (
          <Card
            md={8} sm={24} xs={24} lg={8} xl={8}
            key={d._id}
            className='cards'
            hoverable="true"
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={d.ImageURL} />}
          >
            <p style={{ width: "100px", height: "30px", border: "1px solid black", backgroundColor: "black", color: "white", padding: "3px 6px" }}>{d.datee}</p>
            <p className='prghov'>{d.name}</p>
            <p>{d.desc}</p>
            <div style={{ display: "flex", gap: "20px" }}>
              <p><i class="fa-regular fa-heart"></i>15 Likes</p>
              <p><i class="fa-regular fa-comment"></i>2 Comments</p>
            </div>
            <Button onClick={() => handleClick(d._id)} style={{ margin: "5px 110px" }} variant="contained" color="error">Delete</Button>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home
