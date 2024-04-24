import { getPostFilter, getPostList } from '@/pages/posts/post.slice'
import { useAppDispatch } from './hooks'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export const useTableData = () => {
  const [searchParams] = useSearchParams()
  const userId = Number(searchParams.get('userId'))
  const title = searchParams.get('title')
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (userId || title) {
      dispatch(getPostFilter({ userId: userId, title: title }))
    } else dispatch(getPostList())
  }, [userId, title])
}
