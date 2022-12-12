import Loadable from 'components/Loadable/Loadable'
import StoreMenu from 'main/StoreMenu'
import StoreList from 'main/StoreList'
import { lazy } from 'react'
import Orders from 'main/Orders'

const Home = Loadable(lazy(() => import('./Home')))

const routes = [
    {
        path: '/home',
        element: < Home />,
    },
    {
        path: '/stores',
        exact: true,
        element: <StoreList />,
    },
    {
        path: '/stores/:name/:id',
        exact: true,
        element: <StoreMenu />,
    },
    {
        path: '/orders',
        exact: true,
        element: <Orders />,
    }
]

export default routes
