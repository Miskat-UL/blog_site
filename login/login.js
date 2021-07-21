const labels = document.querySelectorAll('.form__control label');

labels.forEach(labels => {
    labels.innerHTML = labels.innerHTML.split('').map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('')
})