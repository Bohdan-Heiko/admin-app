

export default {
  login: ({username, password}) => {
    localStorage.setItem('username', username);
    
    fetch('http://localhost:5000/auth', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: username, password: password 
        
      })
    })
    // accept all username/password combinations
    return Promise.reject();
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

  checkAuth: async () => {
    // const url = 'http://localhost:5000/auth'
    // const res = await fetch(url)
    // const data = await res.json()

    
    return Promise.resolve()
    // return localStorage.getItem('username')
    //   ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => Promise.reject(),
}

// const authProvider = {
//   // authentication
//    login: ({username, password}) => {
//     localStorage.setItem('username', username, 'password', password);
    
//     fetch('http://localhost:5000/auth', {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         login: username, password: password 
        
//       })
//     })
//     // accept all username/password combinations
//     return Promise.reject();
//   },
//   checkError: error => Promise.resolve(),
//   checkAuth: params => Promise.resolve(),
//   logout: () => Promise.resolve(),
//   getIdentity: () => Promise.resolve(),
//   // authorization
//   getPermissions: params => Promise.resolve(),
// };

// export default authProvider;