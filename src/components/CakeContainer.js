import React from 'react'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux/Actions/cakeActions'

const CakeContainer = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div>CakeContainer</div>
            <button onClick={() => {
                dispatch(buyCake(4, (value) => {
                    console.log(value);
                }
                ))
            }} >Add Cake</button>
        </>
    )
}

export default CakeContainer