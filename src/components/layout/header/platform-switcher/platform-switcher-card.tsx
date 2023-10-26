import React from 'react';
import { TAvailableApp } from '.';

const PlatformSwitcherCard = (item: TAvailableApp) => {
    const { src, title, alt, path } = item;

    return (
        <a href={path} className='mx-5 my-8 hover:cursor-pointer' key={title}>
            <div className='flex min-h-[150px] flex-col gap-5 rounded-md p-5 hover:bg-disabled-100'>
                <img className='w-36' src={src} alt={alt} />
                <span className='text-[14px] font-light'>{title}</span>
            </div>
        </a>
    );
};

export default PlatformSwitcherCard;
