import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/nprogress/styles.css';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { ModalsProvider } from '@mantine/modals';
import { Outlet } from '@tanstack/react-router';

function BaseLayout() {

    return (
        <>
            <MantineProvider>
                <NavigationProgress />
                <Notifications />
                <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
                    <ModalsProvider>
                        <Outlet />
                    </ModalsProvider>
                </DatesProvider>
            </MantineProvider>
        </>
    )
}

export default BaseLayout
