var e = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition",
];
var t = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate:
    "object" === typeof window &&
    -1 === window.navigator.userAgent.indexOf("MSIE"),
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function (e) {
    return "undefined" !== typeof console && console.warn(e);
  },
  getWeek: function (e) {
    var t = new Date(e.getTime());
    t.setHours(0, 0, 0, 0);
    t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
    var n = new Date(t.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((t.getTime() - n.getTime()) / 864e5 - 3 + ((n.getDay() + 6) % 7)) / 7
      )
    );
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow:
    "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow:
    "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false,
};
var n = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function (e) {
    var t = e % 100;
    if (t > 3 && t < 21) return "th";
    switch (t % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false,
};
var pad = function (e, t) {
  void 0 === t && (t = 2);
  return ("000" + e).slice(-1 * t);
};
var int = function (e) {
  return true === e ? 1 : 0;
};
function debounce(e, t) {
  var n;
  return function () {
    var a = this;
    var i = arguments;
    clearTimeout(n);
    n = setTimeout(function () {
      return e.apply(a, i);
    }, t);
  };
}
var arrayify = function (e) {
  return e instanceof Array ? e : [e];
};
function toggleClass(e, t, n) {
  if (true === n) return e.classList.add(t);
  e.classList.remove(t);
}
function createElement(e, t, n) {
  var a = window.document.createElement(e);
  t = t || "";
  n = n || "";
  a.className = t;
  void 0 !== n && (a.textContent = n);
  return a;
}
function clearNode(e) {
  while (e.firstChild) e.removeChild(e.firstChild);
}
function findParent(e, t) {
  return t(e) ? e : e.parentNode ? findParent(e.parentNode, t) : void 0;
}
function createNumberInput(e, t) {
  var n = createElement("div", "numInputWrapper"),
    a = createElement("input", "numInput " + e),
    i = createElement("span", "arrowUp"),
    r = createElement("span", "arrowDown");
  if (-1 === navigator.userAgent.indexOf("MSIE 9.0")) a.type = "number";
  else {
    a.type = "text";
    a.pattern = "\\d*";
  }
  if (void 0 !== t) for (var o in t) a.setAttribute(o, t[o]);
  n.appendChild(a);
  n.appendChild(i);
  n.appendChild(r);
  return n;
}
function getEventTarget(e) {
  try {
    if ("function" === typeof e.composedPath) {
      var t = e.composedPath();
      return t[0];
    }
    return e.target;
  } catch (t) {
    return e.target;
  }
}
var doNothing = function () {};
var monthToStr = function (e, t, n) {
  return n.months[t ? "shorthand" : "longhand"][e];
};
var a = {
  D: doNothing,
  F: function (e, t, n) {
    e.setMonth(n.months.longhand.indexOf(t));
  },
  G: function (e, t) {
    e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  H: function (e, t) {
    e.setHours(parseFloat(t));
  },
  J: function (e, t) {
    e.setDate(parseFloat(t));
  },
  K: function (e, t, n) {
    e.setHours(
      (e.getHours() % 12) + 12 * int(new RegExp(n.amPM[1], "i").test(t))
    );
  },
  M: function (e, t, n) {
    e.setMonth(n.months.shorthand.indexOf(t));
  },
  S: function (e, t) {
    e.setSeconds(parseFloat(t));
  },
  U: function (e, t) {
    return new Date(1e3 * parseFloat(t));
  },
  W: function (e, t, n) {
    var a = parseInt(t);
    var i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
    i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek);
    return i;
  },
  Y: function (e, t) {
    e.setFullYear(parseFloat(t));
  },
  Z: function (e, t) {
    return new Date(t);
  },
  d: function (e, t) {
    e.setDate(parseFloat(t));
  },
  h: function (e, t) {
    e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  i: function (e, t) {
    e.setMinutes(parseFloat(t));
  },
  j: function (e, t) {
    e.setDate(parseFloat(t));
  },
  l: doNothing,
  m: function (e, t) {
    e.setMonth(parseFloat(t) - 1);
  },
  n: function (e, t) {
    e.setMonth(parseFloat(t) - 1);
  },
  s: function (e, t) {
    e.setSeconds(parseFloat(t));
  },
  u: function (e, t) {
    return new Date(parseFloat(t));
  },
  w: doNothing,
  y: function (e, t) {
    e.setFullYear(2e3 + parseFloat(t));
  },
};
var i = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})",
};
var r = {
  Z: function (e) {
    return e.toISOString();
  },
  D: function (e, t, n) {
    return t.weekdays.shorthand[r.w(e, t, n)];
  },
  F: function (e, t, n) {
    return monthToStr(r.n(e, t, n) - 1, false, t);
  },
  G: function (e, t, n) {
    return pad(r.h(e, t, n));
  },
  H: function (e) {
    return pad(e.getHours());
  },
  J: function (e, t) {
    return void 0 !== t.ordinal
      ? e.getDate() + t.ordinal(e.getDate())
      : e.getDate();
  },
  K: function (e, t) {
    return t.amPM[int(e.getHours() > 11)];
  },
  M: function (e, t) {
    return monthToStr(e.getMonth(), true, t);
  },
  S: function (e) {
    return pad(e.getSeconds());
  },
  U: function (e) {
    return e.getTime() / 1e3;
  },
  W: function (e, t, n) {
    return n.getWeek(e);
  },
  Y: function (e) {
    return pad(e.getFullYear(), 4);
  },
  d: function (e) {
    return pad(e.getDate());
  },
  h: function (e) {
    return e.getHours() % 12 ? e.getHours() % 12 : 12;
  },
  i: function (e) {
    return pad(e.getMinutes());
  },
  j: function (e) {
    return e.getDate();
  },
  l: function (e, t) {
    return t.weekdays.longhand[e.getDay()];
  },
  m: function (e) {
    return pad(e.getMonth() + 1);
  },
  n: function (e) {
    return e.getMonth() + 1;
  },
  s: function (e) {
    return e.getSeconds();
  },
  u: function (e) {
    return e.getTime();
  },
  w: function (e) {
    return e.getDay();
  },
  y: function (e) {
    return String(e.getFullYear()).substring(2);
  },
};
var createDateFormatter = function (e) {
  var a = e.config,
    i = void 0 === a ? t : a,
    o = e.l10n,
    l = void 0 === o ? n : o,
    c = e.isMobile,
    s = void 0 !== c && c;
  return function (e, t, n) {
    var a = n || l;
    return void 0 === i.formatDate || s
      ? t
          .split("")
          .map(function (t, n, o) {
            return r[t] && "\\" !== o[n - 1]
              ? r[t](e, a, i)
              : "\\" !== t
              ? t
              : "";
          })
          .join("")
      : i.formatDate(e, t, a);
  };
};
var createDateParser = function (e) {
  var r = e.config,
    o = void 0 === r ? t : r,
    l = e.l10n,
    c = void 0 === l ? n : l;
  return function (e, n, r, l) {
    if (0 === e || e) {
      var s = l || c;
      var u;
      var d = e;
      if (e instanceof Date) u = new Date(e.getTime());
      else if ("string" !== typeof e && void 0 !== e.toFixed) u = new Date(e);
      else if ("string" === typeof e) {
        var f = n || (o || t).dateFormat;
        var m = String(e).trim();
        if ("today" === m) {
          u = new Date();
          r = true;
        } else if (o && o.parseDate) u = o.parseDate(e, f);
        else if (/Z$/.test(m) || /GMT$/.test(m)) u = new Date(e);
        else {
          var g = void 0,
            p = [];
          for (var h = 0, v = 0, D = ""; h < f.length; h++) {
            var b = f[h];
            var C = "\\" === b;
            var y = "\\" === f[h - 1] || C;
            if (i[b] && !y) {
              D += i[b];
              var M = new RegExp(D).exec(e);
              M &&
                (g = true) &&
                p["Y" !== b ? "push" : "unshift"]({ fn: a[b], val: M[++v] });
            } else C || (D += ".");
          }
          u =
            o && o.noCalendar
              ? new Date(new Date().setHours(0, 0, 0, 0))
              : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
          p.forEach(function (e) {
            var t = e.fn,
              n = e.val;
            return (u = t(u, n, s) || u);
          });
          u = g ? u : void 0;
        }
      }
      if (u instanceof Date && !isNaN(u.getTime())) {
        true === r && u.setHours(0, 0, 0, 0);
        return u;
      }
      o.errorHandler(new Error("Invalid date provided: " + d));
    }
  };
};
function compareDates(e, t, n) {
  void 0 === n && (n = true);
  return false !== n
    ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
        new Date(t.getTime()).setHours(0, 0, 0, 0)
    : e.getTime() - t.getTime();
}
var isBetween = function (e, t, n) {
  return e > Math.min(t, n) && e < Math.max(t, n);
};
var calculateSecondsSinceMidnight = function (e, t, n) {
  return 3600 * e + 60 * t + n;
};
var parseSeconds = function (e) {
  var t = Math.floor(e / 3600),
    n = (e - 3600 * t) / 60;
  return [t, n, e - 3600 * t - 60 * n];
};
var o = { DAY: 864e5 };
function getDefaultHours(e) {
  var t = e.defaultHour;
  var n = e.defaultMinute;
  var a = e.defaultSeconds;
  if (void 0 !== e.minDate) {
    var i = e.minDate.getHours();
    var r = e.minDate.getMinutes();
    var o = e.minDate.getSeconds();
    t < i && (t = i);
    t === i && n < r && (n = r);
    t === i && n === r && a < o && (a = e.minDate.getSeconds());
  }
  if (void 0 !== e.maxDate) {
    var l = e.maxDate.getHours();
    var c = e.maxDate.getMinutes();
    t = Math.min(t, l);
    t === l && (n = Math.min(c, n));
    t === l && n === c && (a = e.maxDate.getSeconds());
  }
  return { hours: t, minutes: n, seconds: a };
}
"function" !== typeof Object.assign &&
  (Object.assign = function (e) {
    var t = [];
    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (!e) throw TypeError("Cannot convert undefined or null to object");
    var _loop_1 = function (t) {
      t &&
        Object.keys(t).forEach(function (n) {
          return (e[n] = t[n]);
        });
    };
    for (var a = 0, i = t; a < i.length; a++) {
      var r = i[a];
      _loop_1(r);
    }
    return e;
  });
