import React from 'react';
import { Link } from 'react-router-dom';
import {ProductContext} from "../context/products"
import Loading from "./Loading"



const Product = () => {
    const {products,loading} = React.useContext(ProductContext);
    

    if (loading) {
        return <Loading />;
      }else{
        let filterProducts=products.filter(product=>product.fields.featured===true)
        let myproduct=filterProducts.map(item=>{
          
                return <div className="col-sm-6 col-md-4 my-2" key={item.sys.id}>
                   <div className="product">
                     <div className="product-image">
                       <img src={item.fields.image.fields.file.url} alt=""/>
                      </div>
                      <div className="product-name">
                          <h3>{item.fields.title}</h3>
                      </div>
                      
                     <p className="product-company">Company: {item.fields.company}</p>

                     <p className="product-price">Price: Kshs {item.fields.price} <br/> {item.fields.previously ? <span className="previous-price"> Kshs {item.fields.previously}</span> : ""}</p>

                    <div className="cart-btn">
                     <Link className="btn btn-swift-primary" to="/cart">Add to cart</Link>
                     </div>
                      
                   </div>
              </div>
            
           
        })

        return myproduct
      }


      

    

   
  
}

export default Product;
