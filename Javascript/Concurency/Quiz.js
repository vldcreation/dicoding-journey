class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const fetchingUserFromInternet = (isOffline) => {
  return new Promise( (resolve, reject) => {
      if (isOffline) {
        reject(new NetworkError('Gagal mengambil data dari internet'),null);
      }
      resolve({ name: 'John', age: 18 });
    });
  }
  
  const successHandler = (val) => {
    console.log(val.name);
  }

  const failedHandler = (error) => {
    console.log(error);
  }


  // const userPromise = getUserName().then(successHandler, failedHandler);
  const gettingUserName = async () => {
    try{
      const username = await fetchingUserFromInternet(false);
      console.log(username.name);
    } catch(rejectedReason){
      console.log(rejectedReason.message);
    }
  }
  gettingUserName();



  // // TODO: 2
  // const gettingUserName = () => {
  //   fetchingUserFromInternet((error, user) => {
  //     if (error) {
  //       console.log(error.message);
  //     }
  //     console.log(user.name);
  //   }, false);
  // };

  // gettingUserName();
