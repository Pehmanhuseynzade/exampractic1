import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Boxes() {
    return (
        <>
            <div  className='boxes'>
                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-regular fa-user"></i>Expert Technicians
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-solid fa-newspaper"></i>Professional Service
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-solid fa-blender-phone"></i>Great Support
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-solid fa-rocket"></i>Technical Skills
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-solid fa-hand-holding-dollar"></i>Highly Recomended
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{display:"flex",gap:"5px"}} gutterBottom variant="h5" component="div">
                            <i class="fa-regular fa-comment"></i>Positive Reviews
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
        </>
    )
}

export default Boxes