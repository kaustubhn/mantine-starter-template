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

function RegisterPage(props) {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Create Your Account!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Already have an account?{' '}
                <Anchor size="sm" component="button">
                    <Link to="/auth/login">
                        Login
                    </Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Agree to Terms & Conditions" required />
                </Group>
                <Button fullWidth mt="xl">
                    Sign Up
                </Button>
            </Paper>
        </Container>
    );
}

export default RegisterPage;