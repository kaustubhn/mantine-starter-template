import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/verify-otp')({
  component: () => <div>Hello /auth/verify-otp!</div>
})