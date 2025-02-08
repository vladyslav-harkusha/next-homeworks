"use client";
import {FC} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import './NavMenu.scss';
import cn from 'classnames';

const linksInfo = [
    { name: 'Home', endpoint: '/' },
    { name: 'Cars', endpoint: '/cars' },
    { name: 'New car', endpoint: '/new-car' },
];

const NavMenu: FC = () => {
    const pathname = usePathname();

    return (
        <nav className='nav-menu'>
            <ul className='nav-list'>
                {linksInfo.map(({name, endpoint}, id) => (
                    <li key={id}>
                        <Link
                            href={endpoint}
                            className={cn('nav-link', { 'is-active-link': pathname === endpoint })}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;