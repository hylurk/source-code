/**
 * React 里面用来继承的基础组件类
 * 其实完全可以用 class 来实现，但是源码依然采用了 function
 * @param {*} props 
 * @param {*} context 
 * @param {*} updater 
 */
function Component (props, context, updater) {
  this.props = props
  this.context = context
  this.refs = {}
  // TODO updater 暂不处理，过于复杂
  // 对应源码 packages/react/src/ReactBaseClasses.js 27行
  this.updater = updater
}
// 一些静态属性绑在了 Component 的原型上，避免每个实例都要生成一份
// 是否是 react 类组件，为了区分是类组件还是函数组件
// 源码是个对象，我们简版改成 boolean
Component.prototype.isReactComponent = true
console.log('dddd')
console.log(Component.isReactComponent)
// let a = new Component()
// console.log(a.isReactComponent)

// class Component {
//   constructor (props, context, updater) {
//     this.props = props
//     this.context = context
//     this.refs = {}
//     // TODO updater 暂不处理，过于复杂
//     // 对应源码 packages/react/src/ReactBaseClasses.js 27行
//     this.updater = updater
//   }
//   static isReactComponent = true
// }

export {
  Component,
}