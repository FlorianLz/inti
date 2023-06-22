'use client';
import Link from 'next/link';
import React from "react";
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
    const pathname = usePathname();
    const isActiveText = (href: string) => pathname === href ? 'text-primary-50' : '';
    const isActiveSvg = (href: string) => pathname === href ? 'text-primary-600 stroke-primary-600 fill-current' : '';

    return (
        <div className="fixed p-2 bg-white rounded shadow-md flex bottom-0 drop-shadow-lg w-screen left-0 flex justify-center">
            <Link href="/" passHref>
                <div className={`flex flex-col items-center justify-center group`}>
                    <svg className={`group-hover:fill-current group-hover:text-primary-600 ${isActiveSvg('/')}`} width="24" height="24" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`group-hover:stroke-primary-600 ${isActiveSvg('/')}`} d="M11.75 17.5004V13.0004C11.75 12.8014 11.671 12.6107 11.5303 12.47C11.3897 12.3294 11.1989 12.2504 11 12.2504H8C7.80109 12.2504 7.61032 12.3294 7.46967 12.47C7.32902 12.6107 7.25 12.8014 7.25 13.0004V17.5004C7.25 17.6993 7.17098 17.89 7.03033 18.0307C6.88968 18.1713 6.69891 18.2504 6.5 18.2504H2C1.80109 18.2504 1.61032 18.1713 1.46967 18.0307C1.32902 17.89 1.25 17.6993 1.25 17.5004V8.83223C1.25001 8.72771 1.27187 8.62435 1.31416 8.52877C1.35646 8.4332 1.41827 8.34752 1.49562 8.27723L8.99563 1.19535C9.13372 1.06966 9.31374 1 9.50047 1C9.6872 1 9.86722 1.06966 10.0053 1.19535L17.5053 8.27723C17.5827 8.34752 17.6445 8.4332 17.6868 8.52877C17.7291 8.62435 17.7509 8.72771 17.7509 8.83223V17.5004C17.7509 17.6993 17.6719 17.89 17.5313 18.0307C17.3906 18.1713 17.1998 18.2504 17.0009 18.2504H12.5C12.3011 18.2504 12.1103 18.1713 11.9697 18.0307C11.829 17.89 11.75 17.6993 11.75 17.5004Z" stroke="#576664"/>
                    </svg>
                    <p className={`block px-4 py-2 text-xs text-neutral-300 group-hover:text-primary-50 ${isActiveText('/')}`}>
                        Accueil
                    </p>
                </div>
            </Link>
            <Link href="/search" passHref>
                <div className="flex flex-col items-center justify-center group">
                    <svg className={`group-hover:fill-current group-hover:text-primary-600 ${isActiveSvg('/search')}`} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`group-hover:stroke-primary-600 ${isActiveSvg('/search')}`} d="M7 19L9.25 16.75V14.5L11.5 12.25L16 19L18.25 16.75L15.25 8.5L18.3438 5.59375C18.7664 5.17106 19.0039 4.59777 19.0039 4C19.0039 3.40222 18.7664 2.82894 18.3438 2.40625C17.9211 1.98356 17.3478 1.74609 16.75 1.74609C16.1522 1.74609 15.5789 1.98356 15.1562 2.40625L12.25 5.5L4 2.5L1.75 4.75L8.5 9.25L6.25 11.5H4L1.75 13.75L5.5 15.25L7 19Z" stroke="#576664"/>
                    </svg>
                    <p className={`block px-4 py-2 text-xs text-neutral-300 group-hover:text-primary-50 ${isActiveText('/search')}`}>
                        Voyage
                    </p>
                </div>
            </Link>
            <Link href="/message" passHref>
                <div className="flex flex-col items-center justify-center group">
                    <svg className={` ${isActiveSvg('/message')}`} width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g  clipPath="url(#clip0_233_6377)">
                            <path className={`group-hover:fill-current group-hover:text-primary-600 ${isActiveSvg('/message')}`} fillRule="evenodd" clipRule="evenodd" d="M12.9168 2.86889C10.719 2.72543 8.54401 3.38613 6.79738 4.72784C5.05075 6.06954 3.85167 8.00066 3.4237 10.1611C3.02571 12.1703 3.31983 14.2503 4.25024 16.0648L3.33634 18.7934L3.33592 18.7946C3.23762 19.0894 3.22336 19.4057 3.29473 19.7081C3.36609 20.0105 3.52027 20.2871 3.73998 20.5068C3.9597 20.7265 4.23626 20.8807 4.53867 20.9521C4.84108 21.0234 5.15739 21.0092 5.45215 20.9109L5.45217 20.9109L8.18463 19.9996C9.99938 20.9303 12.0796 21.2245 14.089 20.8265C16.2495 20.3985 18.1806 19.1994 19.5223 17.4528C20.864 15.7062 21.5247 13.5312 21.3813 11.3334C21.2378 9.1356 20.2999 7.06498 18.7426 5.5076C17.1852 3.95022 15.1146 3.01236 12.9168 2.86889ZM8.01574 6.3139C9.37744 5.26789 11.0731 4.7528 12.7865 4.86465C14.4999 4.9765 16.1142 5.70766 17.3284 6.92181C18.5425 8.13597 19.2737 9.75024 19.3855 11.4637C19.4974 13.1771 18.9823 14.8727 17.9363 16.2344C16.8903 17.5961 15.3847 18.5309 13.7004 18.8646C12.016 19.1982 10.2678 18.908 8.78171 18.0478C8.53377 17.9043 8.23618 17.8741 7.96442 17.9647L5.44125 18.8062L6.28505 16.287C6.37618 16.0149 6.34605 15.7168 6.20232 15.4684C5.34221 13.9823 5.05193 12.2341 5.38558 10.5498C5.71923 8.86543 6.65405 7.35991 8.01574 6.3139ZM9.63251 11.9227C9.63251 12.4801 9.1806 12.932 8.62314 12.932C8.06569 12.932 7.61378 12.4801 7.61378 11.9227C7.61378 11.3652 8.06569 10.9133 8.62314 10.9133C9.1806 10.9133 9.63251 11.3652 9.63251 11.9227ZM13.3335 11.9227C13.3335 12.4801 12.8816 12.932 12.3241 12.932C11.7667 12.932 11.3148 12.4801 11.3148 11.9227C11.3148 11.3652 11.7667 10.9133 12.3241 10.9133C12.8816 10.9133 13.3335 11.3652 13.3335 11.9227ZM16.0251 12.932C16.5826 12.932 17.0345 12.4801 17.0345 11.9227C17.0345 11.3652 16.5826 10.9133 16.0251 10.9133C15.4677 10.9133 15.0158 11.3652 15.0158 11.9227C15.0158 12.4801 15.4677 12.932 16.0251 12.932Z" fill="#576664"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_233_6377">
                                <rect width="24" height="24" fill="#F3B43A" transform="translate(0.25)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p className={`block px-4 py-2 text-xs text-neutral-300 group-hover:text-primary-50 ${isActiveText('/message')}`}>
                        Messagerie
                    </p>
                </div>
            </Link>
            <Link href="/profil" passHref>
                <div className="flex flex-col items-center justify-center group">
                    <svg className={`group-hover:fill-current group-hover:text-primary-600 ${isActiveSvg('/profil')}`} width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`group-hover:fill-current group-hover:text-primary-600 ${isActiveSvg('/profil')}`} fillRule="evenodd" clipRule="evenodd" d="M5.24507 6.66997C5.24507 4.17927 7.26418 2.16016 9.75488 2.16016C12.2456 2.16016 14.2647 4.17927 14.2647 6.66997C14.2647 9.16068 12.2456 11.1798 9.75488 11.1798C7.26418 11.1798 5.24507 9.16068 5.24507 6.66997ZM13.616 11.9117C15.2226 10.7262 16.2647 8.8198 16.2647 6.66997C16.2647 3.0747 13.3502 0.160156 9.75488 0.160156C6.15961 0.160156 3.24507 3.0747 3.24507 6.66997C3.24507 8.8198 4.28718 10.7262 5.8938 11.9117C3.66167 12.798 1.82108 14.4326 0.624647 16.5C0.348011 16.978 0.511255 17.5898 0.989263 17.8664C1.46727 18.143 2.07903 17.9798 2.35567 17.5018C3.85725 14.9071 6.5681 13.1798 9.75488 13.1798C12.9417 13.1798 15.6525 14.9071 17.1541 17.5018C17.4307 17.9798 18.0425 18.143 18.5205 17.8664C18.9985 17.5898 19.1618 16.978 18.8851 16.5C17.6887 14.4326 15.8481 12.798 13.616 11.9117Z" fill="#576664"/>
                    </svg>
                    <p className={`block px-4 py-2 text-xs text-neutral-300 group-hover:text-primary-50 ${isActiveText('/profil')}`}>
                        Profil
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default MobileMenu;
