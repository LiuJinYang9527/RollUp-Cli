
import json from "rollup-plugin-json" //支持从json文件里引入数据
import resolve from "@rollup/plugin-node-resolve" //支持导入其它npm包
import commonjs from "@rollup/plugin-node-resolve"//支持编译npm模块以及commonjs模块
import babel from "@rollup/plugin-babel" //babel转换es6代码
export default {
    input: "src/main.js", //入口文件
    //输出配置
    output: {
        file: "bundle.js",
        /**
         * String 生成包的格式。 下列之一:
            amd – 异步模块定义，用于像RequireJS这样的模块加载器
            cjs – CommonJS，适用于 Node 和 Browserify/Webpack
            esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
            iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
            umd – 通用模块定义，以amd，cjs 和 iife 为一体
            system - SystemJS 加载器格式
         */
        format: "umd", 
        name: "test",//String 变量名，代表你的 iife/umd 包，同一页上的其他脚本可以访问它。
    },
    //插件
    plugins: [
        json(),
        resolve(),
        commonjs(),
        babel()
    ],
    //那些库需要保持外部引用状态 即外部类库
    external:[
        "the-answer"
    ]
}