

import { Resource, EnrichedResource } from '../types/resource';

// Mock data for resources
export const mockResources: Resource[] = [
  { id: '1', name: 'Resource 1', category: 'Category A', status: 'Active' },
  { id: '2', name: 'Resource 2', category: 'Category B', status: 'Inactive' },
  { id: '3', name: 'Resource 3', category: 'Category c', status: 'Active' },
  { id: '4', name: 'Resource 4', category: 'Category B', status: 'Inactive' },
  { id: '5', name: 'Resource 5', category: 'Category A', status: 'Active' },
  { id: '6', name: 'Resource 6', category: 'Category c', status: 'Inactive' },
  { id: '7', name: 'Resource 7', category: 'Category A', status: 'Active' },
  { id: '8', name: 'Resource 8', category: 'Category B', status: 'Active' },
  { id: '9', name: 'Resource 9', category: 'Category A', status: 'Active' },
  { id: '10', name: 'Resource 10', category: 'Category C', status: 'Inactive' },

];

// Mock enriched data for resources
export const mockEnrichedData: EnrichedResource[] = [
  { id: '1', description: 'Detailed description of Resource 1', lastModified: '2025-04-30', tags: ['tag1', 'tag2'] },
  { id: '2', description: 'Detailed description of Resource 2', lastModified: '2025-04-20', tags: ['tag3', 'tag4'] },
];

