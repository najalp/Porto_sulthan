"use client";
import {useState} from "react";
// Ganti dengan file milik klien /public/images/sulthan-portrait.jpg (persetujuan wajib)
export default function Portrait({className=""}:{className?:string}) {
 const [missing,setMissing]=useState(false);
 return <div className={`portrait-frame ${className}`}>
  {!missing && <img src="/images/sulthan-portrait.jpg" alt="Potret Sulthan Mustafa Iberahim" onError={()=>setMissing(true)} />}
  {missing && <div className="portrait-placeholder"><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-letters">SM<span>I.</span></div><p>Ruang foto utama<br/>Sulthan Mustafa Iberahim</p></div>}
  <div className="portrait-caption"><span>01 / 01</span><span>FINALIS NANANG GALUH BALANGAN · 2026</span></div>
 </div>;
}
