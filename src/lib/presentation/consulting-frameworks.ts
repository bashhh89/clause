/**
 * Consulting Frameworks for Keystone Presentation Engine
 * Elite consulting frameworks (McKinsey, BCG, Bain) for strategic presentations
 */

export interface FrameworkTemplate {
  id: string;
  name: string;
  description: string;
  useCase: string;
  structure: FrameworkSection[];
  promptTemplate: string;
  visualSuggestions: string[];
}

export interface FrameworkSection {
  title: string;
  description: string;
  analysisPoints: string[];
  expectedOutputs: string[];
}

// SWOT Analysis Framework
export const SWOT_FRAMEWORK: FrameworkTemplate = {
  id: 'swot',
  name: 'SWOT Analysis',
  description: 'Strengths, Weaknesses, Opportunities, Threats analysis',
  useCase: 'Strategic positioning and competitive analysis',
  structure: [
    {
      title: 'Strengths',
      description: 'Internal positive factors that give competitive advantage',
      analysisPoints: [
        'Core competencies and capabilities',
        'Unique resources and assets',
        'Market position and brand strength',
        'Financial performance and stability',
        'Operational efficiency and processes'
      ],
      expectedOutputs: [
        'List of 3-5 key strengths with evidence',
        'Quantified metrics where possible',
        'Competitive differentiation points'
      ]
    },
    {
      title: 'Weaknesses',
      description: 'Internal negative factors that hinder performance',
      analysisPoints: [
        'Resource limitations and gaps',
        'Operational inefficiencies',
        'Market position vulnerabilities',
        'Financial constraints',
        'Capability deficits'
      ],
      expectedOutputs: [
        'List of 3-5 key weaknesses with impact assessment',
        'Root cause analysis',
        'Priority ranking for addressing'
      ]
    },
    {
      title: 'Opportunities',
      description: 'External positive factors that can be leveraged',
      analysisPoints: [
        'Market growth trends and emerging segments',
        'Technological advancements',
        'Regulatory changes',
        'Competitive gaps',
        'Partnership possibilities'
      ],
      expectedOutputs: [
        'List of 3-5 key opportunities with market sizing',
        'Timeline and feasibility assessment',
        'Required capabilities to capture'
      ]
    },
    {
      title: 'Threats',
      description: 'External negative factors that pose risks',
      analysisPoints: [
        'Competitive pressures',
        'Market disruption risks',
        'Regulatory challenges',
        'Economic headwinds',
        'Technology obsolescence'
      ],
      expectedOutputs: [
        'List of 3-5 key threats with probability and impact',
        'Mitigation strategies',
        'Early warning indicators'
      ]
    }
  ],
  promptTemplate: `Conduct a comprehensive SWOT analysis for {company/situation}. 

For each quadrant, provide:
- 3-5 specific, evidence-based points
- Quantified metrics where available
- Strategic implications
- Interconnections between quadrants

Focus on actionable insights that drive strategic decision-making.`,
  visualSuggestions: [
    '2x2 matrix with four quadrants',
    'Bubble chart showing impact vs probability',
    'Interconnection diagram showing relationships',
    'Priority matrix for action items'
  ]
};

