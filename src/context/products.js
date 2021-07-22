import React from "react";
import items from "./productData"



export const ProductContext = React.createContext();


export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
      setLoading(true);
      setProducts(items);
      setLoading(false);
   
    return () => {};
  }, [products]);


  return (
  
    <ProductContext.Provider value={{ products, loading}}>
      {children}
    </ProductContext.Provider>
  );
}
