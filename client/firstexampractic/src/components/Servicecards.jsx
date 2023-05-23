import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Servicecards() {
    return (
        <>
            <div className='servicecards'>
            <Card className='servicecard' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        className='serviceimage'
                        component="img"
                        height="210"
                        image="https://preview.colorlib.com/theme/security/img/s1.jpg"
                        alt="service image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Basic & Common Repairs
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className='servicecard' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        className='serviceimage'
                        component="img"
                        height="210"
                        image="https://preview.colorlib.com/theme/security/img/s2.jpg"
                        alt="service image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Brake Repairs & Services
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className='servicecard' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        className='serviceimage'
                        component="img"
                        height="210"
                        image="https://preview.colorlib.com/theme/security/img/s3.jpg"
                        alt="service image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Preventive Maintenance
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </>
    )
}

export default Servicecards