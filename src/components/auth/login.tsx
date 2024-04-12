import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from './auth.module.css';
import { Link } from '@tanstack/react-router';

export function LoginPage() {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor size="sm" component="button">
                    <Link to="/auth/register">
                        Create account
                    </Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor size="sm" component="button">
                        <Link to="/auth/forgot-password">
                            Forgot password?
                        </Link>
                    </Anchor>
                </Group>
                <Link to="/app/dashboard">
                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Link>
            </Paper>
        </Container>
    );
}