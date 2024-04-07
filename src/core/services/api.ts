import axios, { type AxiosInstance } from 'axios'

let client: HttpClient

class HttpClient {
  axiosInstance: AxiosInstance
  axiosInitOptions: any = {
    baseURL: 'http://localhost:65230',
    headers: {
      Accept: 'application/json'
    }
  }

  constructor() {
    this.axiosInstance = axios.create(this.axiosInitOptions)
  }

  async get(url: string): Promise<any> {
    return await this.axiosInstance.get(url)
  }

  async post<T, U>(url: string, data: T): Promise<U> {
    return await this.axiosInstance.post(url, data)
  }
}

export const initApi = async(): Promise<void> => {
  client = new HttpClient()
}

export const Api = {
  get: async(url: string): Promise<any> => {
    return await client.get(url)
  },
  post: async <T, U>(url: string, data: T): Promise<U> => {
    return await client.post<T, U>(url, data)
  }
}
