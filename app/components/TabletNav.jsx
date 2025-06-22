'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    BsGridFill,
    BsPeopleFill,
    BsCreditCard2Back,
    BsCalendarCheck
} from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import './styles/MobileBottomNav.css'
const navItems = [
    { href: '/dashboard', icon: BsGridFill },
    { href: '/teams', icon: BsPeopleFill },
    { href: '/payments', icon: BsCreditCard2Back },
    { href: '/attendance', icon: BsCalendarCheck },
    { href: '/settings', icon: FiSettings }
]

export default function TabletNav() {
    const path = usePathname()
    return (
        <nav className="mobile-bottom-nav ">
            {navItems.map(({ href, icon: Icon }) => {
                const active = path === href
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`mobile-nav-link${active ? ' active' : ''}`}
                    >
                        {active && (
                            <>
                                <span className="nav-blob"></span>
                                <span className="nav-blob-corner left"></span>
                                <span className="nav-blob-corner right"></span>
                                {/* الدواير الزرقا الجديدة */}
                                <span className="nav-blob-blue left-blue"></span>
                                <span className="nav-blob-blue right-blue"></span>


                            </>
                        )}
                        <Icon className="nav-icon" />
                    </Link>
                )
            })}
        </nav>
    )
}
