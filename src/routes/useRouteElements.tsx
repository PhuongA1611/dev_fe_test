import { MainLayout, DashBoardLayout, NotFound } from '@/components/layouts'
import { PostManagement, Revenue, Settings, Subscription } from '@/pages'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Navigate to='/dashboard' />
    },
    {
      path: '/dashboard',
      element: (
        <MainLayout pageTitle='Dashboard'>
          <DashBoardLayout>
            <Outlet />
          </DashBoardLayout>
        </MainLayout>
      ),
      children: [
        {
          path: 'subcription',
          element: <Subscription />
        },
        {
          path: 'revenue',
          element: <Revenue />
        }
      ]
    },
    {
      path: '/posts',
      element: (
        <MainLayout pageTitle='Post Management'>
          <PostManagement />
        </MainLayout>
      )
    },
    {
      path: '/settings',
      element: (
        <MainLayout pageTitle='Settings'>
          <Settings />
        </MainLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routeElements
}
