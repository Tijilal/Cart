module.exports = {
// Load Mock Product Data Into localStorage
init: function() {
localStorage.clear();
localStorage.setItem('product', JSON.stringify([
{
id: '0011001',
name: 'Pendrive',
image: 'images\pendrive.jpg',
description: 'The',
variants: [
{
sku: '123123',
type: '16 GB',
price: 4.99,
inventory: 1
},
{
sku: '123124',
type: '32 GB',
price: 12.99,
inventory: 5
},
{
sku: '1231235',
type: '64 GB',
price: 19.99,
inventory: 3
}
]
}
]));
}
};
};

