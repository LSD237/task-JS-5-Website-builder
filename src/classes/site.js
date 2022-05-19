export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => { //проходимся по каждому модульному/шаблонному объекту в массиве с шаблонами
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}