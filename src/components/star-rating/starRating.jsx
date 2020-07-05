import React, { useState } from 'react';
import './starRating.scss';
import { AiFillStar } from 'react-icons/ai';

const StarRating = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div className='stars'>
            <div className='starsInner'>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input
                                type='radio'
                                name='rating'
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <AiFillStar
                                className='star'
                                color={
                                    ratingValue <= (hover || rating)
                                        ? '#ffc107'
                                        : '#e4e5e9'
                                }
                                size={100}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            <p>{`You gave this a ${rating} review`} review</p>
        </div>
    );
};

export default StarRating;
