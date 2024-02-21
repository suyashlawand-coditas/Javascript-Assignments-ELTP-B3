// const getWebApiData = (onSuccess, onFailure) => {
//   const shouldSuccess = true;
//   const dummyData = [
//     {
//       firstName: "Suyash",
//       lastName: "Lawand",
//     },
//   ];

//   setTimeout(() => {
//     if (shouldSuccess) {
//       return onSuccess({
//         statusCode: 200,
//         success: true,
//         data: dummyData,
//         message: null,
//       });
//     } else {
//       return onFailure({
//         statusCode: 500,
//         success: false,
//         data: null,
//         message: "Something went wrong",
//       });
//     }
//   }, 5000);
// };

// getWebApiData(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

const getWebApiData = () => {
  const shouldSuccess = true;
  const dummyData = [
    {
      firstName: "Suyash",
      lastName: "Lawand",
    },
  ];

  return new Promise((onSuccess, onFailure) => {
    setTimeout(() => {
      if (shouldSuccess) {
        return onSuccess({
          statusCode: 200,
          success: true,
          data: dummyData,
          message: null,
        });
      } else {
        return onFailure({
          statusCode: 500,
          success: false,
          data: null,
          message: "Something went wrong",
        });
      }
    }, 5000);
  });
};

getWebApiData()

