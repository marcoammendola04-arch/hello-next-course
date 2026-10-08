import React, { ForwardedRef } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    return (
        <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2 bg-white">
            <Link href="/" passHref>
                <NavItem label="Home" />
            </Link>
            <Link href="/catalog">
                <NavItem label="Catalog"/>
            </Link>
            <Link href="/contacts" replace={true}>
                <NavItem label="Contacts"/>
            </Link>
        </nav>
    )
};

interface NavItemProps {
    label: string;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = React.forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
        <div>
            <a className="text-2xl cursor-pointer" href={props.href} ref={ref}>{props.label}</a>
        </div>
    )
})

NavItem.displayName = 'NavItem';