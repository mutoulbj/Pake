/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.media = "print";
link.onload = "this.media='all'"
link.href = "https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css";
document.head.append(link);