// PESTLE Analysis Framework
export const PESTLE_FRAMEWORK: FrameworkTemplate = {
  id: 'pestle',
  name: 'PESTLE Analysis',
  description: 'Political, Economic, Social, Technological, Legal, Environmental analysis',
  useCase: 'External environment analysis and market entry assessment',
  structure: [
    {
      title: 'Political',
      description: 'Government policies, political stability, and regulatory environment',
      analysisPoints: [
        'Government stability and policy direction',
        'Trade policies and international relations',
        'Tax policies and incentives',
        'Political risk and corruption levels',
        'Government spending priorities'
      ],
      expectedOutputs: [
        'Key political factors affecting the business',
        'Policy trend analysis and implications',
        'Political risk assessment and mitigation'
      ]
    },
    {
      title: 'Economic',
      description: 'Economic conditions, trends, and financial factors',
      analysisPoints: [
        'GDP growth rates and economic cycles',
        'Inflation rates and currency stability',
        'Interest rates and access to capital',
        'Employment levels and labor costs',
        'Consumer spending patterns'
      ],
      expectedOutputs: [
        'Economic indicators and trend analysis',
        'Market size and growth projections',
        'Economic risk factors and opportunities'
      ]
    },
    {
      title: 'Social',
      description: 'Demographics, cultural trends, and social factors',
      analysisPoints: [
        'Demographic trends and population dynamics',
        'Cultural values and lifestyle changes',
        'Education levels and skill availability',
        'Health consciousness and social movements',
        'Consumer behavior patterns'
      ],
      expectedOutputs: [
        'Demographic analysis and implications',
        'Cultural trend assessment',
        'Social risk and opportunity identification'
      ]
    },
    {
      title: 'Technological',
      description: 'Technology trends, innovation, and digital transformation',
      analysisPoints: [
        'Emerging technologies and innovation rates',
        'Digital transformation trends',
        'R&D investment and patent activity',
        'Technology adoption rates',
        'Automation and AI impact'
      ],
      expectedOutputs: [
        'Technology trend analysis and disruption potential',
        'Innovation opportunity assessment',
        'Technology risk and investment requirements'
      ]
    },
    {
      title: 'Legal',
      description: 'Legal framework, regulations, and compliance requirements',
      analysisPoints: [
        'Industry regulations and compliance requirements',
        'Employment law and labor regulations',
        'Consumer protection and data privacy laws',
        'Intellectual property protection',
        'Contract law and dispute resolution'
      ],
      expectedOutputs: [
        'Legal and regulatory landscape analysis',
        'Compliance requirements and costs',
        'Legal risk assessment and mitigation'
      ]
    },
    {
      title: 'Environmental',
      description: 'Environmental factors, sustainability, and climate considerations',
      analysisPoints: [
        'Climate change and environmental regulations',
        'Sustainability requirements and ESG factors',
        'Resource availability and scarcity',
        'Environmental impact and carbon footprint',
        'Green technology and renewable energy trends'
      ],
      expectedOutputs: [
        'Environmental impact assessment',
        'Sustainability opportunity and risk analysis',
        'ESG compliance and reporting requirements'
      ]
    }
  ],
  promptTemplate: `Conduct a comprehensive PESTLE analysis for {company/market/situation}.

For each factor, analyze:
- Current state and key trends
- Impact on the business (High/Medium/Low)
- Timeline of impact (Short/Medium/Long term)
- Strategic implications and required responses

Provide specific, data-driven insights with quantified impacts where possible.`,
  visualSuggestions: [
    'Six-section wheel diagram',
    'Impact vs Timeline matrix',
    'Trend analysis charts',
    'Risk-opportunity heat map'
  ]
};

