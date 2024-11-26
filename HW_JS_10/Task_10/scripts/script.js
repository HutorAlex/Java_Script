const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));


const outputContainer = document.getElementById('outputContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentPage = 1;
const itemsPerPage = 10;

function renderItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    outputContainer.innerHTML = '';

    const pageItems = items.slice(startIndex, endIndex);
    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.id}: ${item.name}`;
        outputContainer.appendChild(div);
    });
}
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderItems(currentPage);
    }
});
nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        renderItems(currentPage);
    }
});
renderItems(currentPage);