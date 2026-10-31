import Link from "next/link";
import {Arrow} from "@/components/Icons";
import {instagramUrl,tiktokUrl} from "@/lib/social";
export default function Footer(){return <footer className="site-footer"><div className="container">
 <div className="footer-top"><div><p className="eyebrow eyebrow-light">Dari Bumi Sanggam untuk masa depan</p><h2>Budaya tetap hidup<br/><em>ketika kita merawatnya.</em></h2></div><Link href="/berdaya" className="circle-action" aria-label="Pelajari BERDAYA"><Arrow diagonal/></Link></div>
 <div className="footer-bottom"><div className="footer-brand"><img src="/images/berdaya-logo.png" alt="" width="38" height="41"/><span>SULTHAN<br/>MUSTAFA IBERAHIM</span></div><div className="footer-links"><Link href="/tentang">Tentang</Link><Link href="/berdaya">BERDAYA</Link><Link href="/balangan">Balangan</Link><Link href="/galeri">Galeri</Link><Link href="/sumber">Sumber & kredit</Link><Link href="/kontak">Kontak</Link><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a><a href={tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok</a></div><div className="copyright">© {new Date().getFullYear()} BERDAYA. Dibuat dengan hormat untuk budaya Balangan.</div></div>
 </div></footer>}
