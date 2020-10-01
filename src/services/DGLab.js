/* eslint-disable */
(function (_, Kotlin) {
  'use strict';
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toByte = Kotlin.toByte;
  var toString = Kotlin.toString;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var contentEquals = Kotlin.arrayEquals;
  var hashCode = Kotlin.hashCode;
  var contentHashCode = Kotlin.arrayHashCode;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Random = Kotlin.kotlin.random.Random;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var numberToInt = Kotlin.numberToInt;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var Math_0 = Math;
  OpenDGLab$EStimStatus$Wave$WaveChannel.prototype = Object.create(Enum.prototype);
  OpenDGLab$EStimStatus$Wave$WaveChannel.prototype.constructor = OpenDGLab$EStimStatus$Wave$WaveChannel;
  function KDataUtils() {
    KDataUtils_instance = this;
  }
  KDataUtils.prototype.parseSetupData_964n8l$ = function (bArr) {
    var tmp$ = bArr == null;
    if (!tmp$) {
      tmp$ = bArr.length === 0;
    }if (tmp$) {
      return new Int32Array([0, 0]);
    }var g = this.byteArrayToString(this.parseByteArray_0(bArr));
    return new Int32Array([toInt(g.substring(5, 16), 2), toInt(g.substring(16), 2)]);
  };
  KDataUtils.prototype.byteArrayToString = function (bArr) {
    var $receiver = asList(bArr);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.commonBitwiseParse_0(item));
    }
    return joinToString(destination, '');
  };
  KDataUtils.prototype.commonBitwiseParse_0 = function (b) {
    return '' + toString(toByte(b >> 7 & 1)) + toString(toByte(b >> 6 & 1)) + toString(toByte(b >> 5 & 1)) + toString(toByte(b >> 4 & 1)) + toString(toByte(b >> 3 & 1)) + toString(toByte(b >> 2 & 1)) + toString(toByte(b >> 1 & 1)) + toString(toByte(b >> 0 & 1));
  };
  KDataUtils.prototype.parseByteArray_0 = function (bArr) {
    var tmp$;
    if (bArr.length === 3) {
      var b = bArr[0];
      bArr[0] = bArr[2];
      bArr[2] = b;
      tmp$ = bArr;
    } else if (bArr.length !== 2)
      tmp$ = bArr;
    else {
      var b2 = bArr[0];
      bArr[0] = bArr[1];
      bArr[1] = b2;
      tmp$ = bArr;
    }
    return tmp$;
  };
  KDataUtils.prototype.changePower_vux9f0$ = function (i, i2) {
    var binaryString = toString_0(i, 2);
    var binaryString2 = toString_0(i2, 2);
    while (binaryString.length < 11) {
      binaryString = '0' + binaryString;
    }
    while (binaryString2.length < 11) {
      binaryString2 = '0' + binaryString2;
    }
    return this.convertStringToByteArray('00' + binaryString2 + binaryString);
  };
  KDataUtils.prototype.convertStringToByteArray = function (str) {
    var bArr = new Int8Array(3);
    for (var i = 0; i <= 2; i++) {
      var i2 = i * 8 | 0;
      var endIndex = i2 + 8 | 0;
      bArr[i] = this.bitStringToByte_pdl1vj$(str.substring(i2, endIndex));
    }
    return this.parseByteArray_0(bArr);
  };
  KDataUtils.prototype.bitStringToByte_pdl1vj$ = function (str) {
    var tmp$;
    if (str == null)
      throw RuntimeException_init('when bit string convert to byte, Object can not be null!');
    else if (8 !== str.length)
      throw RuntimeException_init("bit string'length must be 8");
    else {
      try {
        if (str.charCodeAt(0) === 48) {
          return toByte(toInt(str, 2));
        }if (str.charCodeAt(0) === 49) {
          return toByte(toInt(str, 2) - 256 | 0);
        }tmp$ = 0;
      } catch (unused) {
        if (Kotlin.isType(unused, NumberFormatException)) {
          throw RuntimeException_init('bit string convert to byte failed, byte String must only include 0 and 1!');
        } else
          throw unused;
      }
    }
    return tmp$;
  };
  KDataUtils.prototype.getABPower_hnzlub$ = function (bArr, f907j) {
    var tmp$ = bArr == null;
    if (!tmp$) {
      tmp$ = bArr.length === 0;
    }if (tmp$) {
      return new Int32Array([0, 0]);
    }var g = this.byteArrayToString(this.parseByteArray_0(bArr));
    var substring = g.substring(2, 13);
    var parseInt = toInt(g.substring(13), 2);
    var parseInt2 = toInt(substring, 2);
    return new Int32Array([parseInt / f907j | 0, parseInt2 / f907j | 0]);
  };
  KDataUtils.prototype.getElectric_fqrh44$ = function (bArr) {
    var tmp$;
    if (bArr.length === 1) {
      tmp$ = toInt(this.commonBitwiseParse_0(bArr[0]), 2);
    } else
      tmp$ = -1;
    return tmp$;
  };
  KDataUtils.prototype.dfu_964n8l$ = function (bArr) {
    var tmp$ = bArr == null;
    if (!tmp$) {
      tmp$ = bArr.length === 0;
    }if (tmp$) {
      return new Int32Array([0, 1]);
    }var f = this.parseByteArray_0(bArr);
    if (toInt(this.byteArrayToString(f), 2) === 1) {
      return new Int32Array([0, 1]);
    }var g = this.byteArrayToString(f);
    var substring = g.substring(0, 4);
    var substring2 = g.substring(4);
    return new Int32Array([toInt(substring, 2), toInt(substring2, 2)]);
  };
  KDataUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KDataUtils',
    interfaces: []
  };
  var KDataUtils_instance = null;
  function KDataUtils_getInstance() {
    if (KDataUtils_instance === null) {
      new KDataUtils();
    }return KDataUtils_instance;
  }
  function OpenDGLab() {
    this.constants = new OpenDGLab$Constants();
    this.device = new OpenDGLab$Device();
    this.deviceStatus = new OpenDGLab$DeviceStatus(this);
    this.eStimStatus = new OpenDGLab$EStimStatus(this);
  }
  function OpenDGLab$WriteBLE(uuid, data) {
    this.uuid = uuid;
    this.data = data;
  }
  OpenDGLab$WriteBLE.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, OpenDGLab$WriteBLE) ? tmp$_0 : throwCCE();
    if (!equals(this.uuid, other.uuid))
      return false;
    if (!contentEquals(this.data, other.data))
      return false;
    return true;
  };
  OpenDGLab$WriteBLE.prototype.hashCode = function () {
    var result = hashCode(this.uuid);
    result = (31 * result | 0) + contentHashCode(this.data) | 0;
    return result;
  };
  OpenDGLab$WriteBLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteBLE',
    interfaces: []
  };
  OpenDGLab$WriteBLE.prototype.component1 = function () {
    return this.uuid;
  };
  OpenDGLab$WriteBLE.prototype.component2 = function () {
    return this.data;
  };
  OpenDGLab$WriteBLE.prototype.copy_yzgtim$ = function (uuid, data) {
    return new OpenDGLab$WriteBLE(uuid === void 0 ? this.uuid : uuid, data === void 0 ? this.data : data);
  };
  OpenDGLab$WriteBLE.prototype.toString = function () {
    return 'WriteBLE(uuid=' + Kotlin.toString(this.uuid) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  function OpenDGLab$Constants() {
    this.powerDivideA = 2000;
    this.powerDivideB = 7;
    this.f990y = 0;
    this.f964B = '';
    this.f991z = 0;
    this.f963A = 0;
    this.f965C = 0;
    this.f966D = 0;
    this.userObject_0 = null;
  }
  OpenDGLab$Constants.prototype.getMaxPower = function () {
    return this.powerDivideA / this.powerDivideB | 0;
  };
  OpenDGLab$Constants.prototype.setUserObject = function (obj) {
    this.userObject_0 = obj;
  };
  OpenDGLab$Constants.prototype.getUserObject = function () {
    return this.userObject_0;
  };
  OpenDGLab$Constants.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Constants',
    interfaces: []
  };
  function OpenDGLab$Device() {
    OpenDGLab$Device$Companion_getInstance();
  }
  function OpenDGLab$Device$Companion() {
    OpenDGLab$Device$Companion_instance = this;
    this.name = 'D-LAB ESTIM01';
  }
  OpenDGLab$Device$Companion.prototype.getName = function () {
    return this.name;
  };
  OpenDGLab$Device$Companion.prototype.isDGLab = function (deviceName) {
    return equals(deviceName, this.name);
  };
  OpenDGLab$Device$Companion.prototype.services = function () {
    return [OpenDGLab$DeviceStatus$Companion_getInstance().getUUID(), OpenDGLab$EStimStatus$Companion_getInstance().getUUID()];
  };
  OpenDGLab$Device$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$Device$Companion_instance = null;
  function OpenDGLab$Device$Companion_getInstance() {
    if (OpenDGLab$Device$Companion_instance === null) {
      new OpenDGLab$Device$Companion();
    }return OpenDGLab$Device$Companion_instance;
  }
  OpenDGLab$Device.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Device',
    interfaces: []
  };
  function OpenDGLab$DeviceStatus(lab) {
    OpenDGLab$DeviceStatus$Companion_getInstance();
    this.dfu = new OpenDGLab$DeviceStatus$DFU(lab);
    this.electric = new OpenDGLab$DeviceStatus$Electric(lab);
  }
  function OpenDGLab$DeviceStatus$Companion() {
    OpenDGLab$DeviceStatus$Companion_instance = this;
    this.uuid_0 = '955a180a-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$DeviceStatus$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$DeviceStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$DeviceStatus$Companion_instance = null;
  function OpenDGLab$DeviceStatus$Companion_getInstance() {
    if (OpenDGLab$DeviceStatus$Companion_instance === null) {
      new OpenDGLab$DeviceStatus$Companion();
    }return OpenDGLab$DeviceStatus$Companion_instance;
  }
  function OpenDGLab$DeviceStatus$DFU(lab) {
    OpenDGLab$DeviceStatus$DFU$Companion_getInstance();
    this.lab_0 = lab;
  }
  function OpenDGLab$DeviceStatus$DFU$Companion() {
    OpenDGLab$DeviceStatus$DFU$Companion_instance = this;
    this.uuid_0 = '955a1501-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$DeviceStatus$DFU$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$DeviceStatus$DFU$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$DeviceStatus$DFU$Companion_instance = null;
  function OpenDGLab$DeviceStatus$DFU$Companion_getInstance() {
    if (OpenDGLab$DeviceStatus$DFU$Companion_instance === null) {
      new OpenDGLab$DeviceStatus$DFU$Companion();
    }return OpenDGLab$DeviceStatus$DFU$Companion_instance;
  }
  OpenDGLab$DeviceStatus$DFU.prototype.read = function (bArr) {
    var c = KDataUtils_getInstance().dfu_964n8l$(bArr);
    this.lab_0.constants.f965C = c[0];
    this.lab_0.constants.f966D = c[1];
    this.lab_0.constants.f990y = 0;
    this.lab_0.constants.f964B = '';
    this.lab_0.constants.f991z = 0;
    this.lab_0.constants.f963A = 0;
  };
  OpenDGLab$DeviceStatus$DFU.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFU',
    interfaces: []
  };
  function OpenDGLab$DeviceStatus$Electric(lab) {
    OpenDGLab$DeviceStatus$Electric$Companion_getInstance();
    this.lab_0 = lab;
  }
  function OpenDGLab$DeviceStatus$Electric$Companion() {
    OpenDGLab$DeviceStatus$Electric$Companion_instance = this;
    this.uuid_0 = '955a1500-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$DeviceStatus$Electric$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$DeviceStatus$Electric$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$DeviceStatus$Electric$Companion_instance = null;
  function OpenDGLab$DeviceStatus$Electric$Companion_getInstance() {
    if (OpenDGLab$DeviceStatus$Electric$Companion_instance === null) {
      new OpenDGLab$DeviceStatus$Electric$Companion();
    }return OpenDGLab$DeviceStatus$Electric$Companion_instance;
  }
  OpenDGLab$DeviceStatus$Electric.prototype.onChange = function (bArr) {
    return KDataUtils_getInstance().getElectric_fqrh44$(bArr);
  };
  OpenDGLab$DeviceStatus$Electric.prototype.read = function (bArr) {
    return KDataUtils_getInstance().getElectric_fqrh44$(bArr);
  };
  OpenDGLab$DeviceStatus$Electric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Electric',
    interfaces: []
  };
  OpenDGLab$DeviceStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeviceStatus',
    interfaces: []
  };
  function OpenDGLab$EStimStatus(lab) {
    OpenDGLab$EStimStatus$Companion_getInstance();
    this.setup = new OpenDGLab$EStimStatus$Setup(lab);
    this.abPower = new OpenDGLab$EStimStatus$ABPower(lab);
    this.wave = new OpenDGLab$EStimStatus$Wave(lab);
  }
  function OpenDGLab$EStimStatus$Companion() {
    OpenDGLab$EStimStatus$Companion_instance = this;
    this.uuid_0 = '955a180b-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$EStimStatus$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$EStimStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$EStimStatus$Companion_instance = null;
  function OpenDGLab$EStimStatus$Companion_getInstance() {
    if (OpenDGLab$EStimStatus$Companion_instance === null) {
      new OpenDGLab$EStimStatus$Companion();
    }return OpenDGLab$EStimStatus$Companion_instance;
  }
  function OpenDGLab$EStimStatus$Setup(lab) {
    OpenDGLab$EStimStatus$Setup$Companion_getInstance();
    this.lab_0 = lab;
  }
  function OpenDGLab$EStimStatus$Setup$Companion() {
    OpenDGLab$EStimStatus$Setup$Companion_instance = this;
    this.uuid_0 = '955a1507-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$EStimStatus$Setup$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$EStimStatus$Setup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$EStimStatus$Setup$Companion_instance = null;
  function OpenDGLab$EStimStatus$Setup$Companion_getInstance() {
    if (OpenDGLab$EStimStatus$Setup$Companion_instance === null) {
      new OpenDGLab$EStimStatus$Setup$Companion();
    }return OpenDGLab$EStimStatus$Setup$Companion_instance;
  }
  OpenDGLab$EStimStatus$Setup.prototype.read = function (bArr) {
    var a = KDataUtils_getInstance().parseSetupData_964n8l$(bArr);
    this.lab_0.constants.powerDivideA = a[0];
    this.lab_0.constants.powerDivideB = a[1];
  };
  OpenDGLab$EStimStatus$Setup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Setup',
    interfaces: []
  };
  function OpenDGLab$EStimStatus$ABPower(lab) {
    OpenDGLab$EStimStatus$ABPower$Companion_getInstance();
    this.lab_0 = lab;
    this.aPower_0 = 0;
    this.bPower_0 = 0;
  }
  function OpenDGLab$EStimStatus$ABPower$Companion() {
    OpenDGLab$EStimStatus$ABPower$Companion_instance = this;
    this.uuid_0 = '955a1504-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$EStimStatus$ABPower$Companion.prototype.getUUID = function () {
    return this.uuid_0;
  };
  OpenDGLab$EStimStatus$ABPower$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$EStimStatus$ABPower$Companion_instance = null;
  function OpenDGLab$EStimStatus$ABPower$Companion_getInstance() {
    if (OpenDGLab$EStimStatus$ABPower$Companion_instance === null) {
      new OpenDGLab$EStimStatus$ABPower$Companion();
    }return OpenDGLab$EStimStatus$ABPower$Companion_instance;
  }
  OpenDGLab$EStimStatus$ABPower.prototype.getAPower = function () {
    return this.aPower_0;
  };
  OpenDGLab$EStimStatus$ABPower.prototype.getBPower = function () {
    return this.bPower_0;
  };
  OpenDGLab$EStimStatus$ABPower.prototype.onChange = function (bArr) {
    var abpower = KDataUtils_getInstance().getABPower_hnzlub$(bArr, this.lab_0.constants.powerDivideB);
    this.aPower_0 = abpower[1];
    this.bPower_0 = abpower[0];
  };
  OpenDGLab$EStimStatus$ABPower.prototype.setABPower = function (a, b) {
    return new OpenDGLab$WriteBLE(OpenDGLab$EStimStatus$ABPower$Companion_getInstance().uuid_0, KDataUtils_getInstance().changePower_vux9f0$(Kotlin.imul(b, this.lab_0.constants.powerDivideB), Kotlin.imul(a, this.lab_0.constants.powerDivideB)));
  };
  OpenDGLab$EStimStatus$ABPower.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ABPower',
    interfaces: []
  };
  function OpenDGLab$EStimStatus$Wave(lab) {
    OpenDGLab$EStimStatus$Wave$Companion_getInstance();
    this.lab_0 = lab;
    this.waveCenterA_0 = new WaveCenter();
    this.waveCenterB_0 = new WaveCenter();
  }
  function OpenDGLab$EStimStatus$Wave$Companion() {
    OpenDGLab$EStimStatus$Wave$Companion_instance = this;
    this.uuid_A_0 = '955a1505-0fe2-f5aa-a094-84b8d4f3e8ad';
    this.uuid_B_0 = '955a1506-0fe2-f5aa-a094-84b8d4f3e8ad';
  }
  OpenDGLab$EStimStatus$Wave$Companion.prototype.getUUIDA = function () {
    return this.uuid_A_0;
  };
  OpenDGLab$EStimStatus$Wave$Companion.prototype.getUUIDB = function () {
    return this.uuid_B_0;
  };
  OpenDGLab$EStimStatus$Wave$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpenDGLab$EStimStatus$Wave$Companion_instance = null;
  function OpenDGLab$EStimStatus$Wave$Companion_getInstance() {
    if (OpenDGLab$EStimStatus$Wave$Companion_instance === null) {
      new OpenDGLab$EStimStatus$Wave$Companion();
    }return OpenDGLab$EStimStatus$Wave$Companion_instance;
  }
  function OpenDGLab$EStimStatus$Wave$WaveChannel(name, ordinal, channel) {
    Enum.call(this);
    this.channel_aedkg$_0 = channel;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OpenDGLab$EStimStatus$Wave$WaveChannel_initFields() {
    OpenDGLab$EStimStatus$Wave$WaveChannel_initFields = function () {
    };
    OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_instance = new OpenDGLab$EStimStatus$Wave$WaveChannel('CHANNEL_A', 0, 1);
    OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_instance = new OpenDGLab$EStimStatus$Wave$WaveChannel('CHANNEL_B', 1, 2);
  }
  var OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_instance;
  function OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_getInstance() {
    OpenDGLab$EStimStatus$Wave$WaveChannel_initFields();
    return OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_instance;
  }
  var OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_instance;
  function OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_getInstance() {
    OpenDGLab$EStimStatus$Wave$WaveChannel_initFields();
    return OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_instance;
  }
  OpenDGLab$EStimStatus$Wave$WaveChannel.prototype.invoke = function () {
    return this.channel_aedkg$_0;
  };
  OpenDGLab$EStimStatus$Wave$WaveChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveChannel',
    interfaces: [Enum]
  };
  function OpenDGLab$EStimStatus$Wave$WaveChannel$values() {
    return [OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_getInstance(), OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_getInstance()];
  }
  OpenDGLab$EStimStatus$Wave$WaveChannel.values = OpenDGLab$EStimStatus$Wave$WaveChannel$values;
  function OpenDGLab$EStimStatus$Wave$WaveChannel$valueOf(name) {
    switch (name) {
      case 'CHANNEL_A':
        return OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_getInstance();
      case 'CHANNEL_B':
        return OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_getInstance();
      default:throwISE('No enum constant OpenDGLab.EStimStatus.Wave.WaveChannel.' + name);
    }
  }
  OpenDGLab$EStimStatus$Wave$WaveChannel.valueOf_61zpoe$ = OpenDGLab$EStimStatus$Wave$WaveChannel$valueOf;
  OpenDGLab$EStimStatus$Wave.prototype.setWave = function (wave, channel) {
    var tmp$;
    switch (channel.name) {
      case 'CHANNEL_A':
        tmp$ = new OpenDGLab$WriteBLE(OpenDGLab$EStimStatus$Wave$Companion_getInstance().uuid_A_0, wave);
        break;
      case 'CHANNEL_B':
        tmp$ = new OpenDGLab$WriteBLE(OpenDGLab$EStimStatus$Wave$Companion_getInstance().uuid_B_0, wave);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  OpenDGLab$EStimStatus$Wave.prototype.getWaveCenterA = function () {
    return this.waveCenterA_0;
  };
  OpenDGLab$EStimStatus$Wave.prototype.getWaveCenterB = function () {
    return this.waveCenterB_0;
  };
  OpenDGLab$EStimStatus$Wave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wave',
    interfaces: []
  };
  OpenDGLab$EStimStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EStimStatus',
    interfaces: []
  };
  OpenDGLab.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpenDGLab',
    interfaces: []
  };
  function WaveCenter() {
    WaveCenter$Companion_getInstance();
    this.timeSeqTouch_0 = 0;
    this.wave_0 = null;
    this.waveConstructA_0 = 0;
    this.waveMaxTiming_0 = 0;
    this.waveTiming_0 = 0;
    this.lastWaveMaxTiming_0 = 0;
    this.f800l_0 = 0;
    this.waveConstructB_0 = 0;
    this.waveStrength_0 = 0.0;
    this.f805q_0 = 0;
    this.f806r_0 = 0.0;
    this.touchRaw = new WaveCenter$TouchRaw();
    this.f811w_0 = 0;
    this.f812x_0 = 0;
    this.f785A_0 = 0;
    this.f813y_0 = new Int32Array(100);
    this.f814z_0 = new Int32Array(100);
    this.plot_0 = ArrayList_init_0();
  }
  function WaveCenter$BasicWave() {
  }
  WaveCenter$BasicWave.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BasicWave',
    interfaces: []
  };
  function WaveCenter$TouchRaw() {
    this.x = 0.0;
    this.y = 0.0;
  }
  WaveCenter$TouchRaw.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchRaw',
    interfaces: [WaveCenter$BasicWave]
  };
  function WaveCenter$WaveDetail(name, wave) {
    this.name = name;
    this.wave = wave;
  }
  WaveCenter$WaveDetail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveDetail',
    interfaces: []
  };
  WaveCenter$WaveDetail.prototype.component1 = function () {
    return this.name;
  };
  WaveCenter$WaveDetail.prototype.component2 = function () {
    return this.wave;
  };
  WaveCenter$WaveDetail.prototype.copy_h2wogb$ = function (name, wave) {
    return new WaveCenter$WaveDetail(name === void 0 ? this.name : name, wave === void 0 ? this.wave : wave);
  };
  WaveCenter$WaveDetail.prototype.toString = function () {
    return 'WaveDetail(name=' + Kotlin.toString(this.name) + (', wave=' + Kotlin.toString(this.wave)) + ')';
  };
  WaveCenter$WaveDetail.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.wave) | 0;
    return result;
  };
  WaveCenter$WaveDetail.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.wave, other.wave)))));
  };
  function WaveCenter$BasicWaveData(A0, A1, A2, B0, B1, B2, C0, C1, C2, J0, J1, J2, PC0, PC1, PC2, JIE1, JIE2, L, ZY, points1, points2, points3) {
    this.A0 = A0;
    this.A1 = A1;
    this.A2 = A2;
    this.B0 = B0;
    this.B1 = B1;
    this.B2 = B2;
    this.C0 = C0;
    this.C1 = C1;
    this.C2 = C2;
    this.J0 = J0;
    this.J1 = J1;
    this.J2 = J2;
    this.PC0 = PC0;
    this.PC1 = PC1;
    this.PC2 = PC2;
    this.JIE1 = JIE1;
    this.JIE2 = JIE2;
    this.L = L;
    this.ZY = ZY;
    this.points1 = points1;
    this.points2 = points2;
    this.points3 = points3;
  }
  WaveCenter$BasicWaveData.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, WaveCenter$BasicWaveData) ? tmp$_0 : throwCCE();
    if (this.A0 !== other.A0)
      return false;
    if (this.A1 !== other.A1)
      return false;
    if (this.A2 !== other.A2)
      return false;
    if (this.B0 !== other.B0)
      return false;
    if (this.B1 !== other.B1)
      return false;
    if (this.B2 !== other.B2)
      return false;
    if (this.C0 !== other.C0)
      return false;
    if (this.C1 !== other.C1)
      return false;
    if (this.C2 !== other.C2)
      return false;
    if (this.J0 !== other.J0)
      return false;
    if (this.J1 !== other.J1)
      return false;
    if (this.J2 !== other.J2)
      return false;
    if (this.PC0 !== other.PC0)
      return false;
    if (this.PC1 !== other.PC1)
      return false;
    if (this.PC2 !== other.PC2)
      return false;
    if (this.JIE1 !== other.JIE1)
      return false;
    if (this.JIE2 !== other.JIE2)
      return false;
    if (this.L !== other.L)
      return false;
    if (this.ZY !== other.ZY)
      return false;
    if (!contentEquals(this.points1, other.points1))
      return false;
    if (!contentEquals(this.points2, other.points2))
      return false;
    if (!contentEquals(this.points3, other.points3))
      return false;
    return true;
  };
  WaveCenter$BasicWaveData.prototype.hashCode = function () {
    var result = this.A0;
    result = (31 * result | 0) + this.A1 | 0;
    result = (31 * result | 0) + this.A2 | 0;
    result = (31 * result | 0) + this.B0 | 0;
    result = (31 * result | 0) + this.B1 | 0;
    result = (31 * result | 0) + this.B2 | 0;
    result = (31 * result | 0) + this.C0 | 0;
    result = (31 * result | 0) + this.C1 | 0;
    result = (31 * result | 0) + this.C2 | 0;
    result = (31 * result | 0) + this.J0 | 0;
    result = (31 * result | 0) + this.J1 | 0;
    result = (31 * result | 0) + this.J2 | 0;
    result = (31 * result | 0) + this.PC0 | 0;
    result = (31 * result | 0) + this.PC1 | 0;
    result = (31 * result | 0) + this.PC2 | 0;
    result = (31 * result | 0) + this.JIE1 | 0;
    result = (31 * result | 0) + this.JIE2 | 0;
    result = (31 * result | 0) + this.L | 0;
    result = (31 * result | 0) + this.ZY | 0;
    result = (31 * result | 0) + contentHashCode(this.points1) | 0;
    result = (31 * result | 0) + contentHashCode(this.points2) | 0;
    result = (31 * result | 0) + contentHashCode(this.points3) | 0;
    return result;
  };
  WaveCenter$BasicWaveData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicWaveData',
    interfaces: [WaveCenter$BasicWave]
  };
  WaveCenter$BasicWaveData.prototype.component1 = function () {
    return this.A0;
  };
  WaveCenter$BasicWaveData.prototype.component2 = function () {
    return this.A1;
  };
  WaveCenter$BasicWaveData.prototype.component3 = function () {
    return this.A2;
  };
  WaveCenter$BasicWaveData.prototype.component4 = function () {
    return this.B0;
  };
  WaveCenter$BasicWaveData.prototype.component5 = function () {
    return this.B1;
  };
  WaveCenter$BasicWaveData.prototype.component6 = function () {
    return this.B2;
  };
  WaveCenter$BasicWaveData.prototype.component7 = function () {
    return this.C0;
  };
  WaveCenter$BasicWaveData.prototype.component8 = function () {
    return this.C1;
  };
  WaveCenter$BasicWaveData.prototype.component9 = function () {
    return this.C2;
  };
  WaveCenter$BasicWaveData.prototype.component10 = function () {
    return this.J0;
  };
  WaveCenter$BasicWaveData.prototype.component11 = function () {
    return this.J1;
  };
  WaveCenter$BasicWaveData.prototype.component12 = function () {
    return this.J2;
  };
  WaveCenter$BasicWaveData.prototype.component13 = function () {
    return this.PC0;
  };
  WaveCenter$BasicWaveData.prototype.component14 = function () {
    return this.PC1;
  };
  WaveCenter$BasicWaveData.prototype.component15 = function () {
    return this.PC2;
  };
  WaveCenter$BasicWaveData.prototype.component16 = function () {
    return this.JIE1;
  };
  WaveCenter$BasicWaveData.prototype.component17 = function () {
    return this.JIE2;
  };
  WaveCenter$BasicWaveData.prototype.component18 = function () {
    return this.L;
  };
  WaveCenter$BasicWaveData.prototype.component19 = function () {
    return this.ZY;
  };
  WaveCenter$BasicWaveData.prototype.component20 = function () {
    return this.points1;
  };
  WaveCenter$BasicWaveData.prototype.component21 = function () {
    return this.points2;
  };
  WaveCenter$BasicWaveData.prototype.component22 = function () {
    return this.points3;
  };
  WaveCenter$BasicWaveData.prototype.copy_gkd6z4$ = function (A0, A1, A2, B0, B1, B2, C0, C1, C2, J0, J1, J2, PC0, PC1, PC2, JIE1, JIE2, L, ZY, points1, points2, points3) {
    return new WaveCenter$BasicWaveData(A0 === void 0 ? this.A0 : A0, A1 === void 0 ? this.A1 : A1, A2 === void 0 ? this.A2 : A2, B0 === void 0 ? this.B0 : B0, B1 === void 0 ? this.B1 : B1, B2 === void 0 ? this.B2 : B2, C0 === void 0 ? this.C0 : C0, C1 === void 0 ? this.C1 : C1, C2 === void 0 ? this.C2 : C2, J0 === void 0 ? this.J0 : J0, J1 === void 0 ? this.J1 : J1, J2 === void 0 ? this.J2 : J2, PC0 === void 0 ? this.PC0 : PC0, PC1 === void 0 ? this.PC1 : PC1, PC2 === void 0 ? this.PC2 : PC2, JIE1 === void 0 ? this.JIE1 : JIE1, JIE2 === void 0 ? this.JIE2 : JIE2, L === void 0 ? this.L : L, ZY === void 0 ? this.ZY : ZY, points1 === void 0 ? this.points1 : points1, points2 === void 0 ? this.points2 : points2, points3 === void 0 ? this.points3 : points3);
  };
  WaveCenter$BasicWaveData.prototype.toString = function () {
    return 'BasicWaveData(A0=' + Kotlin.toString(this.A0) + (', A1=' + Kotlin.toString(this.A1)) + (', A2=' + Kotlin.toString(this.A2)) + (', B0=' + Kotlin.toString(this.B0)) + (', B1=' + Kotlin.toString(this.B1)) + (', B2=' + Kotlin.toString(this.B2)) + (', C0=' + Kotlin.toString(this.C0)) + (', C1=' + Kotlin.toString(this.C1)) + (', C2=' + Kotlin.toString(this.C2)) + (', J0=' + Kotlin.toString(this.J0)) + (', J1=' + Kotlin.toString(this.J1)) + (', J2=' + Kotlin.toString(this.J2)) + (', PC0=' + Kotlin.toString(this.PC0)) + (', PC1=' + Kotlin.toString(this.PC1)) + (', PC2=' + Kotlin.toString(this.PC2)) + (', JIE1=' + Kotlin.toString(this.JIE1)) + (', JIE2=' + Kotlin.toString(this.JIE2)) + (', L=' + Kotlin.toString(this.L)) + (', ZY=' + Kotlin.toString(this.ZY)) + (', points1=' + Kotlin.toString(this.points1)) + (', points2=' + Kotlin.toString(this.points2)) + (', points3=' + Kotlin.toString(this.points3)) + ')';
  };
  function WaveCenter$BasicDataBean(x, y, anchor) {
    this.x = x;
    this.y = y;
    this.anchor = anchor;
  }
  WaveCenter$BasicDataBean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicDataBean',
    interfaces: []
  };
  WaveCenter$BasicDataBean.prototype.component1 = function () {
    return this.x;
  };
  WaveCenter$BasicDataBean.prototype.component2 = function () {
    return this.y;
  };
  WaveCenter$BasicDataBean.prototype.component3 = function () {
    return this.anchor;
  };
  WaveCenter$BasicDataBean.prototype.copy_ao1nor$ = function (x, y, anchor) {
    return new WaveCenter$BasicDataBean(x === void 0 ? this.x : x, y === void 0 ? this.y : y, anchor === void 0 ? this.anchor : anchor);
  };
  WaveCenter$BasicDataBean.prototype.toString = function () {
    return 'BasicDataBean(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', anchor=' + Kotlin.toString(this.anchor)) + ')';
  };
  WaveCenter$BasicDataBean.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchor) | 0;
    return result;
  };
  WaveCenter$BasicDataBean.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.anchor, other.anchor)))));
  };
  function WaveCenter$TouchWaveData(data) {
    this.data = data;
  }
  WaveCenter$TouchWaveData.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, WaveCenter$TouchWaveData) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.data, other.data))
      return false;
    return true;
  };
  WaveCenter$TouchWaveData.prototype.hashCode = function () {
    return contentHashCode(this.data);
  };
  WaveCenter$TouchWaveData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchWaveData',
    interfaces: [WaveCenter$BasicWave]
  };
  WaveCenter$TouchWaveData.prototype.component1 = function () {
    return this.data;
  };
  WaveCenter$TouchWaveData.prototype.copy_8y5frp$ = function (data) {
    return new WaveCenter$TouchWaveData(data === void 0 ? this.data : data);
  };
  WaveCenter$TouchWaveData.prototype.toString = function () {
    return 'TouchWaveData(data=' + Kotlin.toString(this.data) + ')';
  };
  function WaveCenter$TouchDataBean(ax, ay, az) {
    this.ax = ax;
    this.ay = ay;
    this.az = az;
  }
  WaveCenter$TouchDataBean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchDataBean',
    interfaces: []
  };
  WaveCenter$TouchDataBean.prototype.component1 = function () {
    return this.ax;
  };
  WaveCenter$TouchDataBean.prototype.component2 = function () {
    return this.ay;
  };
  WaveCenter$TouchDataBean.prototype.component3 = function () {
    return this.az;
  };
  WaveCenter$TouchDataBean.prototype.copy_qt1dr2$ = function (ax, ay, az) {
    return new WaveCenter$TouchDataBean(ax === void 0 ? this.ax : ax, ay === void 0 ? this.ay : ay, az === void 0 ? this.az : az);
  };
  WaveCenter$TouchDataBean.prototype.toString = function () {
    return 'TouchDataBean(ax=' + Kotlin.toString(this.ax) + (', ay=' + Kotlin.toString(this.ay)) + (', az=' + Kotlin.toString(this.az)) + ')';
  };
  WaveCenter$TouchDataBean.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ax) | 0;
    result = result * 31 + Kotlin.hashCode(this.ay) | 0;
    result = result * 31 + Kotlin.hashCode(this.az) | 0;
    return result;
  };
  WaveCenter$TouchDataBean.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ax, other.ax) && Kotlin.equals(this.ay, other.ay) && Kotlin.equals(this.az, other.az)))));
  };
  function WaveCenter$Companion() {
    WaveCenter$Companion_instance = this;
    this.basic = mapOf([to('Breath', new WaveCenter$BasicWaveData(0, 0, 0, 20, 20, 20, 8, 2, 2, 0, 20, 20, 1, 1, 1, 0, 0, 35, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 4.0, 0), new WaveCenter$BasicDataBean(2, 8.0, 0), new WaveCenter$BasicDataBean(3, 12.0, 0), new WaveCenter$BasicDataBean(4, 16.0, 0), new WaveCenter$BasicDataBean(5, 20.0, 1), new WaveCenter$BasicDataBean(6, 20.0, 1), new WaveCenter$BasicDataBean(7, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Tide', new WaveCenter$BasicWaveData(0, 0, 0, 32, 20, 20, 11, 2, 2, 20, 20, 20, 2, 1, 1, 0, 0, 5, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 3.3333333, 0), new WaveCenter$BasicDataBean(2, 6.6666665, 0), new WaveCenter$BasicDataBean(3, 10.0, 1), new WaveCenter$BasicDataBean(4, 13.333333, 0), new WaveCenter$BasicDataBean(5, 16.666666, 0), new WaveCenter$BasicDataBean(6, 20.0, 1), new WaveCenter$BasicDataBean(7, 18.402824, 0), new WaveCenter$BasicDataBean(8, 16.805649, 0), new WaveCenter$BasicDataBean(9, 15.208473, 0), new WaveCenter$BasicDataBean(10, 13.611298, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('KeepClick', new WaveCenter$BasicWaveData(0, 0, 0, 34, 20, 20, 8, 2, 2, 20, 20, 20, 1, 1, 1, 0, 0, 0, 8, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 0.0, 1), new WaveCenter$BasicDataBean(2, 20.0, 1), new WaveCenter$BasicDataBean(3, 13.333333, 0), new WaveCenter$BasicDataBean(4, 6.6666665, 0), new WaveCenter$BasicDataBean(5, 0.0, 1), new WaveCenter$BasicDataBean(6, 0.2399439, 0), new WaveCenter$BasicDataBean(7, 0.4798878, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('QuickPress', new WaveCenter$BasicWaveData(0, 0, 0, 29, 20, 20, 2, 2, 2, 44, 20, 20, 1, 1, 1, 0, 0, 16, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Stronger', new WaveCenter$BasicWaveData(0, 0, 0, 20, 20, 20, 11, 2, 2, 20, 20, 20, 1, 1, 1, 0, 0, 5, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 5.719211, 1), new WaveCenter$BasicDataBean(2, 0.0, 1), new WaveCenter$BasicDataBean(3, 10.499579, 1), new WaveCenter$BasicDataBean(4, 0.3826058, 1), new WaveCenter$BasicDataBean(5, 14.682558, 1), new WaveCenter$BasicDataBean(6, 0.0, 1), new WaveCenter$BasicDataBean(7, 17.454998, 1), new WaveCenter$BasicDataBean(8, 0.0, 1), new WaveCenter$BasicDataBean(9, 20.0, 1), new WaveCenter$BasicDataBean(10, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Heartbeat', new WaveCenter$BasicWaveData(65, 0, 0, 20, 20, 20, 2, 14, 2, 6, 20, 20, 1, 1, 1, 1, 0, 5, 16, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 0.0, 0), new WaveCenter$BasicDataBean(2, 0.0, 0), new WaveCenter$BasicDataBean(3, 0.0, 0), new WaveCenter$BasicDataBean(4, 0.0, 1), new WaveCenter$BasicDataBean(5, 14.972563, 1), new WaveCenter$BasicDataBean(6, 16.648375, 0), new WaveCenter$BasicDataBean(7, 18.324188, 0), new WaveCenter$BasicDataBean(8, 20.0, 1), new WaveCenter$BasicDataBean(9, 0.0, 1), new WaveCenter$BasicDataBean(10, 0.0, 0), new WaveCenter$BasicDataBean(11, 0.0, 0), new WaveCenter$BasicDataBean(12, 0.0, 0), new WaveCenter$BasicDataBean(13, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Compress', new WaveCenter$BasicWaveData(52, 0, 0, 16, 20, 20, 11, 10, 2, 0, 0, 20, 2, 1, 1, 1, 0, 0, 16, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 0), new WaveCenter$BasicDataBean(3, 20.0, 0), new WaveCenter$BasicDataBean(4, 20.0, 0), new WaveCenter$BasicDataBean(5, 20.0, 0), new WaveCenter$BasicDataBean(6, 20.0, 0), new WaveCenter$BasicDataBean(7, 20.0, 0), new WaveCenter$BasicDataBean(8, 20.0, 0), new WaveCenter$BasicDataBean(9, 20.0, 0), new WaveCenter$BasicDataBean(10, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 0), new WaveCenter$BasicDataBean(3, 20.0, 0), new WaveCenter$BasicDataBean(4, 20.0, 0), new WaveCenter$BasicDataBean(5, 20.0, 0), new WaveCenter$BasicDataBean(6, 20.0, 0), new WaveCenter$BasicDataBean(7, 20.0, 0), new WaveCenter$BasicDataBean(8, 20.0, 0), new WaveCenter$BasicDataBean(9, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Rhythmic', new WaveCenter$BasicWaveData(0, 0, 0, 20, 20, 20, 26, 2, 2, 20, 20, 20, 1, 1, 1, 0, 0, 5, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 4.0, 0), new WaveCenter$BasicDataBean(2, 8.0, 0), new WaveCenter$BasicDataBean(3, 12.0, 0), new WaveCenter$BasicDataBean(4, 16.0, 0), new WaveCenter$BasicDataBean(5, 20.0, 1), new WaveCenter$BasicDataBean(6, 0.0, 1), new WaveCenter$BasicDataBean(7, 5.0, 0), new WaveCenter$BasicDataBean(8, 10.0, 0), new WaveCenter$BasicDataBean(9, 15.0, 0), new WaveCenter$BasicDataBean(10, 20.0, 1), new WaveCenter$BasicDataBean(11, 0.0, 1), new WaveCenter$BasicDataBean(12, 6.6666665, 0), new WaveCenter$BasicDataBean(13, 13.333333, 0), new WaveCenter$BasicDataBean(14, 20.0, 1), new WaveCenter$BasicDataBean(15, 0.0, 1), new WaveCenter$BasicDataBean(16, 10.0, 0), new WaveCenter$BasicDataBean(17, 20.0, 1), new WaveCenter$BasicDataBean(18, 0.0, 1), new WaveCenter$BasicDataBean(19, 20.0, 1), new WaveCenter$BasicDataBean(20, 0.0, 1), new WaveCenter$BasicDataBean(21, 20.0, 1), new WaveCenter$BasicDataBean(22, 0.0, 1), new WaveCenter$BasicDataBean(23, 20.0, 1), new WaveCenter$BasicDataBean(24, 0.0, 1), new WaveCenter$BasicDataBean(25, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('GrainTouch', new WaveCenter$BasicWaveData(0, 0, 0, 38, 20, 20, 4, 2, 2, 25, 20, 20, 2, 1, 1, 0, 0, 0, 8, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 1), new WaveCenter$BasicDataBean(3, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Spring', new WaveCenter$BasicWaveData(0, 0, 0, 30, 20, 20, 4, 2, 2, 45, 20, 20, 2, 1, 1, 0, 0, 20, 16, [new WaveCenter$BasicDataBean(0, 0.18084228, 1), new WaveCenter$BasicDataBean(1, 6.7872286, 0), new WaveCenter$BasicDataBean(2, 13.393615, 0), new WaveCenter$BasicDataBean(3, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('WaveRipple', new WaveCenter$BasicWaveData(0, 0, 0, 60, 20, 20, 4, 2, 2, 53, 20, 20, 4, 1, 1, 0, 0, 5, 16, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 10.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 1), new WaveCenter$BasicDataBean(3, 14.669602, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('RainSwept', new WaveCenter$BasicWaveData(4, 44, 0, 0, 54, 20, 3, 2, 2, 39, 35, 20, 1, 1, 1, 1, 0, 25, 8, [new WaveCenter$BasicDataBean(0, 6.7057176, 1), new WaveCenter$BasicDataBean(1, 13.3528595, 0), new WaveCenter$BasicDataBean(2, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Knock', new WaveCenter$BasicWaveData(14, 65, 0, 20, 20, 20, 7, 4, 2, 41, 40, 20, 1, 1, 1, 1, 0, 15, 8, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 1), new WaveCenter$BasicDataBean(3, 0.0, 1), new WaveCenter$BasicDataBean(4, 0.0, 0), new WaveCenter$BasicDataBean(5, 0.0, 0), new WaveCenter$BasicDataBean(6, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 0), new WaveCenter$BasicDataBean(3, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Signal', new WaveCenter$BasicWaveData(78, 0, 0, 64, 20, 20, 4, 4, 2, 20, 20, 20, 1, 3, 1, 1, 0, 0, 8, [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 0), new WaveCenter$BasicDataBean(2, 20.0, 0), new WaveCenter$BasicDataBean(3, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 6.6666665, 0), new WaveCenter$BasicDataBean(2, 13.333333, 0), new WaveCenter$BasicDataBean(3, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Flirt 1', new WaveCenter$BasicWaveData(0, 0, 0, 20, 20, 20, 10, 2, 2, 36, 22, 20, 3, 1, 1, 1, 0, 5, 8, [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 5.0, 0), new WaveCenter$BasicDataBean(2, 10.0, 0), new WaveCenter$BasicDataBean(3, 15.0, 0), new WaveCenter$BasicDataBean(4, 20.0, 1), new WaveCenter$BasicDataBean(5, 20.0, 1), new WaveCenter$BasicDataBean(6, 20.0, 1), new WaveCenter$BasicDataBean(7, 0.0, 1), new WaveCenter$BasicDataBean(8, 0.0, 0), new WaveCenter$BasicDataBean(9, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)])), to('Flirt 2', new WaveCenter$BasicWaveData(27, 0, 0, 7, 20, 20, 10, 2, 2, 33, 40, 20, 3, 2, 1, 1, 0, 18, 8, [new WaveCenter$BasicDataBean(0, 0.2853297, 1), new WaveCenter$BasicDataBean(1, 2.4758487, 0), new WaveCenter$BasicDataBean(2, 4.6663675, 0), new WaveCenter$BasicDataBean(3, 6.8568864, 0), new WaveCenter$BasicDataBean(4, 9.047405, 0), new WaveCenter$BasicDataBean(5, 11.237925, 0), new WaveCenter$BasicDataBean(6, 13.428443, 0), new WaveCenter$BasicDataBean(7, 15.618962, 0), new WaveCenter$BasicDataBean(8, 17.80948, 0), new WaveCenter$BasicDataBean(9, 20.0, 1)], [new WaveCenter$BasicDataBean(0, 20.0, 1), new WaveCenter$BasicDataBean(1, 0.0, 1)], [new WaveCenter$BasicDataBean(0, 0.0, 1), new WaveCenter$BasicDataBean(1, 20.0, 1)]))]);
    this.touch = mapOf([to('Extrusion', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20)])), to('Bubble', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(3, 42, 0), new WaveCenter$TouchDataBean(3, 42, 20)])), to('Signal', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 10), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 10), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(3, 42, 0), new WaveCenter$TouchDataBean(2, 23, 20), new WaveCenter$TouchDataBean(2, 28, 20), new WaveCenter$TouchDataBean(3, 35, 20), new WaveCenter$TouchDataBean(3, 43, 20), new WaveCenter$TouchDataBean(3, 54, 20), new WaveCenter$TouchDataBean(0, 0, 0), new WaveCenter$TouchDataBean(0, 0, 0)])), to('Climb', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(3, 53, 10), new WaveCenter$TouchDataBean(3, 36, 12), new WaveCenter$TouchDataBean(2, 26, 14), new WaveCenter$TouchDataBean(2, 17, 16), new WaveCenter$TouchDataBean(1, 13, 18), new WaveCenter$TouchDataBean(1, 9, 20)])), to('Rhythm', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 20)])), to('KeepClick', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(5, 95, 20)])), to('Pulse', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 11, 20), new WaveCenter$TouchDataBean(1, 14, 20), new WaveCenter$TouchDataBean(2, 16, 20), new WaveCenter$TouchDataBean(2, 20, 20), new WaveCenter$TouchDataBean(2, 26, 20), new WaveCenter$TouchDataBean(2, 32, 20), new WaveCenter$TouchDataBean(3, 39, 20), new WaveCenter$TouchDataBean(3, 49, 20), new WaveCenter$TouchDataBean(4, 60, 20), new WaveCenter$TouchDataBean(4, 75, 20), new WaveCenter$TouchDataBean(4, 93, 20), new WaveCenter$TouchDataBean(5, 115, 20), new WaveCenter$TouchDataBean(6, 141, 20), new WaveCenter$TouchDataBean(6, 175, 20), new WaveCenter$TouchDataBean(7, 216, 20)])), to('AirWaves', new WaveCenter$TouchWaveData([new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(2, 15, 20), new WaveCenter$TouchDataBean(2, 28, 20), new WaveCenter$TouchDataBean(3, 49, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(1, 9, 0), new WaveCenter$TouchDataBean(1, 9, 20), new WaveCenter$TouchDataBean(0, 0, 0), new WaveCenter$TouchDataBean(0, 0, 0)]))]);
  }
  WaveCenter$Companion.prototype.getBasicWave = function (name) {
    return this.basic.get_11rb$(name);
  };
  WaveCenter$Companion.prototype.getTouchWave = function (name) {
    return this.touch.get_11rb$(name);
  };
  WaveCenter$Companion.prototype.getRandomTouchWave = function () {
    var tmp$;
    var name = random(this.touch.keys, Random.Default);
    var tmp$_0;
    if ((tmp$ = this.touch.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(''.toString());
    }
    return new WaveCenter$WaveDetail(name, tmp$_0);
  };
  WaveCenter$Companion.prototype.getRandomBasicWave = function () {
    var tmp$;
    var name = random(this.basic.keys, Random.Default);
    var tmp$_0;
    if ((tmp$ = this.basic.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(''.toString());
    }
    return new WaveCenter$WaveDetail(name, tmp$_0);
  };
  WaveCenter$Companion.prototype.getRandomWave = function () {
    return Random.Default.nextBoolean() ? this.getRandomBasicWave() : this.getRandomTouchWave();
  };
  WaveCenter$Companion.prototype.getTouchWaveList = function () {
    return copyToArray(this.touch.keys);
  };
  WaveCenter$Companion.prototype.getBasicWaveList = function () {
    return copyToArray(this.basic.keys);
  };
  WaveCenter$Companion.prototype.stop = function () {
    return KDataUtils_getInstance().convertStringToByteArray('000000000000000000000000');
  };
  WaveCenter$Companion.prototype.fromOpenDGWaveGen = function (odgw) {
    var points1 = ArrayList_init_0();
    var points2 = ArrayList_init_0();
    var points3 = ArrayList_init_0();
    try {
      var ss = split(odgw, ['|']);
      if (ss.size === 4) {
        var conf = split(ss.get_za3lpa$(0), [',']);
        if (conf.size === 19) {
          var p1 = split(ss.get_za3lpa$(1), [',']);
          if (p1.size === toInt_0(ss.get_za3lpa$(6))) {
            var p2 = split(ss.get_za3lpa$(2), [',']);
            if (toInt_0(ss.get_za3lpa$(15)) === 1 && p2.size === toInt_0(ss.get_za3lpa$(7))) {
              var p3 = split(ss.get_za3lpa$(3), [',']);
              if (toInt_0(ss.get_za3lpa$(16)) === 1 && p3.size === toInt_0(ss.get_za3lpa$(8))) {
                var tmp$, tmp$_0;
                var index = 0;
                tmp$ = p1.iterator();
                while (tmp$.hasNext()) {
                  var item = tmp$.next();
                  var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
                  var p = split(item, ['=']);
                  if (p.size === 2) {
                    var anchor = toInt_0(p.get_za3lpa$(1));
                    if (anchor !== 0 && anchor !== 1)
                      return null;
                    points1.add_11rb$(new WaveCenter$BasicDataBean(index_0, toDouble(p.get_za3lpa$(0)), anchor));
                  } else
                    return null;
                }
                var tmp$_1, tmp$_0_0;
                var index_1 = 0;
                tmp$_1 = p2.iterator();
                while (tmp$_1.hasNext()) {
                  var item_0 = tmp$_1.next();
                  var index_2 = checkIndexOverflow((tmp$_0_0 = index_1, index_1 = tmp$_0_0 + 1 | 0, tmp$_0_0));
                  var p_0 = split(item_0, ['=']);
                  if (p_0.size === 2) {
                    var anchor_0 = toInt_0(p_0.get_za3lpa$(1));
                    if (anchor_0 !== 0 && anchor_0 !== 1)
                      return null;
                    points2.add_11rb$(new WaveCenter$BasicDataBean(index_2, toDouble(p_0.get_za3lpa$(0)), anchor_0));
                  } else
                    return null;
                }
                var tmp$_2, tmp$_0_1;
                var index_3 = 0;
                tmp$_2 = p3.iterator();
                while (tmp$_2.hasNext()) {
                  var item_1 = tmp$_2.next();
                  var index_4 = checkIndexOverflow((tmp$_0_1 = index_3, index_3 = tmp$_0_1 + 1 | 0, tmp$_0_1));
                  var p_1 = split(item_1, ['=']);
                  if (p_1.size === 2) {
                    var anchor_1 = toInt_0(p_1.get_za3lpa$(1));
                    if (anchor_1 !== 0 && anchor_1 !== 1)
                      return null;
                    points3.add_11rb$(new WaveCenter$BasicDataBean(index_4, toDouble(p_1.get_za3lpa$(0)), anchor_1));
                  } else
                    return null;
                }
                var a0 = toInt_0(ss.get_za3lpa$(0));
                var a1 = toInt_0(ss.get_za3lpa$(1));
                var a2 = toInt_0(ss.get_za3lpa$(2));
                var b0 = toInt_0(ss.get_za3lpa$(3));
                var b1 = toInt_0(ss.get_za3lpa$(4));
                var b2 = toInt_0(ss.get_za3lpa$(5));
                var c0 = toInt_0(ss.get_za3lpa$(6));
                var c1 = toInt_0(ss.get_za3lpa$(7));
                var c2 = toInt_0(ss.get_za3lpa$(8));
                var j0 = toInt_0(ss.get_za3lpa$(9));
                var j1 = toInt_0(ss.get_za3lpa$(10));
                var j2 = toInt_0(ss.get_za3lpa$(11));
                var pc0 = toInt_0(ss.get_za3lpa$(12));
                var pc1 = toInt_0(ss.get_za3lpa$(13));
                var pc2 = toInt_0(ss.get_za3lpa$(14));
                var jie1 = toInt_0(ss.get_za3lpa$(15));
                var jie2 = toInt_0(ss.get_za3lpa$(16));
                var l = toInt_0(ss.get_za3lpa$(17));
                var zy = toInt_0(ss.get_za3lpa$(18));
                if (a0 > b0 || a0 < 0 || b0 > 100)
                  return null;
                if (a1 > b1 || a1 < 0 || b1 > 100)
                  return null;
                if (a2 > b2 || a2 < 0 || b2 > 100)
                  return null;
                if (c0 < 2 || c0 > 30)
                  return null;
                if (c1 < 2 || c1 > 30)
                  return null;
                if (c2 < 2 || c2 > 30)
                  return null;
                if (pc0 < 1 || pc0 > 7)
                  return null;
                if (pc1 < 1 || pc1 > 7)
                  return null;
                if (pc2 < 1 || pc2 > 7)
                  return null;
                if (jie1 !== 0 && jie1 !== 1)
                  return null;
                if (jie2 !== 0 && jie2 !== 1)
                  return null;
                if (zy < 0 || zy > 20)
                  return null;
                if (pc0 === 1 && a0 !== 0)
                  return null;
                if (pc1 === 1 && a1 !== 0)
                  return null;
                if (pc2 === 1 && a2 !== 0)
                  return null;
                return new WaveCenter$BasicWaveData(a0, a1, a2, b0, b1, b2, c0, c1, c2, j0, j1, j2, pc0, pc1, pc2, jie1, jie2, l, zy, copyToArray(points1), copyToArray(points2), copyToArray(points3));
              } else
                return null;
            } else
              return null;
          } else
            return null;
        } else
          return null;
      } else
        return null;
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      } else
        throw e;
    }
  };
  function WaveCenter$Companion$toDGWaveGen$lambda(it) {
    return it.y.toString() + '=' + it.anchor;
  }
  function WaveCenter$Companion$toDGWaveGen$lambda_0(it) {
    return it.y.toString() + '=' + it.anchor;
  }
  function WaveCenter$Companion$toDGWaveGen$lambda_1(it) {
    return it.y.toString() + '=' + it.anchor;
  }
  WaveCenter$Companion.prototype.toDGWaveGen = function (wave) {
    var p1 = joinToString_0(wave.points1, ',', void 0, void 0, void 0, void 0, WaveCenter$Companion$toDGWaveGen$lambda);
    var p2 = joinToString_0(wave.points2, ',', void 0, void 0, void 0, void 0, WaveCenter$Companion$toDGWaveGen$lambda_0);
    var p3 = joinToString_0(wave.points3, ',', void 0, void 0, void 0, void 0, WaveCenter$Companion$toDGWaveGen$lambda_1);
    return wave.A0.toString() + ',' + wave.A1 + ',' + wave.A2 + ',' + wave.B0 + ',' + wave.B1 + ',' + wave.B2 + ',' + wave.C0 + ',' + wave.C1 + ',' + wave.C2 + ',' + wave.J0 + ',' + wave.J1 + ',' + wave.J2 + ',' + wave.PC0 + ',' + wave.PC1 + ',' + wave.PC2 + ',' + wave.JIE1 + ',' + wave.JIE2 + ',' + wave.L + ',' + wave.ZY + '|' + p1 + '|' + p2 + '|' + p3;
  };
  WaveCenter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WaveCenter$Companion_instance = null;
  function WaveCenter$Companion_getInstance() {
    if (WaveCenter$Companion_instance === null) {
      new WaveCenter$Companion();
    }return WaveCenter$Companion_instance;
  }
  WaveCenter.prototype.fromBasicWaveToByteArray_0 = function (wave) {
    var tmp$, tmp$_0;
    var waveC;
    var waveDataList;
    var wavePC;
    var waveJ;
    var waveB;
    var waveA;
    switch (this.waveConstructA_0) {
      case 0:
        waveA = (wave.A0 * 20 | 0) + 1000 | 0;
        waveB = (wave.B0 * 20 | 0) + 1000 | 0;
        waveC = wave.C0;
        var $receiver = (wave.J0 + 1 | 0) / 101.0;
        var x = Math_0.pow($receiver, 1.6) * 100.0;
        waveJ = numberToInt(Math_0.ceil(x));
        wavePC = wave.PC0;
        waveDataList = wave.points1;
        break;
      case 1:
        waveA = (wave.A1 * 20 | 0) + 1000 | 0;
        waveB = (wave.B1 * 20 | 0) + 1000 | 0;
        waveC = wave.C1;
        var $receiver_0 = (wave.J1 + 1 | 0) / 101.0;
        var x_0 = Math_0.pow($receiver_0, 1.6) * 100.0;
        waveJ = numberToInt(Math_0.ceil(x_0));
        wavePC = wave.PC1;
        waveDataList = wave.points2;
        break;
      case 2:
        waveA = (wave.A2 * 20 | 0) + 1000 | 0;
        waveB = (wave.B2 * 20 | 0) + 1000 | 0;
        waveC = wave.C2;
        var $receiver_1 = (wave.J2 + 1 | 0) / 101.0;
        var x_1 = Math_0.pow($receiver_1, 1.6) * 100.0;
        waveJ = numberToInt(Math_0.ceil(x_1));
        wavePC = wave.PC2;
        waveDataList = wave.points3;
        break;
      default:waveDataList = [];
        waveA = 0;
        waveB = 0;
        waveJ = 0;
        wavePC = 0;
        waveC = 0;
        break;
    }
    var x_2 = waveJ / waveC;
    this.waveMaxTiming_0 = numberToInt(Math_0.ceil(x_2));
    this.waveTiming_0 = numberToInt(round(this.waveMaxTiming_0 * 1.0 * (this.waveTiming_0 - 1 | 0) / this.lastWaveMaxTiming_0) + 1);
    if (this.waveTiming_0 < 1) {
      this.waveTiming_0 = 1;
    }this.lastWaveMaxTiming_0 = this.waveMaxTiming_0;
    var x_3 = wave.L / 10.0;
    this.f800l_0 = numberToInt(Math_0.ceil(x_3));
    switch (this.waveConstructB_0) {
      case 0:
        this.waveStrength_0 = (this.waveStrength_0 * waveC + 1.0) / waveC;
        if (wavePC === 4) {
          if (this.waveMaxTiming_0 > 1) {
            waveA = waveA + (Kotlin.imul(waveB - waveA | 0, this.waveTiming_0 - 1 | 0) / (this.waveMaxTiming_0 - 1 | 0) | 0) | 0;
          }} else if (wavePC === 3) {
          waveA = numberToInt(waveA + (waveB - waveA | 0) * (waveC * this.waveStrength_0 - 1.0) / (waveC - 1 | 0));
        } else if (wavePC === 2) {
          waveA = numberToInt(waveA + (waveB - waveA | 0) * 1.0 * (this.waveTiming_0 + (waveC * this.waveStrength_0 - 1.0) / (waveC - 1 | 0) - 1.0) / this.waveMaxTiming_0);
        }
        var x_4 = waveA / 1000.0;
        this.f805q_0 = numberToInt(Math_0.pow(10.0, x_4));
        this.f806r_0 = waveDataList[numberToInt(waveC * this.waveStrength_0) - 1 | 0].y;
        var $receiver_2 = this.f805q_0 / 1000.0;
        var pow = numberToInt(Math_0.pow($receiver_2, 0.5) * wave.ZY);
        if (pow < 1) {
          pow = 1;
        }
        var i7 = this.f805q_0 - pow | 0;
        this.wavePlot_0(pow, i7, numberToInt(this.f806r_0));
        var binaryString = toString_0(pow, 2);
        var binaryString2 = toString_0(i7, 2);
        var binaryString3 = toString_0(numberToInt(this.f806r_0), 2);
        while (binaryString.length < 5) {
          binaryString = '0' + binaryString;
        }

        while (binaryString2.length < 10) {
          binaryString2 = '0' + binaryString2;
        }

        while (binaryString3.length < 5) {
          binaryString3 = '0' + binaryString3;
        }

        var result = KDataUtils_getInstance().convertStringToByteArray('0000' + binaryString3 + binaryString2 + binaryString);
        if (this.waveStrength_0 >= 1.0) {
          this.waveStrength_0 = 0.0;
          this.waveTiming_0 = this.waveTiming_0 + 1 | 0;
          if (this.waveTiming_0 > this.waveMaxTiming_0) {
            this.waveTiming_0 = 1;
            if (this.waveConstructA_0 === 0) {
              if (wave.JIE1 === 1) {
                this.waveConstructA_0 = 1;
                tmp$ = result;
              } else if (wave.JIE2 === 1) {
                this.waveConstructA_0 = 2;
                tmp$ = result;
              } else if (this.f800l_0 === 0) {
                this.waveConstructB_0 = 0;
                this.waveConstructA_0 = 0;
                tmp$ = result;
              } else {
                this.waveConstructB_0 = 1;
                tmp$ = result;
              }
              return tmp$;
            } else if (this.waveConstructA_0 === 1) {
              if (wave.JIE2 === 1) {
                this.waveConstructA_0 = 2;
                tmp$_0 = result;
              } else if (this.f800l_0 === 0) {
                this.waveConstructB_0 = 0;
                this.waveConstructA_0 = 0;
                tmp$_0 = result;
              } else {
                this.waveConstructB_0 = 1;
                tmp$_0 = result;
              }
              return tmp$_0;
            } else if (this.waveConstructA_0 !== 2)
              return result;
            else {
              if (this.f800l_0 === 0) {
                this.waveConstructB_0 = 0;
                this.waveConstructA_0 = 0;
                return result;
              }this.waveConstructB_0 = 1;
              return result;
            }
          } else {
            return result;
          }
        } else {
          return result;
        }

      case 1:
        this.waveStrength_0 = (this.waveStrength_0 * this.f800l_0 + 1.0) / this.f800l_0;
        this.f806r_0 = 0.0;
        this.f805q_0 = 10;
        this.wavePlot_0(0.0, 0, 0);
        var binaryString4 = toString_0(0, 2);
        var binaryString5 = toString_0(0, 2);
        var binaryString6 = toString_0(0, 2);
        while (binaryString4.length < 5) {
          binaryString4 = '0' + binaryString4;
        }

        while (binaryString5.length < 10) {
          binaryString5 = '0' + binaryString5;
        }

        while (binaryString6.length < 5) {
          binaryString6 = '0' + binaryString6;
        }

        var result_0 = KDataUtils_getInstance().convertStringToByteArray('0000' + binaryString6 + binaryString5 + binaryString4);
        if (this.waveStrength_0 >= 1.0) {
          this.waveStrength_0 = 0.0;
          this.waveConstructB_0 = 0;
          this.waveConstructA_0 = 0;
          return result_0;
        }
        return result_0;
      default:return new Int8Array([]);
    }
  };
  WaveCenter.prototype.fromTouchRawToByteArray_lu1900$ = function (x, y) {
    var x_0 = y * 2.5 + 0.5;
    var pow = Math_0.pow(10.0, x_0);
    if (pow < 10.0) {
      pow = 10.0;
    }var x_1 = x * 2.0 - 1.0;
    var $receiver = Math_0.abs(x_1);
    var pow2 = 20.0 - Math_0.pow($receiver, 1.65) * 20.0;
    var $receiver_0 = pow / 1000.0;
    var pow3 = numberToInt(Math_0.pow($receiver_0, 0.5) * 8.0);
    if (pow3 < 1) {
      pow3 = 1;
    }var i2 = numberToInt(pow - pow3);
    var i3 = numberToInt(pow2);
    this.wavePlot_0(pow, i2, i3);
    var binaryString = toString_0(pow3, 2);
    var binaryString2 = toString_0(i2, 2);
    var binaryString3 = toString_0(i3, 2);
    while (binaryString.length < 5) {
      binaryString = '0' + binaryString;
    }
    while (binaryString2.length < 10) {
      binaryString2 = '0' + binaryString2;
    }
    while (binaryString3.length < 5) {
      binaryString3 = '0' + binaryString3;
    }
    return KDataUtils_getInstance().convertStringToByteArray('0000' + binaryString3 + binaryString2 + binaryString);
  };
  WaveCenter.prototype.fromTouchWaveToByteArray_0 = function (wave) {
    var time = this.timeSeqTouch_0 % wave.data.length;
    var ax = wave.data[time].ax;
    var ay = wave.data[time].ay;
    var az = wave.data[time].az;
    this.wavePlot_0(ax, az, ay);
    var binaryString4 = toString_0(ax, 2);
    var binaryString5 = toString_0(ay, 2);
    var binaryString6 = toString_0(az, 2);
    while (binaryString4.length < 5) {
      binaryString4 = '0' + binaryString4;
    }
    while (binaryString5.length < 10) {
      binaryString5 = '0' + binaryString5;
    }
    while (binaryString6.length < 5) {
      binaryString6 = '0' + binaryString6;
    }
    return KDataUtils_getInstance().convertStringToByteArray('0000' + binaryString6 + binaryString5 + binaryString4);
  };
  WaveCenter.prototype.resetWave = function () {
    this.timeSeqTouch_0 = 0;
    this.waveConstructA_0 = 0;
    this.waveMaxTiming_0 = 0;
    this.waveTiming_0 = 0;
    this.lastWaveMaxTiming_0 = 0;
    this.f800l_0 = 0;
    this.waveConstructB_0 = 0;
    this.waveStrength_0 = 0.0;
    this.f805q_0 = 0;
    this.f806r_0 = 0.0;
    this.f811w_0 = 0;
    this.f812x_0 = 0;
    this.f785A_0 = 0;
    this.f813y_0 = new Int32Array(100);
    this.f814z_0 = new Int32Array(100);
    this.touchRaw.x = 0.0;
    this.touchRaw.y = 0.0;
  };
  WaveCenter.prototype.inputTouch = function (x, y) {
    if (rangeTo(0.0, 1.0).contains_mef7kx$(x) && rangeTo(0.0, 1.0).contains_mef7kx$(y)) {
      this.touchRaw.x = x;
      this.touchRaw.y = y;
    }};
  WaveCenter.prototype.selectWave = function (select) {
    this.wave_0 = select;
    this.timeSeqTouch_0 = 0;
    this.waveMaxTiming_0 = 0;
    this.waveTiming_0 = 0;
    this.lastWaveMaxTiming_0 = 0;
    this.f800l_0 = 0;
    this.waveConstructB_0 = 0;
    this.waveStrength_0 = 0.0;
    this.f805q_0 = 0;
    this.f806r_0 = 0.0;
    this.f811w_0 = 0;
    this.f812x_0 = 0;
    this.f785A_0 = 0;
    this.f813y_0 = new Int32Array(100);
    this.f814z_0 = new Int32Array(10);
    this.touchRaw.x = 0.0;
    this.touchRaw.y = 0.0;
  };
  WaveCenter.prototype.toDGWaveGen = function () {
    var waveCopy = this.wave_0;
    if (Kotlin.isType(waveCopy, WaveCenter$BasicWaveData)) {
      return WaveCenter$Companion_getInstance().toDGWaveGen(waveCopy);
    }return null;
  };
  WaveCenter.prototype.getWavePlot = function () {
    return this.f814z_0;
  };
  WaveCenter.prototype.wavePlot_0 = function (pow, i2, i3) {
    for (var i4 = 0; i4 <= 99; i4++) {
      if (this.f811w_0 < pow && this.f812x_0 === 0) {
        this.f813y_0[i4] = 1;
        this.f811w_0 = this.f811w_0 + 1 | 0;
      } else {
        this.f811w_0 = 0;
        if (this.f812x_0 < i2) {
          this.f813y_0[i4] = 0;
          this.f812x_0 = this.f812x_0 + 1 | 0;
        } else {
          if (pow === 0.0) {
            this.f813y_0[i4] = 0;
          } else {
            this.f813y_0[i4] = 1;
          }
          this.f811w_0 = 1;
          this.f812x_0 = 0;
        }
      }
    }
    for (var i5 = 0; i5 <= 9; i5++) {
      var i6 = i5 * 10 | 0;
      if (this.f813y_0[i6] === 0 && this.f813y_0[i6 + 1 | 0] === 0 && this.f813y_0[i6 + 2 | 0] === 0 && this.f813y_0[i6 + 3 | 0] === 0 && this.f813y_0[i6 + 4 | 0] === 0 && this.f813y_0[i6 + 5 | 0] === 0 && this.f813y_0[i6 + 6 | 0] === 0 && this.f813y_0[i6 + 7 | 0] === 0 && this.f813y_0[i6 + 8 | 0] === 0 && this.f813y_0[i6 + 9 | 0] === 0) {
        this.f814z_0[i5] = 0;
      } else {
        this.f814z_0[i5] = this.f785A_0 + (Kotlin.imul(i3 - this.f785A_0 | 0, i5 + 1 | 0) / 10 | 0) | 0;
      }
    }
    this.f785A_0 = i3;
  };
  WaveCenter.prototype.waveTick = function () {
    var tmp$;
    var waveCopy = this.wave_0;
    if (waveCopy == null) {
      this.timeSeqTouch_0 = 0;
      this.waveMaxTiming_0 = 0;
      this.waveTiming_0 = 0;
      this.lastWaveMaxTiming_0 = 0;
      this.f800l_0 = 0;
      this.waveConstructB_0 = 0;
      this.waveStrength_0 = 0.0;
      this.f805q_0 = 0;
      this.f806r_0 = 0.0;
      this.f811w_0 = 0;
      this.f812x_0 = 0;
      this.f785A_0 = 0;
      this.touchRaw.x = 0.0;
      this.touchRaw.y = 0.0;
      this.f813y_0 = new Int32Array(100);
      this.f814z_0 = new Int32Array(100);
      return null;
    }if (Kotlin.isType(waveCopy, WaveCenter$TouchWaveData)) {
      var $receiver = this.fromTouchWaveToByteArray_0(waveCopy);
      this.timeSeqTouch_0 = this.timeSeqTouch_0 + 1 | 0;
      tmp$ = $receiver;
    } else if (Kotlin.isType(waveCopy, WaveCenter$BasicWaveData))
      tmp$ = this.fromBasicWaveToByteArray_0(waveCopy);
    else if (Kotlin.isType(waveCopy, WaveCenter$TouchRaw))
      tmp$ = this.fromTouchRawToByteArray_lu1900$(waveCopy.x, waveCopy.y);
    else {
      tmp$ = null;
    }
    return tmp$;
  };
  WaveCenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveCenter',
    interfaces: []
  };
  Object.defineProperty(_, 'KDataUtils', {
    get: KDataUtils_getInstance
  });
  OpenDGLab.WriteBLE = OpenDGLab$WriteBLE;
  OpenDGLab.Constants = OpenDGLab$Constants;
  Object.defineProperty(OpenDGLab$Device, 'Companion', {
    get: OpenDGLab$Device$Companion_getInstance
  });
  OpenDGLab.Device = OpenDGLab$Device;
  Object.defineProperty(OpenDGLab$DeviceStatus, 'Companion', {
    get: OpenDGLab$DeviceStatus$Companion_getInstance
  });
  Object.defineProperty(OpenDGLab$DeviceStatus$DFU, 'Companion', {
    get: OpenDGLab$DeviceStatus$DFU$Companion_getInstance
  });
  OpenDGLab$DeviceStatus.DFU = OpenDGLab$DeviceStatus$DFU;
  Object.defineProperty(OpenDGLab$DeviceStatus$Electric, 'Companion', {
    get: OpenDGLab$DeviceStatus$Electric$Companion_getInstance
  });
  OpenDGLab$DeviceStatus.Electric = OpenDGLab$DeviceStatus$Electric;
  OpenDGLab.DeviceStatus = OpenDGLab$DeviceStatus;
  Object.defineProperty(OpenDGLab$EStimStatus, 'Companion', {
    get: OpenDGLab$EStimStatus$Companion_getInstance
  });
  Object.defineProperty(OpenDGLab$EStimStatus$Setup, 'Companion', {
    get: OpenDGLab$EStimStatus$Setup$Companion_getInstance
  });
  OpenDGLab$EStimStatus.Setup = OpenDGLab$EStimStatus$Setup;
  Object.defineProperty(OpenDGLab$EStimStatus$ABPower, 'Companion', {
    get: OpenDGLab$EStimStatus$ABPower$Companion_getInstance
  });
  OpenDGLab$EStimStatus.ABPower = OpenDGLab$EStimStatus$ABPower;
  Object.defineProperty(OpenDGLab$EStimStatus$Wave, 'Companion', {
    get: OpenDGLab$EStimStatus$Wave$Companion_getInstance
  });
  Object.defineProperty(OpenDGLab$EStimStatus$Wave$WaveChannel, 'CHANNEL_A', {
    get: OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_A_getInstance
  });
  Object.defineProperty(OpenDGLab$EStimStatus$Wave$WaveChannel, 'CHANNEL_B', {
    get: OpenDGLab$EStimStatus$Wave$WaveChannel$CHANNEL_B_getInstance
  });
  OpenDGLab$EStimStatus$Wave.WaveChannel = OpenDGLab$EStimStatus$Wave$WaveChannel;
  OpenDGLab$EStimStatus.Wave = OpenDGLab$EStimStatus$Wave;
  OpenDGLab.EStimStatus = OpenDGLab$EStimStatus;
  _.OpenDGLab = OpenDGLab;
  WaveCenter.BasicWave = WaveCenter$BasicWave;
  WaveCenter.TouchRaw = WaveCenter$TouchRaw;
  WaveCenter.WaveDetail = WaveCenter$WaveDetail;
  WaveCenter.BasicWaveData = WaveCenter$BasicWaveData;
  WaveCenter.BasicDataBean = WaveCenter$BasicDataBean;
  WaveCenter.TouchWaveData = WaveCenter$TouchWaveData;
  WaveCenter.TouchDataBean = WaveCenter$TouchDataBean;
  Object.defineProperty(WaveCenter, 'Companion', {
    get: WaveCenter$Companion_getInstance
  });
  _.WaveCenter = WaveCenter;
  Kotlin.defineModule('DGLab', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=DGLab.js.map
