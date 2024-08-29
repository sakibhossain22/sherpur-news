import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';
const Navbar = () => {
    const navLinks = [
        {
            title: 'সর্বশেষ',
            path: '/latest'
        },
        {
            title: 'রাজনীতি',
            path: '/politics'
        },
        {
            title: 'বাংলাদেশ',
            path: '/bangladesh'
        },
        {
            title: 'অপরাধ',
            path: '/crime'
        },
        {
            title: 'বিশ্ব',
            path: '/world'
        },
        {
            title: 'বাণিজ্য',
            path: '/business'
        },
        {
            title: 'মতামত',
            path: '/opinion'
        },
        {
            title: 'খেলা',
            path: '/sports'
        },
        {
            title: 'বিনোদন',
            path: '/entertainment'
        },
        {
            title: 'চাকরি',
            path: '/job'
        },
        {
            title: 'জীবনযাপন',
            path: '/lifestyle'
        },
    ]
    return (
        <nav className='my-2'>
            <div className='flex items-center justify-center'>
                <Image className='w-80' src={logo} alt='logo' height={600} width={700} />
            </div>
            <div>
                <div className='flex items-center gap-5'>
                    {
                        navLinks.map((item, idx) => {
                            return <Link className='hover:text-blue-700' key={idx} href={item.path}>
                                <p>{item.title}</p>
                            </Link>
                        })
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;