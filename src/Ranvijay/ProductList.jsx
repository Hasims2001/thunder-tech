import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";
import axios from "axios";
import { getProduct } from "../redux/productRedux/action";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom/dist";



export const ProductList = () => {
  const [searchparams]=useSearchParams()
  const dispatch = useDispatch()
  const data = useSelector((store) => store.productReducer.products);
 console.log(data,"data")
//  const [params,setparams]=useState({
//     category:searchparams.getAll("category"),
//     company:searchparams.getAll("company"),
//     _sort: searchparams.get("order") && "price",
//     _order: searchparams.get("order")
//    })

   let paramsObj={
    params:{
    category:searchparams.getAll("category"),
    company:searchparams.getAll("company"),
    // _sort: searchparams.get("order") && "price",
    // _order: searchparams.get("order")
     }
   }
 

 useEffect(() => {
    // setparams({
    //     category:searchparams.getAll("category"),
    //     company:searchparams.getAll("company"),
    //     _sort: searchparams.get("order") && "price",
    //     _order: searchparams.get("order")
    //    })
    // console.log(params);
    dispatch(getProduct(paramsObj));

  }, [searchparams]);

  return (
    <DIV >
        <div className="rt_filter_card">
            <div className="rt_filter">
            <Sidebar/>
            </div>
        <div className="rt_card_sort">
        {/* <div className="ranvijay_sort">
            <p>Sort :</p>
            <Button colorScheme='blue'>Low To High</Button>
            <Button colorScheme='blue'>High To Low</Button>
        </div> */}
        <hr />
        <div className="rt_card_section">
      {/* Map through products with ProductCard component  */}
      {data.map((item)=><ProductCard key={item.id} {...item} />)}
      </div>
      </div>
      </div>
    </DIV>
  );
};

const DIV=styled.div`


.rt_filter_card{
    display: flex;
    margin: auto;
    margin-top: 50px;
    border: 1px solid pink;
}

.rt_filter{
    margin-left: 20px;
    border: 1px solid black;
    width: 15%;
}

.rt_card_sort{
    border: 1px solid yellow;
    margin: auto 140px auto auto;
    
}

/* .ranvijay_sort{
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin-top: 30px;
} */

.rt_card_section{
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;
margin: auto;
margin-top: 40px;
}

@media (min-width:300px) {
    .rt_card_section{
        display: grid;
       grid-template-columns: 1;  
       grid-template-rows: 1;

    }
    
}

@media (max-width:750px) {
    .rt_card_section{
        display: grid;
grid-template-columns: repeat(2,1fr);  
    }
    
}
  
`