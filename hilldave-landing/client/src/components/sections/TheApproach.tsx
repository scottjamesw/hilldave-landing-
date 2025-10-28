import { Button } from "@/components/ui/button";

export default function TheApproach() {
  const openMeetingScheduler = () => {
    window.open('https://meetings-na2.hubspot.com/sweitz/hilldave-meeting', '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            AI-powered production. Cannes-level oversight.
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
            <p>
              Strategic development, creative execution, final delivery—supervised with 30 years of quality standards. 3–5 days. 90% cost reduction.
            </p>

            <p className="font-semibold text-white">
              Your competition is already doing this, or they're exploring it. The next disruptor in your category is building on it.
            </p>
          </div>

          <div className="pt-4">
            <Button 
              onClick={openMeetingScheduler}
              className="bg-[var(--hilldave-orange)] hover:bg-white hover:text-black text-white font-semibold text-sm uppercase tracking-wider px-8 py-6 transition-all duration-300"
            >
              Book Your Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

