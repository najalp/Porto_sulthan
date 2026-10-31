import type {Metadata} from "next";
import PageIntro from "@/components/PageIntro";
import {photoAssets, localPhotoAssets, ccLicense} from "@/lib/assets";
import {districtDataSources} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sumber & Kredit Visual",
  description: "Atribusi foto, dokumentasi lokal, musik, dan rujukan informasi budaya Kabupaten Balangan."
};

export default function Sumber() {
  return <main id="main">
    <PageIntro index="06" eyebrow="TRANSPARANSI SUMBER" title={<>Kredit untuk<br/><em>setiap karya.</em></>} description="Sumber informasi dan dokumentasi dicatat agar pembaca dapat memeriksa asal-usulnya."/>
    <section className="section attribution-section"><div className="container">
      <span className="section-number">FOTO & LISENSI</span>
      <h2>Fotografi dari Wikimedia Commons.</h2>
      <p>Foto dalam daftar ini menggunakan lisensi <a href={ccLicense} target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)</a>. Bila diadaptasi, periksa ketentuan atribusi dan share-alike. Foto dan nama pihak ketiga bukan dukungan resmi terhadap BERDAYA.</p>
      <div className="credits-table">{photoAssets.map((asset,i)=><div key={asset.id} className="credits-row"><span>{String(i+1).padStart(2,"0")}</span><div><strong>{asset.title}</strong><small>Foto: {asset.author} · {asset.license}</small></div><a href={asset.source} target="_blank" rel="noreferrer">Buka sumber ↗</a></div>)}</div>
      <div className="sources-group">
        <span className="section-number">DOKUMENTASI YANG DIBERIKAN</span>
        <h2>Foto lokal dan musik.</h2>
        <p>Media berikut diberikan untuk portofolio ini; lisensinya tidak disamakan dengan foto Wikimedia Commons. Berkas audio mencantumkan judul “Basinggah di Balangan” dan artis “Promosipariwisata.Balangan” dalam metadata berkas.</p>
        <div className="credits-table">{localPhotoAssets.map((asset,i)=><div key={asset.id} className="credits-row"><span>{String(i+1).padStart(2,"0")}</span><div><strong>{asset.title}</strong><small>{asset.author}</small></div><a href={asset.localPath} target="_blank" rel="noreferrer">Lihat foto ↗</a></div>)}</div>
      </div>
      <div className="sources-group">
        <span className="section-number">RUJUKAN DATA & BUDAYA</span>
        <h2>Sumber informasi daerah.</h2>
        <div className="credits-table">{Object.values(districtDataSources).map((source,i)=><div className="credits-row" key={source.url}><span>{String(i+1).padStart(2,"0")}</span><strong>{source.label}</strong><a href={source.url} target="_blank" rel="noreferrer">Baca sumber ↗</a></div>)}</div>
        <p className="source-disclaimer">Naskah profil Sulthan berasal dari materi yang disampaikan klien. Materi budaya yang memerlukan penuturan komunitas tetap perlu diperiksa bersama pelaku budaya setempat.</p>
      </div>
    </div></section>
  </main>;
}
