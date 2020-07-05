import React, { useState } from 'react';
import './card.scss';
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
    const cardData = [
        {
            imgUrl:
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            beds: 3,
            baths: 2,
            title: 'Beautiful desert pool complex',
            price: 390000,
            formattedPrice: '£2,550.00',
            reviewCount: 2000,
            rating: 5,
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
