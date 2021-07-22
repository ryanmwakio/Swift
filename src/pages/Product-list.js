import React from 'react';

import Product from './Product'

const ProductList = () => {
    return (
        <section className="featured-products mx-auto mb-5">
        <div className="container">
        <div className="row">
             <Product/>
        </div>
       
        </div>
    </section>
    );
}

export default ProductList;
