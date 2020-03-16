const nombreInput = document.getElementById('nombreInput');
const tableProductos = document.querySelectorAll('.tableProductos tbody tr');
const table = document.getElementById('tableProductos');

const showProducts = (e) => {
    const nombre = (e.target.value).toLowerCase();
    tableProductos.forEach((item) => ((((item.querySelectorAll('td:nth-child(2)')[0].textContent).toLowerCase().includes(nombre) && nombre) || nombre === '*')
            ? item.classList.remove('hidden')
            : item.classList.add('hidden')));
};

nombreInput.addEventListener('keyup', showProducts);
table.addEventListener('click', (e) => console.log(e.target));
