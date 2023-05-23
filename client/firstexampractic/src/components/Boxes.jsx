import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Boxes() {
    return (
        <>
            <div className='boxes'>
                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Expert Technicians
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Professional Service
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Great Support
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Technical Skills
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Highly Recomended
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardboxes' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Positive Reviews
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