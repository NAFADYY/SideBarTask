'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BsGridFill,
  BsPeopleFill,
  BsCreditCard2Back,
  BsCalendarCheck
} from 'react-icons/bs'
import { FiSettings, FiLogOut } from 'react-icons/fi'

import './styles/Sidebar.css'

export default function Sidebar() {
  const path = usePathname()
  const items = [
    { href: '/', icon: BsGridFill, label: 'Dashboard' },
    { href: '/teams', icon: BsPeopleFill, label: 'Teams' },
    { href: '/payments', icon: BsCreditCard2Back, label: 'Payments' },
    { href: '/attendance', icon: BsCalendarCheck, label: 'Attendance' },
    { href: '/settings', icon: FiSettings, label: 'Settings' },
  ]

  return (
    <aside className="sidebar mb-7">
      <nav className="nav">
        {items.map(({ href, icon: Icon, label }) => {
          const isActive = path === href
          return (
            <Link
              key={href}
              href={href}
              className={`nav-link${isActive ? ' active' : ''}`}
            >
              {isActive && (
                <>
                  {/* الدائرة العلوية */}
                  <span className="circle-wrapper top-circle">
                    <span className="inner-white-circle"></span>
                  </span>
                  {/* الدائرة السفلية */}
                  <span className="circle-wrapper bottom-circle">
                    <span className="inner-white-circle"></span>
                  </span>
                </>
              )}
              <Icon size={20} />
              <span className=' font-bold'>{label}</span>
            </Link>
          )
        })}
      </nav>

      <Link href="/logout" className="logout font-bold">
        <FiLogOut size={20} />
        <span>Logout</span>
      </Link>
    </aside>
  )
}
