import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarItemProps {
    text: string;
    href: string;
}

const NavBarItem: FC<NavBarItemProps> = ({ text, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className={isActive ? "active" : ""}>
            <Link href={href}>{text}</Link>
        </li>
    );
};

export default NavBarItem;