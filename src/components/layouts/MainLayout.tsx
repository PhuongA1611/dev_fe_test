import { Layout } from 'antd'
import { Header, Sidebar } from '../common'
import { Content } from 'antd/es/layout/layout'
import { MenuItem, getItem } from '@/interfaces'
import { NavLink } from 'react-router-dom'

export interface IMainLayoutProps {
  pageTitle: string
  children?: React.ReactNode
}

const navItems: MenuItem[] = [
  getItem(<NavLink to='/dashboard'>Dashboard</NavLink>, '/dashboard'),
  getItem(<NavLink to='/posts'>Posts Management</NavLink>, '/posts'),
  getItem(<NavLink to='/settings'>Settings</NavLink>, '/settings')
]

export default function MainLayout({ pageTitle, children }: IMainLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Sidebar navItems={navItems} />
      <Content
        style={{
          width: '100%',
          margin: '16px 48px'
        }}
      >
        <Header pageTitle={pageTitle} />
        <Content>{children}</Content>
      </Content>
    </Layout>
  )
}
