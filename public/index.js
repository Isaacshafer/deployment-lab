let button = document.querySelector('button')

let getScammed = () => {
    let section = document.createElement('section')
    section.innerHTML = `<p>Congratulations, you just got scammed</p>`
    document.body.appendChild(section)
}
button.addEventListener('click', getScammed)