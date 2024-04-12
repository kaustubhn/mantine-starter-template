import {
    TextInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Box,
    Center,
    rem,
} from '@mantine/core';
import classes from './auth.module.css';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';


function ForgotPasswordPage(props) {
    return (
        <Container size={460} my={30}>
            <Title className={classes.title} ta="center">
                Forgot your password?
            </Title>
            <Text c="dimmed" fz="sm" ta="center">
                Enter your email to get a reset link
            </Text>

            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput label="Your email" placeholder="me@mantine.dev" required />
                <Group justify="space-between" mt="lg" className={classes.controls}>
                    <Anchor c="dimmed" size="sm" className={classes.control}>
                        <Link to="/auth/login">
                            <Center inline>
                                <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                                <Box ml={5}>Back to the login page</Box>
                            </Center>
                        </Link>
                    </Anchor>
                    <Button className={classes.control}>Reset password</Button>
                </Group>
            </Paper>
        </Container>
    );
}

export default ForgotPasswordPage;