import { useState } from "react";

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
      // Perform any necessary actions with the response data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occur during the request
    });
}

export function deleteProduct(id) {
  const parsedId = parseInt(id, 10);
  // Construct the URL with the correct query parameter syntax
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
