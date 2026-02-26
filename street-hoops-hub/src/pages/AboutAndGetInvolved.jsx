import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Users, Briefcase, Award, Heart, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function AboutAndGetInvolved() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699feace95735c44f3fe0732.jpg)',
              filter: 'brightness(0.35)'
            }}
            role="img"
            aria-label="Youth basketball community engagement"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--urban-dark)]/30 to-[var(--urban-dark)]/80" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-[var(--orange)] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest mb-6 shadow-xl"
          >
            ABOUT US
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight leading-none"
          >
            ABOUT HUB CITY<br />
            <span className="text-[var(--orange)] drop-shadow-[0_0_25px_rgba(255,140,0,0.5)] italic text-6xl sm:text-7xl lg:text-9xl">STREET</span> HOOPS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed"
          >
            More than a league — a <span className="text-[var(--orange)]">movement</span><br className="hidden sm:block" />
            changing lives in Lubbock, one dribble at a time.
          </motion.p>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--orange)] to-[var(--street-orange)] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[var(--urban-dark)] mb-6 tracking-tight">Our Mission</h3>
                <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                  To <span className="text-[var(--orange)]">empower youth</span> ages 12-17 by creating meaningful opportunities for personal growth, success, and community engagement through dynamic mentoring programs, sports initiatives, and camps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--urban-dark)] to-[var(--navy)] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[var(--urban-dark)] mb-6 tracking-tight">Our Vision</h3>
                <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                  A Lubbock where <span className="text-[var(--orange)]">every young person</span> has access to mentorship and a pathway to success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PIA Leadership Program */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--urban-dark)] mb-4 tracking-tight">
              P.I.A LEADERSHIP PROGRAM <span className="text-[var(--orange)]">2025/26</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--orange)] mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--orange)]">
              Real Talk with Our Youth at P.I.A
            </h3>
          </div>

          <Card className="border-none shadow-xl mb-12">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Youth Talk at PIA has been a powerful and transforming active part of our program, helping young people learn, grow, and return to their regular schools with a renewed sense of purpose. Through open conversations and mentorship, guest speakers share their real-life experiences, valuable knowledge, and helpful resources that inspire our youth to make positive choices. These meaningful interactions not only encourage academic improvement but also guide our participants toward becoming responsible, motivated, and productive adults in their communities.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-[var(--orange)]/10 rounded-lg p-6 text-center border-2 border-[var(--orange)]">
                  <h4 className="text-lg font-bold text-[var(--navy)]">Life Experiences</h4>
                </div>
                <div className="bg-[var(--orange)]/10 rounded-lg p-6 text-center border-2 border-[var(--orange)]">
                  <h4 className="text-lg font-bold text-[var(--navy)]">Career Talk</h4>
                </div>
                <div className="bg-[var(--orange)]/10 rounded-lg p-6 text-center border-2 border-[var(--orange)]">
                  <h4 className="text-lg font-bold text-[var(--navy)]">Life Choices</h4>
                </div>
                <div className="bg-[var(--orange)]/10 rounded-lg p-6 text-center border-2 border-[var(--orange)]">
                  <h4 className="text-lg font-bold text-[var(--navy)]">Life Goals & Dreams</h4>
                </div>
              </div>

              <div className="bg-[var(--navy)] text-white rounded-lg p-6 text-center">
                <p className="text-lg font-semibold mb-2">
                  💝 Donations of snacks and drinks are appreciated!
                </p>
                <p className="text-xl font-bold">Contact: Leditt Butler</p>
                <a href="tel:8062837868" className="text-lg hover:text-[var(--orange)] transition-colors">(806) 283-7868</a>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--urban-dark)] text-center mb-4 tracking-tight">
            WHO WE <span className="text-[var(--orange)]">SERVE</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--orange)] mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[var(--urban-dark)] mb-4 tracking-tight">Youth Ages 10–17</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                  Leagues, summer camps, after-school mentoring
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[var(--urban-dark)] mb-4 tracking-tight">Young Adults 18–25</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                  Job training, trade school support, college readiness
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[var(--orange)] to-[var(--gold)]" />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[var(--urban-dark)] mb-4 tracking-tight">The Community</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                  First Responders events, adult leagues, community partnerships
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(https://assets.cdn.filesafe.space/de3KjbYrQ7zXPHj4jqcP/media/699ff3299a0c184b88d12c08.png)'
                }}
                role="img"
                aria-label="Leditt Butler, Founder and CEO of Hub City Street Hoops"
              />
              <CardContent className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bold text-[var(--navy)] mb-2">Leditt Butler</h3>
                <p className="text-[var(--orange)] font-semibold mb-4 text-lg">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Leditt Butler envisioned Hub City Street Hoops since 2001 with a goal of creating Lubbock's first semi-pro basketball league. In 2020 he launched HCSHy1000 as the nonprofit arm focused on youth development. He was honored as a 2020 Phillips 66 Live To The Full Hero during the Big 12 Championship for his impact in the community.
                </p>
                <p className="text-lg font-semibold text-[var(--navy)]">
                  Contact: <a href="tel:8062837868" className="hover:text-[var(--orange)] transition-colors">(806) 283-7868</a>
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--urban-dark)] text-center mb-4 tracking-tight">
            GET <span className="text-[var(--orange)]">INVOLVED</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--orange)] mx-auto mb-12" />

          <Card className="border-none shadow-xl mb-12">
            <div className="bg-[var(--navy)] text-white p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-[var(--orange)] mr-4" />
                <h3 className="text-3xl font-bold">Volunteer & Join the Board</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-[var(--navy)] mb-3">Volunteer Opportunities</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We need coaches, mentors, event staff, tutors, and photographers to help support our youth programs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--navy)] mb-3">Board Positions Available</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Join our board and make a lasting impact in the lives of young people. As a board member you'll shape programs that inspire leadership, promote positive development, and build stronger communities.
                  </p>
                </div>
              </div>

              <div className="bg-white/80 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-semibold mb-4 text-center">Contact Us:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-white"
                  >
                    <a href="tel:8062837868">(806) 283-7868</a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                  >
                    <a href="mailto:hcshy1000@yahoo.com">hcshy1000@yahoo.com</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--urban-dark)] text-center mb-4 tracking-tight">
            SUPPORT OUR <span className="text-[var(--orange)]">MISSION</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--orange)] mx-auto mb-12" />
          
          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://app.jotform.com/250965076123154" 
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none'
                }}
                title="Support Form"
              />
            </CardContent>
          </Card>

          <p className="text-center text-gray-600 mt-6">
            Having trouble with the form? Call us at <a href="tel:8062837868" className="font-bold text-[var(--navy)] hover:text-[var(--orange)]">(806) 283-7868</a> or email <a href="mailto:hcshy1000@yahoo.com" className="font-bold text-[var(--navy)] hover:text-[var(--orange)]">hcshy1000@yahoo.com</a>
          </p>
        </div>
      </section>
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