import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchResourceById, fetchResourceEnrichment } from '../services/resourceservice';
import { Resource, EnrichedData } from '../types/resource';
import {
  Card,
  Badge,
  Group,
  Title,
  Text,
  Container,
  Loader,
  Alert,
  List,
  Button,
} from '@mantine/core';


export default function EnrichedResourceDetail() {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const { data: resource, isLoading: isLoadingResource, error: errorResource } = useQuery<Resource | null, Error>(
    ['resource', id],
    () => fetchResourceById(id!),
    { enabled: !!id }
  );
   const navigate = useNavigate();
  const { data: enrichment, isLoading: isLoadingEnrichment, error: errorEnrichment } = useQuery<EnrichedData | null, Error>(
    ['enrichment', id],
    () => fetchResourceEnrichment(id!),
    { enabled: !!id }
  );

  if (isLoadingResource || isLoadingEnrichment) {
    return (
      <Container size="sm" mt="xl">
        <Loader />
      </Container>
    );
  }

  if (errorResource || errorEnrichment) {
    return (
      <Container size="sm" mt="xl">
        <Alert color="red" title="Error">
          {errorResource?.message || errorEnrichment?.message || 'Failed to load data.'}
        </Alert>
      </Container>
    );
  }

  if (!resource || !enrichment) {
    return (
      <Container size="sm" mt="xl">
        <Alert color="yellow" title="Missing Data">
          Could not load resource or enrichment data.
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="sm" mt="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group position="apart" mb="xs">
          <Title order={2}>{resource.name}</Title>
          <Badge color={resource.status === 'Active' ? 'green' : 'gray'} variant="filled">
            {resource.status}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          ID: <strong>{resource.id}</strong>
        </Text>
        <Text size="sm" mt="sm">
          Category: <strong>{resource.category}</strong>
        </Text>


        <Title order={4} mt="lg">
          Enriched Info
        </Title>
        <List withPadding>
          <List.Item>Owner: {enrichment.owner}</List.Item>
          <List.Item>Created At: {enrichment.createdAt}</List.Item>
          <List.Item>Notes: {enrichment.notes}</List.Item>
        </List>
      </Card>
      <Button color="blue"  mt="md" onClick={() => navigate('/private')}>
                       Go to Logout Page
</Button>
    </Container>
  );
}
