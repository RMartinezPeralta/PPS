// mock de una api de login
export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({ username, name: "Admin", role: "Admin" });
      } else if (username === "client" && password === "123") {
        resolve({ username, name: "Client", role: "Client" });
      } else {
        reject("Usuario incorrecto");
      }
    }, Math.round(Math.random() * 1000));
  });
}
