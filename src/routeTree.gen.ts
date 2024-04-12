/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/auth'
import { Route as AuthVerifyOtpImport } from './routes/auth/verify-otp'
import { Route as AuthVerifyEmailImport } from './routes/auth/verify-email'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgotPasswordImport } from './routes/auth/forgot-password'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthVerifyOtpRoute = AuthVerifyOtpImport.update({
  path: '/verify-otp',
  getParentRoute: () => AuthRoute,
} as any)

const AuthVerifyEmailRoute = AuthVerifyEmailImport.update({
  path: '/verify-email',
  getParentRoute: () => AuthRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/register',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  path: '/forgot-password',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/auth/forgot-password': {
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof AuthImport
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/auth/register': {
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthImport
    }
    '/auth/verify-email': {
      preLoaderRoute: typeof AuthVerifyEmailImport
      parentRoute: typeof AuthImport
    }
    '/auth/verify-otp': {
      preLoaderRoute: typeof AuthVerifyOtpImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthRoute.addChildren([
    AuthForgotPasswordRoute,
    AuthLoginRoute,
    AuthRegisterRoute,
    AuthVerifyEmailRoute,
    AuthVerifyOtpRoute,
  ]),
])

/* prettier-ignore-end */
