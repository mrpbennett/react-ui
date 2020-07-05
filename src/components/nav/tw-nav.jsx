import React, { useState } from 'react';
import { MdDehaze, MdClose } from 'react-icons/md';

const data = [
    {
        to: '',
        name: 'projects',
    },
    {
        to: '',
        name: 'open source',
    },
    {
        to: '',
        name: 'posts',
    },

    {
        to: '',
        name: 'contact',
    },
];

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const linkStyles = open
        ? 'block px-2 pt-2 pb-4'
        : 'hidden px-2 pt-2 pb-4 sm:block sm:flex';

    // function navIcon(props) {
    //     const isNavOpen = props.open;
    //     if (open) {
    //         return <MdClose className='h-6 w-6 fill-current' />;
    //     } else {
    //         return <MdDehaze className='h-6 w-6 fill-current' />;
    //     }
    // }

    return (
        <header className='mt-4 rounded-lg w-3/4 bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
            <div className='flex items-center px-4 py-3 sm:p-0'>
                <div className='mr-auto'>
                    <span className='text-white'>Logo</span>
                </div>
                <div className='sm:hidden'>
                    <button
                        className='text-gray-500 block focus:text-white focus:outline-none'
                        onClick={() => setOpen(!open)}>
                        <MdClose className='h-6 w-6 fill-current' />
                    </button>
                </div>
            </div>

            <nav className={linkStyles}>
                {data.map((link) => (
                    <a
                        href='#'
                        className='block capitalize text-white font-semibold mt-1 px-2 rounded hover:bg-blue-300'>
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
