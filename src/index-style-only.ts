/* function pascalCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase());
} */

// @ts-ignore
const requireCxt = require.context('./src/components', true, /\/style\/index.[j|t]sx?$/);
/* const components: Component[] = [];
const componentMap: Record<string, Component> = {}; */
console.log(requireCxt.keys());
requireCxt.keys().forEach((item: string, index: number) => {
  const component = requireCxt(item);
  // components.push(component.default);
  // componentMap[component.default.name as string] = component;
});
module.exports = {
  a: 100,
};
/*

req.keys().forEach((mod) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v;
    } else {
      exports[pascalCase(match[1])] = v;
    }
  }
});

module.exports = exports; */
