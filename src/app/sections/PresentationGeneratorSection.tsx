'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Brain, Sparkles, FileText, Download, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { reasoningEngine, ReasoningChain, StrategicOutline, PresentationGeneration } from '@/lib/presentation/reasoning-engine';
import { CONSULTING_FRAMEWORKS } from '@/lib/presentation/consulting-frameworks';

export default function PresentationGeneratorSection() {
  const [userPrompt, setUserPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentGeneration, setCurrentGeneration] = useState<PresentationGeneration | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [reasoningChain, setReasoningChain] = useState<ReasoningChain | null>(null);
  const [outline, setOutline] = useState<StrategicOutline | null>(null);
  const [showReasoning, setShowReasoning] = useState(false);

  const handleGenerate = async () => {
    if (!userPrompt.trim()) return;

    setIsGenerating(true);
    setProgress(0);
    setCurrentStep('Analyzing your request...');

    try {
      // Start reasoning chain
      const sessionId = `session_${Date.now()}`;
      const chain = reasoningEngine.startReasoningChain(sessionId, userPrompt);
      setReasoningChain(chain);

      // Step 1: Analyze prompt (20% progress)
      setProgress(20);
      setCurrentStep('Understanding strategic context...');
      const analysis = await reasoningEngine.analyzePrompt(userPrompt);
      
      // Step 2: Generate outline (60% progress)
      setProgress(60);
      setCurrentStep('Creating strategic outline...');
      const strategicOutline = await reasoningEngine.generateStrategicOutline(
        userPrompt,
        analysis.analysisType,
        analysis.businessContext,
        analysis.objectives,
        analysis.recommendedFrameworks
      );
      setOutline(strategicOutline);

      // Step 3: Complete (100% progress)
      setProgress(100);
      setCurrentStep('Strategic outline complete!');
      
      const completedChain = reasoningEngine.completeReasoningChain();
      setReasoningChain(completedChain);

      // Create presentation generation object
      const generation: PresentationGeneration = {
        id: `gen_${Date.now()}`,
        userPrompt,
        outline: strategicOutline,
        slides: [],
        reasoningChains: [completedChain],
        status: 'outline_generation',
        progress: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setCurrentGeneration(generation);

    } catch (error) {
      console.error('Error generating presentation:', error);
      setCurrentStep('Error occurred during generation');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderReasoningStep = (step: any, index: number) => (
    <div key={step.id} className="border-l-2 border-blue-500 pl-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <Brain className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-white">Step {index + 1}: {step.type.replace('_', ' ').toUpperCase()}</span>
        <Badge variant="outline" className="text-xs">
          {(step.confidence * 100).toFixed(1)}% confidence
        </Badge>
      </div>
      <p className="text-sm text-gray-300 mb-2">{step.input}</p>
      <div className="bg-[#1a1a1a] p-3 rounded-lg">
        <p className="text-sm text-gray-200 whitespace-pre-wrap">{step.reasoning}</p>
      </div>
      {step.sources.length > 0 && (
        <div className="mt-2">
          <span className="text-xs text-gray-400">Sources: {step.sources.join(', ')}</span>
        </div>
      )}
    </div>
  );

  const renderOutlineSection = (section: any, index: number) => (
    <Card key={section.id} className="bg-[#111111] border-[#333333] mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-lg">{section.title}</CardTitle>
          {section.framework && (
            <Badge variant="secondary" className="bg-blue-900 text-blue-200">
              {CONSULTING_FRAMEWORKS.find(f => f.id === section.framework)?.name || section.framework}
            </Badge>
          )}
        </div>
        <CardDescription className="text-gray-400">{section.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {section.keyPoints.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-medium text-white mb-2">Key Points:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {section.keyPoints.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        {section.visualSuggestions.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Visual Suggestions:</h4>
            <div className="flex flex-wrap gap-2">
              {section.visualSuggestions.map((visual: string, i: number) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {visual}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Keystone Presentation Engine</h1>
              <p className="text-gray-400">AI-powered strategic presentations with transparent reasoning</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-blue-400" />
              <span>Gemini Flash Reasoning</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>Elite Consulting Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-green-400" />
              <span>Transparent AI Decisions</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <Card className="bg-[#111111] border-[#333333] mb-6">
              <CardHeader>
                <CardTitle className="text-white">Strategic Presentation Request</CardTitle>
                <CardDescription className="text-gray-400">
                  Describe your strategic presentation needs. Be specific about the business context, objectives, and audience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="Example: Generate a market entry strategy presentation for Rivian entering the Australian electric vehicle market. Focus on competitive analysis, regulatory environment, and go-to-market recommendations for the executive team."
                  className="min-h-[120px] bg-[#0a0a0a] border-[#333333] text-white resize-none"
                  disabled={isGenerating}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-400">
                    {userPrompt.length}/500 characters
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !userPrompt.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <Brain className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate Strategic Outline
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progress Section */}
            {isGenerating && (
              <Card className="bg-[#111111] border-[#333333] mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Generation Progress</span>
                      <span className="text-gray-400">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-gray-400">{currentStep}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Outline Results */}
            {outline && (
              <div className="space-y-6">
                <Card className="bg-[#111111] border-[#333333]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Strategic Outline</CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowReasoning(!showReasoning)}
                          className="border-[#333333] text-white hover:bg-[#222222]"
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          {showReasoning ? 'Hide' : 'Show'} Reasoning
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#333333] text-white hover:bg-[#222222]"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Main Recommendation</h3>
                        <p className="text-gray-200 bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-blue-500">
                          {outline.mainRecommendation}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Executive Summary</h3>
                        <p className="text-gray-300">{outline.executiveSummary}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Presentation Structure</h3>
                        {outline.sections.map(renderOutlineSection)}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Estimated slides: {outline.estimatedSlideCount}</span>
                          <span>Confidence: {(outline.confidence * 100).toFixed(1)}%</span>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Slides
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Reasoning Panel */}
          <div className="lg:col-span-1">
            {reasoningChain && showReasoning && (
              <Card className="bg-[#111111] border-[#333333] sticky top-6">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-400" />
                    AI Reasoning Chain
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Transparent decision-making process
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[600px] overflow-y-auto">
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400 mb-4">
                      <div>Status: <span className="text-green-400">{reasoningChain.status}</span></div>
                      <div>Overall Confidence: <span className="text-blue-400">{(reasoningChain.overallConfidence * 100).toFixed(1)}%</span></div>
                      <div>Duration: <span className="text-purple-400">{reasoningChain.totalDuration}ms</span></div>
                    </div>
                    
                    {reasoningChain.steps.map(renderReasoningStep)}
                  </div>
                </CardContent>
              </Card>
            )}

            {!reasoningChain && (
              <Card className="bg-[#111111] border-[#333333]">
                <CardContent className="pt-6">
                  <div className="text-center text-gray-400">
                    <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>AI reasoning will appear here during generation</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}