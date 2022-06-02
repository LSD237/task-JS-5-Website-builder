import { Site } from "./site.js"
import { Sidebar } from "./sidebar.js"

export class App {
  constructor(model) {
    this.model = model
    this.arrWithBlocks = []
  }

  init() {
    const site = new Site('#site')

    site.render(this.model)

    let updateCallback = newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    }

    let delReturnBlock = (string) => {
      if (string == 'Del') {
        this.arrWithBlocks.push(this.model.pop())
      } else if (string == 'Return') {
        if (!this.arrWithBlocks.length) return
        this.model.push(this.arrWithBlocks.pop())
      }
    }

    new Sidebar('#panel', updateCallback, delReturnBlock, '#site')
  }
}