var l =
  (void 0,
  function () {
    l =
      Object.assign ||
      function (e) {
        for (var t, n = 1, a = arguments.length; n < a; n++) {
          t = arguments[n];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      };
    return l.apply(this, arguments);
  });
var c =
  (void 0,
  function () {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    var a = Array(e),
      i = 0;
    for (t = 0; t < n; t++)
      for (var r = arguments[t], o = 0, l = r.length; o < l; o++, i++)
        a[i] = r[o];
    return a;
  });
var s = 300;
function FlatpickrInstance(a, r) {
  var u = { config: l(l({}, t), flatpickr.defaultConfig), l10n: n };
  u.parseDate = createDateParser({ config: u.config, l10n: u.l10n });
  u._handlers = [];
  u.pluginElements = [];
  u.loadedPlugins = [];
  u._bind = bind;
  u._setHoursFromDate = setHoursFromDate;
  u._positionCalendar = positionCalendar;
  u.changeMonth = changeMonth;
  u.changeYear = changeYear;
  u.clear = clear;
  u.close = close;
  u.onMouseOver = onMouseOver;
  u._createElement = createElement;
  u.createDay = createDay;
  u.destroy = destroy;
  u.isEnabled = isEnabled;
  u.jumpToDate = jumpToDate;
  u.updateValue = updateValue;
  u.open = open;
  u.redraw = redraw;
  u.set = set;
  u.setDate = setDate;
  u.toggle = toggle;
  function setupHelperFunctions() {
    u.utils = {
      getDaysInMonth: function (e, t) {
        void 0 === e && (e = u.currentMonth);
        void 0 === t && (t = u.currentYear);
        return 1 === e && ((t % 4 === 0 && t % 100 !== 0) || t % 400 === 0)
          ? 29
          : u.l10n.daysInMonth[e];
      },
    };
  }
  function init() {
    u.element = u.input = a;
    u.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    u.isMobile || build();
    bindEvents();
    if (u.selectedDates.length || u.config.noCalendar) {
      u.config.enableTime &&
        setHoursFromDate(
          u.config.noCalendar ? u.latestSelectedDateObj : void 0
        );
      updateValue(false);
    }
    setCalendarWidth();
    var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !u.isMobile && e && positionCalendar();
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var e;
    return (
      (null === (e = u.calendarContainer) || void 0 === e
        ? void 0
        : e.getRootNode()
      ).activeElement || document.activeElement
    );
  }
  function bindToInstance(e) {
    return e.bind(u);
  }
  function setCalendarWidth() {
    var e = u.config;
    (false === e.weekNumbers && 1 === e.showMonths) ||
      (true !== e.noCalendar &&
        window.requestAnimationFrame(function () {
          if (void 0 !== u.calendarContainer) {
            u.calendarContainer.style.visibility = "hidden";
            u.calendarContainer.style.display = "block";
          }
          if (void 0 !== u.daysContainer) {
            var t = (u.days.offsetWidth + 1) * e.showMonths;
            u.daysContainer.style.width = t + "px";
            u.calendarContainer.style.width =
              t +
              (void 0 !== u.weekWrapper ? u.weekWrapper.offsetWidth : 0) +
              "px";
            u.calendarContainer.style.removeProperty("visibility");
            u.calendarContainer.style.removeProperty("display");
          }
        }));
  }
  function updateTime(e) {
    if (0 === u.selectedDates.length) {
      var t =
        void 0 === u.config.minDate ||
        compareDates(new Date(), u.config.minDate) >= 0
          ? new Date()
          : new Date(u.config.minDate.getTime());
      var n = getDefaultHours(u.config);
      t.setHours(n.hours, n.minutes, n.seconds, t.getMilliseconds());
      u.selectedDates = [t];
      u.latestSelectedDateObj = t;
    }
    void 0 !== e && "blur" !== e.type && timeWrapper(e);
    var a = u._input.value;
    setHoursFromInputs();
    updateValue();
    u._input.value !== a && u._debouncedChange();
  }
  function ampm2military(e, t) {
    return (e % 12) + 12 * int(t === u.l10n.amPM[1]);
  }
  function military2ampm(e) {
    switch (e % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return e % 12;
    }
  }
  function setHoursFromInputs() {
    if (void 0 !== u.hourElement && void 0 !== u.minuteElement) {
      var e = (parseInt(u.hourElement.value.slice(-2), 10) || 0) % 24,
        t = (parseInt(u.minuteElement.value, 10) || 0) % 60,
        n =
          void 0 !== u.secondElement
            ? (parseInt(u.secondElement.value, 10) || 0) % 60
            : 0;
      void 0 !== u.amPM && (e = ampm2military(e, u.amPM.textContent));
      var a =
        void 0 !== u.config.minTime ||
        (u.config.minDate &&
          u.minDateHasTime &&
          u.latestSelectedDateObj &&
          0 === compareDates(u.latestSelectedDateObj, u.config.minDate, true));
      var i =
        void 0 !== u.config.maxTime ||
        (u.config.maxDate &&
          u.maxDateHasTime &&
          u.latestSelectedDateObj &&
          0 === compareDates(u.latestSelectedDateObj, u.config.maxDate, true));
      if (
        void 0 !== u.config.maxTime &&
        void 0 !== u.config.minTime &&
        u.config.minTime > u.config.maxTime
      ) {
        var r = calculateSecondsSinceMidnight(
          u.config.minTime.getHours(),
          u.config.minTime.getMinutes(),
          u.config.minTime.getSeconds()
        );
        var o = calculateSecondsSinceMidnight(
          u.config.maxTime.getHours(),
          u.config.maxTime.getMinutes(),
          u.config.maxTime.getSeconds()
        );
        var l = calculateSecondsSinceMidnight(e, t, n);
        if (l > o && l < r) {
          var c = parseSeconds(r);
          e = c[0];
          t = c[1];
          n = c[2];
        }
      } else {
        if (i) {
          var s =
            void 0 !== u.config.maxTime ? u.config.maxTime : u.config.maxDate;
          e = Math.min(e, s.getHours());
          e === s.getHours() && (t = Math.min(t, s.getMinutes()));
          t === s.getMinutes() && (n = Math.min(n, s.getSeconds()));
        }
        if (a) {
          var d =
            void 0 !== u.config.minTime ? u.config.minTime : u.config.minDate;
          e = Math.max(e, d.getHours());
          e === d.getHours() && t < d.getMinutes() && (t = d.getMinutes());
          t === d.getMinutes() && (n = Math.max(n, d.getSeconds()));
        }
      }
      setHours(e, t, n);
    }
  }
  function setHoursFromDate(e) {
    var t = e || u.latestSelectedDateObj;
    t &&
      t instanceof Date &&
      setHours(t.getHours(), t.getMinutes(), t.getSeconds());
  }
  function setHours(e, t, n) {
    void 0 !== u.latestSelectedDateObj &&
      u.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0);
    if (u.hourElement && u.minuteElement && !u.isMobile) {
      u.hourElement.value = pad(
        u.config.time_24hr ? e : ((12 + e) % 12) + 12 * int(e % 12 === 0)
      );
      u.minuteElement.value = pad(t);
      void 0 !== u.amPM && (u.amPM.textContent = u.l10n.amPM[int(e >= 12)]);
      void 0 !== u.secondElement && (u.secondElement.value = pad(n));
    }
  }
  function onYearInput(e) {
    var t = getEventTarget(e);
    var n = parseInt(t.value) + (e.delta || 0);
    (n / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(n.toString()))) &&
      changeYear(n);
  }
  function bind(e, t, n, a) {
    if (t instanceof Array)
      return t.forEach(function (t) {
        return bind(e, t, n, a);
      });
    if (e instanceof Array)
      return e.forEach(function (e) {
        return bind(e, t, n, a);
      });
    e.addEventListener(t, n, a);
    u._handlers.push({
      remove: function () {
        return e.removeEventListener(t, n, a);
      },
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    u.config.wrap &&
      ["open", "close", "toggle", "clear"].forEach(function (e) {
        Array.prototype.forEach.call(
          u.element.querySelectorAll("[data-" + e + "]"),
          function (t) {
            return bind(t, "click", u[e]);
          }
        );
      });
    if (u.isMobile) setupMobile();
    else {
      var e = debounce(onResize, 50);
      u._debouncedChange = debounce(triggerChange, s);
      u.daysContainer &&
        !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        bind(u.daysContainer, "mouseover", function (e) {
          "range" === u.config.mode && onMouseOver(getEventTarget(e));
        });
      bind(u._input, "keydown", onKeyDown);
      void 0 !== u.calendarContainer &&
        bind(u.calendarContainer, "keydown", onKeyDown);
      u.config.inline || u.config.static || bind(window, "resize", e);
      void 0 !== window.ontouchstart
        ? bind(window.document, "touchstart", documentClick)
        : bind(window.document, "mousedown", documentClick);
      bind(window.document, "focus", documentClick, { capture: true });
      if (true === u.config.clickOpens) {
        bind(u._input, "focus", u.open);
        bind(u._input, "click", u.open);
      }
      if (void 0 !== u.daysContainer) {
        bind(u.monthNav, "click", onMonthNavClick);
        bind(u.monthNav, ["keyup", "increment"], onYearInput);
        bind(u.daysContainer, "click", selectDate);
      }
      if (
        void 0 !== u.timeContainer &&
        void 0 !== u.minuteElement &&
        void 0 !== u.hourElement
      ) {
        var selText = function (e) {
          return getEventTarget(e).select();
        };
        bind(u.timeContainer, ["increment"], updateTime);
        bind(u.timeContainer, "blur", updateTime, { capture: true });
        bind(u.timeContainer, "click", timeIncrement);
        bind([u.hourElement, u.minuteElement], ["focus", "click"], selText);
        void 0 !== u.secondElement &&
          bind(u.secondElement, "focus", function () {
            return u.secondElement && u.secondElement.select();
          });
        void 0 !== u.amPM &&
          bind(u.amPM, "click", function (e) {
            updateTime(e);
          });
      }
      u.config.allowInput && bind(u._input, "blur", onBlur);
    }
  }
  function jumpToDate(e, t) {
    var n =
      void 0 !== e
        ? u.parseDate(e)
        : u.latestSelectedDateObj ||
          (u.config.minDate && u.config.minDate > u.now
            ? u.config.minDate
            : u.config.maxDate && u.config.maxDate < u.now
            ? u.config.maxDate
            : u.now);
    var a = u.currentYear;
    var i = u.currentMonth;
    try {
      if (void 0 !== n) {
        u.currentYear = n.getFullYear();
        u.currentMonth = n.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + n;
      u.config.errorHandler(e);
    }
    if (t && u.currentYear !== a) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    !t ||
      (u.currentYear === a && u.currentMonth === i) ||
      triggerEvent("onMonthChange");
    u.redraw();
  }
  function timeIncrement(e) {
    var t = getEventTarget(e);
    ~t.className.indexOf("arrow") &&
      incrementNumInput(e, t.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, t, n) {
    var a = e && getEventTarget(e);
    var i = n || (a && a.parentNode && a.parentNode.firstChild);
    var r = createEvent("increment");
    r.delta = t;
    i && i.dispatchEvent(r);
  }
  function build() {
    var e = window.document.createDocumentFragment();
    u.calendarContainer = createElement("div", "flatpickr-calendar");
    u.calendarContainer.tabIndex = -1;
    if (!u.config.noCalendar) {
      e.appendChild(buildMonthNav());
      u.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (u.config.weekNumbers) {
        var t = buildWeeks(),
          n = t.weekWrapper,
          a = t.weekNumbers;
        u.innerContainer.appendChild(n);
        u.weekNumbers = a;
        u.weekWrapper = n;
      }
      u.rContainer = createElement("div", "flatpickr-rContainer");
      u.rContainer.appendChild(buildWeekdays());
      if (!u.daysContainer) {
        u.daysContainer = createElement("div", "flatpickr-days");
        u.daysContainer.tabIndex = -1;
      }
      buildDays();
      u.rContainer.appendChild(u.daysContainer);
      u.innerContainer.appendChild(u.rContainer);
      e.appendChild(u.innerContainer);
    }
    u.config.enableTime && e.appendChild(buildTime());
    toggleClass(u.calendarContainer, "rangeMode", "range" === u.config.mode);
    toggleClass(u.calendarContainer, "animate", true === u.config.animate);
    toggleClass(u.calendarContainer, "multiMonth", u.config.showMonths > 1);
    u.calendarContainer.appendChild(e);
    var i =
      void 0 !== u.config.appendTo && void 0 !== u.config.appendTo.nodeType;
    if (u.config.inline || u.config.static) {
      u.calendarContainer.classList.add(u.config.inline ? "inline" : "static");
      u.config.inline &&
        (!i && u.element.parentNode
          ? u.element.parentNode.insertBefore(
              u.calendarContainer,
              u._input.nextSibling
            )
          : void 0 !== u.config.appendTo &&
            u.config.appendTo.appendChild(u.calendarContainer));
      if (u.config.static) {
        var r = createElement("div", "flatpickr-wrapper");
        u.element.parentNode && u.element.parentNode.insertBefore(r, u.element);
        r.appendChild(u.element);
        u.altInput && r.appendChild(u.altInput);
        r.appendChild(u.calendarContainer);
      }
    }
    u.config.static ||
      u.config.inline ||
      (void 0 !== u.config.appendTo
        ? u.config.appendTo
        : window.document.body
      ).appendChild(u.calendarContainer);
  }
  function createDay(e, t, n, a) {
    var i = isEnabled(t, true),
      r = createElement("span", e, t.getDate().toString());
    r.dateObj = t;
    r.$i = a;
    r.setAttribute("aria-label", u.formatDate(t, u.config.ariaDateFormat));
    if (-1 === e.indexOf("hidden") && 0 === compareDates(t, u.now)) {
      u.todayDateElem = r;
      r.classList.add("today");
      r.setAttribute("aria-current", "date");
    }
    if (i) {
      r.tabIndex = -1;
      if (isDateSelected(t)) {
        r.classList.add("selected");
        u.selectedDateElem = r;
        if ("range" === u.config.mode) {
          toggleClass(
            r,
            "startRange",
            u.selectedDates[0] &&
              0 === compareDates(t, u.selectedDates[0], true)
          );
          toggleClass(
            r,
            "endRange",
            u.selectedDates[1] &&
              0 === compareDates(t, u.selectedDates[1], true)
          );
          "nextMonthDay" === e && r.classList.add("inRange");
        }
      }
    } else r.classList.add("flatpickr-disabled");
    "range" === u.config.mode &&
      isDateInRange(t) &&
      !isDateSelected(t) &&
      r.classList.add("inRange");
    u.weekNumbers &&
      1 === u.config.showMonths &&
      "prevMonthDay" !== e &&
      a % 7 === 6 &&
      u.weekNumbers.insertAdjacentHTML(
        "beforeend",
        "<span class='flatpickr-day'>" + u.config.getWeek(t) + "</span>"
      );
    triggerEvent("onDayCreate", r);
    return r;
  }
  function focusOnDayElem(e) {
    e.focus();
    "range" === u.config.mode && onMouseOver(e);
  }
  function getFirstAvailableDay(e) {
    var t = e > 0 ? 0 : u.config.showMonths - 1;
    var n = e > 0 ? u.config.showMonths : -1;
    for (var a = t; a != n; a += e) {
      var i = u.daysContainer.children[a];
      var r = e > 0 ? 0 : i.children.length - 1;
      var o = e > 0 ? i.children.length : -1;
      for (var l = r; l != o; l += e) {
        var c = i.children[l];
        if (-1 === c.className.indexOf("hidden") && isEnabled(c.dateObj))
          return c;
      }
    }
  }
  function getNextAvailableDay(e, t) {
    var n =
      -1 === e.className.indexOf("Month")
        ? e.dateObj.getMonth()
        : u.currentMonth;
    var a = t > 0 ? u.config.showMonths : -1;
    var i = t > 0 ? 1 : -1;
    for (var r = n - u.currentMonth; r != a; r += i) {
      var o = u.daysContainer.children[r];
      var l =
        n - u.currentMonth === r ? e.$i + t : t < 0 ? o.children.length - 1 : 0;
      var c = o.children.length;
      for (var s = l; s >= 0 && s < c && s != (t > 0 ? c : -1); s += i) {
        var d = o.children[s];
        if (
          -1 === d.className.indexOf("hidden") &&
          isEnabled(d.dateObj) &&
          Math.abs(e.$i - s) >= Math.abs(t)
        )
          return focusOnDayElem(d);
      }
    }
    u.changeMonth(i);
    focusOnDay(getFirstAvailableDay(i), 0);
  }
  function focusOnDay(e, t) {
    var n = getClosestActiveElement();
    var a = isInView(n || document.body);
    var i =
      void 0 !== e
        ? e
        : a
        ? n
        : void 0 !== u.selectedDateElem && isInView(u.selectedDateElem)
        ? u.selectedDateElem
        : void 0 !== u.todayDateElem && isInView(u.todayDateElem)
        ? u.todayDateElem
        : getFirstAvailableDay(t > 0 ? 1 : -1);
    void 0 === i
      ? u._input.focus()
      : a
      ? getNextAvailableDay(i, t)
      : focusOnDayElem(i);
  }
  function buildMonthDays(e, t) {
    var n = (new Date(e, t, 1).getDay() - u.l10n.firstDayOfWeek + 7) % 7;
    var a = u.utils.getDaysInMonth((t - 1 + 12) % 12, e);
    var i = u.utils.getDaysInMonth(t, e),
      r = window.document.createDocumentFragment(),
      o = u.config.showMonths > 1,
      l = o ? "prevMonthDay hidden" : "prevMonthDay",
      c = o ? "nextMonthDay hidden" : "nextMonthDay";
    var s = a + 1 - n,
      d = 0;
    for (; s <= a; s++, d++)
      r.appendChild(
        createDay("flatpickr-day " + l, new Date(e, t - 1, s), s, d)
      );
    for (s = 1; s <= i; s++, d++)
      r.appendChild(createDay("flatpickr-day", new Date(e, t, s), s, d));
    for (
      var f = i + 1;
      f <= 42 - n && (1 === u.config.showMonths || d % 7 !== 0);
      f++, d++
    )
      r.appendChild(
        createDay("flatpickr-day " + c, new Date(e, t + 1, f % i), f, d)
      );
    var m = createElement("div", "dayContainer");
    m.appendChild(r);
    return m;
  }
  function buildDays() {
    if (void 0 !== u.daysContainer) {
      clearNode(u.daysContainer);
      u.weekNumbers && clearNode(u.weekNumbers);
      var e = document.createDocumentFragment();
      for (var t = 0; t < u.config.showMonths; t++) {
        var n = new Date(u.currentYear, u.currentMonth, 1);
        n.setMonth(u.currentMonth + t);
        e.appendChild(buildMonthDays(n.getFullYear(), n.getMonth()));
      }
      u.daysContainer.appendChild(e);
      u.days = u.daysContainer.firstChild;
      "range" === u.config.mode &&
        1 === u.selectedDates.length &&
        onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (
      !(u.config.showMonths > 1 || "dropdown" !== u.config.monthSelectorType)
    ) {
      var shouldBuildMonth = function (e) {
        return (
          !(
            void 0 !== u.config.minDate &&
            u.currentYear === u.config.minDate.getFullYear() &&
            e < u.config.minDate.getMonth()
          ) &&
          !(
            void 0 !== u.config.maxDate &&
            u.currentYear === u.config.maxDate.getFullYear() &&
            e > u.config.maxDate.getMonth()
          )
        );
      };
      u.monthsDropdownContainer.tabIndex = -1;
      u.monthsDropdownContainer.innerHTML = "";
      for (var e = 0; e < 12; e++)
        if (shouldBuildMonth(e)) {
          var t = createElement("option", "flatpickr-monthDropdown-month");
          t.value = new Date(u.currentYear, e).getMonth().toString();
          t.textContent = monthToStr(e, u.config.shorthandCurrentMonth, u.l10n);
          t.tabIndex = -1;
          u.currentMonth === e && (t.selected = true);
          u.monthsDropdownContainer.appendChild(t);
        }
    }
  }
  function buildMonth() {
    var e = createElement("div", "flatpickr-month");
    var t = window.document.createDocumentFragment();
    var n;
    if (u.config.showMonths > 1 || "static" === u.config.monthSelectorType)
      n = createElement("span", "cur-month");
    else {
      u.monthsDropdownContainer = createElement(
        "select",
        "flatpickr-monthDropdown-months"
      );
      u.monthsDropdownContainer.setAttribute(
        "aria-label",
        u.l10n.monthAriaLabel
      );
      bind(u.monthsDropdownContainer, "change", function (e) {
        var t = getEventTarget(e);
        var n = parseInt(t.value, 10);
        u.changeMonth(n - u.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      n = u.monthsDropdownContainer;
    }
    var a = createNumberInput("cur-year", { tabindex: "-1" });
    var i = a.getElementsByTagName("input")[0];
    i.setAttribute("aria-label", u.l10n.yearAriaLabel);
    u.config.minDate &&
      i.setAttribute("min", u.config.minDate.getFullYear().toString());
    if (u.config.maxDate) {
      i.setAttribute("max", u.config.maxDate.getFullYear().toString());
      i.disabled =
        !!u.config.minDate &&
        u.config.minDate.getFullYear() === u.config.maxDate.getFullYear();
    }
    var r = createElement("div", "flatpickr-current-month");
    r.appendChild(n);
    r.appendChild(a);
    t.appendChild(r);
    e.appendChild(t);
    return { container: e, yearElement: i, monthElement: n };
  }
  function buildMonths() {
    clearNode(u.monthNav);
    u.monthNav.appendChild(u.prevMonthNav);
    if (u.config.showMonths) {
      u.yearElements = [];
      u.monthElements = [];
    }
    for (var e = u.config.showMonths; e--; ) {
      var t = buildMonth();
      u.yearElements.push(t.yearElement);
      u.monthElements.push(t.monthElement);
      u.monthNav.appendChild(t.container);
    }
    u.monthNav.appendChild(u.nextMonthNav);
  }
  function buildMonthNav() {
    u.monthNav = createElement("div", "flatpickr-months");
    u.yearElements = [];
    u.monthElements = [];
    u.prevMonthNav = createElement("span", "flatpickr-prev-month");
    u.prevMonthNav.innerHTML = u.config.prevArrow;
    u.nextMonthNav = createElement("span", "flatpickr-next-month");
    u.nextMonthNav.innerHTML = u.config.nextArrow;
    buildMonths();
    Object.defineProperty(u, "_hidePrevMonthArrow", {
      get: function () {
        return u.__hidePrevMonthArrow;
      },
      set: function (e) {
        if (u.__hidePrevMonthArrow !== e) {
          toggleClass(u.prevMonthNav, "flatpickr-disabled", e);
          u.__hidePrevMonthArrow = e;
        }
      },
    });
    Object.defineProperty(u, "_hideNextMonthArrow", {
      get: function () {
        return u.__hideNextMonthArrow;
      },
      set: function (e) {
        if (u.__hideNextMonthArrow !== e) {
          toggleClass(u.nextMonthNav, "flatpickr-disabled", e);
          u.__hideNextMonthArrow = e;
        }
      },
    });
    u.currentYearElement = u.yearElements[0];
    updateNavigationCurrentMonth();
    return u.monthNav;
  }
  function buildTime() {
    u.calendarContainer.classList.add("hasTime");
    u.config.noCalendar && u.calendarContainer.classList.add("noCalendar");
    var e = getDefaultHours(u.config);
    u.timeContainer = createElement("div", "flatpickr-time");
    u.timeContainer.tabIndex = -1;
    var t = createElement("span", "flatpickr-time-separator", ":");
    var n = createNumberInput("flatpickr-hour", {
      "aria-label": u.l10n.hourAriaLabel,
    });
    u.hourElement = n.getElementsByTagName("input")[0];
    var a = createNumberInput("flatpickr-minute", {
      "aria-label": u.l10n.minuteAriaLabel,
    });
    u.minuteElement = a.getElementsByTagName("input")[0];
    u.hourElement.tabIndex = u.minuteElement.tabIndex = -1;
    u.hourElement.value = pad(
      u.latestSelectedDateObj
        ? u.latestSelectedDateObj.getHours()
        : u.config.time_24hr
        ? e.hours
        : military2ampm(e.hours)
    );
    u.minuteElement.value = pad(
      u.latestSelectedDateObj ? u.latestSelectedDateObj.getMinutes() : e.minutes
    );
    u.hourElement.setAttribute("step", u.config.hourIncrement.toString());
    u.minuteElement.setAttribute("step", u.config.minuteIncrement.toString());
    u.hourElement.setAttribute("min", u.config.time_24hr ? "0" : "1");
    u.hourElement.setAttribute("max", u.config.time_24hr ? "23" : "12");
    u.hourElement.setAttribute("maxlength", "2");
    u.minuteElement.setAttribute("min", "0");
    u.minuteElement.setAttribute("max", "59");
    u.minuteElement.setAttribute("maxlength", "2");
    u.timeContainer.appendChild(n);
    u.timeContainer.appendChild(t);
    u.timeContainer.appendChild(a);
    u.config.time_24hr && u.timeContainer.classList.add("time24hr");
    if (u.config.enableSeconds) {
      u.timeContainer.classList.add("hasSeconds");
      var i = createNumberInput("flatpickr-second");
      u.secondElement = i.getElementsByTagName("input")[0];
      u.secondElement.value = pad(
        u.latestSelectedDateObj
          ? u.latestSelectedDateObj.getSeconds()
          : e.seconds
      );
      u.secondElement.setAttribute(
        "step",
        u.minuteElement.getAttribute("step")
      );
      u.secondElement.setAttribute("min", "0");
      u.secondElement.setAttribute("max", "59");
      u.secondElement.setAttribute("maxlength", "2");
      u.timeContainer.appendChild(
        createElement("span", "flatpickr-time-separator", ":")
      );
      u.timeContainer.appendChild(i);
    }
    if (!u.config.time_24hr) {
      u.amPM = createElement(
        "span",
        "flatpickr-am-pm",
        u.l10n.amPM[
          int(
            (u.latestSelectedDateObj
              ? u.hourElement.value
              : u.config.defaultHour) > 11
          )
        ]
      );
      u.amPM.title = u.l10n.toggleTitle;
      u.amPM.tabIndex = -1;
      u.timeContainer.appendChild(u.amPM);
    }
    return u.timeContainer;
  }
  function buildWeekdays() {
    u.weekdayContainer
      ? clearNode(u.weekdayContainer)
      : (u.weekdayContainer = createElement("div", "flatpickr-weekdays"));
    for (var e = u.config.showMonths; e--; ) {
      var t = createElement("div", "flatpickr-weekdaycontainer");
      u.weekdayContainer.appendChild(t);
    }
    updateWeekdays();
    return u.weekdayContainer;
  }
  function updateWeekdays() {
    if (u.weekdayContainer) {
      var e = u.l10n.firstDayOfWeek;
      var t = c(u.l10n.weekdays.shorthand);
      e > 0 && e < t.length && (t = c(t.splice(e, t.length), t.splice(0, e)));
      for (var n = u.config.showMonths; n--; )
        u.weekdayContainer.children[n].innerHTML =
          "\n      <span class='flatpickr-weekday'>\n        " +
          t.join("</span><span class='flatpickr-weekday'>") +
          "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    u.calendarContainer.classList.add("hasWeeks");
    var e = createElement("div", "flatpickr-weekwrapper");
    e.appendChild(
      createElement("span", "flatpickr-weekday", u.l10n.weekAbbreviation)
    );
    var t = createElement("div", "flatpickr-weeks");
    e.appendChild(t);
    return { weekWrapper: e, weekNumbers: t };
  }
  function changeMonth(e, t) {
    void 0 === t && (t = true);
    var n = t ? e : e - u.currentMonth;
    if (
      !(
        (n < 0 && true === u._hidePrevMonthArrow) ||
        (n > 0 && true === u._hideNextMonthArrow)
      )
    ) {
      u.currentMonth += n;
      if (u.currentMonth < 0 || u.currentMonth > 11) {
        u.currentYear += u.currentMonth > 11 ? 1 : -1;
        u.currentMonth = (u.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }
  }
  function clear(e, t) {
    void 0 === e && (e = true);
    void 0 === t && (t = true);
    u.input.value = "";
    void 0 !== u.altInput && (u.altInput.value = "");
    void 0 !== u.mobileInput && (u.mobileInput.value = "");
    u.selectedDates = [];
    u.latestSelectedDateObj = void 0;
    if (true === t) {
      u.currentYear = u._initialDate.getFullYear();
      u.currentMonth = u._initialDate.getMonth();
    }
    if (true === u.config.enableTime) {
      var n = getDefaultHours(u.config),
        a = n.hours,
        i = n.minutes,
        r = n.seconds;
      setHours(a, i, r);
    }
    u.redraw();
    e && triggerEvent("onChange");
  }
  function close() {
    u.isOpen = false;
    if (!u.isMobile) {
      void 0 !== u.calendarContainer &&
        u.calendarContainer.classList.remove("open");
      void 0 !== u._input && u._input.classList.remove("active");
    }
    triggerEvent("onClose");
  }
  function destroy() {
    void 0 !== u.config && triggerEvent("onDestroy");
    for (var e = u._handlers.length; e--; ) u._handlers[e].remove();
    u._handlers = [];
    if (u.mobileInput) {
      u.mobileInput.parentNode &&
        u.mobileInput.parentNode.removeChild(u.mobileInput);
      u.mobileInput = void 0;
    } else if (u.calendarContainer && u.calendarContainer.parentNode)
      if (u.config.static && u.calendarContainer.parentNode) {
        var t = u.calendarContainer.parentNode;
        t.lastChild && t.removeChild(t.lastChild);
        if (t.parentNode) {
          while (t.firstChild) t.parentNode.insertBefore(t.firstChild, t);
          t.parentNode.removeChild(t);
        }
      } else u.calendarContainer.parentNode.removeChild(u.calendarContainer);
    if (u.altInput) {
      u.input.type = "text";
      u.altInput.parentNode && u.altInput.parentNode.removeChild(u.altInput);
      delete u.altInput;
    }
    if (u.input) {
      u.input.type = u.input._type;
      u.input.classList.remove("flatpickr-input");
      u.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config",
    ].forEach(function (e) {
      try {
        delete u[e];
      } catch (e) {}
    });
  }
  function isCalendarElem(e) {
    return u.calendarContainer.contains(e);
  }
  function documentClick(e) {
    if (u.isOpen && !u.config.inline) {
      var t = getEventTarget(e);
      var n = isCalendarElem(t);
      var a =
        t === u.input ||
        t === u.altInput ||
        u.element.contains(t) ||
        (e.path &&
          e.path.indexOf &&
          (~e.path.indexOf(u.input) || ~e.path.indexOf(u.altInput)));
      var i = !a && !n && !isCalendarElem(e.relatedTarget);
      var r = !u.config.ignoredFocusElements.some(function (e) {
        return e.contains(t);
      });
      if (i && r) {
        u.config.allowInput &&
          u.setDate(
            u._input.value,
            false,
            u.config.altInput ? u.config.altFormat : u.config.dateFormat
          );
        void 0 !== u.timeContainer &&
          void 0 !== u.minuteElement &&
          void 0 !== u.hourElement &&
          "" !== u.input.value &&
          void 0 !== u.input.value &&
          updateTime();
        u.close();
        u.config &&
          "range" === u.config.mode &&
          1 === u.selectedDates.length &&
          u.clear(false);
      }
    }
  }
  function changeYear(e) {
    if (
      !(
        !e ||
        (u.config.minDate && e < u.config.minDate.getFullYear()) ||
        (u.config.maxDate && e > u.config.maxDate.getFullYear())
      )
    ) {
      var t = e,
        n = u.currentYear !== t;
      u.currentYear = t || u.currentYear;
      u.config.maxDate && u.currentYear === u.config.maxDate.getFullYear()
        ? (u.currentMonth = Math.min(
            u.config.maxDate.getMonth(),
            u.currentMonth
          ))
        : u.config.minDate &&
          u.currentYear === u.config.minDate.getFullYear() &&
          (u.currentMonth = Math.max(
            u.config.minDate.getMonth(),
            u.currentMonth
          ));
      if (n) {
        u.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }
  }
  function isEnabled(e, t) {
    var n;
    void 0 === t && (t = true);
    var a = u.parseDate(e, void 0, t);
    if (
      (u.config.minDate &&
        a &&
        compareDates(
          a,
          u.config.minDate,
          void 0 !== t ? t : !u.minDateHasTime
        ) < 0) ||
      (u.config.maxDate &&
        a &&
        compareDates(
          a,
          u.config.maxDate,
          void 0 !== t ? t : !u.maxDateHasTime
        ) > 0)
    )
      return false;
    if (!u.config.enable && 0 === u.config.disable.length) return true;
    if (void 0 === a) return false;
    var i = !!u.config.enable,
      r = null !== (n = u.config.enable) && void 0 !== n ? n : u.config.disable;
    for (var o = 0, l = void 0; o < r.length; o++) {
      l = r[o];
      if ("function" === typeof l && l(a)) return i;
      if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime())
        return i;
      if ("string" === typeof l) {
        var c = u.parseDate(l, void 0, true);
        return c && c.getTime() === a.getTime() ? i : !i;
      }
      if (
        "object" === typeof l &&
        void 0 !== a &&
        l.from &&
        l.to &&
        a.getTime() >= l.from.getTime() &&
        a.getTime() <= l.to.getTime()
      )
        return i;
    }
    return !i;
  }
  function isInView(e) {
    return (
      void 0 !== u.daysContainer &&
      -1 === e.className.indexOf("hidden") &&
      -1 === e.className.indexOf("flatpickr-disabled") &&
      u.daysContainer.contains(e)
    );
  }
  function onBlur(e) {
    var t = e.target === u._input;
    var n = u._input.value.trimEnd() !== getDateStr();
    !t ||
      !n ||
      (e.relatedTarget && isCalendarElem(e.relatedTarget)) ||
      u.setDate(
        u._input.value,
        true,
        e.target === u.altInput ? u.config.altFormat : u.config.dateFormat
      );
  }
  function onKeyDown(e) {
    var t = getEventTarget(e);
    var n = u.config.wrap ? a.contains(t) : t === u._input;
    var i = u.config.allowInput;
    var r = u.isOpen && (!i || !n);
    var o = u.config.inline && n && !i;
    if (13 === e.keyCode && n) {
      if (i) {
        u.setDate(
          u._input.value,
          true,
          t === u.altInput ? u.config.altFormat : u.config.dateFormat
        );
        u.close();
        return t.blur();
      }
      u.open();
    } else if (isCalendarElem(t) || r || o) {
      var l = !!u.timeContainer && u.timeContainer.contains(t);
      switch (e.keyCode) {
        case 13:
          if (l) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (n && !u.config.allowInput) {
            e.preventDefault();
            u.clear();
          }
          break;
        case 37:
        case 39:
          if (l || n) u.hourElement && u.hourElement.focus();
          else {
            e.preventDefault();
            var c = getClosestActiveElement();
            if (
              void 0 !== u.daysContainer &&
              (false === i || (c && isInView(c)))
            ) {
              var s = 39 === e.keyCode ? 1 : -1;
              if (e.ctrlKey) {
                e.stopPropagation();
                changeMonth(s);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else focusOnDay(void 0, s);
            }
          }
          break;
        case 38:
        case 40:
          e.preventDefault();
          var d = 40 === e.keyCode ? 1 : -1;
          if (
            (u.daysContainer && void 0 !== t.$i) ||
            t === u.input ||
            t === u.altInput
          )
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(u.currentYear - d);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else l || focusOnDay(void 0, 7 * d);
          else if (t === u.currentYearElement) changeYear(u.currentYear - d);
          else if (u.config.enableTime) {
            !l && u.hourElement && u.hourElement.focus();
            updateTime(e);
            u._debouncedChange();
          }
          break;
        case 9:
          if (l) {
            var f = [u.hourElement, u.minuteElement, u.secondElement, u.amPM]
              .concat(u.pluginElements)
              .filter(function (e) {
                return e;
              });
            var m = f.indexOf(t);
            if (-1 !== m) {
              var g = f[m + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (g || u._input).focus();
            }
          } else if (
            !u.config.noCalendar &&
            u.daysContainer &&
            u.daysContainer.contains(t) &&
            e.shiftKey
          ) {
            e.preventDefault();
            u._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (void 0 !== u.amPM && t === u.amPM)
      switch (e.key) {
        case u.l10n.amPM[0].charAt(0):
        case u.l10n.amPM[0].charAt(0).toLowerCase():
          u.amPM.textContent = u.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case u.l10n.amPM[1].charAt(0):
        case u.l10n.amPM[1].charAt(0).toLowerCase():
          u.amPM.textContent = u.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    (n || isCalendarElem(t)) && triggerEvent("onKeyDown", e);
  }
  function onMouseOver(e, t) {
    void 0 === t && (t = "flatpickr-day");
    if (
      1 === u.selectedDates.length &&
      (!e ||
        (e.classList.contains(t) &&
          !e.classList.contains("flatpickr-disabled")))
    ) {
      var n = e
          ? e.dateObj.getTime()
          : u.days.firstElementChild.dateObj.getTime(),
        a = u.parseDate(u.selectedDates[0], void 0, true).getTime(),
        i = Math.min(n, u.selectedDates[0].getTime()),
        r = Math.max(n, u.selectedDates[0].getTime());
      var l = false;
      var c = 0,
        s = 0;
      for (var d = i; d < r; d += o.DAY)
        if (!isEnabled(new Date(d), true)) {
          l = l || (d > i && d < r);
          d < a && (!c || d > c) ? (c = d) : d > a && (!s || d < s) && (s = d);
        }
      var f = Array.from(
        u.rContainer.querySelectorAll(
          "*:nth-child(-n+" + u.config.showMonths + ") > ." + t
        )
      );
      f.forEach(function (t) {
        var i = t.dateObj;
        var r = i.getTime();
        var o = (c > 0 && r < c) || (s > 0 && r > s);
        if (o) {
          t.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(function (e) {
            t.classList.remove(e);
          });
        } else if (!l || o) {
          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (
            e
          ) {
            t.classList.remove(e);
          });
          if (void 0 !== e) {
            e.classList.add(
              n <= u.selectedDates[0].getTime() ? "startRange" : "endRange"
            );
            a < n && r === a
              ? t.classList.add("startRange")
              : a > n && r === a && t.classList.add("endRange");
            r >= c &&
              (0 === s || r <= s) &&
              isBetween(r, a, n) &&
              t.classList.add("inRange");
          }
        }
      });
    }
  }
  function onResize() {
    !u.isOpen || u.config.static || u.config.inline || positionCalendar();
  }
  function open(e, t) {
    void 0 === t && (t = u._positionElement);
    if (true !== u.isMobile) {
      if (!u._input.disabled && !u.config.inline) {
        var n = u.isOpen;
        u.isOpen = true;
        if (!n) {
          u.calendarContainer.classList.add("open");
          u._input.classList.add("active");
          triggerEvent("onOpen");
          positionCalendar(t);
        }
        true === u.config.enableTime &&
          true === u.config.noCalendar &&
          (false !== u.config.allowInput ||
            (void 0 !== e && u.timeContainer.contains(e.relatedTarget)) ||
            setTimeout(function () {
              return u.hourElement.select();
            }, 50));
      }
    } else {
      if (e) {
        e.preventDefault();
        var a = getEventTarget(e);
        a && a.blur();
      }
      if (void 0 !== u.mobileInput) {
        u.mobileInput.focus();
        u.mobileInput.click();
      }
      triggerEvent("onOpen");
    }
  }
  function minMaxDateSetter(e) {
    return function (t) {
      var n = (u.config["_" + e + "Date"] = u.parseDate(
        t,
        u.config.dateFormat
      ));
      var a = u.config["_" + ("min" === e ? "max" : "min") + "Date"];
      void 0 !== n &&
        (u["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
          n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0);
      if (u.selectedDates) {
        u.selectedDates = u.selectedDates.filter(function (e) {
          return isEnabled(e);
        });
        u.selectedDates.length || "min" !== e || setHoursFromDate(n);
        updateValue();
      }
      if (u.daysContainer) {
        redraw();
        void 0 !== n
          ? (u.currentYearElement[e] = n.getFullYear().toString())
          : u.currentYearElement.removeAttribute(e);
        u.currentYearElement.disabled =
          !!a && void 0 !== n && a.getFullYear() === n.getFullYear();
      }
    };
  }
  function parseConfig() {
    var n = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile",
    ];
    var i = l(l({}, JSON.parse(JSON.stringify(a.dataset || {}))), r);
    var o = {};
    u.config.parseDate = i.parseDate;
    u.config.formatDate = i.formatDate;
    Object.defineProperty(u.config, "enable", {
      get: function () {
        return u.config._enable;
      },
      set: function (e) {
        u.config._enable = parseDateRules(e);
      },
    });
    Object.defineProperty(u.config, "disable", {
      get: function () {
        return u.config._disable;
      },
      set: function (e) {
        u.config._disable = parseDateRules(e);
      },
    });
    var c = "time" === i.mode;
    if (!i.dateFormat && (i.enableTime || c)) {
      var s = flatpickr.defaultConfig.dateFormat || t.dateFormat;
      o.dateFormat =
        i.noCalendar || c
          ? "H:i" + (i.enableSeconds ? ":S" : "")
          : s + " H:i" + (i.enableSeconds ? ":S" : "");
    }
    if (i.altInput && (i.enableTime || c) && !i.altFormat) {
      var d = flatpickr.defaultConfig.altFormat || t.altFormat;
      o.altFormat =
        i.noCalendar || c
          ? "h:i" + (i.enableSeconds ? ":S K" : " K")
          : d + " h:i" + (i.enableSeconds ? ":S" : "") + " K";
    }
    Object.defineProperty(u.config, "minDate", {
      get: function () {
        return u.config._minDate;
      },
      set: minMaxDateSetter("min"),
    });
    Object.defineProperty(u.config, "maxDate", {
      get: function () {
        return u.config._maxDate;
      },
      set: minMaxDateSetter("max"),
    });
    var minMaxTimeSetter = function (e) {
      return function (t) {
        u.config["min" === e ? "_minTime" : "_maxTime"] = u.parseDate(
          t,
          "H:i:S"
        );
      };
    };
    Object.defineProperty(u.config, "minTime", {
      get: function () {
        return u.config._minTime;
      },
      set: minMaxTimeSetter("min"),
    });
    Object.defineProperty(u.config, "maxTime", {
      get: function () {
        return u.config._maxTime;
      },
      set: minMaxTimeSetter("max"),
    });
    if ("time" === i.mode) {
      u.config.noCalendar = true;
      u.config.enableTime = true;
    }
    Object.assign(u.config, o, i);
    for (var f = 0; f < n.length; f++)
      u.config[n[f]] = true === u.config[n[f]] || "true" === u.config[n[f]];
    e.filter(function (e) {
      return void 0 !== u.config[e];
    }).forEach(function (e) {
      u.config[e] = arrayify(u.config[e] || []).map(bindToInstance);
    });
    u.isMobile =
      !u.config.disableMobile &&
      !u.config.inline &&
      "single" === u.config.mode &&
      !u.config.disable.length &&
      !u.config.enable &&
      !u.config.weekNumbers &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    for (f = 0; f < u.config.plugins.length; f++) {
      var m = u.config.plugins[f](u) || {};
      for (var g in m)
        e.indexOf(g) > -1
          ? (u.config[g] = arrayify(m[g])
              .map(bindToInstance)
              .concat(u.config[g]))
          : "undefined" === typeof i[g] && (u.config[g] = m[g]);
    }
    i.altInputClass ||
      (u.config.altInputClass =
        getInputElem().className + " " + u.config.altInputClass);
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return u.config.wrap ? a.querySelector("[data-input]") : a;
  }
  function setupLocale() {
    "object" !== typeof u.config.locale &&
      "undefined" === typeof flatpickr.l10ns[u.config.locale] &&
      u.config.errorHandler(
        new Error("flatpickr: invalid locale " + u.config.locale)
      );
    u.l10n = l(
      l({}, flatpickr.l10ns.default),
      "object" === typeof u.config.locale
        ? u.config.locale
        : "default" !== u.config.locale
        ? flatpickr.l10ns[u.config.locale]
        : void 0
    );
    i.D = "(" + u.l10n.weekdays.shorthand.join("|") + ")";
    i.l = "(" + u.l10n.weekdays.longhand.join("|") + ")";
    i.M = "(" + u.l10n.months.shorthand.join("|") + ")";
    i.F = "(" + u.l10n.months.longhand.join("|") + ")";
    i.K =
      "(" +
      u.l10n.amPM[0] +
      "|" +
      u.l10n.amPM[1] +
      "|" +
      u.l10n.amPM[0].toLowerCase() +
      "|" +
      u.l10n.amPM[1].toLowerCase() +
      ")";
    var e = l(l({}, r), JSON.parse(JSON.stringify(a.dataset || {})));
    void 0 === e.time_24hr &&
      void 0 === flatpickr.defaultConfig.time_24hr &&
      (u.config.time_24hr = u.l10n.time_24hr);
    u.formatDate = createDateFormatter(u);
    u.parseDate = createDateParser({ config: u.config, l10n: u.l10n });
  }
  function positionCalendar(e) {
    if ("function" !== typeof u.config.position) {
      if (void 0 !== u.calendarContainer) {
        triggerEvent("onPreCalendarPosition");
        var t = e || u._positionElement;
        var n = Array.prototype.reduce.call(
            u.calendarContainer.children,
            function (e, t) {
              return e + t.offsetHeight;
            },
            0
          ),
          a = u.calendarContainer.offsetWidth,
          i = u.config.position.split(" "),
          r = i[0],
          o = i.length > 1 ? i[1] : null,
          l = t.getBoundingClientRect(),
          c = window.innerHeight - l.bottom,
          s = "above" === r || ("below" !== r && c < n && l.top > n);
        var d = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
        toggleClass(u.calendarContainer, "arrowTop", !s);
        toggleClass(u.calendarContainer, "arrowBottom", s);
        if (!u.config.inline) {
          var f = window.pageXOffset + l.left;
          var m = false;
          var g = false;
          if ("center" === o) {
            f -= (a - l.width) / 2;
            m = true;
          } else if ("right" === o) {
            f -= a - l.width;
            g = true;
          }
          toggleClass(u.calendarContainer, "arrowLeft", !m && !g);
          toggleClass(u.calendarContainer, "arrowCenter", m);
          toggleClass(u.calendarContainer, "arrowRight", g);
          var p =
            window.document.body.offsetWidth - (window.pageXOffset + l.right);
          var h = f + a > window.document.body.offsetWidth;
          var v = p + a > window.document.body.offsetWidth;
          toggleClass(u.calendarContainer, "rightMost", h);
          if (!u.config.static) {
            u.calendarContainer.style.top = d + "px";
            if (h)
              if (v) {
                var D = getDocumentStyleSheet();
                if (void 0 === D) return;
                var b = window.document.body.offsetWidth;
                var C = Math.max(0, b / 2 - a / 2);
                var y = ".flatpickr-calendar.centerMost:before";
                var M = ".flatpickr-calendar.centerMost:after";
                var w = D.cssRules.length;
                var E = "{left:" + l.left + "px;right:auto;}";
                toggleClass(u.calendarContainer, "rightMost", false);
                toggleClass(u.calendarContainer, "centerMost", true);
                D.insertRule(y + "," + M + E, w);
                u.calendarContainer.style.left = C + "px";
                u.calendarContainer.style.right = "auto";
              } else {
                u.calendarContainer.style.left = "auto";
                u.calendarContainer.style.right = p + "px";
              }
            else {
              u.calendarContainer.style.left = f + "px";
              u.calendarContainer.style.right = "auto";
            }
          }
        }
      }
    } else u.config.position(u, e);
  }
  function getDocumentStyleSheet() {
    var e = null;
    for (var t = 0; t < document.styleSheets.length; t++) {
      var n = document.styleSheets[t];
      if (n.cssRules) {
        try {
          n.cssRules;
        } catch (e) {
          continue;
        }
        e = n;
        break;
      }
    }
    return null != e ? e : createStyleSheet();
  }
  function createStyleSheet() {
    var e = document.createElement("style");
    document.head.appendChild(e);
    return e.sheet;
  }
  function redraw() {
    if (!u.config.noCalendar && !u.isMobile) {
      buildMonthSwitch();
      updateNavigationCurrentMonth();
      buildDays();
    }
  }
  function focusAndClose() {
    u._input.focus();
    -1 !== window.navigator.userAgent.indexOf("MSIE") ||
    void 0 !== navigator.msMaxTouchPoints
      ? setTimeout(u.close, 0)
      : u.close();
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function (e) {
      return (
        e.classList &&
        e.classList.contains("flatpickr-day") &&
        !e.classList.contains("flatpickr-disabled") &&
        !e.classList.contains("notAllowed")
      );
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (void 0 !== t) {
      var n = t;
      var a = (u.latestSelectedDateObj = new Date(n.dateObj.getTime()));
      var i =
        (a.getMonth() < u.currentMonth ||
          a.getMonth() > u.currentMonth + u.config.showMonths - 1) &&
        "range" !== u.config.mode;
      u.selectedDateElem = n;
      if ("single" === u.config.mode) u.selectedDates = [a];
      else if ("multiple" === u.config.mode) {
        var r = isDateSelected(a);
        r ? u.selectedDates.splice(parseInt(r), 1) : u.selectedDates.push(a);
      } else if ("range" === u.config.mode) {
        2 === u.selectedDates.length && u.clear(false, false);
        u.latestSelectedDateObj = a;
        u.selectedDates.push(a);
        0 !== compareDates(a, u.selectedDates[0], true) &&
          u.selectedDates.sort(function (e, t) {
            return e.getTime() - t.getTime();
          });
      }
      setHoursFromInputs();
      if (i) {
        var o = u.currentYear !== a.getFullYear();
        u.currentYear = a.getFullYear();
        u.currentMonth = a.getMonth();
        if (o) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
        triggerEvent("onMonthChange");
      }
      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      i || "range" === u.config.mode || 1 !== u.config.showMonths
        ? void 0 !== u.selectedDateElem &&
          void 0 === u.hourElement &&
          u.selectedDateElem &&
          u.selectedDateElem.focus()
        : focusOnDayElem(n);
      void 0 !== u.hourElement &&
        void 0 !== u.hourElement &&
        u.hourElement.focus();
      if (u.config.closeOnSelect) {
        var l = "single" === u.config.mode && !u.config.enableTime;
        var c =
          "range" === u.config.mode &&
          2 === u.selectedDates.length &&
          !u.config.enableTime;
        (l || c) && focusAndClose();
      }
      triggerChange();
    }
  }
  var d = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function () {
        if (true === u.config.clickOpens) {
          bind(u._input, "focus", u.open);
          bind(u._input, "click", u.open);
        } else {
          u._input.removeEventListener("focus", u.open);
          u._input.removeEventListener("click", u.open);
        }
      },
    ],
  };
  function set(t, n) {
    if (null !== t && "object" === typeof t) {
      Object.assign(u.config, t);
      for (var a in t)
        void 0 !== d[a] &&
          d[a].forEach(function (e) {
            return e();
          });
    } else {
      u.config[t] = n;
      void 0 !== d[t]
        ? d[t].forEach(function (e) {
            return e();
          })
        : e.indexOf(t) > -1 && (u.config[t] = arrayify(n));
    }
    u.redraw();
    updateValue(true);
  }
  function setSelectedDate(e, t) {
    var n = [];
    if (e instanceof Array)
      n = e.map(function (e) {
        return u.parseDate(e, t);
      });
    else if (e instanceof Date || "number" === typeof e)
      n = [u.parseDate(e, t)];
    else if ("string" === typeof e)
      switch (u.config.mode) {
        case "single":
        case "time":
          n = [u.parseDate(e, t)];
          break;
        case "multiple":
          n = e.split(u.config.conjunction).map(function (e) {
            return u.parseDate(e, t);
          });
          break;
        case "range":
          n = e.split(u.l10n.rangeSeparator).map(function (e) {
            return u.parseDate(e, t);
          });
          break;
        default:
          break;
      }
    else
      u.config.errorHandler(
        new Error("Invalid date supplied: " + JSON.stringify(e))
      );
    u.selectedDates = u.config.allowInvalidPreload
      ? n
      : n.filter(function (e) {
          return e instanceof Date && isEnabled(e, false);
        });
    "range" === u.config.mode &&
      u.selectedDates.sort(function (e, t) {
        return e.getTime() - t.getTime();
      });
  }
  function setDate(e, t, n) {
    void 0 === t && (t = false);
    void 0 === n && (n = u.config.dateFormat);
    if ((0 !== e && !e) || (e instanceof Array && 0 === e.length))
      return u.clear(t);
    setSelectedDate(e, n);
    u.latestSelectedDateObj = u.selectedDates[u.selectedDates.length - 1];
    u.redraw();
    jumpToDate(void 0, t);
    setHoursFromDate();
    0 === u.selectedDates.length && u.clear(false);
    updateValue(t);
    t && triggerEvent("onChange");
  }
  function parseDateRules(e) {
    return e
      .slice()
      .map(function (e) {
        return "string" === typeof e ||
          "number" === typeof e ||
          e instanceof Date
          ? u.parseDate(e, void 0, true)
          : e && "object" === typeof e && e.from && e.to
          ? { from: u.parseDate(e.from, void 0), to: u.parseDate(e.to, void 0) }
          : e;
      })
      .filter(function (e) {
        return e;
      });
  }
  function setupDates() {
    u.selectedDates = [];
    u.now = u.parseDate(u.config.now) || new Date();
    var e =
      u.config.defaultDate ||
      (("INPUT" !== u.input.nodeName && "TEXTAREA" !== u.input.nodeName) ||
      !u.input.placeholder ||
      u.input.value !== u.input.placeholder
        ? u.input.value
        : null);
    e && setSelectedDate(e, u.config.dateFormat);
    u._initialDate =
      u.selectedDates.length > 0
        ? u.selectedDates[0]
        : u.config.minDate && u.config.minDate.getTime() > u.now.getTime()
        ? u.config.minDate
        : u.config.maxDate && u.config.maxDate.getTime() < u.now.getTime()
        ? u.config.maxDate
        : u.now;
    u.currentYear = u._initialDate.getFullYear();
    u.currentMonth = u._initialDate.getMonth();
    u.selectedDates.length > 0 &&
      (u.latestSelectedDateObj = u.selectedDates[0]);
    void 0 !== u.config.minTime &&
      (u.config.minTime = u.parseDate(u.config.minTime, "H:i"));
    void 0 !== u.config.maxTime &&
      (u.config.maxTime = u.parseDate(u.config.maxTime, "H:i"));
    u.minDateHasTime =
      !!u.config.minDate &&
      (u.config.minDate.getHours() > 0 ||
        u.config.minDate.getMinutes() > 0 ||
        u.config.minDate.getSeconds() > 0);
    u.maxDateHasTime =
      !!u.config.maxDate &&
      (u.config.maxDate.getHours() > 0 ||
        u.config.maxDate.getMinutes() > 0 ||
        u.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    u.input = getInputElem();
    if (u.input) {
      u.input._type = u.input.type;
      u.input.type = "text";
      u.input.classList.add("flatpickr-input");
      u._input = u.input;
      if (u.config.altInput) {
        u.altInput = createElement(u.input.nodeName, u.config.altInputClass);
        u._input = u.altInput;
        u.altInput.placeholder = u.input.placeholder;
        u.altInput.disabled = u.input.disabled;
        u.altInput.required = u.input.required;
        u.altInput.tabIndex = u.input.tabIndex;
        u.altInput.type = "text";
        u.input.setAttribute("type", "hidden");
        !u.config.static &&
          u.input.parentNode &&
          u.input.parentNode.insertBefore(u.altInput, u.input.nextSibling);
      }
      u.config.allowInput || u._input.setAttribute("readonly", "readonly");
      updatePositionElement();
    } else u.config.errorHandler(new Error("Invalid input element specified"));
  }
  function updatePositionElement() {
    u._positionElement = u.config.positionElement || u._input;
  }
  function setupMobile() {
    var e = u.config.enableTime
      ? u.config.noCalendar
        ? "time"
        : "datetime-local"
      : "date";
    u.mobileInput = createElement(
      "input",
      u.input.className + " flatpickr-mobile"
    );
    u.mobileInput.tabIndex = 1;
    u.mobileInput.type = e;
    u.mobileInput.disabled = u.input.disabled;
    u.mobileInput.required = u.input.required;
    u.mobileInput.placeholder = u.input.placeholder;
    u.mobileFormatStr =
      "datetime-local" === e
        ? "Y-m-d\\TH:i:S"
        : "date" === e
        ? "Y-m-d"
        : "H:i:S";
    u.selectedDates.length > 0 &&
      (u.mobileInput.defaultValue = u.mobileInput.value =
        u.formatDate(u.selectedDates[0], u.mobileFormatStr));
    u.config.minDate &&
      (u.mobileInput.min = u.formatDate(u.config.minDate, "Y-m-d"));
    u.config.maxDate &&
      (u.mobileInput.max = u.formatDate(u.config.maxDate, "Y-m-d"));
    u.input.getAttribute("step") &&
      (u.mobileInput.step = String(u.input.getAttribute("step")));
    u.input.type = "hidden";
    void 0 !== u.altInput && (u.altInput.type = "hidden");
    try {
      u.input.parentNode &&
        u.input.parentNode.insertBefore(u.mobileInput, u.input.nextSibling);
    } catch (e) {}
    bind(u.mobileInput, "change", function (e) {
      u.setDate(getEventTarget(e).value, false, u.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (true === u.isOpen) return u.close();
    u.open(e);
  }
  function triggerEvent(e, t) {
    if (void 0 !== u.config) {
      var n = u.config[e];
      if (void 0 !== n && n.length > 0)
        for (var a = 0; n[a] && a < n.length; a++)
          n[a](u.selectedDates, u.input.value, u, t);
      if ("onChange" === e) {
        u.input.dispatchEvent(createEvent("change"));
        u.input.dispatchEvent(createEvent("input"));
      }
    }
  }
  function createEvent(e) {
    var t = document.createEvent("Event");
    t.initEvent(e, true, true);
    return t;
  }
  function isDateSelected(e) {
    for (var t = 0; t < u.selectedDates.length; t++) {
      var n = u.selectedDates[t];
      if (n instanceof Date && 0 === compareDates(n, e)) return "" + t;
    }
    return false;
  }
  function isDateInRange(e) {
    return (
      !("range" !== u.config.mode || u.selectedDates.length < 2) &&
      compareDates(e, u.selectedDates[0]) >= 0 &&
      compareDates(e, u.selectedDates[1]) <= 0
    );
  }
  function updateNavigationCurrentMonth() {
    if (!u.config.noCalendar && !u.isMobile && u.monthNav) {
      u.yearElements.forEach(function (e, t) {
        var n = new Date(u.currentYear, u.currentMonth, 1);
        n.setMonth(u.currentMonth + t);
        u.config.showMonths > 1 || "static" === u.config.monthSelectorType
          ? (u.monthElements[t].textContent =
              monthToStr(n.getMonth(), u.config.shorthandCurrentMonth, u.l10n) +
              " ")
          : (u.monthsDropdownContainer.value = n.getMonth().toString());
        e.value = n.getFullYear().toString();
      });
      u._hidePrevMonthArrow =
        void 0 !== u.config.minDate &&
        (u.currentYear === u.config.minDate.getFullYear()
          ? u.currentMonth <= u.config.minDate.getMonth()
          : u.currentYear < u.config.minDate.getFullYear());
      u._hideNextMonthArrow =
        void 0 !== u.config.maxDate &&
        (u.currentYear === u.config.maxDate.getFullYear()
          ? u.currentMonth + 1 > u.config.maxDate.getMonth()
          : u.currentYear > u.config.maxDate.getFullYear());
    }
  }
  function getDateStr(e) {
    var t = e || (u.config.altInput ? u.config.altFormat : u.config.dateFormat);
    return u.selectedDates
      .map(function (e) {
        return u.formatDate(e, t);
      })
      .filter(function (e, t, n) {
        return (
          "range" !== u.config.mode || u.config.enableTime || n.indexOf(e) === t
        );
      })
      .join(
        "range" !== u.config.mode ? u.config.conjunction : u.l10n.rangeSeparator
      );
  }
  function updateValue(e) {
    void 0 === e && (e = true);
    void 0 !== u.mobileInput &&
      u.mobileFormatStr &&
      (u.mobileInput.value =
        void 0 !== u.latestSelectedDateObj
          ? u.formatDate(u.latestSelectedDateObj, u.mobileFormatStr)
          : "");
    u.input.value = getDateStr(u.config.dateFormat);
    void 0 !== u.altInput &&
      (u.altInput.value = getDateStr(u.config.altFormat));
    false !== e && triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var t = getEventTarget(e);
    var n = u.prevMonthNav.contains(t);
    var a = u.nextMonthNav.contains(t);
    n || a
      ? changeMonth(n ? -1 : 1)
      : u.yearElements.indexOf(t) >= 0
      ? t.select()
      : t.classList.contains("arrowUp")
      ? u.changeYear(u.currentYear + 1)
      : t.classList.contains("arrowDown") && u.changeYear(u.currentYear - 1);
  }
  function timeWrapper(e) {
    e.preventDefault();
    var t = "keydown" === e.type,
      n = getEventTarget(e),
      a = n;
    void 0 !== u.amPM &&
      n === u.amPM &&
      (u.amPM.textContent =
        u.l10n.amPM[int(u.amPM.textContent === u.l10n.amPM[0])]);
    var i = parseFloat(a.getAttribute("min")),
      r = parseFloat(a.getAttribute("max")),
      o = parseFloat(a.getAttribute("step")),
      l = parseInt(a.value, 10),
      c = e.delta || (t ? (38 === e.which ? 1 : -1) : 0);
    var s = l + o * c;
    if ("undefined" !== typeof a.value && 2 === a.value.length) {
      var d = a === u.hourElement,
        f = a === u.minuteElement;
      if (s < i) {
        s = r + s + int(!d) + (int(d) && int(!u.amPM));
        f && incrementNumInput(void 0, -1, u.hourElement);
      } else if (s > r) {
        s = a === u.hourElement ? s - r - int(!u.amPM) : i;
        f && incrementNumInput(void 0, 1, u.hourElement);
      }
      u.amPM &&
        d &&
        (1 === o ? s + l === 23 : Math.abs(s - l) > o) &&
        (u.amPM.textContent =
          u.l10n.amPM[int(u.amPM.textContent === u.l10n.amPM[0])]);
      a.value = pad(s);
    }
  }
  init();
  return u;
}
function _flatpickr(e, t) {
  var n = Array.prototype.slice.call(e).filter(function (e) {
    return e instanceof HTMLElement;
  });
  var a = [];
  for (var i = 0; i < n.length; i++) {
    var r = n[i];
    try {
      if (null !== r.getAttribute("data-fp-omit")) continue;
      if (void 0 !== r._flatpickr) {
        r._flatpickr.destroy();
        r._flatpickr = void 0;
      }
      r._flatpickr = FlatpickrInstance(r, t || {});
      a.push(r._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return 1 === a.length ? a[0] : a;
}
if (
  "undefined" !== typeof HTMLElement &&
  "undefined" !== typeof HTMLCollection &&
  "undefined" !== typeof NodeList
) {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (
    e
  ) {
    return _flatpickr(this, e);
  };
  HTMLElement.prototype.flatpickr = function (e) {
    return _flatpickr([this], e);
  };
}
var flatpickr = function (e, t) {
  return "string" === typeof e
    ? _flatpickr(window.document.querySelectorAll(e), t)
    : e instanceof Node
    ? _flatpickr([e], t)
    : _flatpickr(e, t);
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = { en: l({}, n), default: l({}, n) };
flatpickr.localize = function (e) {
  flatpickr.l10ns.default = l(l({}, flatpickr.l10ns.default), e);
};
flatpickr.setDefaults = function (e) {
  flatpickr.defaultConfig = l(l({}, flatpickr.defaultConfig), e);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
"undefined" !== typeof jQuery &&
  "undefined" !== typeof jQuery.fn &&
  (jQuery.fn.flatpickr = function (e) {
    return _flatpickr(this, e);
  });
Date.prototype.fp_incr = function (e) {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() + ("string" === typeof e ? parseInt(e, 10) : e)
  );
};
"undefined" !== typeof window && (window.flatpickr = flatpickr);
export { flatpickr as default };