// Porter's Five Forces Framework
export const PORTERS_FIVE_FORCES: FrameworkTemplate = {
  id: 'porters-five-forces',
  name: "Porter's Five Forces",
  description: 'Competitive forces analysis for industry attractiveness',
  useCase: 'Industry analysis and competitive strategy development',
  structure: [
    {
      title: 'Threat of New Entrants',
      description: 'Barriers to entry and likelihood of new competitors',
      analysisPoints: [
        'Capital requirements and startup costs',
        'Economies of scale and learning curves',
        'Brand loyalty and customer switching costs',
        'Access to distribution channels',
        'Regulatory barriers and licensing requirements'
      ],
      expectedOutputs: [
        'Entry barrier assessment (High/Medium/Low)',
        'New entrant threat level and timeline',
        'Defensive strategies and moat strengthening'
      ]
    },
    {
      title: 'Bargaining Power of Suppliers',
      description: 'Supplier concentration and switching costs',
      analysisPoints: [
        'Supplier concentration and alternatives',
        'Switching costs and relationship importance',
        'Forward integration potential',
        'Input cost impact on total costs',
        'Supplier differentiation and uniqueness'
      ],
      expectedOutputs: [
        'Supplier power assessment by category',
        'Supply chain risk analysis',
        'Supplier relationship optimization strategies'
      ]
    },
    {
      title: 'Bargaining Power of Buyers',
      description: 'Customer concentration and price sensitivity',
      analysisPoints: [
        'Buyer concentration and volume importance',
        'Price sensitivity and switching costs',
        'Backward integration potential',
        'Product differentiation and substitutes',
        'Information availability and transparency'
      ],
      expectedOutputs: [
        'Buyer power assessment by segment',
        'Customer retention and loyalty strategies',
        'Pricing power and margin protection'
      ]
    },
    {
      title: 'Threat of Substitutes',
      description: 'Alternative products and services availability',
      analysisPoints: [
        'Substitute product availability and performance',
        'Price-performance trade-offs',
        'Customer propensity to substitute',
        'Switching costs and barriers',
        'Innovation and technology disruption'
      ],
      expectedOutputs: [
        'Substitute threat assessment and monitoring',
        'Differentiation and value proposition strengthening',
        'Innovation and adaptation strategies'
      ]
    },
    {
      title: 'Competitive Rivalry',
      description: 'Intensity of competition among existing players',
      analysisPoints: [
        'Number and size of competitors',
        'Industry growth rate and capacity utilization',
        'Product differentiation and switching costs',
        'Exit barriers and strategic stakes',
        'Competitive moves and retaliation patterns'
      ],
      expectedOutputs: [
        'Competitive intensity assessment',
        'Competitive positioning and differentiation',
        'Strategic moves and competitive responses'
      ]
    }
  ],
  promptTemplate: `Analyze the competitive forces for {industry/market} using Porter's Five Forces framework.

For each force, evaluate:
- Current intensity level (High/Medium/Low)
- Key driving factors and trends
- Impact on industry profitability
- Strategic implications for competitive positioning

Conclude with overall industry attractiveness assessment and strategic recommendations.`,
  visualSuggestions: [
    'Five forces diagram with intensity ratings',
    'Industry attractiveness scorecard',
    'Competitive positioning map',
    'Strategic response matrix'
  ]
};

// Pyramid Principle Structure
export const PYRAMID_PRINCIPLE: FrameworkTemplate = {
  id: 'pyramid-principle',
  name: 'Pyramid Principle',
  description: 'Structured thinking and communication framework',
  useCase: 'Strategic presentation structure and executive communication',
  structure: [
    {
      title: 'Main Message',
      description: 'Single, clear recommendation or conclusion',
      analysisPoints: [
        'What is the core recommendation?',
        'What action should be taken?',
        'What is the expected outcome?',
        'Why is this the right answer?'
      ],
      expectedOutputs: [
        'One-sentence main message',
        'Clear call to action',
        'Expected business impact'
      ]
    },
    {
      title: 'Supporting Arguments',
      description: 'MECE (Mutually Exclusive, Collectively Exhaustive) supporting points',
      analysisPoints: [
        'What are the 3-4 key reasons supporting the main message?',
        'Are the arguments mutually exclusive?',
        'Do they collectively exhaust all relevant points?',
        'What evidence supports each argument?'
      ],
      expectedOutputs: [
        '3-4 MECE supporting arguments',
        'Evidence and data for each point',
        'Logical flow and connection to main message'
      ]
    },
    {
      title: 'Supporting Data',
      description: 'Facts, analyses, and evidence supporting each argument',
      analysisPoints: [
        'What data supports each argument?',
        'What analyses have been conducted?',
        'What are the key insights from the data?',
        'How reliable and current is the evidence?'
      ],
      expectedOutputs: [
        'Relevant data and metrics',
        'Analysis results and insights',
        'Source credibility and recency'
      ]
    }
  ],
  promptTemplate: `Structure the following content using the Pyramid Principle for {topic/situation}.

Create:
1. Main Message: Single, clear recommendation
2. Supporting Arguments: 3-4 MECE points supporting the main message
3. Supporting Data: Evidence and analysis for each argument

Ensure logical flow from conclusion to supporting evidence, following top-down communication structure.`,
  visualSuggestions: [
    'Pyramid diagram showing hierarchy',
    'Logic tree structure',
    'Executive summary format',
    'Storyboard flow'
  ]
};

