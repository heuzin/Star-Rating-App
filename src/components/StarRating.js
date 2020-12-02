import React, { useState } from 'react';
import createArray from './functions/createArray'
import Star from './Stars'

export default function StartRating({ style = {}, totalStars = 5 }) {
    const [selectedStarts, setSelectedStarts] = useState(0);
    return (
        <div style={{ padding: "5px", ...style }}>
        {createArray(totalStars).map((n, i) => (
            <Star key={i} selected={selectedStarts > i} onSelect={() => setSelectedStarts(i + 1)}/>
            ))}
        <p>{selectedStarts} of {totalStars}</p>
        </div>
    )
}