import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sky Navigation',
    description:
      'A comprehensive exploration of modern cloud architecture patterns and distributed systems. Built with scalability and performance in mind, focusing on seamless integration across platforms and delivering reliable experiences at scale.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    year: '2024',
  },
  {
    id: '2',
    title: 'Altitude Framework',
    description:
      'Lightweight framework for building responsive, accessible web applications with minimal configuration. Emphasizes clean code architecture and exceptional developer experience while maintaining high performance standards.',
    technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite'],
    year: '2024',
  },
  {
    id: '3',
    title: 'Horizon Dashboard',
    description:
      'Real-time analytics platform featuring beautiful data visualizations and intuitive interfaces. Provides actionable insights through smooth user interactions and thoughtfully designed information architecture.',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'GraphQL'],
    year: '2023',
  },
  {
    id: '4',
    title: 'Drift Protocol',
    description:
      'Open-source communication protocol enabling seamless data exchange between distributed systems. Focused on reliability, security, and ease of implementation across various platforms and programming languages.',
    technologies: ['Go', 'gRPC', 'Docker', 'Kubernetes'],
    year: '2023',
  },
];
