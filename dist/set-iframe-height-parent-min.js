var setIframeHeight=function(e,r,t){function a(t){var a=null;return e("iframe").each(function(n,f){var c=e(f),h=c.attr("data-iframeAutoHeight-currentSrc")||f.src;h&&(0===h.indexOf("/")&&(h=i(r.location.href)+h),h===t?a=f:i(h)===i(t)&&(a=f))}),a}function i(e){var r=e.match(/https?:\/\/.[^/]+/)||[];return r[0]}function n(i,n){var f=a(n.iframeSrc);if(!f&&n.iframeReferrer&&(f=a(n.iframeReferrer)),f){var c=e(f);if(c.height(n.height),c.attr("data-iframeAutoHeight-currentSrc",n.iframeSrc),t.history.replaceState&&c.attr("data-iframeAutoHeight-deepLinkPattern")){var h=c.attr("data-iframeAutoHeight-deepLinkPattern").replace(/%deepLinkIframeSrc%/,encodeURIComponent(n.iframeSrc));r.location.href!==h&&(t.history.replaceState({},"",h),e(t).trigger("setIframeHeight:deepLink:changed",{childUrl:n.iframeSrc,parentUrl:h}))}}}function f(r){var t=r.originalEvent.data;if(t.indexOf("::")){var t=t.split("::");if(2===t.length&&"setIframeHeight"===t[0]){var a=e.parseJSON(t[1]);c.setHeight(a.iframeSrc,a.height,a.iframeReferrer)}}}e(t).bind("setIframeHeight",n).bind("message",f);var c={setHeight:function(r,a,i){e(t).trigger("setIframeHeight",[{iframeSrc:r,height:a,iframeReferrer:i}])}};return c}(jQuery,document,window);