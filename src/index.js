import { updateConfig } from './config'
import features from './features/index'
import init from './init'
import { getName } from './utils'

/**
 * Vue installer
 * @param  {Vue instance} Vue
 * @param  {Object} [options={}]
 */
function install (Vue, options = {}) {
  const { router } = options

  delete options.router
  updateConfig(options)

  init(router, options.onAnalyticsReady)

  Vue.prototype.$ga = Vue.$ga = features
}

export default { install, getName }
