(function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$Kotlin_DateTime_library_kotlinx_datetime_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.Json;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Pair = Kotlin.kotlin.Pair;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var removeFirstOrNull = Kotlin.kotlin.collections.removeFirstOrNull_vvxzk3$;
  var List = Kotlin.kotlin.collections.List;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var JsonElement = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.JsonElement;
  var get_jsonObject = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.get_jsonObject_u3sd3g$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_jsonPrimitive = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.get_jsonPrimitive_u3sd3g$;
  var equals = Kotlin.equals;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Clock = $module$Kotlin_DateTime_library_kotlinx_datetime_jsLegacy.kotlinx.datetime.Clock;
  var PrimitiveClasses$arrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.arrayClass;
  var get_int = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.get_int_59esu7$;
  var L0 = Kotlin.Long.ZERO;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Unit = Kotlin.kotlin.Unit;
  var Json_0 = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.Json_x26noe$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
  var KSerializer_0 = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var hashCode = Kotlin.hashCode;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.ReferenceArraySerializer;
  function Auth() {
    this.uuid_0 = '';
    this.token_0 = '';
    this.email_0 = '';
  }
  Auth.prototype.loginWithEmail = function (email) {
    this.email_0 = email;
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/emailCodeSend', 'POST', 'email=' + email, 0);
  };
  Auth.prototype.loginCode = function (code) {
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/emailRegVerify', 'POST', 'email=' + this.email_0 + '&psw=' + code, 1);
  };
  Auth.prototype.loginWithToken = function (token) {
    this.token_0 = token;
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('token', token), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/tokenVerify', 'POST', '', 2);
  };
  Auth.prototype.isReady = function () {
    var tmp$ = this.token_0.length > 0;
    if (tmp$) {
      tmp$ = this.uuid_0.length > 0;
    }return tmp$;
  };
  Auth.prototype.getToken = function () {
    return this.token_0;
  };
  Auth.prototype.getUUID = function () {
    return this.uuid_0;
  };
  Auth.prototype.process = function (data, requestCode) {
    switch (requestCode) {
      case 0:
        var $receiver = Json.Default;
        var tmp$;
        $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(Structure$Response$Common), [], false)), KSerializer) ? tmp$ : throwCCE(), data);
        break;
      case 1:
        var $receiver_0 = Json.Default;
        var tmp$_0;
        var login = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver_0.serializersModule, createKType(getKClass(Structure$Response$Login), [], false)), KSerializer) ? tmp$_0 : throwCCE(), data);
        if (login.code === 200) {
          this.token_0 = login.token;
          this.uuid_0 = login.uuid;
        }
        break;
      case 2:
        var $receiver_1 = Json.Default;
        var tmp$_1;
        var login_0 = $receiver_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer($receiver_1.serializersModule, createKType(getKClass(Structure$Response$TokenVerify), [], false)), KSerializer) ? tmp$_1 : throwCCE(), data);
        if (login_0.code === 200) {
          this.uuid_0 = login_0.uuid;
        }
        break;
    }
  };
  Auth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Auth',
    interfaces: []
  };
  function DGRemote() {
    DGRemote$Companion_getInstance();
  }
  function DGRemote$Companion() {
    DGRemote$Companion_instance = this;
  }
  DGRemote$Companion.prototype.identifyProtocolVersion = function (data) {
    var tmp$;
    if (contains(data, 'msgType')) {
      tmp$ = 'V2';
    } else {
      tmp$ = 'V1';
    }
    return tmp$;
  };
  DGRemote$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DGRemote$Companion_instance = null;
  function DGRemote$Companion_getInstance() {
    if (DGRemote$Companion_instance === null) {
      new DGRemote$Companion();
    }return DGRemote$Companion_instance;
  }
  DGRemote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DGRemote',
    interfaces: []
  };
  function DGRemoteV1() {
  }
  function DGRemoteV1$Controller(auth, qrUrl) {
    this.auth = auth;
    this.randomCode = split(qrUrl, ['#']).get_za3lpa$(1);
    this.limitA_0 = 0;
    this.limitB_0 = 0;
    this.toID_0 = '';
    this.sendArray_0 = ArrayList_init();
    this.packedSendArray_0 = ArrayList_init();
  }
  DGRemoteV1$Controller.prototype.joinControl = function () {
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('token', this.auth.getToken()), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/joinControl', 'POST', 'randomCode=' + this.randomCode, 0);
  };
  DGRemoteV1$Controller.prototype.getNIMConnect = function () {
    return new Structure$NIMAuth(Structure$Companion_getInstance().appKey, this.auth.getUUID(), this.auth.getToken());
  };
  DGRemoteV1$Controller.prototype.connect = function () {
    var tmp$ = this.toID_0;
    var tmp$_0 = Json.Default;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V1$JoinDetail(this.auth.getUUID(), 3);
    var tmp$_1;
    var value_0 = new Structure$NIM$V1$Join(200, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_1 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V1$JoinDetail), [], false)), KSerializer) ? tmp$_1 : throwCCE(), value), 1);
    var tmp$_2;
    return new Structure$NIMMessage(tmp$, tmp$_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_2 = serializer(tmp$_0.serializersModule, createKType(getKClass(Structure$NIM$V1$Join), [], false)), KSerializer) ? tmp$_2 : throwCCE(), value_0));
  };
  DGRemoteV1$Controller.prototype.disconnect = function () {
    var tmp$ = this.toID_0;
    var tmp$_0 = Json.Default;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V1$DisconnectDetail(2);
    var tmp$_1;
    var value_0 = new Structure$NIM$V1$Disconnect(200, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_1 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V1$DisconnectDetail), [], false)), KSerializer) ? tmp$_1 : throwCCE(), value), 1);
    var tmp$_2;
    return new Structure$NIMMessage(tmp$, tmp$_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_2 = serializer(tmp$_0.serializersModule, createKType(getKClass(Structure$NIM$V1$Disconnect), [], false)), KSerializer) ? tmp$_2 : throwCCE(), value_0));
  };
  DGRemoteV1$Controller.prototype.getLimit = function () {
    return new Pair(this.limitA_0, this.limitB_0);
  };
  DGRemoteV1$Controller.prototype.canOnline = function () {
    return this.toID_0.length > 0;
  };
  DGRemoteV1$Controller.prototype.heartbeat = function () {
    return new Structure$NIMMessage(this.toID_0, '998');
  };
  DGRemoteV1$Controller.prototype.prepareSend = function (channel, strength, bytes) {
    if (strength < 0)
      return;
    if (channel === 1 && strength > this.limitA_0)
      return;
    if (channel === 2 && strength > this.limitB_0)
      return;
    this.sendArray_0.add_11rb$(new Structure$NIM$V1$SendWaveAndStrength(channel, bytes, strength));
    this.sendPack();
  };
  DGRemoteV1$Controller.prototype.forcePack = function () {
    var tmp$ = Json.Default;
    var $receiver = new IntRange(0, 6);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = removeFirstOrNull(this.sendArray_0)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var tmp$_1;
    var msg = tmp$.encodeToString_tf03ej$(Kotlin.isType(tmp$_1 = serializer(tmp$.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(Structure$NIM$V1$SendWaveAndStrength), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), destination);
    var tmp$_2 = this.packedSendArray_0;
    var $receiver_0 = Json.Default;
    var value = new Structure$NIM$V1$WaveStrengthMsg(msg);
    var tmp$_3;
    tmp$_2.add_11rb$($receiver_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_3 = serializer($receiver_0.serializersModule, createKType(getKClass(Structure$NIM$V1$WaveStrengthMsg), [], false)), KSerializer) ? tmp$_3 : throwCCE(), value));
  };
  DGRemoteV1$Controller.prototype.sendPack = function () {
    if (this.sendArray_0.size < 6)
      return;
    var tmp$ = Json.Default;
    var $receiver = new IntRange(0, 6);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = removeFirstOrNull(this.sendArray_0)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var tmp$_1;
    var msg = tmp$.encodeToString_tf03ej$(Kotlin.isType(tmp$_1 = serializer(tmp$.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(Structure$NIM$V1$SendWaveAndStrength), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), destination);
    var tmp$_2 = this.packedSendArray_0;
    var $receiver_0 = Json.Default;
    var value = new Structure$NIM$V1$WaveStrengthMsg(msg);
    var tmp$_3;
    tmp$_2.add_11rb$($receiver_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_3 = serializer($receiver_0.serializersModule, createKType(getKClass(Structure$NIM$V1$WaveStrengthMsg), [], false)), KSerializer) ? tmp$_3 : throwCCE(), value));
  };
  DGRemoteV1$Controller.prototype.clearSend = function () {
    this.sendArray_0.clear();
    this.packedSendArray_0.clear();
  };
  DGRemoteV1$Controller.prototype.getSend = function () {
    var tmp$;
    tmp$ = removeFirstOrNull(this.packedSendArray_0);
    if (tmp$ == null) {
      return null;
    }var wave = tmp$;
    return new Structure$NIMMessage(this.toID_0, wave);
  };
  DGRemoteV1$Controller.prototype.processNIM = function (data) {
    var tmp$;
    var $receiver = Json.Default;
    var tmp$_0;
    var jsonData = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_0 : throwCCE(), data);
    var from = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('from'))).content;
    if (this.toID_0.length > 0 && !equals(from, this.toID_0))
      return null;
    var text = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('text'))).content;
    switch (text) {
      case 'a1':
        tmp$ = new Structure$FeelingMessage(1, '\u518D\u5F3A\u70B9');
        break;
      case 'a2':
        tmp$ = new Structure$FeelingMessage(1, '\u8F7B\u4E00\u70B9');
        break;
      case 'a3':
        tmp$ = new Structure$FeelingMessage(1, '\u597D\u8212\u670D');
        break;
      case 'a4':
        tmp$ = new Structure$FeelingMessage(1, '\u6362\u4E00\u4E2A');
        break;
      case 'b1':
        tmp$ = new Structure$FeelingMessage(2, '\u518D\u5F3A\u70B9');
        break;
      case 'b2':
        tmp$ = new Structure$FeelingMessage(2, '\u8F7B\u4E00\u70B9');
        break;
      case 'b3':
        tmp$ = new Structure$FeelingMessage(2, '\u597D\u8212\u670D');
        break;
      case 'b4':
        tmp$ = new Structure$FeelingMessage(2, '\u6362\u4E00\u4E2A');
        break;
      default:tmp$ = null;
        break;
    }
    return tmp$;
  };
  DGRemoteV1$Controller.prototype.process = function (data, requestCode) {
    if (requestCode === 0) {
      var $receiver = Json.Default;
      var tmp$;
      var join = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(Structure$Response$JoinControl), [], false)), KSerializer) ? tmp$ : throwCCE(), data);
      if (join.code === 200) {
        this.limitA_0 = join.strengthA;
        this.limitB_0 = join.strengthB;
        this.toID_0 = join.toID;
      }}};
  DGRemoteV1$Controller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Controller',
    interfaces: []
  };
  function DGRemoteV1$Controlled(auth, strengthA, strengthB, limitA, limitB) {
    this.auth = auth;
    this.strengthA = strengthA;
    this.strengthB = strengthB;
    this.limitA = limitA;
    this.limitB = limitB;
    this.randomCode_0 = '';
    this.toID_0 = '';
    this.lastHeartbeat_0 = L0;
  }
  DGRemoteV1$Controlled.prototype.requestControl = function () {
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('token', this.auth.getToken()), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/getIMConnectCode', 'POST', 'type=1&strengthA=' + this.limitA + '&strengthB=' + this.limitB + '&limited=0', 0);
  };
  DGRemoteV1$Controlled.prototype.logoutControl = function () {
    return new Structure$Request([new Structure$Header('device', 'android'), new Structure$Header('token', this.auth.getToken()), new Structure$Header('la', '0')], 'application/x-www-form-urlencoded', 'https://dungeon-server.com:8445/accidentalIMLogOut', 'POST', 'a=0', 1);
  };
  DGRemoteV1$Controlled.prototype.getQrUrl = function () {
    var tmp$;
    if (this.randomCode_0.length > 0) {
      tmp$ = Structure$Companion_getInstance().qrUrl + '#' + this.randomCode_0;
    } else {
      tmp$ = null;
    }
    return tmp$;
  };
  DGRemoteV1$Controlled.prototype.getNIMConnect = function () {
    return new Structure$NIMAuth(Structure$Companion_getInstance().appKey, this.auth.getUUID(), this.auth.getToken());
  };
  DGRemoteV1$Controlled.prototype.isOnline = function () {
    return this.toID_0.length > 0;
  };
  DGRemoteV1$Controlled.prototype.getHeartbeatPassed = function () {
    return Clock.System.now().toEpochMilliseconds().subtract(this.lastHeartbeat_0);
  };
  DGRemoteV1$Controlled.prototype.forceDropCurrent = function () {
    this.toID_0 = '';
  };
  DGRemoteV1$Controlled.prototype.sendFeeling = function (channel, feeling) {
    return new Structure$NIMMessage(this.toID_0, (channel === 1 ? 'a' : 'b') + feeling);
  };
  DGRemoteV1$Controlled.prototype.processNIM = function (data) {
    var $receiver = Json.Default;
    var tmp$;
    var jsonData = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$ : throwCCE(), data);
    var from = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('from'))).content;
    if (this.toID_0.length > 0 && !equals(from, this.toID_0))
      return null;
    var text = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('text'))).content;
    if (equals(text, '998')) {
      this.lastHeartbeat_0 = Clock.System.now().toEpochMilliseconds();
      return null;
    }var $receiver_0 = Json.Default;
    var tmp$_0;
    var textData = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver_0.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_0 : throwCCE(), text);
    if (get_jsonObject(textData).containsKey_11rb$('msg')) {
      var wave = get_jsonPrimitive(ensureNotNull(get_jsonObject(textData).get_11rb$('msg'))).content;
      var $receiver_1 = Json.Default;
      var tmp$_1;
      var array = $receiver_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer($receiver_1.serializersModule, createKType(PrimitiveClasses$arrayClass, [createInvariantKTypeProjection(createKType(getKClass(Structure$NIM$V1$SendWaveAndStrength), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), wave);
      var destination = ArrayList_init();
      var tmp$_2;
      loop_label: for (tmp$_2 = 0; tmp$_2 !== array.length; ++tmp$_2) {
        var element = array[tmp$_2];
        var tmp$_0_0;
        var transform$result;
        transform$break: do {
          switch (element.channel) {
            case 1:
              if (element.strength <= this.limitA) {
                transform$result = new Structure$NIM$V1$SendWaveAndStrength(1, element.bytes, this.strengthA + element.strength | 0);
                break transform$break;
              }
              transform$result = null;
              break transform$break;
            case 2:
              if (element.strength <= this.limitB) {
                transform$result = new Structure$NIM$V1$SendWaveAndStrength(2, element.bytes, this.strengthB + element.strength | 0);
                break transform$break;
              }
              transform$result = null;
              break transform$break;
            default:transform$result = null;
              break transform$break;
          }
        }
         while (false);
        if ((tmp$_0_0 = transform$result) != null) {
          destination.add_11rb$(tmp$_0_0);
        }}
      return copyToArray(destination);
    } else {
      var content = get_jsonObject(textData).get_11rb$('content');
      if (content != null) {
        var $receiver_2 = Json.Default;
        var string = get_jsonPrimitive(content).content;
        var tmp$_3;
        var parseContent = $receiver_2.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer($receiver_2.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_3 : throwCCE(), string);
        var status = get_int(get_jsonPrimitive(ensureNotNull(get_jsonObject(parseContent).get_11rb$('status'))));
        if (status === 3) {
          this.toID_0 = get_jsonPrimitive(ensureNotNull(get_jsonObject(parseContent).get_11rb$('id'))).content;
        } else if (status === 2) {
          this.toID_0 = '';
        }}return null;
    }
  };
  DGRemoteV1$Controlled.prototype.process = function (data, requestCode) {
    switch (requestCode) {
      case 0:
        var $receiver = Json.Default;
        var tmp$;
        var code = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(Structure$Response$IMConnectCode), [], false)), KSerializer) ? tmp$ : throwCCE(), data);
        if (code.code === 200) {
          this.randomCode_0 = code.randomcode;
        }
        break;
      case 1:
        this.randomCode_0 = '';
        break;
    }
  };
  DGRemoteV1$Controlled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Controlled',
    interfaces: []
  };
  DGRemoteV1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DGRemoteV1',
    interfaces: []
  };
  function DGRemoteV2() {
  }
  function DGRemoteV2$Controller(auth, qrUrl) {
    this.auth = auth;
    this.qrUrl = qrUrl;
    this.toID = removeSuffix(split(this.qrUrl, ['#']).get_za3lpa$(1), '2020');
    this.limitA = 0;
    this.limitB = 0;
    this.startA = 0;
    this.startB = 0;
    this.aIncrease = 0;
    this.bIncrease = 0;
    this.sendArray = ArrayList_init();
    this.packedSendArray = ArrayList_init();
    this.isConnected = false;
    this.shouldDoConfig = false;
  }
  DGRemoteV2$Controller.prototype.getNIMConnect = function () {
    return new Structure$NIMAuth(Structure$Companion_getInstance().appKey, this.auth.getUUID(), this.auth.getToken());
  };
  DGRemoteV2$Controller.prototype.connect = function () {
    var tmp$ = this.toID;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V2$Connect(0, 0, '2020');
    var tmp$_0;
    return new Structure$NIMMessage(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V2$Connect), [], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
  };
  DGRemoteV2$Controller.prototype.disconnect = function () {
    var tmp$ = this.toID;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V2$Connect(0, 2, '2020');
    var tmp$_0;
    return new Structure$NIMMessage(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V2$Connect), [], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
  };
  DGRemoteV2$Controller.prototype.isConnect = function () {
    return this.isConnected;
  };
  DGRemoteV2$Controller.prototype.getLimit = function () {
    return new Pair(this.limitA, this.limitB);
  };
  DGRemoteV2$Controller.prototype.shouldConfig = function () {
    if (this.shouldDoConfig) {
      this.shouldDoConfig = false;
      return true;
    }return false;
  };
  DGRemoteV2$Controller.prototype.prepareSend = function (channel, strength, bytes) {
    if (strength < 0)
      return;
    if (channel === 1 && strength > this.limitA)
      return;
    if (channel === 2 && strength > this.limitB)
      return;
    this.sendArray.add_11rb$(new Structure$NIM$V2$WaveAndStrength(bytes, channel, strength - 1 | 0));
    this.sendPack();
  };
  DGRemoteV2$Controller.prototype.forcePack = function () {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = new IntRange(0, 8);
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = removeFirstOrNull(this.sendArray)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var msg = destination;
    tmp$_1 = this.packedSendArray;
    tmp$_0 = Json.Default;
    tmp$ = copyToArray(msg);
    var tmp$_3 = Json.Default;
    var value = copyToArray(msg);
    var tmp$_4;
    var value_0 = new Structure$NIM$V2$Wave(3, tmp$_3.encodeToString_tf03ej$(Kotlin.isType(tmp$_4 = serializer(tmp$_3.serializersModule, createKType(PrimitiveClasses$arrayClass, [createInvariantKTypeProjection(createKType(getKClass(Structure$NIM$V2$WaveAndStrength), [], false))], false)), KSerializer) ? tmp$_4 : throwCCE(), value), tmp$);
    var tmp$_5;
    tmp$_1.add_11rb$(tmp$_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_5 = serializer(tmp$_0.serializersModule, createKType(getKClass(Structure$NIM$V2$Wave), [], false)), KSerializer) ? tmp$_5 : throwCCE(), value_0));
  };
  DGRemoteV2$Controller.prototype.sendPack = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.sendArray.size < 8)
      return;
    var $receiver = new IntRange(0, 8);
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = removeFirstOrNull(this.sendArray)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var msg = destination;
    tmp$_1 = this.packedSendArray;
    tmp$_0 = Json.Default;
    tmp$ = copyToArray(msg);
    var tmp$_3 = Json.Default;
    var value = copyToArray(msg);
    var tmp$_4;
    var value_0 = new Structure$NIM$V2$Wave(3, tmp$_3.encodeToString_tf03ej$(Kotlin.isType(tmp$_4 = serializer(tmp$_3.serializersModule, createKType(PrimitiveClasses$arrayClass, [createInvariantKTypeProjection(createKType(getKClass(Structure$NIM$V2$WaveAndStrength), [], false))], false)), KSerializer) ? tmp$_4 : throwCCE(), value), tmp$);
    var tmp$_5;
    tmp$_1.add_11rb$(tmp$_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_5 = serializer(tmp$_0.serializersModule, createKType(getKClass(Structure$NIM$V2$Wave), [], false)), KSerializer) ? tmp$_5 : throwCCE(), value_0));
  };
  DGRemoteV2$Controller.prototype.clearSend = function () {
    this.sendArray.clear();
    this.packedSendArray.clear();
  };
  DGRemoteV2$Controller.prototype.getSend = function () {
    var tmp$;
    tmp$ = removeFirstOrNull(this.packedSendArray);
    if (tmp$ == null) {
      return null;
    }var wave = tmp$;
    return new Structure$NIMMessage(this.toID, wave);
  };
  function DGRemoteV2$Controller$processNIM$lambda($receiver) {
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  function DGRemoteV2$Controller$processNIM$lambda_0($receiver) {
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  function DGRemoteV2$Controller$processNIM$lambda_1($receiver) {
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  DGRemoteV2$Controller.prototype.processNIM = function (data) {
    var tmp$;
    var $receiver = Json.Default;
    var tmp$_0;
    var jsonData = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_0 : throwCCE(), data);
    var from = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('from'))).content;
    if (this.toID.length > 0 && !equals(from, this.toID))
      return null;
    var text = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('text'))).content;
    var $receiver_0 = Json.Default;
    var tmp$_1;
    var content = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer($receiver_0.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_1 : throwCCE(), text);
    switch (get_int(get_jsonPrimitive(ensureNotNull(get_jsonObject(content).get_11rb$('msgType'))))) {
      case 0:
        var $receiver_1 = Json_0(void 0, DGRemoteV2$Controller$processNIM$lambda);
        var $receiver_0_0 = $receiver_1.serializersModule;
        var tmp$_2;
        var c = $receiver_1.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$_2 = serializer_0($receiver_0_0, createKType(getKClass(Structure$NIM$V2$Config), [], false)), KSerializer_0) ? tmp$_2 : throwCCE(), content);
        if (c.conOrDiscon === 2) {
          this.isConnected = false;
          this.shouldDoConfig = false;
          this.limitA = 0;
          this.limitB = 0;
          this.startA = 0;
          this.startB = 0;
          this.aIncrease = 0;
          this.bIncrease = 0;
        } else {
          this.limitA = c.aStrengthRangeMax;
          this.limitB = c.bStrengthRangeMax;
          this.startA = c.realStrengthA - 9 | 0;
          this.startB = c.realStrengthB - 9 | 0;
          this.aIncrease = 0;
          this.bIncrease = 0;
          this.isConnected = true;
          this.shouldDoConfig = true;
        }

        tmp$ = null;
        break;
      case 4:
        var $receiver_2 = Json_0(void 0, DGRemoteV2$Controller$processNIM$lambda_0);
        var $receiver_0_1 = $receiver_2.serializersModule;
        var tmp$_3;
        var c_0 = $receiver_2.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$_3 = serializer_0($receiver_0_1, createKType(getKClass(Structure$NIM$V2$UpdateStrength), [], false)), KSerializer_0) ? tmp$_3 : throwCCE(), content);
        this.startA = c_0.realStrengthA - 9 - this.aIncrease | 0;
        this.startB = c_0.realStrengthB - 9 - this.bIncrease | 0;
        tmp$ = null;
        break;
      case 1:
        var $receiver_3 = Json_0(void 0, DGRemoteV2$Controller$processNIM$lambda_1);
        var $receiver_0_2 = $receiver_3.serializersModule;
        var tmp$_4;
        var c_1 = $receiver_3.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$_4 = serializer_0($receiver_0_2, createKType(getKClass(Structure$NIM$V2$Feeling), [], false)), KSerializer_0) ? tmp$_4 : throwCCE(), content);
        switch (c_1.feelIndex) {
          case 0:
            tmp$ = new Structure$FeelingMessage(1, '\u518D\u5F3A\u70B9');
            break;
          case 1:
            tmp$ = new Structure$FeelingMessage(1, '\u8F7B\u4E00\u70B9');
            break;
          case 2:
            tmp$ = new Structure$FeelingMessage(1, '\u597D\u8212\u670D');
            break;
          case 3:
            tmp$ = new Structure$FeelingMessage(1, '\u6362\u4E00\u4E2A');
            break;
          case 4:
            tmp$ = new Structure$FeelingMessage(2, '\u518D\u5F3A\u70B9');
            break;
          case 5:
            tmp$ = new Structure$FeelingMessage(2, '\u8F7B\u4E00\u70B9');
            break;
          case 6:
            tmp$ = new Structure$FeelingMessage(2, '\u597D\u8212\u670D');
            break;
          case 7:
            tmp$ = new Structure$FeelingMessage(2, '\u6362\u4E00\u4E2A');
            break;
          default:tmp$ = null;
            break;
        }

        break;
      default:tmp$ = null;
        break;
    }
    return tmp$;
  };
  DGRemoteV2$Controller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Controller',
    interfaces: []
  };
  function DGRemoteV2$Controlled(auth, strengthA, strengthB, limitA, limitB) {
    this.auth = auth;
    this.strengthA = strengthA;
    this.strengthB = strengthB;
    this.limitA = limitA;
    this.limitB = limitB;
    this.toID_0 = '';
    this.ack_0 = ArrayList_init();
  }
  DGRemoteV2$Controlled.prototype.getNIMConnect = function () {
    return new Structure$NIMAuth(Structure$Companion_getInstance().appKey, this.auth.getUUID(), this.auth.getToken());
  };
  DGRemoteV2$Controlled.prototype.getQrUrl = function () {
    return Structure$Companion_getInstance().qrUrl + '#' + this.auth.getUUID() + '2020';
  };
  DGRemoteV2$Controlled.prototype.setBaseStrength = function (a, b) {
    this.strengthA = a;
    this.strengthB = b;
    var tmp$ = this.toID_0;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V2$UpdateStrength(4, this.strengthA + 9 | 0, this.strengthB + 9 | 0);
    var tmp$_0;
    return new Structure$NIMMessage(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V2$UpdateStrength), [], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
  };
  DGRemoteV2$Controlled.prototype.canConnect = function () {
    return this.toID_0.length > 0;
  };
  DGRemoteV2$Controlled.prototype.needAck = function () {
    var tmp$;
    tmp$ = removeFirstOrNull(this.ack_0);
    if (tmp$ == null) {
      return null;
    }var msg = tmp$;
    return new Structure$NIMMessage(this.toID_0, msg);
  };
  DGRemoteV2$Controlled.prototype.disconnect = function () {
    var tmp$ = this.toID_0;
    var $receiver = Json.Default;
    var value = new Structure$NIM$V2$Connect(0, 2, '2020');
    var tmp$_0;
    return new Structure$NIMMessage(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(Structure$NIM$V2$Connect), [], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
  };
  DGRemoteV2$Controlled.prototype.sendFeeling = function (channel, feeling) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.toID_0;
    tmp$_3 = Json.Default;
    tmp$_0 = this.strengthA + 9 | 0;
    tmp$_1 = this.strengthB + 9 | 0;
    switch (channel) {
      case 1:
        tmp$_2 = feeling;
        break;
      case 2:
        tmp$_2 = feeling + 4 | 0;
        break;
      default:tmp$_2 = 0;
        break;
    }
    var value = new Structure$NIM$V2$Feeling(1, tmp$_0, tmp$_1, tmp$_2);
    var tmp$_4;
    return new Structure$NIMMessage(tmp$, tmp$_3.encodeToString_tf03ej$(Kotlin.isType(tmp$_4 = serializer(tmp$_3.serializersModule, createKType(getKClass(Structure$NIM$V2$Feeling), [], false)), KSerializer) ? tmp$_4 : throwCCE(), value));
  };
  function DGRemoteV2$Controlled$processNIM$lambda($receiver) {
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  function DGRemoteV2$Controlled$processNIM$lambda_0($receiver) {
    $receiver.ignoreUnknownKeys = true;
    return Unit;
  }
  DGRemoteV2$Controlled.prototype.processNIM = function (data) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = Json.Default;
    var tmp$_2;
    var jsonData = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_2 = serializer($receiver.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_2 : throwCCE(), data);
    var from = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('from'))).content;
    if (this.toID_0.length > 0 && !equals(from, this.toID_0))
      return null;
    var text = get_jsonPrimitive(ensureNotNull(get_jsonObject(jsonData).get_11rb$('text'))).content;
    var $receiver_0 = Json.Default;
    var tmp$_3;
    var content = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer($receiver_0.serializersModule, createKType(getKClass(JsonElement), [], false)), KSerializer) ? tmp$_3 : throwCCE(), text);
    switch (get_int(get_jsonPrimitive(ensureNotNull(get_jsonObject(content).get_11rb$('msgType'))))) {
      case 0:
        var $receiver_1 = Json_0(void 0, DGRemoteV2$Controlled$processNIM$lambda);
        var $receiver_0_0 = $receiver_1.serializersModule;
        var tmp$_4;
        var c = $receiver_1.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$_4 = serializer_0($receiver_0_0, createKType(getKClass(Structure$NIM$V2$Config), [], false)), KSerializer_0) ? tmp$_4 : throwCCE(), content);
        if (c.conOrDiscon === 2 || c.conOrDiscon === 1) {
          this.toID_0 = '';
          this.ack_0.clear();
        } else {
          this.toID_0 = from;
          tmp$_0 = this.ack_0;
          tmp$ = Json.Default;
          var value = new Structure$NIM$V2$Config(0, this.limitA, this.limitB, 0, '2020', this.strengthA + 9 | 0, this.strengthB + 9 | 0);
          var tmp$_5;
          tmp$_0.add_11rb$(tmp$.encodeToString_tf03ej$(Kotlin.isType(tmp$_5 = serializer(tmp$.serializersModule, createKType(getKClass(Structure$NIM$V2$Config), [], false)), KSerializer) ? tmp$_5 : throwCCE(), value));
        }

        tmp$_1 = null;
        break;
      case 3:
        var $receiver_2 = Json_0(void 0, DGRemoteV2$Controlled$processNIM$lambda_0);
        var $receiver_0_1 = $receiver_2.serializersModule;
        var tmp$_6;
        var msg = $receiver_2.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$_6 = serializer_0($receiver_0_1, createKType(getKClass(Structure$NIM$V2$Wave), [], false)), KSerializer_0) ? tmp$_6 : throwCCE(), content);
        var $receiver_3 = msg.pluseData;
        var destination = ArrayList_init();
        var tmp$_7;
        loop_label: for (tmp$_7 = 0; tmp$_7 !== $receiver_3.length; ++tmp$_7) {
          var element = $receiver_3[tmp$_7];
          var tmp$_0_0;
          var transform$result;
          transform$break: do {
            switch (element.channel) {
              case 1:
                transform$result = new Structure$NIM$V2$WaveAndStrength(element.bytes, 1, element.strength + this.strengthA | 0);
                break transform$break;
              case 2:
                transform$result = new Structure$NIM$V2$WaveAndStrength(element.bytes, 2, element.strength + this.strengthB | 0);
                break transform$break;
              default:transform$result = null;
                break transform$break;
            }
          }
           while (false);
          if ((tmp$_0_0 = transform$result) != null) {
            destination.add_11rb$(tmp$_0_0);
          }}

        tmp$_1 = copyToArray(destination);
        break;
      default:tmp$_1 = null;
        break;
    }
    return tmp$_1;
  };
  DGRemoteV2$Controlled.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Controlled',
    interfaces: []
  };
  DGRemoteV2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DGRemoteV2',
    interfaces: []
  };
  function Structure() {
    Structure$Companion_getInstance();
  }
  function Structure$Companion() {
    Structure$Companion_instance = this;
    this.baseUrl = 'https://dungeon-server.com:8445';
    this.qrUrl = 'http://dungeon-lab.cn/appdownload.html';
    this.appKey = '9dac64d02f2e5f11aa5e887d809e911c';
  }
  Structure$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Companion_instance = null;
  function Structure$Companion_getInstance() {
    if (Structure$Companion_instance === null) {
      new Structure$Companion();
    }return Structure$Companion_instance;
  }
  function Structure$Header(key, value) {
    this.key = key;
    this.value = value;
  }
  Structure$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  Structure$Header.prototype.component1 = function () {
    return this.key;
  };
  Structure$Header.prototype.component2 = function () {
    return this.value;
  };
  Structure$Header.prototype.copy_puj7f4$ = function (key, value) {
    return new Structure$Header(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  Structure$Header.prototype.toString = function () {
    return 'Header(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Structure$Header.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Structure$Header.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function Structure$Request(headers, contentType, url, method, body, requestCode) {
    this.headers = headers;
    this.contentType = contentType;
    this.url = url;
    this.method = method;
    this.body = body;
    this.requestCode = requestCode;
  }
  Structure$Request.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, Structure$Request) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.headers, other.headers))
      return false;
    if (!equals(this.contentType, other.contentType))
      return false;
    if (!equals(this.url, other.url))
      return false;
    if (!equals(this.method, other.method))
      return false;
    if (!equals(this.body, other.body))
      return false;
    if (this.requestCode !== other.requestCode)
      return false;
    return true;
  };
  Structure$Request.prototype.hashCode = function () {
    var result = contentHashCode(this.headers);
    result = (31 * result | 0) + hashCode(this.contentType) | 0;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    result = (31 * result | 0) + hashCode(this.method) | 0;
    result = (31 * result | 0) + hashCode(this.body) | 0;
    result = (31 * result | 0) + this.requestCode | 0;
    return result;
  };
  Structure$Request.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Request',
    interfaces: []
  };
  Structure$Request.prototype.component1 = function () {
    return this.headers;
  };
  Structure$Request.prototype.component2 = function () {
    return this.contentType;
  };
  Structure$Request.prototype.component3 = function () {
    return this.url;
  };
  Structure$Request.prototype.component4 = function () {
    return this.method;
  };
  Structure$Request.prototype.component5 = function () {
    return this.body;
  };
  Structure$Request.prototype.component6 = function () {
    return this.requestCode;
  };
  Structure$Request.prototype.copy_dc5wgw$ = function (headers, contentType, url, method, body, requestCode) {
    return new Structure$Request(headers === void 0 ? this.headers : headers, contentType === void 0 ? this.contentType : contentType, url === void 0 ? this.url : url, method === void 0 ? this.method : method, body === void 0 ? this.body : body, requestCode === void 0 ? this.requestCode : requestCode);
  };
  Structure$Request.prototype.toString = function () {
    return 'Request(headers=' + Kotlin.toString(this.headers) + (', contentType=' + Kotlin.toString(this.contentType)) + (', url=' + Kotlin.toString(this.url)) + (', method=' + Kotlin.toString(this.method)) + (', body=' + Kotlin.toString(this.body)) + (', requestCode=' + Kotlin.toString(this.requestCode)) + ')';
  };
  function Structure$NIMAuth(appKey, account, token) {
    this.appKey = appKey;
    this.account = account;
    this.token = token;
  }
  Structure$NIMAuth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NIMAuth',
    interfaces: []
  };
  Structure$NIMAuth.prototype.component1 = function () {
    return this.appKey;
  };
  Structure$NIMAuth.prototype.component2 = function () {
    return this.account;
  };
  Structure$NIMAuth.prototype.component3 = function () {
    return this.token;
  };
  Structure$NIMAuth.prototype.copy_6hosri$ = function (appKey, account, token) {
    return new Structure$NIMAuth(appKey === void 0 ? this.appKey : appKey, account === void 0 ? this.account : account, token === void 0 ? this.token : token);
  };
  Structure$NIMAuth.prototype.toString = function () {
    return 'NIMAuth(appKey=' + Kotlin.toString(this.appKey) + (', account=' + Kotlin.toString(this.account)) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  Structure$NIMAuth.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.appKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.account) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  Structure$NIMAuth.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.appKey, other.appKey) && Kotlin.equals(this.account, other.account) && Kotlin.equals(this.token, other.token)))));
  };
  function Structure$NIMMessage(toID, msg) {
    this.toID = toID;
    this.msg = msg;
  }
  Structure$NIMMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NIMMessage',
    interfaces: []
  };
  Structure$NIMMessage.prototype.component1 = function () {
    return this.toID;
  };
  Structure$NIMMessage.prototype.component2 = function () {
    return this.msg;
  };
  Structure$NIMMessage.prototype.copy_puj7f4$ = function (toID, msg) {
    return new Structure$NIMMessage(toID === void 0 ? this.toID : toID, msg === void 0 ? this.msg : msg);
  };
  Structure$NIMMessage.prototype.toString = function () {
    return 'NIMMessage(toID=' + Kotlin.toString(this.toID) + (', msg=' + Kotlin.toString(this.msg)) + ')';
  };
  Structure$NIMMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.toID) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  Structure$NIMMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.toID, other.toID) && Kotlin.equals(this.msg, other.msg)))));
  };
  function Structure$FeelingMessage(channel, msg) {
    this.channel = channel;
    this.msg = msg;
  }
  Structure$FeelingMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FeelingMessage',
    interfaces: []
  };
  Structure$FeelingMessage.prototype.component1 = function () {
    return this.channel;
  };
  Structure$FeelingMessage.prototype.component2 = function () {
    return this.msg;
  };
  Structure$FeelingMessage.prototype.copy_19mbxw$ = function (channel, msg) {
    return new Structure$FeelingMessage(channel === void 0 ? this.channel : channel, msg === void 0 ? this.msg : msg);
  };
  Structure$FeelingMessage.prototype.toString = function () {
    return 'FeelingMessage(channel=' + Kotlin.toString(this.channel) + (', msg=' + Kotlin.toString(this.msg)) + ')';
  };
  Structure$FeelingMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.channel) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  Structure$FeelingMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.channel, other.channel) && Kotlin.equals(this.msg, other.msg)))));
  };
  function Structure$Response() {
  }
  function Structure$Response$Common(code, msg) {
    Structure$Response$Common$Companion_getInstance();
    this.code = code;
    this.msg = msg;
  }
  function Structure$Response$Common$Companion() {
    Structure$Response$Common$Companion_instance = this;
  }
  Structure$Response$Common$Companion.prototype.serializer = function () {
    return Structure$Response$Common$$serializer_getInstance();
  };
  Structure$Response$Common$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Response$Common$Companion_instance = null;
  function Structure$Response$Common$Companion_getInstance() {
    if (Structure$Response$Common$Companion_instance === null) {
      new Structure$Response$Common$Companion();
    }return Structure$Response$Common$Companion_instance;
  }
  function Structure$Response$Common$$serializer() {
    this.descriptor_durllu$_0 = new PluginGeneratedSerialDescriptor('Structure.Response.Common', this, 2);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('msg', false);
    Structure$Response$Common$$serializer_instance = this;
  }
  Object.defineProperty(Structure$Response$Common$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_durllu$_0;
    }
  });
  Structure$Response$Common$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.msg);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$Response$Common$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$Response$Structure$Response$Common_init(bitMask0, local0, local1, null);
  };
  Structure$Response$Common$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  Structure$Response$Common$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$Response$Common$$serializer_instance = null;
  function Structure$Response$Common$$serializer_getInstance() {
    if (Structure$Response$Common$$serializer_instance === null) {
      new Structure$Response$Common$$serializer();
    }return Structure$Response$Common$$serializer_instance;
  }
  function Structure$Response$Structure$Response$Common_init(seen1, code, msg, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$Response$Common.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    return $this;
  }
  Structure$Response$Common.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Common',
    interfaces: []
  };
  Structure$Response$Common.prototype.component1 = function () {
    return this.code;
  };
  Structure$Response$Common.prototype.component2 = function () {
    return this.msg;
  };
  Structure$Response$Common.prototype.copy_19mbxw$ = function (code, msg) {
    return new Structure$Response$Common(code === void 0 ? this.code : code, msg === void 0 ? this.msg : msg);
  };
  Structure$Response$Common.prototype.toString = function () {
    return 'Common(code=' + Kotlin.toString(this.code) + (', msg=' + Kotlin.toString(this.msg)) + ')';
  };
  Structure$Response$Common.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  Structure$Response$Common.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.msg, other.msg)))));
  };
  function Structure$Response$Login(code, msg, uuid, token) {
    Structure$Response$Login$Companion_getInstance();
    this.code = code;
    this.msg = msg;
    this.uuid = uuid;
    this.token = token;
  }
  function Structure$Response$Login$Companion() {
    Structure$Response$Login$Companion_instance = this;
  }
  Structure$Response$Login$Companion.prototype.serializer = function () {
    return Structure$Response$Login$$serializer_getInstance();
  };
  Structure$Response$Login$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Response$Login$Companion_instance = null;
  function Structure$Response$Login$Companion_getInstance() {
    if (Structure$Response$Login$Companion_instance === null) {
      new Structure$Response$Login$Companion();
    }return Structure$Response$Login$Companion_instance;
  }
  function Structure$Response$Login$$serializer() {
    this.descriptor_nc55a4$_0 = new PluginGeneratedSerialDescriptor('Structure.Response.Login', this, 4);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('msg', false);
    this.descriptor.addElement_ivxn3r$('uuid', false);
    this.descriptor.addElement_ivxn3r$('token', false);
    Structure$Response$Login$$serializer_instance = this;
  }
  Object.defineProperty(Structure$Response$Login$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nc55a4$_0;
    }
  });
  Structure$Response$Login$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.msg);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.uuid);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$Response$Login$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$Response$Structure$Response$Login_init(bitMask0, local0, local1, local2, local3, null);
  };
  Structure$Response$Login$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Structure$Response$Login$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$Response$Login$$serializer_instance = null;
  function Structure$Response$Login$$serializer_getInstance() {
    if (Structure$Response$Login$$serializer_instance === null) {
      new Structure$Response$Login$$serializer();
    }return Structure$Response$Login$$serializer_instance;
  }
  function Structure$Response$Structure$Response$Login_init(seen1, code, msg, uuid, token, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$Response$Login.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('uuid');
    else
      $this.uuid = uuid;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('token');
    else
      $this.token = token;
    return $this;
  }
  Structure$Response$Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: []
  };
  Structure$Response$Login.prototype.component1 = function () {
    return this.code;
  };
  Structure$Response$Login.prototype.component2 = function () {
    return this.msg;
  };
  Structure$Response$Login.prototype.component3 = function () {
    return this.uuid;
  };
  Structure$Response$Login.prototype.component4 = function () {
    return this.token;
  };
  Structure$Response$Login.prototype.copy_cgs6fs$ = function (code, msg, uuid, token) {
    return new Structure$Response$Login(code === void 0 ? this.code : code, msg === void 0 ? this.msg : msg, uuid === void 0 ? this.uuid : uuid, token === void 0 ? this.token : token);
  };
  Structure$Response$Login.prototype.toString = function () {
    return 'Login(code=' + Kotlin.toString(this.code) + (', msg=' + Kotlin.toString(this.msg)) + (', uuid=' + Kotlin.toString(this.uuid)) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  Structure$Response$Login.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  Structure$Response$Login.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.msg, other.msg) && Kotlin.equals(this.uuid, other.uuid) && Kotlin.equals(this.token, other.token)))));
  };
  function Structure$Response$TokenVerify(code, msg, uuid) {
    Structure$Response$TokenVerify$Companion_getInstance();
    this.code = code;
    this.msg = msg;
    this.uuid = uuid;
  }
  function Structure$Response$TokenVerify$Companion() {
    Structure$Response$TokenVerify$Companion_instance = this;
  }
  Structure$Response$TokenVerify$Companion.prototype.serializer = function () {
    return Structure$Response$TokenVerify$$serializer_getInstance();
  };
  Structure$Response$TokenVerify$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Response$TokenVerify$Companion_instance = null;
  function Structure$Response$TokenVerify$Companion_getInstance() {
    if (Structure$Response$TokenVerify$Companion_instance === null) {
      new Structure$Response$TokenVerify$Companion();
    }return Structure$Response$TokenVerify$Companion_instance;
  }
  function Structure$Response$TokenVerify$$serializer() {
    this.descriptor_ikmgwr$_0 = new PluginGeneratedSerialDescriptor('Structure.Response.TokenVerify', this, 3);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('msg', false);
    this.descriptor.addElement_ivxn3r$('uuid', false);
    Structure$Response$TokenVerify$$serializer_instance = this;
  }
  Object.defineProperty(Structure$Response$TokenVerify$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ikmgwr$_0;
    }
  });
  Structure$Response$TokenVerify$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.msg);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.uuid);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$Response$TokenVerify$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$Response$Structure$Response$TokenVerify_init(bitMask0, local0, local1, local2, null);
  };
  Structure$Response$TokenVerify$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Structure$Response$TokenVerify$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$Response$TokenVerify$$serializer_instance = null;
  function Structure$Response$TokenVerify$$serializer_getInstance() {
    if (Structure$Response$TokenVerify$$serializer_instance === null) {
      new Structure$Response$TokenVerify$$serializer();
    }return Structure$Response$TokenVerify$$serializer_instance;
  }
  function Structure$Response$Structure$Response$TokenVerify_init(seen1, code, msg, uuid, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$Response$TokenVerify.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('uuid');
    else
      $this.uuid = uuid;
    return $this;
  }
  Structure$Response$TokenVerify.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenVerify',
    interfaces: []
  };
  Structure$Response$TokenVerify.prototype.component1 = function () {
    return this.code;
  };
  Structure$Response$TokenVerify.prototype.component2 = function () {
    return this.msg;
  };
  Structure$Response$TokenVerify.prototype.component3 = function () {
    return this.uuid;
  };
  Structure$Response$TokenVerify.prototype.copy_s4fhmi$ = function (code, msg, uuid) {
    return new Structure$Response$TokenVerify(code === void 0 ? this.code : code, msg === void 0 ? this.msg : msg, uuid === void 0 ? this.uuid : uuid);
  };
  Structure$Response$TokenVerify.prototype.toString = function () {
    return 'TokenVerify(code=' + Kotlin.toString(this.code) + (', msg=' + Kotlin.toString(this.msg)) + (', uuid=' + Kotlin.toString(this.uuid)) + ')';
  };
  Structure$Response$TokenVerify.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    return result;
  };
  Structure$Response$TokenVerify.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.msg, other.msg) && Kotlin.equals(this.uuid, other.uuid)))));
  };
  function Structure$Response$IMConnectCode(code, msg, accstatus, appkey, randomcode, uuid) {
    Structure$Response$IMConnectCode$Companion_getInstance();
    this.code = code;
    this.msg = msg;
    this.accstatus = accstatus;
    this.appkey = appkey;
    this.randomcode = randomcode;
    this.uuid = uuid;
  }
  function Structure$Response$IMConnectCode$Companion() {
    Structure$Response$IMConnectCode$Companion_instance = this;
  }
  Structure$Response$IMConnectCode$Companion.prototype.serializer = function () {
    return Structure$Response$IMConnectCode$$serializer_getInstance();
  };
  Structure$Response$IMConnectCode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Response$IMConnectCode$Companion_instance = null;
  function Structure$Response$IMConnectCode$Companion_getInstance() {
    if (Structure$Response$IMConnectCode$Companion_instance === null) {
      new Structure$Response$IMConnectCode$Companion();
    }return Structure$Response$IMConnectCode$Companion_instance;
  }
  function Structure$Response$IMConnectCode$$serializer() {
    this.descriptor_3eyn16$_0 = new PluginGeneratedSerialDescriptor('Structure.Response.IMConnectCode', this, 6);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('msg', false);
    this.descriptor.addElement_ivxn3r$('accstatus', false);
    this.descriptor.addElement_ivxn3r$('appkey', false);
    this.descriptor.addElement_ivxn3r$('randomcode', false);
    this.descriptor.addElement_ivxn3r$('uuid', false);
    Structure$Response$IMConnectCode$$serializer_instance = this;
  }
  Object.defineProperty(Structure$Response$IMConnectCode$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3eyn16$_0;
    }
  });
  Structure$Response$IMConnectCode$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.msg);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.accstatus);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.appkey);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.randomcode);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.uuid);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$Response$IMConnectCode$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$Response$Structure$Response$IMConnectCode_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  Structure$Response$IMConnectCode$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Structure$Response$IMConnectCode$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$Response$IMConnectCode$$serializer_instance = null;
  function Structure$Response$IMConnectCode$$serializer_getInstance() {
    if (Structure$Response$IMConnectCode$$serializer_instance === null) {
      new Structure$Response$IMConnectCode$$serializer();
    }return Structure$Response$IMConnectCode$$serializer_instance;
  }
  function Structure$Response$Structure$Response$IMConnectCode_init(seen1, code, msg, accstatus, appkey, randomcode, uuid, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$Response$IMConnectCode.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('accstatus');
    else
      $this.accstatus = accstatus;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('appkey');
    else
      $this.appkey = appkey;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('randomcode');
    else
      $this.randomcode = randomcode;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('uuid');
    else
      $this.uuid = uuid;
    return $this;
  }
  Structure$Response$IMConnectCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IMConnectCode',
    interfaces: []
  };
  Structure$Response$IMConnectCode.prototype.component1 = function () {
    return this.code;
  };
  Structure$Response$IMConnectCode.prototype.component2 = function () {
    return this.msg;
  };
  Structure$Response$IMConnectCode.prototype.component3 = function () {
    return this.accstatus;
  };
  Structure$Response$IMConnectCode.prototype.component4 = function () {
    return this.appkey;
  };
  Structure$Response$IMConnectCode.prototype.component5 = function () {
    return this.randomcode;
  };
  Structure$Response$IMConnectCode.prototype.component6 = function () {
    return this.uuid;
  };
  Structure$Response$IMConnectCode.prototype.copy_6nlygg$ = function (code, msg, accstatus, appkey, randomcode, uuid) {
    return new Structure$Response$IMConnectCode(code === void 0 ? this.code : code, msg === void 0 ? this.msg : msg, accstatus === void 0 ? this.accstatus : accstatus, appkey === void 0 ? this.appkey : appkey, randomcode === void 0 ? this.randomcode : randomcode, uuid === void 0 ? this.uuid : uuid);
  };
  Structure$Response$IMConnectCode.prototype.toString = function () {
    return 'IMConnectCode(code=' + Kotlin.toString(this.code) + (', msg=' + Kotlin.toString(this.msg)) + (', accstatus=' + Kotlin.toString(this.accstatus)) + (', appkey=' + Kotlin.toString(this.appkey)) + (', randomcode=' + Kotlin.toString(this.randomcode)) + (', uuid=' + Kotlin.toString(this.uuid)) + ')';
  };
  Structure$Response$IMConnectCode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    result = result * 31 + Kotlin.hashCode(this.accstatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.appkey) | 0;
    result = result * 31 + Kotlin.hashCode(this.randomcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    return result;
  };
  Structure$Response$IMConnectCode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.msg, other.msg) && Kotlin.equals(this.accstatus, other.accstatus) && Kotlin.equals(this.appkey, other.appkey) && Kotlin.equals(this.randomcode, other.randomcode) && Kotlin.equals(this.uuid, other.uuid)))));
  };
  function Structure$Response$JoinControl(code, msg, accstatus, appkey, devicetype, fromID, strengthA, strengthB, toID) {
    Structure$Response$JoinControl$Companion_getInstance();
    this.code = code;
    this.msg = msg;
    this.accstatus = accstatus;
    this.appkey = appkey;
    this.devicetype = devicetype;
    this.fromID = fromID;
    this.strengthA = strengthA;
    this.strengthB = strengthB;
    this.toID = toID;
  }
  function Structure$Response$JoinControl$Companion() {
    Structure$Response$JoinControl$Companion_instance = this;
  }
  Structure$Response$JoinControl$Companion.prototype.serializer = function () {
    return Structure$Response$JoinControl$$serializer_getInstance();
  };
  Structure$Response$JoinControl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$Response$JoinControl$Companion_instance = null;
  function Structure$Response$JoinControl$Companion_getInstance() {
    if (Structure$Response$JoinControl$Companion_instance === null) {
      new Structure$Response$JoinControl$Companion();
    }return Structure$Response$JoinControl$Companion_instance;
  }
  function Structure$Response$JoinControl$$serializer() {
    this.descriptor_fkw1sq$_0 = new PluginGeneratedSerialDescriptor('Structure.Response.JoinControl', this, 9);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('msg', false);
    this.descriptor.addElement_ivxn3r$('accstatus', false);
    this.descriptor.addElement_ivxn3r$('appkey', false);
    this.descriptor.addElement_ivxn3r$('devicetype', false);
    this.descriptor.addElement_ivxn3r$('fromID', false);
    this.descriptor.addElement_ivxn3r$('strengthA', false);
    this.descriptor.addElement_ivxn3r$('strengthB', false);
    this.descriptor.addElement_ivxn3r$('toID', false);
    Structure$Response$JoinControl$$serializer_instance = this;
  }
  Object.defineProperty(Structure$Response$JoinControl$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fkw1sq$_0;
    }
  });
  Structure$Response$JoinControl$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.msg);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.accstatus);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.appkey);
    output.encodeIntElement_ptg7oe$(this.descriptor, 4, value.devicetype);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.fromID);
    output.encodeIntElement_ptg7oe$(this.descriptor, 6, value.strengthA);
    output.encodeIntElement_ptg7oe$(this.descriptor, 7, value.strengthB);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.toID);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$Response$JoinControl$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeIntElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeIntElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeIntElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$Response$Structure$Response$JoinControl_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, null);
  };
  Structure$Response$JoinControl$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, internal.StringSerializer];
  };
  Structure$Response$JoinControl$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$Response$JoinControl$$serializer_instance = null;
  function Structure$Response$JoinControl$$serializer_getInstance() {
    if (Structure$Response$JoinControl$$serializer_instance === null) {
      new Structure$Response$JoinControl$$serializer();
    }return Structure$Response$JoinControl$$serializer_instance;
  }
  function Structure$Response$Structure$Response$JoinControl_init(seen1, code, msg, accstatus, appkey, devicetype, fromID, strengthA, strengthB, toID, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$Response$JoinControl.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('accstatus');
    else
      $this.accstatus = accstatus;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('appkey');
    else
      $this.appkey = appkey;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('devicetype');
    else
      $this.devicetype = devicetype;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('fromID');
    else
      $this.fromID = fromID;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('strengthA');
    else
      $this.strengthA = strengthA;
    if ((seen1 & 128) === 0)
      throw new MissingFieldException('strengthB');
    else
      $this.strengthB = strengthB;
    if ((seen1 & 256) === 0)
      throw new MissingFieldException('toID');
    else
      $this.toID = toID;
    return $this;
  }
  Structure$Response$JoinControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinControl',
    interfaces: []
  };
  Structure$Response$JoinControl.prototype.component1 = function () {
    return this.code;
  };
  Structure$Response$JoinControl.prototype.component2 = function () {
    return this.msg;
  };
  Structure$Response$JoinControl.prototype.component3 = function () {
    return this.accstatus;
  };
  Structure$Response$JoinControl.prototype.component4 = function () {
    return this.appkey;
  };
  Structure$Response$JoinControl.prototype.component5 = function () {
    return this.devicetype;
  };
  Structure$Response$JoinControl.prototype.component6 = function () {
    return this.fromID;
  };
  Structure$Response$JoinControl.prototype.component7 = function () {
    return this.strengthA;
  };
  Structure$Response$JoinControl.prototype.component8 = function () {
    return this.strengthB;
  };
  Structure$Response$JoinControl.prototype.component9 = function () {
    return this.toID;
  };
  Structure$Response$JoinControl.prototype.copy_bko212$ = function (code, msg, accstatus, appkey, devicetype, fromID, strengthA, strengthB, toID) {
    return new Structure$Response$JoinControl(code === void 0 ? this.code : code, msg === void 0 ? this.msg : msg, accstatus === void 0 ? this.accstatus : accstatus, appkey === void 0 ? this.appkey : appkey, devicetype === void 0 ? this.devicetype : devicetype, fromID === void 0 ? this.fromID : fromID, strengthA === void 0 ? this.strengthA : strengthA, strengthB === void 0 ? this.strengthB : strengthB, toID === void 0 ? this.toID : toID);
  };
  Structure$Response$JoinControl.prototype.toString = function () {
    return 'JoinControl(code=' + Kotlin.toString(this.code) + (', msg=' + Kotlin.toString(this.msg)) + (', accstatus=' + Kotlin.toString(this.accstatus)) + (', appkey=' + Kotlin.toString(this.appkey)) + (', devicetype=' + Kotlin.toString(this.devicetype)) + (', fromID=' + Kotlin.toString(this.fromID)) + (', strengthA=' + Kotlin.toString(this.strengthA)) + (', strengthB=' + Kotlin.toString(this.strengthB)) + (', toID=' + Kotlin.toString(this.toID)) + ')';
  };
  Structure$Response$JoinControl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    result = result * 31 + Kotlin.hashCode(this.accstatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.appkey) | 0;
    result = result * 31 + Kotlin.hashCode(this.devicetype) | 0;
    result = result * 31 + Kotlin.hashCode(this.fromID) | 0;
    result = result * 31 + Kotlin.hashCode(this.strengthA) | 0;
    result = result * 31 + Kotlin.hashCode(this.strengthB) | 0;
    result = result * 31 + Kotlin.hashCode(this.toID) | 0;
    return result;
  };
  Structure$Response$JoinControl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.msg, other.msg) && Kotlin.equals(this.accstatus, other.accstatus) && Kotlin.equals(this.appkey, other.appkey) && Kotlin.equals(this.devicetype, other.devicetype) && Kotlin.equals(this.fromID, other.fromID) && Kotlin.equals(this.strengthA, other.strengthA) && Kotlin.equals(this.strengthB, other.strengthB) && Kotlin.equals(this.toID, other.toID)))));
  };
  Structure$Response.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Response',
    interfaces: []
  };
  function Structure$NIM() {
  }
  function Structure$NIM$V1() {
  }
  function Structure$NIM$V1$Join(code, content, type) {
    Structure$NIM$V1$Join$Companion_getInstance();
    this.code = code;
    this.content = content;
    this.type = type;
  }
  function Structure$NIM$V1$Join$Companion() {
    Structure$NIM$V1$Join$Companion_instance = this;
  }
  Structure$NIM$V1$Join$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$Join$$serializer_getInstance();
  };
  Structure$NIM$V1$Join$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$Join$Companion_instance = null;
  function Structure$NIM$V1$Join$Companion_getInstance() {
    if (Structure$NIM$V1$Join$Companion_instance === null) {
      new Structure$NIM$V1$Join$Companion();
    }return Structure$NIM$V1$Join$Companion_instance;
  }
  function Structure$NIM$V1$Join$$serializer() {
    this.descriptor_6tukh7$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.Join', this, 3);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('content', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    Structure$NIM$V1$Join$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$Join$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_6tukh7$_0;
    }
  });
  Structure$NIM$V1$Join$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.content);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$Join$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$Join_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V1$Join$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Structure$NIM$V1$Join$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$Join$$serializer_instance = null;
  function Structure$NIM$V1$Join$$serializer_getInstance() {
    if (Structure$NIM$V1$Join$$serializer_instance === null) {
      new Structure$NIM$V1$Join$$serializer();
    }return Structure$NIM$V1$Join$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$Join_init(seen1, code, content, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$Join.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('content');
    else
      $this.content = content;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    return $this;
  }
  Structure$NIM$V1$Join.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Join',
    interfaces: []
  };
  Structure$NIM$V1$Join.prototype.component1 = function () {
    return this.code;
  };
  Structure$NIM$V1$Join.prototype.component2 = function () {
    return this.content;
  };
  Structure$NIM$V1$Join.prototype.component3 = function () {
    return this.type;
  };
  Structure$NIM$V1$Join.prototype.copy_jl0c9m$ = function (code, content, type) {
    return new Structure$NIM$V1$Join(code === void 0 ? this.code : code, content === void 0 ? this.content : content, type === void 0 ? this.type : type);
  };
  Structure$NIM$V1$Join.prototype.toString = function () {
    return 'Join(code=' + Kotlin.toString(this.code) + (', content=' + Kotlin.toString(this.content)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Structure$NIM$V1$Join.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Structure$NIM$V1$Join.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.type, other.type)))));
  };
  function Structure$NIM$V1$JoinDetail(id, status) {
    Structure$NIM$V1$JoinDetail$Companion_getInstance();
    this.id = id;
    this.status = status;
  }
  function Structure$NIM$V1$JoinDetail$Companion() {
    Structure$NIM$V1$JoinDetail$Companion_instance = this;
  }
  Structure$NIM$V1$JoinDetail$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$JoinDetail$$serializer_getInstance();
  };
  Structure$NIM$V1$JoinDetail$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$JoinDetail$Companion_instance = null;
  function Structure$NIM$V1$JoinDetail$Companion_getInstance() {
    if (Structure$NIM$V1$JoinDetail$Companion_instance === null) {
      new Structure$NIM$V1$JoinDetail$Companion();
    }return Structure$NIM$V1$JoinDetail$Companion_instance;
  }
  function Structure$NIM$V1$JoinDetail$$serializer() {
    this.descriptor_mofl0$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.JoinDetail', this, 2);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('status', false);
    Structure$NIM$V1$JoinDetail$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$JoinDetail$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_mofl0$_0;
    }
  });
  Structure$NIM$V1$JoinDetail$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.id);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.status);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$JoinDetail$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$JoinDetail_init(bitMask0, local0, local1, null);
  };
  Structure$NIM$V1$JoinDetail$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer];
  };
  Structure$NIM$V1$JoinDetail$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$JoinDetail$$serializer_instance = null;
  function Structure$NIM$V1$JoinDetail$$serializer_getInstance() {
    if (Structure$NIM$V1$JoinDetail$$serializer_instance === null) {
      new Structure$NIM$V1$JoinDetail$$serializer();
    }return Structure$NIM$V1$JoinDetail$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$JoinDetail_init(seen1, id, status, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$JoinDetail.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('status');
    else
      $this.status = status;
    return $this;
  }
  Structure$NIM$V1$JoinDetail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinDetail',
    interfaces: []
  };
  Structure$NIM$V1$JoinDetail.prototype.component1 = function () {
    return this.id;
  };
  Structure$NIM$V1$JoinDetail.prototype.component2 = function () {
    return this.status;
  };
  Structure$NIM$V1$JoinDetail.prototype.copy_bm4lxs$ = function (id, status) {
    return new Structure$NIM$V1$JoinDetail(id === void 0 ? this.id : id, status === void 0 ? this.status : status);
  };
  Structure$NIM$V1$JoinDetail.prototype.toString = function () {
    return 'JoinDetail(id=' + Kotlin.toString(this.id) + (', status=' + Kotlin.toString(this.status)) + ')';
  };
  Structure$NIM$V1$JoinDetail.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    return result;
  };
  Structure$NIM$V1$JoinDetail.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.status, other.status)))));
  };
  function Structure$NIM$V1$Disconnect(code, content, type) {
    Structure$NIM$V1$Disconnect$Companion_getInstance();
    this.code = code;
    this.content = content;
    this.type = type;
  }
  function Structure$NIM$V1$Disconnect$Companion() {
    Structure$NIM$V1$Disconnect$Companion_instance = this;
  }
  Structure$NIM$V1$Disconnect$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$Disconnect$$serializer_getInstance();
  };
  Structure$NIM$V1$Disconnect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$Disconnect$Companion_instance = null;
  function Structure$NIM$V1$Disconnect$Companion_getInstance() {
    if (Structure$NIM$V1$Disconnect$Companion_instance === null) {
      new Structure$NIM$V1$Disconnect$Companion();
    }return Structure$NIM$V1$Disconnect$Companion_instance;
  }
  function Structure$NIM$V1$Disconnect$$serializer() {
    this.descriptor_4lqx5v$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.Disconnect', this, 3);
    this.descriptor.addElement_ivxn3r$('code', false);
    this.descriptor.addElement_ivxn3r$('content', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    Structure$NIM$V1$Disconnect$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$Disconnect$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_4lqx5v$_0;
    }
  });
  Structure$NIM$V1$Disconnect$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.code);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.content);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$Disconnect$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$Disconnect_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V1$Disconnect$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Structure$NIM$V1$Disconnect$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$Disconnect$$serializer_instance = null;
  function Structure$NIM$V1$Disconnect$$serializer_getInstance() {
    if (Structure$NIM$V1$Disconnect$$serializer_instance === null) {
      new Structure$NIM$V1$Disconnect$$serializer();
    }return Structure$NIM$V1$Disconnect$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$Disconnect_init(seen1, code, content, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$Disconnect.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('content');
    else
      $this.content = content;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    return $this;
  }
  Structure$NIM$V1$Disconnect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Disconnect',
    interfaces: []
  };
  Structure$NIM$V1$Disconnect.prototype.component1 = function () {
    return this.code;
  };
  Structure$NIM$V1$Disconnect.prototype.component2 = function () {
    return this.content;
  };
  Structure$NIM$V1$Disconnect.prototype.component3 = function () {
    return this.type;
  };
  Structure$NIM$V1$Disconnect.prototype.copy_jl0c9m$ = function (code, content, type) {
    return new Structure$NIM$V1$Disconnect(code === void 0 ? this.code : code, content === void 0 ? this.content : content, type === void 0 ? this.type : type);
  };
  Structure$NIM$V1$Disconnect.prototype.toString = function () {
    return 'Disconnect(code=' + Kotlin.toString(this.code) + (', content=' + Kotlin.toString(this.content)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Structure$NIM$V1$Disconnect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Structure$NIM$V1$Disconnect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.type, other.type)))));
  };
  function Structure$NIM$V1$DisconnectDetail(status) {
    Structure$NIM$V1$DisconnectDetail$Companion_getInstance();
    this.status = status;
  }
  function Structure$NIM$V1$DisconnectDetail$Companion() {
    Structure$NIM$V1$DisconnectDetail$Companion_instance = this;
  }
  Structure$NIM$V1$DisconnectDetail$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$DisconnectDetail$$serializer_getInstance();
  };
  Structure$NIM$V1$DisconnectDetail$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$DisconnectDetail$Companion_instance = null;
  function Structure$NIM$V1$DisconnectDetail$Companion_getInstance() {
    if (Structure$NIM$V1$DisconnectDetail$Companion_instance === null) {
      new Structure$NIM$V1$DisconnectDetail$Companion();
    }return Structure$NIM$V1$DisconnectDetail$Companion_instance;
  }
  function Structure$NIM$V1$DisconnectDetail$$serializer() {
    this.descriptor_gkx2q6$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.DisconnectDetail', this, 1);
    this.descriptor.addElement_ivxn3r$('status', false);
    Structure$NIM$V1$DisconnectDetail$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$DisconnectDetail$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gkx2q6$_0;
    }
  });
  Structure$NIM$V1$DisconnectDetail$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.status);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$DisconnectDetail$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$DisconnectDetail_init(bitMask0, local0, null);
  };
  Structure$NIM$V1$DisconnectDetail$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer];
  };
  Structure$NIM$V1$DisconnectDetail$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$DisconnectDetail$$serializer_instance = null;
  function Structure$NIM$V1$DisconnectDetail$$serializer_getInstance() {
    if (Structure$NIM$V1$DisconnectDetail$$serializer_instance === null) {
      new Structure$NIM$V1$DisconnectDetail$$serializer();
    }return Structure$NIM$V1$DisconnectDetail$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$DisconnectDetail_init(seen1, status, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$DisconnectDetail.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('status');
    else
      $this.status = status;
    return $this;
  }
  Structure$NIM$V1$DisconnectDetail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisconnectDetail',
    interfaces: []
  };
  Structure$NIM$V1$DisconnectDetail.prototype.component1 = function () {
    return this.status;
  };
  Structure$NIM$V1$DisconnectDetail.prototype.copy_za3lpa$ = function (status) {
    return new Structure$NIM$V1$DisconnectDetail(status === void 0 ? this.status : status);
  };
  Structure$NIM$V1$DisconnectDetail.prototype.toString = function () {
    return 'DisconnectDetail(status=' + Kotlin.toString(this.status) + ')';
  };
  Structure$NIM$V1$DisconnectDetail.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    return result;
  };
  Structure$NIM$V1$DisconnectDetail.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.status, other.status))));
  };
  function Structure$NIM$V1$SendWaveAndStrength(channel, bytes, strength) {
    Structure$NIM$V1$SendWaveAndStrength$Companion_getInstance();
    this.channel = channel;
    this.bytes = bytes;
    this.strength = strength;
  }
  function Structure$NIM$V1$SendWaveAndStrength$Companion() {
    Structure$NIM$V1$SendWaveAndStrength$Companion_instance = this;
  }
  Structure$NIM$V1$SendWaveAndStrength$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$SendWaveAndStrength$$serializer_getInstance();
  };
  Structure$NIM$V1$SendWaveAndStrength$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$SendWaveAndStrength$Companion_instance = null;
  function Structure$NIM$V1$SendWaveAndStrength$Companion_getInstance() {
    if (Structure$NIM$V1$SendWaveAndStrength$Companion_instance === null) {
      new Structure$NIM$V1$SendWaveAndStrength$Companion();
    }return Structure$NIM$V1$SendWaveAndStrength$Companion_instance;
  }
  function Structure$NIM$V1$SendWaveAndStrength$$serializer() {
    this.descriptor_31zi3k$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.SendWaveAndStrength', this, 3);
    this.descriptor.addElement_ivxn3r$('channel', false);
    this.descriptor.addElement_ivxn3r$('bytes', false);
    this.descriptor.addElement_ivxn3r$('strength', false);
    Structure$NIM$V1$SendWaveAndStrength$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_31zi3k$_0;
    }
  });
  Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.channel);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.bytes);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.strength);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$SendWaveAndStrength_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Structure$NIM$V1$SendWaveAndStrength$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$SendWaveAndStrength$$serializer_instance = null;
  function Structure$NIM$V1$SendWaveAndStrength$$serializer_getInstance() {
    if (Structure$NIM$V1$SendWaveAndStrength$$serializer_instance === null) {
      new Structure$NIM$V1$SendWaveAndStrength$$serializer();
    }return Structure$NIM$V1$SendWaveAndStrength$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$SendWaveAndStrength_init(seen1, channel, bytes, strength, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$SendWaveAndStrength.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('channel');
    else
      $this.channel = channel;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('bytes');
    else
      $this.bytes = bytes;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('strength');
    else
      $this.strength = strength;
    return $this;
  }
  Structure$NIM$V1$SendWaveAndStrength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SendWaveAndStrength',
    interfaces: []
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.component1 = function () {
    return this.channel;
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.component2 = function () {
    return this.bytes;
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.component3 = function () {
    return this.strength;
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.copy_jl0c9m$ = function (channel, bytes, strength) {
    return new Structure$NIM$V1$SendWaveAndStrength(channel === void 0 ? this.channel : channel, bytes === void 0 ? this.bytes : bytes, strength === void 0 ? this.strength : strength);
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.toString = function () {
    return 'SendWaveAndStrength(channel=' + Kotlin.toString(this.channel) + (', bytes=' + Kotlin.toString(this.bytes)) + (', strength=' + Kotlin.toString(this.strength)) + ')';
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.channel) | 0;
    result = result * 31 + Kotlin.hashCode(this.bytes) | 0;
    result = result * 31 + Kotlin.hashCode(this.strength) | 0;
    return result;
  };
  Structure$NIM$V1$SendWaveAndStrength.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.channel, other.channel) && Kotlin.equals(this.bytes, other.bytes) && Kotlin.equals(this.strength, other.strength)))));
  };
  function Structure$NIM$V1$WaveStrengthMsg(msg) {
    Structure$NIM$V1$WaveStrengthMsg$Companion_getInstance();
    this.msg = msg;
  }
  function Structure$NIM$V1$WaveStrengthMsg$Companion() {
    Structure$NIM$V1$WaveStrengthMsg$Companion_instance = this;
  }
  Structure$NIM$V1$WaveStrengthMsg$Companion.prototype.serializer = function () {
    return Structure$NIM$V1$WaveStrengthMsg$$serializer_getInstance();
  };
  Structure$NIM$V1$WaveStrengthMsg$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V1$WaveStrengthMsg$Companion_instance = null;
  function Structure$NIM$V1$WaveStrengthMsg$Companion_getInstance() {
    if (Structure$NIM$V1$WaveStrengthMsg$Companion_instance === null) {
      new Structure$NIM$V1$WaveStrengthMsg$Companion();
    }return Structure$NIM$V1$WaveStrengthMsg$Companion_instance;
  }
  function Structure$NIM$V1$WaveStrengthMsg$$serializer() {
    this.descriptor_1gn974$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V1.WaveStrengthMsg', this, 1);
    this.descriptor.addElement_ivxn3r$('msg', false);
    Structure$NIM$V1$WaveStrengthMsg$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_1gn974$_0;
    }
  });
  Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.msg);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V1$Structure$NIM$V1$WaveStrengthMsg_init(bitMask0, local0, null);
  };
  Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  Structure$NIM$V1$WaveStrengthMsg$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V1$WaveStrengthMsg$$serializer_instance = null;
  function Structure$NIM$V1$WaveStrengthMsg$$serializer_getInstance() {
    if (Structure$NIM$V1$WaveStrengthMsg$$serializer_instance === null) {
      new Structure$NIM$V1$WaveStrengthMsg$$serializer();
    }return Structure$NIM$V1$WaveStrengthMsg$$serializer_instance;
  }
  function Structure$NIM$V1$Structure$NIM$V1$WaveStrengthMsg_init(seen1, msg, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V1$WaveStrengthMsg.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msg');
    else
      $this.msg = msg;
    return $this;
  }
  Structure$NIM$V1$WaveStrengthMsg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveStrengthMsg',
    interfaces: []
  };
  Structure$NIM$V1$WaveStrengthMsg.prototype.component1 = function () {
    return this.msg;
  };
  Structure$NIM$V1$WaveStrengthMsg.prototype.copy_61zpoe$ = function (msg) {
    return new Structure$NIM$V1$WaveStrengthMsg(msg === void 0 ? this.msg : msg);
  };
  Structure$NIM$V1$WaveStrengthMsg.prototype.toString = function () {
    return 'WaveStrengthMsg(msg=' + Kotlin.toString(this.msg) + ')';
  };
  Structure$NIM$V1$WaveStrengthMsg.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  Structure$NIM$V1$WaveStrengthMsg.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.msg, other.msg))));
  };
  Structure$NIM$V1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'V1',
    interfaces: []
  };
  function Structure$NIM$V2() {
  }
  function Structure$NIM$V2$Connect(msgType, conOrDiscon, pwd) {
    Structure$NIM$V2$Connect$Companion_getInstance();
    this.msgType = msgType;
    this.conOrDiscon = conOrDiscon;
    this.pwd = pwd;
  }
  function Structure$NIM$V2$Connect$Companion() {
    Structure$NIM$V2$Connect$Companion_instance = this;
  }
  Structure$NIM$V2$Connect$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$Connect$$serializer_getInstance();
  };
  Structure$NIM$V2$Connect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$Connect$Companion_instance = null;
  function Structure$NIM$V2$Connect$Companion_getInstance() {
    if (Structure$NIM$V2$Connect$Companion_instance === null) {
      new Structure$NIM$V2$Connect$Companion();
    }return Structure$NIM$V2$Connect$Companion_instance;
  }
  function Structure$NIM$V2$Connect$$serializer() {
    this.descriptor_irrl9w$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.Connect', this, 3);
    this.descriptor.addElement_ivxn3r$('msgType', false);
    this.descriptor.addElement_ivxn3r$('conOrDiscon', false);
    this.descriptor.addElement_ivxn3r$('pwd', false);
    Structure$NIM$V2$Connect$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$Connect$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_irrl9w$_0;
    }
  });
  Structure$NIM$V2$Connect$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.msgType);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.conOrDiscon);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.pwd);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$Connect$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$Connect_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V2$Connect$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.StringSerializer];
  };
  Structure$NIM$V2$Connect$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$Connect$$serializer_instance = null;
  function Structure$NIM$V2$Connect$$serializer_getInstance() {
    if (Structure$NIM$V2$Connect$$serializer_instance === null) {
      new Structure$NIM$V2$Connect$$serializer();
    }return Structure$NIM$V2$Connect$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$Connect_init(seen1, msgType, conOrDiscon, pwd, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$Connect.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msgType');
    else
      $this.msgType = msgType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('conOrDiscon');
    else
      $this.conOrDiscon = conOrDiscon;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('pwd');
    else
      $this.pwd = pwd;
    return $this;
  }
  Structure$NIM$V2$Connect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Connect',
    interfaces: []
  };
  Structure$NIM$V2$Connect.prototype.component1 = function () {
    return this.msgType;
  };
  Structure$NIM$V2$Connect.prototype.component2 = function () {
    return this.conOrDiscon;
  };
  Structure$NIM$V2$Connect.prototype.component3 = function () {
    return this.pwd;
  };
  Structure$NIM$V2$Connect.prototype.copy_98i29q$ = function (msgType, conOrDiscon, pwd) {
    return new Structure$NIM$V2$Connect(msgType === void 0 ? this.msgType : msgType, conOrDiscon === void 0 ? this.conOrDiscon : conOrDiscon, pwd === void 0 ? this.pwd : pwd);
  };
  Structure$NIM$V2$Connect.prototype.toString = function () {
    return 'Connect(msgType=' + Kotlin.toString(this.msgType) + (', conOrDiscon=' + Kotlin.toString(this.conOrDiscon)) + (', pwd=' + Kotlin.toString(this.pwd)) + ')';
  };
  Structure$NIM$V2$Connect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.msgType) | 0;
    result = result * 31 + Kotlin.hashCode(this.conOrDiscon) | 0;
    result = result * 31 + Kotlin.hashCode(this.pwd) | 0;
    return result;
  };
  Structure$NIM$V2$Connect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.msgType, other.msgType) && Kotlin.equals(this.conOrDiscon, other.conOrDiscon) && Kotlin.equals(this.pwd, other.pwd)))));
  };
  function Structure$NIM$V2$Config(msgType, aStrengthRangeMax, bStrengthRangeMax, conOrDiscon, pwd, realStrengthA, realStrengthB) {
    Structure$NIM$V2$Config$Companion_getInstance();
    this.msgType = msgType;
    this.aStrengthRangeMax = aStrengthRangeMax;
    this.bStrengthRangeMax = bStrengthRangeMax;
    this.conOrDiscon = conOrDiscon;
    this.pwd = pwd;
    this.realStrengthA = realStrengthA;
    this.realStrengthB = realStrengthB;
  }
  function Structure$NIM$V2$Config$Companion() {
    Structure$NIM$V2$Config$Companion_instance = this;
  }
  Structure$NIM$V2$Config$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$Config$$serializer_getInstance();
  };
  Structure$NIM$V2$Config$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$Config$Companion_instance = null;
  function Structure$NIM$V2$Config$Companion_getInstance() {
    if (Structure$NIM$V2$Config$Companion_instance === null) {
      new Structure$NIM$V2$Config$Companion();
    }return Structure$NIM$V2$Config$Companion_instance;
  }
  function Structure$NIM$V2$Config$$serializer() {
    this.descriptor_i5fv8e$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.Config', this, 7);
    this.descriptor.addElement_ivxn3r$('msgType', false);
    this.descriptor.addElement_ivxn3r$('aStrengthRangeMax', false);
    this.descriptor.addElement_ivxn3r$('bStrengthRangeMax', false);
    this.descriptor.addElement_ivxn3r$('conOrDiscon', false);
    this.descriptor.addElement_ivxn3r$('pwd', false);
    this.descriptor.addElement_ivxn3r$('realStrengthA', false);
    this.descriptor.addElement_ivxn3r$('realStrengthB', false);
    Structure$NIM$V2$Config$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$Config$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_i5fv8e$_0;
    }
  });
  Structure$NIM$V2$Config$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.msgType);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.aStrengthRangeMax);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.bStrengthRangeMax);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.conOrDiscon);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.pwd);
    output.encodeIntElement_ptg7oe$(this.descriptor, 5, value.realStrengthA);
    output.encodeIntElement_ptg7oe$(this.descriptor, 6, value.realStrengthB);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$Config$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeIntElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeIntElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$Config_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  Structure$NIM$V2$Config$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Structure$NIM$V2$Config$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$Config$$serializer_instance = null;
  function Structure$NIM$V2$Config$$serializer_getInstance() {
    if (Structure$NIM$V2$Config$$serializer_instance === null) {
      new Structure$NIM$V2$Config$$serializer();
    }return Structure$NIM$V2$Config$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$Config_init(seen1, msgType, aStrengthRangeMax, bStrengthRangeMax, conOrDiscon, pwd, realStrengthA, realStrengthB, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$Config.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msgType');
    else
      $this.msgType = msgType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('aStrengthRangeMax');
    else
      $this.aStrengthRangeMax = aStrengthRangeMax;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('bStrengthRangeMax');
    else
      $this.bStrengthRangeMax = bStrengthRangeMax;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('conOrDiscon');
    else
      $this.conOrDiscon = conOrDiscon;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('pwd');
    else
      $this.pwd = pwd;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('realStrengthA');
    else
      $this.realStrengthA = realStrengthA;
    if ((seen1 & 64) === 0)
      throw new MissingFieldException('realStrengthB');
    else
      $this.realStrengthB = realStrengthB;
    return $this;
  }
  Structure$NIM$V2$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  Structure$NIM$V2$Config.prototype.component1 = function () {
    return this.msgType;
  };
  Structure$NIM$V2$Config.prototype.component2 = function () {
    return this.aStrengthRangeMax;
  };
  Structure$NIM$V2$Config.prototype.component3 = function () {
    return this.bStrengthRangeMax;
  };
  Structure$NIM$V2$Config.prototype.component4 = function () {
    return this.conOrDiscon;
  };
  Structure$NIM$V2$Config.prototype.component5 = function () {
    return this.pwd;
  };
  Structure$NIM$V2$Config.prototype.component6 = function () {
    return this.realStrengthA;
  };
  Structure$NIM$V2$Config.prototype.component7 = function () {
    return this.realStrengthB;
  };
  Structure$NIM$V2$Config.prototype.copy_l8w2ym$ = function (msgType, aStrengthRangeMax, bStrengthRangeMax, conOrDiscon, pwd, realStrengthA, realStrengthB) {
    return new Structure$NIM$V2$Config(msgType === void 0 ? this.msgType : msgType, aStrengthRangeMax === void 0 ? this.aStrengthRangeMax : aStrengthRangeMax, bStrengthRangeMax === void 0 ? this.bStrengthRangeMax : bStrengthRangeMax, conOrDiscon === void 0 ? this.conOrDiscon : conOrDiscon, pwd === void 0 ? this.pwd : pwd, realStrengthA === void 0 ? this.realStrengthA : realStrengthA, realStrengthB === void 0 ? this.realStrengthB : realStrengthB);
  };
  Structure$NIM$V2$Config.prototype.toString = function () {
    return 'Config(msgType=' + Kotlin.toString(this.msgType) + (', aStrengthRangeMax=' + Kotlin.toString(this.aStrengthRangeMax)) + (', bStrengthRangeMax=' + Kotlin.toString(this.bStrengthRangeMax)) + (', conOrDiscon=' + Kotlin.toString(this.conOrDiscon)) + (', pwd=' + Kotlin.toString(this.pwd)) + (', realStrengthA=' + Kotlin.toString(this.realStrengthA)) + (', realStrengthB=' + Kotlin.toString(this.realStrengthB)) + ')';
  };
  Structure$NIM$V2$Config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.msgType) | 0;
    result = result * 31 + Kotlin.hashCode(this.aStrengthRangeMax) | 0;
    result = result * 31 + Kotlin.hashCode(this.bStrengthRangeMax) | 0;
    result = result * 31 + Kotlin.hashCode(this.conOrDiscon) | 0;
    result = result * 31 + Kotlin.hashCode(this.pwd) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthA) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthB) | 0;
    return result;
  };
  Structure$NIM$V2$Config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.msgType, other.msgType) && Kotlin.equals(this.aStrengthRangeMax, other.aStrengthRangeMax) && Kotlin.equals(this.bStrengthRangeMax, other.bStrengthRangeMax) && Kotlin.equals(this.conOrDiscon, other.conOrDiscon) && Kotlin.equals(this.pwd, other.pwd) && Kotlin.equals(this.realStrengthA, other.realStrengthA) && Kotlin.equals(this.realStrengthB, other.realStrengthB)))));
  };
  function Structure$NIM$V2$UpdateStrength(msgType, realStrengthA, realStrengthB) {
    Structure$NIM$V2$UpdateStrength$Companion_getInstance();
    this.msgType = msgType;
    this.realStrengthA = realStrengthA;
    this.realStrengthB = realStrengthB;
  }
  function Structure$NIM$V2$UpdateStrength$Companion() {
    Structure$NIM$V2$UpdateStrength$Companion_instance = this;
  }
  Structure$NIM$V2$UpdateStrength$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$UpdateStrength$$serializer_getInstance();
  };
  Structure$NIM$V2$UpdateStrength$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$UpdateStrength$Companion_instance = null;
  function Structure$NIM$V2$UpdateStrength$Companion_getInstance() {
    if (Structure$NIM$V2$UpdateStrength$Companion_instance === null) {
      new Structure$NIM$V2$UpdateStrength$Companion();
    }return Structure$NIM$V2$UpdateStrength$Companion_instance;
  }
  function Structure$NIM$V2$UpdateStrength$$serializer() {
    this.descriptor_214kqe$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.UpdateStrength', this, 3);
    this.descriptor.addElement_ivxn3r$('msgType', false);
    this.descriptor.addElement_ivxn3r$('realStrengthA', false);
    this.descriptor.addElement_ivxn3r$('realStrengthB', false);
    Structure$NIM$V2$UpdateStrength$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$UpdateStrength$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_214kqe$_0;
    }
  });
  Structure$NIM$V2$UpdateStrength$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.msgType);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.realStrengthA);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.realStrengthB);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$UpdateStrength$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$UpdateStrength_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V2$UpdateStrength$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Structure$NIM$V2$UpdateStrength$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$UpdateStrength$$serializer_instance = null;
  function Structure$NIM$V2$UpdateStrength$$serializer_getInstance() {
    if (Structure$NIM$V2$UpdateStrength$$serializer_instance === null) {
      new Structure$NIM$V2$UpdateStrength$$serializer();
    }return Structure$NIM$V2$UpdateStrength$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$UpdateStrength_init(seen1, msgType, realStrengthA, realStrengthB, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$UpdateStrength.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msgType');
    else
      $this.msgType = msgType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('realStrengthA');
    else
      $this.realStrengthA = realStrengthA;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('realStrengthB');
    else
      $this.realStrengthB = realStrengthB;
    return $this;
  }
  Structure$NIM$V2$UpdateStrength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdateStrength',
    interfaces: []
  };
  Structure$NIM$V2$UpdateStrength.prototype.component1 = function () {
    return this.msgType;
  };
  Structure$NIM$V2$UpdateStrength.prototype.component2 = function () {
    return this.realStrengthA;
  };
  Structure$NIM$V2$UpdateStrength.prototype.component3 = function () {
    return this.realStrengthB;
  };
  Structure$NIM$V2$UpdateStrength.prototype.copy_qt1dr2$ = function (msgType, realStrengthA, realStrengthB) {
    return new Structure$NIM$V2$UpdateStrength(msgType === void 0 ? this.msgType : msgType, realStrengthA === void 0 ? this.realStrengthA : realStrengthA, realStrengthB === void 0 ? this.realStrengthB : realStrengthB);
  };
  Structure$NIM$V2$UpdateStrength.prototype.toString = function () {
    return 'UpdateStrength(msgType=' + Kotlin.toString(this.msgType) + (', realStrengthA=' + Kotlin.toString(this.realStrengthA)) + (', realStrengthB=' + Kotlin.toString(this.realStrengthB)) + ')';
  };
  Structure$NIM$V2$UpdateStrength.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.msgType) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthA) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthB) | 0;
    return result;
  };
  Structure$NIM$V2$UpdateStrength.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.msgType, other.msgType) && Kotlin.equals(this.realStrengthA, other.realStrengthA) && Kotlin.equals(this.realStrengthB, other.realStrengthB)))));
  };
  function Structure$NIM$V2$Feeling(msgType, realStrengthA, realStrengthB, feelIndex) {
    Structure$NIM$V2$Feeling$Companion_getInstance();
    this.msgType = msgType;
    this.realStrengthA = realStrengthA;
    this.realStrengthB = realStrengthB;
    this.feelIndex = feelIndex;
  }
  function Structure$NIM$V2$Feeling$Companion() {
    Structure$NIM$V2$Feeling$Companion_instance = this;
  }
  Structure$NIM$V2$Feeling$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$Feeling$$serializer_getInstance();
  };
  Structure$NIM$V2$Feeling$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$Feeling$Companion_instance = null;
  function Structure$NIM$V2$Feeling$Companion_getInstance() {
    if (Structure$NIM$V2$Feeling$Companion_instance === null) {
      new Structure$NIM$V2$Feeling$Companion();
    }return Structure$NIM$V2$Feeling$Companion_instance;
  }
  function Structure$NIM$V2$Feeling$$serializer() {
    this.descriptor_t89uyu$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.Feeling', this, 4);
    this.descriptor.addElement_ivxn3r$('msgType', false);
    this.descriptor.addElement_ivxn3r$('realStrengthA', false);
    this.descriptor.addElement_ivxn3r$('realStrengthB', false);
    this.descriptor.addElement_ivxn3r$('feelIndex', false);
    Structure$NIM$V2$Feeling$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$Feeling$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_t89uyu$_0;
    }
  });
  Structure$NIM$V2$Feeling$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.msgType);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.realStrengthA);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.realStrengthB);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.feelIndex);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$Feeling$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$Feeling_init(bitMask0, local0, local1, local2, local3, null);
  };
  Structure$NIM$V2$Feeling$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Structure$NIM$V2$Feeling$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$Feeling$$serializer_instance = null;
  function Structure$NIM$V2$Feeling$$serializer_getInstance() {
    if (Structure$NIM$V2$Feeling$$serializer_instance === null) {
      new Structure$NIM$V2$Feeling$$serializer();
    }return Structure$NIM$V2$Feeling$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$Feeling_init(seen1, msgType, realStrengthA, realStrengthB, feelIndex, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$Feeling.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msgType');
    else
      $this.msgType = msgType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('realStrengthA');
    else
      $this.realStrengthA = realStrengthA;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('realStrengthB');
    else
      $this.realStrengthB = realStrengthB;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('feelIndex');
    else
      $this.feelIndex = feelIndex;
    return $this;
  }
  Structure$NIM$V2$Feeling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Feeling',
    interfaces: []
  };
  Structure$NIM$V2$Feeling.prototype.component1 = function () {
    return this.msgType;
  };
  Structure$NIM$V2$Feeling.prototype.component2 = function () {
    return this.realStrengthA;
  };
  Structure$NIM$V2$Feeling.prototype.component3 = function () {
    return this.realStrengthB;
  };
  Structure$NIM$V2$Feeling.prototype.component4 = function () {
    return this.feelIndex;
  };
  Structure$NIM$V2$Feeling.prototype.copy_tjonv8$ = function (msgType, realStrengthA, realStrengthB, feelIndex) {
    return new Structure$NIM$V2$Feeling(msgType === void 0 ? this.msgType : msgType, realStrengthA === void 0 ? this.realStrengthA : realStrengthA, realStrengthB === void 0 ? this.realStrengthB : realStrengthB, feelIndex === void 0 ? this.feelIndex : feelIndex);
  };
  Structure$NIM$V2$Feeling.prototype.toString = function () {
    return 'Feeling(msgType=' + Kotlin.toString(this.msgType) + (', realStrengthA=' + Kotlin.toString(this.realStrengthA)) + (', realStrengthB=' + Kotlin.toString(this.realStrengthB)) + (', feelIndex=' + Kotlin.toString(this.feelIndex)) + ')';
  };
  Structure$NIM$V2$Feeling.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.msgType) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthA) | 0;
    result = result * 31 + Kotlin.hashCode(this.realStrengthB) | 0;
    result = result * 31 + Kotlin.hashCode(this.feelIndex) | 0;
    return result;
  };
  Structure$NIM$V2$Feeling.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.msgType, other.msgType) && Kotlin.equals(this.realStrengthA, other.realStrengthA) && Kotlin.equals(this.realStrengthB, other.realStrengthB) && Kotlin.equals(this.feelIndex, other.feelIndex)))));
  };
  function Structure$NIM$V2$Wave(msgType, dataMsg, pluseData) {
    Structure$NIM$V2$Wave$Companion_getInstance();
    this.msgType = msgType;
    this.dataMsg = dataMsg;
    this.pluseData = pluseData;
  }
  Structure$NIM$V2$Wave.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, Structure$NIM$V2$Wave) ? tmp$_0 : throwCCE();
    if (this.msgType !== other.msgType)
      return false;
    if (!equals(this.dataMsg, other.dataMsg))
      return false;
    if (!contentEquals(this.pluseData, other.pluseData))
      return false;
    return true;
  };
  Structure$NIM$V2$Wave.prototype.hashCode = function () {
    var result = this.msgType;
    result = (31 * result | 0) + hashCode(this.dataMsg) | 0;
    result = (31 * result | 0) + contentHashCode(this.pluseData) | 0;
    return result;
  };
  function Structure$NIM$V2$Wave$Companion() {
    Structure$NIM$V2$Wave$Companion_instance = this;
  }
  Structure$NIM$V2$Wave$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$Wave$$serializer_getInstance();
  };
  Structure$NIM$V2$Wave$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$Wave$Companion_instance = null;
  function Structure$NIM$V2$Wave$Companion_getInstance() {
    if (Structure$NIM$V2$Wave$Companion_instance === null) {
      new Structure$NIM$V2$Wave$Companion();
    }return Structure$NIM$V2$Wave$Companion_instance;
  }
  function Structure$NIM$V2$Wave$$serializer() {
    this.descriptor_pkw6zr$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.Wave', this, 3);
    this.descriptor.addElement_ivxn3r$('msgType', false);
    this.descriptor.addElement_ivxn3r$('dataMsg', false);
    this.descriptor.addElement_ivxn3r$('pluseData', false);
    Structure$NIM$V2$Wave$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$Wave$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_pkw6zr$_0;
    }
  });
  Structure$NIM$V2$Wave$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.msgType);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.dataMsg);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Structure$NIM$V2$WaveAndStrength), Structure$NIM$V2$WaveAndStrength$$serializer_getInstance()), value.pluseData);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$Wave$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Structure$NIM$V2$WaveAndStrength), Structure$NIM$V2$WaveAndStrength$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$Wave_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V2$Wave$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, new ReferenceArraySerializer(getKClass(Structure$NIM$V2$WaveAndStrength), Structure$NIM$V2$WaveAndStrength$$serializer_getInstance())];
  };
  Structure$NIM$V2$Wave$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$Wave$$serializer_instance = null;
  function Structure$NIM$V2$Wave$$serializer_getInstance() {
    if (Structure$NIM$V2$Wave$$serializer_instance === null) {
      new Structure$NIM$V2$Wave$$serializer();
    }return Structure$NIM$V2$Wave$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$Wave_init(seen1, msgType, dataMsg, pluseData, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$Wave.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('msgType');
    else
      $this.msgType = msgType;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('dataMsg');
    else
      $this.dataMsg = dataMsg;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('pluseData');
    else
      $this.pluseData = pluseData;
    return $this;
  }
  Structure$NIM$V2$Wave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wave',
    interfaces: []
  };
  Structure$NIM$V2$Wave.prototype.component1 = function () {
    return this.msgType;
  };
  Structure$NIM$V2$Wave.prototype.component2 = function () {
    return this.dataMsg;
  };
  Structure$NIM$V2$Wave.prototype.component3 = function () {
    return this.pluseData;
  };
  Structure$NIM$V2$Wave.prototype.copy_vr20fy$ = function (msgType, dataMsg, pluseData) {
    return new Structure$NIM$V2$Wave(msgType === void 0 ? this.msgType : msgType, dataMsg === void 0 ? this.dataMsg : dataMsg, pluseData === void 0 ? this.pluseData : pluseData);
  };
  Structure$NIM$V2$Wave.prototype.toString = function () {
    return 'Wave(msgType=' + Kotlin.toString(this.msgType) + (', dataMsg=' + Kotlin.toString(this.dataMsg)) + (', pluseData=' + Kotlin.toString(this.pluseData)) + ')';
  };
  function Structure$NIM$V2$WaveAndStrength(bytes, channel, strength) {
    Structure$NIM$V2$WaveAndStrength$Companion_getInstance();
    this.bytes = bytes;
    this.channel = channel;
    this.strength = strength;
  }
  function Structure$NIM$V2$WaveAndStrength$Companion() {
    Structure$NIM$V2$WaveAndStrength$Companion_instance = this;
  }
  Structure$NIM$V2$WaveAndStrength$Companion.prototype.serializer = function () {
    return Structure$NIM$V2$WaveAndStrength$$serializer_getInstance();
  };
  Structure$NIM$V2$WaveAndStrength$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Structure$NIM$V2$WaveAndStrength$Companion_instance = null;
  function Structure$NIM$V2$WaveAndStrength$Companion_getInstance() {
    if (Structure$NIM$V2$WaveAndStrength$Companion_instance === null) {
      new Structure$NIM$V2$WaveAndStrength$Companion();
    }return Structure$NIM$V2$WaveAndStrength$Companion_instance;
  }
  function Structure$NIM$V2$WaveAndStrength$$serializer() {
    this.descriptor_wzt4hj$_0 = new PluginGeneratedSerialDescriptor('Structure.NIM.V2.WaveAndStrength', this, 3);
    this.descriptor.addElement_ivxn3r$('bytes', false);
    this.descriptor.addElement_ivxn3r$('channel', false);
    this.descriptor.addElement_ivxn3r$('strength', false);
    Structure$NIM$V2$WaveAndStrength$$serializer_instance = this;
  }
  Object.defineProperty(Structure$NIM$V2$WaveAndStrength$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_wzt4hj$_0;
    }
  });
  Structure$NIM$V2$WaveAndStrength$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.bytes);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.channel);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.strength);
    output.endStructure_24f42q$(this.descriptor);
  };
  Structure$NIM$V2$WaveAndStrength$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Structure$NIM$V2$Structure$NIM$V2$WaveAndStrength_init(bitMask0, local0, local1, local2, null);
  };
  Structure$NIM$V2$WaveAndStrength$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Structure$NIM$V2$WaveAndStrength$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Structure$NIM$V2$WaveAndStrength$$serializer_instance = null;
  function Structure$NIM$V2$WaveAndStrength$$serializer_getInstance() {
    if (Structure$NIM$V2$WaveAndStrength$$serializer_instance === null) {
      new Structure$NIM$V2$WaveAndStrength$$serializer();
    }return Structure$NIM$V2$WaveAndStrength$$serializer_instance;
  }
  function Structure$NIM$V2$Structure$NIM$V2$WaveAndStrength_init(seen1, bytes, channel, strength, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Structure$NIM$V2$WaveAndStrength.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('bytes');
    else
      $this.bytes = bytes;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('channel');
    else
      $this.channel = channel;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('strength');
    else
      $this.strength = strength;
    return $this;
  }
  Structure$NIM$V2$WaveAndStrength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveAndStrength',
    interfaces: []
  };
  Structure$NIM$V2$WaveAndStrength.prototype.component1 = function () {
    return this.bytes;
  };
  Structure$NIM$V2$WaveAndStrength.prototype.component2 = function () {
    return this.channel;
  };
  Structure$NIM$V2$WaveAndStrength.prototype.component3 = function () {
    return this.strength;
  };
  Structure$NIM$V2$WaveAndStrength.prototype.copy_3m52m6$ = function (bytes, channel, strength) {
    return new Structure$NIM$V2$WaveAndStrength(bytes === void 0 ? this.bytes : bytes, channel === void 0 ? this.channel : channel, strength === void 0 ? this.strength : strength);
  };
  Structure$NIM$V2$WaveAndStrength.prototype.toString = function () {
    return 'WaveAndStrength(bytes=' + Kotlin.toString(this.bytes) + (', channel=' + Kotlin.toString(this.channel)) + (', strength=' + Kotlin.toString(this.strength)) + ')';
  };
  Structure$NIM$V2$WaveAndStrength.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bytes) | 0;
    result = result * 31 + Kotlin.hashCode(this.channel) | 0;
    result = result * 31 + Kotlin.hashCode(this.strength) | 0;
    return result;
  };
  Structure$NIM$V2$WaveAndStrength.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bytes, other.bytes) && Kotlin.equals(this.channel, other.channel) && Kotlin.equals(this.strength, other.strength)))));
  };
  Structure$NIM$V2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'V2',
    interfaces: []
  };
  Structure$NIM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NIM',
    interfaces: []
  };
  Structure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Structure',
    interfaces: []
  };
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  _.Auth = Auth;
  Object.defineProperty(DGRemote, 'Companion', {
    get: DGRemote$Companion_getInstance
  });
  _.DGRemote = DGRemote;
  DGRemoteV1.Controller = DGRemoteV1$Controller;
  DGRemoteV1.Controlled = DGRemoteV1$Controlled;
  _.DGRemoteV1 = DGRemoteV1;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy;
  DGRemoteV2.Controller = DGRemoteV2$Controller;
  DGRemoteV2.Controlled = DGRemoteV2$Controlled;
  _.DGRemoteV2 = DGRemoteV2;
  Object.defineProperty(Structure, 'Companion', {
    get: Structure$Companion_getInstance
  });
  Structure.Header = Structure$Header;
  Structure.Request = Structure$Request;
  Structure.NIMAuth = Structure$NIMAuth;
  Structure.NIMMessage = Structure$NIMMessage;
  Structure.FeelingMessage = Structure$FeelingMessage;
  Object.defineProperty(Structure$Response$Common, 'Companion', {
    get: Structure$Response$Common$Companion_getInstance
  });
  Object.defineProperty(Structure$Response$Common, '$serializer', {
    get: Structure$Response$Common$$serializer_getInstance
  });
  Structure$Response.Common_init_woby6u$ = Structure$Response$Structure$Response$Common_init;
  Structure$Response.Common = Structure$Response$Common;
  Object.defineProperty(Structure$Response$Login, 'Companion', {
    get: Structure$Response$Login$Companion_getInstance
  });
  Object.defineProperty(Structure$Response$Login, '$serializer', {
    get: Structure$Response$Login$$serializer_getInstance
  });
  Structure$Response.Login_init_80amq2$ = Structure$Response$Structure$Response$Login_init;
  Structure$Response.Login = Structure$Response$Login;
  Object.defineProperty(Structure$Response$TokenVerify, 'Companion', {
    get: Structure$Response$TokenVerify$Companion_getInstance
  });
  Object.defineProperty(Structure$Response$TokenVerify, '$serializer', {
    get: Structure$Response$TokenVerify$$serializer_getInstance
  });
  Structure$Response.TokenVerify_init_zgi4xr$ = Structure$Response$Structure$Response$TokenVerify_init;
  Structure$Response.TokenVerify = Structure$Response$TokenVerify;
  Object.defineProperty(Structure$Response$IMConnectCode, 'Companion', {
    get: Structure$Response$IMConnectCode$Companion_getInstance
  });
  Object.defineProperty(Structure$Response$IMConnectCode, '$serializer', {
    get: Structure$Response$IMConnectCode$$serializer_getInstance
  });
  Structure$Response.IMConnectCode_init_t5sutn$ = Structure$Response$Structure$Response$IMConnectCode_init;
  Structure$Response.IMConnectCode = Structure$Response$IMConnectCode;
  Object.defineProperty(Structure$Response$JoinControl, 'Companion', {
    get: Structure$Response$JoinControl$Companion_getInstance
  });
  Object.defineProperty(Structure$Response$JoinControl, '$serializer', {
    get: Structure$Response$JoinControl$$serializer_getInstance
  });
  Structure$Response.JoinControl_init_74tn2b$ = Structure$Response$Structure$Response$JoinControl_init;
  Structure$Response.JoinControl = Structure$Response$JoinControl;
  Structure.Response = Structure$Response;
  Object.defineProperty(Structure$NIM$V1$Join, 'Companion', {
    get: Structure$NIM$V1$Join$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$Join, '$serializer', {
    get: Structure$NIM$V1$Join$$serializer_getInstance
  });
  Structure$NIM$V1.Join_init_vbg14u$ = Structure$NIM$V1$Structure$NIM$V1$Join_init;
  Structure$NIM$V1.Join = Structure$NIM$V1$Join;
  Object.defineProperty(Structure$NIM$V1$JoinDetail, 'Companion', {
    get: Structure$NIM$V1$JoinDetail$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$JoinDetail, '$serializer', {
    get: Structure$NIM$V1$JoinDetail$$serializer_getInstance
  });
  Structure$NIM$V1.JoinDetail_init_iuq4nc$ = Structure$NIM$V1$Structure$NIM$V1$JoinDetail_init;
  Structure$NIM$V1.JoinDetail = Structure$NIM$V1$JoinDetail;
  Object.defineProperty(Structure$NIM$V1$Disconnect, 'Companion', {
    get: Structure$NIM$V1$Disconnect$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$Disconnect, '$serializer', {
    get: Structure$NIM$V1$Disconnect$$serializer_getInstance
  });
  Structure$NIM$V1.Disconnect_init_vbg14u$ = Structure$NIM$V1$Structure$NIM$V1$Disconnect_init;
  Structure$NIM$V1.Disconnect = Structure$NIM$V1$Disconnect;
  Object.defineProperty(Structure$NIM$V1$DisconnectDetail, 'Companion', {
    get: Structure$NIM$V1$DisconnectDetail$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$DisconnectDetail, '$serializer', {
    get: Structure$NIM$V1$DisconnectDetail$$serializer_getInstance
  });
  Structure$NIM$V1.DisconnectDetail_init_4n7ppb$ = Structure$NIM$V1$Structure$NIM$V1$DisconnectDetail_init;
  Structure$NIM$V1.DisconnectDetail = Structure$NIM$V1$DisconnectDetail;
  Object.defineProperty(Structure$NIM$V1$SendWaveAndStrength, 'Companion', {
    get: Structure$NIM$V1$SendWaveAndStrength$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$SendWaveAndStrength, '$serializer', {
    get: Structure$NIM$V1$SendWaveAndStrength$$serializer_getInstance
  });
  Structure$NIM$V1.SendWaveAndStrength_init_vbg14u$ = Structure$NIM$V1$Structure$NIM$V1$SendWaveAndStrength_init;
  Structure$NIM$V1.SendWaveAndStrength = Structure$NIM$V1$SendWaveAndStrength;
  Object.defineProperty(Structure$NIM$V1$WaveStrengthMsg, 'Companion', {
    get: Structure$NIM$V1$WaveStrengthMsg$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V1$WaveStrengthMsg, '$serializer', {
    get: Structure$NIM$V1$WaveStrengthMsg$$serializer_getInstance
  });
  Structure$NIM$V1.WaveStrengthMsg_init_q11ckg$ = Structure$NIM$V1$Structure$NIM$V1$WaveStrengthMsg_init;
  Structure$NIM$V1.WaveStrengthMsg = Structure$NIM$V1$WaveStrengthMsg;
  Structure$NIM.V1 = Structure$NIM$V1;
  Object.defineProperty(Structure$NIM$V2$Connect, 'Companion', {
    get: Structure$NIM$V2$Connect$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$Connect, '$serializer', {
    get: Structure$NIM$V2$Connect$$serializer_getInstance
  });
  Structure$NIM$V2.Connect_init_k7m1pc$ = Structure$NIM$V2$Structure$NIM$V2$Connect_init;
  Structure$NIM$V2.Connect = Structure$NIM$V2$Connect;
  Object.defineProperty(Structure$NIM$V2$Config, 'Companion', {
    get: Structure$NIM$V2$Config$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$Config, '$serializer', {
    get: Structure$NIM$V2$Config$$serializer_getInstance
  });
  Structure$NIM$V2.Config_init_xylw2o$ = Structure$NIM$V2$Structure$NIM$V2$Config_init;
  Structure$NIM$V2.Config = Structure$NIM$V2$Config;
  Object.defineProperty(Structure$NIM$V2$UpdateStrength, 'Companion', {
    get: Structure$NIM$V2$UpdateStrength$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$UpdateStrength, '$serializer', {
    get: Structure$NIM$V2$UpdateStrength$$serializer_getInstance
  });
  Structure$NIM$V2.UpdateStrength_init_ei4ty7$ = Structure$NIM$V2$Structure$NIM$V2$UpdateStrength_init;
  Structure$NIM$V2.UpdateStrength = Structure$NIM$V2$UpdateStrength;
  Object.defineProperty(Structure$NIM$V2$Feeling, 'Companion', {
    get: Structure$NIM$V2$Feeling$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$Feeling, '$serializer', {
    get: Structure$NIM$V2$Feeling$$serializer_getInstance
  });
  Structure$NIM$V2.Feeling_init_24f45z$ = Structure$NIM$V2$Structure$NIM$V2$Feeling_init;
  Structure$NIM$V2.Feeling = Structure$NIM$V2$Feeling;
  Object.defineProperty(Structure$NIM$V2$Wave, 'Companion', {
    get: Structure$NIM$V2$Wave$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$Wave, '$serializer', {
    get: Structure$NIM$V2$Wave$$serializer_getInstance
  });
  Structure$NIM$V2.Wave_init_bmaa4h$ = Structure$NIM$V2$Structure$NIM$V2$Wave_init;
  Structure$NIM$V2.Wave = Structure$NIM$V2$Wave;
  Object.defineProperty(Structure$NIM$V2$WaveAndStrength, 'Companion', {
    get: Structure$NIM$V2$WaveAndStrength$Companion_getInstance
  });
  Object.defineProperty(Structure$NIM$V2$WaveAndStrength, '$serializer', {
    get: Structure$NIM$V2$WaveAndStrength$$serializer_getInstance
  });
  Structure$NIM$V2.WaveAndStrength_init_naw3kw$ = Structure$NIM$V2$Structure$NIM$V2$WaveAndStrength_init;
  Structure$NIM$V2.WaveAndStrength = Structure$NIM$V2$WaveAndStrength;
  Structure$NIM.V2 = Structure$NIM$V2;
  Structure.NIM = Structure$NIM;
  _.Structure = Structure;
  Structure$Response$Common$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$Response$Common$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$Response$Login$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$Response$Login$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$Response$TokenVerify$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$Response$TokenVerify$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$Response$IMConnectCode$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$Response$IMConnectCode$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$Response$JoinControl$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$Response$JoinControl$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$Join$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$Join$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$JoinDetail$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$JoinDetail$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$Disconnect$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$Disconnect$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$DisconnectDetail$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$DisconnectDetail$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$SendWaveAndStrength$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V1$WaveStrengthMsg$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$Connect$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$Connect$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$Config$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$Config$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$UpdateStrength$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$UpdateStrength$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$Feeling$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$Feeling$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$Wave$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$Wave$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Structure$NIM$V2$WaveAndStrength$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Structure$NIM$V2$WaveAndStrength$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Kotlin.defineModule('OpenDGLab-Remote', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-json-jsLegacy'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('Kotlin-DateTime-library-kotlinx-datetime-jsLegacy')));

//# sourceMappingURL=OpenDGLab-Remote.js.map
