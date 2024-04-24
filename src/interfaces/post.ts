export interface Post {
  id: number
  userId: number
  title: string
  body?: string
}

export interface FilterPost {
  userId?: number
  title?: string | null
}
