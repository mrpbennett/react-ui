import React, { useState } from 'react';
import './card.scss';
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
    const cardData = [
        {
            imgUrl:
                'https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            beds: 3,
            baths: 2,
            title: 'Modern apartment in city center',
            price: 390000,
            formattedPrice: '£3,900.00',
            reviewCount: 69,
            rating: 3,
        },
    ];

    return (
        <div className='cardContainer'>
            {cardData.map((card) => (
                <div className='card'>
                    <img src={card.imgUrl} />
                    <div className='cardInner'>
                        <div className='cardInfoTop deemphasise'>
                            {card.beds} beds &bull; {card.baths} baths
                        </div>

                        <h4>{card.title}</h4>

                        <div className='cardInfoMiddle'>
                            {card.formattedPrice}{' '}
                            <span className='deemphasise'>/ pcm</span>
                        </div>

                        <div className='cardInfoBottom emphasise'>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <AiFillStar
                                        color={
                                            ratingValue > card.rating
                                                ? 'grey'
                                                : 'teal'
                                        }
                                    />
                                );
                            })}{' '}
                            <span className='deemphasise ml-2'>
                                based on {card.reviewCount.toLocaleString()}{' '}
                                reviews
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
