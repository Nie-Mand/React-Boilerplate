export type Route = {
    path: string
    component: React.LazyExoticComponent<React.ComponentType<any>>
    roles: string[]
}