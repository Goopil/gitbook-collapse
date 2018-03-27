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
        const title = blk.kwargs.title || '';
        const color = blk.kwargs.color || '';

        return this.renderBlock('markdown', blk.body).then(str => {
          return `
<div class="wrap-collabsible">
    <input id="collapsible" class="toggle" type="checkbox">
    <label for="collapsible" class="lbl-toggle ${color}">${title}</label>
    <div class="collapsible-content">
        <div class="content-inner">${str}</div>
    </div>
</div>`;
        })
      }
    }
  }
};
