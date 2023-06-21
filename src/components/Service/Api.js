import { useState } from "react";

const url = "https://localhost:7167/api/Product?state=1";

const Getproducts = async () => {
  const [data, setData] = useState(null);
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Success:", data);
      setData(data);
      // Handle success response here
    })
    .catch((error) => {
      console.log("Error:", error);
      // Handle error here
    });
  return data;
};

export default Getproducts;
