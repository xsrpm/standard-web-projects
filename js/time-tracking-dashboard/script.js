let data
const main = document.querySelector('main')
const template = document.querySelector('#template')
const nav = document.querySelector('nav')
const dailyFilter = document.querySelector('#daily')
const weeklyFilter = document.querySelector('#weekly')
const monthlyFilter = document.querySelector('#monthly')
let filter = 'weekly'
weeklyFilter.classList.add('active')
function printMain(data) {
  main.innerHTML = ''
  data.forEach((item) => {
    for (const timeframe in item.timeframes) {
      if (filter === timeframe) {
        //console.log({ timeframe })
        const content = template.content.cloneNode(true)
        content.querySelector('.timeframe').innerHTML =
          timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
        content.querySelector('.timeframes-current').innerHTML =
          item.timeframes[timeframe].current
        content.querySelector('.timeframes-previous').innerHTML =
          item.timeframes[timeframe].previous
        content.querySelector('.title').innerHTML = item.title
        const article = document.createElement('article')
        article.classList.add(item.title.toLowerCase().split(' ').join(''))
        article.appendChild(content)
        //console.log({ article })
        main.appendChild(article)
      }
    }
  })
}
dailyFilter.addEventListener('click', (e) => {
  e.preventDefault()
  Array.from(nav.children).forEach((item) => {
    item.classList.remove('active')
  })
  filter = 'daily'
  dailyFilter.classList.add('active')
  printMain(data)
})
weeklyFilter.addEventListener('click', (e) => {
  e.preventDefault()
  Array.from(nav.children).forEach((item) => {
    item.classList.remove('active')
  })
  filter = 'weekly'
  weeklyFilter.classList.add('active')
  printMain(data)
})
monthlyFilter.addEventListener('click', (e) => {
  e.preventDefault()
  Array.from(nav.children).forEach((item) => {
    item.classList.remove('active')
  })
  filter = 'monthly'
  monthlyFilter.classList.add('active')
  printMain(data)
})
;(async function () {
  data = await fetch('./data.json').then((response) => response.json())
  //console.log(data)
  printMain(data)
})()
