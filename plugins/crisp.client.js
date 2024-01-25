export default defineNuxtPlugin(() => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "b98c7984-b135-49f4-81dc-ceb1aba98ed8";

  (function () {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
});
