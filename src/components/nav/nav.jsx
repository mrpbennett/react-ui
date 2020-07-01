import React, { useState } from 'react';
import './nav.scss';

const Nav = () => {
    const linkData = [
        {
            to: '#',
            name: 'Projects',
            className: 'links',
        },
        {
            to: '#',
            name: 'Open Source',
            className: 'links',
        },
        {
            to: '#',
            name: 'Posts',
            className: 'links',
        },
        {
            to: '#',
            name: 'Contact',
            className: 'links',
        },
    ];

    const [open, setOpen] = useState(false);
    const linkStyles = open ? 'navLinks ' : 'navLinks mobileNav';

    return (
        <header className='nav'>
            <div className='navInner'>
                <div className='navLogo'>
                    <span>Logo</span>
                </div>

                <div className='hamburger'>
                    <button onClick={() => setOpen(!open)}>click</button>
                </div>
            </div>

            <nav className={linkStyles}>
                {linkData.map((link) => (
                    <a href={link.to} className={link.className}>
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Nav;
