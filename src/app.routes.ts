import { lazy } from 'react'
import type { Route } from './types/global.types'

const routes: Route[] = [
    {
        path: '/',
        component: lazy(() => import('./pages/home')),
        roles: []
    },
    {
        path: '/lost',
        component: lazy(() => import('./pages/lost')),
        roles: []
    }
]

export default routes