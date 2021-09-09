import {useEffect, useState} from "react";
import {ImgMediaCard} from "../../components/card/Card";

function Basket(props) {
    const [saves, setSaves] = useState([])

    useEffect(() => {
        setSaves(JSON.parse(localStorage.getItem("shoose")) || [])
    }, [])

    return (
        <div>
            {
                // saves = [2,3,5]
                // props.data = [{id: 1}, {id: 2} ] => [{id: 2} ]
                props.data.filter((item) => saves.includes(item.id)).map((item) => (
                    <ImgMediaCard key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} />
                ))
            }
        </div>
    );
}

export default Basket;
