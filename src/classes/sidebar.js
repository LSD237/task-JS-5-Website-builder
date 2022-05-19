import { block } from "../plugins/utils"
import { TextBlock, TitleBlock } from "./blocks.js"

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.formHandler.bind(this)) //* привязка контекста(".bind(this)")
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  formHandler(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock = type === 'text'
      ? new TextBlock(value, { styles })
      : new TitleBlock(value, { styles })

    this.update(newBlock) //* без привязки контекста это не сработает
    event.target.value.value = ''
    event.target.styles.value = ''
  }
}

//? 1:47:27