import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
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

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

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
                <FaWhatsapp className="mr-2 h-4 w-4" /> Book Now
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
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
            <img src="/images/iron-ore-train.png" alt="Iron Ore Train crossing the Sahara at sunset" className="w-full h-full object-cover object-center" />
          </motion.div>
          <div className="container relative z-30 mx-auto px-4 md:px-6 pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-3xl">
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
                    <FaWhatsapp className="mr-2 h-5 w-5" /> Book on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
                  <a href="#itinerary">See Itinerary <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </motion.div>
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
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all lg:col-span-2 lg:row-span-2">
                <div className="absolute inset-0 z-0">
                  <img src="/images/hero-dunes.png" alt="Sahara Dunes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              </motion.div>

              {/* Tour cards 2-5 */}
              {[
                { img: "/images/terjit-o