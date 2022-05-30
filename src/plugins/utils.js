export function row(content, styles) {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  if (typeof styles === 'string') return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function btnSidebar() {
  return '<button class="btn btn-outline-secondary btn-sidebar">Sidebar</button>'
}

export function block(type) {
  return `
    <form name="${type}" class="hidden">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
  `
}

export function blockImage(type) {
  return `
    <form name="${type}" class="hidden">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="stylesImage" placeholder="styles Image">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
  `
}

export function colInput(count) {
  return `
    <div class="form-group colInput-${count}">
      <input class="form-control form-control-sm" name="value" placeholder="column ${count}">
    </div>
  `
}

export function blockColumns(type) {
  return `
    <form name="${type}" class="hidden">
      <h5>${type}</h5>
      <div class="wrapButtons">
          <button type="button" class="btn btn-secondary" id="btnColMinus">-</button>
          <button type="button" class="btn btn-secondary" id="btnColPlus">+</button>
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="column 1">
      </div>
      <div class="form-group" id="colFormStyles">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
  `
}