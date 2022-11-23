import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { Items } from "../mocks/items.mock";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      // Simulation of a call to an api
      setTimeout(() => resolve(Items.find((item) => item.id === id)), 1000)
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center ">
      <ItemDetail item={item} />
    </div>
  );
};




/*imp ort React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import ItemDetail from './ItemDetail';
import productos from './mocks/Products';


const ItemDetailContainer = ({products}) => {
  const [item, setItem]= useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    let details = new Promise((resolve) =>
      setTimeout(() => resolve(productos[products - 1]), 2000)
    );

    details.then((data) => setItem(data)).then((data) => setHasProduct(!data));
  }, [products]);

  
  return (
    <div className="itemDetailContainer">
      {!hasProduct ? <Loader /> : <ItemDetail item= { item } />}
    </div>
  );
};

export default ItemDetailContainer; */