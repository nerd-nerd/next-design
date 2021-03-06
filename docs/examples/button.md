<script>
export default {
  data() {
    return {
      disabled: true
    };
  },
  methods: {
    handleClick: function(evt) {
      alert(evt);
    }
  }
};
</script>

## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<n-button>默认按钮</n-button>
<n-button type="primary">主要按钮</n-button>
<n-button type="text">文字按钮</n-button>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<n-button :disabled="disabled">默认按钮</n-button>
<n-button type="primary" :disabled="true">主要按钮</n-button>
<n-button type="text" :disabled="true">文字按钮</n-button>
<n-button icon="&#xe61d;" :disabled="true">批量删除</n-button>
```
:::

### 颜色倾向

不同的颜色倾向代表不同的提示。

:::demo 目前只提供了 `warning` 样式，显示为橘色，如有其他颜色需求可以添加不同的type。
```html
<n-button type="warning">警告按钮</n-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::demo 设置`icon`属性为对应的iconfont值即可。

```html
<n-button icon="&#xe61d;">批量删除</n-button>
<n-button icon="&#xe61d;" type="primary">批量删除</n-button>
<n-button icon="&#xe61d;"></n-button>
```
:::

### 不同尺寸

Button组件提供除了默认值以外，还有一种大尺寸按钮，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`，通过设置`size`属性来配置它们。

```html
<n-button type="primary" size="large">大型按钮</n-button>
<n-button type="primary">正常按钮</n-button>
```
:::

### 设置跳转链接

Button组件可以设置一个`to`属性，用于设置点击时的跳转链接。

:::demo 设置`to`为字符串跳转到对应的`url`，也可以设置为一个路由对象。
```html
<n-button type="primary" :to="{ path: '/'}">首页</n-button>
<n-button type="primary" to="http://baidu.com">百度</n-button>
```
:::

### 按钮点击回调

:::demo 可以设置一个按钮点击的回调函数。

```html
<n-button @click="handleClick">普通按钮</n-button>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large            |    —     |
| type     | 类型   | string    |   primary,warning,text |     —    |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| to  | 路由跳转路径 | Object   |  —  |  —  |

