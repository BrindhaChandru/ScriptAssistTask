import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchResources } from '../services/resourceservice';
import { Resource } from '../types/resource';
import {
  Table,
  Container,
  Loader,
  Alert,
  Select,
  Title,
} from '@mantine/core';

function useQueryParams() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function ResourceList() {
  const navigate = useNavigate();
  const query = useQueryParams();
  const categoryFilter = query.get('category');

  const {
    data: resources = [],
    isLoading,
    error,
  } = useQuery<Resource[], Error>(['resources'], fetchResources);

  if (isLoading) {
    return (
      <Container size="sm" mt="xl">
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="sm" mt="xl">
        <Alert color="red" title="Error">
          {error.message || 'Failed to load resources.'}
        </Alert>
      </Container>
    );
  }

  const filtered: Resource[] = categoryFilter
    ? resources.filter((r) => r.category === categoryFilter)
    : resources;

  return (
    <Container size="md" mt="xl">
      <Title order={2} mb="md">
        Resource List
      </Title>

      <Select
        label="Filter by category"
        placeholder="Pick one"
        data={[...new Set(resources.map((r) => r.category))]}
        value={categoryFilter}
        onChange={(value) => {
          const newQuery = new URLSearchParams();
          if (value) newQuery.set('category', value);
          navigate(`/resources?${newQuery.toString()}`);
        }}
        mb="md"
      />

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((resource) => (
            <tr
              key={resource.id}
              onClick={() => navigate(`/resource/${resource.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <td>{resource.name}</td>
              <td>{resource.category}</td>
              <td>{resource.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
