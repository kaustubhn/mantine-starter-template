import { AppShell, Burger, Group, MantineProvider, Skeleton, ScrollArea, Avatar, UnstyledButton, rem, Text } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { IconDashboard, IconSettings } from '@tabler/icons-react';
import { Link, Outlet } from '@tanstack/react-router';
import classes from "./app-layout.module.css";
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const data = [
    { link: '/app/dashboard', label: 'Dashboard', icon: IconDashboard },
    { link: '/app/settings', label: 'Settings', icon: IconSettings },
];

const queryClient = new QueryClient();

export default function AppBaseLayout() {
    const [opened, { toggle }] = useDisclosure();
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={(event) => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));
    return (
        <>
            <MantineProvider>
                <NavigationProgress />
                <Notifications />
                <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
                    <ModalsProvider>
                        <QueryClientProvider client={queryClient}>
                            <AppShell
                                header={{ height: { base: 50 } }}
                                navbar={{
                                    width: { base: 200, md: 250, lg: 250 },
                                    breakpoint: 'sm',
                                    collapsed: { mobile: !opened },
                                }}
                                padding="md"
                            >
                                <AppShell.Header>
                                    <Group h="100%" px="md">
                                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                                        Mantine React Template
                                    </Group>
                                </AppShell.Header>
                                <AppShell.Navbar p="md">
                                    <AppShell.Section>Navbar header</AppShell.Section>
                                    <AppShell.Section grow my="md" component={ScrollArea}>
                                        {links}
                                    </AppShell.Section>
                                    <AppShell.Section>
                                        <UnstyledButton className={classes.user}>
                                            <Group>
                                                <Avatar
                                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                                                    radius="xl"
                                                />

                                                <div style={{ flex: 1 }}>
                                                    <Text size="sm" fw={500}>
                                                        John Doe
                                                    </Text>

                                                    <Text c="dimmed" size="xs">
                                                        john.doe@example.com
                                                    </Text>
                                                </div>
                                            </Group>
                                        </UnstyledButton>
                                    </AppShell.Section>
                                </AppShell.Navbar>
                                <AppShell.Main>
                                    <Outlet />
                                </AppShell.Main>
                            </AppShell>
                            <ReactQueryDevtools initialIsOpen={false} />
                        </QueryClientProvider>
                    </ModalsProvider>
                </DatesProvider>
            </MantineProvider>
        </>
    );
}