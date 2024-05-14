import { useState, useEffect } from "react";
import Car from "./Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCar, setFilteredCar] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setFilteredCar(data);
            });
    }, []);

    const handleSearch = (e) => {
        const searchKey = e.target.value.toLowerCase();
        setSearchKey(searchKey);
        const searchedCars = cars.filter(car => car.model.toLowerCase().includes(searchKey));
        setFilteredCar(searchedCars);
    }
    const handleSearchClick = () => {
        // e.preventDefault();
        const searchCars = cars.filter(car => car.model.toLowerCase().includes(searchKey));
        setFilteredCar(searchCars);
    }

    return (
        <div>
            <div className="text-center my-5">
                <input
                    type="text"
                    className="px-3 py-1 border-2 border-gray-400"
                    placeholder="Search by model..."
                    value={searchKey}
                    onChange={handleSearch}
                />
                <button onClick={handleSearchClick} className="px-3 py-1 border-2 border-gray-400 bg-slate-700 text-white">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {filteredCar.map((car) => (
                    <Car key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Cars;
