import type {Metadata} from "next";
import PageIntro from "@/components/PageIntro";
import {Arrow,Star} from "@/components/Icons";
import {instagramUrl,tiktokUrl} from "@/lib/social";

export const metadata: Metadata = {
  title: "Kontak & Kolaborasi",
  description: "Terhubung dengan Sulthan melalui Instagram dan TikTok untuk percakapan tentang BERDAYA dan budaya Balangan."
};

export default function Kontak() {
  return <main id="main">
    <PageIntro index="05" eyebrow="MARI TERHUBUNG" title={<>Percakapan baik<br/><em>dimulai dari sini.</em></>} description="Untuk gagasan, dokumentasi budaya, atau peluang kolaborasi yang selaras dengan semangat BERDAYA."/>
    <section className="section contact-section"><div className="container contact-grid">
      <div>
        <span className="section-number">TERBUKA UNTUK KOLABORASI</span>
        <h2>Merawat budaya<br/>adalah kerja <em>bersama.</em></h2>
        <p>Saya percaya percakapan dengan komunitas, pegiat seni, dan generasi muda dapat menjadi langkah awal untuk lebih mengenal Balangan.</p>
        <div className="contact-info">
          <div><span>DOMISILI / AKAR CERITA</span><strong>Lampihong, Kabupaten Balangan, Kalimantan Selatan</strong></div>
          <div><span>FOKUS ADVOKASI</span><strong>BERDAYA — Berbudaya dengan Gaya</strong></div>
        </div>
      </div>
      <div className="contact-panel">
        <Star/><span>HUBUNGI SULTHAN</span>
        <h3>Setiap cerita berharga, setiap kolaborasi punya makna.</h3>
        <p>Ikuti cerita dan hubungi Sulthan melalui akun media sosial berikut.</p>
        <div className="social-buttons">
          <a className="btn btn-dark" href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <Arrow diagonal/></a>
          <a className="btn btn-dark" href={tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok <Arrow diagonal/></a>
        </div>
      </div>
    </div></section>
  </main>;
}
