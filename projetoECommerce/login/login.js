document.querySelector('#entrar').addEventListener('click', () => {
    const [ emailInput, senhaInput ] = document.querySelectorAll('input')

    const email = emailInput.value
    const senha = senhaInput.value

    if (email === '' || senha === '') {
        alert('Dados inválidos')
    } else {
        alert('Está funcionalidade não está disponível no momento')
    }
})

document.querySelector('#registrar').addEventListener('click', () => {
    alert('Está funcionalidade não está disponível no momento')
})
