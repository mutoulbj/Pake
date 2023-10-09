window.addEventListener('DOMContentLoaded', _event => {
  const css = `
    // CSS 修改字体
    *{font-family: "LXGW WenKai Screen" !important;}
    // 去除 body 滚动条
    body::-webkit-scrollbar{width:0px;height:0px;}
    // 修改文本两侧边距
    .readerChapterContent {
        margin-left: 2rem;
        margin-right: 2rem;
    }
    // 字体控制默认透明显示
    .readerControls_fontSize{opacity:0.3 !important;}
    .readerControls_fontSize:hover{opacity:1 !important;}
    // 移除阅读器侧边主题和下载按钮
    .readerControls_item.dark,.readerControls_item.download { display: none !important; }
    // 修改亮色主题背景颜色及阴影
    .wr_whiteTheme .app_content{box-shadow: 0 8px 32px rgba(0,25,104,.1) !important ;}
    .wr_whiteTheme .app_content.shelf_container{box-shadow: none !important;}
    html body.wr_whiteTheme,
    .wr_whiteTheme .navBar,
    .wr_whiteTheme .navBar_home,
    .wr_whiteTheme .bookshelf_preview_item,
    .wr_whiteTheme .app_content,
    .wr_whiteTheme .readerControls_item,
    .wr_whiteTheme .readerControls_fontSize,
    .wr_whiteTheme .readerTopBar,
    .wr_whiteTheme .readerBottomBar,
    .wr_whiteTheme .readerBottomSettingPanel,
    .wr_whiteTheme .recommend_preview_item {
        background-color: #f9f3e8 !important;
    }
    // 隐藏控制条，底部 hover 显示
    .readerMemberCardTips,
    .readerTopBar,
    .readerControls_item,
    .navBarOffset {
        display: none !important;
    }
    .readerBottomBar {
        transform: none;
        display: flex !important;
        opacity: 0 !important;
        transition: opacity 400ms ease-out !important;
    }
    .readerBottomBar:hover {
        display: flex !important;
        opacity: 1 !important;
    }
    .readerBottomSettingPanel {
        display: block;
        top: 88% !important;
        height: 7% !important;
    }
  `;
  const styleElement = document.createElement('style');
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);
});
