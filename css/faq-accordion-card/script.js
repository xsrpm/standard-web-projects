const $$ = document.getElementsByClassName.bind(document)
const rows = $$('row')
console.log(rows)
const hideAccordion = (actual) => {
  Array.from(rows).forEach((row) => {
    if (row !== actual) row.classList.add('close')
  })
}
Array.from(rows).forEach((row) => {
  row.addEventListener('click', function (e) {
    hideAccordion(row)
    if (row.classList.contains('close')) {
      row.classList.remove('close')
    } else {
      row.classList.add('close')
    }
  })
})
