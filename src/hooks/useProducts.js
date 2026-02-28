
import { useQuery } from "@tanstack/react-query";

export const useProducts = () =>
  useQuery({
    queryKey:["products"],
    queryFn:()=>fetch("https://fakestoreapi.com/products").then(r=>r.json())
  });
