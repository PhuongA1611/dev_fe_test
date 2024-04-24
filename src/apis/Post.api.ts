import httpClient from './HttpClient'

export const postApi = {
  getList(): Promise<any> {
    const url = `/posts`
    return httpClient.get(url)
  }
}
