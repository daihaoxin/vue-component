import path from "path";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import config from "./rollup.config";
const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};
const PORT = 3001;

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    serve({
      port: PORT,
      // contentBase: [resolveFile('')]
      contentBase: [resolveFile("example"), resolveFile("dist"), resolveFile("lib")],
    }),
    /**
     * 说是热更，其实没什么卵用，慢的要死还不如 -w
     */
    livereload("dist"),
  ],
];

export default config;
