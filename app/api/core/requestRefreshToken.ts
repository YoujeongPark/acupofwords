import axios from 'axios';
// import jwt_decode from 'jwt-decode';

const requestRefreshToken = () =>
  new Promise((resolve, reject) => {
    const token = localStorage.getItem('token');

    if (token) {
      // const { exp }: { exp: number } = jwt_decode(token);

      // if (exp * REFRESH_TIME > Date.now()) resolve(token);

      axios.post( `${process.env.REACT_APP_API_HOST}/auth/refreshToken`, {},{
          headers: { Authorization: token },
        }
      ).then((res: any) => {
          // TODO dev
          if (res.data === 'Success') resolve(res.data.jwt);
          else reject(null);
        });
    } else {
      reject(null);
    }
  });

export default requestRefreshToken;
