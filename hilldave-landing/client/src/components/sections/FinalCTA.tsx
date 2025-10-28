import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const openMeetingScheduler = () => {
    window.open('https://meetings-na2.hubspot.com/sweitz/hilldave-meeting', '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-black text-white" id="contact">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AI is here. Let's make it work for you.
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
            <p>
              If you're a brand trying to understand what AI-powered production actually means for your business—beyond the hype—we should talk.
            </p>

            <p className="font-semibold text-white">
              This is real. The economics have shifted. The question is execution.
            </p>
          </div>

          <div className="pt-4 space-y-6">
            <Button 
              onClick={openMeetingScheduler}
              className="bg-[var(--hilldave-orange)] hover:bg-white hover:text-black text-white font-semibold text-sm uppercase tracking-wider px-8 py-6 transition-all duration-300"
            >
              Schedule Your Strategy Session
            </Button>

            <div>
              <a 
                href="mailto:hello@hilldave.com"
                className="text-[var(--hilldave-orange)] hover:text-white transition-colors text-lg font-semibold"
              >
                hello@hilldave.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

