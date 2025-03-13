function copy(id) {
  let code = document.getElementById(id).textContent
  navigator.clipboard.writeText(code)
}