import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
    component: () => <div>Hello /app/dashboard!</div>
})