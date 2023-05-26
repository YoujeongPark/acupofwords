import { Axios } from './core';

let PROXY : string;
if (typeof window !== "undefined") {
  PROXY = typeof window !== undefined && window.location.hostname === 'localhost' ? '' : '/proxy';
}
const customAxios = Axios().getInstance();

export const getQuestionData = () => {
  return customAxios.get(`${PROXY}/api/questions`)
}

export const postOuthGoogle = (query : object) => {
  return customAxios.post(`${PROXY}/api/members/oauth/google`, query)
}



