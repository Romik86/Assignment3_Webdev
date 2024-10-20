
const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
        alert(`You have selected: ${option.textContent}`);
    });
});
