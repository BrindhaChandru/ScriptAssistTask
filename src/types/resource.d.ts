export interface Resource {
  id: string;
  name: string;
  category: string;
  status: 'Active' | 'Inactive';
}

export interface EnrichedResource {
  id: string;
  description: string;
  lastModified: string;
  tags: string[];
}
export interface EnrichedData {
  owner: string;
  createdAt: string;
  notes: string;

}
