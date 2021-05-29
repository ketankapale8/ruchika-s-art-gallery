import React from 'react'
import './menu.scss'

export default function Menu({menuOpen , setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#profile'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#images'>Portfolio</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#festival'>Festivals</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#services'>Services</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
