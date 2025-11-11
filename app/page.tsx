const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Syntax of Humanity™</h1>
        <p className="text-xl mt-4 font-medium">
          Adaptive Coordination Framework (SoH-ACF)
        </p>
        <p className="text-lg opacity-90 mt-2">
          A Clinical-Systems Model for Human Pattern Mapping, Care Navigation, and AI-Supported Intervention Sequencing
        </p>
      </header>

      {/* Executive Summary */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Executive Summary</h2>
        <p className="text-lg leading-relaxed">
          The Syntax of Humanity™ Adaptive Coordination Framework (SoH-ACF) is a clinical and systems-based methodology
          for understanding, measuring, and improving the interacting social, psychological, biological, and environmental
          forces that shape a person’s stability and forward movement. The model is designed for Enhanced Care Management
          (ECM), behavioral health, reentry navigation, youth services, crisis stabilization, and population health environments.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The framework integrates two evidence foundations:
        </p>
        <ul className="list-disc ml-8 mt-4 space-y-2 text-lg">
          <li><strong>Biopsychosocial + Social Determinants of Health (SDoH):</strong> Aligns with clinical documentation standards and interdisciplinary care planning.</li>
          <li><strong>Complex Adaptive Systems Theory + Dynamic State Modeling:</strong> Enables identification of pattern drivers and stabilization sequencing.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          The result is a system that focuses on <strong>drivers rather than symptoms</strong>, enabling more precise, dignified, and effective care.
        </p>
      </section>

      {/* Core Problem */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">I. Core Clinical Problem</h2>
          <p className="text-lg leading-relaxed">
            Many clients present with overlapping conditions—housing instability, trauma history, medical conditions,
            disrupted identity formation, or limited relational support. Traditional care frameworks address surface-level
            problems rather than the underlying gravity domains that determine whether change is possible.
          </p>

          <p className="text-lg leading-relaxed mt-4">This leads to:</p>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-lg">
            <li>Care plans that overwhelm instead of clarify</li>
            <li>High emotional burden on clients</li>
            <li>Burnout in frontline workers</li>
            <li>Stagnation instead of progress</li>
          </ul>

          <p className="text-lg font-semibold mt-6">SoH-ACF provides a map instead of a list.</p>
        </div>
      </section>

      {/* Eight Axes Framework */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">II. The Eight Axes Framework</h2>
        <p className="text-lg mb-8">Each axis is scored from 1–10 based on stability.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          {[
            ["Housing Stability", "Safety + permanence of living environment"],
            ["Financial Security & Economic Flow", "Sustainable access to resources"],
            ["Physical Health & Somatic Regulation", "Energy, pain, medical stability"],
            ["Mental & Emotional Health", "Stress response and regulation capacity"],
            ["Environmental Safety & Exposure", "Predictability and security of surroundings"],
            ["Social Connectedness & Belonging", "Support network stability and trust"],
            ["Identity, Meaning & Agency", "Sense of self-direction and purpose"],
            ["Hope-Force Orientation", "Forward momentum and willingness to re-engage"]
          ].map(([title, desc], i) => (
            <div key={i} className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold">{i + 1}. {title}</h3>
              <p className="text-sm mt-2 opacity-80">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-lg mt-6 font-semibold">
          Hope-Force determines whether change is possible. If Hope-Force is depleted, intervention must begin there.
        </p>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">For collaboration, clinical framework licensing, training, or research partnership:</p>
        <a href="mailto:elginrose@fatherstofounders.org" className="text-xl text-indigo-600 hover:underline">
          elginrose@fatherstofounders.org
        </a>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Syntax of Humanity™ | Developed by Elgin Rose Sr.</p>
      </footer>
    </div>
  );
};

export default Page;
