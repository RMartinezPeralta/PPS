export function Getproducts() {
  return fetch("/Product/AllProducts", {
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

export function postProduct(product, token) {
  const new_product = JSON.stringify(product);
  console.log(new_product);
  fetch("/Product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

export function deleteProduct(id, token) {
  const parsedId = parseInt(id, 10);
  const url_product_by_id = `/Product?IdProduct=${parsedId}`;
  return fetch(url_product_by_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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

export function Login(loginData) {
  const url_Login = `/auth/login`;

  return fetch(url_Login, {
    method: "POST",
    body: loginData,
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
  console.log("Token get all: ", token);
  const url = `/auth/AllAccounts`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Get users: ", data);
      return data;
    });
}

export function deleteUserById(id, token) {
  console.log("Token delete: ", token);
  const url_user_by_id = `/auth/accounts/${id}`;
  return fetch(url_user_by_id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Delete user by id: ", data);
      return data;
    });
}

export async function postOrder(Order, Token) {
  const new_order = JSON.stringify(Order);
  console.log("New order: ", new_order);

  try {
    const response = await fetch("/Order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: new_order,
    });

    const data = await response.json();
    console.log("New Order ID:", data);
    return data; // Return the data here
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

export function postOrderItem(Item) {
  const new_order_Item = JSON.stringify(Item);
  fetch("/OrderItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: new_order_Item,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Success:");
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function getOrderbyUserId(id) {
  const url = `/Order/GetOrdersByUserId?userId=${id}`;

  return fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Orders by User ID: ", data);
      return data;
    });
}

export function getOrderItemsByOrderId(orderId) {
  const url = `/OrderItem/GetByOrderId/${orderId}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Order Items by Order ID: ", data);
      return data;
    });
}
