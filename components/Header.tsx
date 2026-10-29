"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useState,useEffect} from "react";
import {Arrow} from "@/components/Icons";
const nav=[{label:"Beranda",href:"/"},{label:"Tentang",href:"/tentang"},{label:"BERDAYA",href:"/berdaya"},{label:"Jelajah Balangan",href:"/balangan"},{label:"Galeri",href:"/galeri"}];
export default function Header(){
 const path=usePathname(); const [open,setOpen]=useState(false);
 useEffect(()=>setOpen(false),[path]);
 return <header className="site-header"><div className="container nav-shell">
  <Link href="/" aria-label="Beranda Sulthan" className="brand"><span className="brand-mark">S<span>.</span></span><span className="brand-text">SULTHAN<span>BERDAYA / BALANGAN</span></span></Link>
  <nav id="mobile-nav" className={`nav-links ${open?"nav-open":""}`} aria-label="Navigasi utama">{nav.map(item=><Link key={item.href} href={item.href} aria-current={item.href==='/' ? (path==='/'?'page':undefined) : path.startsWith(item.href)?'page':undefined}>{item.label}</Link>)}<Link className="nav-mobile-contact" href="/kontak">Kontak <Arrow diagonal/></Link></nav>
  <Link href="/kontak" className="nav-contact">Mari Terhubung <Arrow diagonal/></Link>
  <button className={`mobile-toggle ${open?'open':''}`} aria-label={open?'Tutup menu':'Buka menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}><span/><span/></button>
 </div></header>
}
