import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../../components/auth/login'

export const Route = createFileRoute('/auth/login')({
    component: () => <LoginPage />
})