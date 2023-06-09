
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import requestRefreshToken from './requestRefreshToken';

interface InstanceResponse {
  (url: string, config?: AxiosRequestConfig<unknown> | undefined):
    | Promise<AxiosResponse<any, any>>
    | undefined;
}

interface Instance {
  get: InstanceResponse;
  post: InstanceResponse;
  put: InstanceResponse;
  patch: InstanceResponse;
  delete: InstanceResponse;
}

export const Axios = () => {
  let instance: Instance | null = null;
  let session: AxiosInstance | null = null;

  const init = (): Instance => {
    if (session === null) {
      session = axios.create(
        {
          baseURL : process.env.NODE_ENV === 'development'? '' : process.env.NEXT_PUBLIC_API_URL,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      session.defaults.timeout = 2500;
      session.defaults.withCredentials = true;
      //session.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      // session.interceptors.request.use(
      //   async (config: InternalAxiosRequestConfig<any>) => {
      //     // 권한 관련 설정
      //     // const { url }: { url: string } = config;
      //     // if (주소로 검사) return config;

      //     const token = localStorage.getItem('token');

      //     if (
      //       !token
      //       // 시간 검사
      //       // || (token && jwt_decode(token).exp * 1000 < Date.now())
      //     ) {
      //       localStorage.removeItem('token');
      //       // (window as Window).location = '/login';
      //       (window as Window).location = '/';
      //       return config;
      //     }

      //     let newToken = token;
      //     let isRefreshing = false;
      //     if (!isRefreshing) {
      //       isRefreshing = true;
      //       newToken = (await requestRefreshToken()) as string;
      //       localStorage.setItem('token', newToken);
      //       isRefreshing = false;
      //     }
      //     config.headers.common.Authorization = newToken;

      //     return config;
      //   },
      //   (error: any) => {
      //     //요청 에러가 발생했을 때 수행할 로직
      //     console.log(error); //디버깅
      //     return Promise.reject(error);
      //   }
      // );
    }
    return {
      get: (...params: Parameters<AxiosInstance['get']>) =>
        session?.get(...params)
          .catch(error => {
            console.log(error);
            throw error;
          }),
      post: (...params: Parameters<AxiosInstance['post']>) =>
        session?.post(...params)
          .catch(error => {
            console.log(error);
            throw error;
          }),
      put: (...params: Parameters<AxiosInstance['put']>) =>
        session?.put(...params)
          .catch(error => {
            console.log(error);
            throw error;
          }),
      patch: (...params: Parameters<AxiosInstance['patch']>) =>
        session?.patch(...params)
          .catch(error => {
            console.log(error);
            throw error;
          }),
      delete: (...params: Parameters<AxiosInstance['delete']>) =>
        session?.delete(...params)
          .catch(error => {
            console.log(error);
            throw error;
          }),
    };
  };

  return {
    getInstance: (): Instance => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
};
