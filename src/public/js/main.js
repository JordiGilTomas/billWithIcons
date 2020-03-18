const nombreInput = document.getElementById('nombreInput');
const tableRows = document.querySelectorAll('.tableProductos tbody tr');
const table = document.getElementById('tableProductos');
const carrito = document.getElementById('cartCantidad');

const showProducts = (e) => {
    const nombre = (e.target.value).toLowerCase();
    // nth-child(2) es la celda del nombre del producto
    // Vemos si incluye nombre, comprobamos si nombre no es null y comprobamos si es *
    // si es alguno de estos casos quitamos la clase hidden para mostrarlos.
    tableRows.forEach((row) => ((((row.querySelectorAll('td:nth-child(2)')[0].textContent).toLowerCase().includes(nombre) && nombre) || nombre === '*')
        ? row.classList.remove('hidden')
        : row.classList.add('hidden')));
};

const addProductToCart = (e) => {
    if (e.target.tagName === 'BUTTON') carrito.textContent = parseInt(carrito.textContent, 10) + 1;
};


nombreInput.addEventListener('keyup', showProducts);
table.addEventListener('click', addProductToCart);
