document.addEventListener('DOMContentLoaded', () => {
    let link = document.getElementById('btn');
    link.addEventListener('click', () => {
        setSettings('url');
    });
});