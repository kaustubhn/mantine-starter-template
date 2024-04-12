import { createFileRoute } from '@tanstack/react-router'
import ForgotPasswordPage from '../../components/auth/forgot-password'

export const Route = createFileRoute('/auth/forgot-password')({
  component: () => <ForgotPasswordPage />
})