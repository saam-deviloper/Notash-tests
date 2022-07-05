const data = { email: "joe@example.com", password: "Password1" };
const list = { limit: 100, offset: 0 };
const create = {
  "email": "joe@example.com",
  "id": "user-1",
  "password": "Password1",
  "username": "joe",
};

const api = async () => {
  await fetch("https://api.m3o.com/v1/user/Create", {
    method: "POST",
    // mode: "cors",
    // cache: "no-cache",
    Headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YjNmNmRlNGEtZWM4Mi00ZjU3LTlhYTEtNzk0MzJlMzM1ZTZj",
      // 'accept': 'application/json',
      //   "responseType": 'stream'
    },
    body: create,
  })
    .then((rsp) => rsp.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((err) => console.log("Failure", err.message));
  //   console.log(resp);
};
export default api;
