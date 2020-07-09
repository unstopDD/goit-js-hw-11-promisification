//Exercise-01

function ex01() {
  console.log('%c Task-01', 'color: bisque; font-size: 24px');
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  const logger = time => console.log(`Resolved after ${time}ms`);

  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
}
ex01();

//Exercise-02

function ex02() {
  console.log('%c Task-02', 'color: bisque; font-size: 24px');
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    return new Promise(resolve => {
      resolve(updatedUsers);
    });
  };

  const logger = updatedUsers => console.table(updatedUsers);

  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
}
setTimeout(ex02, 3000);

//Exercise-03

function ex03() {
  console.log('%c Task-03', 'color: bisque; font-size: 24px');
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
          resolve([transaction.id, delay]);
        }
        reject(transaction.id);
      }, delay);
    });
  };

  const logSuccess = array => {
    console.log(`Transaction ${array[0]} processed in ${array[1]}ms`);
  };

  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };

  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

  makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
}

setTimeout(ex03, 3500);
