1;
const promise = new Promise(function (resolve, reject) {
  const string1 = "geeksforgeeks";
  const string2 = "geeksforgeeks";
  if (string1 === string2) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });

2;//chain
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

3;//promise.all

function fetchDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 2000);
  });
}

function fetchDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 2");
    }, 1500); 
  });
}

//Promise.allSettled([fetchDataFromAPI1(), fetchDataFromAPI2()])
//Promise.race([fetchDataFromAPI1(), fetchDataFromAPI2()])
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()])
  .then((results) => {
    console.log("All data fetched successfully");
    console.log("Data from API 1:", results[0]);
    console.log("Data from API 2:", results[1]);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
