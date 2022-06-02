function fakeAjax(url) {
  return new Promise(function (resolve, reject) {
    if (!url) {
      return setTimeout(reject, 1000);
    }
    return setTimeout(() => {
      resolve({ url, data: "user info" });
    }, 2000);
  });
}

//url is required, otherwise, promise rejected
fakeAjax("http://helloworld.com").then((response) =>
  console.log(response.data)
);
