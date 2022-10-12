import axios from 'axios';

const _baseUrl = 'https://fullstack.exercise.applifting.cz';
const _apiKey = process.env.REACT_APP_API_KEY;

const getToken = () => {
  const tokenData = localStorage.getItem('access_token');

  if (tokenData) {
    return JSON.parse(tokenData);
  } else {
    return false;
  }
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: getToken(),
  'X-API-KEY': `${_apiKey}`,
};

const getAllArticles = async () => {
  try {
    const response = await axios.get(`${_baseUrl}/articles`, { headers });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getArticle = async (idArticle: string) => {
  try {
    const response = await axios.get(`${_baseUrl}/articles/${idArticle}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteArticle = async (idArticle: string) => {
  try {
    const response = await axios.delete(`${_baseUrl}/articles/${idArticle}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const postArticle = async (
  title: string | number,
  content: string | number
) => {
  const article = {
    title: `${title}`,
    content: `${content}`,
  };
  try {
    const response = await axios.post(`${_baseUrl}/articles`, article, {
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getLogin = async (name: string | number, password: string | number) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-API-KEY': `${_apiKey}`,
  };

  const article = {
    username: `${name}`,
    password: `${password}`,
  };

  try {
    const response = await axios.post(`${_baseUrl}/login`, article, {
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const postComment = async (content: string, articleId: string) => {
  const comentsInfo = {
    author: 'Mykola',
    content: `${content}`,
    articleId: `${articleId}`,
  };
  try {
    const response = await axios.post(
      'https://fullstack.exercise.applifting.cz/comments',
      comentsInfo,
      { headers }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllArticles,
  getArticle,
  deleteArticle,
  getLogin,
  postArticle,
  getToken,
  postComment,
};


// I don't see why this doesn't work. I have everything in order in the postman.

// const commentVoteUp = (commentId) => {
//     return axios.post('https://fullstack.exercise.applifting.cz/comments/6eb14a69-004d-43fc-a28a-08118d3d5c9d/vote/up', {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
//         }
//     })
// }

// const commentVoteDown = (commentId) => {
//     return axios.post(`https://fullstack.exercise.applifting.cz/comments/${commentId}/vote/down`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
//         }
//     })
// }
