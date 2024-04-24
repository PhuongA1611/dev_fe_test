/* eslint-disable @typescript-eslint/no-unused-vars */
import { postApi } from '@/apis'
import { FilterPost, Post } from '@/interfaces'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface PostState {
  posts: Post[]
}

const initialState: PostState = {
  posts: []
}

export const getPostList = createAsyncThunk('post/getPostList', async () => await postApi.getList())

export const getPostFilter = createAsyncThunk(
  'post/getPostFilter',
  async (params: FilterPost) => await postApi.getList()
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.posts = action.payload
    })
    builder.addCase(getPostList.rejected, () => {})
    builder.addCase(getPostFilter.fulfilled, (state, action) => {
      console.log(action.meta.arg)
      const userId = action.meta.arg?.userId || null
      const title = action.meta.arg?.title || ''

      let postFilterList = action.payload.filter((post: Post) => post.title.includes(title))
      if (userId) {
        postFilterList = postFilterList.filter((post: Post) => post.userId === userId)
      }
      state.posts = postFilterList
    })
    builder.addCase(getPostFilter.rejected, () => {})
  }
})

const { reducer: postReducer } = postSlice
export default postReducer
