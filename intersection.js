import isFunction from './utils/isFunction'
import isElement from './utils/isElement'

/**
 * 通用的 IntersectionObserver 观察者处理器
 * ========================================================================
 * @method intersection
 * @param {Function} fn
 * @param {Object} [props]
 * @param {String} [props.selector]
 * @param {Object} [props.context]
 * @param {Object|HTMLElement} [props.root]
 * @param {Number|Array} [props.threshold]
 * @param {String} [props.rootMargin]
 * @return {IntersectionObserver}
 */
const intersection = (fn, props = {}) => {
  const root = props.root || null
  const selector = props.selector || '.outline-heading'
  const context = props.context || null
  const threshold = props.threshold || 0
  const rootMargin = props.rootMargin || '0px 0px -90% 0px'
  const options = {
    rootMargin: rootMargin,
    threshold: threshold
  }
  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        if (isFunction(fn)) {
          fn.call(context || entry.target, entry.target)
        }
      }
    })
  }, options)
  const $root = isElement(root) ? root : document

  if (root) {
    options.root = root
  }

  $root.querySelectorAll(selector).forEach((section) => {
    Observer.observe(section)
  })

  return Observer
}

export default intersection
