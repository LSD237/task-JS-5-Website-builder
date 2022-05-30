import { btnSidebar, block, blockImage, blockColumns, colInput } from "../plugins/utils"
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from "./blocks.js"

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback
    this.count = 2

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.formHandler.bind(this)) //* привязка контекста(".bind(this)")
    this.$el.addEventListener('click', this.rollUpHundler.bind(this))
    this.$el.addEventListener('click', this.btnColPlusMinusHadler.bind(this))
  }

  get template() {
    return [
      btnSidebar(),
      block('title'),
      block('text'),
      blockColumns('columns'),
      blockImage('image')
    ].join('')
  }

  formHandler(event) {
    event.preventDefault()

    const type = event.target.name
    const value = this.supportFormHandler(event)
    const styles = event.target.styles.value
    const imageStyles = event.target.stylesImage
      ? event.target.stylesImage.value
      : ''

    let newBlock

    switch (type) {
      case 'text': newBlock = new TextBlock(value, { styles })
        break
      case 'title': newBlock = new TitleBlock(value, { styles })
        break
      case 'image': newBlock = new ImageBlock(value, { styles, imageStyles })
        break
      case 'columns': newBlock = new ColumnsBlock(value, { styles })
        break
    }

    //* без привязки контекста это не сработает
    this.update(newBlock) //добавляется новый блок через sidebar
    //отчистка полей для ввода в формах
    event.target.value.value = ''
    if (event.target.value.length) {
      for (let i = 0; i < event.target.value.length; i++) {
        event.target.value[i].value = ''
      }
    }
    event.target.styles.value = ''
    event.target.stylesImage
      ? event.target.stylesImage.value = ''
      : ''
  }

  supportFormHandler(event) {
    let arr = [event.target.value.value]

    if (event.target.value.length) {
      arr = []
      for (let i = 0; i < event.target.value.length; i++) {
        arr.push(event.target.value[i].value)
      }
    }

    return arr
  }

  rollUpHundler(event) {
    if (event.target.classList.contains('btn-sidebar')) {
      this.$el.classList.toggle('sidebar-hidden')
    }
    if (event.target.tagName != 'H5') return
    event.target.parentElement.classList.toggle('hidden')
  }

  btnColPlusMinusHadler(event) {
    if (event.target.id == 'btnColPlus') {
      if (this.count > 4) return
      this.$el.querySelector('#colFormStyles').insertAdjacentHTML('beforebegin', colInput(this.count++))
    }
    if (event.target.id == 'btnColMinus') {
      if (this.count < 3) return
      this.$el.querySelector(`.colInput-${--this.count}`).remove()
    }
  }
}

//? Сделать кнопку Del для удаления последнего, добавленного, эл-та