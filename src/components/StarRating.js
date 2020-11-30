import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

const Star = ({ selected = false, onSelect}) => (
    <FiStar color={selected ? 'red' : 'grey'} onClick={onSelect}/>
)

const createArray = ((length) => {
    return [...Array(length)]  
})

export default function StartRating({ totalStars = 5 }) {
    const [selectedStarts, setSelectedStarts] = useState(0);
    return (
        <div>
        {createArray(totalStars).map((n, i) => (
            <Star key={i} selected={selectedStarts > i} onSelect={() => setSelectedStarts(i + 1)}/>
            ))}
        <p>{selectedStarts} of {totalStars}</p>
        </div>
    )
}