// BCG Growth-Share Matrix
export const BCG_MATRIX: FrameworkTemplate = {
  id: 'bcg-matrix',
  name: 'BCG Growth-Share Matrix',
  description: 'Portfolio analysis framework for business units or products',
  useCase: 'Portfolio management and resource allocation decisions',
  structure: [
    {
      title: 'Stars',
      description: 'High growth, high market share - invest for growth',
      analysisPoints: [
        'Market growth rate above industry average',
        'Leading market share position',
        'Cash generation and investment needs',
        'Competitive advantages and sustainability',
        'Growth trajectory and market potential'
      ],
      expectedOutputs: [
        'Star business identification and metrics',
        'Investment requirements and ROI projections',
        'Growth strategy and resource allocation'
      ]
    },
    {
      title: 'Cash Cows',
      description: 'Low growth, high market share - harvest cash',
      analysisPoints: [
        'Mature market with low growth',
        'Dominant market position',
        'Strong cash generation capability',
        'Cost efficiency and operational excellence',
        'Market share defense strategies'
      ],
      expectedOutputs: [
        'Cash cow identification and cash flow analysis',
        'Optimization opportunities and cost reduction',
        'Cash allocation to other business units'
      ]
    },
    {
      title: 'Question Marks',
      description: 'High growth, low market share - invest or divest',
      analysisPoints: [
        'High market growth potential',
        'Weak competitive position',
        'Cash consumption and investment needs',
        'Path to market leadership feasibility',
        'Strategic fit and capabilities'
      ],
      expectedOutputs: [
        'Question mark assessment and prioritization',
        'Investment vs divestment decision framework',
        'Turnaround strategies and success metrics'
      ]
    },
    {
      title: 'Dogs',
      description: 'Low growth, low market share - divest or restructure',
      analysisPoints: [
        'Mature or declining market',
        'Weak competitive position',
        'Limited cash generation',
        'Restructuring or exit options',
        'Strategic value and synergies'
      ],
      expectedOutputs: [
        'Dog business identification and performance',
        'Exit strategy and divestment options',
        'Restructuring potential and value creation'
      ]
    }
  ],
  promptTemplate: `Analyze the business portfolio using the BCG Growth-Share Matrix for {company/business units}.

For each quadrant:
- Identify relevant business units or products
- Assess market growth rate and relative market share
- Determine strategic recommendations (invest, harvest, divest)
- Calculate cash flow implications and resource allocation

Provide overall portfolio balance assessment and strategic priorities.`,
  visualSuggestions: [
    '2x2 matrix with bubble sizes for revenue',
    'Portfolio balance analysis',
    'Cash flow waterfall chart',
    'Strategic priority matrix'
  ]
};

