"use client"

export function BankingContent() {
  return (
    <section className="px-4 md:px-12 py-12 md:py-20 bg-brand-charcoal-black text-brand-soft-white">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Banking</h1>
        <p className="text-lg md:text-xl text-brand-smoke-gray">Manage your deposits and withdrawals securely.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: "Instant Deposits",
              desc: "Top-up your balance instantly using cards or crypto.",
            },
            {
              title: "Fast Withdrawals",
              desc: "Most payouts are processed under 10 minutes.",
            },
            {
              title: "Secure Payments",
              desc: "All transactions are protected by SSL encryption.",
            },
            {
              title: "24 / 7 Support",
              desc: "Need help? Our payment team is always online.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-brand-smoke-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
