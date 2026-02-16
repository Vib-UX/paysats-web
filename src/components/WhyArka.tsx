import { ARKA_GOALS_VIDEO } from "@/lib/constants";

const benefits = [
  {
    title: "Multiple BTC Pockets",
    description:
      "Housing, wedding, retirement, travel—create a dedicated pocket for each goal and DCA IDR into BTC per pocket.",
    icon: "🎯",
  },
  {
    title: "Auto DCA",
    description:
      "Set recurring buys and let Arka auto-invest your IDR into Bitcoin. Smooth out volatility with dollar-cost averaging.",
    icon: "📈",
  },
  {
    title: "Tokocrypto integration",
    description:
      "Secure virtual accounts via Tokocrypto. KYC-verified, trusted infrastructure for your BTC savings.",
    icon: "🛡️",
  },
  {
    title: "See all your savings in one place",
    description:
      "One dashboard, all your BTC pockets, clear progress on every goal. Start from as little as Rp 100.000.",
    icon: "📊",
  },
];

export function WhyArka() {
  return (
    <section className="bg-gradient-to-b from-arka-surface/50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Arka
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          DCA your IDR into Bitcoin for every savings goal. Built for Indonesian
          savers who want a modern, app-first approach.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-xl">
            <video
              src={ARKA_GOALS_VIDEO}
              className="w-full rounded-2xl border border-gray-200 shadow-lg"
              autoPlay
              playsInline
              muted
              loop
              controls
            >
              <track kind="captions" />
            </video>
            <p className="mt-3 text-center text-sm text-gray-600">
              Housing, wedding, retirement—create pockets for every goal.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-arka-primary/30 hover:shadow-lg"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {benefit.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
