import { useState, useEffect } from "react";
import Car from "./Car";


const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className="grid grid-cols-3 dark:bg-black">
            {
                cars.map(car => <Car key={car.id} car={car}></Car>)
            }
        </div>
    );
};

export default Cars;