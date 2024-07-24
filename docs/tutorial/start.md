---
sidebar_position: 1
---

# 快速入門

## 安裝

首先，請在你的網頁中載入以下 JavaScript 代碼：

```html
<script src="https://font.emtech.cc/emfont.min.js"></script>
```

要放在 `<head>` 還是 `<body>` 中呢？你開心就好。

## 選擇字體

給要添加字體的 HTML 元素加上字體專屬的 class。可包多層元素，與其他 class 混合使用。

比如說你想要在這段文字使用 jf-openhuninn-2.0 字體，可以這樣寫：

```html
<p class="emfont-jfopenhuninn">
    這個段落使用了 jf-openhuninn-2.0 字型。
</p>
```

再比如說你想整個網頁預設使用某個字體，可以在 `<body>` 標籤上加上 class。

```html
<body class="emfont-975HazyGoSC">
</body>
```

使用其他 class，或是想要使用多種字體？可以混合使用，完全沒問題。

```html
<body class="emfont-975HazyGoSC">
    <p class="px-6 text-center emfont-jfopenhuninn">這個段落使用了 jf-openhuninn-2.0 字型。</p>
</body>
```

## 啟動

```html
<script>
    emfont.init()
</script>
```

就是這麼簡單。