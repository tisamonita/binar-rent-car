import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllPlanets} from '../features/user/star-wars-slice';

export default function Dashboard(){

    const {planets} = useSelector((state) => state.starWars);
    const dispatch = useDispatch();

    React.useEffect(()=> {
        dispatch(getAllPlanets());
    }, [])
    return(
        <>
           {console.log(planets, 'data planets')}
        HALO
        </>
    )
}