
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Clock, 
  Target, 
  Trophy, 
  BookOpen, 
  Globe,
  Brain,
  Gamepad2,
  GraduationCap,
  Star,
  Zap,
  MessageSquare,
  Video,
  FileText,
  Headphones,
  Sparkles,
  ArrowDown,
  Eye,
  ChevronRight,
  ArrowRight,
  Leaf
} from "lucide-react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeVision, setActiveVision] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    hours: 0,
    successRate: 0,
    students: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    // Animate statistics
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const statsTimer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          hours: Math.floor(50000 * progress),
          successRate: Math.floor(90 * progress),
          students: Math.floor(2000 * progress)
        });
        
        if (step >= steps) clearInterval(statsTimer);
      }, stepDuration);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: MessageSquare,
      title: 'Speaking Assessment',
      description: 'One-on-one speaking evaluations with expert feedback',
      features: ['Pronunciation coaching', 'Fluency development', 'Mock IELTS tests', 'Personalized improvement plans'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: FileText,
      title: 'Writing Assessment',
      description: 'Comprehensive writing evaluation and enhancement',
      features: ['Task 1 & 2 evaluation', 'Grammar enhancement', 'Structure improvement', 'Band score prediction'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: Headphones,
      title: 'Listening & Reading',
      description: 'Comprehensive skill development programs',
      features: ['Strategy training', 'Practice tests', 'Time management', 'Skill development'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: Video,
      title: 'Online Coaching',
      description: 'Live interactive sessions with flexible scheduling',
      features: ['Live sessions', 'Flexible scheduling', 'Recorded lessons', '24/7 support'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: Target,
      title: 'Exam Preparation',
      description: 'Specialized preparation for IELTS, TOEFL, PTE, FCE',
      features: ['Test strategies', 'Score improvement', 'Registration guidance', 'Expert coaching'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      icon: Users,
      title: 'Professional Consultation',
      description: 'Career guidance and university application support',
      features: ['Career guidance', 'University support', 'Immigration requirements', 'Professional development'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const visions = [
    {
      icon: Brain,
      title: 'AI IELTS Coach',
      description: 'Training AI to serve as an expert IELTS coach for personalized guidance',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Gamepad2,
      title: 'VR & Metaverse',
      description: 'Creating immersive, game-based learning experiences using VR and the metaverse',
      color: 'from-pink-400 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Natural Learning',
      description: 'Developing environments for natural, engaging, and effortless adult learning experiences',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Iceberg Theme */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-cyan-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Ocean Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-cyan-600 via-blue-500 to-transparent opacity-80">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          
          {/* Floating Ice Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Aurora Effect */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-green-400/20 via-blue-400/20 to-transparent animate-pulse"></div>
        </div>

        {/* Main Iceberg */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="relative">
            {/* Iceberg Tip */}
            <div className="relative z-10">
              <div className="w-80 h-60 bg-gradient-to-b from-white via-blue-50 to-blue-100 transform rotate-12 rounded-t-full shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-200/50 rounded-t-full"></div>
                <div className="absolute top-4 left-8 w-16 h-8 bg-white/60 rounded-full blur-sm"></div>
                <div className="absolute top-12 right-6 w-12 h-6 bg-white/40 rounded-full blur-sm"></div>
              </div>
            </div>

            {/* Iceberg Underwater */}
            <div 
              className="absolute top-48 left-0 w-96 h-96 bg-gradient-to-b from-blue-200/60 via-blue-300/40 to-blue-500/20 transform rotate-12 rounded-b-full opacity-60"
              style={{ transform: `translateY(${Math.min(scrollY * 0.1, 100)}px) rotate(12deg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-300/30 to-blue-600/20 rounded-b-full"></div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-4 pt-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Company Badge */}
            <div className={`inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <GraduationCap className="w-6 h-6 text-cyan-300" />
              <span className="text-white font-semibold">V&C Elegance</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1 className={`text-6xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                V&C Elegance
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent text-4xl lg:text-5xl">
                The Netherlands
              </span>
            </h1>

            {/* Subtitle */}
            <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Leading Educational Company</h2>
              <p className="text-xl text-cyan-100">
                Dedicated to <span className="text-cyan-300 font-semibold">innovative language learning</span> and <span className="text-green-300 font-semibold">exam success</span>
              </p>
            </div>

            {/* Mission Statement */}
            <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-cyan-100 leading-relaxed">
                "Our mission is to <span className="text-cyan-300 font-semibold">revolutionize language education</span> by blending 
                <span className="text-green-300 font-semibold"> personalized teaching</span> with 
                <span className="text-purple-300 font-semibold"> innovative technology</span>, making learning 
                <span className="text-yellow-300 font-semibold">effortless, interactive, and enjoyable</span>."
              </p>
            </div>

            {/* Iceberg Quote */}
            <div className={`relative bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl text-white font-medium">
                Join us on this exciting journey—what you see today is just the 
                <span className="text-cyan-300 font-bold"> tip of the iceberg</span>.
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-cyan-300 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Our Achievements</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Excellence in
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent block">
                Language Education
              </span>
            </h2>
          </div>

          {/* Achievement Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {animatedStats.hours.toLocaleString()}+
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hours of Expert Coaching</h3>
              <p className="text-gray-600 leading-relaxed">Dedicated coaching experience with proven methodologies</p>
            </div>

            <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {animatedStats.successRate}%
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Success Rate</h3>
              <p className="text-gray-600 leading-relaxed">Students achieving their target IELTS scores</p>
            </div>

            <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {animatedStats.students.toLocaleString()}+
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Successful Students</h3>
              <p className="text-gray-600 leading-relaxed">Students who achieved their target scores</p>
            </div>
          </div>

          {/* Expert Focus */}
          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">IELTS, TOEFL, PTE & FCE Specialist</h3>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Specializing in <span className="text-blue-600 font-semibold">speaking and writing skills</span> development through experienced IELTS mentors with 
              <span className="text-green-600 font-semibold"> over 10 years of expertise</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-cyan-300" />
              <span className="text-white font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent block">
                IELTS Solutions
              </span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl ${hoveredService === service.id ? 'transform -translate-y-2' : ''}`}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-gray-400 group-hover:text-cyan-200 transition-colors duration-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="flex items-center space-x-2 text-cyan-300 hover:text-white font-semibold transition-colors duration-300 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full mb-6">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Our Approach</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Innovative Learning
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Methodology
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Personalized Learning</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Committed to recognizing that <span className="text-blue-600 font-semibold">each student has unique learning styles</span>, 
                continuously refining our teaching methods for maximum effectiveness.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">AI Integration</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Actively integrating <span className="text-purple-600 font-semibold">cutting-edge AI technology</span> to make 
                training programs more adaptive and effective.
              </p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Globe className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive Platforms</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Offering comprehensive courses tailored to diverse learning needs on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Coursera', 'YouTube', 'Udemy', 'edX'].map((platform, index) => (
                <div key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-semibold">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Holographic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-cyan-400/30 px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-200 font-semibold">Our Future Vision</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent block">
                Language Learning
              </span>
            </h2>
          </div>

          {/* Vision Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {visions.map((vision, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transition-all duration-700 hover:scale-105"
                onClick={() => setActiveVision(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 ${activeVision === index ? 'bg-white/10 border-cyan-400/30' : 'hover:bg-white/10'}`}>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${vision.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <vision.icon className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-pulse"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {vision.title}
                    </h3>

                    <p className="text-purple-200 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {vision.description}
                    </p>

                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-300 text-sm font-medium">In Development</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="relative bg-white/5 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-cyan-300" />
                  <span className="text-lg font-semibold text-white">Vision 2030</span>
                  <Sparkles className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  The Future is <span className="text-cyan-300">Now</span>
                </h3>
                <p className="text-purple-200 text-lg mb-6">
                  Join us as we shape the future of language education through cutting-edge technology and innovative teaching methodologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    <Link to="/test">
                      <span>Start Your Journey</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
