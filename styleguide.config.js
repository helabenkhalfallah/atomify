const path = require('path');

const {
  createConfig, babel, css, sass, match, file,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('webpack-blocks');

const pkg = require('./package.json');

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/lib/components/**/[A-Z]*.jsx',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib'),
  },
  ribbon: {
    url: 'https://github.com/KaiHotz/react-rollup-boilerplate',
    text: 'Fork me on GitHub',
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#065fd4',
      linkHover: '#00adef',
    },
    font: ['Helvetica', 'sans-serif'],
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage: 'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
      },
      link: {
        backgroundColor: '#065fd4',
      },
    },
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  webpackConfig: createConfig([
    babel(),
    css(),
    match(['*.scss', '!*node_modules*'], [
      css(),
      sass(/* node-sass options */),
    ]),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
      file(),
    ]),
  ]),
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from '${pkg.name}';`;
  },
};
