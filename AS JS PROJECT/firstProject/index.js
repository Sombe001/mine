// Fetch products from the API
fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(products => {
  const productContainer = document.getElementById('product-container');

  products.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
});

// Create product card element
function createProductCard(product) {
const card = document.createElement('div');
card.className = 'product-card';

const image = document.createElement('img');
image.src = product.image;
card.appendChild(image);

const name = document.createElement('h3');
name.textContent = product.title;
card.appendChild(name);

const price = document.createElement('p');
price.className = 'price';
price.textContent = `$${product.price}`;
card.appendChild(price);

const description = document.createElement('p');
description.textContent = product.description;
card.appendChild(description);

return card;
}