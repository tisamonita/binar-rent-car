import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from "../features/user/cars-slice";

const AllCars = () => {
const dispatch = useDispatch();

// React.useEffect(() =>{
//     dispatch(getAllCars())
// }, [])
const cars = useSelector((state) => state.cars.mobil);

    return(
        <>
        Halaman All Cars
        { cars && cars.map((item) => {
            return(<>
                <p>{item.id}</p>
                <h2>{item.name? item.name : 'Default'}</h2>
            </>)
        })}
        <button onClick={()=>{dispatch(getAllCars())}} >
        Get Data 
        </button>
        </>
    )

}

export default AllCars;