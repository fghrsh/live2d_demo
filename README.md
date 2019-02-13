# Live2D demo

Live2D 看板娘插件 (https://www.fghrsh.net/post/123.html) 的前端 HTML 源码

### 特性

- 基于 API 加载模型，支持 定制 提示语
- 增加 参数设置 一键定制看板娘，易用性++
- 增加 看板娘样式设置，可直接设置宽高度等
- 支持多种一言接口，基于 JQuery UI 实现拖拽

## 使用

### 目录结构

```shell
│  demo1-default.html       // 常规引用 Demo
│  demo2-autoload.html      // autoload.js Demo
│  demo3-waifu-tips.html    // 内置 waifu-tips Demo
│
└─assets
        autoload.js                     // 自动异步加载
        flat-ui-icons-regular.eot       // Flat UI 字体
        flat-ui-icons-regular.svg       // Flat UI 字体
        flat-ui-icons-regular.ttf       // Flat UI 字体
        flat-ui-icons-regular.woff      // Flat UI 字体
        live2d.js                       // Live2D 核心
        waifu-tips.js                   // Live2D 看板娘 扩展
        waifu-tips.json                 // Live2D 看板娘 提示语
        waifu.css                       // Live2D 看板娘 样式表
```

### 食用方法

- 依赖类库
  - JQuery (`waifu-tips.js`)
  - JQuery UI (仅实现 *拖拽效果* 需要)

- 常规方式引入

  1. 在 `</head>` 前引入 `waifu.css` 样式表
  2. 在 `</body>` 前引入 `waifu-tips.js` 和 `live2d.js`
  3. 在 `</body>` 前插入 初始化 JS，可在 初始化前 设置参数

```html
<html>
<head>

        · · ·   · · ·

    <link rel="stylesheet" type="text/css" href="https://www.example.com/path/to/waifu.css"/>
</head>
<body>

        · · ·   · · ·

    <div class="waifu">
        <div class="waifu-tips"></div>
        <canvas id="live2d" class="live2d"></canvas>
        <div class="waifu-tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <span class="fui-info-circle"></span>
            <span class="fui-cross"></span>
        </div>
    </div>
    
    <script src="path/to/waifu-tips.js"></script>
    <script src="path/to/live2d.js"></script>
    
    <script type="text/javascript">
        live2d_settings['modelId'] = 1;
        live2d_settings['modelTexturesId'] = 87;
    	initModel("https://www.example.com/path/to/waifu-tips.json")
    </script>
</body>
</html>
```

- autoload.js 引入
  1. 在 `</body>` 前引入 `autoload.js`
  2. 修改 `autoload.js` 文件路径，可在 初始化前 设置参数

```html
    · · ·   · · ·
    <script src="path/to/autoload.js"></script>
</body>
</html>
```

```javascript
try {
    · · ·   · · ·
    live2d_settings['modelId'] = 1;
    live2d_settings['modelTexturesId'] = 87;
    initModel('https://www.example.com/path/to/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }

```

- 定制属于你的看板娘
  - 修改 `waifu-tips.js` 顶部的设置参数 (或初始化前设置
  - 修改 `waifu-tips.json`，定制看板娘提示语，打造专属看板娘

### 设置参数
*Tips： `waifu-tips.js` 已自带默认参数，如无特殊要求可跳过*

- 后端接口

  - `live2d_settings['modelAPI']`<br>看板娘 API 地址，默认值 `'//live2d.fghrsh.net/api/'`

  - `live2d_settings['tipsMessage']`<br>提示语读取路径，默认值 `'waifu-tips.json'` (一般在 `initModel` 时指定)

  - `live2d_settings['hitokotoAPI']`<br>一言 API 接口，可选 `'lwl12.com'`，`'hitokoto.cn'`，`'jinrishici.com'` (古诗词)

- 默认模型
 
  - `live2d_settings['modelId']`<br>默认模型(分组) ID，可在 Demo 页 `[F12]` 呼出 `控制台(Console)` 找到

  - `live2d_settings['modelTexturesId']`<br>默认材质(模型) ID，可在 Demo 页 `[F12]` 呼出 `控制台(Console)` 找到

- 工具栏设置

  - `live2d_settings['showToolMenu']`，      显示工具栏，     `true` | `false`
  - `live2d_settings['canCloseLive2d']`，    关闭看板娘 按钮，`true` | `false`
  - `live2d_settings['canSwitchModel']`，    切换模型 按钮，  `true` | `false`
  - `live2d_settings['canSwitchTextures']`， 切换材质 按钮，  `true` | `false`
  - `live2d_settings['canSwitchHitokoto']`， 切换一言 按钮，  `true` | `false`
  - `live2d_settings['canTakeScreenshot']`， 看板娘截图 按钮，`true` | `false`
  - `live2d_settings['canTurnToHomePage']`， 返回首页 按钮，  `true` | `false`
  - `live2d_settings['canTurnToAboutPage']`，跳转关于页 按钮，`true` | `false`

- 模型切换模式

  - `live2d_settings['modelStorage']`，记录 ID (刷新后恢复)，`true` | `false`
  - `live2d_settings['modelRandMode']`，模型切换，可选 `'rand'` (随机) | `'switch'` (顺序)
  - `live2d_settings['modelTexturesRandMode']`，材质切换，可选 `'rand'` | `'switch'`

- 提示消息选项
  - `live2d_settings['showHitokoto']`，空闲时一言，`true` | `false`
  - `live2d_settings['showF12Status']`，控制台显示加载状态，`true` | `false`
  - `live2d_settings['showF12Message']`，提示消息输出到控制台，`true` | `false`
  - `live2d_settings['showF12OpenMsg']`，控制台被打开触发提醒，`true` | `false`
  - `live2d_settings['showCopyMessage']`，内容被复制触发提醒，`true` | `false`
  - `live2d_settings['showWelcomeMessage']`，进入面页时显示欢迎语，`true` | `false`

- 看板娘样式设置
  - `live2d_settings['waifuSize']`，看板娘大小，例如 `'280x250'`，`'600x535'`
  - `live2d_settings['waifuTipsSize']`，提示框大小，例如 `'250x70'`，`'570x150'`
  - `live2d_settings['waifuFontSize']`，提示框字体，例如 `'12px'`，`'30px'`
  - `live2d_settings['waifuToolFont']`，工具栏字体，例如 `'14px'`，`'36px'`
  - `live2d_settings['waifuToolLine']`，工具栏行高，例如 `'20px'`，`'36px'`
  - `live2d_settings['waifuToolTop']`，工具栏顶部边距，例如 `'0px'`，`'-60px'`

  - `live2d_settings['waifuMinWidth']`<br>面页小于 指定宽度 隐藏看板娘，例如 `'disable'` (停用)，`'768px'`

  - `live2d_settings['waifuEdgeSide']`<br>看板娘贴边方向，例如 `'left:0'` (靠左 0px)，`'right:30'` (靠右 30px)

  - `live2d_settings['waifuDraggable']`<br>拖拽样式，可选 `'disable'` (禁用)，`'axis-x'` (只能水平拖拽)，`'unlimited'` (自由拖拽)

  - `live2d_settings['waifuDraggableRevert']`，松开鼠标还原拖拽位置，`true` | `false`

- 其他杂项设置
  - `live2d_settings['l2dVersion']`，当前版本 (无需修改)
  - `live2d_settings['l2dVerDate']`，更新日期 (无需修改)
  - `live2d_settings['homePageUrl']`，首页地址，可选 `'auto'` (自动)，`'{URL 网址}'`
  - `live2d_settings['aboutPageUrl']`，关于页地址，`'{URL 网址}'`
  - `live2d_settings['screenshotCaptureName']`，看板娘截图文件名，例如 `'live2d.png'`

### 定制提示语
*Tips： `waifu-tips.json` 已自带默认提示语，如无特殊要求可跳过*

- `"waifu"` 系统提示
  - `"console_open_msg"` 控制台被打开提醒（支持多句随机）
  - `"copy_message"` 内容被复制触发提醒（支持多句随机）
  - `"screenshot_message"` 看板娘截图提示语（支持多句随机）
  - `"hidden_message"` 看板娘隐藏提示语（支持多句随机）
  - `"load_rand_textures"` 随机材质提示语（暂不支持多句）
  - `"hour_tips"` 时间段欢迎语（支持多句随机）
  - `"referrer_message"` 请求来源欢迎语（不支持多句）
  - `"referrer_hostname"` 请求来源自定义名称（根据 host，支持多句随机）
  - `"model_message"` 模型切换欢迎语（根据模型 ID，支持多句随机）
  - `"hitokoto_api_message"`，一言 API 输出模板（不支持多句随机）
- `"mouseover"` 鼠标触发提示（根据 CSS 选择器，支持多句随机）
- `"click"` 鼠标点击触发提示（根据 CSS 选择器，支持多句随机）
- `"seasons"` 节日提示（日期段，支持多句随机）

## 版权声明

> ( ˃ ˄ ˂̥̥ ) 都看到这了，点个 Star 吧 ~

[Flat UI Free][1]  
[live2d_src / ©journey-ad / GPL v2.0][2]  
[waifu-tips.js / ©journey-ad / CC BY-NC-SA 4.0][3]  
  
Open sourced under the GPL v2.0 license.


  [1]: https://designmodo.com/flat-free/ "Flat UI Free"
  [2]: https://github.com/journey-ad/live2d_src "基于 #fea64e4 的修改版"
  [3]: https://imjad.cn/ "猫与向日葵"
