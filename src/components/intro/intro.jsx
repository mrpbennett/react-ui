import React from 'react';
import { DiReact } from 'react-icons/di';
import './intro.scss';

const intro = () => {
    return (
        <div>
            <div className='intro'>
                <div className='text'>
                    <DiReact size={200} className='logo' color='#61DAFB' />

                    <h1>
                        <span>React.js</span>
                        Components
                    </h1>
                </div>

                <p>
                    Just some cool litter React Components I want to share with
                    the world.
                </p>

                <div class='scroll-downs'>
                    <div class='mousey'>
                        <div class='scroller'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default intro;
