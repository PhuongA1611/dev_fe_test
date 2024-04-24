import { MenuItem, getItem } from '@/interfaces'
import { Card, Menu } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'

export interface IDashBoardLayoutProps {
  children?: React.ReactNode
}

const items: MenuItem[] = [
  getItem(<NavLink to='/dashboard/subcription'>Subcription</NavLink>, '/dashboard/subcription'),
  getItem(<NavLink to='/dashboard/revenue'>Revenue</NavLink>, '/dashboard/revenue')
]

export default function DashBoardLayout({ children }: IDashBoardLayoutProps) {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <Card className='dashboard'>
      <Menu
        className='dashboard__nav'
        mode='horizontal'
        defaultSelectedKeys={[location.pathname]}
        items={items}
        style={{ flex: 1, minWidth: 0, width: 'fit-content' }}
      />
      {children}
    </Card>
  )
}
