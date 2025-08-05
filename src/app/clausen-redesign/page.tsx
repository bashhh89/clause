'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Users, Target, Sparkles, Brain, BookOpen, Award, ChevronLeft, Menu, Briefcase, Phone, ExternalLink, Globe, User, TrendingUp, BarChart3, Zap, CheckCircle, Star, Building, Lightbulb, Shield } from 'lucide-react';
// import { useAnythingLLMClausen } from '@/hooks/useAnythingLLMClausen';

const ClausenAdviceRedesign = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Initialize AnythingLLM chat widget for Clausen
  // useAnythingLLMClausen();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Velocity AI</div>
                <div className="text-xs text-gray-600">AI-Powered Capital Allocation</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 font-medium">Results</a>
              <a href="/malte-clausen" className="text-gray-700 hover:text-blue-600 font-medium">About Malte</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                Schedule Demo
              </Button>  
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              AI-POWERED CAPITAL ALLOCATION
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-none">
              <span className="text-gray-900">VELOCITY</span>
              <span className="text-blue-600 block">AI</span>
            </h1>
            
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              We help corporations make faster, smarter capital allocation decisions using 
              large language models and cutting-edge AI technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold">
                <span className="flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-bold">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-black text-blue-600 mb-4">10X</div>
                <div className="text-lg font-bold text-gray-900 mb-2">Faster Decisions</div>
                <div className="text-gray-600">AI-powered analysis delivers insights in minutes, not weeks</div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-black text-blue-600 mb-4">€2B+</div>
                <div className="text-lg font-bold text-gray-900 mb-2">Capital Optimized</div>
                <div className="text-gray-600">Proven track record of strategic capital allocation</div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-black text-blue-600 mb-4">BCG</div>
                <div className="text-lg font-bold text-gray-900 mb-2">Quality Standards</div>
                <div className="text-gray-600">Consulting-grade strategic frameworks and analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Consultant-Operator Edge */}
      <div className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900/80 border border-zinc-800 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <Sparkles className="h-4 w-4" />
              THE CONSULTANT-OPERATOR EDGE
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-zinc-300">THINKING</span> + OPERATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-zinc-300">EXCELLENCE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"></div>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Most consultants have never run a P&L. Most operators can't think strategically. 
              I've done both at the highest levels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Strategic Thinking</h3>
                    <p className="text-zinc-400">McKinsey • BCG</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Structured problem-solving frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Data-driven decision making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">C-suite communication</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border border-zinc-700 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                    <Zap className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Operational Excellence</h3>
                    <p className="text-zinc-400">Vestas Division Lead</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">P&L responsibility for €500M+ division</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Team leadership at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Implementation that actually works</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 border border-blue-700/50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">The Result: Strategy That Gets Executed</h3>
            <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              I don't just create beautiful PowerPoints. I build strategies that survive contact with reality 
              because I've lived in both worlds - the boardroom and the factory floor.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900/80 border border-zinc-800 rounded-full text-white text-sm font-bold mb-12 uppercase tracking-wider backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <Target className="h-4 w-4" />
              HOW I HELP CORPORATIONS WIN
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              THREE CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-zinc-300">VALUE AREAS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12"></div>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Where the consultant-operator combination creates outsized value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sales Execution</h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Transform your sales organization from order-takers to strategic partners. 
                I've built and optimized sales engines that consistently deliver.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Funnel optimization and conversion improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sales team structure and compensation design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer segmentation and targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Value-based selling methodologies</span>
                </li>
              </ul>
            </div>

            <div className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                  <BarChart3 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Growth Strategy</h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Identify and capture growth opportunities that others miss. 
                Strategic thinking backed by operational know-how.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Market entry and expansion strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Product portfolio optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>M&A target identification and integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pricing strategy and value capture</span>
                </li>
              </ul>
            </div>

            <div className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                  <Lightbulb className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Digital Transformation</h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Navigate digital disruption with strategies that create competitive advantage. 
                Technology that serves business objectives.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI and automation implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digital business model innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology stack optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Change management and adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Case Studies */}
      <div id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes from real engagements. Numbers that matter to your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">€2.1B</div>
              <div className="text-gray-600">Capital Allocated</div>
              <div className="text-sm text-gray-500 mt-1">Across 50+ strategic initiatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
              <div className="text-sm text-gray-500 mt-1">On digital transformation projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">18M</div>
              <div className="text-gray-600">Sales Increase</div>
              <div className="text-sm text-gray-500 mt-1">Annual recurring revenue growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Implementation Rate</div>
              <div className="text-sm text-gray-500 mt-1">Strategies that actually get executed</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Renewable Energy Giant</CardTitle>
                    <p className="text-gray-600">Global Market Expansion</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Led strategic expansion into 12 new markets, optimizing capital allocation 
                  across €800M investment portfolio while maintaining operational excellence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">€800M</div>
                    <div className="text-sm text-gray-600">Capital Deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">28%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Pharma & Life Sciences</CardTitle>
                    <p className="text-gray-600">Digital Transformation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Transformed traditional pharma operations through AI-powered drug discovery 
                  and digital patient engagement platforms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-sm text-gray-600">Time to Market</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">€45M</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* About Malte */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Malte Clausen</h2>
              <p className="text-xl text-gray-600 mb-8">
                A unique career spanning elite consulting and operational leadership, 
                creating a perspective that bridges strategy and execution.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Education & Foundation</h3>
                    <p className="text-gray-600">LSE (MSc) • Harvard Business School (MBA) • Built on rigorous analytical thinking</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Strategic Consulting</h3>
                    <p className="text-gray-600">McKinsey Manager • BCG Partner • Mastered the art of strategic problem-solving</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Operational Leadership</h3>
                    <p className="text-gray-600">Vestas Division Lead • P&L responsibility • Learned what actually works in practice</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Renewable Energy • Pharma & Life Sciences • Complex B2B environments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "The best strategies are worthless if they can't be executed. 
                    The best execution is wasted if it's not strategically sound. 
                    I've learned to excel at both."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MC</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Malte Clausen</div>
                      <div className="text-gray-600">Founder, Clausen Advice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make Smarter Capital Allocation Decisions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how the consultant-operator approach can create value for your organization. 
            Strategic thinking that actually gets implemented.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <span className="flex items-center gap-2">
                Schedule a Strategic Session
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CA</span>
                </div>
                <div>
                  <div className="font-bold text-white">Clausen Advice</div>
                  <div className="text-xs text-gray-400">Strategic Consulting</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Strategy that actually works. Execution that delivers results.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sales Execution</li>
                <li>Growth Strategy</li>
                <li>Digital Transformation</li>
                <li>Capital Allocation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Renewable Energy</li>
                <li>Pharma & Life Sciences</li>
                <li>Technology</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>LinkedIn</li>
                <li>Email</li>
                <li>Schedule a Call</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Clausen Advice. Strategic consulting that bridges thinking and execution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClausenAdviceRedesign;