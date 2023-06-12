setTimeout(() => {
  let nomeInformado = prompt('Qual o seu nome?');
  alert('Olá ' + nomeInformado + '. Seja bem-vindo ao nosso site.');
}, 800)

const inputETextArea = document.querySelectorAll('input, textarea')
const button = document.querySelector('button')
const form = document.querySelector('form')
const paragrafo = document.getElementsByClassName('paragrafo-disappear')

inputETextArea.forEach(input => {
  input.addEventListener('change', e => {
    
    const errorMessage = document.querySelector(`div#${input.name} p`)

    if (input.value) {
      input.style.border = '2px solid #09d309'
      errorMessage.style.display = 'none'
    } else {
      input.style.border = '1px solid black'
      errorMessage.style.display = 'block'
    }
  });

  input.addEventListener('keydown', e => {

    const errorMessage = document.querySelector(`div#${input.name} p`)

    if (input.value) {
      input.style.border = '2px solid #09d309'
      errorMessage.style.display = 'none'
    } else {
      input.style.border = '1px solid black'
      errorMessage.style.display = 'block'
    }
  })
})


form.onsubmit = e => {
  e.preventDefault()

  const fields = document.querySelectorAll('input, textarea')

  fields.forEach(field => {
    const errorMessage = document.querySelector(`div#${field.name} p`)

    if (field.value) {
      field.style.border = '2px solid #09d309'

      errorMessage.style.display = 'none'
    }
    else {
      field.style.border = '1px solid #e02323e5'

      errorMessage.style.display = 'block'
    }
  })
}


