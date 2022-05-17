import { row, col, css } from "./utils.js"

function title(block) {
  const { teg = 'h1', styles } = block.options
  return row(col(`<${teg}>${block.value}</${teg}>`), css(styles))
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
  // const html = block.value.map(item => col(item)).join('')
  const html = block.value.map(col).join('') //идентично строке выше (короткий синтаксис)
  return row(html, css(block.options.styles))
}

function image(block) {
  //внутри деструктуризации указываем в какую пременную(iS) присвоить переменную(imageStyles) для сокращения кода
  const { imageStyles: iS, alt = '', styles } = block.options
  return row(`<img src="${block.value}" style="${css(iS)}" alt="${alt}">`, css(styles))
  // return row(`<img src="${block.value}" style="${css(imageStyles)}" alt="${alt}">`, css(styles))
}

// export const templates = {
//   title: title,
//   text: text,
//   image: image,
//   columns: columns
// }
export const templates = {
  title,
  text,
  image,
  columns
}