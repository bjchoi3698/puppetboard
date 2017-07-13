// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = jQuery;

  $(function() {});

  if ($('th.default-sort').data()) {
    $('table.sortable').tablesort().data('tablesort').sort($("th.default-sort"), "desc");
  }

  $('thead th.date').data('sortBy', function(th, td, tablesort) {
    var tdTime = td.text().replace("-", "");
    return moment.utc(new Date(tdTime)).unix();
  });

  $('input.filter-table').parent('div').removeClass('hide');

  $("input.filter-table").on("keyup", function(e) {
    var ev, rex;
    rex = new RegExp($(this).val(), "i");
    $(".searchable tr").hide();
    $(".searchable tr").filter(function() {
      return rex.test($(this).text());
    }).show();
    if (e.keyCode === 27) {
      $(e.currentTarget).val("");
      ev = $.Event("keyup");
      ev.keyCode = 13;
      $(e.currentTarget).trigger(ev);
      return e.currentTarget.blur();
    }
  });

}).call(this);
