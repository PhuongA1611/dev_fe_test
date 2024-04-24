import { FilterPost } from '@/interfaces'
import { Button, Form, Input, Space } from 'antd'

export interface IPostFormProps {
  onFinish: (values: FilterPost) => void
}

export default function PostForm({ onFinish }: IPostFormProps) {
  return (
    <Form onFinish={onFinish}>
      <Space>
        <Form.Item<FilterPost> name='userId' rules={[{ message: 'Please input User Id!' }]}>
          <Input placeholder='Search by User Id' />
        </Form.Item>
        <Form.Item<FilterPost> name='title' rules={[{ message: 'Please input Title!' }]}>
          <Input placeholder='Search by Title' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  )
}
