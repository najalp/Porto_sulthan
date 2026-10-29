import type { Metadata, Viewport } from "next";
import type {ReactNode} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
 title: {default:"Sulthan Mustafa Iberahim | BERDAYA Balangan", template:"%s | Sulthan BERDAYA"},
 description:"Mengenal Sulthan Mustafa Iberahim, finalis Nanang Galuh Balangan 2026, advokasi BERDAYA (Berbudaya dengan Gaya), dan kisah budaya delapan kecamatan di Kabupaten Balangan.",
 applicationName:"BERDAYA — Sulthan Mustafa Iberahim",
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"id_ID",title:"Sulthan Mustafa Iberahim — BERDAYA",description:"Berakar pada budaya, bergerak bersama generasi muda.",images:[{url:"/og-berdaya.png",width:1200,height:630,alt:"Sulthan Mustafa Iberahim — BERDAYA Balangan"}]},
 twitter:{card:"summary_large_image",title:"Sulthan Mustafa Iberahim — BERDAYA",description:"Berakar pada budaya, bergerak bersama generasi muda.",images:["/og-berdaya.png"]},
};
export const viewport: Viewport = {themeColor:"#f6f0e7",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="id"><body><a href="#main" className="skip-link">Langsung ke konten</a><Header/>{children}<Footer/></body></html>}
