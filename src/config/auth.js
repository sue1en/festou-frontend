const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.token) {
    return data.token
  };
  return false
};

export const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.userDTO){
    return data.userDTO
  };
  return false
};

export const isAuthenticated = () => {
  // console.log(getToken() !== false);
  return getToken() !== false;
};

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
export const saveAuth = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data));