import { createFileRoute } from '@tanstack/react-router'
import VerifyOtpPage from '../../components/auth/verify-otp'

export const Route = createFileRoute('/auth/verify-otp')({
  component: () => <VerifyOtpPage />
})