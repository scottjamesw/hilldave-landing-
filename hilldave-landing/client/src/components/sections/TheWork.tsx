import { Button } from "@/components/ui/button";

export default function TheWork() {
  const openMeetingScheduler = () => {
    window.open('https://meetings-na2.hubspot.com/sweitz/hilldave-meeting', '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            Sample work.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Livia Ganelli Video */}
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-sm overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/TuV5ips0C1k" 
                  title="Livia Ganelli"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[var(--hilldave-charcoal)]">
                  Category: <span className="font-normal text-[var(--hilldave-medium-gray)]">Fashion/Luxury</span>
                </p>
                <p className="text-sm font-semibold text-[var(--hilldave-charcoal)]">
                  Objective: <span className="font-normal text-[var(--hilldave-medium-gray)]">Brand showcase</span>
                </p>
              </div>
            </div>

            {/* Snype Video */}
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-sm overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/oepdconHzdE" 
                  title="Snype"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[var(--hilldave-charcoal)]">
                  Category: <span className="font-normal text-[var(--hilldave-medium-gray)]">Technology/E-commerce</span>
                </p>
                <p className="text-sm font-semibold text-[var(--hilldave-charcoal)]">
                  Objective: <span className="font-normal text-[var(--hilldave-medium-gray)]">Brand introduction</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 pt-8">
            <p className="text-base md:text-lg leading-relaxed text-[var(--hilldave-medium-gray)] max-w-4xl mx-auto">
              AI-powered production is nascent. With three decades of experience across brand categories—from consumer packaged goods to financial services to technology—HillDave has the capabilities to architect AI production for virtually any vertical.
            </p>

            <Button 
              onClick={openMeetingScheduler}
              className="bg-[var(--hilldave-orange)] hover:bg-[var(--hilldave-black)] text-white font-semibold text-sm uppercase tracking-wider px-8 py-6 transition-all duration-300"
            >
              Schedule Your Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

