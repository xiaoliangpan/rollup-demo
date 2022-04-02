/*
 * @Author: xiaoliang.pan
 * @Date: 2022-04-02 11:41:07
 * @LastEditTime: 2022-04-02 11:45:03
 * @LastEditors: xiaoliang.pan
 * @Description:
 * @FilePath: /rollup_demo/scripts/build.js
 *
 */
import { rollup, watch } from "rollup";
import options from "../rollup.config";

(async function () {
  const bundle = await rollup(options);
  await bundle.generate(options.output);

  await bundle.write(options.output);

  await bundle.close();
})();
