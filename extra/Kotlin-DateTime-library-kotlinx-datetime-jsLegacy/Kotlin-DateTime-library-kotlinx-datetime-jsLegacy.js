(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', '@js-joda/core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('@js-joda/core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'.");
    }if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'.");
    }root['Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'], kotlin, this['@js-joda/core']);
  }
}(this, function (_, Kotlin, $module$_js_joda_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var TimeSource = Kotlin.kotlin.time.TimeSource;
  var TimeMark = Kotlin.kotlin.time.TimeMark;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var hashCode = Kotlin.hashCode;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var numberToInt = Kotlin.numberToInt;
  var L3600000000000 = new Kotlin.Long(817405952, 838);
  var L60000000000 = new Kotlin.Long(-129542144, 13);
  var get_nanoseconds = Kotlin.kotlin.time.get_nanoseconds_mts6qi$;
  var L1 = Kotlin.Long.ONE;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException_init_1 = Kotlin.kotlin.RuntimeException_init_dbl4no$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException_init_1 = Kotlin.kotlin.IllegalArgumentException_init_dbl4no$;
  var L_3217862419201 = new Kotlin.Long(-931914497, -750);
  var L3093527980800 = new Kotlin.Long(1151527680, 720);
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var ArithmeticException = Kotlin.kotlin.ArithmeticException;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToLong = Kotlin.numberToLong;
  var Throwable = Error;
  var numberToDouble = Kotlin.numberToDouble;
  var Instant$Companion = $module$_js_joda_core.Instant;
  var Duration$Companion = $module$_js_joda_core.Duration;
  var get_seconds = Kotlin.kotlin.time.get_seconds_yrwdxr$;
  var get_nanoseconds_0 = Kotlin.kotlin.time.get_nanoseconds_yrwdxr$;
  var Clock$Companion = $module$_js_joda_core.Clock;
  var Comparable = Kotlin.kotlin.Comparable;
  var ZonedDateTime = $module$_js_joda_core.ZonedDateTime;
  var throwCCE = Kotlin.throwCCE;
  var nextTowards = Kotlin.kotlin.math.nextTowards_38ydlf$;
  var L1000000000 = Kotlin.Long.fromInt(1000000000);
  var ChronoUnit$Companion = $module$_js_joda_core.ChronoUnit;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var Math_0 = Math;
  var LocalDate$Companion = $module$_js_joda_core.LocalDate;
  var LocalDateTime$Companion = $module$_js_joda_core.LocalDateTime;
  var ZoneId$Companion = $module$_js_joda_core.ZoneId;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var ZoneOffset$Companion = $module$_js_joda_core.ZoneOffset;
  InstantTimeMark.prototype = Object.create(TimeMark.prototype);
  InstantTimeMark.prototype.constructor = InstantTimeMark;
  DatePeriod.prototype = Object.create(DateTimePeriod.prototype);
  DatePeriod.prototype.constructor = DatePeriod;
  DateTimePeriodImpl.prototype = Object.create(DateTimePeriod.prototype);
  DateTimePeriodImpl.prototype.constructor = DateTimePeriodImpl;
  DateTimeUnit$TimeBased.prototype = Object.create(DateTimeUnit.prototype);
  DateTimeUnit$TimeBased.prototype.constructor = DateTimeUnit$TimeBased;
  DateTimeUnit$DateBased.prototype = Object.create(DateTimeUnit.prototype);
  DateTimeUnit$DateBased.prototype.constructor = DateTimeUnit$DateBased;
  DateTimeUnit$DateBased$DayBased.prototype = Object.create(DateTimeUnit$DateBased.prototype);
  DateTimeUnit$DateBased$DayBased.prototype.constructor = DateTimeUnit$DateBased$DayBased;
  DateTimeUnit$DateBased$MonthBased.prototype = Object.create(DateTimeUnit$DateBased.prototype);
  DateTimeUnit$DateBased$MonthBased.prototype.constructor = DateTimeUnit$DateBased$MonthBased;
  DateTimeArithmeticException.prototype = Object.create(RuntimeException.prototype);
  DateTimeArithmeticException.prototype.constructor = DateTimeArithmeticException;
  IllegalTimeZoneException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalTimeZoneException.prototype.constructor = IllegalTimeZoneException;
  DateTimeFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  DateTimeFormatException.prototype.constructor = DateTimeFormatException;
  DayOfWeek_0.prototype = Object.create(Enum.prototype);
  DayOfWeek_0.prototype.constructor = DayOfWeek_0;
  Month_0.prototype = Object.create(Enum.prototype);
  Month_0.prototype.constructor = Month_0;
  ZoneOffset.prototype = Object.create(TimeZone.prototype);
  ZoneOffset.prototype.constructor = ZoneOffset;
  function Clock() {
    Clock$Companion_getInstance();
  }
  function Clock$System() {
    Clock$System_instance = this;
  }
  Clock$System.prototype.now = function () {
    return Instant$Companion_getInstance().now();
  };
  Clock$System.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'System',
    interfaces: [Clock]
  };
  var Clock$System_instance = null;
  function Clock$System_getInstance() {
    if (Clock$System_instance === null) {
      new Clock$System();
    }return Clock$System_instance;
  }
  function Clock$Companion_0() {
    Clock$Companion_instance = this;
  }
  Clock$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Clock$Companion_instance = null;
  function Clock$Companion_getInstance() {
    if (Clock$Companion_instance === null) {
      new Clock$Companion_0();
    }return Clock$Companion_instance;
  }
  Clock.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clock',
    interfaces: []
  };
  function todayAt($receiver, timeZone) {
    return toLocalDateTime_0($receiver.now(), timeZone).date;
  }
  function asTimeSource$ObjectLiteral(this$asTimeSource) {
    this.this$asTimeSource = this$asTimeSource;
  }
  asTimeSource$ObjectLiteral.prototype.markNow = function () {
    return new InstantTimeMark(this.this$asTimeSource.now(), this.this$asTimeSource);
  };
  asTimeSource$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeSource]
  };
  function asTimeSource($receiver) {
    return new asTimeSource$ObjectLiteral($receiver);
  }
  function InstantTimeMark(instant, clock) {
    TimeMark.call(this);
    this.instant_0 = instant;
    this.clock_0 = clock;
  }
  InstantTimeMark.prototype.elapsedNow = function () {
    return this.clock_0.now().minus_2hqr0b$(this.instant_0);
  };
  InstantTimeMark.prototype.plus_cgako$ = function (duration) {
    return new InstantTimeMark(this.instant_0.plus_cgako$(duration), this.clock_0);
  };
  InstantTimeMark.prototype.minus_cgako$ = function (duration) {
    return new InstantTimeMark(this.instant_0.minus_cgako$(duration), this.clock_0);
  };
  InstantTimeMark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstantTimeMark',
    interfaces: [TimeMark]
  };
  function DateTimePeriod() {
  }
  DateTimePeriod.prototype.allNotPositive_nnqlmv$_0 = function () {
    return this.years <= 0 && this.months <= 0 && this.days <= 0 && this.hours <= 0 && this.minutes <= 0 && this.seconds.toNumber() <= 0 && this.nanoseconds.toNumber() <= 0 && ((this.years | this.months | this.days | this.hours | this.minutes) !== 0 || !equals(this.seconds.or(this.nanoseconds), L0));
  };
  DateTimePeriod.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    if (this.allNotPositive_nnqlmv$_0()) {
      $receiver.append_s8itvh$(45);
      tmp$ = -1;
    } else
      tmp$ = 1;
    var sign = tmp$;
    $receiver.append_s8itvh$(80);
    if (this.years !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.years, sign)).append_s8itvh$(89);
    if (this.months !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.months, sign)).append_s8itvh$(77);
    if (this.days !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.days, sign)).append_s8itvh$(68);
    var t = {v: 'T'};
    if (this.hours !== 0) {
      $receiver.append_pdl1vj$(t.v).append_s8jyv4$(Kotlin.imul(this.hours, sign)).append_s8itvh$(72);
      t.v = '';
    }if (this.minutes !== 0) {
      $receiver.append_pdl1vj$(t.v).append_s8jyv4$(Kotlin.imul(this.minutes, sign)).append_s8itvh$(77);
      t.v = '';
    }if (!equals(this.seconds, L0) || !equals(this.nanoseconds, L0)) {
      $receiver.append_pdl1vj$(t.v).append_s8jyv4$(this.seconds.multiply(Kotlin.Long.fromInt(sign)));
      if (!equals(this.nanoseconds, L0))
        $receiver.append_s8itvh$(46).append_pdl1vj$(padStart(this.nanoseconds.multiply(Kotlin.Long.fromInt(sign)).toString(), 9, 48));
      $receiver.append_s8itvh$(83);
    }if ($receiver.length === 1)
      $receiver.append_pdl1vj$('0D');
    return $receiver.toString();
  };
  DateTimePeriod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, DateTimePeriod))
      return false;
    if (this.years !== other.years)
      return false;
    if (this.months !== other.months)
      return false;
    if (this.days !== other.days)
      return false;
    if (this.hours !== other.hours)
      return false;
    if (this.minutes !== other.minutes)
      return false;
    if (!equals(this.seconds, other.seconds))
      return false;
    if (!equals(this.nanoseconds, other.nanoseconds))
      return false;
    return true;
  };
  DateTimePeriod.prototype.hashCode = function () {
    var result = this.years;
    result = (31 * result | 0) + this.months | 0;
    result = (31 * result | 0) + this.days | 0;
    result = (31 * result | 0) + this.hours | 0;
    result = (31 * result | 0) + this.minutes | 0;
    result = (31 * result | 0) + hashCode(this.seconds) | 0;
    result = (31 * result | 0) + hashCode(this.nanoseconds) | 0;
    return result;
  };
  DateTimePeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimePeriod',
    interfaces: []
  };
  function DatePeriod(years, months, days) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0;
    DateTimePeriod.call(this);
    this.years_ndn26f$_0 = years;
    this.months_ep6c2k$_0 = months;
    this.days_pmwp8g$_0 = days;
  }
  Object.defineProperty(DatePeriod.prototype, 'years', {
    get: function () {
      return this.years_ndn26f$_0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'months', {
    get: function () {
      return this.months_ep6c2k$_0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'days', {
    get: function () {
      return this.days_pmwp8g$_0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'hours', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'minutes', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'seconds', {
    configurable: true,
    get: function () {
      return L0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'nanoseconds', {
    configurable: true,
    get: function () {
      return L0;
    }
  });
  DatePeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatePeriod',
    interfaces: [DateTimePeriod]
  };
  function DateTimePeriodImpl(years, months, days, hours, minutes, seconds, nanoseconds) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0;
    if (hours === void 0)
      hours = 0;
    if (minutes === void 0)
      minutes = 0;
    if (seconds === void 0)
      seconds = L0;
    if (nanoseconds === void 0)
      nanoseconds = L0;
    DateTimePeriod.call(this);
    this.years_hrpy9m$_0 = years;
    this.months_oinglt$_0 = months;
    this.days_pge7ot$_0 = days;
    this.hours_9vt38h$_0 = hours;
    this.minutes_wqkb4h$_0 = minutes;
    this.seconds_eejwv$_0 = seconds;
    this.nanoseconds_3b2hzv$_0 = nanoseconds;
  }
  Object.defineProperty(DateTimePeriodImpl.prototype, 'years', {
    get: function () {
      return this.years_hrpy9m$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'months', {
    get: function () {
      return this.months_oinglt$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'days', {
    get: function () {
      return this.days_pge7ot$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'hours', {
    get: function () {
      return this.hours_9vt38h$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'minutes', {
    get: function () {
      return this.minutes_wqkb4h$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'seconds', {
    get: function () {
      return this.seconds_eejwv$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'nanoseconds', {
    get: function () {
      return this.nanoseconds_3b2hzv$_0;
    }
  });
  DateTimePeriodImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimePeriodImpl',
    interfaces: [DateTimePeriod]
  };
  function DateTimePeriod_0(years, months, days, hours, minutes, seconds, nanoseconds) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0;
    if (hours === void 0)
      hours = 0;
    if (minutes === void 0)
      minutes = 0;
    if (seconds === void 0)
      seconds = L0;
    if (nanoseconds === void 0)
      nanoseconds = L0;
    return (hours | minutes) !== 0 || !equals(seconds.or(nanoseconds), L0) ? new DateTimePeriodImpl(years, months, days, hours, minutes, seconds, nanoseconds) : new DatePeriod(years, months, days);
  }
  function toDateTimePeriod($receiver) {
    var hours = numberToInt($receiver.inHours);
    var minutes = $receiver.minutesComponent;
    var seconds = $receiver.secondsComponent;
    var nanoseconds = $receiver.nanosecondsComponent;
    return DateTimePeriod_0(void 0, void 0, void 0, hours, minutes, Kotlin.Long.fromInt(seconds), Kotlin.Long.fromInt(nanoseconds));
  }
  function plus($receiver, other) {
    return DateTimePeriod_0(safeAdd_0($receiver.years, other.years), safeAdd_0($receiver.months, other.months), safeAdd_0($receiver.days, other.days), safeAdd_0($receiver.hours, other.hours), safeAdd_0($receiver.minutes, other.minutes), safeAdd($receiver.seconds, other.seconds), safeAdd($receiver.nanoseconds, other.nanoseconds));
  }
  function plus_0($receiver, other) {
    return new DatePeriod(safeAdd_0($receiver.years, other.years), safeAdd_0($receiver.months, other.months), safeAdd_0($receiver.days, other.days));
  }
  function DateTimeUnit() {
    DateTimeUnit$Companion_getInstance();
  }
  function DateTimeUnit$TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.nanoseconds = nanoseconds;
    this.unitName_0 = null;
    this.unitScale_0 = null;
    if (!(this.nanoseconds.toNumber() > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.nanoseconds.toString() + ' ns.';
      throw IllegalArgumentException_init(message.toString());
    }if (equals(this.nanoseconds.modulo(L3600000000000), L0)) {
      this.unitName_0 = 'HOUR';
      this.unitScale_0 = this.nanoseconds.div(L3600000000000);
    } else if (equals(this.nanoseconds.modulo(L60000000000), L0)) {
      this.unitName_0 = 'MINUTE';
      this.unitScale_0 = this.nanoseconds.div(L60000000000);
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000000000)), L0)) {
      this.unitName_0 = 'SECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000000000));
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000000)), L0)) {
      this.unitName_0 = 'MILLISECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000000));
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000)), L0)) {
      this.unitName_0 = 'MICROSECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000));
    } else {
      this.unitName_0 = 'NANOSECOND';
      this.unitScale_0 = this.nanoseconds;
    }
    this.duration = get_nanoseconds(this.nanoseconds);
  }
  DateTimeUnit$TimeBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$TimeBased(safeMultiply(this.nanoseconds, Kotlin.Long.fromInt(scalar)));
  };
  DateTimeUnit$TimeBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$TimeBased) && equals(this.nanoseconds, other.nanoseconds));
  };
  DateTimeUnit$TimeBased.prototype.hashCode = function () {
    return this.nanoseconds.toInt() ^ this.nanoseconds.shiftRight(32).toInt();
  };
  DateTimeUnit$TimeBased.prototype.toString = function () {
    return this.formatToString_a4hdmt$(this.unitScale_0, this.unitName_0);
  };
  DateTimeUnit$TimeBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeBased',
    interfaces: [DateTimeUnit]
  };
  function DateTimeUnit$DateBased() {
    DateTimeUnit.call(this);
  }
  function DateTimeUnit$DateBased$DayBased(days) {
    DateTimeUnit$DateBased.call(this);
    this.days = days;
    if (!(this.days > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.days + ' days.';
      throw IllegalArgumentException_init(message.toString());
    }}
  DateTimeUnit$DateBased$DayBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$DateBased$DayBased(safeMultiply_0(this.days, scalar));
  };
  DateTimeUnit$DateBased$DayBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$DateBased$DayBased) && this.days === other.days);
  };
  DateTimeUnit$DateBased$DayBased.prototype.hashCode = function () {
    return this.days ^ 65536;
  };
  DateTimeUnit$DateBased$DayBased.prototype.toString = function () {
    return this.days % 7 === 0 ? this.formatToString_19mbxw$(this.days / 7 | 0, 'WEEK') : this.formatToString_19mbxw$(this.days, 'DAY');
  };
  DateTimeUnit$DateBased$DayBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayBased',
    interfaces: [DateTimeUnit$DateBased]
  };
  function DateTimeUnit$DateBased$MonthBased(months) {
    DateTimeUnit$DateBased.call(this);
    this.months = months;
    if (!(this.months > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.months + ' months.';
      throw IllegalArgumentException_init(message.toString());
    }}
  DateTimeUnit$DateBased$MonthBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$DateBased$MonthBased(safeMultiply_0(this.months, scalar));
  };
  DateTimeUnit$DateBased$MonthBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$DateBased$MonthBased) && this.months === other.months);
  };
  DateTimeUnit$DateBased$MonthBased.prototype.hashCode = function () {
    return this.months ^ 131072;
  };
  DateTimeUnit$DateBased$MonthBased.prototype.toString = function () {
    if (this.months % 1200 === 0)
      return this.formatToString_19mbxw$(this.months / 1200 | 0, 'CENTURY');
    else if (this.months % 12 === 0)
      return this.formatToString_19mbxw$(this.months / 12 | 0, 'YEAR');
    else if (this.months % 3 === 0)
      return this.formatToString_19mbxw$(this.months / 3 | 0, 'QUARTER');
    else
      return this.formatToString_19mbxw$(this.months, 'MONTH');
  };
  DateTimeUnit$DateBased$MonthBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MonthBased',
    interfaces: [DateTimeUnit$DateBased]
  };
  DateTimeUnit$DateBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateBased',
    interfaces: [DateTimeUnit]
  };
  DateTimeUnit.prototype.formatToString_19mbxw$ = function (value, unit) {
    return value === 1 ? unit : value.toString() + '-' + unit;
  };
  DateTimeUnit.prototype.formatToString_a4hdmt$ = function (value, unit) {
    return equals(value, L1) ? unit : value.toString() + '-' + unit;
  };
  function DateTimeUnit$Companion() {
    DateTimeUnit$Companion_instance = this;
    this.NANOSECOND = new DateTimeUnit$TimeBased(L1);
    this.MICROSECOND = this.NANOSECOND.times_za3lpa$(1000);
    this.MILLISECOND = this.MICROSECOND.times_za3lpa$(1000);
    this.SECOND = this.MILLISECOND.times_za3lpa$(1000);
    this.MINUTE = this.SECOND.times_za3lpa$(60);
    this.HOUR = this.MINUTE.times_za3lpa$(60);
    this.DAY = new DateTimeUnit$DateBased$DayBased(1);
    this.WEEK = this.DAY.times_za3lpa$(7);
    this.MONTH = new DateTimeUnit$DateBased$MonthBased(1);
    this.QUARTER = this.MONTH.times_za3lpa$(3);
    this.YEAR = this.MONTH.times_za3lpa$(12);
    this.CENTURY = this.YEAR.times_za3lpa$(100);
  }
  DateTimeUnit$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$Companion_instance = null;
  function DateTimeUnit$Companion_getInstance() {
    if (DateTimeUnit$Companion_instance === null) {
      new DateTimeUnit$Companion();
    }return DateTimeUnit$Companion_instance;
  }
  DateTimeUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeUnit',
    interfaces: []
  };
  function get_isoDayNumber($receiver) {
    return $receiver.ordinal + 1 | 0;
  }
  var allDaysOfWeek;
  function DayOfWeek(isoDayNumber) {
    if (!(1 <= isoDayNumber && isoDayNumber <= 7)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }return allDaysOfWeek.get_za3lpa$(isoDayNumber - 1 | 0);
  }
  function DateTimeArithmeticException() {
    this.name = 'DateTimeArithmeticException';
  }
  DateTimeArithmeticException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeArithmeticException',
    interfaces: [RuntimeException]
  };
  function DateTimeArithmeticException_init($this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_0(message, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_1(cause, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_2(message, cause, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException.call($this, message, cause);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function IllegalTimeZoneException() {
    this.name = 'IllegalTimeZoneException';
  }
  IllegalTimeZoneException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IllegalTimeZoneException',
    interfaces: [IllegalArgumentException]
  };
  function IllegalTimeZoneException_init($this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init_0($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_0(message, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_1(cause, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_2(message, cause, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException.call($this, message, cause);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function DateTimeFormatException() {
    this.name = 'DateTimeFormatException';
  }
  DateTimeFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeFormatException',
    interfaces: [IllegalArgumentException]
  };
  function DateTimeFormatException_init($this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init_0($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_0(message, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_1(cause, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_2(message, cause, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException.call($this, message, cause);
    DateTimeFormatException.call($this);
    return $this;
  }
  function get_isDistantPast($receiver) {
    return $receiver.compareTo_11rb$(Instant$Companion_getInstance().DISTANT_PAST) <= 0;
  }
  function get_isDistantFuture($receiver) {
    return $receiver.compareTo_11rb$(Instant$Companion_getInstance().DISTANT_FUTURE) >= 0;
  }
  function toInstant($receiver) {
    return Instant$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function daysUntil($receiver, other, timeZone) {
    return clampToInt(until($receiver, other, DateTimeUnit$Companion_getInstance().DAY, timeZone));
  }
  function monthsUntil($receiver, other, timeZone) {
    return clampToInt(until($receiver, other, DateTimeUnit$Companion_getInstance().MONTH, timeZone));
  }
  function yearsUntil($receiver, other, timeZone) {
    return clampToInt(until($receiver, other, DateTimeUnit$Companion_getInstance().YEAR, timeZone));
  }
  function minus($receiver, other, timeZone) {
    return periodUntil(other, $receiver, timeZone);
  }
  function minus_0($receiver, other, unit, timeZone) {
    return until(other, $receiver, unit, timeZone);
  }
  var DISTANT_PAST_SECONDS;
  var DISTANT_FUTURE_SECONDS;
  function toLocalDate($receiver) {
    return LocalDate$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function atTime($receiver, hour, minute, second, nanosecond) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    return LocalDateTime_init($receiver.year, $receiver.monthNumber, $receiver.dayOfMonth, hour, minute, second, nanosecond);
  }
  function minus_1($receiver, other) {
    return periodUntil_0(other, $receiver);
  }
  function toLocalDateTime($receiver) {
    return LocalDateTime$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function get_number($receiver) {
    return $receiver.ordinal + 1 | 0;
  }
  var allMonths;
  function Month(number) {
    if (!(1 <= number && number <= 12)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }return allMonths.get_za3lpa$(number - 1 | 0);
  }
  function offsetIn($receiver, timeZone) {
    return offsetAt(timeZone, $receiver);
  }
  function clampToInt($receiver) {
    if ($receiver.toNumber() > 2147483647)
      return 2147483647;
    else if ($receiver.toNumber() < -2147483648)
      return -2147483648;
    else
      return $receiver.toInt();
  }
  var NANOS_PER_MILLI;
  var MILLIS_PER_ONE;
  var NANOS_PER_ONE;
  function safeMultiplyOrZero(a, b) {
    if (equals(b, L_1)) {
      if (equals(a, Long$Companion$MIN_VALUE)) {
        return L0;
      }return a.unaryMinus();
    } else if (equals(b, L1))
      return a;
    var total = a.multiply(b);
    if (!equals(total.div(b), a)) {
      return L0;
    }return total;
  }
  function multiplyAndDivide(a, b, c) {
    if (equals(a, L0) || equals(b, L0))
      return new DivRemResult(L0, L0);
    var ab = safeMultiplyOrZero(a, b);
    if (!equals(ab, L0))
      return new DivRemResult(ab.div(c), ab.modulo(c));
    if (equals(b, c))
      return new DivRemResult(a, L0);
    if (equals(a, c))
      return new DivRemResult(b, L0);
    var ae = a.toNumber() >= 0 ? L0 : L_1;
    var be = b.toNumber() >= 0 ? L0 : L_1;
    var al = a.and(L4294967295);
    var ah = a.shiftRight(32).and(L4294967295);
    var bl = b.and(L4294967295);
    var bh = b.shiftRight(32).and(L4294967295);
    var w = ae.multiply(bh).add(ah.multiply(be));
    var x = ae.multiply(bl).add(ah.multiply(bh)).add(al.multiply(be));
    var y1 = ah.multiply(bl);
    var y2 = al.multiply(bh);
    var z = al.multiply(bl);
    var r4 = z.and(L4294967295);
    var r3c = y1.and(L4294967295).add(y2.and(L4294967295)).add(z.shiftRight(32).and(L4294967295));
    var r3 = r3c.and(L4294967295);
    var r2c = r3c.shiftRight(32).and(L4294967295).add(x.and(L4294967295)).add(y1.shiftRight(32).and(L4294967295)).add(y2.shiftRight(32).and(L4294967295));
    var r2 = r2c.and(L4294967295);
    var r1 = r2c.shiftRight(32).and(L4294967295).add(x.shiftRight(32).and(L4294967295)).add(w.and(L4294967295));
    var abl = r3.shiftLeft(32).or(r4);
    var abh = r1.shiftLeft(32).or(r2);
    var sign = equals(abh.shiftRight(63).and(L1), L1) ? -1 : 1;
    if (sign === -1) {
      abl = abl.inv().add(Kotlin.Long.fromInt(1));
      abh = abh.inv();
      if (equals(abl, L0))
        abh = abh.add(Kotlin.Long.fromInt(1));
    }var q = L0;
    var r = L0;
    for (var bitNo = 127; bitNo >= 0; bitNo--) {
      var nextBit = bitNo < 64 ? abl.shiftRight(bitNo).and(L1) : abh.shiftRight(bitNo - 64 | 0).and(L1);
      r = r.shiftLeft(1).or(nextBit);
      if (r.compareTo_11rb$(c) >= 0 || r.toNumber() < 0) {
        r = r.subtract(c);
        if (bitNo < 63)
          q = q.or(L1.shiftLeft(bitNo));
        else
          throw new ArithmeticException('The result of a multiplication followed by division overflows a long');
      }}
    return new DivRemResult(Kotlin.Long.fromInt(sign).multiply(q), Kotlin.Long.fromInt(sign).multiply(r));
  }
  function DivRemResult(q, r) {
    this.q = q;
    this.r = r;
  }
  DivRemResult.prototype.component1 = function () {
    return this.q;
  };
  DivRemResult.prototype.component2 = function () {
    return this.r;
  };
  DivRemResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DivRemResult',
    interfaces: []
  };
  function low(x) {
    return x.and(L4294967295);
  }
  function high(x) {
    return x.shiftRight(32).and(L4294967295);
  }
  function indexBit(value, bit) {
    return value.shiftRight(bit).and(L1);
  }
  function multiplyAddAndDivide(d, n, r, m) {
    var md = d;
    var mr = r;
    if (d.toNumber() > 0 && r.toNumber() < 0) {
      md = md.dec();
      mr = mr.add(n);
    } else if (d.toNumber() < 0 && r.toNumber() > 0) {
      md = md.inc();
      mr = mr.subtract(n);
    }if (equals(md, L0)) {
      return mr.div(m);
    }var tmp$ = multiplyAndDivide(md, n, m);
    var rd = tmp$.component1()
    , rr = tmp$.component2();
    return safeAdd(rd, safeAdd(mr.div(m), safeAdd(mr.modulo(m), rr).div(m)));
  }
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek$TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek$WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek$THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek$FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek$SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek$SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var DayOfWeek$MONDAY_instance;
  function DayOfWeek$MONDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$MONDAY_instance;
  }
  var DayOfWeek$TUESDAY_instance;
  function DayOfWeek$TUESDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$TUESDAY_instance;
  }
  var DayOfWeek$WEDNESDAY_instance;
  function DayOfWeek$WEDNESDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$WEDNESDAY_instance;
  }
  var DayOfWeek$THURSDAY_instance;
  function DayOfWeek$THURSDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$THURSDAY_instance;
  }
  var DayOfWeek$FRIDAY_instance;
  function DayOfWeek$FRIDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$FRIDAY_instance;
  }
  var DayOfWeek$SATURDAY_instance;
  function DayOfWeek$SATURDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$SATURDAY_instance;
  }
  var DayOfWeek$SUNDAY_instance;
  function DayOfWeek$SUNDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$SUNDAY_instance;
  }
  DayOfWeek_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOfWeek',
    interfaces: [Enum]
  };
  function DayOfWeek$values() {
    return [DayOfWeek$MONDAY_getInstance(), DayOfWeek$TUESDAY_getInstance(), DayOfWeek$WEDNESDAY_getInstance(), DayOfWeek$THURSDAY_getInstance(), DayOfWeek$FRIDAY_getInstance(), DayOfWeek$SATURDAY_getInstance(), DayOfWeek$SUNDAY_getInstance()];
  }
  DayOfWeek_0.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'MONDAY':
        return DayOfWeek$MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek$TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek$WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek$THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek$FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek$SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek$SUNDAY_getInstance();
      default:throwISE('No enum constant kotlinx.datetime.DayOfWeek.' + name);
    }
  }
  DayOfWeek_0.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function toDayOfWeek($receiver) {
    return DayOfWeek(numberToInt($receiver.value()));
  }
  function Instant(value) {
    Instant$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  Object.defineProperty(Instant.prototype, 'epochSeconds', {
    configurable: true,
    get: function () {
      return numberToLong(this.value_8be2vx$.epochSecond());
    }
  });
  Object.defineProperty(Instant.prototype, 'nanosecondsOfSecond', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.nano());
    }
  });
  Instant.prototype.toEpochMilliseconds = function () {
    return this.epochSeconds.multiply(Kotlin.Long.fromInt(1000)).add(Kotlin.Long.fromInt(this.nanosecondsOfSecond / 1000000 | 0));
  };
  Instant.prototype.plus_cgako$ = function (duration) {
    var tmp$;
    var x = duration.inSeconds;
    var addSeconds = Math_0.trunc(x);
    var addNanos = numberToInt(duration.inNanoseconds % 1000000000);
    try {
      tmp$ = new Instant(this.plusFix_coldnx$(addSeconds, addNanos));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        tmp$ = addSeconds > 0 ? Instant$Companion_getInstance().MAX_8be2vx$ : Instant$Companion_getInstance().MIN_8be2vx$;
      } else
        throw e;
    }
    return tmp$;
  };
  Instant.prototype.plusFix_coldnx$ = function (seconds, nanos) {
    var newSeconds = numberToDouble(this.value_8be2vx$.epochSecond()) + seconds;
    var newNanos = numberToDouble(this.value_8be2vx$.nano()) + nanos;
    return Instant$Companion.ofEpochSecond(newSeconds, newNanos);
  };
  Instant.prototype.minus_cgako$ = function (duration) {
    return this.plus_cgako$(duration.unaryMinus());
  };
  Instant.prototype.minus_2hqr0b$ = function (other) {
    var diff = Duration$Companion.between(other.value_8be2vx$, this.value_8be2vx$);
    return get_seconds(numberToDouble(diff.seconds())).plus_cgako$(get_nanoseconds_0(numberToDouble(diff.nano())));
  };
  Instant.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  Instant.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, Instant) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  Instant.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  Instant.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  function Instant$Companion_0() {
    Instant$Companion_instance = this;
    this.DISTANT_PAST = new Instant(Instant$Companion.ofEpochSecond(DISTANT_PAST_SECONDS, 999999999));
    this.DISTANT_FUTURE = new Instant(Instant$Companion.ofEpochSecond(DISTANT_FUTURE_SECONDS, 0));
    this.MIN_8be2vx$ = new Instant(Instant$Companion.MIN);
    this.MAX_8be2vx$ = new Instant(Instant$Companion.MAX);
  }
  Instant$Companion_0.prototype.now = function () {
    return new Instant(Clock$Companion.systemUTC().instant());
  };
  Instant$Companion_0.prototype.fromEpochMilliseconds_s8cxhz$ = function (epochMilliseconds) {
    try {
      return this.fromEpochSeconds_3pjtqy$(epochMilliseconds.div(Kotlin.Long.fromInt(1000)), epochMilliseconds.modulo(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000000)));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        return epochMilliseconds.toNumber() > 0 ? this.MAX_8be2vx$ : this.MIN_8be2vx$;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new Instant(Instant$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.fromEpochSeconds_3pjtqy$ = function (epochSeconds, nanosecondAdjustment) {
    if (nanosecondAdjustment === void 0)
      nanosecondAdjustment = L0;
    try {
      return new Instant(Instant$Companion.ofEpochSecond(epochSeconds, nanosecondAdjustment));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        return epochSeconds.toNumber() > 0 ? this.MAX_8be2vx$ : this.MIN_8be2vx$;
      } else
        throw e;
    }
  };
  Instant$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Instant$Companion_instance = null;
  function Instant$Companion_getInstance() {
    if (Instant$Companion_instance === null) {
      new Instant$Companion_0();
    }return Instant$Companion_instance;
  }
  Instant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Instant',
    interfaces: [Comparable]
  };
  function plus_1($receiver, period, timeZone) {
    try {
      var thisZdt = $receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var $receiver_0 = period.years !== 0 && period.months === 0 ? thisZdt.plusYears(period.years) : thisZdt;
      var $receiver_1 = period.months !== 0 ? $receiver_0.plusMonths(period.years * 12.0 + period.months) : $receiver_0;
      var tmp$;
      var $receiver_2 = period.days !== 0 ? Kotlin.isType(tmp$ = $receiver_1.plusDays(period.days), ZonedDateTime) ? tmp$ : throwCCE() : $receiver_1;
      var $receiver_3 = period.hours !== 0 ? $receiver_2.plusHours(period.hours) : $receiver_2;
      return new Instant(plusNanosFix(plusSecondsFix(period.minutes !== 0 ? $receiver_3.plusMinutes(period.minutes) : $receiver_3, period.seconds), period.nanoseconds).toInstant());
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function plusSecondsFix($receiver, seconds) {
    var tmp$;
    var value = seconds.toNumber();
    if (value === 0.0)
      tmp$ = $receiver;
    else {
      if ((value | 0) !== 0)
        tmp$ = $receiver.plusSeconds(value);
      else {
        var valueLittleLess = nextTowards(value, 0.0);
        tmp$ = $receiver.plusSeconds(valueLittleLess).plusSeconds(value - valueLittleLess);
      }
    }
    return tmp$;
  }
  function plusNanosFix($receiver, nanoseconds) {
    var tmp$;
    var value = nanoseconds.toNumber();
    if (value === 0.0)
      tmp$ = $receiver;
    else {
      if ((value | 0) !== 0)
        tmp$ = $receiver.plusNanos(value);
      else {
        var valueLittleLess = nextTowards(value, 0.0);
        tmp$ = $receiver.plusNanos(valueLittleLess).plusNanos(value - valueLittleLess);
      }
    }
    return tmp$;
  }
  function atZone($receiver, zone) {
    return $receiver.value_8be2vx$.atZone(zone.zoneId_8be2vx$);
  }
  function checkZone($receiver, zone) {
    $receiver.atZone(zone.zoneId_8be2vx$);
    return $receiver;
  }
  function plus_2($receiver, unit, timeZone) {
    return plus_4($receiver, 1, unit, timeZone);
  }
  function plus_3($receiver, value, unit, timeZone) {
    var tmp$, tmp$_0;
    try {
      var thisZdt = atZone($receiver, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased)) {
        var f = multiplyAndDivide(value, unit.nanoseconds, L1000000000);
        var d = f.component1()
        , r = f.component2();
        tmp$_0 = checkZone($receiver.plusFix_coldnx$(d.toNumber(), r.toInt()), timeZone);
      } else if (Kotlin.isType(unit, DateTimeUnit$DateBased$DayBased))
        tmp$_0 = (Kotlin.isType(tmp$ = thisZdt.plusDays(value.toNumber() * unit.days), ZonedDateTime) ? tmp$ : throwCCE()).toInstant();
      else if (Kotlin.isType(unit, DateTimeUnit$DateBased$MonthBased))
        tmp$_0 = thisZdt.plusMonths(value.toNumber() * unit.months).toInstant();
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      return new Instant(tmp$_0);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function plus_4($receiver, value, unit, timeZone) {
    var tmp$, tmp$_0;
    try {
      var thisZdt = atZone($receiver, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased)) {
        var f = multiplyAndDivide(Kotlin.Long.fromInt(value), unit.nanoseconds, L1000000000);
        var d = f.component1()
        , r = f.component2();
        tmp$_0 = checkZone($receiver.plusFix_coldnx$(d.toNumber(), r.toInt()), timeZone);
      } else if (Kotlin.isType(unit, DateTimeUnit$DateBased$DayBased))
        tmp$_0 = (Kotlin.isType(tmp$ = thisZdt.plusDays(value * unit.days), ZonedDateTime) ? tmp$ : throwCCE()).toInstant();
      else if (Kotlin.isType(unit, DateTimeUnit$DateBased$MonthBased))
        tmp$_0 = thisZdt.plusMonths(value * unit.months).toInstant();
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      return new Instant(tmp$_0);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function periodUntil($receiver, other, timeZone) {
    var tmp$;
    try {
      var thisZdt = $receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var otherZdt = other.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var months = numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.MONTHS));
      thisZdt = thisZdt.plusMonths(months);
      var days = numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.DAYS));
      thisZdt = Kotlin.isType(tmp$ = thisZdt.plusDays(days), ZonedDateTime) ? tmp$ : throwCCE();
      var time = get_nanoseconds_0(numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.NANOS)));
      var hours = numberToInt(time.inHours);
      var minutes = time.minutesComponent;
      var seconds = time.secondsComponent;
      var nanoseconds = time.nanosecondsComponent;
      return DateTimePeriod_0(numberToInt(months / 12), numberToInt(months % 12), numberToInt(days), hours, minutes, Kotlin.Long.fromInt(seconds), Kotlin.Long.fromInt(nanoseconds));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        else
          throw e;
      } else
        throw e;
    }
  }
  function until($receiver, other, unit, timeZone) {
    try {
      var thisZdt = atZone($receiver, timeZone);
      var otherZdt = atZone(other, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased))
        return multiplyAddAndDivide(other.epochSeconds.subtract($receiver.epochSeconds), L1000000000, Kotlin.Long.fromInt(other.nanosecondsOfSecond - $receiver.nanosecondsOfSecond | 0), unit.nanoseconds);
      else if (Kotlin.isType(unit, DateTimeUnit$DateBased$DayBased))
        return Kotlin.Long.fromNumber(numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.DAYS)) / unit.days);
      else if (Kotlin.isType(unit, DateTimeUnit$DateBased$MonthBased))
        return Kotlin.Long.fromNumber(numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.MONTHS)) / unit.months);
      else
        return Kotlin.noWhenBranchMatched();
    } catch (e) {
      if (Kotlin.isType(e, ArithmeticException)) {
        return $receiver.compareTo_11rb$(other) < 0 ? Long$Companion$MAX_VALUE : Long$Companion$MIN_VALUE;
      } else if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        else
          throw e;
      } else
        throw e;
    }
  }
  function isJodaArithmeticException($receiver) {
    return $receiver.name == 'ArithmeticException';
  }
  function isJodaDateTimeException($receiver) {
    return $receiver.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException($receiver) {
    return $receiver.name == 'DateTimeParseException';
  }
  function LocalDate(value) {
    LocalDate$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  function LocalDate$Companion_0() {
    LocalDate$Companion_instance = this;
    this.MIN_8be2vx$ = new LocalDate(LocalDate$Companion.MIN);
    this.MAX_8be2vx$ = new LocalDate(LocalDate$Companion.MAX);
  }
  LocalDate$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new LocalDate(LocalDate$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalDate$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalDate$Companion_instance = null;
  function LocalDate$Companion_getInstance() {
    if (LocalDate$Companion_instance === null) {
      new LocalDate$Companion_0();
    }return LocalDate$Companion_instance;
  }
  Object.defineProperty(LocalDate.prototype, 'year', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.year());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'monthNumber', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.monthValue());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'month', {
    configurable: true,
    get: function () {
      return toMonth(this.value_8be2vx$.month());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfMonth', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfMonth());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfWeek', {
    configurable: true,
    get: function () {
      return toDayOfWeek(this.value_8be2vx$.dayOfWeek());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfYear', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfYear());
    }
  });
  LocalDate.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, LocalDate) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  LocalDate.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  LocalDate.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  LocalDate.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  LocalDate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDate',
    interfaces: [Comparable]
  };
  function LocalDate_init(year, monthNumber, dayOfMonth, $this) {
    $this = $this || Object.create(LocalDate.prototype);
    var tmp$;
    try {
      tmp$ = LocalDate$Companion.of(year, monthNumber, dayOfMonth);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
    LocalDate.call($this, tmp$);
    return $this;
  }
  function LocalDate_init_0(year, month, dayOfMonth, $this) {
    $this = $this || Object.create(LocalDate.prototype);
    LocalDate_init(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function plus_5($receiver, unit) {
    return plusNumber($receiver, 1, unit);
  }
  function plus_6($receiver, value, unit) {
    return plusNumber($receiver, value, unit);
  }
  function plus_7($receiver, value, unit) {
    return plusNumber($receiver, value, unit);
  }
  function plusNumber($receiver, value, unit) {
    var tmp$;
    try {
      if (Kotlin.isType(unit, DateTimeUnit$DateBased$DayBased))
        tmp$ = $receiver.value_8be2vx$.plusDays(numberToDouble(value) * unit.days);
      else if (Kotlin.isType(unit, DateTimeUnit$DateBased$MonthBased))
        tmp$ = $receiver.value_8be2vx$.plusMonths(numberToDouble(value) * unit.months);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return new LocalDate(tmp$);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e) && !isJodaArithmeticException(e))
          throw e;
        throw DateTimeArithmeticException_init_2('The result of adding ' + value.toString() + ' of ' + unit + ' to ' + $receiver + ' is out of LocalDate range.', e);
      } else
        throw e;
    }
  }
  function plus_8($receiver, period) {
    try {
      var $receiver_0 = $receiver.value_8be2vx$;
      var $receiver_1 = period.years !== 0 && period.months === 0 ? $receiver_0.plusYears(period.years) : $receiver_0;
      var $receiver_2 = period.months !== 0 ? $receiver_1.plusMonths(period.years * 12 + period.months) : $receiver_1;
      return new LocalDate(period.days !== 0 ? $receiver_2.plusDays(period.days) : $receiver_2);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e) || isJodaArithmeticException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function periodUntil_0($receiver, other) {
    var startD = $receiver.value_8be2vx$;
    var endD = other.value_8be2vx$;
    var months = numberToInt(startD.until(endD, ChronoUnit$Companion.MONTHS));
    startD = startD.plusMonths(months);
    var days = numberToInt(startD.until(endD, ChronoUnit$Companion.DAYS));
    return new DatePeriod(months / 12 | 0, months % 12, days);
  }
  function until_0($receiver, other, unit) {
    if (Kotlin.isType(unit, DateTimeUnit$DateBased$MonthBased))
      return monthsUntil_0($receiver, other) / unit.months | 0;
    else if (Kotlin.isType(unit, DateTimeUnit$DateBased$DayBased))
      return daysUntil_0($receiver, other) / unit.days | 0;
    else
      return Kotlin.noWhenBranchMatched();
  }
  function daysUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.DAYS));
  }
  function monthsUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.MONTHS));
  }
  function yearsUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.YEARS));
  }
  function LocalDateTime(value) {
    LocalDateTime$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  Object.defineProperty(LocalDateTime.prototype, 'year', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.year());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'monthNumber', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.monthValue());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'month', {
    configurable: true,
    get: function () {
      return toMonth(this.value_8be2vx$.month());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfMonth', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfMonth());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfWeek', {
    configurable: true,
    get: function () {
      return toDayOfWeek(this.value_8be2vx$.dayOfWeek());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfYear', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfYear());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'hour', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.hour());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'minute', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.minute());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'second', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.second());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'nanosecond', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.nano());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'date', {
    configurable: true,
    get: function () {
      return new LocalDate(this.value_8be2vx$.toLocalDate());
    }
  });
  LocalDateTime.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, LocalDateTime) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  LocalDateTime.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  LocalDateTime.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  LocalDateTime.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  function LocalDateTime$Companion_0() {
    LocalDateTime$Companion_instance = this;
    this.MIN_8be2vx$ = new LocalDateTime(LocalDateTime$Companion.MIN);
    this.MAX_8be2vx$ = new LocalDateTime(LocalDateTime$Companion.MAX);
  }
  LocalDateTime$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new LocalDateTime(LocalDateTime$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalDateTime$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalDateTime$Companion_instance = null;
  function LocalDateTime$Companion_getInstance() {
    if (LocalDateTime$Companion_instance === null) {
      new LocalDateTime$Companion_0();
    }return LocalDateTime$Companion_instance;
  }
  LocalDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDateTime',
    interfaces: [Comparable]
  };
  function LocalDateTime_init(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    $this = $this || Object.create(LocalDateTime.prototype);
    var tmp$;
    try {
      tmp$ = LocalDateTime$Companion.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
    LocalDateTime.call($this, tmp$);
    return $this;
  }
  function LocalDateTime_init_0(year, month, dayOfMonth, hour, minute, second, nanosecond, $this) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    $this = $this || Object.create(LocalDateTime.prototype);
    LocalDateTime_init(year, get_number(month), dayOfMonth, hour, minute, second, nanosecond, $this);
    return $this;
  }
  function Month_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month_0('JANUARY', 0);
    Month$FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month$MARCH_instance = new Month_0('MARCH', 2);
    Month$APRIL_instance = new Month_0('APRIL', 3);
    Month$MAY_instance = new Month_0('MAY', 4);
    Month$JUNE_instance = new Month_0('JUNE', 5);
    Month$JULY_instance = new Month_0('JULY', 6);
    Month$AUGUST_instance = new Month_0('AUGUST', 7);
    Month$SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month$OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month$NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month$DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  var Month$JANUARY_instance;
  function Month$JANUARY_getInstance() {
    Month_initFields();
    return Month$JANUARY_instance;
  }
  var Month$FEBRUARY_instance;
  function Month$FEBRUARY_getInstance() {
    Month_initFields();
    return Month$FEBRUARY_instance;
  }
  var Month$MARCH_instance;
  function Month$MARCH_getInstance() {
    Month_initFields();
    return Month$MARCH_instance;
  }
  var Month$APRIL_instance;
  function Month$APRIL_getInstance() {
    Month_initFields();
    return Month$APRIL_instance;
  }
  var Month$MAY_instance;
  function Month$MAY_getInstance() {
    Month_initFields();
    return Month$MAY_instance;
  }
  var Month$JUNE_instance;
  function Month$JUNE_getInstance() {
    Month_initFields();
    return Month$JUNE_instance;
  }
  var Month$JULY_instance;
  function Month$JULY_getInstance() {
    Month_initFields();
    return Month$JULY_instance;
  }
  var Month$AUGUST_instance;
  function Month$AUGUST_getInstance() {
    Month_initFields();
    return Month$AUGUST_instance;
  }
  var Month$SEPTEMBER_instance;
  function Month$SEPTEMBER_getInstance() {
    Month_initFields();
    return Month$SEPTEMBER_instance;
  }
  var Month$OCTOBER_instance;
  function Month$OCTOBER_getInstance() {
    Month_initFields();
    return Month$OCTOBER_instance;
  }
  var Month$NOVEMBER_instance;
  function Month$NOVEMBER_getInstance() {
    Month_initFields();
    return Month$NOVEMBER_instance;
  }
  var Month$DECEMBER_instance;
  function Month$DECEMBER_getInstance() {
    Month_initFields();
    return Month$DECEMBER_instance;
  }
  Month_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month_0.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'JANUARY':
        return Month$JANUARY_getInstance();
      case 'FEBRUARY':
        return Month$FEBRUARY_getInstance();
      case 'MARCH':
        return Month$MARCH_getInstance();
      case 'APRIL':
        return Month$APRIL_getInstance();
      case 'MAY':
        return Month$MAY_getInstance();
      case 'JUNE':
        return Month$JUNE_getInstance();
      case 'JULY':
        return Month$JULY_getInstance();
      case 'AUGUST':
        return Month$AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month$SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month$OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month$NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month$DECEMBER_getInstance();
      default:throwISE('No enum constant kotlinx.datetime.Month.' + name);
    }
  }
  Month_0.valueOf_61zpoe$ = Month$valueOf;
  function toMonth($receiver) {
    return Month(numberToInt($receiver.value()));
  }
  function TimeZone(zoneId) {
    TimeZone$Companion_getInstance();
    this.zoneId_8be2vx$ = zoneId;
  }
  Object.defineProperty(TimeZone.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.zoneId_8be2vx$.id();
    }
  });
  TimeZone.prototype.toLocalDateTime_68x792$ = function ($receiver) {
    return toLocalDateTime_0($receiver, this);
  };
  TimeZone.prototype.toInstant_uchmsb$ = function ($receiver) {
    return toInstant_0($receiver, this);
  };
  TimeZone.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, TimeZone) && equals(this.zoneId_8be2vx$, other.zoneId_8be2vx$));
  };
  TimeZone.prototype.hashCode = function () {
    return numberToInt(this.zoneId_8be2vx$.hashCode());
  };
  TimeZone.prototype.toString = function () {
    return this.zoneId_8be2vx$.toString();
  };
  function TimeZone$Companion() {
    TimeZone$Companion_instance = this;
    this.UTC = new TimeZone(ZoneOffset$Companion.UTC);
  }
  TimeZone$Companion.prototype.currentSystemDefault = function () {
    return new TimeZone(ZoneId$Companion.systemDefault());
  };
  TimeZone$Companion.prototype.of_61zpoe$ = function (zoneId) {
    try {
      return new TimeZone(ZoneId$Companion.of(zoneId));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  Object.defineProperty(TimeZone$Companion.prototype, 'availableZoneIds', {
    configurable: true,
    get: function () {
      return toSet(ZoneId$Companion.getAvailableZoneIds());
    }
  });
  TimeZone$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeZone$Companion_instance = null;
  function TimeZone$Companion_getInstance() {
    if (TimeZone$Companion_instance === null) {
      new TimeZone$Companion();
    }return TimeZone$Companion_instance;
  }
  TimeZone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeZone',
    interfaces: []
  };
  function ZoneOffset(zoneOffset) {
    TimeZone.call(this, zoneOffset);
  }
  Object.defineProperty(ZoneOffset.prototype, 'zoneOffset_8be2vx$', {
    configurable: true,
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.zoneId_8be2vx$, ZoneOffset$Companion) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(ZoneOffset.prototype, 'totalSeconds', {
    configurable: true,
    get: function () {
      return numberToInt(this.zoneOffset_8be2vx$.totalSeconds());
    }
  });
  ZoneOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZoneOffset',
    interfaces: [TimeZone]
  };
  function toLocalDateTime_0($receiver, timeZone) {
    try {
      return new LocalDateTime(LocalDateTime$Companion.ofInstant($receiver.value_8be2vx$, timeZone.zoneId_8be2vx$));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function offsetAt($receiver, instant) {
    return new ZoneOffset($receiver.zoneId_8be2vx$.rules().offsetOfInstant(instant.value_8be2vx$));
  }
  function toInstant_0($receiver, timeZone) {
    return new Instant($receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$).toInstant());
  }
  function atStartOfDayIn($receiver, timeZone) {
    return new Instant($receiver.value_8be2vx$.atStartOfDay(timeZone.zoneId_8be2vx$).toInstant());
  }
  function safeAdd(a, b) {
    var sum = a.add(b);
    if (a.xor(sum).toNumber() < 0 && a.xor(b).toNumber() >= 0) {
      throw new ArithmeticException('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }return sum;
  }
  function safeAdd_0(a, b) {
    var sum = a + b | 0;
    if ((a ^ sum) < 0 && (a ^ b) >= 0) {
      throw new ArithmeticException('Addition overflows Int range: ' + a + ' + ' + b);
    }return sum;
  }
  function safeMultiply(a, b) {
    if (equals(b, L_1)) {
      if (equals(a, Long$Companion$MIN_VALUE)) {
        throw new ArithmeticException('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }return a.unaryMinus();
    } else if (equals(b, L0))
      return L0;
    else if (equals(b, L1))
      return a;
    var total = a.multiply(b);
    if (!equals(total.div(b), a)) {
      throw new ArithmeticException('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }return total;
  }
  function safeMultiply_0(a, b) {
    var result = Kotlin.Long.fromInt(a).multiply(Kotlin.Long.fromInt(b));
    if (result.toNumber() > 2147483647 || result.toNumber() < -2147483648)
      throw new ArithmeticException('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.toInt();
  }
  Object.defineProperty(Clock, 'System', {
    get: Clock$System_getInstance
  });
  Object.defineProperty(Clock, 'Companion', {
    get: Clock$Companion_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$datetime = package$kotlinx.datetime || (package$kotlinx.datetime = {});
  package$datetime.Clock = Clock;
  package$datetime.todayAt_1ah20$ = todayAt;
  package$datetime.asTimeSource_xpgd4t$ = asTimeSource;
  package$datetime.DateTimePeriod = DateTimePeriod;
  package$datetime.DatePeriod = DatePeriod;
  package$datetime.DateTimePeriod_s36lgk$ = DateTimePeriod_0;
  package$datetime.toDateTimePeriod_aq13tz$ = toDateTimePeriod;
  package$datetime.plus_jwzr1d$ = plus;
  package$datetime.plus_tx0vy1$ = plus_0;
  DateTimeUnit.TimeBased = DateTimeUnit$TimeBased;
  DateTimeUnit$DateBased.DayBased = DateTimeUnit$DateBased$DayBased;
  DateTimeUnit$DateBased.MonthBased = DateTimeUnit$DateBased$MonthBased;
  DateTimeUnit.DateBased = DateTimeUnit$DateBased;
  Object.defineProperty(DateTimeUnit, 'Companion', {
    get: DateTimeUnit$Companion_getInstance
  });
  package$datetime.DateTimeUnit = DateTimeUnit;
  package$datetime.get_isoDayNumber_uz2bg$ = get_isoDayNumber;
  package$datetime.DayOfWeek_za3lpa$ = DayOfWeek;
  package$datetime.DateTimeArithmeticException_init = DateTimeArithmeticException_init;
  package$datetime.DateTimeArithmeticException_init_61zpoe$ = DateTimeArithmeticException_init_0;
  package$datetime.DateTimeArithmeticException_init_tcv7n7$ = DateTimeArithmeticException_init_1;
  package$datetime.DateTimeArithmeticException_init_ldd2zj$ = DateTimeArithmeticException_init_2;
  package$datetime.DateTimeArithmeticException = DateTimeArithmeticException;
  package$datetime.IllegalTimeZoneException_init = IllegalTimeZoneException_init;
  package$datetime.IllegalTimeZoneException_init_61zpoe$ = IllegalTimeZoneException_init_0;
  package$datetime.IllegalTimeZoneException_init_tcv7n7$ = IllegalTimeZoneException_init_1;
  package$datetime.IllegalTimeZoneException_init_ldd2zj$ = IllegalTimeZoneException_init_2;
  package$datetime.IllegalTimeZoneException = IllegalTimeZoneException;
  package$datetime.DateTimeFormatException_init = DateTimeFormatException_init;
  package$datetime.DateTimeFormatException_init_61zpoe$ = DateTimeFormatException_init_0;
  package$datetime.DateTimeFormatException_init_tcv7n7$ = DateTimeFormatException_init_1;
  package$datetime.DateTimeFormatException_init_ldd2zj$ = DateTimeFormatException_init_2;
  package$datetime.DateTimeFormatException = DateTimeFormatException;
  package$datetime.get_isDistantPast_68x792$ = get_isDistantPast;
  package$datetime.get_isDistantFuture_68x792$ = get_isDistantFuture;
  package$datetime.toInstant_pdl1vz$ = toInstant;
  package$datetime.daysUntil_9wlul4$ = daysUntil;
  package$datetime.monthsUntil_9wlul4$ = monthsUntil;
  package$datetime.yearsUntil_9wlul4$ = yearsUntil;
  package$datetime.minus_9wlul4$ = minus;
  package$datetime.minus_ur76pz$ = minus_0;
  Object.defineProperty(package$datetime, 'DISTANT_PAST_SECONDS_8be2vx$', {
    get: function () {
      return DISTANT_PAST_SECONDS;
    }
  });
  Object.defineProperty(package$datetime, 'DISTANT_FUTURE_SECONDS_8be2vx$', {
    get: function () {
      return DISTANT_FUTURE_SECONDS;
    }
  });
  package$datetime.toLocalDate_pdl1vz$ = toLocalDate;
  package$datetime.atTime_ebpinu$ = atTime;
  package$datetime.minus_w2evkf$ = minus_1;
  package$datetime.toLocalDateTime_pdl1vz$ = toLocalDateTime;
  package$datetime.get_number_wjkdkl$ = get_number;
  package$datetime.Month_za3lpa$ = Month;
  package$datetime.offsetIn_pneqz9$ = offsetIn;
  package$datetime.clampToInt_nzsbcz$ = clampToInt;
  Object.defineProperty(package$datetime, 'NANOS_PER_MILLI_8be2vx$', {
    get: function () {
      return NANOS_PER_MILLI;
    }
  });
  Object.defineProperty(package$datetime, 'MILLIS_PER_ONE_8be2vx$', {
    get: function () {
      return MILLIS_PER_ONE;
    }
  });
  Object.defineProperty(package$datetime, 'NANOS_PER_ONE_8be2vx$', {
    get: function () {
      return NANOS_PER_ONE;
    }
  });
  package$datetime.safeMultiplyOrZero_cfj5zr$ = safeMultiplyOrZero;
  $$importsForInline$$['Kotlin-DateTime-library-kotlinx-datetime-jsLegacy'] = _;
  package$datetime.multiplyAndDivide_e84ct6$ = multiplyAndDivide;
  package$datetime.DivRemResult = DivRemResult;
  package$datetime.multiplyAddAndDivide_ukqtct$ = multiplyAddAndDivide;
  Object.defineProperty(DayOfWeek_0, 'MONDAY', {
    get: DayOfWeek$MONDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'TUESDAY', {
    get: DayOfWeek$TUESDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'WEDNESDAY', {
    get: DayOfWeek$WEDNESDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'THURSDAY', {
    get: DayOfWeek$THURSDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'FRIDAY', {
    get: DayOfWeek$FRIDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'SATURDAY', {
    get: DayOfWeek$SATURDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'SUNDAY', {
    get: DayOfWeek$SUNDAY_getInstance
  });
  package$datetime.DayOfWeek = DayOfWeek_0;
  package$datetime.toDayOfWeek_f70szd$ = toDayOfWeek;
  Object.defineProperty(Instant, 'Companion', {
    get: Instant$Companion_getInstance
  });
  package$datetime.Instant = Instant;
  package$datetime.plus_ate4tl$ = plus_1;
  package$datetime.plus_e83fbu$ = plus_2;
  package$datetime.plus_bt8zc9$ = plus_3;
  package$datetime.plus_lr12qk$ = plus_4;
  package$datetime.periodUntil_9wlul4$ = periodUntil;
  package$datetime.until_ur76pz$ = until;
  package$datetime.isJodaArithmeticException_fg6mcf$ = isJodaArithmeticException;
  package$datetime.isJodaDateTimeException_fg6mcf$ = isJodaDateTimeException;
  package$datetime.isJodaDateTimeParseException_fg6mcf$ = isJodaDateTimeParseException;
  Object.defineProperty(LocalDate, 'Companion', {
    get: LocalDate$Companion_getInstance
  });
  package$datetime.LocalDate_init_qt1dr2$ = LocalDate_init;
  package$datetime.LocalDate_init_9eppsw$ = LocalDate_init_0;
  package$datetime.LocalDate = LocalDate;
  package$datetime.plus_hqt0ow$ = plus_5;
  package$datetime.plus_kmbsh2$ = plus_6;
  package$datetime.plus_aiqgot$ = plus_7;
  package$datetime.plus_eceoxz$ = plus_8;
  package$datetime.periodUntil_w2evkf$ = periodUntil_0;
  package$datetime.until_79yxjp$ = until_0;
  package$datetime.daysUntil_w2evkf$ = daysUntil_0;
  package$datetime.monthsUntil_w2evkf$ = monthsUntil_0;
  package$datetime.yearsUntil_w2evkf$ = yearsUntil_0;
  Object.defineProperty(LocalDateTime, 'Companion', {
    get: LocalDateTime$Companion_getInstance
  });
  package$datetime.LocalDateTime_init_ui44o2$ = LocalDateTime_init;
  package$datetime.LocalDateTime_init_3msazk$ = LocalDateTime_init_0;
  package$datetime.LocalDateTime = LocalDateTime;
  Object.defineProperty(Month_0, 'JANUARY', {
    get: Month$JANUARY_getInstance
  });
  Object.defineProperty(Month_0, 'FEBRUARY', {
    get: Month$FEBRUARY_getInstance
  });
  Object.defineProperty(Month_0, 'MARCH', {
    get: Month$MARCH_getInstance
  });
  Object.defineProperty(Month_0, 'APRIL', {
    get: Month$APRIL_getInstance
  });
  Object.defineProperty(Month_0, 'MAY', {
    get: Month$MAY_getInstance
  });
  Object.defineProperty(Month_0, 'JUNE', {
    get: Month$JUNE_getInstance
  });
  Object.defineProperty(Month_0, 'JULY', {
    get: Month$JULY_getInstance
  });
  Object.defineProperty(Month_0, 'AUGUST', {
    get: Month$AUGUST_getInstance
  });
  Object.defineProperty(Month_0, 'SEPTEMBER', {
    get: Month$SEPTEMBER_getInstance
  });
  Object.defineProperty(Month_0, 'OCTOBER', {
    get: Month$OCTOBER_getInstance
  });
  Object.defineProperty(Month_0, 'NOVEMBER', {
    get: Month$NOVEMBER_getInstance
  });
  Object.defineProperty(Month_0, 'DECEMBER', {
    get: Month$DECEMBER_getInstance
  });
  package$datetime.Month = Month_0;
  package$datetime.toMonth_2t0w74$ = toMonth;
  Object.defineProperty(TimeZone, 'Companion', {
    get: TimeZone$Companion_getInstance
  });
  package$datetime.TimeZone = TimeZone;
  package$datetime.ZoneOffset = ZoneOffset;
  package$datetime.toLocalDateTime_pneqz9$ = toLocalDateTime_0;
  package$datetime.offsetAt_ox64o1$ = offsetAt;
  package$datetime.toInstant_qewd0w$ = toInstant_0;
  package$datetime.atStartOfDayIn_c1x0l9$ = atStartOfDayIn;
  package$datetime.safeAdd_cfj5zr$ = safeAdd;
  package$datetime.safeAdd_6xvm5r$ = safeAdd_0;
  package$datetime.safeMultiply_cfj5zr$ = safeMultiply;
  package$datetime.safeMultiply_6xvm5r$ = safeMultiply_0;
  allDaysOfWeek = asList(DayOfWeek$values());
  DISTANT_PAST_SECONDS = L_3217862419201;
  DISTANT_FUTURE_SECONDS = L3093527980800;
  allMonths = asList(Month$values());
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  Kotlin.defineModule('Kotlin-DateTime-library-kotlinx-datetime-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-jsLegacy.js.map
