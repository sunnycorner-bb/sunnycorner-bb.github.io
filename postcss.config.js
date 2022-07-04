const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    throw new Error('DEBUG FOR DISABLE POSTCSS')
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
