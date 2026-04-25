import React, { useState, useEffect } from "react";
import {
  ArrowRight, MapPin, Calendar, ShieldCheck, Train, Car, Globe,
  Info, Clock, Instagram, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "22227575716";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tours", href: "#tours" },
    { name: "Why Us", href: "#why-us" },
    { name: "Itinerary", href: "#itinerary" },
    { name: "Notes", href: "#notes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const tours = [
    {
      img: "/images/terjit-oasis.svg",
      title: "Terjit Oasis Day Trip",
      description: "Cool off in Mauritania's most famous canyon oasis. Palm trees, fresh tea, and natural pools.",
      duration: "1 Day",
      icon: Car,
    },
    {
      img: "/images/ancient-ksour.svg",
      title: "Ancient Ksour & Trade Routes",
      description: "Explore the old caravan cities of Chinguetti and Ouadane, libraries of the Sahara.",
      duration: "3 Days",
      icon: Globe,
    },
    {
      img: "/images/coastal-camps.svg",
      title: "Atlantic Coastal Camping",
      description: "Fresh seafood and wild beaches where the desert meets the Atlantic Ocean.",
      duration: "2 Days",
      icon: Calendar,
    },
    {
      img: "/images/richat-structure.svg",
      title: "Richat Structure (Eye of the Sahara)",
      description: "Fly over or trek through the mysterious Eye of Africa, a geological wonder.",
      duration: "4 Days",
      icon: MapPin,
    },
  ];

  const itinerarySteps = [
    {
      icon: MapPin,
      title: "Pickup in Nouakchott",
      description: "We pick you up from your hotel or the airport. Safety briefing and gear check.",
    },
    {
      icon: Train,
      title: "Journey to Zouérat",
      description: "Drive or fly to Zouérat, the mining heart of Mauritania. Prepare for the train.",
    },
    {
      icon: Clock,
      title: "The 18-Hour Train Ride",
      description: "Board the iron ore train. Sleep on top under the stars, eat traditional food, and watch the Sahara unfold.",
    },
    {
      icon: Car,
      title: "Arrival in Nouadhibou",
      description: "Disembark at the coast. Fresh seafood shower and rest in this lively port city.",
    },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-semibold tracking-tighter text-foreground z-50">
            Mauritania<span className="text-primary italic">Tours</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-full font-medium" size="sm">
              <a href={getWhatsAppLink("Hello! I'm interested in booking a tour in Mauritania.")} target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book Now
              </a>
            </Button>
          </nav>
          <button className="md:hidden z-50 p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="flex flex-col items-center gap-8 text-xl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-2xl" onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
            <img src="/images/iron-ore-train.svg" alt="Iron Ore Train crossing the Sahara at sunset" className="w-full h-full object-cover object-center" />
          </div>
          <div className="container relative z-30 mx-auto px-4 md:px-6 pt-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 text-primary" /> <span>The Sahara Desert, Mauritania</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6 drop-shadow-md">
                Experience Mauritania's Legendary Iron Ore Train
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light drop-shadow-sm">
                Private desert tours, safe logistics, local support, and unforgettable Sahara experiences handcrafted by people who live here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 border-0 shadow-lg" asChild>
                  <a href={getWhatsAppLink("Hello! I'm interested in the Iron Ore Train experience and would like to start planning.")} target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Book on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
                  <a href="#itinerary">See Itinerary <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tours */}
        <section id="tours" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 md:flex md:items-end justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Our Expeditions</h2>
                <p className="text-muted-foreground text-lg">Curated routes through the deep Sahara. We handle the harsh logistics, you experience the magic.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Featured: Iron Ore Train */}
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all lg:col-span-2 lg:row-span-2">
                <div className="absolute inset-0 z-0">
                  <img src="/images/hero-dunes.svg" alt="Sahara Dunes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 min-h-[400px]">
                  <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm w-fit mb-4">Signature Route</div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">Iron Ore Train Adventure</h3>
                  <p className="text-white/80 max-w-lg mb-6 text-lg">
                    Ride atop the iron ore dust on the longest train in the world. A visceral, dusty, and truly once-in-a-lifetime journey across the deep Sahara from Zouérat to Nouadhibou.
                  </p>
                  <Button variant="secondary" className="w-fit rounded-full" asChild>
                    <a href={getWhatsAppLink("I'm interested in the Iron Ore Train Adventure.")} target="_blank" rel="noopener noreferrer">Inquire about this route</a>
                  </Button>
                </div>
              </div>

              {/* Tour cards */}
              {tours.map((tour, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="absolute inset-0 z-0">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                      <tour.icon className="h-4 w-4" /> {tour.duration}
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2">{tour.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{tour.description}</p>
                    <Button variant="outline" className="w-fit rounded-full text-sm h-9 border-white/30 text-white hover:bg-white/20" asChild>
                      <a href={getWhatsAppLink(`I'm interested in ${tour.title}`)}>Learn More</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Why Travel With Us?</h2>
              <p className="text-muted-foreground text-lg">We're locals who know the Sahara like the back of our hands.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safety First",
                  description: "GPS trackers, satellite phones, and experienced guides who know every dune and wadi.",
                },
                {
                  icon: Globe,
                  title: "Local Expertise",
                  description: "Born and raised in Mauritania. We take you where the tourists don't go.",
                },
                {
                  icon: Car,
                  title: "Full Logistics",
                  description: "4x4 vehicles, camping gear, food, water—we handle everything. Just show up.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section id="itinerary" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Iron Ore Train Itinerary</h2>
              <p className="text-muted-foreground text-lg">A typical 5-day adventure from start to finish.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {itinerarySteps.map((step, index) => (
                <div key={index} className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <step.icon className="h-6 w-6" />
                    </div>
                    {index < itinerarySteps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-serif text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section id="notes" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 text-center">Important Notes</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "What to Bring",
                    content: "Scarf/shemagh, warm sleeping bag, sun protection, snacks, water bottle, camera with dust protection.",
                  },
                  {
                    title: "Fitness Level",
                    content: "Moderate fitness required. The train ride is bumpy and dusty. Climbing on/off requires some agility.",
                  },
                  {
                    title: "Best Time to Go",
                    content: "October to April (cooler months). Summer temperatures can exceed 50°C (122°F).",
                  },
                  {
                    title: "Visa Requirements",
                    content: "Most nationalities need a visa. We can provide invitation letters and guidance.",
                  },
                ].map((note, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex gap-3">
                      <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-serif text-foreground mb-2">{note.title}</h3>
                        <p className="text-muted-foreground">{note.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "/images/gallery-1.svg",
                "/images/gallery-2.svg",
                "/images/gallery-3.svg",
                "/images/gallery-4.svg",
                "/images/gallery-5.svg",
                "/images/gallery-6.svg",
              ].map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-xl">
                  <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready for the Adventure?</h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Message us on WhatsApp to start planning your Mauritania expedition. We typically respond within 2 hours.
            </p>
            <Button size="lg" className="rounded-full text-base h-14 px-10 bg-primary hover:bg-primary/90" asChild>
              <a href={getWhatsAppLink("Hello! I'd like to plan a tour to Mauritania.")} target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Start Planning on WhatsApp
              </a>
            </Button>
            <div className="flex items-center justify-center gap-6 mt-12 text-background/60">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-xl font-semibold tracking-tighter text-foreground">
              Mauritania<span className="text-primary italic">Tours</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Mauritania Tours. All rights reserved. Local guides, unforgettable experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
