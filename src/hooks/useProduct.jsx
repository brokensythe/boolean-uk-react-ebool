import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useProduct(){
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/products/${productId}`)
        .then(resp=>resp.json())
        .then(setProduct)
    }, [setProduct])

    return product
}

export default useProduct