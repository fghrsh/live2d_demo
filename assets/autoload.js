try {
    $("<link>").attr({href: "assets/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: 'assets/waifu-tips.js',dataType:"script", cache: true, async: false});
    $.ajax({url: 'assets/live2d.js',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['modelId'] = 5;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
    /* 在 initModel 前添加 */
    initModel('assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
