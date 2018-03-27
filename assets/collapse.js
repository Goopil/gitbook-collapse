require(["gitbook"], function (gitbook) {
  gitbook.events.bind("page.change", function () {
    const labels = document.querySelectorAll('.lbl-toggle');
    for (let label in labels) {
      label.addEventListener('keydown', function (e) {
        if (e.which === 32 || e.which === 13) {
          e.preventDefault();
          label.click();
        }
      });
    }
  });
});