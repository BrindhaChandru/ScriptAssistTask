import { Button, Container, Title, Center, Stack, Box } from "@mantine/core";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

export default function PrivatePage() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate('/login');

    };

    return(
        <Container>
            <Box bg="gray">
            <Center style={{ height: '100vh' }}>
      <Stack align="center" spacing="md">
            <Title>Thank you...</Title>
            <Button onClick={handleLogout} mt= "md" radius={20}>LogOut </Button>
             </Stack>
             </Center>
             </Box>
        </Container>
    )

}