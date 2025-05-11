import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchResourceById } from '../services/resourceservice';
import { Resource } from '../types/resource';
import {
  Card,
  Badge,
  Group,
  Title,
  Text,
  Container,
  Loader,
  Alert,
  Button,
} from '@mantine/core';

export default function ResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: resource,
    isLoading,
    error,
  } = useQuery<Resource | null, Error>(['resource', id], () => fetchResourceById(id!), {
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Container size="sm" mt="xl">
        <Loader />
      </Container>
    );
  }

  if (error || !resource) {
    return (
      <Container size="sm" mt="xl">
        <Alert color="red" title="Error">
          {error?.message || 'Resource not found.'}
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
          Resource ID: <strong>{resource.id}</strong>
        </Text>

        <Text size="sm" mt="sm">
          Category: <strong>{resource.category}</strong>
        </Text>

        <Button
          mt="lg"
          onClick={() => navigate(`/resource/${id}/enriched`)}
        >
          View Enriched Details
        </Button>
      </Card>
    </Container>
  );
}
