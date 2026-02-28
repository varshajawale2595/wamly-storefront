
import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Products(){
  const {data,isLoading,error} = useProducts();
  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;

  return (
    <div className="grid">
      {data.map(p=><ProductCard key={p.id} product={p}/>)}
    </div>
  );
}
