# intersection.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/intersection.js)](https://www.npmjs.com/package/@yaohaixiao/intersection.js)
![Gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/gh/yaohaixiao/intersection.js/intersection.min.js?compression=gzip&label=gzip%20size)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/intersection.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/intersection.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/intersection.js)](https://npmcharts.com/compare/@yaohaixiao/intersection.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/intersection.js.svg)](https://github.com/yaohaixiao/intersection.js/blob/main/LICENSE)

intersection.js - 通用的 IntersectionObserver 观察者处理器功能函数。



## 项目初衷

intersection.js 是作为 outline.js 项目的一个工具 intersection() 函数开发出来的。由于很多场景都适合使用 IntersectionObserver API，所以就整理干脆将之独立通用的工具。



## Features


- 原生 JavaScript 编写，无任何依赖；
- 支持 UMD 模块规范；
- 支持 ES6 模块调用；
- 文件体积小(GZip：1KB)，加载速度快；



## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/intersection.js/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/intersection.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/intersection.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/intersection.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/intersection.js/)</br>Opera |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edge                                                                                                                                                                                               | last 10 versions                                                                                                                                                                                           | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   |




## Install

intersection.js 支持 AMD 和 CommonJS 规范的模块调用方式，可以直接使用 npm 安装，也可以使用 script 标签引入到页面。


### npm install


```shell
npm i -S @yaohaixiao/intersection.js
```

### script

可以根据项目的实际情况，选择调用 CDN 文件或者本地文件。

#### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/intersection.js/intersection.min.js"></script>
```

#### Local

```html
<script src="path/to/intersection.min.js"></script>
```


## API Documentation

intersection.js 提供了一个核心方法 intersection().

### intersection(fn[, props])

#### Parameters

##### fn

Type: `Function`

Default: ``

（必须）IntersectionObserver 观察者符合触发规则时的回调函数；

##### props

Type: `Object`

Default: `{}`

（可选）表示基准 URL 的字符串。在 url 是相对 URL 时，它才会起效。如果未指定，则默认为 ”；


| Name         | Type                  | Default           | Description                                                                                                                                                                                                        |
|--------------|-----------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `selector`   | `String`              | '.outline-heading'                | 可选，用来指定要观察的 DOM 元素的选择器。                                                                                                                                                                                            |                                                                   |
| `context`    | `Object`              | null | 可选，fn 回调函数的 this 执行上下文。                                                                                                                                                                                            |
| `root`       | `String, HTMLElement` | null                | 可选，指定根 (root) 元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为null，则默认为浏览器视窗。                                                                                                                                                   |
| `threshold`  | `Number, Array`       | 0                 |  可以是单一的 number 也可以是 number 数组，target 元素和 root 元素相交程度达到该值的时候 IntersectionObserver 注册的回调函数将会被执行。 |
| `rootMargin` | `String`              | '0px 0px -90% 0px' | 可选，根 (root) 元素的外边距。类似于 CSS 中的 margin 属性，比如 "10px 20px 30px 40px" (top、right、bottom、left)。如果有指定 root 参数，则 rootMargin 也可以使用百分比来取值。该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围，使用该属性可以控制 root 元素每一边的收缩或者扩张。默认值为四个边距全是 0。 |



## Usage

```js
import intersection from '@yaohaixiao/intersection.js/intersection'

const Chapters = {
  // 省略其它逻辑
  onObserver() {
    let timer = null

    intersection(
      ($heading) => {
        // fn 回调函数的参数有一个，就是当前触发 Observer 的被观察 DOM 元素
        const id = $heading.getAttribute('data-id')

        if (this.playing) {
          return false
        }

        if (timer) {
          clearTimeout(timer)
        }

        timer = later(() => {
          this.highlight(id)
        }, 100)
      },
      // 指定 fn() 的 this 为当前对象，其余都使用默认值
      // 因为当时就是为 outline.js 开发的，所有默认值即可
      { context: this }
    )

    return this
  }
}
```



## License
Licensed under MIT License.
