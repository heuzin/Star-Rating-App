import React from 'react';
import { FiStar } from 'react-icons/fi';

const Star = ({ selected = false }) => (
    <FiStar color={selected ? 'red' : 'grey'}/>
)

const createArray = ((length) => {
    return [...Array(length)]  
})

export default function StartRating({ totalStars = 10 }) {
    return createArray(totalStars).map((n, i) => <Star key={i}/>)
}