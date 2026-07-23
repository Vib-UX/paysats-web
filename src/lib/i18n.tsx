"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "id" | "en";

const translations = {
  // Navbar
  "nav.joinWaitlist": { id: "Mulai nabung", en: "Start saving" },

  // Hero — rotating currency after "borrow" / "pinjam"
  "hero.title1": { id: "Nabung Bitcoin, ", en: "Save in Bitcoin, " },
  "hero.titleVerb": { id: "pinjam ", en: "borrow " },
  "hero.subtitle": {
    id: "DCA otomatis ke Bitcoin, lalu pinjam Rupiah langsung ke rekening bank atau e-wallet dengan jaminan BTC kamu, tanpa pernah menjual. Kustodi mandiri, didukung DeFi, mulai dari Rp 25.000.",
    en: "Auto-DCA into Bitcoin, then borrow Rupiah straight to your bank account or e-wallet against your BTC, without ever selling. Self-custody, DeFi-powered, from just Rp 25,000.",
  },
  "hero.howItWorks": { id: "Cara kerjanya", en: "How it works" },
  "hero.faqTitle": { id: "Pertanyaan umum", en: "Frequently asked questions" },

  // Social proof
  "social.tagline": {
    id: "Jangan sampai ketinggalan",
    en: "Don\u0027t get left behind",
  },
  "social.stat1.value": { id: "100+", en: "100+" },
  "social.stat1.label": { id: "Pengguna aktif", en: "Active Users" },
  "social.stat2.value": { id: "Rp 10 Jt+", en: "Rp 10M+" },
  "social.stat2.label": { id: "Dialihkan ke sats", en: "Routed to Sats" },
  "social.stat3.value": { id: "Rp 25rb", en: "Rp 25K" },
  "social.stat3.label": { id: "Minimum DCA", en: "Minimum DCA" },

  // How it works
  "how.title": { id: "Cara kerja PaySats", en: "How PaySats works" },
  "how.subtitle": {
    id: "Dari daftar sampai DCA ke BTC dalam tiga langkah, didukung smart contract, tanpa perantara.",
    en: "From sign-up to DCA-ing into BTC in three steps, powered by smart contracts, no middlemen.",
  },
  "how.step1.title": { id: "Daftar dengan akun sosial", en: "Sign up with your socials" },
  "how.step1.desc": {
    id: "Smart wallet dibuat otomatis saat kamu masuk dengan Google, email, atau akun sosial. Tanpa seed phrase, tetap kustodi mandiri.",
    en: "A smart wallet is created automatically when you sign in with Google, email, or socials. No seed phrase, still self-custody.",
  },
  "how.step2.title": { id: "Buat BTC pocket & atur DCA", en: "Create a BTC pocket & set your DCA" },
  "how.step2.desc": {
    id: "Buat pocket untuk setiap tujuan, pilih jumlah dan frekuensi. Smart contract mengeksekusi otomatis, mulai dari Rp 25.000.",
    en: "Create a pocket for each goal, pick your amount and frequency. The smart contract executes automatically, starting from Rp 25,000.",
  },
  "how.step3.title": { id: "Pantau pertumbuhan kamu", en: "Watch your savings grow" },
  "how.step3.desc": {
    id: "DCA berjalan on-chain dengan biaya sangat kecil. Pantau setiap pocket tumbuh langsung di dashboard kamu.",
    en: "Your DCA runs on-chain with negligible fees. Track every pocket growing right from your dashboard.",
  },

  // Bitcoin Card
  "card.soon": { id: "Segera hadir", en: "Coming soon" },
  "card.title": { id: "Kartu Bitcoin PaySats", en: "The PaySats Bitcoin Card" },
  "card.subtitle": {
    id: "Kartu debit bertenaga Bitcoin pertama di Indonesia. Belanja pakai tabungan BTC kamu di mana saja Visa diterima.",
    en: "Indonesia\u0027s first Bitcoin-powered debit card. Spend your BTC savings anywhere Visa is accepted.",
  },
  "card.feat1.title": { id: "Bayar pakai Bitcoin, selesai dalam Rupiah.", en: "Pay with Bitcoin, settle in Rupiah." },
  "card.feat1.desc": {
    id: "Konversi otomatis saat transaksi, tanpa perlu jual manual.",
    en: "Seamless conversion at the point of sale, no manual selling required.",
  },
  "card.feat2.title": { id: "Terhubung ke BTC pocket kamu.", en: "Linked to your BTC pockets." },
  "card.feat2.desc": {
    id: "Pilih pocket mana untuk belanja, traveling, pengeluaran harian, atau saldo utama.",
    en: "Choose which pocket to spend from, travel, daily expenses, or your main balance.",
  },
  "card.feat3.title": { id: "Notifikasi real-time.", en: "Real-time notifications." },
  "card.feat3.desc": {
    id: "Notifikasi instan setiap transaksi, biar kamu selalu tahu uangmu ke mana.",
    en: "Instant alerts for every transaction, so you always know what\u0027s happening with your money.",
  },
  "card.cta": { id: "Mulai nabung di Bitcoin", en: "Start saving in Bitcoin" },

  // Why PaySats
  "whyPaySats.title": {
    id: "Lebih dari sekadar aplikasi kripto biasa",
    en: "More than just a regular crypto app",
  },
  "whyPaySats.subtitle": {
    id: "Nabung di Bitcoin, lalu pinjam Rupiah dengan jaminan BTC tanpa pernah menjualnya. Kustodi mandiri, didukung DeFi, biaya sangat kecil, dibangun untuk penabung Indonesia yang menginginkan kedaulatan penuh atas aset mereka.",
    en: "Save in Bitcoin, then borrow Rupiah against it without ever selling. Self-custody, DeFi-powered, with negligible fees, built for Indonesian savers who want full sovereignty over their assets.",
  },
  "whyPaySats.earlyAccessBadge": {
    id: "Mulai tabungan Bitcoin kamu",
    en: "Start your Bitcoin savings",
  },
  "whyPaySats.carousel.cta": {
    id: "Buat BTC pocket untuk setiap tujuan hidup, mulai nabung sekarang.",
    en: "Create a BTC pocket for every life goal, start saving today.",
  },
  "whyPaySats.goal1.title": { id: "Rumah Impian", en: "Dream Home" },
  "whyPaySats.goal1.label": { id: "Rumah", en: "Housing" },
  "whyPaySats.goal2.title": { id: "Pernikahan Sempurna", en: "Perfect Wedding" },
  "whyPaySats.goal2.label": { id: "Pernikahan", en: "Wedding" },
  "whyPaySats.goal3.title": { id: "Pensiun Tenang", en: "Peaceful Retirement" },
  "whyPaySats.goal3.label": { id: "Pensiun", en: "Retirement" },
  "whyPaySats.benefit1.title": {
    id: "DCA Satu Klik",
    en: "One-Click DCA",
  },
  "whyPaySats.benefit1.desc": {
    id: "Atur sekali, smart contract eksekusi otomatis. Rata-rata harga beli BTC tanpa repot.",
    en: "Set it once, the smart contract executes automatically. Average into BTC without lifting a finger.",
  },
  "whyPaySats.benefit2.title": {
    id: "Kustodi Mandiri",
    en: "Self-Custody",
  },
  "whyPaySats.benefit2.desc": {
    id: "Kunci privat tetap milik kamu. Tidak ada pihak ketiga yang memegang aset kamu, kedaulatan penuh.",
    en: "Your keys, your coins. No third party holds your assets, full self-sovereignty.",
  },
  "whyPaySats.benefit3.title": {
    id: "Mulai dari Rp 25.000",
    en: "Starting from Rp 25,000",
  },
  "whyPaySats.benefit3.desc": {
    id: "Tidak perlu modal besar. Mulai DCA ke Bitcoin dengan jumlah sekecil Rp 25.000 per pocket.",
    en: "No large capital needed. Start DCA-ing into Bitcoin with as little as Rp 25,000 per pocket.",
  },
  "whyPaySats.benefit4.title": {
    id: "Didukung Smart Contract",
    en: "Powered by Smart Contracts",
  },
  "whyPaySats.benefit4.desc": {
    id: "Setiap transaksi dieksekusi on-chain oleh smart contract. Transparan, tanpa perantara, dapat diverifikasi.",
    en: "Every transaction is executed on-chain by smart contracts. Transparent, trustless, and verifiable.",
  },
  "whyPaySats.benefit5.title": {
    id: "Biaya Sangat Kecil",
    en: "Negligible Fees",
  },
  "whyPaySats.benefit5.desc": {
    id: "Biaya transaksi hampir nol. Lebih banyak Rupiah kamu masuk ke Bitcoin, bukan ke biaya.",
    en: "Near-zero transaction fees. More of your Rupiah goes into Bitcoin, not into fees.",
  },
  "whyPaySats.benefit6.title": {
    id: "Sepenuhnya Terdesentralisasi",
    en: "Fully Decentralized",
  },
  "whyPaySats.benefit6.desc": {
    id: "Tidak ada server terpusat yang bisa disensor atau diretas. Protokol berjalan di blockchain, selalu aktif, selalu milik kamu.",
    en: "No central server to censor or hack. The protocol runs on the blockchain, always on, always yours.",
  },
  "whyPaySats.benefit7.title": {
    id: "Pinjam Tanpa Menjual",
    en: "Borrow Without Selling",
  },
  "whyPaySats.benefit7.desc": {
    id: "Cairkan Rupiah langsung ke rekening bank atau e-wallet dengan jaminan BTC kamu, tanpa menjual, tanpa kena pajak penjualan, dan BTC kamu tetap tumbuh.",
    en: "Unlock Rupiah straight to your bank account or e-wallet against your BTC, no selling, no taxable sale, and your Bitcoin keeps stacking.",
  },

  // Why BTC
  "whyBtc.title": { id: "Kenapa Bitcoin untuk tabungan?", en: "Why Bitcoin for your savings?" },
  "whyBtc.subtitle": {
    id: "Bitcoin menunjukkan apresiasi jangka panjang yang kuat sebagai penyimpan nilai. Dollar-cost averaging (DCA) meredam volatilitas, kamu membeli jumlah tetap secara rutin tanpa perlu menebak waktu pasar.",
    en: "Bitcoin has shown strong long-term appreciation as a store of value. Dollar-cost averaging (DCA) smooths out volatility, you buy a fixed amount regularly instead of trying to time the market.",
  },
  "whyBtc.point1.title": { id: "Pertumbuhan majemuk.", en: "Compound growth." },
  "whyBtc.point1.desc": {
    id: "Data historis menunjukkan BTC mengungguli banyak aset tradisional dalam jangka panjang.",
    en: "Historical data suggests BTC has outperformed many traditional assets over extended periods.",
  },
  "whyBtc.point2.title": { id: "DCA mengurangi risiko.", en: "DCA reduces risk." },
  "whyBtc.point2.desc": {
    id: "Menyebar pembelian dari waktu ke waktu menghindari stres beli sekaligus.",
    en: "Spreading buys over time avoids the stress of lump-sum timing.",
  },
  "whyBtc.point3.title": { id: "Mulai kecil.", en: "Start small." },
  "whyBtc.point3.desc": {
    id: "Dengan PaySats, kamu bisa DCA ke BTC mulai dari Rp 25.000 per pocket.",
    en: "With PaySats, you can DCA into BTC from as little as Rp 25,000 per pocket.",
  },
  "whyBtc.calculatorTitle": {
    id: "Berapa yang bisa kamu dapat jika menabung di BTC?",
    en: "How much could you have gained if you saved in BTC?",
  },
  "whyBtc.calculatorSubtitle": {
    id: "Bandingkan DCA ke Bitcoin dengan deposito, IHSG, dan emas (IDR).",
    en: "Compare DCA into Bitcoin vs time deposit, IHSG, and gold (IDR).",
  },
  "whyBtc.disclaimer": {
    id: "Data historis bersifat perkiraan. Kinerja masa lalu tidak menjamin hasil di masa depan.",
    en: "Historical data is approximate. Past performance does not guarantee future results.",
  },

  // Footer
  "footer.privacy": { id: "Privasi", en: "Privacy" },
  "footer.terms": { id: "Ketentuan", en: "Terms" },
  "footer.copyright": {
    id: "Dengan menggunakan PaySats kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi kami.",
    en: "By using PaySats you agree to our Terms of Service and Privacy Policy.",
  },

  // Video modal
  "modal.caption": {
    id: "Lihat cara kerja PaySats DCA dan BTC pocket dalam 30 detik.",
    en: "See how PaySats DCA and BTC pockets work in under 30 seconds.",
  },

  // Metadata
  "meta.title": {
    id: "Pinjam Rupiah dengan Jaminan Bitcoin | Tabungan Bitcoin Indonesia – PaySats",
    en: "Borrow Rupiah Against Bitcoin | Bitcoin Savings Indonesia – PaySats",
  },
  "meta.description": {
    id: "Pinjam Rupiah dengan jaminan Bitcoin tanpa menjual. Tabungan & DCA Bitcoin Indonesia dari Rp 25.000. Kustodi mandiri, didukung DeFi.",
    en: "Borrow Rupiah against Bitcoin without selling. Bitcoin savings & auto-DCA for Indonesia from Rp 25,000. Self-custody, DeFi-powered.",
  },

  // Content hub / internal links
  "hub.related": {
    id: "Jelajahi tabungan Bitcoin & pinjaman di Indonesia",
    en: "Explore Bitcoin savings & loans in Indonesia",
  },
  "hub.loans.title": {
    id: "Pinjam Rupiah dengan Jaminan Bitcoin",
    en: "Borrow Rupiah Against Bitcoin",
  },
  "hub.loans.desc": {
    id: "Cairkan Rupiah ke bank atau e-wallet tanpa menjual BTC kamu.",
    en: "Unlock Rupiah to your bank or e-wallet without selling your BTC.",
  },
  "hub.dca.title": {
    id: "Kalkulator Bitcoin DCA Indonesia",
    en: "Bitcoin DCA Calculator Indonesia",
  },
  "hub.dca.desc": {
    id: "Simulasikan DCA ke BTC vs deposito, IHSG, dan emas (IDR).",
    en: "Simulate BTC DCA vs deposits, IHSG, and gold in IDR.",
  },
  "hub.card.title": {
    id: "Kartu Bitcoin PaySats",
    en: "PaySats Bitcoin Card",
  },
  "hub.card.desc": {
    id: "Belanja pakai tabungan BTC, settle dalam Rupiah.",
    en: "Spend BTC savings, settle in Rupiah.",
  },
  "hub.blog.title": {
    id: "Panduan DCA & pinjaman crypto",
    en: "DCA & crypto lending guides",
  },
  "hub.blog.desc": {
    id: "Artikel Bahasa Indonesia untuk intent pencarian Bitcoin & pinjaman.",
    en: "Indonesian-focused guides for Bitcoin DCA and lending search intent.",
  },

  // Loans page
  "loans.badge": { id: "Pinjaman jaminan BTC", en: "BTC-backed loans" },
  "loans.title": {
    id: "Pinjam Rupiah dengan Jaminan Bitcoin",
    en: "Borrow Rupiah Against Bitcoin",
  },
  "loans.subtitle": {
    id: "Butuh likuiditas Rupiah tanpa menjual sats? Pinjam terhadap BTC kamu dan terima dana di rekening bank atau e-wallet Indonesia. Kustodi mandiri, didukung DeFi.",
    en: "Need Rupiah liquidity without selling your sats? Borrow against your BTC and receive funds in your Indonesian bank or e-wallet. Self-custody, DeFi-powered.",
  },
  "loans.cta": { id: "Mulai tabungan Bitcoin", en: "Start Bitcoin savings" },
  "loans.point1.title": { id: "Tanpa menjual Bitcoin", en: "No need to sell Bitcoin" },
  "loans.point1.desc": {
    id: "Tetap hold BTC jangka panjang sambil cairkan Rupiah untuk kebutuhan sehari-hari.",
    en: "Keep long-term BTC exposure while unlocking Rupiah for everyday needs.",
  },
  "loans.point2.title": { id: "Langsung ke bank / e-wallet", en: "Straight to bank / e-wallet" },
  "loans.point2.desc": {
    id: "Dana Rupiah dikirim ke rekening atau e-wallet Indonesia kamu.",
    en: "Rupiah funds go to your Indonesian bank account or e-wallet.",
  },
  "loans.point3.title": { id: "Dibangun di atas tabungan DCA", en: "Built on your DCA savings" },
  "loans.point3.desc": {
    id: "Akumulasi BTC dulu dari Rp 25.000, lalu pinjam saat butuh likuiditas.",
    en: "Stack BTC from Rp 25,000 first, then borrow when you need liquidity.",
  },
  "loans.faqTitle": {
    id: "FAQ pinjaman jaminan Bitcoin",
    en: "BTC-backed loan FAQ",
  },

  // DCA calculator page
  "dcaPage.badge": { id: "Bitcoin DCA Indonesia", en: "Bitcoin DCA Indonesia" },
  "dcaPage.title": {
    id: "Kalkulator Bitcoin DCA & FAQ untuk Penabung Indonesia",
    en: "Bitcoin DCA Calculator & FAQ for Indonesian Savers",
  },
  "dcaPage.subtitle": {
    id: "Bandingkan DCA Bitcoin dengan deposito, IHSG, dan emas dalam Rupiah. Cocok untuk pencarian jangka panjang seperti tabungan Bitcoin dan DCA bulanan.",
    en: "Compare Bitcoin DCA with deposits, IHSG, and gold in Rupiah. Built for long-tail queries around Bitcoin savings and monthly DCA.",
  },
  "dcaPage.faqTitle": {
    id: "FAQ Bitcoin DCA Indonesia",
    en: "Bitcoin DCA Indonesia FAQ",
  },

  // Bitcoin card page
  "cardPage.badge": { id: "Segera hadir", en: "Coming soon" },
  "cardPage.faqTitle": {
    id: "FAQ Kartu Bitcoin",
    en: "Bitcoin Card FAQ",
  },

  // Hub page
  "hubPage.badge": {
    id: "Pusat konten PaySats",
    en: "PaySats content hub",
  },
  "hubPage.title": {
    id: "Bitcoin DCA & Pinjaman Jaminan BTC di Indonesia",
    en: "Bitcoin DCA & BTC-Backed Loans in Indonesia",
  },
  "hubPage.subtitle": {
    id: "Satu tempat untuk memahami tabungan Bitcoin, kalkulator DCA, pinjam Rupiah dengan jaminan BTC, dan kartu Bitcoin PaySats.",
    en: "One place to learn Bitcoin savings, the DCA calculator, borrowing Rupiah against BTC, and the PaySats Bitcoin Card.",
  },

  // Blog
  "blog.badge": { id: "Blog PaySats", en: "PaySats Blog" },
  "blog.title": {
    id: "Bitcoin DCA & Pinjaman Crypto untuk Indonesia",
    en: "Bitcoin DCA & Crypto Lending for Indonesia",
  },
  "blog.subtitle": {
    id: "Artikel yang menargetkan intent pencarian Bahasa Indonesia seputar DCA Bitcoin dan pinjam Rupiah dengan jaminan BTC.",
    en: "Articles targeting Indonesian search intent around Bitcoin DCA and borrowing Rupiah against BTC.",
  },
  "blog.readMore": { id: "Baca selengkapnya", en: "Read more" },
  "blog.back": { id: "Kembali ke blog", en: "Back to blog" },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  /** Default ID to match Indonesia search / content strategy */
  const [locale, setLocale] = useState<Locale>("id");

  const toggleLocale = useCallback(
    () => setLocale((prev) => (prev === "id" ? "en" : "id")),
    [],
  );

  const t = useCallback(
    (key: TranslationKey) => translations[key]?.[locale] ?? key,
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
