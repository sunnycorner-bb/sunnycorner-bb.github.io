const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    throw new Error(els.tags.concat(els.classes, els.ids))
    return els.tags.concat(els.classes, els.ids);
  }
});

module.exports = {
     plugins: [
         ...(
           process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []
         )
     ]
 };
