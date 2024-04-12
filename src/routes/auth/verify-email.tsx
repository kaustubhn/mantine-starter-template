import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/verify-email')({
  component: () => <div>Hello /auth/verify-email!</div>
})