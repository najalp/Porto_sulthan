/** Konten draf. Data profil dari klien; sumber daerah pada setiap entri. */
export type District = {
  slug: string;
  name: string;
  number: string;
  category: string;
  lead: string;
  featured: string;
  details: {heading: string; description: string}[];
  imageId?: string;
  source: {label: string; url: string}[];
  note?: string;
};

export const districtDataSources = {
  rkpd: {label: "RKPD Kabupaten Balangan 2025 — daftar wisata sejarah, budaya, dan religi", url: "https://bapperida.balangankab.go.id/download/RKPD%20KABUPATEN%20BALANGAN%20TAHUN%202025.pdf"},
  transport: {label: "Rencana Induk Transportasi Darat Kabupaten Balangan — potensi pariwisata dan budaya", url: "https://ppid.balangankab.go.id/storage/dokumen/EuXrAE7btOJuW1lQmKFUTbMqB66hScFJNwXHEMl5.pdf"},
  dukcapil: {label: "Disdukcapil Balangan — agregat delapan kecamatan", url: "https://disdukcapil.balangankab.go.id/index.php/home/satukata"},
  mesiwah: {label: "DPRD Kalsel — Mesiwah Pare Gumboh di Desa Liyu dan Gunung Riut", url: "https://dprd.kalselprov.go.id/dprd-kalsel-apresiasi-tradisi-mesiwah-pare-gumboh-sebagai-warisan-budaya-dayak-deah/"},
  baharin: {label: "Media Center Balangan — Aruh Adat Baharin di Desa Tabuan", url: "https://mediacenter.balangankab.go.id/berita/aruh-adat-baharin-wujud-syukur-panen-dan-pelestarian-budaya-dayak-balangan-fqyEr"},
};

