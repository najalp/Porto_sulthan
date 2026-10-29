"use client";
import {useState} from "react";
import Link from "next/link";
import {districts} from "@/lib/content";
import Photo from "@/components/Photo";
import {Arrow} from "@/components/Icons";
export default function DistrictGrid({compact=false}:{compact?:boolean}){
 const [query,setQuery]=useState("");
 const items=districts.filter(d=>`${d.name} ${d.category} ${d.featured}`.toLowerCase().includes(query.toLowerCase().trim()));
 return <><div className="district-controls"><p>Delapan kecamatan. Beragam jejak cerita.</p>{!compact&&<label className="district-search"><span className="sr-only">Cari kecamatan atau topik</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m15.6 15.6 4.2 4.2"/></svg><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari wilayah atau topik..."/></label>}</div>
 <div className={`district-grid ${compact?'compact':''}`}>{items.map(district=><article key={district.slug} className="district-card"><div className="district-img"><Photo id={district.imageId}/><span className="district-number">{district.number}</span></div><Link href={`/balangan/${district.slug}`} className="district-card-body"><div className="district-card-top"><span>{district.category}</span><Arrow diagonal/></div><h3>{district.name}</h3><p>{district.featured}</p></Link></article>)}</div>
 {items.length===0&&<div className="empty-state">Belum ada kecamatan yang cocok. Coba kata kunci lain.</div>}
 </>;
}
