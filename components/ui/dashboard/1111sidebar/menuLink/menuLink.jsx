"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item, path}) => {

  const pathname = usePathname()

  return (
    <Link href={path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink