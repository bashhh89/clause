'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Sparkles, 
  Eye, 
  Save, 
  Copy, 
  ExternalLink, 
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  AlertCircle,
  Briefcase,
  User,
  Target,
  Award,
  BookOpen,
  Phone
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProposalConfig {
  id: string;
  name: string;
  jobTitle: string;
  companyName: string;
  createdAt: string;
  url: string;
  status: 'draft' | 'active' | 'archived';
  sidebarItems: {
    id: string;
    name: string;
    icon: string;
    enabled: boolean;
    href?: string;
    isExternal?: boolean;
  }[];
  projects: {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    href?: string;
    isExternal?: boolean;
  }[];
  customContent: {
    headline: string;
    valueProposition: string;
    benefits: string[];
    callToAction: string;
  };
}

const defaultSidebarItems = [
  { id: 'about-ahmad', name: 'About Ahmad', icon: 'Users', enabled: true },
  { id: 'overview', name: 'Proposal Overview', icon: 'Briefcase', enabled: true },
  { id: 'strategic-tools', name: 'Strategic Arsenal', icon: 'Target', enabled: true },
  { id: 'demo', name: 'Live Demo', icon: 'MessageSquare', enabled: true },
  { id: 'benefits', name: 'Strategic Benefits', icon: 'Award', enabled: true },
  { id: 'process', name: 'Implementation', icon: 'BookOpen', enabled: true },
  { id: 'contact', name: 'Next Steps', icon: 'Phone', enabled: true }
];

const defaultProjects = [
  { 
    id: 'clausen-advice-live', 
    name: 'Clausen Advice (Live)', 
    description: 'Strategic consulting platform with AI integration',
    enabled: true, 
    href: 'https://clausenadvice.com/', 
    isExternal: true 
  },
  { 
    id: 'clausen-advice-redesign', 
    name: 'Clausen Advice: Website Redesign', 
    description: 'Complete UX/UI overhaul with modern design principles',
    enabled: true, 
    href: '/clausen-redesign', 
    isExternal: false 
  },
  { 
    id: 'social-garden-scorecard', 
    name: 'Social Garden Scorecard', 
    description: 'AI-powered business assessment tool',
    enabled: true, 
    href: 'https://scorecard.socialgarden.com.au/landing', 
    isExternal: true 
  }
];

export default function ProposalAdmin() {
  const [proposals, setProposals] = useState<ProposalConfig[]>([]);
  const [currentProposal, setCurrentProposal] = useState<ProposalConfig | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const { toast } = useToast();

  // Load saved proposals from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('proposal-configs');
    if (saved) {
      setProposals(JSON.parse(saved));
    }
  }, []);

  // Save proposals to localStorage
  const saveProposals = (updatedProposals: ProposalConfig[]) => {
    setProposals(updatedProposals);
    localStorage.setItem('proposal-configs', JSON.stringify(updatedProposals));
  };

  // Generate AI content using GLM 4.5 Flash
  const generateAIContent = async (jobDesc: string, companyUrl: string) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/chat/glm-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are an expert proposal writer for Ahmad Basheer, a strategic AI architect with 10+ years of business strategy experience. Generate a customized proposal based on the job description and company information provided.

Return a JSON object with:
{
  "headline": "Custom headline for this specific job",
  "valueProposition": "2-3 sentence value prop tailored to their needs",
  "benefits": ["benefit 1", "benefit 2", "benefit 3", "benefit 4"],
  "callToAction": "Specific CTA for this opportunity",
  "suggestedProjects": ["project1", "project2", "project3"],
  "jobTitle": "extracted job title",
  "companyName": "extracted company name"
}`
            },
            {
              role: 'user',
              content: `Job Description: ${jobDesc}\n\nCompany URL: ${companyUrl}\n\nGenerate a tailored proposal for Ahmad Basheer.`
            }
          ],
          model: 'glm-4.5-flash'
        })
      });

      const data = await response.json();
      const content = JSON.parse(data.content);
      
      return content;
    } catch (error) {
      console.error('Error generating AI content:', error);
      toast({
        title: "Error",
        description: "Failed to generate AI content. Please try again.",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  // Create new proposal
  const createProposal = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide a job description.",
        variant: "destructive"
      });
      return;
    }

    const aiContent = await generateAIContent(jobDescription, companyUrl);
    if (!aiContent) return;

    const newProposal: ProposalConfig = {
      id: Date.now().toString(),
      name: `${aiContent.companyName} - ${aiContent.jobTitle}`,
      jobTitle: aiContent.jobTitle,
      companyName: aiContent.companyName,
      createdAt: new Date().toISOString(),
      url: `/proposal/${Date.now()}`,
      status: 'draft',
      sidebarItems: [...defaultSidebarItems],
      projects: [...defaultProjects],
      customContent: {
        headline: aiContent.headline,
        valueProposition: aiContent.valueProposition,
        benefits: aiContent.benefits,
        callToAction: aiContent.callToAction
      }
    };

    const updatedProposals = [...proposals, newProposal];
    saveProposals(updatedProposals);
    setCurrentProposal(newProposal);
    setJobDescription('');
    setCompanyUrl('');

    toast({
      title: "Proposal Created",
      description: `Generated proposal for ${aiContent.companyName}`,
    });
  };

  // Toggle sidebar item
  const toggleSidebarItem = (proposalId: string, itemId: string) => {
    const updatedProposals = proposals.map(proposal => {
      if (proposal.id === proposalId) {
        return {
          ...proposal,
          sidebarItems: proposal.sidebarItems.map(item =>
            item.id === itemId ? { ...item, enabled: !item.enabled } : item
          )
        };
      }
      return proposal;
    });
    saveProposals(updatedProposals);
    if (currentProposal?.id === proposalId) {
      setCurrentProposal(updatedProposals.find(p => p.id === proposalId) || null);
    }
  };

  // Toggle project
  const toggleProject = (proposalId: string, projectId: string) => {
    const updatedProposals = proposals.map(proposal => {
      if (proposal.id === proposalId) {
        return {
          ...proposal,
          projects: proposal.projects.map(project =>
            project.id === projectId ? { ...project, enabled: !project.enabled } : project
          )
        };
      }
      return proposal;
    });
    saveProposals(updatedProposals);
    if (currentProposal?.id === proposalId) {
      setCurrentProposal(updatedProposals.find(p => p.id === proposalId) || null);
    }
  };

  // Deploy proposal
  const deployProposal = async (proposal: ProposalConfig) => {
    try {
      // Save proposal config to API
      const response = await fetch('/api/proposal/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proposal)
      });

      if (response.ok) {
        const updatedProposals = proposals.map(p =>
          p.id === proposal.id ? { ...p, status: 'active' as const } : p
        );
        saveProposals(updatedProposals);

        toast({
          title: "Proposal Deployed",
          description: `Proposal is now live at ${proposal.url}`,
        });
      }
    } catch (error) {
      toast({
        title: "Deployment Failed",
        description: "Failed to deploy proposal. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Proposal Admin Dashboard</h1>
            <p className="text-zinc-400">AI-powered proposal generation for job applications</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-green-400 border-green-400">
              GLM 4.5 Flash Ready
            </Badge>
            <Settings className="h-6 w-6 text-zinc-400" />
          </div>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="bg-zinc-900 border border-zinc-800">
            <TabsTrigger value="create" className="data-[state=active]:bg-zinc-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </TabsTrigger>
            <TabsTrigger value="manage" className="data-[state=active]:bg-zinc-700">
              <Settings className="h-4 w-4 mr-2" />
              Manage Proposals
            </TabsTrigger>
          </TabsList>

          {/* Create New Proposal */}
          <TabsContent value="create">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    AI Proposal Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="job-description" className="text-white">Job Description</Label>
                    <Textarea
                      id="job-description"
                      placeholder="Paste the job description here..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white min-h-[200px]"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company-url" className="text-white">Company URL (Optional)</Label>
                    <Input
                      id="company-url"
                      placeholder="https://company.com"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>

                  <Button 
                    onClick={createProposal}
                    disabled={isGenerating || !jobDescription.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-500"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                        Generating with AI...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate Proposal
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Preview */}
              {currentProposal && (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Generated Proposal
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-bold text-white mb-2">{currentProposal.name}</h3>
                      <p className="text-sm text-zinc-400 mb-4">{currentProposal.customContent.valueProposition}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {currentProposal.customContent.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-zinc-300 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button 
                        onClick={() => deployProposal(currentProposal)}
                        className="bg-green-600 hover:bg-green-500"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Deploy Live
                      </Button>
                      <Button variant="outline" className="border-zinc-600">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Manage Proposals */}
          <TabsContent value="manage">
            <div className="space-y-6">
              {proposals.length === 0 ? (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="text-center py-12">
                    <AlertCircle className="h-12 w-12 text-zinc-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No Proposals Yet</h3>
                    <p className="text-zinc-400">Create your first AI-generated proposal to get started.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {proposals.map((proposal) => (
                    <Card key={proposal.id} className="bg-zinc-900 border-zinc-800">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-white text-lg">{proposal.name}</CardTitle>
                            <p className="text-sm text-zinc-400 mt-1">
                              Created {new Date(proposal.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge 
                            variant={proposal.status === 'active' ? 'default' : 'secondary'}
                            className={proposal.status === 'active' ? 'bg-green-600' : ''}
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Sidebar Items Toggle */}
                        <div>
                          <h4 className="font-semibold text-white mb-2">Sidebar Navigation</h4>
                          <div className="space-y-2">
                            {proposal.sidebarItems.map((item) => (
                              <div key={item.id} className="flex items-center justify-between">
                                <span className="text-sm text-zinc-300">{item.name}</span>
                                <Switch
                                  checked={item.enabled}
                                  onCheckedChange={() => toggleSidebarItem(proposal.id, item.id)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects Toggle */}
                        <div>
                          <h4 className="font-semibold text-white mb-2">Featured Projects</h4>
                          <div className="space-y-2">
                            {proposal.projects.map((project) => (
                              <div key={project.id} className="flex items-center justify-between">
                                <span className="text-sm text-zinc-300">{project.name}</span>
                                <Switch
                                  checked={project.enabled}
                                  onCheckedChange={() => toggleProject(proposal.id, project.id)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button 
                            size="sm" 
                            onClick={() => deployProposal(proposal)}
                            className="bg-blue-600 hover:bg-blue-500"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Deploy
                          </Button>
                          <Button size="sm" variant="outline" className="border-zinc-600">
                            <Copy className="h-4 w-4 mr-1" />
                            Clone
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}