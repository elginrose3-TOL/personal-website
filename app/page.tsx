import Image from "next/image";

// Tailwind note: we're using a custom dark crimson via hex (#8B0000). No theme change required.
// Drop your logo into /public/ftf-logo.png (or change the src below).
// If you're using the old pages directory, keep this file as pages/index.tsx or pages/index.jsx.
// If you're using the /app router, keep it as app/page.tsx or app/page.jsx and default export.

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#8B0000]" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
              {/* If your file has spaces like `F2F Today.png`, either rename it to `ftf-today.png` or URL-encode spaces as `%20`. */}
              {/* Option A (recommended): /public/ftf-today.png */}
              {/* <Image src="/ftf-today.png" alt="Fathers To Founders" fill className="object-contain" priority /> */}
              {/* Option B (keep original name): /public/F2F Today.png */}
              <Image src="/F2F%20Today.png" alt="Fathers To Founders" fill className="object-contain" priority />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight">Fathers To Founders</h1>
              <p className="text-sm opacity-90">Family Fortune in Motion</p>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-sm opacity-90">Hello, I'm</p>
            <p className="text-xl font-semibold">Elgin Rose Sr.</p>
            <p className="text-sm opacity-90">Web Developer & Designer</p>
          </div>
        </div>
      {/* Header end actions: Portal CTA */}
        <div className="relative bg-white/5 backdrop-blur px-4 pb-8">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm md:text-base opacity-95">
              Visit our main site to learn more about ECM, SoH-ACF pilots, and programs.
            </p>
            <a
              href="https://fatherstofounders.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-xl ring-2 ring-white/20 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-white/40 bg-gradient-to-r from-[#8B0000] to-indigo-600 text-white"
              aria-label="Open Fathers To Founders website in a new tab"
            >
              <span className="mr-2">Enter the FTF Portal</span>
              <span className="relative inline-flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Syntax of Humanity™ — Adaptive Coordination Framework (SoH-ACF)</h2>
          <p className="text-lg text-gray-700">
            A Clinical-Systems Model for Human Pattern Mapping, Care Navigation, and AI-Supported Intervention Sequencing.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="px-4 py-10 bg-white">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-4 text-[#8B0000]">Executive Summary</h3>
          <p className="mb-4">
            The Syntax of Humanity™ Adaptive Coordination Framework (SoH-ACF) is a clinical and systems-based methodology for understanding, measuring, and improving the interacting social, psychological, biological, and environmental forces that shape a person’s stability and forward movement. The model is designed for use in Enhanced Care Management (ECM), behavioral health, reentry navigation, youth services, crisis stabilization, and population health environments.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-gray-50 p-5">
              <h4 className="font-semibold mb-2">Biopsychosocial + Social Determinants of Health (SDoH)</h4>
              <p>Ensures alignment with clinical documentation standards, interdisciplinary care planning, and payer compliance.</p>
            </div>
            <div className="rounded-xl border bg-gray-50 p-5">
              <h4 className="font-semibold mb-2">Complex Adaptive Systems Theory + Dynamic State Modeling</h4>
              <p>Enables identification of pattern drivers, leverage points, and stabilization strategy sequencing. Supports eventual AI-assisted prediction and care guidance.</p>
            </div>
          </div>
          <p className="mt-4">The result is a system that focuses on drivers rather than symptoms, enabling more precise, dignified, and effective care.</p>
        </div>
      </section>

      {/* Core Clinical Problem */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-4 text-[#8B0000]">I. Core Clinical Problem</h3>
          <p className="mb-3">
            Clients often present with multiple overlapping conditions — housing instability, trauma history, disrupted identity formation, chronic medical conditions, economic strain, and inconsistent relational support. Traditional care planning frameworks tend to respond to surface-level problems, rather than to the underlying gravity domains that determine whether any plan can succeed.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Care plans that overwhelm instead of clarify</li>
            <li>High emotional burden on clients</li>
            <li>High burnout in frontline workers</li>
            <li>Stagnation instead of progress</li>
          </ul>
          <p className="mt-3 font-medium italic">SoH-ACF provides a map instead of a list.</p>
        </div>
      </section>

      {/* Eight Axes */}
      <section className="px-4 py-10 bg-white">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold mb-6 text-[#8B0000]">II. The Eight Axes Framework (1–10 Stability Continuum)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Axis</th>
                  <th className="p-3 border">Domain</th>
                  <th className="p-3 border">Definition</th>
                  <th className="p-3 border">Primary Indicators</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {axis:1,domain:"Housing Stability",def:"Permanence, safety, control of living environment",ind:"Eviction risk, shelter cycling, instability"},
                  {axis:2,domain:"Financial Security & Economic Flow",def:"Consistency of resources to meet needs",ind:"Irregular income, benefit gaps, debt pressure"},
                  {axis:3,domain:"Physical Health & Somatic Regulation",def:"Energy, pain, medical conditions, sleep, appetite",ind:"Chronic illness, fatigue, dysregulation"},
                  {axis:4,domain:"Mental & Emotional Health",def:"Regulation of mood and internal stress response",ind:"Shutdown, panic, dissociation, overwhelm"},
                  {axis:5,domain:"Environmental Safety & Exposure",def:"Predictability and safety of surroundings",ind:"Violence, coercion, chaotic environments"},
                  {axis:6,domain:"Social Connectedness & Belonging",def:"Support network stability and trust quality",ind:"Isolation, codependency, relational volatility"},
                  {axis:7,domain:"Identity, Meaning & Agency",def:"Self-concept, purpose, personal direction",ind:"“I can’t,” identity collapse, loss of direction"},
                  {axis:8,domain:"Hope-Force Orientation",def:"Forward momentum and willingness to re-engage",ind:"Persistence, initiative, belief in possibility"},
                ].map((row)=> (
                  <tr key={row.axis} className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border font-semibold">{row.axis}</td>
                    <td className="p-3 border">{row.domain}</td>
                    <td className="p-3 border">{row.def}</td>
                    <td className="p-3 border">{row.ind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4"><span className="font-semibold">Hope-Force determines whether change is possible.</span> If Hope-Force is depleted, diagnostic interventions stall. The work must begin with restoring operational capacity for movement.</p>
        </div>
      </section>

      {/* Gravity Points */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">III. Gravity Points: The Primary Leverage Domains</h3>
          <p className="mb-3">
            A Gravity Point is a domain that exerts disproportionate influence on the entire system. Addressing gravity points creates multi-domain improvement. Ignoring them leads to system stagnation, regardless of effort applied elsewhere.
          </p>
          <p className="font-medium italic">Rule: We intervene where gravity is strongest, not where symptoms are loudest. Symptoms signal distress. Gravity determines effect.</p>
        </div>
      </section>

      {/* Cross-Axis Influence */}
      <section className="px-4 py-10 bg-white">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">IV. Cross-Axis Influence (System Coupling)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Financial instability → chronic stress → appetite disruption → emotional volatility → withdrawal</li>
            <li>Stable belonging → increased motivation → increased routine → improved self-regulation</li>
            <li>Trauma activation → identity collapse → drop in Hope-Force → loss of action capacity</li>
          </ul>
          <p className="mt-3">This interdependence makes the human condition multi-axial, not linear. This is why single-domain interventions often fail.</p>
        </div>
      </section>

      {/* Inversion-Based Sequencing */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">V. Inversion-Based Intervention Sequencing</h3>
          <p className="mb-2">When time is limited, trust is fragile, the client cannot tolerate emotional probing, or crisis/shutdown/overwhelm is present, the model operates in reverse:</p>
          <div className="rounded-xl border bg-gray-50 p-5">
            <ol className="list-decimal pl-6 space-y-1">
              <li>Identify the observable distress pattern</li>
              <li>Infer the underlying gravity point (using known coupling relationships)</li>
              <li>Apply the smallest stabilizing intervention with the greatest leverage</li>
            </ol>
            <p className="mt-3 text-sm"><span className="font-mono">Stabilization Leverage = Gravity Weight × Influence Coefficient</span></p>
          </div>
          <p className="mt-3">This reduces overwhelm and accelerates restoration of equilibrium.</p>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 py-10 bg-white">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">VI. Strategic Advantages of Gravity-Point Guided Intervention</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Resource Efficiency:</span> time, emotional effort, and organizational resources are directed toward where change will matter most, not everywhere at once.
            </li>
            <li>
              <span className="font-semibold">Client-Driven Pathways:</span> gravity may be interest-driven, capability-driven, or clinical-priority-driven. The model adapts to the active leverage point.
            </li>
            <li>
              <span className="font-semibold">Momentum Seizing:</span> when forward motion appears, the system pivots to amplify it in real time.
            </li>
            <li>
              <span className="font-semibold">Crisis Redirection:</span> when a domain is too volatile to intervene in, the model pulls intervention away to avoid collapse.
            </li>
            <li>
              <span className="font-semibold">Burnout Reduction:</span> eliminating wasted effort reduces emotional taxation on clients and staff.
            </li>
          </ul>
        </div>
      </section>

      {/* Case Example */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">VII. Case Example (Anonymous, Male, Age 17)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-5 bg-gray-50">
              <h4 className="font-semibold mb-2">Presenting Signals</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>School disengagement</li>
                <li>Isolation and withdrawal</li>
                <li>Low appetite and low routine</li>
                <li>Emotional shutdown during conflict</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50">
              <h4 className="font-semibold mb-2">Gravity Interpretation</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identity and Hope-Force depletion</li>
                <li>Somatic dysregulation (sleep, energy) linked to emotional overload</li>
                <li>Social belonging primarily digital and low-agency reinforcing</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-5 bg-white mt-6">
            <h4 className="font-semibold mb-2">Stabilizing Entry Strategy</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Micro-routine implementation (low-friction success loop)</li>
              <li>Identity anchoring experiences (meaning before motivation)</li>
              <li>Low-pressure relational engagement (belonging before performance)</li>
            </ul>
            <p className="mt-2">No motivational pressure is applied until somatic and identity coherence return.</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-10 bg-white">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold mb-3 text-[#8B0000]">VIII. Applications for Care Teams and AI Systems</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-5 bg-gray-50">
              <h4 className="font-semibold mb-2">The model is directly usable by:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>ECM teams</li>
                <li>Clinical navigators</li>
                <li>School support systems</li>
                <li>Reentry and housing stabilization programs</li>
                <li>AI-assisted care coordination platforms</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50">
              <h4 className="font-semibold mb-2">AI can:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Detect gravity patterns</li>
                <li>Generate stabilization plan sequences</li>
                <li>Forecast decompensation risk</li>
                <li>Reduce cognitive load on care teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-14 text-center">
        <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
        <p className="mb-4">For collaborations, questions, or to pilot SoH-ACF with your team:</p>
        <a href="mailto:elginrose@fatherstofounders.org" className="text-xl text-[#8B0000] hover:underline">
          elginrose@fatherstofounders.org
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p className="mt-1">© {new Date().getFullYear()} Fathers To Founders • Syntax of Humanity™</p>
      </footer>
    </div>
  );
}
