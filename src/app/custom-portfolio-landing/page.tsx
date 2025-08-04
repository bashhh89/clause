'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VPSChatInterface from '@/components/VPSChatInterface';
import StrategicToolsAccordion from '@/components/StrategicToolsAccordion';
import { ArrowRight, MessageSquare, Users, Target, Sparkles, Brain, BookOpen, Award, ChevronLeft, Menu, Briefcase, Phone, ExternalLink, ChevronDown, AlertTriangle, Lightbulb, Globe, User, ClipboardList } from 'lucide-react';

// Custom Velocity AI Proposal Sidebar
const VelocityProposalSidebar = ({ activeSection, onSectionChange, isExpanded, onToggleExpand }: {
  activeSection: string;
  onSectionChange: (section: string, href?: string, isExternal?: boolean) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) => {
  // Define hierarchical navigation structure
  const navSections = [
    {
      title: 'My Portfolio',
      items: [
        {
          id: 'about-ahmad',
          name: 'About Ahmad',
          icon: Users,
        },
        {
          id: 'overview',
          name: 'Velocity AI Proposal',
          icon: Briefcase,
        },
      ]
    },
    {
      title: 'Key Projects',
      items: [
        {
          id: 'clausen-advice-live',
          name: 'Clausen Advice (Live)',
          icon: ExternalLink,
          href: 'https://clausenadvice.com/',
          isExternal: true
        },
        {
          id: 'clausen-advice-redesign',
          name: 'Clausen Advice: Website Redesign',
          icon: Sparkles,
          href: '/clausen-redesign',
          isExternal: true
        },
        {
          id: 'social-garden-scorecard',
          name: 'Social Garden Scorecard',
          icon: ExternalLink,
          href: 'https://scorecard.socialgarden.com.au/landing',
          isExternal: true
        },
      ]
    },
    {
      title: 'Velocity AI Proposal',
      items: [
        { id: 'noah-system', name: 'Noah AI System', icon: Brain },
        { id: 'strategic-tools', name: 'Strategic Arsenal', icon: Target },
        { id: 'demo', name: 'Live Demo', icon: MessageSquare },
        { id: 'benefits', name: 'Strategic Benefits', icon: Award },
        { id: 'process', name: 'Implementation', icon: BookOpen },
        { id: 'contact', name: 'Next Steps', icon: Phone }
      ]
    }
  ];

  const handleItemClick = (item: any) => {
    if (item.isExternal && item.href) {
      window.open(item.href, '_blank');
    } else if (item.id) {
      onSectionChange(item.id);
    }
  };

  return (
    <div className={`flex flex-col h-full transition-all duration-300 ease-in-out bg-gradient-to-b from-zinc-900 to-zinc-950 border-r border-zinc-800 ${isExpanded ? 'w-80' : 'w-20'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-8 border-b border-zinc-800">
        {isExpanded ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">STRATEGIC PROPOSALS</div>
              <div className="text-xs text-zinc-400">by Ahmad Basheer</div>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        )}
        <button
          onClick={onToggleExpand}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors"
        >
          {isExpanded ? <ChevronLeft className="h-4 w-4 text-zinc-400" /> : <Menu className="h-4 w-4 text-zinc-400" />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {navSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-8">
            {/* Section Header */}
            {isExpanded && (
              <div className="mb-4">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">
                  {section.title}
                </div>
                {/* Visual divider line */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-2"></div>
              </div>
            )}

            {/* Navigation Items */}
            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id || item.name}
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                      }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {isExpanded && (
                      <div className="flex-1 text-left flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        {item.isExternal && <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-white" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Add spacing after each section except the last one */}
            {sectionIndex < navSections.length - 1 && isExpanded && (
              <div className="h-8"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-6 border-t border-zinc-800">
        {isExpanded && (
          <div className="text-center">
            <div className="text-xs text-zinc-500 mb-2">Ahmad Basheer</div>
            <div className="text-xs text-zinc-400">Strategic AI Architect</div>
            <div className="flex justify-center gap-2 mt-3">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Available Now</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomPortfolioLanding = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);



  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="flex h-screen bg-[#0a0a0a]"
    >
      <VelocityProposalSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isExpanded={isSidebarExpanded}
        onToggleExpand={handleToggleSidebar}
      />
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="min-h-screen bg-black text-white">
          {/* Hero / Proposal Section */}
          <div id="overview" className="relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-transparent to-zinc-800/20"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative px-6 py-20 md:px-8 w-full">
              <div className="max-w-8xl mx-auto text-center">
                {/* Status Badge - Enhanced */}
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900/90 border border-zinc-700 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm shadow-2xl">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <Sparkles className="h-5 w-5" />
                  PROPOSAL: AI POWERED STRATEGIC INTELLIGENCE
                </div>

                {/* Main Headline - Enhanced Typography */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-none">
                  <span className="block text-white mb-6">CONSULTING-GRADE AI</span>
                  <span className="block text-slate-300">
                    FOR VELOCITY AI
                  </span>
                </h1>

                {/* Enhanced Subtitle */}
                <div className="max-w-5xl mx-auto mb-16">
                  <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-6">
                    I'm Ahmad Basheer - a business strategist who spent 10+ years understanding what enterprises really need,
                    now building AI systems that deliver McKinsey-grade strategic insights for capital allocation decisions.
                  </p>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto"></div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
                  <div className="group bg-zinc-900/90 border border-zinc-700 rounded-2xl p-8 text-center hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-black text-white mb-4 group-hover:text-zinc-200 transition-colors">10+</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wider font-medium">YEARS BUSINESS STRATEGY</div>
                  </div>
                  <div className="group bg-zinc-900/90 border border-zinc-700 rounded-2xl p-8 text-center hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-black text-white mb-4 group-hover:text-zinc-200 transition-colors">AI+</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wider font-medium">STRATEGIC THINKING</div>
                  </div>
                  <div className="group bg-zinc-900/90 border border-zinc-700 rounded-2xl p-8 text-center hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-black text-white mb-4 group-hover:text-zinc-200 transition-colors">BCG</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wider font-medium">LEVEL OUTPUTS</div>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="group px-12 py-6 bg-white text-black font-black text-lg uppercase tracking-wider transition-all hover:bg-zinc-200 hover:scale-105 rounded-xl shadow-2xl">
                    <span className="flex items-center gap-3">
                      TEST MY AI SYSTEMS
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.linkedin.com/in/abashh/', '_blank')}
                    className="group px-12 py-6 bg-zinc-900/90 border-2 border-zinc-600 text-white font-black text-lg uppercase tracking-wider transition-all hover:bg-zinc-800 hover:border-zinc-500 hover:scale-105 rounded-xl shadow-xl"
                  >
                    <span className="flex items-center gap-3">
                      CONNECT ON LINKEDIN
                      <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* About Ahmad Section */}
          <div id="about-ahmad" className="px-6 py-24 md:px-8 bg-gradient-to-b from-black via-zinc-950/50 to-black">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900/90 to-purple-900/90 border border-blue-700/50 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm shadow-2xl">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                  <Users className="h-5 w-5" />
                  ABOUT AHMAD BASHEER
                </div>

                <h2 className="text-5xl md:text-6xl font-black mb-12 text-white leading-tight">
                  FROM BUSINESS STRATEGY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-zinc-300">STRATEGIC AI ARCHITECTURE</span>
                </h2>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-16"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">The Strategic Foundation</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                      For over a decade, I immersed myself in the world of business strategy, working with enterprises to understand their most pressing challenges and opportunities. This journey took me through boardrooms, C-suite discussions, and complex capital allocation decisions where I witnessed firsthand the gap between strategic thinking and execution.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Those years weren't just about learning business frameworks—they were about understanding the human and organizational dynamics that make or break strategic initiatives. I became fluent in the language of executives, the pain points of implementation, and the art of translating complex problems into actionable solutions.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">The Career Pivot</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                      As AI began to transform the business landscape, I saw an unprecedented opportunity. Not just to automate tasks, but to democratize access to elite strategic thinking itself. The realization hit me: what if we could build AI systems that don't just answer questions, but challenge assumptions, structure arguments, and deliver consulting-grade insights?
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      This wasn't just a career change—it was a mission. I transitioned from being a consumer of AI tools to being a builder of AI systems, combining my deep understanding of business strategy with cutting-edge AI architecture to create what I call "strategic intelligence engines."
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-8 border-2 border-blue-500/30">
                    <div className="text-center">
                      <div className="text-6xl font-black text-white mb-2">10+</div>
                      <div className="text-sm text-blue-300">YEARS STRATEGY</div>
                      <div className="text-6xl font-black text-white mb-2 mt-4">AI+</div>
                      <div className="text-sm text-purple-300">ARCHITECTURE</div>
                    </div>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 w-full">
                    <h4 className="font-bold text-white mb-4 text-center">My Philosophy</h4>
                    <p className="text-sm text-blue-200 text-center leading-relaxed">
                      "The future of business strategy isn't human vs. AI—it's human augmented by AI. My mission is to build systems that elevate human decision-making, not replace it."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why You Should Hire Me - Direct Job Alignment */}
          <div className="px-6 py-20 md:px-8 bg-gradient-to-b from-black via-zinc-950/30 to-black">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-900/90 to-blue-900/90 border border-green-700/50 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm shadow-2xl">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <Target className="h-5 w-5" />
                  PERFECT FIT FOR VELOCITY AI
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
                  WHY WE'D BE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-zinc-300">GREAT FIT</span> TOGETHER
                </h2>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-12"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Your Job Requirements */}
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <ClipboardList className="h-6 w-6 text-blue-400" />
                    </div>
                    What You're Looking For
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Prompt Engineering & QA</div>
                        <div className="text-sm text-zinc-400">Build, test, and refine prompts for live business tools</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Applied AI Workflows</div>
                        <div className="text-sm text-zinc-400">Translate LLM capabilities into practical business outputs</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Strategic Business Understanding</div>
                        <div className="text-sm text-zinc-400">Eye for how businesses and strategies work in the real world</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">AI-Native Mindset</div>
                        <div className="text-sm text-zinc-400">"Hasn't used Google Search in years" - deep LLM fascination</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What I Deliver */}
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Award className="h-6 w-6 text-green-400" />
                    </div>
                    What I Bring to the Table
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Consulting-Grade Prompt Architecture</div>
                        <div className="text-sm text-zinc-400">I build prompts that deliver BCG-level strategic analysis</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Business Strategy + AI Expertise</div>
                        <div className="text-sm text-zinc-400">10+ years business operations + cutting-edge AI implementation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Capital Allocation Decision Support</div>
                        <div className="text-sm text-zinc-400">I understand the stakes and rigor required for enterprise decisions</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold">Production-Ready AI Systems</div>
                        <div className="text-sm text-zinc-400">Not just demos - working tools that solve real business problems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Perfect Match */}
              <div className="bg-gradient-to-r from-green-900/80 to-blue-900/80 border border-green-700/50 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">The Perfect Strategic Alignment</h3>
                <p className="text-lg text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  We both made the same career pivot from different directions - you went from sales/strategy to AI,
                  I went from business operations to AI. I think that shared experience of understanding both worlds
                  is exactly what makes this collaboration work. I get the business side, you get the strategic vision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                    <div className="text-2xl font-black text-green-400 mb-2">BUSINESS</div>
                    <div className="text-sm text-green-200">10+ years in operations - I understand what actually works</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                    <div className="text-2xl font-black text-blue-400 mb-2">AI NATIVE</div>
                    <div className="text-sm text-blue-200">I live and breathe this stuff - it's not just a career move</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                    <div className="text-2xl font-black text-purple-400 mb-2">CONSISTENT</div>
                    <div className="text-sm text-purple-200">Looking for steady work with someone who gets it</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive AI Demonstrations */}
          <div id="demo" className="px-6 py-20 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  LIVE AI SYSTEMS - TEST THEM NOW
                </h2>
                <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
                  Don't just read about my capabilities - interact with working AI systems that demonstrate
                  strategic thinking and business automation. These aren't demos, they're production tools.
                </p>
              </div>

              {/* Strategic AI Chat Interface - Full Width */}
              <div className="max-w-5xl mx-auto">
                <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                  <CardHeader className="bg-zinc-800/50 border-b border-zinc-700">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-zinc-300" />
                        Strategic AI Assistant - Test My Capabilities
                      </CardTitle>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 mt-2">
                      Ask strategic business questions and see consulting-grade responses. Try: "Analyze the competitive landscape for AI consulting firms" or "What are the key risks in enterprise AI adoption?"
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => window.open('https://clausen-malte.vo0egb.easypanel.host/', '_blank')}
                        className="group px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:scale-105 rounded-lg"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          OPEN ORIGINAL APP
                        </span>
                      </Button>
                      <p className="text-xs text-zinc-500 flex items-center">
                        Note: You'll need to login to access the original app
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[600px]">
                      <VPSChatInterface onClose={() => { }} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Noah - Velocity AI Strategic Synthesis Engine */}
          <div id="noah-system" className="px-6 py-24 md:px-8 bg-gradient-to-b from-black via-zinc-950/50 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <div className="inline-flex items-center gap-4 px-10 py-5 bg-zinc-900/90 border border-zinc-700 rounded-full text-white text-sm font-bold mb-16 uppercase tracking-wider backdrop-blur-sm shadow-2xl">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                  <Sparkles className="h-5 w-5" />
                  NOAH - KEYSTONE STRATEGIC SYNTHESIS ENGINE
                </div>

                <h2 className="text-6xl md:text-7xl font-black mb-12 text-white leading-tight">
                  THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-zinc-300">CONSULTANT'S BRAIN</span>
                </h2>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-16"></div>

                <p className="text-xl md:text-2xl text-zinc-400 max-w-5xl mx-auto leading-relaxed mb-20">
                  Noah is not just an AI; it's a complete strategic synthesis engine. It combines an intuitive interface, a powerful reasoning core, a vast knowledge base, and a suite of specialized analytical tools to deliver consulting-grade insights.
                </p>
              </div>

              {/* Noah System Architecture - Two Main Parts */}

              {/* Part 1: The Core System */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">THE CORE SYSTEM: THE FOUNDATION OF STRATEGIC INTELLIGENCE</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Interface & Interaction */}
                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                        <MessageSquare className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Strategic Interface</h4>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4">
                      Your command center for strategic insight - adaptive, multi-modal, and context-aware.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      <li>• Adaptive conversation flow</li>
                      <li>• Multi-format output (slides, code, visuals)</li>
                      <li>• Persistent context memory</li>
                    </ul>
                  </div>

                  {/* The Brain: System Prompt */}
                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                        <Brain className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Reasoning Core</h4>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4">
                      The "operating system" that ensures consulting-grade rigor in every analysis.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      <li>• MECE principle adherence</li>
                      <li>• Pyramid Principle communication</li>
                      <li>• Hypothesis-driven analysis</li>
                    </ul>
                  </div>

                  {/* The Knowledge Base: Consultant's Codex */}
                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                        <BookOpen className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Knowledge Base</h4>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4">
                      "The Consultant's Codex" - frameworks, methodologies, and industry expertise.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      <li>• Core strategic frameworks</li>
                      <li>• Industry-specific methodologies</li>
                      <li>• GTM & execution playbooks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Part 2: The Strategic Arsenal */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">THE STRATEGIC ARSENAL: 12 SPECIALIZED ANALYTICAL MODULES</h3>

                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                  <p className="text-zinc-300 leading-relaxed mb-8 text-center">
                    Beyond its core foundation, Noah wields a dynamic suite of 12 specialized analytical tools that can be combined, customized, and deployed to tackle virtually any strategic challenge. This modular approach ensures maximum flexibility and depth for every analysis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-5">
                      <h4 className="font-semibold text-white mb-3 text-yellow-400">Market Analysis</h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        <li>• TAM/SAM/SOM sizing</li>
                        <li>• Competitive landscape mapping</li>
                        <li>• Market entry simulator</li>
                        <li>• Share-gain/loss analysis</li>
                      </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-5">
                      <h4 className="font-semibold text-white mb-3 text-yellow-400">Financial Planning</h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        <li>• 3-statement modeling</li>
                        <li>• M&A target screening</li>
                        <li>• Capital allocation optimizer</li>
                        <li>• Real options analysis</li>
                      </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-5">
                      <h4 className="font-semibold text-white mb-3 text-yellow-400">Customer Strategy</h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        <li>• CLV predictor</li>
                        <li>• Pricing optimizer</li>
                        <li>• Channel effectiveness analyzer</li>
                        <li>• Churn reduction playbook</li>
                      </ul>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-5">
                      <h4 className="font-semibold text-white mb-3 text-yellow-400">Risk Analysis</h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        <li>• Process efficiency identifier</li>
                        <li>• Supply chain stress tester</li>
                        <li>• Compliance impact analyzer</li>
                        <li>• Black swan event planner</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-yellow-400 font-bold text-lg">FLEXIBILITY</div>
                      <div>
                        <p className="text-sm text-yellow-300 mb-2">
                          Each tool operates in multiple modes: "deep-dive" for comprehensive analysis or "quick-scan" for rapid insights. Tools can be chained together to create complete business cases in minutes.
                        </p>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Deep-Dive Mode</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Quick-Scan Mode</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Tool Chaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why This Matters for Velocity AI */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">Why This Transforms Capital Allocation Decisions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-black text-blue-400 mb-4">10X</div>
                      <h4 className="text-white font-semibold mb-2">Faster Analysis</h4>
                      <p className="text-sm text-zinc-400">What takes consultants weeks, Noah delivers in minutes with the same rigor</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-purple-400 mb-4">BCG</div>
                      <h4 className="text-white font-semibold mb-2">Quality Standard</h4>
                      <p className="text-sm text-zinc-400">Every output meets top-tier consulting firm presentation standards</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-yellow-400 mb-4">C-SUITE</div>
                      <h4 className="text-white font-semibold mb-2">Ready Insights</h4>
                      <p className="text-sm text-zinc-400">Defensible recommendations that executives can act on immediately</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Noah's Mission, Vision & Value Proposition */}
              <div className="mt-20">
                <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 border border-blue-700/50 rounded-2xl p-12">
                  <h3 className="text-3xl font-bold text-white mb-12 text-center">Noah: More Than a Tool, A Strategic Philosophy</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div className="bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        Our Mission
                      </h4>
                      <p className="text-sm text-blue-200 mb-4">
                        To democratize access to elite strategic thinking by making consulting-grade AI accessible to organizations of all sizes, empowering better capital allocation decisions.
                      </p>
                      <ul className="space-y-2 text-xs text-blue-300">
                        <li>• Bridge the AI knowledge gap</li>
                        <li>• Demystify complex strategic problems</li>
                        <li>• Accelerate data-driven decision making</li>
                      </ul>
                    </div>

                    {/* Vision */}
                    <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        Our Vision
                      </h4>
                      <p className="text-sm text-purple-200 mb-4">
                        A future where every organization has access to a "virtual strategy director" — an AI that understands business context, challenges assumptions, and delivers actionable insights.
                      </p>
                      <ul className="space-y-2 text-xs text-purple-300">
                        <li>• AI as a strategic partner, not just a tool</li>
                        <li>• Continuous learning and adaptation</li>
                        <li>• Democratizing elite strategic capability</li>
                      </ul>
                    </div>

                    {/* Core Principles */}
                    <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        Core Principles
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="text-yellow-400 font-bold">RIGOR</div>
                          <div className="text-xs text-yellow-200">Every output is held to consulting standards of logic and evidence</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-yellow-400 font-bold">CLARITY</div>
                          <div className="text-xs text-yellow-200">Complex insights translated into executive-ready language</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-yellow-400 font-bold">ADAPTABILITY</div>
                          <div className="text-xs text-yellow-200">Tailored to your specific industry, role, and challenges</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Noah's Strategic Arsenal */}
          <div id="strategic-tools" className="px-6 py-20 md:px-8 bg-gradient-to-b from-black via-zinc-950/50 to-black">
            <StrategicToolsAccordion />
          </div>

          {/* Clausen Advice: Website Redesign Project */}
          <div id="clausen-advice-redesign" className="px-6 py-20 md:px-8 bg-gradient-to-b from-black via-zinc-950/50 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-900/80 to-blue-900/80 border border-purple-700/50 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <Sparkles className="h-4 w-4" />
                  CLAUSEN ADVICE: WEBSITE REDESIGN PROPOSAL
                </div>

                <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
                  REPOSITIONING AN INDUSTRY LEADER FOR THE DIGITAL AGE
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12"></div>

                <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-16">
                  The current Clausen Advice website fails to communicate the depth and sophistication of Malte Clausen's expertise and the unique value proposition of his hybrid consultant-operator profile. This redesign will transform their digital presence into a powerful engine for lead generation and client acquisition, built on the same strategic principles as the "Noah" AI system.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                {/* The Problem */}
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
                      <AlertTriangle className="h-8 w-8 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">The Current Disconnect</h3>
                      <p className="text-sm text-zinc-400">Why the Website Underperforms</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    The existing site presents a generic consulting facade, burying the unique strengths of Clausen Advice. It fails to articulate the powerful combination of elite strategic thinking (McKinsey/BCG) and hands-on execution experience (Vestas), making it difficult for high-value clients to understand and justify the investment.
                  </p>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lacks a clear, compelling value proposition that differentiates from competitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Does not effectively showcase the "Consultant-Operator" hybrid profile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Content is not structured for executive decision-makers and capital allocation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Misses the opportunity to leverage digital transformation as a core theme</span>
                    </li>
                  </ul>
                </div>

                {/* The Solution */}
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                      <Lightbulb className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">The Strategic Redesign</h3>
                      <p className="text-sm text-zinc-400">A Digital Engine for Growth</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    The new website will be a strategic asset, not just a digital brochure. It will be architected to tell the Clausen Advice story with clarity and impact, using the same structured thinking frameworks that underpin my AI systems. Every element will be designed to build trust, demonstrate expertise, and drive qualified leads.
                  </p>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>A dual-page structure: a powerful main site and an "About the Founder" page</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Content structured using the Pyramid Principle for maximum executive impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Visual narrative that highlights the unique consultant-operator journey</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integration of strategic frameworks (PESTLE, Porter's, etc.) to demonstrate intellectual rigor</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Two-Page Architecture */}
              <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-12 mb-20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">A Strategic Two-Page Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Globe className="h-6 w-6 text-blue-400" />
                      Main Website: The Firm
                    </h4>
                    <p className="text-zinc-300 mb-6">
                      This page will establish Clausen Advice as a premier strategic partner. It will focus on the firm's capabilities, methodologies, and the tangible business outcomes it delivers for clients in renewable energy and life sciences.
                    </p>
                    <div className="space-y-2 text-sm text-zinc-400">
                      <div>• Compelling value proposition based on the "Consultant-Operator" edge</div>
                      <div>• Overview of service pillars (Sales Execution, Growth Strategy, Digital Transformation)</div>
                      <div>• Case studies and quantifiable results</div>
                      <div>• Client testimonials and logos</div>
                      <div>• Clear calls-to-action for high-intent prospects</div>
                    </div>
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <User className="h-6 w-6 text-purple-400" />
                      About the Founder: The Strategist
                    </h4>
                    <p className="text-zinc-300 mb-6">
                      This page will build personal trust and authority by telling Malte Clausen's unique story. It will humanize the firm and connect on a personal level with C-suite decision-makers.
                    </p>
                    <div className="space-y-2 text-sm text-zinc-400">
                      <div>• A narrative of the career journey from McKinsey to Vestas to BCG</div>
                      <div>• Deep dive into the "hybrid profile" and its strategic advantages</div>
                      <div>• Personal philosophy on strategy and execution</div>
                      <div>• Speaking engagements and published thought leadership</div>
                      <div>• A direct, personal connection point</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why This Works */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 border border-purple-700/50 rounded-2xl p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">Why This Redesign Will Win More Business</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-black text-purple-400 mb-4">STRATEGIC</div>
                      <h4 className="text-white font-semibold mb-2">Clarity & Credibility</h4>
                      <p className="text-sm text-zinc-300">The site will finally articulate the unique value of Clausen Advice, making it easy for prospects to understand why they are the best choice.</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-blue-400 mb-4">EXECUTION</div>
                      <h4 className="text-white font-semibold mb-2">Trust & Authority</h4>
                      <p className="text-sm text-zinc-300">By showcasing the real-world experience at Vestas, the site builds trust that the strategy is grounded in operational reality.</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-green-400 mb-4">MODERN</div>
                      <h4 className="text-white font-semibold mb-2">Relevance & Leadership</h4>
                      <p className="text-sm text-zinc-300">The focus on digital transformation positions Clausen Advice as a forward-thinking leader, not a traditional consultancy.</p>
                    </div>
                  </div>

                  <div className="border-t border-purple-600/30 pt-8">
                    <h4 className="text-xl font-bold text-white mb-4">See the Complete Redesign</h4>
                    <Button
                      onClick={() => window.open('/clausen-redesign', '_blank')}
                      className="group px-10 py-4 bg-white text-purple-900 font-black text-lg uppercase tracking-wider transition-all hover:bg-gray-100 hover:scale-105 rounded-xl shadow-2xl"
                    >
                      <span className="flex items-center gap-3">
                        VIEW THE NEW WEBSITE
                        <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <p className="text-sm text-purple-200 mt-3">
                      A complete reimagining of how strategic consulting should be presented online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Garden Scorecard Project */}
          <div id="social-garden-scorecard" className="px-6 py-16 md:px-8 bg-gradient-to-b from-black via-zinc-950/50 to-black">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-900/80 to-emerald-900/80 border border-teal-700/50 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <Sparkles className="h-4 w-4" />
                  CLIENT PROJECT
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                  SOCIAL GARDEN SCORECARD
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-8"></div>

                <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8">
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    A project developed for a client, showcasing my ability to build strategic tools that drive measurable outcomes. This initiative aligns perfectly with my focus on creating AI-powered systems that solve complex business problems and enhance decision-making processes.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      onClick={() => window.open('https://scorecard.socialgarden.com.au/landing', '_blank')}
                      className="group px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-black text-lg uppercase tracking-wider transition-all hover:scale-105 rounded-xl shadow-2xl"
                    >
                      <span className="flex items-center gap-3">
                        VIEW PROJECT
                        <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div id="contact" className="px-6 py-16 md:px-8 bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-12">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  READY TO BUILD THE FUTURE OF STRATEGIC AI?
                </h2>
                <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                  I'm the strategic AI architect who can translate your BCG-level thinking into AI systems
                  that deliver consulting-grade insights for capital allocation decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open('https://www.linkedin.com/in/abashh/', '_blank')}
                    className="group px-8 py-4 bg-white text-black font-black text-lg uppercase tracking-wider transition-all hover:bg-zinc-200 hover:scale-105 rounded-xl shadow-2xl"
                  >
                    <span className="flex items-center gap-3">
                      LET'S CONNECT
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button className="group px-8 py-4 bg-zinc-900/80 border-2 border-zinc-700 text-white font-black text-lg uppercase tracking-wider transition-all hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105 rounded-xl">
                    <span className="flex items-center gap-3">
                      TEST MY AI SYSTEMS ABOVE
                      <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>  {/* Closing div for min-h-screen bg-black text-white */}
      </main>
    </div>
  );
};

export default CustomPortfolioLanding;
