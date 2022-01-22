# counter-demo-nuxt

## 概要
typed-vuex を使ったカウンターのデモアプリ。教則用。

## 比較

このアプリの [masterブランチ](https://github.com/torico-tokyo/counter-demo-nuxt) では、Vuex + typed-vuex で[ストア](https://github.com/torico-tokyo/counter-demo-nuxt/blob/master/store/counter.ts)を提供している。

このアプリの [vuex-module-decoratorsブランチ](https://github.com/torico-tokyo/counter-demo-nuxt/tree/vuex-module-decorators) では、
vuex-module-decorators を使って[ストア](https://github.com/torico-tokyo/counter-demo-nuxt/blob/vuex-module-decorators/store/counter.ts)を書いている。

同 Organization の中に、 [counter-demo-flutter](https://github.com/torico-tokyo/counter-demo-flutter) というプロジェクトが作ってあり、そちらは全く同じ機能を Flutter で riverpod + hooks_riverpod で提供している。

riverpod + hooks_riverpod での状態管理は、 vuex の状態管理と 1:1 で書けるので、比較すると非常に理解が早い。

### 状態管理
- [Vue typed-vuex](https://github.com/torico-tokyo/counter-demo-nuxt/blob/master/store/counter.ts)
- [Vue vuex-module-decorators](https://github.com/torico-tokyo/counter-demo-nuxt/blob/vuex-module-decorators/store/counter.ts)
- [Flutter hooks_riverpod](https://github.com/torico-tokyo/counter-demo-flutter/blob/master/lib/controllers/counter_controller.dart)

### UI
- [Vue typed-vuex](https://github.com/torico-tokyo/counter-demo-nuxt/blob/master/pages/index.vue)
- [Vue vuex-module-decorators](https://github.com/torico-tokyo/counter-demo-nuxt/blob/vuex-module-decorators/pages/index.vue)
- [Flutter hooks_riverpod](https://github.com/torico-tokyo/counter-demo-flutter/blob/master/lib/main.dart)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
