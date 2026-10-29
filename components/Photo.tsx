"use client";
import {useState} from "react";
import {photoById, photoUrl} from "@/lib/assets";

type Props = {id?: string; className?: string; priority?:boolean; label?:string; ornamental?:boolean};
export default function Photo({id,className="",priority=false,label,ornamental=false}:Props){
 const [failed,setFailed]=useState(false);
 const asset=photoById(id);
 const isLoading = !asset || failed;
 return <div className={`photo-frame ${className} ${isLoading ? 'photo-fallback' : ''}`}>
  {asset && !failed && <img src={photoUrl(asset,1200)} alt={asset.description} loading={priority?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)} />}
  {isLoading && <div className="photo-placeholder" aria-label={asset ? `Foto ${asset.title} tidak dapat dimuat` : "Belum tersedia foto dokumentasi terverifikasi"}><div className="placeholder-sun"/><div className="placeholder-hills"/><span>{asset ? "Lihat foto asli melalui sumber" : "Dokumentasi menyusul"}</span></div>}
  {ornamental && <span className="photo-corner" aria-hidden="true">✦</span>}
  {label && <span className="photo-tag">{label}</span>}
  {asset && ("source" in asset
    ? <a className="photo-credit" href={asset.source} target="_blank" rel="noreferrer" aria-label={`Sumber foto ${asset.title} oleh ${asset.author}`}>Foto: {asset.author} ↗</a>
    : <span className="photo-credit">Foto: {asset.author}</span>)}
 </div>;
}