// Value Chain Analysis
export const VALUE_CHAIN: FrameworkTemplate = {
  id: 'value-chain',
  name: 'Value Chain Analysis',
  description: 'Analysis of primary and support activities creating value',
  useCase: 'Operational excellence and competitive advantage identification',
  structure: [
    {
      title: 'Primary Activities',
      description: 'Core activities directly involved in creating and delivering value',
      analysisPoints: [
        'Inbound logistics and supply chain',
        'Operations and production processes',
        'Outbound logistics and distribution',
        'Marketing and sales activities',
        'Service and customer support'
      ],
      expectedOutputs: [
        'Value creation analysis by activity',
        'Cost structure and margin analysis',
        'Competitive advantage identification'
      ]
    },
    {
      title: 'Support Activities',
      description: 'Supporting activities that enable primary activities',
      analysisPoints: [
        'Technology development and R&D',
        'Human resource management',
        'General administration and infrastructure',
        'Procurement and vendor management'
      ],
      expectedOutputs: [
        'Support activity effectiveness assessment',
        'Cross-functional synergies and optimization',
        'Investment priorities and capability gaps'
      ]
    }
  ],
  promptTemplate: `Conduct a value chain analysis for {company/business unit}.

Analyze:
- Primary activities: value creation, costs, and competitive positioning
- Support activities: effectiveness and optimization opportunities
- Linkages and synergies between activities
- Competitive advantages and improvement areas

Provide recommendations for value chain optimization and competitive positioning.`,
  visualSuggestions: [
    'Value chain diagram with cost breakdown',
    'Competitive comparison chart',
    'Optimization opportunity matrix',
    'Value creation flow'
  ]
};

// All available frameworks
export const CONSULTING_FRAMEWORKS: FrameworkTemplate[] = [
  SWOT_FRAMEWORK,
  PESTLE_FRAMEWORK,
  PORTERS_FIVE_FORCES,
  PYRAMID_PRINCIPLE,
  BCG_MATRIX,
  VALUE_CHAIN
];

// Framework selection logic
export function selectOptimalFramework(
  analysisType: string,
  businessContext: string,
  objectives: string[]
): FrameworkTemplate[] {
  const recommendations: FrameworkTemplate[] = [];
  
  const lowerAnalysisType = analysisType.toLowerCase();
  const lowerContext = businessContext.toLowerCase();
  
  // Strategic positioning and competitive analysis
  if (lowerAnalysisType.includes('competitive') || lowerAnalysisType.includes('positioning')) {
    recommendations.push(SWOT_FRAMEWORK, PORTERS_FIVE_FORCES);
  }
  
  // Market entry and external environment
  if (lowerAnalysisType.includes('market entry') || lowerAnalysisType.includes('expansion')) {
    recommendations.push(PESTLE_FRAMEWORK, PORTERS_FIVE_FORCES);
  }
  
  // Portfolio and business unit analysis
  if (lowerAnalysisType.includes('portfolio') || lowerContext.includes('business unit')) {
    recommendations.push(BCG_MATRIX);
  }
  
  // Operational excellence and efficiency
  if (lowerAnalysisType.includes('operational') || lowerAnalysisType.includes('efficiency')) {
    recommendations.push(VALUE_CHAIN);
  }
  
  // Always include Pyramid Principle for structure
  if (!recommendations.includes(PYRAMID_PRINCIPLE)) {
    recommendations.unshift(PYRAMID_PRINCIPLE);
  }
  
  return recommendations.length > 0 ? recommendations : [PYRAMID_PRINCIPLE, SWOT_FRAMEWORK];
}

// Generate framework-specific prompts
export function generateFrameworkPrompt(
  framework: FrameworkTemplate,
  userPrompt: string,
  context?: any
): string {
  return framework.promptTemplate.replace(/{[^}]+}/g, (match) => {
    const key = match.slice(1, -1);
    if (key.includes('/')) {
      return userPrompt; // Use user prompt for placeholder options
    }
    return context?.[key] || userPrompt;
  });
}

// Validate framework output structure
export function validateFrameworkOutput(
  output: any,
  framework: FrameworkTemplate
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!output || typeof output !== 'object') {
    errors.push('Output must be a valid object');
    return { isValid: false, errors };
  }
  
  // Check if all required sections are present
  framework.structure.forEach(section => {
    if (!output[section.title.toLowerCase().replace(/\s+/g, '_')]) {
      errors.push(`Missing required section: ${section.title}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}