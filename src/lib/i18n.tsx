"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "id" | "en";

const translations = {
  // Navbar
  "nav.joinWaitlist": { id: "Gabung waitlist", en: "Join waitlist" },

  // Hero
  "hero.title1": { id: "Nabung di ", en: "Save into " },
  "hero.titleAccent": { id: "BTC Pockets", en: "BTC Pockets" },
  "hero.subtitle": {
    id: "Buat target tabungan dan investasi otomatis ke Bitcoin. DCA Rupiah ke BTC untuk setiap tujuan—mulai dari Rp 100.000.",
    en: "Create savings goals and auto-invest into Bitcoin. DCA your IDR into BTC for each goal—start with as little as Rp 100.000.",
  },
  "hero.earlyAccess": { id: "Akses lebih awal", en: "Get early access" },
  "hero.howItWorks": { id: "Cara kerjanya", en: "How it works" },

  // Social proof badges
  "social.badge1": { id: "Nabung di BTC Pockets", en: "Save into BTC Pockets" },
  "social.badge2": { id: "Auto DCA IDR → BTC", en: "Auto DCA IDR → BTC" },
  "social.badge3": { id: "Aman & terverifikasi KYC", en: "Secure & KYC-verified" },
  "social.badge4": { id: "Mulai dari Rp 100.000", en: "Start from Rp 100.000" },

  // How it works
  "how.title": { id: "Cara kerja Arka", en: "How Arka works" },
  "how.subtitle": {
    id: "Dari daftar sampai DCA ke BTC dalam tiga langkah mudah—tanpa ke bank, tanpa ribet.",
    en: "Get from signup to DCA-ing into BTC in three simple steps—no branch visits, no paperwork.",
  },
  "how.step1.title": { id: "Masuk dengan HP atau Google", en: "Continue with phone or Google" },
  "how.step1.desc": {
    id: "Daftar pakai nomor HP (OTP) atau Google. Verifikasi cepat—tanpa ke cabang bank.",
    en: "Sign up with your phone number (OTP) or Google. Quick verification—no branch visits.",
  },
  "how.step2.title": { id: "Buat BTC pocket kamu", en: "Create your BTC pockets" },
  "how.step2.desc": {
    id: "Siapkan akun Arka dan buat pocket untuk setiap tujuan. Beri nama, tentukan target, dan mulai nabung.",
    en: "Set up your Arka account and create pockets for each goal. Name them, set targets, and start saving.",
  },
  "how.step3.title": { id: "Auto DCA & pantau pertumbuhan", en: "Auto DCA and track growth" },
  "how.step3.desc": {
    id: "Selesaikan KYC, lalu mulai investasi otomatis IDR ke BTC. Pantau tabungan kamu tumbuh di setiap pocket.",
    en: "Complete KYC, get approved, and start auto-investing IDR into BTC. Watch your savings grow across every pocket.",
  },

  // Bitcoin Card
  "card.soon": { id: "Segera hadir", en: "Coming soon" },
  "card.title": { id: "Kartu Bitcoin Arka", en: "The Arka Bitcoin Card" },
  "card.subtitle": {
    id: "Kartu debit bertenaga Bitcoin pertama di Indonesia. Belanja pakai tabungan BTC kamu di mana saja Visa diterima.",
    en: "Indonesia\u0027s first Bitcoin-powered debit card. Spend your BTC savings anywhere Visa is accepted.",
  },
  "card.feat1.title": { id: "Bayar pakai Bitcoin, selesai dalam Rupiah.", en: "Pay with Bitcoin, settle in Rupiah." },
  "card.feat1.desc": {
    id: "Konversi otomatis saat transaksi—tanpa perlu jual manual.",
    en: "Seamless conversion at the point of sale—no manual selling required.",
  },
  "card.feat2.title": { id: "Terhubung ke BTC pocket kamu.", en: "Linked to your BTC pockets." },
  "card.feat2.desc": {
    id: "Pilih pocket mana untuk belanja—traveling, pengeluaran harian, atau saldo utama.",
    en: "Choose which pocket to spend from—travel, daily expenses, or your main balance.",
  },
  "card.feat3.title": { id: "Notifikasi real-time.", en: "Real-time notifications." },
  "card.feat3.desc": {
    id: "Notifikasi instan setiap transaksi, biar kamu selalu tahu uangmu ke mana.",
    en: "Instant alerts for every transaction, so you always know what\u0027s happening with your money.",
  },
  "card.cta": { id: "Dapatkan akses awal kartu", en: "Get early access to the card" },

  // Why Arka
  "whyArka.title": {
    id: "Lebih dari sekadar aplikasi kripto biasa",
    en: "More than just a regular crypto app",
  },
  "whyArka.subtitle": {
    id: "DCA Rupiah ke Bitcoin untuk setiap target tabungan. Dibangun untuk penabung Indonesia yang ingin cara modern dan serba-aplikasi.",
    en: "DCA your IDR into Bitcoin for every savings goal. Built for Indonesian savers who want a modern, app-first approach.",
  },
  "whyArka.earlyAccessBadge": {
    id: "Akses awal terbatas",
    en: "Limited Early Access",
  },
  "whyArka.carousel.cta": {
    id: "Buat BTC pocket untuk setiap tujuan hidup—mulai nabung sekarang.",
    en: "Create a BTC pocket for every life goal—start saving today.",
  },
  "whyArka.goal1.title": { id: "Rumah Impian", en: "Dream Home" },
  "whyArka.goal1.label": { id: "Rumah", en: "Housing" },
  "whyArka.goal2.title": { id: "Pernikahan Sempurna", en: "Perfect Wedding" },
  "whyArka.goal2.label": { id: "Pernikahan", en: "Wedding" },
  "whyArka.goal3.title": { id: "Pensiun Tenang", en: "Peaceful Retirement" },
  "whyArka.goal3.label": { id: "Pensiun", en: "Retirement" },
  "whyArka.benefit1.title": {
    id: "Auto DCA (Tabungan Rutin)",
    en: "Auto DCA (Regular Savings)",
  },
  "whyArka.benefit1.desc": {
    id: "Rata-rata harga beli Bitcoin secara otomatis. Kurangi risiko gejolak harga.",
    en: "Automatically average Bitcoin purchase prices. Reduce the risk of price fluctuations.",
  },
  "whyArka.benefit2.title": { id: "Multi-pocket (Pocket)", en: "Multi-pocket (Pocket)" },
  "whyArka.benefit2.desc": {
    id: "Pisahkan tabungan Bitcoin untuk tujuan berbeda: dana pernikahan, dana rumah, atau dana pensiun.",
    en: "Separate your Bitcoin savings for different purposes: wedding funds, house funds, or retirement funds.",
  },
  "whyArka.benefit3.title": {
    id: "Mulai dari Rp 50.000",
    en: "Starting from IDR 50,000",
  },
  "whyArka.benefit3.desc": {
    id: "Tidak perlu modal besar. Denominasi kecil memudahkan siapa saja mulai menabung.",
    en: "No need for large capital. Small denominations make it easy for anyone to start saving.",
  },
  "whyArka.benefit4.title": {
    id: "Legal & Terdaftar",
    en: "Legal & Regulated",
  },
  "whyArka.benefit4.desc": {
    id: "Arka terdaftar resmi di Bappebti. Aset dan dana pengguna dijamin aman.",
    en: "Arka is officially registered with Bappebti. User assets and funds are guaranteed safe.",
  },
  "whyArka.benefit5.title": {
    id: "Tarik kapan saja",
    en: "Withdraw Anytime",
  },
  "whyArka.benefit5.desc": {
    id: "Tidak ada periode mengunci. Aset sepenuhnya milik kamu, dan bisa cair ke rekening bank dalam hitungan menit.",
    en: "There's no lock-up period. The assets are completely yours, and you can cash them into your bank account in minutes.",
  },
  "whyArka.benefit6.title": {
    id: "100% Transparan",
    en: "100% Transparent",
  },
  "whyArka.benefit6.desc": {
    id: "Tidak ada biaya tersembunyi. Spread dan biaya ditampilkan transparan sebelum transaksi.",
    en: "No hidden fees. Spreads and fees are transparently displayed before a transaction.",
  },

  // Why BTC
  "whyBtc.title": { id: "Kenapa Bitcoin untuk tabungan?", en: "Why Bitcoin for your savings?" },
  "whyBtc.subtitle": {
    id: "Bitcoin menunjukkan apresiasi jangka panjang yang kuat sebagai penyimpan nilai. Dollar-cost averaging (DCA) meredam volatilitas—kamu membeli jumlah tetap secara rutin tanpa perlu menebak waktu pasar.",
    en: "Bitcoin has shown strong long-term appreciation as a store of value. Dollar-cost averaging (DCA) smooths out volatility—you buy a fixed amount regularly instead of trying to time the market.",
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
    id: "Dengan Arka, kamu bisa DCA ke BTC mulai dari Rp 100.000 per pocket.",
    en: "With Arka, you can DCA into BTC from as little as Rp 100.000 per pocket.",
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

  // Waitlist section
  "waitlist.title": { id: "Gabung waitlist", en: "Join the waitlist" },
  "waitlist.subtitle": {
    id: "Jadi yang pertama tahu saat Arka buka. Dapatkan akses prioritas ke BTC pocket, bantu bentuk produk dengan feedback awal, dan perks eksklusif saat peluncuran.",
    en: "Be first to know when Arka opens. Get priority access to BTC pockets, influence the product with early feedback, and exclusive launch perks.",
  },

  // Waitlist form
  "form.name": { id: "Nama", en: "Name" },
  "form.optional": { id: "(opsional)", en: "(optional)" },
  "form.namePlaceholder": { id: "Masukkan nama kamu", en: "Enter your name" },
  "form.email": { id: "Email", en: "Email" },
  "form.emailPlaceholder": { id: "Masukkan email kamu", en: "Enter your email" },
  "form.phone": { id: "Telepon", en: "Phone" },
  "form.savingFor": { id: "Kamu menabung untuk apa?", en: "What are you mainly saving for?" },
  "form.selectOption": { id: "Pilih opsi", en: "Select an option" },
  "form.iAm": { id: "Saya adalah…", en: "I am…" },
  "form.userNew": { id: "Baru kenal neobank", en: "New to neobanks" },
  "form.userExisting": { id: "Sudah pakai digital banking", en: "Already use digital banking" },
  "form.userPower": { id: "Penabung aktif", en: "Power saver" },
  "form.submit": { id: "Gabung Waitlist", en: "Join Waitlist" },

  // Saving goals
  "goal.emergency": { id: "Dana darurat (BTC)", en: "Emergency fund (BTC)" },
  "goal.travel": { id: "Traveling", en: "Travel" },
  "goal.housing": { id: "Sewa / Rumah", en: "Rent / Housing" },
  "goal.gadgets": { id: "Gadget & teknologi", en: "Gadgets & tech" },
  "goal.wedding": { id: "Pernikahan", en: "Wedding" },
  "goal.education": { id: "Pendidikan", en: "Education" },
  "goal.business": { id: "Bisnis / Side hustle", en: "Business / Side hustle" },
  "goal.longterm": { id: "Tabungan BTC jangka panjang", en: "Long-term BTC savings" },
  "goal.other": { id: "Lainnya", en: "Other" },

  // Footer
  "footer.privacy": { id: "Privasi", en: "Privacy" },
  "footer.terms": { id: "Ketentuan", en: "Terms" },
  "footer.copyright": {
    id: "Dengan menggunakan Arka kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi kami.",
    en: "By using Arka you agree to our Terms of Service and Privacy Policy.",
  },

  // Video modal
  "modal.caption": {
    id: "Lihat cara kerja Arka DCA dan BTC pocket dalam 30 detik.",
    en: "See how Arka DCA and BTC pockets work in under 30 seconds.",
  },

  // Metadata
  "meta.title": { id: "Arka – Nabung di BTC Pockets", en: "Arka – Save into BTC Pockets" },
  "meta.description": {
    id: "Arka memungkinkan kamu DCA Rupiah ke Bitcoin untuk setiap target tabungan. Investasi otomatis. Mulai dari Rp 100.000. Dibangun untuk penabung Indonesia.",
    en: "Arka lets you DCA your IDR into Bitcoin for every savings goal. Auto-invest with ease. Start from Rp 100.000. Built for Indonesian savers.",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
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
