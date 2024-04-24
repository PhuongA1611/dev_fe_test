import { MenuItem } from '@/interfaces'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useLocation } from 'react-router-dom'

export interface ISidebarProps {
  navItems: MenuItem[]
}

export default function Sidebar({ navItems }: ISidebarProps) {
  const location = useLocation()

  return (
    <Sider>
      <Menu
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
        style={{ height: '100%', paddingTop: 48 }}
        items={navItems}
      />
    </Sider>
  )
}
