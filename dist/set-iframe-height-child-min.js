!function(){function e(){var e=document.documentElement.scrollHeight;n(e)}function t(){return r(document.location.href)===r(parent.location.href)}function r(e){return e.match(/https?:\/\/.[^/]+/)[0]}function n(e){parent.postMessage?parent.postMessage('setIframeHeight::{ "iframeSrc": "'+document.location.href+'", "iframeReferrer": "'+document.referrer+'", "height":'+e+" }","*"):t()&&parent.setIframeHeight&&parent.setIframeHeight.setHeight(document.location.href,e,document.referrer)}window.parent&&(setInterval(e,500),n(0))}();