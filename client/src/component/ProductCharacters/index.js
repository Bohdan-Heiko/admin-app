import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import { Title, TextField, Datagrid, List, FunctionField } from 'react-admin';
import { useParams } from "react-router-dom";
import ProductList from "../ProductPage/ProductList";


const ProductCharacters = (props) => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  const URL = `http://localhost:5000/products/${id}`
  useEffect(() => {
    fetch(URL)
      .then(data => data.json())
      .then(data => setProduct(data))
  }, [])
  
  return (
    <Card>
      <Title title="Product characters" />
      {
        product && product.id
      }
    </Card>
      
  )
}
  

export default ProductCharacters