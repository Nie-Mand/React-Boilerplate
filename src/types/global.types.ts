export type Route = {
    path: string
    component: React.LazyExoticComponent<React.ComponentType<any>>
    roles: string[]
}

export type Action = {
    type: string
    payload: any
}