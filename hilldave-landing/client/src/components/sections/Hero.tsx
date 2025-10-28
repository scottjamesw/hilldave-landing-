import { Button } from "@/components/ui/button";

export default function Hero() {
  const openMeetingScheduler = () => {
    window.open('https://meetings-na2.hubspot.com/sweitz/hilldave-meeting', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24 md:pt-28">
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-12 md:space-y-16">
          {/* Large Logo with Tagline */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/logo.jpeg" 
              alt="HillDave" 
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
            <p className="text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-[var(--hilldave-medium-gray)]">
              30 Years Engineering Production Systems at Scale
            </p>
          </div>
          
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black px-4 max-w-5xl mx-auto">
              Strategy, creativity, and execution for Fortune 500 brands.
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black px-4 max-w-4xl mx-auto">
              Cannes Gold Lions. Super Bowl campaigns. Billions of watched minutes.
            </p>
            
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black px-4 max-w-4xl mx-auto font-semibold">
              Now applied to what AI makes technically possible.
            </p>
            
            <div className="pt-4 space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--hilldave-medium-gray)] px-4 max-w-3xl mx-auto">
                Commercial production. Strategic content systems.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--hilldave-medium-gray)] px-4 max-w-3xl mx-auto">
                Built on three decades of knowing what works.
              </p>
            </div>
          </div>
          
          <div className="pt-6">
            <Button 
              onClick={openMeetingScheduler}
              size="lg"
              className="bg-[var(--hilldave-orange)] hover:bg-[var(--hilldave-black)] text-white font-semibold text-sm uppercase tracking-wider px-10 py-7 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

