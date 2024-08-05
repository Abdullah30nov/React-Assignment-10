import { useNavigate, useParams } from 'react-router-dom';
import Data from '../Data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Products = () => {
    const { id } = useParams();
const navigate = useNavigate()
    const product = Data.find(product => product.id == id);
    if (!product) {
        return <h1>Product not found</h1>;
    }
    return (
        <>
            <Card sx={{ maxWidth: "900px" ,position:'relative',height:"auto",margin:'40px auto',boxShadow:"0px 0px 10px black",borderRadius:'20px'}}>
                  <CardMedia
                    sx={{ height: "120vh",width:'100%' }}
                    image={product.image}
                    title={product.category}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {product.description}
                    </Typography>
                  </CardContent><br /><hr /><br /><br /><br /><br/>
                  <CardActions>
                    <Button size="small" variant="h4" style={{
                      width:'90%',
                      margin:'auto',
                      border:'1px solid red',
                      marginBottom:'10px',
                      color:'red',
                      position:'absolute',
                      bottom:'10px',
                      fontSize:'20px',
                      fontWeight:'bolder',
                      right:'20px'
                    }} onClick={()=>navigate('/dashboard')}>Back</Button>
                  </CardActions>
                </Card>
        </>
    );
};
export default Products;