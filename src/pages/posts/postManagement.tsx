import { useEffect, useState } from 'react'
import { useAppSelector, useTableData } from '@/hooks'
import { Card, FormProps, Modal, PaginationProps, Space, TableProps } from 'antd'
import { FilterPost, Post } from '@/interfaces'
import { useSearchParams } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import { PostForm, PostTable } from '@/components/templates/post'

const onClickView = (post: Post) => {
  Modal.success({
    content: (
      <div>
        <Space>
          <span>ID: {post.id}</span> - <span>User ID: {post.userId}</span>
        </Space>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  })
}

const columns: TableProps<Post>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: 'User ID',
    dataIndex: 'userId',
    align: 'center'
  },
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Action',
    align: 'center',
    render: (_: Post, record: Post) => (
      <Space size='middle'>
        <a onClick={() => onClickView(record)}>
          <EyeOutlined />
        </a>
      </Space>
    )
  }
]

export default function PostManagement() {
  const postList = useAppSelector((state) => state.post.posts)
  useTableData()
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10

  const [current, setCurrent] = useState(page)
  const [pageSize, setPageSize] = useState(limit)
  const [params, setParams] = useState({})

  useEffect(() => {
    setCurrent(page)
    setPageSize(limit)
    setSearchParams(params)
  }, [page, limit, params])

  const onChange: PaginationProps['onChange'] = (current, pageSize) => {
    setParams({
      ...params,
      limit: `${pageSize}`,
      page: `${current}`
    })
  }

  const onFinish: FormProps<FilterPost>['onFinish'] = (values) => {
    setParams({
      ...params,
      userId: `${values.userId}`,
      title: values.title || ''
    })
  }

  return (
    <Card>
      <PostForm onFinish={onFinish} />
      <PostTable columns={columns} data={postList} onChange={onChange} current={current} pageSize={pageSize} />
    </Card>
  )
}
