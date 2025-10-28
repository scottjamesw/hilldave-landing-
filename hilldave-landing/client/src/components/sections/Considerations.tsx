export default function Considerations() {
  const faqs = [
    {
      question: 'Quality',
      answer: 'AI-supervised production is frequently indistinguishable from traditional when guided by experienced creative judgment.'
    },
    {
      question: 'Brand guidelines',
      answer: 'Integrated from concept through delivery.'
    },
    {
      question: 'Revisions',
      answer: 'Multiple rounds included. Minimal timeline impact.'
    },
    {
      question: 'Agency relationships',
      answer: 'We work within existing structures or directly with internal teams.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            Four questions we hear most.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-[var(--hilldave-medium-gray)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

