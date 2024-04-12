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
    PinInput,
} from '@mantine/core';
import classes from './auth.module.css';
import { Link } from '@tanstack/react-router';

function VerifyOtpPage(props) {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Enter Authentication Code!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Back to Login?{' '}
                <Anchor size="sm" component="button">
                    <Link to="/auth/login">
                        Login
                    </Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Title order={5}>Enter 6 Digit Code</Title>
                <br />

                <PinInput length={6} ></PinInput>

                <Button fullWidth mt="xl">
                    Proceed
                </Button>
            </Paper>
        </Container>
    );
}

export default VerifyOtpPage;