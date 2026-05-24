export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Freelance Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track time.{" "}
          <span className="text-[#58a6ff]">Generate invoices.</span>
          <br />Get paid faster.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log hours across projects, auto-generate professional PDF invoices with payment links, and stop chasing clients. Built for freelancers, consultants, and small agencies.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["One-click invoice PDF", "Built-in payment links", "Multi-project tracking", "Client management", "Auto time rounding", "Tax line items"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to run your freelance business</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited projects & clients",
              "Automatic invoice generation",
              "PDF export with your branding",
              "Integrated payment links",
              "Time tracking with reports",
              "Tax & expense line items",
              "Email invoice delivery",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150 text-center"
          >
            Get Started — $9/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the invoice generation work?",
              a: "After logging your hours, simply click \"Generate Invoice\" for any project. The app compiles your tracked time, applies your hourly rate, adds any expenses or tax lines, and produces a professional PDF — ready to send in seconds."
            },
            {
              q: "Can I add payment links to my invoices?",
              a: "Yes. Each invoice includes a payment link powered by Lemon Squeezy so your clients can pay instantly by card or bank transfer. You get notified the moment payment lands."
            },
            {
              q: "Is there a free trial?",
              a: "You can explore the app before entering payment details. The $9/mo plan unlocks all features including unlimited projects, PDF exports, and payment link integration."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TimeInvoice. All rights reserved.
      </footer>
    </main>
  );
}
