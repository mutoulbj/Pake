window.addEventListener('DOMContentLoaded', _event => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  // link.media = "print";
  // link.onload = "this.media='all'"
  // link.href = "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css";
  link.href = "https://npm.elemecdn.com/lxgw-wenkai-screen-webfont/style.css";
  document.head.append(link);

  const css = `
    * {font-family: "LXGW Wenkai Screen" !important;}
    body::-webkit-scrollbar{width:0px;height:0px;}
    .readerChapterContent {
        margin-left: 2rem;
        margin-right: 2rem;
    }
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
    .wr_whiteTheme .recommend_preview_item,
    .wr_whiteTheme .wr_book_detail_footer_float,
    .wr_whiteTheme .introDialogWrap {
        background-color: #f9f3e8 !important;
    }
    .readerMemberCardTips,
    .readerControls_item.download,
    .readerControls_item.dark,
    .readerControls_fontSize,
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
  styleElement.nodeType = 'text/css';
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);
});
