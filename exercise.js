// Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. Then manage the promise with then and catch in case of any reject.

const number = 11;

const checkIfGreaterThan10 = (number) =>
  new Promise((resolve, reject) => {
    if (number > 10) return resolve(number);
    else reject(new Error(`${number} is less or equal to 10`));
  });

const generateGreaterPromise = (callback, number) => {
  callback(number)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    .finally(() => console.log("process accomplished"));
};

generateGreaterPromise(checkIfGreaterThan10, number);
