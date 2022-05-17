export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    model.forEach(block => { //проходимся по каждому модульному/шаблонному объекту в массиве с шаблонами
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}