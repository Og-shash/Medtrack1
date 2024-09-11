// Example: Interactivity for a responsive search bar
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('input[type="search"]');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can add your search functionality here
        } else {
            alert('Please enter a search term');
        }
    });
});
