import { row, col, css } from "../plugins/utils.js"

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { teg = 'h1', styles } = this.options
    return row(col(`<${teg}>${this.value}</${teg}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    // const html = this.value.map(item => col(item)).join('')
    const html = this.value.map(col).join('') //идентично строке выше (короткий синтаксис)
    return row(html, css(this.options.styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    //внутри деструктуризации указываем в какую пременную(iS) присвоить переменную(imageStyles) для сокращения кода
    const { imageStyles: iS, alt = '', styles } = this.options
    return row(`<img src="${this.value}" style="${css(iS)}" alt="${alt}">`, css(styles))
    // return row(`<img src="${block.value}" style="${css(imageStyles)}" alt="${alt}">`, css(styles))
  }
}