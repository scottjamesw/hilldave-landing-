import { Button } from "@/components/ui/button";

export default function EngagementModel() {
  const openMeetingScheduler = () => {
    window.open('https://meetings-na2.hubspot.com/sweitz/hilldave-meeting', '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--hilldave-light-gray)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            How we work together.
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--hilldave-medium-gray)]">
            <p>
              Every project begins with a strategy session to understand objectives, brand parameters, and production requirements. From there, we develop a custom scope and timeline based on your specific needs.
            </p>

            <p>
              Pricing reflects project complexity, not traditional production overhead. Most commercial projects range from initial concept through final delivery in 3–5 business days.
            </p>
          </div>

          <div className="pt-4">
            <Button 
              onClick={openMeetingScheduler}
              className="bg-[var(--hilldave-orange)] hover:bg-[var(--hilldave-black)] text-white font-semibold text-sm uppercase tracking-wider px-8 py-6 transition-all duration-300"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

