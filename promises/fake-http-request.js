const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, noms: "Christian Lisangola" },
          { id: 2, noms: "OC Zozor" },
        ],
        "/users/1": { id: 1, noms: "Christian Lisangola" },
        "/users/2": { id: 2, noms: "OC Zozor" },
      };
      // url : /users => pages["/users"]
      if (pages[url]) {
        resolve({
          status: 200,
          data: pages[url],
        });
      } else {
        reject({
          status: 404,
          message: "not found",
        });
      }
    }, 4000);
  });
};

request("/users/1")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
