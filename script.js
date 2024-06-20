function createProduct(obj, callback) {
    // Додаємо унікальний ідентифікатор
    const product = { ...obj, id: generateUniqueId() };
    // Викликаємо колбек з новоствореним продуктом
    callback(product);
}

function logProduct(product) {
    console.log("Product:", product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log(`Total price for ${product.name}: $${totalPrice.toFixed(2)}`);
}

// Функція для генерації унікального ідентифікатора
function generateUniqueId() {
    let id = Math.random() * 1000;
    return Math.floor(id);
}

// Приклад використання
// const newProduct = { name: 'Laptop', price: 999.99, quantity: 2 };
document.querySelector('.button').addEventListener('click', function(){
    const newProduct = {};
    newProduct.name = document.querySelector('#name').value;
    newProduct.price= document.querySelector('#price').value;
    newProduct.quantity = document.querySelector('#quantity').value;
    createProduct(newProduct, logProduct);
    createProduct(newProduct, logTotalPrice);
});
// const newProduct = {};
// newProduct.name = prompt("введіть назву пробукуту");
// newProduct.price = prompt("введіть ціну продукту");
// newProduct.quantity = prompt("введіть кількість продуктів");


// // Викликаємо createProduct з колбеком logProduct
// createProduct(newProduct, logProduct);

// // Викликаємо createProduct з колбеком logTotalPrice
// createProduct(newProduct, logTotalPrice);