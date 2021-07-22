import React from 'react';
import Product from './Product';
import Title from './Title';

const FeaturedProducts = () => {
   
    

    return (
        <section className="featured-products mx-auto">
            <div className="container">
            <Title title="Featured products"/>
            <div className="row product-list">
                 <Product/>
            </div>
           
            </div>
        </section>
    );


}

export default FeaturedProducts;
