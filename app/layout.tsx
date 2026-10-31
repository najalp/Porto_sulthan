import type { Metadata, Viewport } from "next";
import type {ReactNode} from "react";
import { Analytics } from '@vercel/analytics/next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {siteUrl} from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: siteUrl(),
 title: {default:"Sulthan Mustafa Iberahim | BERDAYA Balangan", template:"%s | Sulthan BERDAYA"},
 description:"Mengenal Sulthan Mustafa Iberahim, finalis Nanang Galuh Balangan 2026, advokasi BERDAYA (Berbudaya dengan Gaya), dan kisah budaya delapan kecamatan di Kabupaten Balangan.",
 applicationName:"BERDAYA — Sulthan Mustafa Iberahim",
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"id_ID",title:"Sulthan Mustafa Iberahim — BERDAYA",description:"Berakar pada budaya, bergerak bersama generasi muda."},
 twitter:{card:"summary_large_image",title:"Sulthan Mustafa Iberahim — BERDAYA",description:"Berakar pada budaya, bergerak bersama generasi muda."},
};
export const viewport: Viewport = {themeColor:"#f6f0e7",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="id"><body><a href="#main" className="skip-link">Langsung ke konten</a><Header/>{children}<Footer/><Analytics /></body></html>}
