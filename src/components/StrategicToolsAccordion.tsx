'use client';

import React from 'react';
import { ChevronDown, ChevronRight, Target, TrendingUp, Shield, BarChart3, Globe, Zap, Wrench, Scale, DollarSign, Users } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const strategicTools: Tool[] = [
  {
    id: 'acquisition-target-business-case',
    title: 'Acquisition Target Business Case',
    description: 'Evaluates potential acquisition targets by analyzing financial health, market position, and strategic fit to build a compelling investment thesis.',
    icon: BarChart3,
  },
  {
    id: 'capital-allocation-optimizer',
    title: 'Capital Allocation Optimizer',
    description: 'Advises on the most effective distribution of financial resources across projects and business units to maximize ROI and strategic alignment.',
    icon: Scale,
  },
  {
    id: 'competitive-positioning-analyzer',
    title: 'Competitive Positioning Analyzer',
    description: 'Maps competitive landscapes, identifies unique value propositions, and develops strategies to gain and maintain market advantage.',
    icon: Target,
  },
  {
    id: 'digital-transformation-roi-assessment',
    title: 'Digital Transformation ROI Assessment',
    description: 'Quantifies the financial and operational impact of digital initiatives, ensuring investments drive meaningful business value and efficiency.',
    icon: TrendingUp,
  },
  {
    id: 'market-entry-feasibility-checker',
    title: 'Market Entry Feasibility Checker',
    description: 'Assesses the viability of entering new markets by evaluating demand, competition, regulatory risks, and potential ROI.',
    icon: Globe,
  },
  {
    id: 'market-growth-strategy-development',
    title: 'Market Growth Strategy Development',
    description: 'Crafts data-driven strategies for sustainable market expansion, identifying untapped opportunities and optimal pathways for growth.',
    icon: TrendingUp,
  },
  {
    id: 'operational-efficiency-auditor',
    title: 'Operational Efficiency Auditor',
    description: 'Pinpoints bottlenecks and redundancies in business processes, recommending targeted improvements to enhance productivity and reduce costs.',
    icon: Zap,
  },
  {
    id: 'portfolio-rebalancing-advisor',
    title: 'Portfolio Rebalancing Advisor',
    description: 'Guides the optimization of investment or product portfolios to align with strategic goals, risk tolerance, and market conditions.',
    icon: Scale,
  },
  {
    id: 'risk-mitigation-planner',
    title: 'Risk Mitigation Planner',
    description: 'Identifies, analyzes, and prioritizes business risks, developing proactive strategies to minimize potential threats and ensure resilience.',
    icon: Shield,
  },
  {
    id: 'sales-compensation-designer',
    title: 'Sales Compensation Designer',
    description: 'Architects effective and motivating sales compensation structures that drive desired behaviors and align with company objectives.',
    icon: DollarSign,
  },
  {
    id: 'sales-pipeline-diagnostic',
    title: 'Sales Pipeline Diagnostic',
    description: 'Analyzes sales funnel performance to identify conversion bottlenecks, forecast accuracy, and opportunities for revenue acceleration.',
    icon: Users,
  },
  {
    id: 'value-based-pricing-modeler',
    title: 'Value-Based Pricing Modeler',
    description: 'Develops sophisticated pricing strategies based on customer perceived value, competitive dynamics, and willingness to pay for maximum profitability.',
    icon: DollarSign,
  },
];

const StrategicToolsAccordion: React.FC = () => {
  const [openToolId, setOpenToolId] = React.useState<string | null>(null);

  const toggleTool = (toolId: string) => {
    setOpenToolId(openToolId === toolId ? null : toolId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Noah's Strategic Arsenal
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          A suite of specialized AI engines, each designed to tackle complex business challenges. 
          These are the tools Noah deploys to deliver actionable, high-impact insights.
        </p>
      </div>
      
      <div className="space-y-4">
        {strategicTools.map((tool) => {
          const Icon = tool.icon;
          const isOpen = openToolId === tool.id;
          return (
            <div key={tool.id} className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleTool(tool.id)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-zinc-800/50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`tool-description-${tool.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                </div>
                {isOpen ? (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-zinc-400" />
                )}
              </button>
              
              <div
                id={`tool-description-${tool.id}`}
                className={`px-6 pb-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-zinc-300 leading-relaxed pl-12">{tool.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StrategicToolsAccordion;
