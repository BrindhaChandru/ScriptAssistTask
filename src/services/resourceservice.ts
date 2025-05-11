
import { Resource, EnrichedData } from '../types/resource';
import { mockResources } from '../constants/mockdata';

export const fetchResources = async () => {
  return new Promise<typeof mockResources>((resolve) => {
    setTimeout(() => resolve(mockResources), 500); // Simulate delay
  });
};
export const fetchResourceById = async (id: string): Promise<Resource | null> => {
  const resource = mockResources.find((r) => r.id === id);
  return resource || null;
};

export const fetchResourceEnrichment = async (id: string): Promise<EnrichedData | null> => {
  return {
    owner: 'Brindha',
    createdAt: '2024-01-15',
    notes: 'This is some enriched info for the resource.',
  };
};

