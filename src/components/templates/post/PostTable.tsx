import { Post } from '@/interfaces'
import { Table, TableProps } from 'antd'

export interface IPostTableProps {
  columns: TableProps<Post>['columns']
  data: Post[]
  onChange: (current: number, pageSize: number) => void
  current: number
  pageSize: number
}

export default function PostTable({ columns, data, onChange, current, pageSize }: IPostTableProps) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size='middle'
      style={{ width: '100%' }}
      pagination={{
        onChange: onChange,
        defaultCurrent: current,
        pageSize: pageSize
      }}
    ></Table>
  )
}
