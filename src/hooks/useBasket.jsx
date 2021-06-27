import { useEffect, useState } from "react";

function useBasket() {
    const [basket, setBasket] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/basket")
        .then(resp=>resp.json())
        .then(setBasket)
    }, [setBasket])

    return { basket, setBasket }
}

export default useBasket