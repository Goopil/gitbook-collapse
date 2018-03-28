module.exports = {

  website: {
    assets: "./assets",
    js: [
      "collapse.js"
    ],
    css: [
      "collapse.css"
    ]
  },

  blocks: {
    collapse: {
      process: function (blk) {
        const processMarkDown = blk.kwargs.process !== false
        const title = blk.kwargs.title !== ''

        function format(body, summary) {
          const summary = sumary || ''
          const body = body || ''
          return '<details><summary>' + summary + '</summary>' + body + '</details>';
        }

        return processMarkDown === false ?
          format(body, title) :
          this.renderBlock('markdown', blk.body)
          .then(function (data) {
            return format(data, title)
          });
      }
    }
  }
};
