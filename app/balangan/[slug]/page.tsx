import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import PageIntro from "@/components/PageIntro";
import Photo from "@/components/Photo";
import {Arrow} from "@/components/Icons";
import {districts} from "@/lib/content";
import {photoById} from "@/lib/assets";
export function generateStaticParams(){return districts.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const district=districts.find(d=>d.slug===slug);return district?{title:`Kecamatan ${district.name}`,description:district.lead}:{title:"Kecamatan tidak ditemukan"}}
export default async function DistrictPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const district=districts.find(d=>d.slug===slug);if(!district)notFound();const index=districts.findIndex(d=>d.slug===slug);const previous=districts[(index-1+districts.length)%districts.length];const next=districts[(index+1)%districts.length];
 return <main id="main"><PageIntro index={district.number} eyebrow="JELAJAH KECAMATAN" title={<>Kecamatan<br/><em>{district.name}.</em></>} description={district.lead}/>
 <div className="container crumb"><Link href="/balangan">Jelajah Balangan</Link><span>/</span><span>{district.name}</span></div>
 <section className="district-detail"><div className="container district-detail-grid"><div className="district-main-image"><Photo id={district.imageId} className="fill-image" label={district.imageId ? (photoById(district.imageId)?.title || district.featured).toUpperCase() : `${district.name.toUpperCase()} / DOKUMENTASI MENYUSUL`}/>{district.note&&<p className="photo-context">{district.note}</p>}</div><div className="district-opening"><span className="section-number">{district.category.toUpperCase()}</span><h2>{district.featured}<span>.</span></h2><p>{district.lead}</p><div className="tag-row"><span>BALANGAN</span><span>KALIMANTAN SELATAN</span></div></div></div></section>
 <section className="section district-detail-points"><div className="container"><div className="section-heading"><div><span className="section-number">CERITA DAERAH</span><h2 className="editorial-title">Jejak yang dapat<br/><em>ditelusuri.</em></h2></div></div><div className="detail-points">{district.details.map((point,i)=><div className="detail-point" key={point.heading}><span>0{i+1}</span><div><h3>{point.heading}</h3><p>{point.description}</p></div></div>)}</div><div className="sources-inline"><strong>Rujukan informasi wilayah</strong>{district.source.map(src=><a key={src.url} href={src.url} target="_blank" rel="noreferrer">{src.label} <Arrow diagonal/></a>)}</div></div></section>
 <section className="next-district"><div className="container next-district-grid"><Link href={`/balangan/${previous.slug}`}><span>← KECAMATAN SEBELUMNYA</span><strong>{previous.name}</strong></Link><Link href={`/balangan/${next.slug}`}><span>KECAMATAN BERIKUTNYA →</span><strong>{next.name}</strong></Link></div></section>
 </main>
}
