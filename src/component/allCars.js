import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from "../features/user/cars-slice";

const AllCars = () => {
const dispatch = useDispatch();

React.useEffect(() =>{
    dispatch(getAllCars())
}, [])

    return(
        <>
        Halaman All Cars
        </>
    )

}

export default AllCars;