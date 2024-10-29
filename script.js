document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const output = document.getElementById('output');

    btn1.addEventListener('click', () => {
        const links = document.querySelectorAll('a');
        output.textContent = `Número de enlaces totales: ${links.length}`;
    });

    btn2.addEventListener('click', () => {
        const links = document.querySelectorAll('a');
        if (links.length > 1) {
            output.textContent = `Dirección penúltimo enlace: ${links[links.length - 2].href}`;
        } else {
            output.textContent = 'No hay enlaces.';
        }
    });

    btn3.addEventListener('click', () => {
        const links = document.querySelectorAll('a[href="https://www.twitter.com"]');
        output.textContent = `Número de enlaces a Twitter: ${links.length}`;
    });

    btn4.addEventListener('click', () => {
        const thirdParagraph = document.querySelectorAll('p')[2];
        if (thirdParagraph) {
            const links = thirdParagraph.querySelectorAll('a');
            output.textContent = `Número de enlaces del tercer párrafo: ${links.length}`;
        } else {
            output.textContent = 'No hay tercer párrafo.';
        }
    });
});
