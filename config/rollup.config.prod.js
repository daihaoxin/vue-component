import config from './rollup.config';
import { terser } from 'rollup-plugin-terser';

// config.output.sourcemap = false;
// config.plugins = [...config.plugins, ...[terser()]];

export default config;