export const districts: District[] = [
  {
    slug: "paringin", name: "Paringin", number: "01", category: "Jejak sejarah", featured: "Monumen Perjuangan Paringin",
    lead: "Pusat pemerintahan dan aktivitas masyarakat Balangan, dengan monumen perjuangan sebagai salah satu penanda ruang kotanya.",
    details: [
      {heading: "Monumen Perjuangan Paringin", description: "Monumen di pusat Kota Paringin menjadi titik pengenalan sejarah lokal. Dokumentasi visualnya tersedia melalui Wikimedia Commons."},
      {heading: "Masjid Syuhada Kyai Martasura", description: "RKPD Kabupaten Balangan mencatat masjid di Desa Hujan Mas sebagai salah satu tujuan wisata religi di Kecamatan Paringin."},
      {heading: "Ruang hidup sehari-hari", description: "Pasar Paringin memperlihatkan ruang perjumpaan masyarakat. Pasar bukan tradisi tunggal kecamatan, melainkan penggambaran kehidupan sosial setempat."}
    ], imageId: "monumen", source: [districtDataSources.rkpd],
  },
  {
    slug: "paringin-selatan", name: "Paringin Selatan", number: "02", category: "Arsitektur & religi", featured: "Rumah Bubungan Tinggi Tarangan",
    lead: "Ruang yang mempertemukan jejak arsitektur Banjar, situs budaya, dan kawasan pusat kegiatan keagamaan.",
    details: [
      {heading: "Rumah Bubungan Tinggi Tarangan", description: "Rumah tradisional di Desa Tarangan tercatat dalam daftar wisata sejarah dan budaya kabupaten. Ini pintu masuk untuk mengenali arsitektur rumah Banjar."},
      {heading: "Pahajatan di Desa Tungkap", description: "RKPD juga mencantumkan Pahajatan di Desa Tungkap sebagai bagian dari wisata sejarah dan budaya."},
      {heading: "Masjid Al-Akbar", description: "Masjid Al-Akbar atau Islamic Centre di Batu Piring tercantum sebagai wisata religi, bukan tradisi adat khusus kecamatan."}
    ], imageId: "paringin-selatan-local", source: [districtDataSources.rkpd], note: "Foto menampilkan Masjid Al-Akbar, bukan Rumah Bubungan Tinggi Tarangan yang dibahas pada judul."
  },
  {
    slug: "lampihong", name: "Lampihong", number: "03", category: "Warisan sejarah", featured: "Jembatan Besi Lampihong",
    lead: "Tempat asal Sulthan; menyimpan jembatan bersejarah dan jejak wisata religi yang berkaitan erat dengan memori masyarakat.",
    details: [
      {heading: "Jembatan Besi Lampihong", description: "Jembatan peninggalan masa kolonial ini didokumentasikan oleh Tim WikiBanua 2.0. Arsitekturnya memperlihatkan lapisan sejarah infrastruktur daerah."},
      {heading: "Makam Datu Martika", description: "Situs di Desa Tampang ini tercatat sebagai tujuan wisata religi. Foto arsip tersedia melalui Wikimedia Commons."},
      {heading: "Lampihong bagi Sulthan", description: "Kecamatan ini menjadi titik awal kisah pribadi Sulthan yang lahir dan tumbuh di Balangan. Bagian pribadi ini bersumber dari naskah yang disampaikan klien."}
    ], imageId: "lampihong", source: [districtDataSources.transport, districtDataSources.rkpd],
  },
  {
    slug: "batu-mandi", name: "Batu Mandi", number: "04", category: "Bentang alam", featured: "Agrowisata dan kehidupan agraris",
    lead: "Bentang perkebunan dan jalur sungai memperlihatkan kedekatan kehidupan masyarakat dengan alam dan aktivitas pertanian.",
    details: [
      {heading: "Potensi agrowisata", description: "Rencana induk transportasi daerah mencatat agrowisata perkebunan di Kecamatan Batumandi sebagai potensi wisata alam."},
      {heading: "Lanskap Sungai Batu Mandi", description: "Sungai dan jembatan menjadi unsur lanskap daerah yang terdokumentasi melalui Wikimedia Commons. Foto bukan bukti adanya tradisi adat tertentu."},
      {heading: "Ruang penelusuran lanjutan", description: "Kisah tradisi lokal yang spesifik memerlukan wawancara atau rujukan dari pelaku budaya setempat sebelum dapat dipublikasikan sebagai fakta."}
    ], imageId: "batu-mandi", source: [districtDataSources.transport],
  },
  {
    slug: "awayan", name: "Awayan", number: "05", category: "Situs sejarah", featured: "Benteng Tundakan",
    lead: "Jejak sejarah yang dapat ditelusuri melalui kawasan Benteng Tundakan dan situs-situs bernilai lokal.",
    details: [
      {heading: "Benteng Tundakan", description: "Benteng Tundakan di Desa Tundakan tercatat sebagai salah satu wisata sejarah Kabupaten Balangan pada dokumen pemerintah daerah."},
      {heading: "Kubah Makam K.H. Tarmiji", description: "Situs di Desa Nungka masuk dalam daftar wisata religi Kabupaten Balangan."},
      {heading: "Cerita yang perlu dihimpun", description: "Penjelasan sejarah yang lebih rinci sebaiknya diperoleh dari arsip lokal atau tokoh masyarakat; jangan menyimpulkan fungsi dan usia benteng tanpa sumber tambahan."}
    ], imageId: "awayan-local", source: [districtDataSources.rkpd, districtDataSources.transport], note: "Foto lanskap Awayan; bukan dokumentasi Benteng Tundakan."
  },
  {
    slug: "juai", name: "Juai", number: "06", category: "Wisata religi", featured: "Makam Datu Kandang Haji",
    lead: "Wilayah dengan peninggalan religi yang menyimpan narasi tokoh dan sejarah masyarakat Banjar di Balangan.",
    details: [
      {heading: "Makam Datu Kandang Haji", description: "Makam di Desa Teluk Bayur dikenal sebagai salah satu situs religi kabupaten; dokumentasi cagar budayanya tersedia melalui WikiBanua."},
      {heading: "Cerita setempat", description: "Kisah mengenai tokoh dan praktik ziarah dapat ditambahkan setelah diperiksa dengan pengelola situs atau sumber sejarah setempat."},
      {heading: "Warisan yang dirawat", description: "Dokumentasi situs membantu mengenalkan pengetahuan lokal tanpa mengklaim tradisi yang belum terverifikasi."}
    ], imageId: "juai", source: [districtDataSources.rkpd, districtDataSources.transport],
  },
  {
    slug: "tebing-tinggi", name: "Tebing Tinggi", number: "07", category: "Masyarakat adat & alam", featured: "Dayak Pitap dan Pegunungan Meratus",
    lead: "Kawasan pegunungan di bagian timur Balangan, tempat hidup masyarakat Dayak Pitap dan lanskap Meratus.",
    details: [
      {heading: "Komunitas Dayak Pitap", description: "Dokumen pemerintah daerah menyebut kelompok Dayak Pitap di Kecamatan Tebing Tinggi sebagai bagian keragaman budaya Balangan."},
      {heading: "Gunung Hauk", description: "Gunung Hauk dan Gunung Hartanung tercantum sebagai potensi wisata alam dalam dokumen rencana transportasi daerah."},
      {heading: "Etika dokumentasi", description: "Tradisi spesifik Dayak Pitap sebaiknya dijelaskan dari sumber komunitas atau pendamping budaya, bukan disamakan dengan praktik masyarakat adat Halong."}
    ], imageId: "tebing-tinggi-local", source: [districtDataSources.transport], note: "Foto bentang alam; tidak menampilkan komunitas atau kegiatan adat Dayak Pitap."
  },
  {
    slug: "halong", name: "Halong", number: "08", category: "Warisan budaya hidup", featured: "Aruh Baharin & Mesiwah Pare Gumboh",
    lead: "Salah satu pusat kekayaan tradisi masyarakat Dayak Halong dan Dayak Deah, dengan ritual syukur panen serta aktivitas seni budaya.",
    details: [
      {heading: "Aruh Adat Baharin", description: "Ritual syukur panen yang dijalankan komunitas Dayak di wilayah Halong, antara lain didokumentasikan di Desa Tabuan pada Oktober 2026. Prosesi memiliki tata cara adat yang perlu dihormati."},
      {heading: "Mesiwah Pare Gumboh", description: "Tradisi syukur panen masyarakat Dayak Deah di Desa Liyu dan Gunung Riut. Dokumentasi atraksi seni dari acara ini tersedia di Wikimedia Commons."},
      {heading: "Desa Wisata Budaya Wadian Tambai", description: "Berkaitan dengan kegiatan budaya di Desa Kapul yang tercantum dalam daftar wisata sejarah dan budaya Kabupaten Balangan."}
    ], imageId: "mesiwah", source: [districtDataSources.rkpd, districtDataSources.mesiwah, districtDataSources.baharin],
  }
];

export const heritageStories = [
  {number: "01", label: "Tradisi syukur panen", title: "Mesiwah Pare Gumboh", place: "Halong · Dayak Deah", summary: "Perayaan adat yang merawat rasa syukur, kekerabatan, dan hubungan masyarakat dengan hasil bumi.", imageId: "mesiwah", url: "/balangan/halong"},
  {number: "02", label: "Jejak infrastruktur", title: "Jembatan Besi Lampihong", place: "Lampihong · Sejarah", summary: "Satu penanda perjalanan panjang Balangan yang masih dapat dikenali melalui arsitektur jembatan.", imageId: "lampihong", url: "/balangan/lampihong"},
  {number: "03", label: "Warisan religi", title: "Makam Datu Kandang Haji", place: "Juai · Sejarah dan religi", summary: "Situs bersejarah di Teluk Bayur yang menjadi bagian dari peta wisata religi daerah.", imageId: "juai", url: "/balangan/juai"},
];
