import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import { Title } from 'react-admin';
import { useParams } from "react-router-dom";
import LoaderExampleIndeterminate from "./animation";

import s from './style.module.css'

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
      <table className={s.tableBrokers} cellSpacing="0">
        <thead>
          <tr>
            <td width="4%">id</td>
            <td width="16%">Product name</td>
            <td width="16%">Model</td>
            <td width="16%">Price</td>
            <td width="16%">Diagonal</td>
            <td width="16%">NFC</td>
            <td width="16%">Date creation</td>
          </tr>
        </thead>
        {
          product ? 
          <tbody>
            <tr>
                <td>{product.id}</td>
                <td>{product.productname}</td>
                <td>{product.model}</td>
                <td>{product.price}</td>
                <td>{product.diagonal}</td>
                <td>{product.nfc ? "Yes" : "No"}</td>
                <td>{product.publishedAt}</td>
            </tr>
            </tbody> : <LoaderExampleIndeterminate /> 
        }
      </table>
    
    </Card>
      
  )
}
  

export default ProductCharacters