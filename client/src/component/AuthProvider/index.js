

export default {
  login: ({login, password}) => {
    // localStorage.setItem('username', username);
    fetch('http://localhost:5000/auth', {
      method: "POST",
      body: JSON.stringify({
        login, password
      })
    })
    // accept all username/password combinations
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },

  checkError: ({status}) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return Promise.reject()
    }
    return Promise.resolve()
  },

  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
}

