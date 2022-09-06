import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../features/balance/balanceSlice";

const Balance =() => {
    const balance = useSelector(state => state.balance) 
    //balance = sama dengan di store
    const dispatch = useDispatch();
    
    const handleDeposit = () => {
        dispatch(
            deposit(1000)
        )
    };

    const handleWithDraw = () => {
        dispatch(
            withdraw(1000)
        )
    }

    return(
        <>
         <section>
            <h2> Total Saldo </h2>
            <p>{balance.total}</p>
        `</section>
        <button type="button"
        onClick={(handleDeposit)}
        >
            Deposit Rp 1000
        </button>
        <button type="button"
         onClick={handleWithDraw}
        >
            Withdraw Rp 1000
        </button>
        </>
    )
}

export default Balance