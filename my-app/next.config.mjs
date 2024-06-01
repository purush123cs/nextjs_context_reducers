import withMarkdoc from '@markdoc/next.js';

export default withMarkdoc(/* Markdoc config/options */)({
  //Next configs
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});

//combine plugins
//https://github.com/vercel/next.js/discussions/40710