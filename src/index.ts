/*
 * @Author: xiaoliang.pan
 * @Date: 2022-04-02 11:35:06
 * @LastEditTime: 2022-04-02 17:30:38
 * @LastEditors: xiaoliang.pan
 * @Description:
 * @FilePath: /rollup_demo/src/index.ts
 *
 */
import { repeat } from "lodash";
import { say } from "./say";
import sum from "./sum";
import "./index.css";
export interface ItemData {
  name: string;
}
console.log(sum(1, 2), "sum222");
console.log(repeat("vilin", 12));
