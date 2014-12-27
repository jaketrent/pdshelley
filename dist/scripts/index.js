(function (win) {

  var cx = (function () {
    var util = {}
    util.hasClass = function (ele, cls) {
      return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    util.addClass = function (ele, cls) {
      if (!util.hasClass(ele, cls)) ele.className += " " + cls;
    };

    util.removeClass = function (ele, cls) {
      if (util.hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
      }
    };

    util.toggleClass = function (ele, cls, toggle) {
      if (toggle)
        util.addClass(ele, cls);
      else
        util.removeClass(ele, cls);
    }

    return util;
  })();

  function toggleDrawer(evt) {
    var hasClass = cx.hasClass(evt.target, 'active');
    cx.toggleClass(evt.target, 'active', !hasClass);
    cx.toggleClass(document.querySelector('.topnav__drawer'), 'active', !hasClass);
  }

  document.querySelector('.topnav__burger').addEventListener('click', toggleDrawer);

})(window);
