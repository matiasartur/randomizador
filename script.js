function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if (!min || !max || min > max) {
        document.querySelector('.resultado').innerText = "Valores inválidos"
        return
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('.resultado').innerText = result
}