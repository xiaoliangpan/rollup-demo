(function (lodash) {
    'use strict';

    /*
     * @Author: xiaoliang.pan
     * @Date: 2022-04-02 16:31:24
     * @LastEditTime: 2022-04-02 16:55:38
     * @LastEditors: xiaoliang.pan
     * @Description:
     * @FilePath: /rollup_demo/src/sum.ts
     *
     */
    var sum = function sum(a, b) {
      return a + b;
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "body {\n    background-color: green;\n}";
    styleInject(css_248z);

    /*
     * @Author: xiaoliang.pan
     * @Date: 2022-04-02 11:35:06
     * @LastEditTime: 2022-04-02 17:30:38
     * @LastEditors: xiaoliang.pan
     * @Description:
     * @FilePath: /rollup_demo/src/index.ts
     *
     */
    console.log(sum(1, 2), "sum222");
    console.log(lodash.repeat("vilin", 12));

})(_);
