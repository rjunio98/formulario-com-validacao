const inputETextArea = document.querySelectorAll('input, textarea')
const button = document.querySelector('button')
const form = document.querySelector('form')

inputETextArea.forEach(input => {
  input.addEventListener('change', e => {
    if (input.value) input.style.border = '2px solid #09d309'
    else input.style.border = '1px solid black'
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
      field.style.border = '1px solid black'

      errorMessage.style.display = 'block'
    }
  })
}