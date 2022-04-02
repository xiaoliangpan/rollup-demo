/*
 * @Author: xiaoliang.pan
 * @Date: 2022-04-02 15:31:01
 * @LastEditTime: 2022-04-02 15:48:17
 * @LastEditors: xiaoliang.pan
 * @Description:
 * @FilePath: /rollup_demo/src/plugins/rollup-plugin-build.js
 *
 */
import fs from "fs";

function build() {
  return {
    name: "build",
    version: "2.3.3",
    async watchChange(id, change) {
      console.log("watchChange", change);
    },
    async closeWatcher() {
      console.log("closeWatcher");
    },
    async options(inputOptions) {
      console.log("options");
      //inputOptions.input = './src/main.js';
    },
    async buildStart(inputOptions) {
      console.log("buildStart");
    },
    async resolveId(source, importer) {
      console.log("resolveId", source);
      if (source === "virtual") {
        console.log("resolveId", source);
        //如果resolveId钩子有返回值了，那么就会跳过后面的查找逻辑，以此返回值作为最终的模块ID
        return source;
      }
    },
    //加载此模块ID对应的内容
    async load(id) {
      if (id === "virtual") {
        console.log("load", id);
        return `export default "virtual"`;
      }
    },
    async shouldTransformCachedModule({ id, code, ast }) {
      console.log("shouldTransformCachedModule");
      //不使用缓存，再次进行转换
      return true;
    },
    async transform(code, id) {
      console.log("transform", code?.slice(0, 22));
    },
    async moduleParsed(moduleInfo) {
      console.log("moduleParsed");
    },
    async resolveDynamicImport(specifier, importer) {
      console.log("resolveDynamicImport", specifier, importer);
    },
    async buildEnd() {
      console.log("buildEnd");
    },
  };
}
export default build;
