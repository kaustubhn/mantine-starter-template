import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from '../../components/auth/register'

export const Route = createFileRoute('/auth/register')({
  component: () => <RegisterPage />
})