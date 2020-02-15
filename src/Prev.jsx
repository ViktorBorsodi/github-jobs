import React from 'react';
import PrevImg from './imgs/back.svg'

const Prev = ({prevPage, enabled}) => {
    const halfOpacity = {opacity: .5}
    const fullOpacity = {opacity: 1}
    return (
        <div className='img-container' onClick={prevPage} >
            <img src={PrevImg} alt="prev" style={enabled ? fullOpacity : halfOpacity} />
        </div>
    );
}

export default Prev;