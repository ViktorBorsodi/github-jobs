import React from 'react';
import NextImg from './imgs/next.svg'

const Next = ({nextPage, enabled}) => {
    const halfOpacity = {opacity: .5}
    const fullOpacity = {opacity: 1}
    return (
        <div className='img-container' onClick={nextPage} >
            <img src={NextImg} alt="next" style={enabled ? fullOpacity : halfOpacity} />
        </div>
    );
}

export default Next;