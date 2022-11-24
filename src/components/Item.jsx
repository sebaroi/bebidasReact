import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/item.css';
import {Link} from 'react-router-dom'

/* function Item (props) { */
const Item = ({ product }) => {
/* console.log(props) */

  return (
    <Link to={`/item/${product.id}`}>
      <div className='conteiner '>
        <div class="row g-3 w-100">
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <Card className='cardProducto'  >
          <div className='contenedorImagenCards'> 
            <Card.Img className='imgcard' variant="top" src={product.imageProd} />
          </div>
          <Card.Body>
            <Card.Text className='precio'> 
              ${product.price}- 
            </Card.Text>
            <Card.Title className='titulo'>{product.name}</Card.Title>
          </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Item;





/* import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/item.css';
import ItemCount from './ItemCount';

/* function Item (props) { */
/*const Item = ({ product }) => {
 console.log(props) */

 /*  return (
    <div className='conteiner '>
      <div class="row g-3 w-100">
<div className='col-lg-3 col-md-4 col-sm-6'>
    <Card className='cardProducto'  >
      <div className='contenedorImagenCards'> 
        <Card.Img className='imgcard' variant="top" src={product.imageProd} />
      </div>
      <Card.Body>
      <Card.Text className='precio'> 
          ${product.price}- 
        </Card.Text>
        <Card.Title className='titulo'>{product.name}</Card.Title>

   */ 
        
 /*       {/*  <div>        <ItemCount/></div> ESTO LO VOY A USAR EN LA DFESCRIPPCION */
 
/*       </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default Item; */ 