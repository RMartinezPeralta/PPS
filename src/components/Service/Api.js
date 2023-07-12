export function Getproducts() {
  return fetch("/Product?state=1", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export function getProductById(id) {
  const parsedId = parseInt(id, 10);
  const url_product_by_id = `/Product/getProduct/${parsedId}`;
  return fetch(url_product_by_id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export function postProduct(product) {
  const new_product = JSON.stringify(product);
  console.log(new_product);
  fetch("/Product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: new_product,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Success:");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function deleteProduct(id) {
  const parsedId = parseInt(id, 10);
  const url_product_by_id = `/Product?IdProduct=${parsedId}`;
  return fetch(url_product_by_id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.reload();
      return data;
    });
}

export function Getbrands() {
  return fetch("/Brand?state=1", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
export function Register(registerData) {
  const url_Register = `/auth/signup`;
  const new_data = JSON.stringify(registerData);
  console.log("New data: ", new_data);

  return fetch(url_Register, {
    method: "POST",
    body: new_data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("Response: ", res);
      if (!res.ok) {
        throw new Error(`Register request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Register error: ", error);
      return false;
    });
}

export function Login(newEmail, newPassword) {
  const url_Login = `/auth/login`;
  const body = JSON.stringify({
    email: newEmail,
    password: newPassword,
  });

  return fetch(url_Login, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Login request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Login error: ", error);
      return false;
    });
}

export function getUserById(id) {
  const url_user_by_id = `/auth/account?id=${id}`;
  return fetch(url_user_by_id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export function getUsers(token) {
  const url = "/auth/AllAccounts";
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Get users: ", data);
      return data;
    });
}

export function deleteUserById(id, token) {
  const url_user_by_id = `/auth/accounts/${id}`;
  console.log("URL:", url_user_by_id);
  return fetch(url_user_by_id, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Delete user by id: ", data);
      return data;
    });
}
