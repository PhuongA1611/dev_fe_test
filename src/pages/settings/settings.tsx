import { Button, Card, Col, ColorPicker, DatePicker, Form, FormProps, Input, Row, Space } from 'antd'
import { useState } from 'react'
import type { Dayjs } from 'dayjs'
import { FORMAT_DATE } from '@/constants'

type FieldType = {
  title?: string
  email?: string
  color?: string | null
  date?: string | Dayjs
}

export default function Settings() {
  const [form] = Form.useForm()
  const [color, setColor] = useState<string | null>(null)
  const [disableSubmit, setDisableSubmit] = useState(true)

  const onChange = () => {
    const hasValue = Object.keys(form.getFieldsValue()).some((key) => {
      const value = form.getFieldValue(key)
      return !!value
    })
    setDisableSubmit(!hasValue)
  }

  const onChangeColor = (color: string | null) => {
    setColor(color)
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (!disableSubmit) {
      if (values.date) {
        values.date = values.date.format(FORMAT_DATE)
      }
      console.log(values)
    }
  }

  return (
    <Card style={{ width: 'fit-content', paddingTop: 24, paddingBottom: 24 }}>
      <Form form={form} onFinish={onFinish} onChange={onChange}>
        <Row gutter={12} justify='space-between'>
          <Col className='gutter-row' span={10}>
            <Form.Item<FieldType> label='Title' name='title' rules={[{ message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={10}>
            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={10}>
            <Space>
              <Form.Item<FieldType>
                label='Color'
                name='color'
                initialValue={color}
                rules={[
                  {
                    pattern: /^#[0-9A-Fa-f]{6}$/,
                    message: 'Please fill in the correct color code!'
                  }
                ]}
              >
                <Input value={color || ''} onChange={(e) => onChangeColor(e.target.value)} />
              </Form.Item>

              <Form.Item name='color' getValueFromEvent={(e) => e.toHexString()} valuePropName='value'>
                <ColorPicker value={color} onChange={(color) => onChangeColor(color.toHexString())} />
              </Form.Item>
            </Space>
          </Col>
          <Col className='gutter-row' span={10}>
            <Form.Item label='date' name='date'>
              <DatePicker format={FORMAT_DATE} />
            </Form.Item>
          </Col>
        </Row>
        <Space></Space>

        <Row justify='center'>
          <Button disabled={disableSubmit} type='primary' htmlType='submit'>
            Save
          </Button>
        </Row>
      </Form>
    </Card>
  )
}
