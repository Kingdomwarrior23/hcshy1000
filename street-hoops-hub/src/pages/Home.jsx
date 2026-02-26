import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { createPageUrl } from '../utils';
import { Target, GraduationCap, ShieldCheck, Calendar, MapPin, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [hasShownVideo, setHasShownVideo] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!hasShownVideo) {
      setVideoOpen(true);
      setHasShownVideo(true);
    }
  }, [hasShownVideo]);

  const handleVideoClose = (open) => {
    setVideoOpen(open);
    if (!open) {
      const video = document.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Video Pop-up */}
      <Dialog open={videoOpen} onOpenChange={handleVideoClose}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <video 
            autoPlay 
            controls 
            className="w-full h-auto"
            src="https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699fedc0a02d778b9612e1e3.mp4"
            preload="metadata"
            aria-label="Hub City Street Hoops promotional video"
          />
        </DialogContent>
      </Dialog>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699ff4aa95735cfd42018377.jpg)',
              filter: 'brightness(0.35)'
            }}
            role="img"
            aria-label="Basketball court with youth players"
          />
        </motion.div>
        {/* Urban grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--urban-dark)]/30 to-[var(--urban-dark)]/80" />
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block bg-[var(--orange)] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest mb-6 shadow-xl"
          >
            501(c)(3) NONPROFIT
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-none tracking-tight"
          >
            CHANGING LIVES<br />
            <span className="text-[var(--orange)] drop-shadow-[0_0_25px_rgba(255,140,0,0.5)] inline-block animate-pulse">1 DRIBBLE</span> AT A TIME
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto font-bold tracking-wide"
          >
            HUB CITY <span className="text-[var(--orange)] font-black text-3xl sm:text-4xl lg:text-5xl italic drop-shadow-[0_0_15px_rgba(255,140,0,0.7)]">STREET</span> HOOPS
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            Lubbock's premier basketball league and youth mentorship nonprofit
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-[var(--orange)] hover:bg-[var(--street-orange)] text-white font-black text-xl px-12 py-8 h-auto rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] transform hover:scale-110 transition-all duration-300 tracking-wide"
            >
              <a href="tel:8062837868">GET INVOLVED NOW</a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission Strip */}
      <AnimatedSection>
      <section className="bg-[var(--urban-dark)] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_var(--orange)_49%,_var(--orange)_51%,_transparent_52%)] bg-[length:20px_20px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-[var(--orange)] text-2xl sm:text-3xl font-bold mb-6 tracking-wide">OUR MISSION</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
            At Hub City <span className="text-[var(--orange)] font-black italic">Street</span> Hoops Y1000, we <span className="text-[var(--gold)]">empower youth</span> ages 12-17 by creating meaningful opportunities for <span className="text-[var(--gold)]">personal growth</span>, <span className="text-[var(--gold)]">success</span>, and <span className="text-[var(--gold)]">community engagement</span> through dynamic mentoring programs, sports initiatives, and camps.
          </p>
        </div>
      </section>
      </AnimatedSection>

      {/* 3 Feature Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-[var(--urban-dark)]">
              WHAT WE <span className="text-[var(--orange)]">DO</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white overflow-hidden group h-full">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--orange)] to-[var(--street-orange)] rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--navy)] mb-4 tracking-tight">Youth Leagues & Camps</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Competitive leagues, summer camps, and after-school programs for youth ages 10-17.
                </p>
              </CardContent>
            </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white overflow-hidden group h-full">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--orange)] to-[var(--street-orange)] rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--navy)] mb-4 tracking-tight">Young Adult Pathways</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  For ages 18-25: job training, trade school support, and college readiness programs.
                </p>
              </CardContent>
            </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white overflow-hidden group h-full">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--orange)] to-[var(--street-orange)] rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--navy)] mb-4 tracking-tight">First Responders vs Youth</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Annual community event bringing youth and first responders together on the court. Free and open to the public.
                </p>
              </CardContent>
            </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Upcoming Event Card */}
      <AnimatedSection>
      <section className="py-24 bg-[var(--urban-dark)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--orange)_1px,_transparent_1px)] bg-[length:30px_30px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            UPCOMING <span className="text-[var(--orange)]">EVENT</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--orange)] mx-auto mb-12" />
          
          <div className="mb-8">
            <video 
              controls 
              className="w-full rounded-lg shadow-lg"
              poster="https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699feb9a753f1571ba304922.jpg"
              preload="metadata"
              loading="lazy"
              aria-label="First Responders Game highlight video"
            >
              <source src="https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699fedc0a02d778b9612e1e3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Card className="overflow-hidden shadow-2xl border-none bg-white">
            <div className="md:flex">
              <div 
                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: 'url(https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699feb9a753f1571ba304922.jpg)'
                }}
                role="img"
                aria-label="First Responders vs Youth basketball game"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
              </div>
              <CardContent className="md:w-1/2 p-10">
                <div className="inline-block bg-gradient-to-r from-[var(--orange)] to-[var(--street-orange)] text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg tracking-widest">
                  UPCOMING EVENT
                </div>
                <h2 className="text-4xl font-bold text-[var(--urban-dark)] mb-6 tracking-tight">
                  9th Annual First Responders Game
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-800">
                    <Calendar className="w-6 h-6 text-[var(--orange)] mr-4 flex-shrink-0" />
                    <span className="font-bold text-lg">Saturday, March 7, 2026</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <Clock className="w-6 h-6 text-[var(--orange)] mr-4 flex-shrink-0" />
                    <span className="font-semibold text-lg">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <MapPin className="w-6 h-6 text-[var(--orange)] mr-4 flex-shrink-0" />
                    <span className="font-semibold text-lg">1323 E 24th St, Lubbock, TX</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[var(--orange)] to-[var(--street-orange)] text-white px-6 py-4 rounded-lg mb-6 font-black text-xl text-center shadow-lg">
                  FREE EVENT — Open to the Public
                </div>

                <p className="text-sm text-gray-600 mb-6 font-semibold">
                  Partners: Lubbock Police Department | Lubbock Fire Rescue | Domino's Pizza
                </p>

                <Button className="bg-[var(--urban-dark)] hover:bg-[var(--navy)] text-white w-full text-lg font-bold py-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] transform hover:scale-105 transition-all duration-300">
                  LEARN MORE & RSVP
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection>
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_var(--light-blue)_49%,_var(--light-blue)_49.5%,_transparent_50%)] bg-[length:40px_40px] opacity-20" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <img 
            src="https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699feacea02d77d8f411398a.jpg" 
            alt="Hub City Street Hoops youth basketball players in action - Join our community programs in Lubbock, Texas" 
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl mb-12 border-4 border-[var(--orange)]"
            loading="lazy"
            width="1200"
            height="800"
          />
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--urban-dark)]">
            READY TO MAKE A <span className="text-[var(--orange)]">DIFFERENCE?</span>
          </h2>
          
          <p className="text-2xl sm:text-3xl mb-12 leading-relaxed font-bold text-gray-700">
            Join us on the <span className="text-[var(--orange)] italic">street</span> and in the community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-[var(--orange)] to-[var(--street-orange)] hover:from-[var(--street-orange)] hover:to-[var(--orange)] text-white font-black text-xl px-12 py-8 h-auto rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(255,140,0,0.6)] transform hover:scale-110 transition-all duration-300 tracking-wide"
            >
              <a href="tel:8062837868">GET INVOLVED NOW</a>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-4 border-[var(--urban-dark)] text-[var(--urban-dark)] hover:bg-[var(--urban-dark)] hover:text-white font-black text-xl px-12 py-8 h-auto rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 tracking-wide"
            >
              <Link to={createPageUrl('AboutAndGetInvolved')}>SUPPORT OUR MISSION</Link>
            </Button>
          </div>
        </div>
      </section>
      </AnimatedSection>

    </div>
  );
}

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}