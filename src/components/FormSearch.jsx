import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles/navBar.css'


const FormSearch = ({busqueda, TextoBoton}) => {
    return (
        <div>
          <form className="d-flex formNatvar">
            <input className="form-control me-sm-2" type="text" placeholder={busqueda} />
            <Button variant="primary" >{TextoBoton}</Button>{' '}
          </form>
        </div>
    );
}

export default FormSearch;
