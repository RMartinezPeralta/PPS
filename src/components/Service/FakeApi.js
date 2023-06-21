const productList = {
  product1: {
    id: 132,
    name: "clavos AY AY AYsadasdasdasasasasasasaaaaaaaaaa",
    category: "Clavos",
    img: "https://i.imgur.com/zVDnYVW.jpg",
    price: 200,
    description: "Una caja con 200 clavos",
  },
  product2: {
    id: 133,
    name: "destornillador plano",
    category: "Destornilladores",
    img: "https://i.imgur.com/0kKKlzM.png",
    price: 500,
    description: "Un destornillador de cabeza plana ",
  },
  product3: {
    id: 134,
    name: "martillo",
    category: "Herramientas",
    img: "https://i.imgur.com/5slF8sW.jpg",
    price: 600,
    description: "Un martillo con mango de madera",
  },
  product4: {
    id: 135,
    name: "llave ajustable",
    category: "Herramientas",
    img: "https://i.imgur.com/abcd1234.jpg",
    price: 350,
    description: "Una llave ajustable de alta calidad",
  },
  product5: {
    id: 136,
    name: "sierra eléctrica",
    category: "Herramientas",
    img: "https://i.imgur.com/efgh5678.jpg",
    price: 1500,
    description: "Una sierra eléctrica potente y duradera",
  },
  product6: {
    id: 137,
    name: "clavos x200",
    category: "Clavos",
    img: "https://i.imgur.com/zVDnYVW.jpg",
    price: 200,
    description: "Una caja con 200 clavos",
  },
  product7: {
    id: 138,
    name: "destornillador plano",
    category: "Destornilladores",
    img: "https://i.imgur.com/0kKKlzM.png",
    price: 500,
    description: "Un destornillador de cabeza plana ",
  },
  product8: {
    id: 139,
    name: "martillo",
    category: "Herramientas",
    img: "https://i.imgur.com/5slF8sW.jpg",
    price: 600,
    description: "Un martillo con mango de madera",
  },
  product9: {
    id: 140,
    name: "llave ajustable",
    category: "Herramientas",
    img: "https://i.imgur.com/abcd1234.jpg",
    price: 350,
    description: "Una llave ajustable de alta calidad",
  },
  product10: {
    id: 141,
    name: "sierra eléctrica",
    category: "Herramientas",
    img: "https://i.imgur.com/efgh5678.jpg",
    price: 1500,
    description: "Una sierra eléctrica potente y duradera",
  },
  product11: {
    id: 142,
    name: "clavos x200",
    category: "Clavos",
    img: "https://i.imgur.com/zVDnYVW.jpg",
    price: 200,
    description: "Una caja con 200 clavos",
  },
  product12: {
    id: 143,
    name: "destornillador plano",
    category: "Destornilladores",
    img: "https://i.imgur.com/0kKKlzM.png",
    price: 500,
    description: "Un destornillador de cabeza plana ",
  },
  product13: {
    id: 144,
    name: "martillo OLE OLE OLE",
    category: "Herramientas",
    img: "https://i.imgur.com/5slF8sW.jpg",
    price: 600,
    description: "Un martillo con mango de madera",
  },
  product14: {
    id: 145,
    name: "llave ajustable",
    category: "Herramientas",
    img: "https://i.imgur.com/abcd1234.jpg",
    price: 350,
    description: "Una llave ajustable de alta calidad",
  },
  product15: {
    id: 146,
    name: "sierra eléctrica",
    category: "Sierras",
    img: "https://i.imgur.com/efgh5678.jpg",
    price: 1500,
    description: "Una sierra eléctrica potente y duradera",
  },
};

export function Getproducts() {
  return productList;
}

//const filteredProducts = Object.values(articlesList).filter((product) => filterCategory === "All" || product.category === filterCategory);
export function getProductById(id) {
  const parsedId = parseInt(id, 10);
  const singleProduct = Object.values(productList).find((product) => product.id === parsedId);

  return singleProduct;
}
