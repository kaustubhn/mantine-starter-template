import { createFileRoute } from '@tanstack/react-router'
import AppBaseLayout from '../components/shared/app-layout'

export const Route = createFileRoute('/app')({
  component: () => <AppBaseLayout />
})