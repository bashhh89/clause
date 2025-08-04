/**
 * Reasoning Engine for Keystone Presentation Engine
 * Transparent, auditable AI reasoning for strategic presentations
 */

import { getChatCompletionAsGemini, generateText } from '../pollinations-api';
import { 
  CONSULTING_FRAMEWORKS, 
  FrameworkTemplate, 
  selectOptimalFramework,
  generateFrameworkPrompt,
  validateFrameworkOutput
} from './consulting-frameworks';

// Core reasoning interfaces
export interface ReasoningStep {
  id: string;
  step: number;
  type: 'analysis' | 'framework_selection' | 'structure_design' | 'content_generation' | 'validation';
  input: string;
  reasoning: string;
  output: any;
  confidence: number;
  sources: string[];
  timestamp: Date;
  duration: number; // milliseconds
}

export interface ReasoningChain {
  id: string;
  sessionId: string;
  userPrompt: string;
  steps: ReasoningStep[];
  totalDuration: number;
  overallConfidence: number;
  status: 'in_progress' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface StrategicOutline {
  id: string;
  mainRecommendation: string;
  executiveSummary: string;
  sections: OutlineSection[];
  frameworks: string[];
  reasoningChainId: string;
  confidence: number;
  estimatedSlideCount: number;
}

export interface OutlineSection {
  id: string;
  title: string;
  description: string;
  framework?: string;
  subsections: string[];
  keyPoints: string[];
  visualSuggestions: string[];
  reasoning: string;
}

export interface SlideContent {
  id: string;
  sectionId: string;
  title: string;
  content: string;
  visualType: 'text' | 'chart' | 'diagram' | 'table' | 'image';
  visualData?: any;
  keyInsights: string[];
  sources: string[];
  reasoning: string;
  confidence: number;
}

export interface PresentationGeneration {
  id: string;
  userPrompt: string;
  outline?: StrategicOutline;
  slides: SlideContent[];
  reasoningChains: ReasoningChain[];
  status: 'prompt_analysis' | 'outline_generation' | 'outline_review' | 'slide_generation' | 'complete' | 'failed';
  progress: number; // 0-100
  createdAt: Date;
  updatedAt: Date;
}

// Reasoning Engine Class
export class ReasoningEngine {
  private currentChain: ReasoningChain | null = null;
  private stepCounter = 0;

