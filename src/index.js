import '@styles/scss/styles.scss'
import { model } from './plugins/model.js'
import { Site } from './classes/site.js'

const site = new Site('#site')

site.render(model)