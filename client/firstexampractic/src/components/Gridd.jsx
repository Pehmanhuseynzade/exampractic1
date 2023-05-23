import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';





function Gridd() {

    return (
        <>
            <Box className='mybox' sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <div className='frstgrid' >
                        <Grid xs={8}>
                            <img src="https://preview.colorlib.com/theme/security/img/g1.jpg.webp" alt="" />
                        </Grid>
                        <div >
                            <Grid xs={4}>
                                <img src="https://preview.colorlib.com/theme/security/img/g2.jpg.webp" alt="" />
                            </Grid>
                        </div>
                    </div>


                    <div style={{ display: 'flex', marginLeft: '40px', gap: "20px" }}>
                        <Grid xs={4}>
                            <img src="https://preview.colorlib.com/theme/security/img/g3.jpg.webp" alt="" />

                        </Grid>
                        <Grid xs={4}>
                            <img src="https://preview.colorlib.com/theme/security/img/g4.jpg.webp" alt="" />

                        </Grid>
                        <Grid xs={4}>
                            <img src="https://preview.colorlib.com/theme/security/img/g5.jpg.webp" alt="" />
                        </Grid>
                    </div>

                    <div style={{display:"flex",gap:"20px"}}>
                    <div style={{ marginLeft: '40px' }}>
                        <Grid xs={4}>
                            <img src="https://preview.colorlib.com/theme/security/img/g6.jpg.webp" alt="" />
                        </Grid>

                    </div>
                    <div>
                        <Grid xs={8}>
                            <img src="https://preview.colorlib.com/theme/security/img/g7.jpg.webp" alt="" />
                        </Grid>
                    </div>
                    </div>

                </Grid>
            </Box>
        </>
    )
}

export default Gridd


