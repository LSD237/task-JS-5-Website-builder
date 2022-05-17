import '@styles/scss/styles.scss'
import { model } from './plugins/model.js'
import { templates } from './plugins/templates.js'

const $site = document.querySelector('#site')
// console.log(templates['text']({ value: 'Привет!' }))
model.forEach(block => { //проходимся по каждому модульному/шаблонному объекту в массиве
  //В объекте с функциями - templates, выбирается ф-я по названию и присваивается пере-й
  const toHTML = templates[block.type]
  if (toHTML) {
    $site.insertAdjacentHTML('beforeend', toHTML(block))
  }
})