export default function TheShift() {
  const benefits = [
    'Production time line in days, not weeks and months',
    'Iteration cycles measured in hours, not weeks',
    'Production costs reduced by 90% while maintaining quality standards',
    'Exponential increase in content output achievable'
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Production economics no longer match market velocity.
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--hilldave-medium-gray)]">
            <p>
              Traditional commercial production operates on established infrastructure: location logistics, travel coordination, multi-week timelines. These were necessary operational realities that shaped the industry for decades.
            </p>

            <p className="font-semibold text-black">
              AI changes what's operationally possible.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              What This Enables:
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li 
                  key={benefit}
                  className="flex items-start gap-4 text-base md:text-lg leading-relaxed text-[var(--hilldave-medium-gray)]"
                >
                  <span className="text-[var(--hilldave-orange)] font-bold mt-1">—</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-[var(--hilldave-medium-gray)] pt-6">
            The strategic thinking that powered Driver Studios remains. Creative is unlocked. Production logistics and financial restraints are removed.
          </p>
        </div>
      </div>
    </section>
  );
}

