import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from '../Data';
import { useNavigate } from 'react-router-dom';
import css from './Card.module.css'
export default function MediaCard() {
    const navigate = useNavigate()
  return (<>
    {
        Data.map((e,i)=>{
            console.log(e.image)
            return(
                <div style={{display:'inline-block'}} key={i}>
                <Card className={css.main} sx={{ maxWidth: 345 ,height:480,borderRadius:'10px',margin:'10px'}}>
                  <CardMedia
                    sx={{ height: 230 }}
                    image={e.image}
                    title={e.category}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title.slice(0,35)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {e.description.slice(0,130)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="h1" style={{
                      width:'90%',
                      margin:'auto',
                      border:'1px solid red',
                      marginBottom:'10px',
                      color:'red',
                      position:'absolute',
                      bottom:'20px',
                      fontSize:'20px',
                      fontWeight:'bolder',
                      right:'20px'
                    }} onClick={()=>navigate(`/dashboard/product/${e.id}`)}>View</Button>
                  </CardActions>
                </Card>
                    </div>
            )
        })
    }
    </>
  );
}