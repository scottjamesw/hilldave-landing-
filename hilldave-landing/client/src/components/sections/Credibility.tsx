export default function Credibility() {
  const clients = ['Coca-Cola', 'PepsiCo', 'Microsoft', 'Visa', 'Mattel'];
  const recognition = ['Cannes Gold Lions', 'Super Bowl Campaigns', 'Best Original YouTube Channel'];

  return (
    <section className="py-20 bg-[var(--hilldave-light-gray)]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[var(--hilldave-medium-gray)] font-semibold">
              Client Experience Includes
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-lg md:text-xl font-semibold text-[var(--hilldave-charcoal)]">
              {clients.map((client, index) => (
                <span key={client}>
                  {client}
                  {index < clients.length - 1 && (
                    <span className="ml-6 md:ml-8 text-[var(--hilldave-medium-gray)]">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4 pt-8">
            <h3 className="text-xs uppercase tracking-widest text-[var(--hilldave-medium-gray)] font-semibold">
              Recognition
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-lg md:text-xl font-semibold text-[var(--hilldave-charcoal)]">
              {recognition.map((item, index) => (
                <span key={item}>
                  {item}
                  {index < recognition.length - 1 && (
                    <span className="ml-6 md:ml-8 text-[var(--hilldave-medium-gray)]">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