  // Initialize new reasoning chain
  startReasoningChain(sessionId: string, userPrompt: string): ReasoningChain {
    this.currentChain = {
      id: `chain_${Date.now()}`,
      sessionId,
      userPrompt,
      steps: [],
      totalDuration: 0,
      overallConfidence: 0,
      status: 'in_progress',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.stepCounter = 0;
    return this.currentChain;
  }

  // Add reasoning step
  private async addReasoningStep(
    type: ReasoningStep['type'],
    input: string,
    reasoning: string,
    output: any,
    confidence: number,
    sources: string[] = []
  ): Promise<ReasoningStep> {
    if (!this.currentChain) {
      throw new Error('No active reasoning chain');
    }

    const step: ReasoningStep = {
      id: `step_${this.stepCounter++}`,
      step: this.stepCounter,
      type,
      input,
      reasoning,
      output,
      confidence,
      sources,
      timestamp: new Date(),
      duration: 0 // Will be updated when step completes
    };

    this.currentChain.steps.push(step);
    this.currentChain.updatedAt = new Date();
    
    return step;
  }

  // Analyze user prompt and determine strategic approach
  async analyzePrompt(userPrompt: string): Promise<{
    analysisType: string;
    businessContext: string;
    objectives: string[];
    recommendedFrameworks: FrameworkTemplate[];
    reasoning: string;
    confidence: number;
  }> {
    const startTime = Date.now();
    
    const analysisPrompt = `
You are an elite strategy consultant. Analyze this presentation request and determine the optimal strategic approach.

User Request: "${userPrompt}"

Analyze and provide:
1. Analysis Type: What type of strategic analysis is needed? (competitive analysis, market entry, portfolio review, operational assessment, etc.)
2. Business Context: What industry, company size, or business situation is this about?
3. Objectives: What are the key objectives and success criteria?
4. Strategic Approach: What consulting frameworks would be most appropriate?
5. Reasoning: Explain your analytical approach and why these frameworks are optimal

Provide detailed reasoning for each decision. Output as structured JSON.

Required JSON format:
{
  "analysisType": "specific analysis type",
  "businessContext": "industry and business context",
  "objectives": ["objective 1", "objective 2", "objective 3"],
  "strategicApproach": "recommended approach with reasoning",
  "reasoning": "detailed explanation of analytical decisions",
  "confidence": 0.95
}
`;

    try {
      const response = await getChatCompletionAsGemini(analysisPrompt);
      const analysis = JSON.parse(response);
      
      // Select optimal frameworks based on analysis
      const recommendedFrameworks = selectOptimalFramework(
        analysis.analysisType,
        analysis.businessContext,
        analysis.objectives
      );

      const reasoning = `
Prompt Analysis Reasoning:
- Analysis Type: ${analysis.analysisType}
- Business Context: ${analysis.businessContext}
- Key Objectives: ${analysis.objectives.join(', ')}
- Strategic Approach: ${analysis.strategicApproach}
- Recommended Frameworks: ${recommendedFrameworks.map(f => f.name).join(', ')}

Rationale: ${analysis.reasoning}
`;

      // Add reasoning step
      await this.addReasoningStep(
        'analysis',
        userPrompt,
        reasoning,
        {
          analysisType: analysis.analysisType,
          businessContext: analysis.businessContext,
          objectives: analysis.objectives,
          recommendedFrameworks: recommendedFrameworks.map(f => f.id)
        },
        analysis.confidence,
        ['AI Analysis', 'Consulting Framework Database']
      );

      const duration = Date.now() - startTime;
      if (this.currentChain) {
        this.currentChain.steps[this.currentChain.steps.length - 1].duration = duration;
      }

      return {
        analysisType: analysis.analysisType,
        businessContext: analysis.businessContext,
        objectives: analysis.objectives,
        recommendedFrameworks,
        reasoning,
        confidence: analysis.confidence
      };

    } catch (error) {
      console.error('Error in prompt analysis:', error);
      throw new Error('Failed to analyze prompt: ' + error);
    }
  }

  // Generate strategic outline using Pyramid Principle
  async generateStrategicOutline(
    userPrompt: string,
    analysisType: string,
    businessContext: string,
    objectives: string[],
    frameworks: FrameworkTemplate[]
  ): Promise<StrategicOutline> {
    const startTime = Date.now();

    const outlinePrompt = `
You are a senior partner at McKinsey & Company. Create a strategic presentation outline using the Pyramid Principle.

User Request: "${userPrompt}"
Analysis Type: ${analysisType}
Business Context: ${businessContext}
Objectives: ${objectives.join(', ')}
Recommended Frameworks: ${frameworks.map(f => f.name).join(', ')}

CRITICAL REQUIREMENTS:
1. Follow Pyramid Principle: Start with main recommendation, then supporting arguments
2. Use MECE framework (Mutually Exclusive, Collectively Exhaustive)
3. Incorporate the recommended consulting frameworks appropriately
4. Provide detailed reasoning for each structural decision
5. Ensure executive-level quality and strategic depth

Create an outline with:
- Main Recommendation (single, clear statement)
- Executive Summary (3-4 key points)
- 4-6 main sections following logical flow
- Each section should specify which framework to use
- Subsections and key analysis points
- Visual suggestions for each section

For each section, explain:
- Why this section is necessary
- Why it's positioned here in the hierarchy  
- What framework/analysis method will be used
- What evidence/data will support it
- How it connects to the main recommendation

Output as structured JSON with detailed reasoning.

Required JSON format:
{
  "mainRecommendation": "Single, clear strategic recommendation",
  "executiveSummary": "3-4 sentence summary of key findings and recommendations",
  "sections": [
    {
      "title": "Section Title",
      "description": "What this section covers",
      "framework": "framework_id or null",
      "subsections": ["subsection 1", "subsection 2"],
      "keyPoints": ["key point 1", "key point 2"],
      "visualSuggestions": ["chart type 1", "diagram type 2"],
      "reasoning": "Why this section is positioned here and uses this approach"
    }
  ],
  "frameworks": ["framework_id_1", "framework_id_2"],
  "estimatedSlideCount": 15,
  "structuralReasoning": "Overall reasoning for the outline structure",
  "confidence": 0.92
}
`;

    try {
      const response = await getChatCompletionAsGemini(outlinePrompt);
      const outlineData = JSON.parse(response);

      // Create structured outline
      const outline: StrategicOutline = {
        id: `outline_${Date.now()}`,
        mainRecommendation: outlineData.mainRecommendation,
        executiveSummary: outlineData.executiveSummary,
        sections: outlineData.sections.map((section: any, index: number) => ({
          id: `section_${index}`,
          title: section.title,
          description: section.description,
          framework: section.framework,
          subsections: section.subsections || [],
          keyPoints: section.keyPoints || [],
          visualSuggestions: section.visualSuggestions || [],
          reasoning: section.reasoning
        })),
        frameworks: outlineData.frameworks || frameworks.map(f => f.id),
        reasoningChainId: this.currentChain?.id || '',
        confidence: outlineData.confidence,
        estimatedSlideCount: outlineData.estimatedSlideCount || 12
      };

      const reasoning = `
Strategic Outline Generation Reasoning:

Main Recommendation: ${outline.mainRecommendation}

Structural Logic (Pyramid Principle):
${outlineData.structuralReasoning}

Section-by-Section Reasoning:
${outline.sections.map((section, i) => 
  `${i + 1}. ${section.title}: ${section.reasoning}`
).join('\n')}

Framework Integration:
${frameworks.map(f => `- ${f.name}: ${f.useCase}`).join('\n')}

Estimated Impact: ${outline.estimatedSlideCount} slides delivering executive-grade strategic insights
`;

      // Add reasoning step
      await this.addReasoningStep(
        'structure_design',
        `Generate outline for: ${userPrompt}`,
        reasoning,
        outline,
        outlineData.confidence,
        ['Pyramid Principle', 'MECE Framework', 'Consulting Best Practices']
      );

      const duration = Date.now() - startTime;
      if (this.currentChain) {
        this.currentChain.steps[this.currentChain.steps.length - 1].duration = duration;
      }

      return outline;

    } catch (error) {
      console.error('Error generating strategic outline:', error);
      throw new Error('Failed to generate strategic outline: ' + error);
    }
  }

  // Generate slide content for a specific section
  async generateSlideContent(
    section: OutlineSection,
    overallContext: string,
    framework?: FrameworkTemplate
  ): Promise<SlideContent[]> {
    const startTime = Date.now();

    let contentPrompt = `
You are a senior consultant creating slide content for a strategic presentation.

Section: ${section.title}
Description: ${section.description}
Overall Context: ${overallContext}
Key Points to Cover: ${section.keyPoints.join(', ')}
`;

    if (framework) {
      contentPrompt += `
Framework: ${framework.name}
${generateFrameworkPrompt(framework, overallContext)}
`;
    }

    contentPrompt += `
Create detailed, analytical slide content that:
1. Provides specific, data-driven insights
2. Uses professional consulting language
3. Includes quantified metrics where possible
4. Follows the specified framework structure
5. Provides clear, actionable recommendations

For each slide, include:
- Title and main content
- Key insights and takeaways
- Supporting data points
- Visual recommendations
- Source reasoning (how you arrived at these insights)

Output as structured JSON array of slides.

Required JSON format:
{
  "slides": [
    {
      "title": "Slide Title",
      "content": "Detailed slide content with bullet points and analysis",
      "visualType": "chart|diagram|table|text",
      "visualData": "Description of recommended visual",
      "keyInsights": ["insight 1", "insight 2"],
      "sources": ["source 1", "source 2"],
      "reasoning": "How these insights were derived and why they're important",
      "confidence": 0.88
    }
  ]
}
`;

    try {
      const response = await getChatCompletionAsGemini(contentPrompt);
      const slideData = JSON.parse(response);

      const slides: SlideContent[] = slideData.slides.map((slide: any, index: number) => ({
        id: `slide_${section.id}_${index}`,
        sectionId: section.id,
        title: slide.title,
        content: slide.content,
        visualType: slide.visualType || 'text',
        visualData: slide.visualData,
        keyInsights: slide.keyInsights || [],
        sources: slide.sources || [],
        reasoning: slide.reasoning,
        confidence: slide.confidence || 0.85
      }));

      const reasoning = `
Slide Content Generation for "${section.title}":

Framework Applied: ${framework?.name || 'General Strategic Analysis'}
Content Approach: ${section.reasoning}

Generated ${slides.length} slides with:
${slides.map((slide, i) => 
  `- Slide ${i + 1}: ${slide.title} (${slide.visualType}, confidence: ${slide.confidence})`
).join('\n')}

Key Insights Generated:
${slides.flatMap(slide => slide.keyInsights).join('\n- ')}
`;

      // Add reasoning step
      await this.addReasoningStep(
        'content_generation',
        `Generate slides for section: ${section.title}`,
        reasoning,
        slides,
        slides.reduce((avg, slide) => avg + slide.confidence, 0) / slides.length,
        framework ? [framework.name, 'Strategic Analysis'] : ['Strategic Analysis']
      );

      const duration = Date.now() - startTime;
      if (this.currentChain) {
        this.currentChain.steps[this.currentChain.steps.length - 1].duration = duration;
      }

      return slides;

    } catch (error) {
      console.error('Error generating slide content:', error);
      throw new Error('Failed to generate slide content: ' + error);
    }
  }

  // Complete reasoning chain and calculate overall confidence
  completeReasoningChain(): ReasoningChain {
    if (!this.currentChain) {
      throw new Error('No active reasoning chain to complete');
    }

    // Calculate overall metrics
    this.currentChain.totalDuration = this.currentChain.steps.reduce(
      (total, step) => total + step.duration, 0
    );
    
    this.currentChain.overallConfidence = this.currentChain.steps.reduce(
      (avg, step) => avg + step.confidence, 0
    ) / this.currentChain.steps.length;

    this.currentChain.status = 'completed';
    this.currentChain.updatedAt = new Date();

    const completedChain = this.currentChain;
    this.currentChain = null;
    this.stepCounter = 0;

    return completedChain;
  }

  // Get reasoning explanation for any step
  getReasoningExplanation(stepId: string): string | null {
    if (!this.currentChain) return null;
    
    const step = this.currentChain.steps.find(s => s.id === stepId);
    return step?.reasoning || null;
  }

  // Get current reasoning chain
  getCurrentChain(): ReasoningChain | null {
    return this.currentChain;
  }

  // Validate generated content quality
  async validateContent(content: any, expectedType: string): Promise<{
    isValid: boolean;
    confidence: number;
    issues: string[];
    suggestions: string[];
  }> {
    // Implementation for content validation
    // This would include checks for:
    // - Logical consistency
    // - Data accuracy
    // - Framework compliance
    // - Executive-level quality
    
    return {
      isValid: true,
      confidence: 0.9,
      issues: [],
      suggestions: []
    };
  }
}

// Export singleton instance
export const reasoningEngine = new ReasoningEngine();

// Utility functions
export function formatReasoningForDisplay(step: ReasoningStep): string {
  return `
**${step.type.toUpperCase()} - Step ${step.step}**
*Confidence: ${(step.confidence * 100).toFixed(1)}% | Duration: ${step.duration}ms*

**Input:** ${step.input}

**Reasoning:** ${step.reasoning}

**Sources:** ${step.sources.join(', ')}
`;
}

export function exportReasoningChain(chain: ReasoningChain): string {
  const header = `
# Reasoning Chain Export
**Session:** ${chain.sessionId}
**User Prompt:** ${chain.userPrompt}
**Status:** ${chain.status}
**Overall Confidence:** ${(chain.overallConfidence * 100).toFixed(1)}%
**Total Duration:** ${chain.totalDuration}ms
**Created:** ${chain.createdAt.toISOString()}

---
`;

  const steps = chain.steps.map(step => formatReasoningForDisplay(step)).join('\n---\n');
  
  return header + steps;
}