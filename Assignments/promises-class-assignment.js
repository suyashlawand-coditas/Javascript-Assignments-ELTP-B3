const dummyPromise = (isSuccessful) =>
  new Promise((resolve, reject) => {
    const data = [
      {
        firstName: "Suyash",
        lastName: "Lawand",
        email: "suyash.lawand@gmail.com",
      },
      {
        firstName: "James",
        lastName: "Bond",
        email: "james.bond@gmail.com",
      },
    ];

    if (isSuccessful) {
      return resolve({
        statusCode: 200,
        success: isSuccessful,
        data,
      });
    } else {
      return reject({
        statusCode: 500,
        success: isSuccessful,
        data: null,
      });
    }
  });

const successPromiseOne = dummyPromise(true);
const failurePromiseTwo = dummyPromise(false);
const successPromiseThree = dummyPromise(true);
const successPromiseFour = dummyPromise(true);

const allPromises = Promise.allSettled([
  successPromiseOne,
  failurePromiseTwo,
  successPromiseThree,
  successPromiseFour,
]);

allPromises
  .then((responseArray) => {
    const failedPromiseArray = responseArray.filter(
      (res) => res.status === "rejected"
    );
    console.log("Failed Request: ", failedPromiseArray);
  })
  .catch((error) => {
    console.log(error);
  });
