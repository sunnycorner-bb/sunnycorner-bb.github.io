const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return [
      ...(els.tags || []),
      ...(els.classes || []),
      ...(els.ids || []),
    ]
  },
  safelist: [
    'input[type="checkbox"]+label:before, input[type="radio"]+label:before',
    'input[type="checkbox"]+label:before'
  ]
});

module.exports = {
     plugins: [
       ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
     ]
 };
