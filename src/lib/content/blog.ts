export type BlogPost = {
  slug: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  date: string;
  keywords: string[];
  hub: "dca" | "loans" | "card";
  contentEn: string[];
  contentId: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bitcoin-dca-indonesia-panduan",
    title: "Bitcoin DCA Indonesia: A Practical Guide for Rupiah Savers",
    titleId: "Bitcoin DCA Indonesia: Panduan Praktis untuk Penabung Rupiah",
    description:
      "Learn how Bitcoin DCA works in Indonesia, why Rp 25,000 routines beat timing the market, and how PaySats automates self-custody savings.",
    descriptionId:
      "Pelajari cara kerja Bitcoin DCA di Indonesia, kenapa rutin Rp 25.000 lebih baik daripada timing pasar, dan bagaimana PaySats mengotomatiskan tabungan kustodi mandiri.",
    date: "2026-07-20",
    keywords: ["Bitcoin DCA Indonesia", "tabungan Bitcoin", "DCA Rupiah"],
    hub: "dca",
    contentEn: [
      "Dollar-cost averaging (DCA) means buying a fixed amount of Bitcoin on a schedule—daily, weekly, or monthly—instead of trying to catch the perfect price.",
      "For Indonesian savers, DCA in Rupiah terms removes the stress of lump-sum timing. Starting from Rp 25,000 per pocket on PaySats makes Bitcoin savings Indonesia accessible without a large bankroll.",
      "Historically, consistent BTC accumulation has outperformed many local alternatives over long horizons, though past performance is not a guarantee. Pair DCA with self-custody so your sats stay yours.",
      "PaySats runs DCA via smart contracts: create a goal pocket, set amount and frequency, and let on-chain execution do the rest with negligible fees.",
    ],
    contentId: [
      "Dollar-cost averaging (DCA) berarti membeli Bitcoin dengan jumlah tetap secara berkala—harian, mingguan, atau bulanan—bukan menebak harga terbaik.",
      "Bagi penabung Indonesia, DCA dalam Rupiah mengurangi stres timing pasar. Mulai dari Rp 25.000 per pocket di PaySats membuat tabungan Bitcoin Indonesia terjangkau tanpa modal besar.",
      "Secara historis, akumulasi BTC konsisten sering mengungguli banyak alternatif lokal dalam jangka panjang, meski kinerja masa lalu tidak menjamin hasil. Padukan DCA dengan kustodi mandiri agar sats tetap milikmu.",
      "PaySats menjalankan DCA lewat smart contract: buat pocket tujuan, atur jumlah dan frekuensi, biarkan eksekusi on-chain bekerja dengan biaya sangat kecil.",
    ],
  },
  {
    slug: "pinjam-rupiah-jaminan-bitcoin",
    title: "Borrow Rupiah Against Bitcoin Without Selling Your Sats",
    titleId: "Pinjam Rupiah dengan Jaminan Bitcoin tanpa Menjual Sats",
    description:
      "Need Rupiah liquidity but want to keep Bitcoin exposure? Learn how BTC-backed loans work for Indonesian users on PaySats.",
    descriptionId:
      "Butuh likuiditas Rupiah tapi ingin tetap hold Bitcoin? Pelajari cara kerja pinjaman jaminan BTC untuk pengguna Indonesia di PaySats.",
    date: "2026-07-21",
    keywords: [
      "Borrow Rupiah Against Bitcoin",
      "pinjaman crypto",
      "jaminan Bitcoin",
    ],
    hub: "loans",
    contentEn: [
      "Selling Bitcoin for cash can trigger taxes, fees, and lost upside. Borrowing Rupiah against Bitcoin keeps your long-term stack intact while unlocking liquidity.",
      "PaySats is built for Indonesian savers who auto-DCA into BTC, then borrow against that collateral—funds can go straight to a bank account or e-wallet.",
      "Self-custody and DeFi-powered rails mean you are not handing keys to a traditional custodian. Always understand liquidation risk before borrowing.",
      "If your goal is Bitcoin savings Indonesia with occasional Rupiah needs, BTC-backed credit is often smarter than panic-selling on a dip.",
    ],
    contentId: [
      "Menjual Bitcoin demi cash bisa memicu pajak, biaya, dan kehilangan upside. Meminjam Rupiah dengan jaminan Bitcoin menjaga stack jangka panjang sambil membuka likuiditas.",
      "PaySats dibangun untuk penabung Indonesia yang auto-DCA ke BTC, lalu meminjam terhadap jaminan itu—dana bisa langsung ke rekening bank atau e-wallet.",
      "Kustodi mandiri dan rel DeFi berarti kamu tidak menyerahkan kunci ke kustodian tradisional. Pahami risiko likuidasi sebelum meminjam.",
      "Jika tujuanmu adalah tabungan Bitcoin Indonesia dengan kebutuhan Rupiah sesekali, kredit jaminan BTC sering lebih bijak daripada panic-sell saat harga turun.",
    ],
  },
  {
    slug: "kenapa-tabungan-bitcoin-mengalahkan-deposito",
    title: "Why Bitcoin Savings Can Beat Deposits for Long-Term Goals",
    titleId: "Kenapa Tabungan Bitcoin Bisa Mengungguli Deposito untuk Tujuan Jangka Panjang",
    description:
      "Compare Bitcoin DCA vs Indonesian deposits, gold, and IHSG—and see when self-custody BTC savings make sense.",
    descriptionId:
      "Bandingkan Bitcoin DCA vs deposito Indonesia, emas, dan IHSG—serta kapan tabungan BTC kustodi mandiri masuk akal.",
    date: "2026-07-22",
    keywords: [
      "Bitcoin Savings Indonesia",
      "DCA vs deposito",
      "tabungan Bitcoin",
    ],
    hub: "dca",
    contentEn: [
      "Time deposits offer predictability but often lose to inflation and asset appreciation over multi-year goals like housing or retirement.",
      "Bitcoin is volatile short-term. DCA smooths entry prices so Indonesian savers can build exposure without timing tops and bottoms.",
      "Use the PaySats IDR DCA calculator to compare historical paths versus deposits, IHSG, and gold—then decide based on your horizon and risk tolerance.",
      "Combine pockets for life goals with the option to borrow Rupiah against Bitcoin later, so you are not forced to sell when cash needs appear.",
    ],
    contentId: [
      "Deposito memberi kepastian, tetapi sering kalah dari inflasi dan apresiasi aset untuk tujuan multi-tahun seperti rumah atau pensiun.",
      "Bitcoin volatil dalam jangka pendek. DCA meratakan harga masuk agar penabung Indonesia bisa membangun eksposur tanpa menebak puncak dan lembah.",
      "Gunakan kalkulator DCA IDR PaySats untuk membandingkan jalur historis versus deposito, IHSG, dan emas—lalu putuskan sesuai horizon dan toleransi risiko.",
      "Padukan pocket tujuan hidup dengan opsi pinjam Rupiah terhadap Bitcoin nanti, agar kamu tidak terpaksa jual saat kebutuhan cash muncul.",
    ],
  },
  {
    slug: "what-is-paysats",
    title: "What Is PaySats and How Does It Work?",
    titleId: "Apa Itu PaySats dan Bagaimana Cara Kerjanya?",
    description:
      "PaySats explained: self-custody Bitcoin DCA from Rp 25,000, goal pockets, and borrowing Rupiah against BTC without selling.",
    descriptionId:
      "Penjelasan PaySats: DCA Bitcoin kustodi mandiri dari Rp 25.000, pocket tujuan, dan pinjam Rupiah dengan jaminan BTC tanpa menjual.",
    date: "2026-07-23",
    keywords: ["what is PaySats", "PaySats how it works", "tabungan Bitcoin"],
    hub: "dca",
    contentEn: [
      "PaySats is a Bitcoin savings app for Indonesia. You auto-DCA into BTC pockets for life goals, keep self-custody via a smart wallet, and can later borrow Rupiah against your Bitcoin without selling.",
      "Sign in with Google, email, or socials—a smart wallet is created automatically. Create a pocket, set amount and frequency from Rp 25,000, and smart contracts execute DCA on-chain.",
      "When you need cash, BTC-backed loans unlock Rupiah to your bank or e-wallet while your sats stay as collateral. A Bitcoin Card for spending with Rupiah settlement is coming soon.",
      "Start at https://app.paysats.exchange or explore the product hub at /bitcoin-indonesia.",
    ],
    contentId: [
      "PaySats adalah aplikasi tabungan Bitcoin untuk Indonesia. Kamu auto-DCA ke pocket BTC untuk tujuan hidup, kustodi mandiri lewat smart wallet, dan bisa pinjam Rupiah dengan jaminan Bitcoin tanpa menjual.",
      "Masuk dengan Google, email, atau sosial—smart wallet dibuat otomatis. Buat pocket, atur jumlah dan frekuensi dari Rp 25.000, smart contract mengeksekusi DCA on-chain.",
      "Saat butuh cash, pinjaman jaminan BTC mencairkan Rupiah ke bank atau e-wallet sementara sats tetap jadi jaminan. Kartu Bitcoin untuk belanja dengan settle Rupiah segera hadir.",
      "Mulai di https://app.paysats.exchange atau jelajahi hub produk di /bitcoin-indonesia.",
    ],
  },
  {
    slug: "paysats-review-aman-untuk-tabungan-bitcoin",
    title: "PaySats Review: Is It Safe for Bitcoin Savings in Indonesia?",
    titleId: "Review PaySats: Apakah Aman untuk Tabungan Bitcoin di Indonesia?",
    description:
      "A practical PaySats safety review for Indonesian users—self-custody, on-chain DCA, loan risks, and who it is for.",
    descriptionId:
      "Review keamanan PaySats untuk pengguna Indonesia—kustodi mandiri, DCA on-chain, risiko pinjaman, dan untuk siapa cocok.",
    date: "2026-07-23",
    keywords: ["PaySats review", "PaySats aman", "Bitcoin savings Indonesia"],
    hub: "dca",
    contentEn: [
      "Safety for a Bitcoin savings app usually means custody model, execution transparency, and clear risk disclosure. PaySats is designed around self-custody smart wallets and on-chain DCA—not a classic centralized custodian holding your coins.",
      "Automated investing from Rp 25,000 reduces operational mistakes, but Bitcoin remains volatile. Historical calculator comparisons are educational, not guarantees.",
      "BTC-backed borrowing adds liquidation risk if collateral value drops. Only borrow what you understand; selling is still an option if you prefer zero leverage risk.",
      "For beginners who want Bitcoin savings Indonesia with goal pockets, PaySats is purpose-built. Read Terms and Privacy, start small, and use the DCA calculator before committing size.",
    ],
    contentId: [
      "Keamanan aplikasi tabungan Bitcoin biasanya soal model kustodi, transparansi eksekusi, dan pengungkapan risiko. PaySats dirancang dengan smart wallet kustodi mandiri dan DCA on-chain—bukan kustodian terpusat klasik yang memegang koinmu.",
      "Investasi otomatis dari Rp 25.000 mengurangi kesalahan operasional, tetapi Bitcoin tetap volatil. Perbandingan kalkulator bersifat edukatif, bukan jaminan.",
      "Pinjaman jaminan BTC menambah risiko likuidasi jika nilai jaminan turun. Pinjam hanya yang kamu pahami; menjual tetap opsi jika kamu tidak ingin risiko leverage.",
      "Untuk pemula yang ingin tabungan Bitcoin Indonesia dengan pocket tujuan, PaySats dibuat untuk itu. Baca Ketentuan dan Privasi, mulai kecil, dan pakai kalkulator DCA sebelum menambah nominal.",
    ],
  },
  {
    slug: "pluang-vs-paysats",
    title: "Pluang vs PaySats for Goal-Based Crypto Investing",
    titleId: "Pluang vs PaySats untuk Investasi Kripto Berbasis Tujuan",
    description:
      "Compare Pluang and PaySats: multi-asset brokerage vs self-custody Bitcoin DCA pockets and BTC-backed Rupiah loans.",
    descriptionId:
      "Bandingkan Pluang dan PaySats: broker multi-aset vs pocket DCA Bitcoin kustodi mandiri dan pinjaman Rupiah jaminan BTC.",
    date: "2026-07-23",
    keywords: ["Pluang vs PaySats", "goal-based crypto investing", "tabungan Bitcoin"],
    hub: "dca",
    contentEn: [
      "Pluang is widely known in Indonesia for multi-asset investing. PaySats is narrower on purpose: automated Bitcoin savings with goal pockets and the option to borrow Rupiah against BTC.",
      "Choose Pluang-style apps when you want stocks, gold, or many cryptos in one brokerage UX. Choose PaySats when your primary goal is stacking Bitcoin automatically from Rp 25,000 with self-custody rails.",
      "Goal-based on PaySats means separate BTC pockets (home, wedding, retirement) plus later liquidity via loans without selling—useful if you refuse to break a long-term BTC thesis for short-term cash.",
      "Many users can use both: diversified portfolio elsewhere, Bitcoin DCA + borrow rails on PaySats.",
    ],
    contentId: [
      "Pluang dikenal luas di Indonesia untuk investasi multi-aset. PaySats lebih fokus: tabungan Bitcoin otomatis dengan pocket tujuan dan opsi pinjam Rupiah dengan jaminan BTC.",
      "Pilih aplikasi gaya Pluang jika kamu ingin saham, emas, atau banyak kripto dalam satu UX broker. Pilih PaySats jika tujuan utamamu menumpuk Bitcoin otomatis dari Rp 25.000 dengan rel kustodi mandiri.",
      "Goal-based di PaySats berarti pocket BTC terpisah (rumah, pernikahan, pensiun) plus likuiditas lewat pinjaman tanpa menjual—berguna jika kamu tidak mau merusak tesis BTC jangka panjang demi cash jangka pendek.",
      "Banyak pengguna bisa memakai keduanya: portofolio diversifikasi di tempat lain, DCA Bitcoin + pinjaman di PaySats.",
    ],
  },
  {
    slug: "indodax-alternatives-bitcoin-dca-indonesia",
    title: "Indodax Alternatives for Automated Bitcoin Savings in Indonesia",
    titleId: "Alternatif Indodax untuk Tabungan Bitcoin Otomatis di Indonesia",
    description:
      "Looking beyond exchange trading? How PaySats compares as an Indodax alternative for automated Bitcoin DCA and savings.",
    descriptionId:
      "Cari di luar trading exchange? Bagaimana PaySats sebagai alternatif Indodax untuk DCA dan tabungan Bitcoin otomatis.",
    date: "2026-07-23",
    keywords: [
      "Indodax alternatives",
      "Bitcoin DCA Indonesia",
      "automated Bitcoin savings",
    ],
    hub: "dca",
    contentEn: [
      "Indodax is a leading Indonesian crypto exchange—excellent when you want to trade pairs. Automated long-term Bitcoin savings is a different job.",
      "PaySats focuses on scheduled DCA into self-custody BTC pockets from Rp 25,000, not order-book trading. That makes it a strong alternative when your prompt is “save in Bitcoin every month,” not “trade the dip.”",
      "If you already buy on an exchange, you can still move to a savings workflow: set recurring buys via PaySats pockets and keep coins under self-custody smart-wallet design.",
      "Compare outcomes with the IDR DCA calculator, then start a pocket when ready.",
    ],
    contentId: [
      "Indodax adalah exchange kripto terkemuka di Indonesia—sangat berguna untuk trading pair. Tabungan Bitcoin otomatis jangka panjang adalah pekerjaan berbeda.",
      "PaySats fokus pada DCA terjadwal ke pocket BTC kustodi mandiri dari Rp 25.000, bukan trading order book. Ini alternatif kuat jika prompt-mu “nabung Bitcoin tiap bulan,” bukan “trading dip.”",
      "Jika sudah beli di exchange, kamu tetap bisa pindah ke alur tabungan: atur pembelian rutin lewat pocket PaySats dan jaga koin dalam desain smart wallet kustodi mandiri.",
      "Bandingkan hasil dengan kalkulator DCA IDR, lalu mulai pocket saat siap.",
    ],
  },
  {
    slug: "reku-alternatives-borrow-against-bitcoin",
    title: "Reku Alternatives: Borrow Against Bitcoin in Indonesia",
    titleId: "Alternatif Reku: Pinjam dengan Jaminan Bitcoin di Indonesia",
    description:
      "Need Rupiah liquidity against BTC? How PaySats fits as an alternative for borrowing against Bitcoin without selling.",
    descriptionId:
      "Butuh likuiditas Rupiah terhadap BTC? Bagaimana PaySats sebagai alternatif pinjam dengan jaminan Bitcoin tanpa menjual.",
    date: "2026-07-23",
    keywords: [
      "Reku alternatives",
      "borrow against Bitcoin Indonesia",
      "pinjam Rupiah jaminan Bitcoin",
    ],
    hub: "loans",
    contentEn: [
      "Indonesian users searching for Reku alternatives often want fiat liquidity while staying in crypto. PaySats addresses that with BTC-backed Rupiah loans tied to your savings stack.",
      "Flow: accumulate Bitcoin via DCA pockets, then borrow against collateral—funds can go to a bank account or e-wallet without a spot sale of BTC.",
      "Always model liquidation risk. Borrowing is not free money; it is credit secured by volatile collateral.",
      "Product details: /loans. Pair with /dca-calculator if you are still building the stack.",
    ],
    contentId: [
      "Pengguna Indonesia yang mencari alternatif Reku sering ingin likuiditas fiat sambil tetap di kripto. PaySats menjawab itu dengan pinjaman Rupiah jaminan BTC yang terhubung ke stack tabunganmu.",
      "Alur: akumulasi Bitcoin lewat pocket DCA, lalu pinjam terhadap jaminan—dana bisa ke rekening bank atau e-wallet tanpa jual spot BTC.",
      "Selalu modelkan risiko likuidasi. Meminjam bukan uang gratis; ini kredit dengan jaminan volatil.",
      "Detail produk: /loans. Padukan dengan /dca-calculator jika masih membangun stack.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByHub(hub: BlogPost["hub"]) {
  return blogPosts.filter((post) => post.hub === hub);
}
