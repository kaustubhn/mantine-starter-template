import { createFileRoute } from '@tanstack/react-router'
import BaseLayout from '../components/shared/base-layout'

export const Route = createFileRoute('/auth')({
    component: () => <BaseLayout />
})