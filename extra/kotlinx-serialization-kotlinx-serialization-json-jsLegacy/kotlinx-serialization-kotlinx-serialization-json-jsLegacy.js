(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy'.");
    }root['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'], kotlin, this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var StringFormat = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.StringFormat;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var equals = Kotlin.equals;
  var unboxChar = Kotlin.unboxChar;
  var modules = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.modules;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var serializerOrNull = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializerOrNull_1yb8b7$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var SerializationException_init = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SerializationException_init_pdl1vj$;
  var PolymorphicKind = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.PolymorphicKind;
  var buildSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.buildSerialDescriptor_2yu4m$;
  var UpdateMode = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UpdateMode;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Decoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.Decoder;
  var CompositeDecoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.CompositeDecoder;
  var hashCode = Kotlin.hashCode;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var Annotation = Kotlin.kotlin.Annotation;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var PrimitiveKind = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.PrimitiveKind;
  var SerialKind = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.SerialKind;
  var PrimitiveSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.PrimitiveSerialDescriptor_xytc2a$;
  var HashMap = Kotlin.kotlin.collections.HashMap;
  var getKClass = Kotlin.getKClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var createKType = Kotlin.createKType;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var SerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.SerialDescriptor;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.builtins.serializer_6eet4j$;
  var MapSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
  var ListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.builtins.ListSerializer_swdriu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializer_saj79j$;
  var Encoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.Encoder;
  var CompositeEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.CompositeEncoder;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var SerializationException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SerializationException;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var toChar = Kotlin.toChar;
  var concatToString = Kotlin.kotlin.text.concatToString_wlitf7$;
  var copyOf = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var AbstractPolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.AbstractPolymorphicSerializer;
  var Any = Object;
  var findPolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.findPolymorphicSerializer_dz33bw$;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SealedClassSerializer;
  var jsonCachedSerialNames = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.jsonCachedSerialNames_583jlf$;
  var DeserializationStrategy = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.DeserializationStrategy;
  var StructureKind = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.StructureKind;
  var SerializersModuleCollector = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.modules.SerializersModuleCollector;
  var toByte = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort = Kotlin.kotlin.text.toShort_pdl1vz$;
  var isFinite = Kotlin.kotlin.isFinite_81szk$;
  var isFinite_0 = Kotlin.kotlin.isFinite_yrwdxr$;
  var single = Kotlin.kotlin.text.single_gw00vp$;
  var Throwable = Error;
  var AbstractDecoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.AbstractDecoder;
  var AbstractEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.AbstractEncoder;
  var SerializationStrategy = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SerializationStrategy;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var toByte_0 = Kotlin.toByte;
  var toShort_0 = Kotlin.toShort;
  var NamedValueDecoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.NamedValueDecoder;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var throwUPAE = Kotlin.throwUPAE;
  var NamedValueEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.NamedValueEncoder;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var L9007199254740991 = new Kotlin.Long(-1, 2097151);
  var numberToChar = Kotlin.numberToChar;
  var toByteOrNull = Kotlin.kotlin.text.toByteOrNull_pdl1vz$;
  var toShortOrNull = Kotlin.kotlin.text.toShortOrNull_pdl1vz$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var Math_0 = Math;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  Json$Default.prototype = Object.create(Json.prototype);
  Json$Default.prototype.constructor = Json$Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  SubtypeToDetectDefault.prototype = Object.create(JsonConfiguration.prototype);
  SubtypeToDetectDefault.prototype.constructor = SubtypeToDetectDefault;
  SubtypeToDetectStable.prototype = Object.create(JsonConfiguration.prototype);
  SubtypeToDetectStable.prototype.constructor = SubtypeToDetectStable;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonPrimitiveDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonPrimitiveDecoder.prototype.constructor = JsonPrimitiveDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  AbstractJsonTreeEncoder.prototype = Object.create(NamedValueEncoder.prototype);
  AbstractJsonTreeEncoder.prototype.constructor = AbstractJsonTreeEncoder;
  JsonPrimitiveEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonPrimitiveEncoder.prototype.constructor = JsonPrimitiveEncoder;
  JsonTreeEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeEncoder.prototype.constructor = JsonTreeEncoder;
  JsonTreeMapEncoder.prototype = Object.create(JsonTreeEncoder.prototype);
  JsonTreeMapEncoder.prototype.constructor = JsonTreeMapEncoder;
  JsonTreeListEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeListEncoder.prototype.constructor = JsonTreeListEncoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  DynamicInput.prototype = Object.create(NamedValueDecoder.prototype);
  DynamicInput.prototype.constructor = DynamicInput;
  DynamicMapInput.prototype = Object.create(DynamicInput.prototype);
  DynamicMapInput.prototype.constructor = DynamicMapInput;
  DynamicListInput.prototype = Object.create(DynamicInput.prototype);
  DynamicListInput.prototype.constructor = DynamicListInput;
  PrimitiveDynamicInput.prototype = Object.create(DynamicInput.prototype);
  PrimitiveDynamicInput.prototype.constructor = PrimitiveDynamicInput;
  DynamicObjectEncoder$WriteMode.prototype = Object.create(Enum.prototype);
  DynamicObjectEncoder$WriteMode.prototype.constructor = DynamicObjectEncoder$WriteMode;
  DynamicObjectEncoder.prototype = Object.create(AbstractEncoder.prototype);
  DynamicObjectEncoder.prototype.constructor = DynamicObjectEncoder;
  DynamicPrimitiveEncoder.prototype = Object.create(AbstractEncoder.prototype);
  DynamicPrimitiveEncoder.prototype.constructor = DynamicPrimitiveEncoder;
  function Json(configuration) {
    Json$Default_getInstance();
    this.configuration_8be2vx$ = configuration;
  }
  Object.defineProperty(Json.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.configuration_8be2vx$.serializersModule;
    }
  });
  function Json$Default() {
    Json$Default_instance = this;
    Json.call(this, new JsonConf());
  }
  Json$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: [Json]
  };
  var Json$Default_instance = null;
  function Json$Default_getInstance() {
    if (Json$Default_instance === null) {
      new Json$Default();
    }return Json$Default_instance;
  }
  Json.prototype.encodeToString_tf03ej$ = function (serializer, value) {
    var result = StringBuilder_init();
    var encoder = StreamingJsonEncoder_init(result, this, WriteMode$OBJ_getInstance(), Kotlin.newArray(WriteMode$values().length, null));
    encoder.encodeSerializableValue_tf03ej$(serializer, value);
    return result.toString();
  };
  Json.prototype.decodeFromString_awif5v$ = function (deserializer, string) {
    var reader = new JsonReader(string);
    var input = new StreamingJsonDecoder(this, WriteMode$OBJ_getInstance(), reader);
    var result = input.decodeSerializableValue_w63s0f$(deserializer);
    if (!reader.isDone) {
      throw IllegalStateException_init(('Reader has not consumed the whole input: ' + reader).toString());
    }return result;
  };
  Json.prototype.encodeToJsonElement_tf03ej$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  Json.prototype.decodeFromJsonElement_htt2tq$ = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  Json.prototype.parseToJsonElement_61zpoe$ = function (string) {
    return this.decodeFromString_awif5v$(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Json',
    interfaces: [StringFormat]
  };
  function Json_0(from, builderAction) {
    if (from === void 0)
      from = Json$Default_getInstance();
    var builder = new JsonBuilder(from.configuration_8be2vx$);
    builderAction(builder);
    var conf = builder.build_8be2vx$();
    return new JsonImpl(conf);
  }
  var encodeToJsonElement = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.encodeToJsonElement_eahrye$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return $receiver.encodeToJsonElement_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromJsonElement = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.decodeFromJsonElement_cmu2rn$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, json) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return $receiver.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), json);
    };
  }));
  function JsonBuilder(conf) {
    this.encodeDefaults = conf.encodeDefaults;
    this.ignoreUnknownKeys = conf.ignoreUnknownKeys;
    this.isLenient = conf.isLenient;
    this.allowStructuredMapKeys = conf.allowStructuredMapKeys;
    this.prettyPrint = conf.prettyPrint;
    this.prettyPrintIndent = conf.prettyPrintIndent;
    this.coerceInputValues = conf.coerceInputValues;
    this.useArrayPolymorphism = conf.useArrayPolymorphism;
    this.classDiscriminator = conf.classDiscriminator;
    this.allowSpecialFloatingPointValues = conf.allowSpecialFloatingPointValues;
    this.serializersModule = conf.serializersModule;
    this.serializeSpecialFloatingPointValues = false;
    this.indent = '    ';
    this.strictMode = true;
    this.unquoted = false;
    this.unquotedPrint = false;
    this.serialModule = modules.EmptySerializersModule;
  }
  JsonBuilder.prototype.build_8be2vx$ = function () {
    if (this.useArrayPolymorphism) {
      if (!equals(this.classDiscriminator, defaultDiscriminator)) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init(message.toString());
      }}if (!this.prettyPrint) {
      if (!equals(this.prettyPrintIndent, defaultIndent)) {
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init(message_0.toString());
      }} else if (!equals(this.prettyPrintIndent, defaultIndent)) {
      var $receiver = this.prettyPrintIndent;
      var all$result;
      all$break: do {
        var tmp$;
        tmp$ = iterator($receiver);
        while (tmp$.hasNext()) {
          var element = unboxChar(tmp$.next());
          var it = toBoxedChar(element);
          if (!(unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 13 || unboxChar(it) === 10)) {
            all$result = false;
            break all$break;
          }}
        all$result = true;
      }
       while (false);
      var allWhitespaces = all$result;
      if (!allWhitespaces) {
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.prettyPrintIndent;
        throw IllegalArgumentException_init(message_1.toString());
      }}return new JsonConf(this.encodeDefaults, this.ignoreUnknownKeys, this.isLenient, this.allowStructuredMapKeys, this.prettyPrint, this.prettyPrintIndent, this.coerceInputValues, this.useArrayPolymorphism, this.classDiscriminator, this.allowSpecialFloatingPointValues, this.serializersModule);
  };
  JsonBuilder.prototype.buildConfiguration = function () {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  };
  JsonBuilder.prototype.buildModule = function () {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  };
  JsonBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonBuilder',
    interfaces: []
  };
  function JsonImpl(configuration) {
    Json.call(this, configuration);
    this.validateConfiguration_0();
  }
  JsonImpl.prototype.validateConfiguration_0 = function () {
    if (equals(this.serializersModule, modules.EmptySerializersModule))
      return;
    var collector = new PolymorphismValidator(this.configuration_8be2vx$.useArrayPolymorphism, this.configuration_8be2vx$.classDiscriminator);
    this.serializersModule.dumpTo_ukvgvw$(collector);
  };
  JsonImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonImpl',
    interfaces: [Json]
  };
  function Json_1(configuration, context) {
    if (context === void 0)
      context = modules.EmptySerializersModule;
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_2(configuration) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_3(configuration) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_4(configuration, context) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_5(context) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_6() {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  var defaultIndent;
  var defaultDiscriminator;
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator) {
    JsonConfiguration$Companion_getInstance();
    if (encodeDefaults === void 0)
      encodeDefaults = false;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (serializeSpecialFloatingPointValues === void 0)
      serializeSpecialFloatingPointValues = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (unquotedPrint === void 0)
      unquotedPrint = false;
    if (indent === void 0)
      indent = JsonConfiguration$Companion_getInstance().defaultIndent_0;
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = JsonConfiguration$Companion_getInstance().defaultDiscriminator_0;
    this.encodeDefaults_8be2vx$ = encodeDefaults;
    this.ignoreUnknownKeys_8be2vx$ = ignoreUnknownKeys;
    this.isLenient_8be2vx$ = isLenient;
    this.serializeSpecialFloatingPointValues_8be2vx$ = serializeSpecialFloatingPointValues;
    this.allowStructuredMapKeys_8be2vx$ = allowStructuredMapKeys;
    this.prettyPrint_8be2vx$ = prettyPrint;
    this.unquotedPrint_8be2vx$ = unquotedPrint;
    this.indent_8be2vx$ = indent;
    this.coerceInputValues_8be2vx$ = coerceInputValues;
    this.useArrayPolymorphism_8be2vx$ = useArrayPolymorphism;
    this.classDiscriminator_8be2vx$ = classDiscriminator;
    if (this.useArrayPolymorphism_8be2vx$) {
      if (!equals(this.classDiscriminator_8be2vx$, JsonConfiguration$Companion_getInstance().defaultDiscriminator_0)) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init(message.toString());
      }}if (!this.prettyPrint_8be2vx$) {
      if (!equals(this.indent_8be2vx$, JsonConfiguration$Companion_getInstance().defaultIndent_0)) {
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init(message_0.toString());
      }}}
  JsonConfiguration.prototype.copy_aq75xd$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (serializeSpecialFloatingPointValues === void 0)
      serializeSpecialFloatingPointValues = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (unquotedPrint === void 0)
      unquotedPrint = false;
    if (indent === void 0)
      indent = JsonConfiguration$Companion_getInstance().defaultIndent_0;
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = JsonConfiguration$Companion_getInstance().defaultDiscriminator_0;
    return new JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator);
  };
  function JsonConfiguration$Companion() {
    JsonConfiguration$Companion_instance = this;
    this.defaultIndent_0 = '    ';
    this.defaultDiscriminator_0 = 'type';
    this.Default = new SubtypeToDetectDefault();
    this.Stable = new SubtypeToDetectStable();
  }
  JsonConfiguration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonConfiguration$Companion_instance = null;
  function JsonConfiguration$Companion_getInstance() {
    if (JsonConfiguration$Companion_instance === null) {
      new JsonConfiguration$Companion();
    }return JsonConfiguration$Companion_instance;
  }
  JsonConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonConfiguration',
    interfaces: []
  };
  function SubtypeToDetectDefault() {
    JsonConfiguration.call(this);
  }
  SubtypeToDetectDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtypeToDetectDefault',
    interfaces: [JsonConfiguration]
  };
  function SubtypeToDetectStable() {
    JsonConfiguration.call(this);
  }
  SubtypeToDetectStable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtypeToDetectStable',
    interfaces: [JsonConfiguration]
  };
  function JsonConfiguration_0(strictMode, unquoted) {
    if (strictMode === void 0)
      strictMode = true;
    if (unquoted === void 0)
      unquoted = false;
    throw IllegalStateException_init('Should not be called'.toString());
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.baseClass_saxo55$_0 = baseClass;
    this.descriptor_fdk25h$_0 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + toString(this.baseClass_saxo55$_0.simpleName) + '>', PolymorphicKind.SEALED, []);
  }
  Object.defineProperty(JsonContentPolymorphicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fdk25h$_0;
    }
  });
  JsonContentPolymorphicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    var actualSerializer = (tmp$_0 = (tmp$ = encoder.serializersModule.getPolymorphic_joiicr$(this.baseClass_saxo55$_0, value)) != null ? tmp$ : serializerOrNull(Kotlin.getKClassFromExpression(value))) != null ? tmp$_0 : this.throwSubtypeNotRegistered_wimvgz$_0(Kotlin.getKClassFromExpression(value), this.baseClass_saxo55$_0);
    (Kotlin.isType(tmp$_1 = actualSerializer, KSerializer) ? tmp$_1 : throwCCE()).serialize_55azsf$(encoder, value);
  };
  JsonContentPolymorphicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$;
    var input = asJsonDecoder(decoder);
    var tree = input.decodeJsonElement();
    var actualSerializer = Kotlin.isType(tmp$ = this.selectDeserializer_qiw0cd$(tree), KSerializer) ? tmp$ : throwCCE();
    return input.json.decodeFromJsonElement_htt2tq$(actualSerializer, tree);
  };
  JsonContentPolymorphicSerializer.prototype.selectSerializer_qiw0cd$ = function (element) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.selectDeserializer_qiw0cd$(element), KSerializer) ? tmp$ : throwCCE();
  };
  JsonContentPolymorphicSerializer.prototype.throwSubtypeNotRegistered_wimvgz$_0 = function (subClass, baseClass) {
    var tmp$;
    var subClassName = (tmp$ = subClass.simpleName) != null ? tmp$ : subClass.toString();
    var scope = "in the scope of '" + toString(baseClass.simpleName) + "'";
    throw SerializationException_init("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.' + '\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  };
  JsonContentPolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonContentPolymorphicSerializer',
    interfaces: [KSerializer]
  };
  function JsonDecoder() {
  }
  Object.defineProperty(JsonDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode.OVERWRITE;
    }
  });
  JsonDecoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function JsonElement() {
    JsonElement$Companion_getInstance();
  }
  function JsonElement$Companion() {
    JsonElement$Companion_instance = this;
  }
  JsonElement$Companion.prototype.serializer = function () {
    return JsonElementSerializer_getInstance();
  };
  JsonElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonElement$Companion_instance = null;
  function JsonElement$Companion_getInstance() {
    if (JsonElement$Companion_instance === null) {
      new JsonElement$Companion();
    }return JsonElement$Companion_instance;
  }
  JsonElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonElement',
    interfaces: []
  };
  function JsonPrimitive() {
    JsonPrimitive$Companion_getInstance();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.content;
  };
  function JsonPrimitive$Companion() {
    JsonPrimitive$Companion_instance = this;
  }
  JsonPrimitive$Companion.prototype.serializer = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  JsonPrimitive$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonPrimitive$Companion_instance = null;
  function JsonPrimitive$Companion_getInstance() {
    if (JsonPrimitive$Companion_instance === null) {
      new JsonPrimitive$Companion();
    }return JsonPrimitive$Companion_instance;
  }
  JsonPrimitive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitive',
    interfaces: [JsonElement]
  };
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.isString_jhh1on$_0 = isString;
    this.content_prrjtz$_0 = body.toString();
  }
  Object.defineProperty(JsonLiteral.prototype, 'isString', {
    get: function () {
      return this.isString_jhh1on$_0;
    }
  });
  Object.defineProperty(JsonLiteral.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_prrjtz$_0;
    }
  });
  JsonLiteral.prototype.toString = function () {
    var tmp$;
    if (this.isString) {
      var $receiver = StringBuilder_init();
      printQuoted($receiver, this.content);
      tmp$ = $receiver.toString();
    } else
      tmp$ = this.content;
    return tmp$;
  };
  JsonLiteral.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, JsonLiteral) ? tmp$_0 : throwCCE();
    if (this.isString !== other.isString)
      return false;
    if (!equals(this.content, other.content))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = hashCode(this.isString);
    result = (31 * result | 0) + hashCode(this.content) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonLiteral',
    interfaces: [JsonPrimitive]
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_w1vkof$_0 = 'null';
  }
  Object.defineProperty(JsonNull.prototype, 'isString', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(JsonNull.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_w1vkof$_0;
    }
  });
  JsonNull.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonNull',
    interfaces: [JsonPrimitive]
  };
  var JsonNull_instance = null;
  function JsonNull_getInstance() {
    if (JsonNull_instance === null) {
      new JsonNull();
    }return JsonNull_instance;
  }
  function JsonObject(content) {
    JsonObject$Companion_getInstance();
    JsonElement.call(this);
    this.content_0 = content;
  }
  JsonObject.prototype.equals = function (other) {
    return equals(this.content_0, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content_0);
  };
  function JsonObject$toString$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '"' + k + '"' + ':' + v;
  }
  JsonObject.prototype.toString = function () {
    return joinToString(this.content_0.entries, ',', '{', '}', void 0, void 0, JsonObject$toString$lambda);
  };
  function JsonObject$Companion() {
    JsonObject$Companion_instance = this;
  }
  JsonObject$Companion.prototype.serializer = function () {
    return JsonObjectSerializer_getInstance();
  };
  JsonObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonObject$Companion_instance = null;
  function JsonObject$Companion_getInstance() {
    if (JsonObject$Companion_instance === null) {
      new JsonObject$Companion();
    }return JsonObject$Companion_instance;
  }
  Object.defineProperty(JsonObject.prototype, 'entries', {
    get: function () {
      return this.content_0.entries;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'keys', {
    get: function () {
      return this.content_0.keys;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'size', {
    get: function () {
      return this.content_0.size;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'values', {
    get: function () {
      return this.content_0.values;
    }
  });
  JsonObject.prototype.containsKey_11rb$ = function (key) {
    return this.content_0.containsKey_11rb$(key);
  };
  JsonObject.prototype.containsValue_11rc$ = function (value) {
    return this.content_0.containsValue_11rc$(value);
  };
  JsonObject.prototype.get_11rb$ = function (key) {
    return this.content_0.get_11rb$(key);
  };
  JsonObject.prototype.isEmpty = function () {
    return this.content_0.isEmpty();
  };
  JsonObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObject',
    interfaces: [Map, JsonElement]
  };
  function JsonArray(content) {
    JsonArray$Companion_getInstance();
    JsonElement.call(this);
    this.content_0 = content;
  }
  JsonArray.prototype.equals = function (other) {
    return equals(this.content_0, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content_0);
  };
  JsonArray.prototype.toString = function () {
    return joinToString(this.content_0, ',', '[', ']');
  };
  function JsonArray$Companion() {
    JsonArray$Companion_instance = this;
  }
  JsonArray$Companion.prototype.serializer = function () {
    return JsonArraySerializer_getInstance();
  };
  JsonArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonArray$Companion_instance = null;
  function JsonArray$Companion_getInstance() {
    if (JsonArray$Companion_instance === null) {
      new JsonArray$Companion();
    }return JsonArray$Companion_instance;
  }
  Object.defineProperty(JsonArray.prototype, 'size', {
    get: function () {
      return this.content_0.size;
    }
  });
  JsonArray.prototype.contains_11rb$ = function (element) {
    return this.content_0.contains_11rb$(element);
  };
  JsonArray.prototype.containsAll_brywnq$ = function (elements) {
    return this.content_0.containsAll_brywnq$(elements);
  };
  JsonArray.prototype.get_za3lpa$ = function (index) {
    return this.content_0.get_za3lpa$(index);
  };
  JsonArray.prototype.indexOf_11rb$ = function (element) {
    return this.content_0.indexOf_11rb$(element);
  };
  JsonArray.prototype.isEmpty = function () {
    return this.content_0.isEmpty();
  };
  JsonArray.prototype.iterator = function () {
    return this.content_0.iterator();
  };
  JsonArray.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content_0.lastIndexOf_11rb$(element);
  };
  JsonArray.prototype.listIterator = function () {
    return this.content_0.listIterator();
  };
  JsonArray.prototype.listIterator_za3lpa$ = function (index) {
    return this.content_0.listIterator_za3lpa$(index);
  };
  JsonArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content_0.subList_vux9f0$(fromIndex, toIndex);
  };
  JsonArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonArray',
    interfaces: [List, JsonElement]
  };
  function get_jsonPrimitive($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonPrimitive');
  }
  function get_jsonObject($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonObject) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonObject');
  }
  function get_jsonArray($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonArray) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonArray');
  }
  function get_jsonNull($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonNull) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonNull');
  }
  function get_int($receiver) {
    return toInt($receiver.content);
  }
  function get_intOrNull($receiver) {
    return toIntOrNull($receiver.content);
  }
  function get_long($receiver) {
    return toLong($receiver.content);
  }
  function get_longOrNull($receiver) {
    return toLongOrNull($receiver.content);
  }
  function get_double($receiver) {
    return toDouble($receiver.content);
  }
  function get_doubleOrNull($receiver) {
    return toDoubleOrNull($receiver.content);
  }
  function get_float($receiver) {
    return toDouble($receiver.content);
  }
  function get_floatOrNull($receiver) {
    return toDoubleOrNull($receiver.content);
  }
  function get_boolean($receiver) {
    return toBooleanStrict($receiver.content);
  }
  function get_booleanOrNull($receiver) {
    return toBooleanStrictOrNull($receiver.content);
  }
  function get_contentOrNull($receiver) {
    return Kotlin.isType($receiver, JsonNull) ? null : $receiver.content;
  }
  function error($receiver, element) {
    throw IllegalArgumentException_init('Element ' + Kotlin.getKClassFromExpression($receiver) + ' is not a ' + element);
  }
  function unexpectedJson(key, expected) {
    throw IllegalArgumentException_init('Element ' + key + ' is not a ' + expected);
  }
  var buildJsonObject = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.buildJsonObject_s5o6vg$', wrapFunction(function () {
    var JsonObjectBuilder_init = _.kotlinx.serialization.json.JsonObjectBuilder;
    return function (builderAction) {
      var builder = new JsonObjectBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  var buildJsonArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.buildJsonArray_mb52fq$', wrapFunction(function () {
    var JsonArrayBuilder_init = _.kotlinx.serialization.json.JsonArrayBuilder;
    return function (builderAction) {
      var builder = new JsonArrayBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  function JsonObjectBuilder() {
    this.content_0 = LinkedHashMap_init();
  }
  JsonObjectBuilder.prototype.put_zafu29$ = function (key, element) {
    return this.content_0.put_xwzc9p$(key, element);
  };
  JsonObjectBuilder.prototype.build = function () {
    return new JsonObject(this.content_0);
  };
  JsonObjectBuilder.prototype.to_ahl3kc$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }this.content_0.put_xwzc9p$($receiver, value);
  };
  JsonObjectBuilder.prototype.to_lr5kl6$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_1(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.prototype.to_sg61ir$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_0(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.prototype.to_npuxma$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_2(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObjectBuilder',
    interfaces: []
  };
  function putJsonObject($receiver, key, builderAction) {
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return $receiver.put_zafu29$(key, builder.build());
  }
  function putJsonArray($receiver, key, builderAction) {
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return $receiver.put_zafu29$(key, builder.build());
  }
  function put($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_0(value));
  }
  function put_0($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_1(value));
  }
  function put_1($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_2(value));
  }
  function JsonArrayBuilder() {
    this.content_0 = ArrayList_init();
  }
  JsonArrayBuilder.prototype.add_qiw0cd$ = function (element) {
    this.content_0.add_11rb$(element);
    return true;
  };
  JsonArrayBuilder.prototype.build = function () {
    return new JsonArray(this.content_0);
  };
  JsonArrayBuilder.prototype.unaryPlus_5cw0du$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_2($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_4sdtmu$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_1($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_d4wkrv$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_0($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_u3sd3g$ = function ($receiver) {
    this.content_0.add_11rb$($receiver);
  };
  JsonArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonArrayBuilder',
    interfaces: []
  };
  function add($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_0(value));
  }
  function add_0($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_1(value));
  }
  function add_1($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_2(value));
  }
  function addJsonObject($receiver, builderAction) {
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return $receiver.add_qiw0cd$(builder.build());
  }
  function addJsonArray($receiver, builderAction) {
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return $receiver.add_qiw0cd$(builder.build());
  }
  var infixToDeprecated;
  var unaryPlusDeprecated;
  function JsonDslMarker() {
  }
  JsonDslMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonDslMarker',
    interfaces: [Annotation]
  };
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    this.descriptor_u8kpse$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', PolymorphicKind.SEALED, [], JsonElementSerializer$descriptor$lambda);
  }
  Object.defineProperty(JsonElementSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_u8kpse$_0;
    }
  });
  JsonElementSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    if (Kotlin.isType(value, JsonPrimitive))
      encoder.encodeSerializableValue_tf03ej$(JsonPrimitiveSerializer_getInstance(), value);
    else if (Kotlin.isType(value, JsonObject))
      encoder.encodeSerializableValue_tf03ej$(JsonObjectSerializer_getInstance(), value);
    else if (Kotlin.isType(value, JsonArray))
      encoder.encodeSerializableValue_tf03ej$(JsonArraySerializer_getInstance(), value);
  };
  JsonElementSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement();
  };
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda($receiver) {
    $receiver.element_vxrguq$('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $receiver.element_vxrguq$('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $receiver.element_vxrguq$('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $receiver.element_vxrguq$('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $receiver.element_vxrguq$('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit;
  }
  JsonElementSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonElementSerializer',
    interfaces: [KSerializer]
  };
  var JsonElementSerializer_instance = null;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance === null) {
      new JsonElementSerializer();
    }return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.descriptor_1d7xi5$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', PrimitiveKind.STRING, []);
  }
  Object.defineProperty(JsonPrimitiveSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_1d7xi5$_0;
    }
  });
  JsonPrimitiveSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var tmp$, tmp$_0;
    verify(encoder);
    if (Kotlin.isType(value, JsonNull)) {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonLiteralSerializer_getInstance(), Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE());
    }
    return tmp$_0;
  };
  JsonPrimitiveSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement();
    if (!Kotlin.isType(result, JsonPrimitive))
      throw JsonDecodingException_1(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + Kotlin.getKClassFromExpression(result), result.toString());
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonPrimitiveSerializer',
    interfaces: [KSerializer]
  };
  var JsonPrimitiveSerializer_instance = null;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance === null) {
      new JsonPrimitiveSerializer();
    }return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.descriptor_kuqqdr$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', SerialKind.ENUM, []);
  }
  Object.defineProperty(JsonNullSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kuqqdr$_0;
    }
  });
  JsonNullSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull();
  };
  JsonNullSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    decoder.decodeNull();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonNullSerializer',
    interfaces: [KSerializer]
  };
  var JsonNullSerializer_instance = null;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance === null) {
      new JsonNullSerializer();
    }return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_fnzu3f$_0 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', PrimitiveKind.STRING);
  }
  Object.defineProperty(JsonLiteralSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fnzu3f$_0;
    }
  });
  JsonLiteralSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    if (value.isString) {
      return encoder.encodeString_61zpoe$(value.content);
    }var long = get_longOrNull(value);
    if (long != null) {
      return encoder.encodeLong_s8cxhz$(long);
    }var double = get_doubleOrNull(value);
    if (double != null) {
      return encoder.encodeDouble_14dthe$(double);
    }var boolean = get_booleanOrNull(value);
    if (boolean != null) {
      return encoder.encodeBoolean_6taknv$(boolean);
    }encoder.encodeString_61zpoe$(value.content);
  };
  JsonLiteralSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement();
    if (!Kotlin.isType(result, JsonLiteral))
      throw JsonDecodingException_1(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + Kotlin.getKClassFromExpression(result), result.toString());
    return result;
  };
  JsonLiteralSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonLiteralSerializer',
    interfaces: [KSerializer]
  };
  var JsonLiteralSerializer_instance = null;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance === null) {
      new JsonLiteralSerializer();
    }return JsonLiteralSerializer_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_a992tj$_0 = JsonObjectSerializer$JsonObjectDescriptor_getInstance();
  }
  function JsonObjectSerializer$JsonObjectDescriptor() {
    JsonObjectSerializer$JsonObjectDescriptor_instance = this;
    var tmp$;
    this.$delegate_p32uvu$_0 = (Kotlin.isType(tmp$ = serializer_0(createKType(getKClass(HashMap), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), [], false))], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    this.serialName_yjsqqv$_0 = 'kotlinx.serialization.json.JsonObject';
  }
  Object.defineProperty(JsonObjectSerializer$JsonObjectDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_yjsqqv$_0;
    }
  });
  Object.defineProperty(JsonObjectSerializer$JsonObjectDescriptor.prototype, 'annotations', {
    get: function () {
      return this.$delegate_p32uvu$_0.annotations;
    }
  });
  Object.defineProperty(JsonObjectSerializer$JsonObjectDescriptor.prototype, 'elementsCount', {
    get: function () {
      return this.$delegate_p32uvu$_0.elementsCount;
    }
  });
  Object.defineProperty(JsonObjectSerializer$JsonObjectDescriptor.prototype, 'isNullable', {
    get: function () {
      return this.$delegate_p32uvu$_0.isNullable;
    }
  });
  Object.defineProperty(JsonObjectSerializer$JsonObjectDescriptor.prototype, 'kind', {
    get: function () {
      return this.$delegate_p32uvu$_0.kind;
    }
  });
  JsonObjectSerializer$JsonObjectDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_p32uvu$_0.getElementAnnotations_za3lpa$(index);
  };
  JsonObjectSerializer$JsonObjectDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_p32uvu$_0.getElementDescriptor_za3lpa$(index);
  };
  JsonObjectSerializer$JsonObjectDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_p32uvu$_0.getElementIndex_61zpoe$(name);
  };
  JsonObjectSerializer$JsonObjectDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_p32uvu$_0.getElementName_za3lpa$(index);
  };
  JsonObjectSerializer$JsonObjectDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_p32uvu$_0.isElementOptional_za3lpa$(index);
  };
  JsonObjectSerializer$JsonObjectDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonObjectDescriptor',
    interfaces: [SerialDescriptor]
  };
  var JsonObjectSerializer$JsonObjectDescriptor_instance = null;
  function JsonObjectSerializer$JsonObjectDescriptor_getInstance() {
    if (JsonObjectSerializer$JsonObjectDescriptor_instance === null) {
      new JsonObjectSerializer$JsonObjectDescriptor();
    }return JsonObjectSerializer$JsonObjectDescriptor_instance;
  }
  Object.defineProperty(JsonObjectSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_a992tj$_0;
    }
  });
  JsonObjectSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(kotlin_js_internal_StringCompanionObject), JsonElementSerializer_getInstance()).serialize_55azsf$(encoder, value);
  };
  JsonObjectSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(kotlin_js_internal_StringCompanionObject), JsonElementSerializer_getInstance()).deserialize_bq71mq$(decoder));
  };
  JsonObjectSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonObjectSerializer',
    interfaces: [KSerializer]
  };
  var JsonObjectSerializer_instance = null;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance === null) {
      new JsonObjectSerializer();
    }return JsonObjectSerializer_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_935ivj$_0 = JsonArraySerializer$JsonArrayDescriptor_getInstance();
  }
  function JsonArraySerializer$JsonArrayDescriptor() {
    JsonArraySerializer$JsonArrayDescriptor_instance = this;
    var tmp$;
    this.$delegate_az4ckk$_0 = (Kotlin.isType(tmp$ = serializer_0(createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(JsonElement), [], false))], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    this.serialName_bqe1pt$_0 = 'kotlinx.serialization.json.JsonArray';
  }
  Object.defineProperty(JsonArraySerializer$JsonArrayDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_bqe1pt$_0;
    }
  });
  Object.defineProperty(JsonArraySerializer$JsonArrayDescriptor.prototype, 'annotations', {
    get: function () {
      return this.$delegate_az4ckk$_0.annotations;
    }
  });
  Object.defineProperty(JsonArraySerializer$JsonArrayDescriptor.prototype, 'elementsCount', {
    get: function () {
      return this.$delegate_az4ckk$_0.elementsCount;
    }
  });
  Object.defineProperty(JsonArraySerializer$JsonArrayDescriptor.prototype, 'isNullable', {
    get: function () {
      return this.$delegate_az4ckk$_0.isNullable;
    }
  });
  Object.defineProperty(JsonArraySerializer$JsonArrayDescriptor.prototype, 'kind', {
    get: function () {
      return this.$delegate_az4ckk$_0.kind;
    }
  });
  JsonArraySerializer$JsonArrayDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.$delegate_az4ckk$_0.getElementAnnotations_za3lpa$(index);
  };
  JsonArraySerializer$JsonArrayDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.$delegate_az4ckk$_0.getElementDescriptor_za3lpa$(index);
  };
  JsonArraySerializer$JsonArrayDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.$delegate_az4ckk$_0.getElementIndex_61zpoe$(name);
  };
  JsonArraySerializer$JsonArrayDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.$delegate_az4ckk$_0.getElementName_za3lpa$(index);
  };
  JsonArraySerializer$JsonArrayDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.$delegate_az4ckk$_0.isElementOptional_za3lpa$(index);
  };
  JsonArraySerializer$JsonArrayDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonArrayDescriptor',
    interfaces: [SerialDescriptor]
  };
  var JsonArraySerializer$JsonArrayDescriptor_instance = null;
  function JsonArraySerializer$JsonArrayDescriptor_getInstance() {
    if (JsonArraySerializer$JsonArrayDescriptor_instance === null) {
      new JsonArraySerializer$JsonArrayDescriptor();
    }return JsonArraySerializer$JsonArrayDescriptor_instance;
  }
  Object.defineProperty(JsonArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_935ivj$_0;
    }
  });
  JsonArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_55azsf$(encoder, value);
  };
  JsonArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_bq71mq$(decoder));
  };
  JsonArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonArraySerializer',
    interfaces: [KSerializer]
  };
  var JsonArraySerializer_instance = null;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance === null) {
      new JsonArraySerializer();
    }return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonDecoder($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonDecoder) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + Kotlin.getKClassFromExpression($receiver)));
    }return tmp$_0;
  }
  function asJsonEncoder($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonEncoder) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + Kotlin.getKClassFromExpression($receiver)));
    }return tmp$_0;
  }
  function defer$ObjectLiteral(closure$deferred) {
    this.original_yfx7kf$_0 = lazy(closure$deferred);
  }
  Object.defineProperty(defer$ObjectLiteral.prototype, 'original_0', {
    configurable: true,
    get: function () {
      return this.original_yfx7kf$_0.value;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.original_0.serialName;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.original_0.kind;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.original_0.elementsCount;
    }
  });
  defer$ObjectLiteral.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  defer$ObjectLiteral.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  defer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerialDescriptor]
  };
  function defer(deferred) {
    return new defer$ObjectLiteral(deferred);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  var message;
  function noImpl() {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  }
  function get_plain($receiver) {
    return noImpl();
  }
  function get_unquoted($receiver) {
    return noImpl();
  }
  function get_indented($receiver) {
    return noImpl();
  }
  function get_nonstrict($receiver) {
    return noImpl();
  }
  function toJson($receiver, serializer, value) {
    return noImpl();
  }
  function toJson_0($receiver, value) {
    return noImpl();
  }
  function parseJson($receiver, string) {
    return noImpl();
  }
  function fromJson($receiver, deserializer, json) {
    return noImpl();
  }
  function fromJson_0($receiver, tree) {
    return noImpl();
  }
  function JsonInput() {
  }
  JsonInput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonInput',
    interfaces: []
  };
  function decodeJson($receiver) {
    return $receiver.decodeJsonElement();
  }
  function JsonOutput() {
  }
  JsonOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonOutput',
    interfaces: []
  };
  function encodeJson($receiver, element) {
    $receiver.encodeJsonElement_qiw0cd$(element);
  }
  function get_isNull($receiver) {
    return noImpl();
  }
  function getPrimitive($receiver, index) {
    return noImpl();
  }
  function getObject($receiver, index) {
    return noImpl();
  }
  function getArray($receiver, index) {
    return noImpl();
  }
  function getPrimitiveOrNull($receiver, index) {
    return noImpl();
  }
  function getObjectOrNull($receiver, index) {
    return noImpl();
  }
  function getArrayOrNull($receiver, index) {
    return noImpl();
  }
  function getAs($receiver, index) {
    return noImpl();
  }
  function getAsOrNull($receiver, index) {
    return noImpl();
  }
  function getPrimitive_0($receiver, key) {
    return noImpl();
  }
  function getObject_0($receiver, key) {
    return noImpl();
  }
  function getArray_0($receiver, key) {
    return noImpl();
  }
  function getPrimitiveOrNull_0($receiver, key) {
    return noImpl();
  }
  function getObjectOrNull_0($receiver, key) {
    return noImpl();
  }
  function getArrayOrNull_0($receiver, key) {
    return noImpl();
  }
  function getAs_0($receiver, key) {
    return noImpl();
  }
  function getAsOrNull_0($receiver, key) {
    return noImpl();
  }
  function get_primitive($receiver) {
    return noImpl();
  }
  function contains($receiver, key) {
    return noImpl();
  }
  function get_int_0($receiver) {
    return noImpl();
  }
  function get_intOrNull_0($receiver) {
    return noImpl();
  }
  function get_long_0($receiver) {
    return noImpl();
  }
  function get_longOrNull_0($receiver) {
    return noImpl();
  }
  function get_double_0($receiver) {
    return noImpl();
  }
  function get_doubleOrNull_0($receiver) {
    return noImpl();
  }
  function get_float_0($receiver) {
    return noImpl();
  }
  function get_floatOrNull_0($receiver) {
    return noImpl();
  }
  function get_boolean_0($receiver) {
    return noImpl();
  }
  function get_booleanOrNull_0($receiver) {
    return noImpl();
  }
  function get_content($receiver) {
    return noImpl();
  }
  function get_contentOrNull_0($receiver) {
    return noImpl();
  }
  function JsonLiteral_0(value) {
    return noImpl();
  }
  function json(init) {
    return noImpl();
  }
  function jsonArray(init) {
    var builder = new JsonArrayBuilder();
    init(builder);
    return builder.build();
  }
  function JsonTransformingSerializer(tSerializer) {
    this.tSerializer_nuzucf$_0 = tSerializer;
  }
  Object.defineProperty(JsonTransformingSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.tSerializer_nuzucf$_0.descriptor;
    }
  });
  JsonTransformingSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.json, value, this.tSerializer_nuzucf$_0);
    element = this.transformSerialize_qiw0cd$(element);
    output.encodeJsonElement_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.decodeJsonElement();
    return input.json.decodeFromJsonElement_htt2tq$(this.tSerializer_nuzucf$_0, this.transformDeserialize_qiw0cd$(element));
  };
  JsonTransformingSerializer.prototype.readTransform_qiw0cd$ = function (element) {
    return this.transformDeserialize_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.transformDeserialize_qiw0cd$ = function (element) {
    return element;
  };
  JsonTransformingSerializer.prototype.writeTransform_qiw0cd$ = function (element) {
    return this.transformSerialize_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.transformSerialize_qiw0cd$ = function (element) {
    return element;
  };
  JsonTransformingSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTransformingSerializer',
    interfaces: [KSerializer]
  };
  function JsonTransformingSerializer_init(tSerializer, transformationName, $this) {
    $this = $this || Object.create(JsonTransformingSerializer.prototype);
    JsonTransformingSerializer.call($this, tSerializer);
    return $this;
  }
  function JsonConf(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    if (encodeDefaults === void 0)
      encodeDefaults = false;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (prettyPrintIndent === void 0)
      prettyPrintIndent = '    ';
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = 'type';
    if (allowSpecialFloatingPointValues === void 0)
      allowSpecialFloatingPointValues = false;
    if (serializersModule === void 0)
      serializersModule = modules.EmptySerializersModule;
    this.encodeDefaults = encodeDefaults;
    this.ignoreUnknownKeys = ignoreUnknownKeys;
    this.isLenient = isLenient;
    this.allowStructuredMapKeys = allowStructuredMapKeys;
    this.prettyPrint = prettyPrint;
    this.prettyPrintIndent = prettyPrintIndent;
    this.coerceInputValues = coerceInputValues;
    this.useArrayPolymorphism = useArrayPolymorphism;
    this.classDiscriminator = classDiscriminator;
    this.allowSpecialFloatingPointValues = allowSpecialFloatingPointValues;
    this.serializersModule = serializersModule;
  }
  JsonConf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonConf',
    interfaces: []
  };
  JsonConf.prototype.component1 = function () {
    return this.encodeDefaults;
  };
  JsonConf.prototype.component2 = function () {
    return this.ignoreUnknownKeys;
  };
  JsonConf.prototype.component3 = function () {
    return this.isLenient;
  };
  JsonConf.prototype.component4 = function () {
    return this.allowStructuredMapKeys;
  };
  JsonConf.prototype.component5 = function () {
    return this.prettyPrint;
  };
  JsonConf.prototype.component6 = function () {
    return this.prettyPrintIndent;
  };
  JsonConf.prototype.component7 = function () {
    return this.coerceInputValues;
  };
  JsonConf.prototype.component8 = function () {
    return this.useArrayPolymorphism;
  };
  JsonConf.prototype.component9 = function () {
    return this.classDiscriminator;
  };
  JsonConf.prototype.component10 = function () {
    return this.allowSpecialFloatingPointValues;
  };
  JsonConf.prototype.component11 = function () {
    return this.serializersModule;
  };
  JsonConf.prototype.copy_2joh8z$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    return new JsonConf(encodeDefaults === void 0 ? this.encodeDefaults : encodeDefaults, ignoreUnknownKeys === void 0 ? this.ignoreUnknownKeys : ignoreUnknownKeys, isLenient === void 0 ? this.isLenient : isLenient, allowStructuredMapKeys === void 0 ? this.allowStructuredMapKeys : allowStructuredMapKeys, prettyPrint === void 0 ? this.prettyPrint : prettyPrint, prettyPrintIndent === void 0 ? this.prettyPrintIndent : prettyPrintIndent, coerceInputValues === void 0 ? this.coerceInputValues : coerceInputValues, useArrayPolymorphism === void 0 ? this.useArrayPolymorphism : useArrayPolymorphism, classDiscriminator === void 0 ? this.classDiscriminator : classDiscriminator, allowSpecialFloatingPointValues === void 0 ? this.allowSpecialFloatingPointValues : allowSpecialFloatingPointValues, serializersModule === void 0 ? this.serializersModule : serializersModule);
  };
  JsonConf.prototype.toString = function () {
    return 'JsonConf(encodeDefaults=' + Kotlin.toString(this.encodeDefaults) + (', ignoreUnknownKeys=' + Kotlin.toString(this.ignoreUnknownKeys)) + (', isLenient=' + Kotlin.toString(this.isLenient)) + (', allowStructuredMapKeys=' + Kotlin.toString(this.allowStructuredMapKeys)) + (', prettyPrint=' + Kotlin.toString(this.prettyPrint)) + (', prettyPrintIndent=' + Kotlin.toString(this.prettyPrintIndent)) + (', coerceInputValues=' + Kotlin.toString(this.coerceInputValues)) + (', useArrayPolymorphism=' + Kotlin.toString(this.useArrayPolymorphism)) + (', classDiscriminator=' + Kotlin.toString(this.classDiscriminator)) + (', allowSpecialFloatingPointValues=' + Kotlin.toString(this.allowSpecialFloatingPointValues)) + (', serializersModule=' + Kotlin.toString(this.serializersModule)) + ')';
  };
  JsonConf.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encodeDefaults) | 0;
    result = result * 31 + Kotlin.hashCode(this.ignoreUnknownKeys) | 0;
    result = result * 31 + Kotlin.hashCode(this.isLenient) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowStructuredMapKeys) | 0;
    result = result * 31 + Kotlin.hashCode(this.prettyPrint) | 0;
    result = result * 31 + Kotlin.hashCode(this.prettyPrintIndent) | 0;
    result = result * 31 + Kotlin.hashCode(this.coerceInputValues) | 0;
    result = result * 31 + Kotlin.hashCode(this.useArrayPolymorphism) | 0;
    result = result * 31 + Kotlin.hashCode(this.classDiscriminator) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowSpecialFloatingPointValues) | 0;
    result = result * 31 + Kotlin.hashCode(this.serializersModule) | 0;
    return result;
  };
  JsonConf.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.encodeDefaults, other.encodeDefaults) && Kotlin.equals(this.ignoreUnknownKeys, other.ignoreUnknownKeys) && Kotlin.equals(this.isLenient, other.isLenient) && Kotlin.equals(this.allowStructuredMapKeys, other.allowStructuredMapKeys) && Kotlin.equals(this.prettyPrint, other.prettyPrint) && Kotlin.equals(this.prettyPrintIndent, other.prettyPrintIndent) && Kotlin.equals(this.coerceInputValues, other.coerceInputValues) && Kotlin.equals(this.useArrayPolymorphism, other.useArrayPolymorphism) && Kotlin.equals(this.classDiscriminator, other.classDiscriminator) && Kotlin.equals(this.allowSpecialFloatingPointValues, other.allowSpecialFloatingPointValues) && Kotlin.equals(this.serializersModule, other.serializersModule)))));
  };
  function JsonException(message) {
    SerializationException_init(message, this);
    this.name = 'JsonException';
  }
  JsonException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonException',
    interfaces: [SerializationException]
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    this.name = 'JsonDecodingException';
  }
  JsonDecodingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonDecodingException',
    interfaces: [JsonException]
  };
  function JsonDecodingException_0(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    this.name = 'JsonEncodingException';
  }
  JsonEncodingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonEncodingException',
    interfaces: [JsonException]
  };
  function JsonDecodingException_1(offset, message, input) {
    return JsonDecodingException_0(offset, message + '\n' + 'JSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + value.toString() + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + minify(output)));
  }
  function InvalidFloatingPointEncoded_0(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_0(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function throwInvalidFloatingPointDecoded($receiver, result) {
    $receiver.fail_bm4lxs$('Unexpected special floating-point value ' + result.toString() + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + specialFlowingValuesHint);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + value.toString() + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + minify(output));
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_0(-1, "Encountered unknown key '" + key + "'." + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + minify(input)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.serialName + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.kind + "'." + '\n') + allowStructuredMapKeysHint);
  }
  function minify($receiver, offset) {
    if (offset === void 0)
      offset = -1;
    if ($receiver.length < 200)
      return $receiver;
    if (offset === -1) {
      var start = $receiver.length - 60 | 0;
      if (start <= 0)
        return $receiver;
      return '.....' + $receiver.substring(start);
    }var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= $receiver.length ? '' : '.....';
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex = coerceAtMost(end, $receiver.length);
    return prefix + $receiver.substring(startIndex, endIndex) + suffix;
  }
  function JsonParser(configuration, reader) {
    this.reader_0 = reader;
    this.isLenient_0 = configuration.isLenient;
  }
  JsonParser.prototype.readObject_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_OBJ) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the object', $this.tokenPosition_0);
    }this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }var result = LinkedHashMap_init();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var key = this.isLenient_0 ? this.reader_0.takeString() : this.reader_0.takeStringQuoted();
      var $this_1 = this.reader_0;
      if ($this_1.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_1.tokenClass));
        $this_1.fail_bm4lxs$("Expected ':'", $this_1.tokenPosition_0);
      }this.reader_0.nextToken();
      var element = this.read();
      result.put_xwzc9p$(key, element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_2 = this.reader_0;
        if ($this_2.tokenClass !== TC_END_OBJ) {
          toBoxedChar(toChar($this_2.tokenClass));
          $this_2.fail_bm4lxs$('Expected end of the object or comma', $this_2.tokenPosition_0);
        }} else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_3 = this.reader_0;
    var condition_0 = !valueExpected && this.reader_0.tokenClass === TC_END_OBJ;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_3.fail_bm4lxs$('Expected end of the object', position_0);
    }this.reader_0.nextToken();
    return new JsonObject(result);
  };
  JsonParser.prototype.readArray_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_LIST) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the array', $this.tokenPosition_0);
    }this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }var result = ArrayList_init();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var element = this.read();
      result.add_11rb$(element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_1 = this.reader_0;
        if ($this_1.tokenClass !== TC_END_LIST) {
          toBoxedChar(toChar($this_1.tokenClass));
          $this_1.fail_bm4lxs$('Expected end of the array or comma', $this_1.tokenPosition_0);
        }} else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_2 = this.reader_0;
    var condition_0 = !valueExpected;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_2.fail_bm4lxs$('Unexpected trailing comma', position_0);
    }this.reader_0.nextToken();
    return new JsonArray(result);
  };
  JsonParser.prototype.readValue_0 = function (isString) {
    var tmp$;
    if (this.isLenient_0) {
      tmp$ = this.reader_0.takeString();
    } else {
      tmp$ = isString ? this.reader_0.takeStringQuoted() : this.reader_0.takeString();
    }
    var str = tmp$;
    return new JsonLiteral(str, isString);
  };
  JsonParser.prototype.read = function () {
    var tmp$;
    if (!this.reader_0.canBeginValue)
      this.reader_0.fail_bm4lxs$("Can't begin reading value from here");
    switch (this.reader_0.tokenClass) {
      case 10:
        var $receiver = JsonNull_getInstance();
        this.reader_0.nextToken();
        tmp$ = $receiver;
        break;
      case 1:
        tmp$ = this.readValue_0(true);
        break;
      case 0:
        tmp$ = this.readValue_0(false);
        break;
      case 6:
        tmp$ = this.readObject_0();
        break;
      case 8:
        tmp$ = this.readArray_0();
        break;
      default:tmp$ = this.reader_0.fail_bm4lxs$("Can't begin reading element, unexpected token");
        break;
    }
    return tmp$;
  };
  JsonParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonParser',
    interfaces: []
  };
  var lenientHint;
  var coerceInputValuesHint;
  var specialFlowingValuesHint;
  var ignoreUnknownKeysHint;
  var allowStructuredMapKeysHint;
  var NULL;
  var COMMA;
  var COLON;
  var BEGIN_OBJ;
  var END_OBJ;
  var BEGIN_LIST;
  var END_LIST;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var TC_OTHER;
  var TC_STRING;
  var TC_STRING_ESC;
  var TC_WS;
  var TC_COMMA;
  var TC_COLON;
  var TC_BEGIN_OBJ;
  var TC_END_OBJ;
  var TC_BEGIN_LIST;
  var TC_END_LIST;
  var TC_NULL;
  var TC_INVALID;
  var TC_EOF;
  var CTC_MAX;
  var ESC2C_MAX;
  var C2TC;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR = Kotlin.charArray(117);
    for (var i = 0; i <= 31; i++) {
      this.initC2ESC_0(i, UNICODE_ESC);
    }
    this.initC2ESC_0(8, 98);
    this.initC2ESC_0(9, 116);
    this.initC2ESC_0(10, 110);
    this.initC2ESC_0(12, 102);
    this.initC2ESC_0(13, 114);
    this.initC2ESC_1(47, 47);
    this.initC2ESC_1(STRING, STRING);
    this.initC2ESC_1(STRING_ESC, STRING_ESC);
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function (c, esc) {
    if (esc !== UNICODE_ESC)
      this.ESCAPE_2_CHAR[esc | 0] = toChar(c);
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function (c, esc) {
    this.initC2ESC_0(c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EscapeCharMappings',
    interfaces: []
  };
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }return EscapeCharMappings_instance;
  }
  function initC2TC($receiver, c, cl) {
    $receiver[c] = cl;
  }
  function initC2TC_0($receiver, c, cl) {
    initC2TC($receiver, c | 0, cl);
  }
  function charToTokenClass(c) {
    return (c | 0) < 126 ? C2TC[c | 0] : TC_OTHER;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR[c] : INVALID);
  }
  function JsonReader(source) {
    this.source_0 = source;
    this.currentPosition = 0;
    this.tokenClass = TC_EOF;
    this.tokenPosition_0 = 0;
    this.offset_0 = -1;
    this.length_0 = 0;
    this.buf_0 = Kotlin.charArray(16);
    this.nextToken();
  }
  Object.defineProperty(JsonReader.prototype, 'isDone', {
    configurable: true,
    get: function () {
      return this.tokenClass === TC_EOF;
    }
  });
  Object.defineProperty(JsonReader.prototype, 'canBeginValue', {
    configurable: true,
    get: function () {
      switch (this.tokenClass) {
        case 8:
        case 6:
        case 0:
        case 1:
        case 10:
          return true;
        default:return false;
      }
    }
  });
  JsonReader.prototype.requireTokenClass_mvfnf3$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.internal.JsonReader.requireTokenClass_mvfnf3$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function (expected, errorMessage) {
      if (this.tokenClass !== expected)
        this.fail_bm4lxs$(errorMessage(toBoxedChar(toChar(this.tokenClass))), this.tokenPosition_0);
    };
  }));
  JsonReader.prototype.takeString = function () {
    if (this.tokenClass !== TC_OTHER && this.tokenClass !== TC_STRING)
      this.fail_bm4lxs$('Expected string or non-null literal', this.tokenPosition_0);
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.peekString_6taknv$ = function (isLenient) {
    return this.tokenClass !== TC_STRING && (!isLenient || this.tokenClass !== TC_OTHER) ? null : this.takeStringInternal_0(false);
  };
  JsonReader.prototype.takeStringQuoted = function () {
    switch (this.tokenClass) {
      case 1:
        break;
      case 10:
        this.fail_bm4lxs$("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", this.tokenPosition_0);
        break;
      default:this.fail_bm4lxs$("Expected string literal with quotes.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_0);
        break;
    }
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.takeBooleanStringUnquoted = function () {
    if (this.tokenClass !== TC_OTHER)
      this.fail_bm4lxs$("Expected start of the unquoted boolean literal.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_0);
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.takeStringInternal_0 = function (advance) {
    if (advance === void 0)
      advance = true;
    var tmp$;
    if (this.offset_0 < 0)
      tmp$ = concatToString(this.buf_0, 0, 0 + this.length_0 | 0);
    else {
      var $receiver = this.source_0;
      var startIndex = this.offset_0;
      var endIndex = this.offset_0 + this.length_0 | 0;
      tmp$ = $receiver.substring(startIndex, endIndex);
    }
    var prevStr = tmp$;
    if (advance)
      this.nextToken();
    return prevStr;
  };
  JsonReader.prototype.append_0 = function (ch) {
    var tmp$;
    if (this.length_0 >= this.buf_0.length)
      this.buf_0 = copyOf(this.buf_0, 2 * this.buf_0.length | 0);
    this.buf_0[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = ch;
  };
  JsonReader.prototype.appendRange_0 = function (source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = this.length_0;
    var newLen = oldLen + addLen | 0;
    if (newLen > this.buf_0.length)
      this.buf_0 = copyOf(this.buf_0, coerceAtLeast(newLen, 2 * this.buf_0.length | 0));
    for (var i = 0; i < addLen; i++)
      this.buf_0[oldLen + i | 0] = source.charCodeAt(fromIndex + i | 0);
    this.length_0 = this.length_0 + addLen | 0;
  };
  JsonReader.prototype.nextToken = function () {
    var source = this.source_0;
    var currentPosition = this.currentPosition;
    while (currentPosition < source.length) {
      var ch = source.charCodeAt(currentPosition);
      var tc = charToTokenClass(ch);
      switch (tc) {
        case 3:
          currentPosition = currentPosition + 1 | 0;
          break;
        case 0:
          this.nextLiteral_0(source, currentPosition);
          return;
        case 1:
          this.nextString_0(source, currentPosition);
          return;
        default:this.tokenPosition_0 = currentPosition;
          this.tokenClass = tc;
          this.currentPosition = currentPosition + 1 | 0;
          return;
      }
    }
    this.tokenPosition_0 = currentPosition;
    this.tokenClass = TC_EOF;
  };
  JsonReader.prototype.nextLiteral_0 = function (source, startPos) {
    this.tokenPosition_0 = startPos;
    this.offset_0 = startPos;
    var currentPosition = startPos;
    while (currentPosition < source.length && charToTokenClass(source.charCodeAt(currentPosition)) === TC_OTHER) {
      currentPosition = currentPosition + 1 | 0;
    }
    this.currentPosition = currentPosition;
    this.length_0 = currentPosition - this.offset_0 | 0;
    this.tokenClass = rangeEquals(source, this.offset_0, this.length_0, NULL) ? TC_NULL : TC_OTHER;
  };
  JsonReader.prototype.nextString_0 = function (source, startPosition) {
    this.tokenPosition_0 = startPosition;
    this.length_0 = 0;
    var currentPosition = startPosition + 1 | 0;
    if (currentPosition >= source.length) {
      this.fail_bm4lxs$('EOF', currentPosition);
    }var lastPosition = currentPosition;
    while (source.charCodeAt(currentPosition) !== STRING) {
      if (source.charCodeAt(currentPosition) === STRING_ESC) {
        this.appendRange_0(source, lastPosition, currentPosition);
        var newPosition = this.appendEsc_0(source, currentPosition + 1 | 0);
        currentPosition = newPosition;
        lastPosition = newPosition;
      } else if ((currentPosition = currentPosition + 1 | 0, currentPosition) >= source.length) {
        this.fail_bm4lxs$('EOF', currentPosition);
      }}
    if (lastPosition === (startPosition + 1 | 0)) {
      this.offset_0 = lastPosition;
      this.length_0 = currentPosition - lastPosition | 0;
    } else {
      this.appendRange_0(source, lastPosition, currentPosition);
      this.offset_0 = -1;
    }
    this.currentPosition = currentPosition + 1 | 0;
    this.tokenClass = TC_STRING;
  };
  JsonReader.prototype.appendEsc_0 = function (source, startPosition) {
    var tmp$;
    var currentPosition = startPosition;
    var condition = currentPosition < source.length;
    var position = currentPosition;
    if (!condition) {
      this.fail_bm4lxs$('Unexpected EOF after escape character', position);
    }var currentChar = source.charCodeAt((tmp$ = currentPosition, currentPosition = tmp$ + 1 | 0, tmp$));
    if (currentChar === UNICODE_ESC) {
      return this.appendHex_0(source, currentPosition);
    }var c = escapeToChar(currentChar | 0);
    var condition_0 = c !== INVALID;
    var position_0 = currentPosition;
    if (!condition_0) {
      this.fail_bm4lxs$("Invalid escaped char '" + String.fromCharCode(currentChar) + "'", position_0);
    }this.append_0(c);
    return currentPosition;
  };
  JsonReader.prototype.appendHex_0 = function (source, startPos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curPos = startPos;
    this.append_0(toChar((this.fromHexChar_0(source, (tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$)) << 12) + (this.fromHexChar_0(source, (tmp$_0 = curPos, curPos = tmp$_0 + 1 | 0, tmp$_0)) << 8) + (this.fromHexChar_0(source, (tmp$_1 = curPos, curPos = tmp$_1 + 1 | 0, tmp$_1)) << 4) + this.fromHexChar_0(source, (tmp$_2 = curPos, curPos = tmp$_2 + 1 | 0, tmp$_2)) | 0));
    return curPos;
  };
  JsonReader.prototype.skipElement = function () {
    if (this.tokenClass !== TC_BEGIN_OBJ && this.tokenClass !== TC_BEGIN_LIST) {
      this.nextToken();
      return;
    }var tokenStack = ArrayList_init();
    do {
      switch (this.tokenClass) {
        case 8:
        case 6:
          tokenStack.add_11rb$(this.tokenClass);
          break;
        case 9:
          if (last(tokenStack) !== TC_BEGIN_LIST)
            throw JsonDecodingException_1(this.currentPosition, 'found ] instead of }', this.source_0);
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
        case 7:
          if (last(tokenStack) !== TC_BEGIN_OBJ)
            throw JsonDecodingException_1(this.currentPosition, 'found } instead of ]', this.source_0);
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  JsonReader.prototype.toString = function () {
    return "JsonReader(source='" + this.source_0 + "', currentPosition=" + this.currentPosition + ', tokenClass=' + this.tokenClass + ', tokenPosition=' + this.tokenPosition_0 + ', offset=' + this.offset_0 + ')';
  };
  JsonReader.prototype.fail_bm4lxs$ = function (message, position) {
    if (position === void 0)
      position = this.currentPosition;
    throw JsonDecodingException_1(position, message, this.source_0);
  };
  JsonReader.prototype.require_wqn2ds$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.internal.JsonReader.require_wqn2ds$', function (condition, position, message) {
    if (position === void 0)
      position = this.currentPosition;
    if (!condition)
      this.fail_bm4lxs$(message(), position);
  });
  JsonReader.prototype.fromHexChar_0 = function (source, currentPosition) {
    var tmp$;
    if (!(currentPosition < source.length)) {
      this.fail_bm4lxs$('Unexpected EOF during unicode escape', currentPosition);
    }var curChar = source.charCodeAt(currentPosition);
    if ((new CharRange(48, 57)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 48 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 65 + 10 | 0;
    else
      tmp$ = this.fail_bm4lxs$("Invalid toHexChar char '" + String.fromCharCode(curChar) + "' in unicode escape");
    return tmp$;
  };
  JsonReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonReader',
    interfaces: []
  };
  function rangeEquals(source, start, length, str) {
    var n = str.length;
    if (length !== n)
      return false;
    for (var i = 0; i < n; i++)
      if (source.charCodeAt(start + i | 0) !== str.charCodeAt(i))
        return false;
    return true;
  }
  var encodePolymorphically = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.internal.encodePolymorphically_51w9c5$', wrapFunction(function () {
    var AbstractPolymorphicSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.internal.AbstractPolymorphicSerializer;
    var SerializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Any = Object;
    return function ($receiver, serializer, value, ifPolymorphic) {
      var tmp$, tmp$_0;
      if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || $receiver.json.configuration_8be2vx$.useArrayPolymorphism) {
        serializer.serialize_55azsf$($receiver, value);
        return;
      }var actualSerializer = findActualSerializer($receiver, Kotlin.isType(tmp$ = serializer, SerializationStrategy) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
      ifPolymorphic();
      actualSerializer.serialize_55azsf$($receiver, value);
    };
  }));
  function findActualSerializer($receiver, serializer, value) {
    var tmp$, tmp$_0;
    var casted = Kotlin.isType(tmp$ = serializer, AbstractPolymorphicSerializer) ? tmp$ : throwCCE();
    var actualSerializer = findPolymorphicSerializer(casted, $receiver, Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
    validateIfSealed(casted, actualSerializer, $receiver.json.configuration_8be2vx$.classDiscriminator);
    var kind = actualSerializer.descriptor.kind;
    checkKind(kind);
    return actualSerializer;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!Kotlin.isType(serializer, SealedClassSerializer))
      return;
    if (jsonCachedSerialNames(actualSerializer.descriptor).contains_11rb$(classDiscriminator)) {
      var baseName = serializer.descriptor.serialName;
      var actualName = actualSerializer.descriptor.serialName;
      throw IllegalStateException_init(("Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism').toString());
    }}
  function checkKind(kind) {
    if (Kotlin.isType(kind, Object.getPrototypeOf(SerialKind.ENUM).constructor)) {
      throw IllegalStateException_init("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead".toString());
    }if (Kotlin.isType(kind, PrimitiveKind)) {
      throw IllegalStateException_init("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead".toString());
    }if (Kotlin.isType(kind, PolymorphicKind)) {
      throw IllegalStateException_init('Actual serializer for polymorphic cannot be polymorphic itself'.toString());
    }}
  function decodeSerializableValuePolymorphic($receiver, deserializer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!Kotlin.isType(deserializer, AbstractPolymorphicSerializer) || $receiver.json.configuration_8be2vx$.useArrayPolymorphism) {
      return deserializer.deserialize_bq71mq$($receiver);
    }var value = $receiver.decodeJsonElement();
    var descriptor = deserializer.descriptor;
    if (!Kotlin.isType(value, JsonObject)) {
      throw JsonDecodingException_0(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(value));
    }var jsonTree = value;
    var discriminator = $receiver.json.configuration_8be2vx$.classDiscriminator;
    var type = (tmp$_0 = (tmp$ = jsonTree.get_11rb$(discriminator)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null;
    var actualSerializer = (tmp$_1 = deserializer.findPolymorphicSerializerOrNull_ca6uye$($receiver, type)) != null ? tmp$_1 : throwSerializerNotFound(type, jsonTree);
    return readPolymorphicJson($receiver.json, discriminator, jsonTree, Kotlin.isType(tmp$_2 = actualSerializer, DeserializationStrategy) ? tmp$_2 : throwCCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + toString(type) + "'";
    throw JsonDecodingException_1(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.useArrayPolymorphism_0 = useArrayPolymorphism;
    this.discriminator_0 = discriminator;
  }
  PolymorphismValidator.prototype.contextual_cfhkba$ = function (kClass, serializer) {
  };
  PolymorphismValidator.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.descriptor;
    this.checkKind_0(descriptor, actualClass);
    if (!this.useArrayPolymorphism_0) {
      this.checkDiscriminatorCollisions_0(descriptor, actualClass);
    }};
  PolymorphismValidator.prototype.checkKind_0 = function (descriptor, actualClass) {
    var kind = descriptor.kind;
    if (Kotlin.isType(kind, PolymorphicKind) || equals(kind, SerialKind.CONTEXTUAL)) {
      throw IllegalArgumentException_init('Serializer for ' + toString(actualClass.simpleName) + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }if (this.useArrayPolymorphism_0)
      return;
    if (equals(kind, StructureKind.LIST) || equals(kind, StructureKind.MAP) || Kotlin.isType(kind, PrimitiveKind) || Kotlin.isType(kind, Object.getPrototypeOf(SerialKind.ENUM).constructor)) {
      throw IllegalArgumentException_init('Serializer for ' + toString(actualClass.simpleName) + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }};
  PolymorphismValidator.prototype.checkDiscriminatorCollisions_0 = function (descriptor, actualClass) {
    var tmp$;
    tmp$ = descriptor.elementsCount;
    for (var i = 0; i < tmp$; i++) {
      var name = descriptor.getElementName_za3lpa$(i);
      if (equals(name, this.discriminator_0)) {
        throw IllegalArgumentException_init('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }}
  };
  PolymorphismValidator.prototype.polymorphicDefault_yd5wsm$ = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphismValidator',
    interfaces: [SerializersModuleCollector]
  };
  function StreamingJsonDecoder(json, mode, reader) {
    AbstractDecoder.call(this);
    this.json_n7tmf6$_0 = json;
    this.mode_0 = mode;
    this.reader_8be2vx$ = reader;
    this.serializersModule_5carun$_0 = this.json.serializersModule;
    this.currentIndex_0 = -1;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(StreamingJsonDecoder.prototype, 'json', {
    get: function () {
      return this.json_n7tmf6$_0;
    }
  });
  Object.defineProperty(StreamingJsonDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_5carun$_0;
    }
  });
  Object.defineProperty(StreamingJsonDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode.OVERWRITE;
    }
  });
  StreamingJsonDecoder.prototype.decodeJsonElement = function () {
    return (new JsonParser(this.json.configuration_8be2vx$, this.reader_8be2vx$)).read();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$;
    var newMode = switchMode(this.json, descriptor);
    if (unboxChar(newMode.begin) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== newMode.beginTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(newMode.begin)) + ', kind: ' + descriptor.kind + "'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }switch (newMode.name) {
      case 'LIST':
      case 'MAP':
      case 'POLY_OBJ':
        tmp$ = new StreamingJsonDecoder(this.json, newMode, this.reader_8be2vx$);
        break;
      default:tmp$ = this.mode_0 === newMode ? this : new StreamingJsonDecoder(this.json, newMode, this.reader_8be2vx$);
        break;
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== this.mode_0.endTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(this.mode_0.end)) + "'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }};
  StreamingJsonDecoder.prototype.decodeNotNullMark = function () {
    return this.reader_8be2vx$.tokenClass !== TC_NULL;
  };
  StreamingJsonDecoder.prototype.decodeNull = function () {
    var $this = this.reader_8be2vx$;
    if ($this.tokenClass !== TC_NULL) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$("Expected 'null' literal", $this.tokenPosition_0);
    }this.reader_8be2vx$.nextToken();
    return null;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    var tokenClass = this.reader_8be2vx$.tokenClass;
    if (tokenClass === TC_COMMA) {
      var $this = this.reader_8be2vx$;
      var condition = this.currentIndex_0 !== -1;
      var position = this.reader_8be2vx$.currentPosition;
      if (!condition) {
        $this.fail_bm4lxs$('Unexpected leading comma', position);
      }this.reader_8be2vx$.nextToken();
    }switch (this.mode_0.name) {
      case 'LIST':
        tmp$ = this.decodeListIndex_0(tokenClass);
        break;
      case 'MAP':
        tmp$ = this.decodeMapIndex_0(tokenClass);
        break;
      case 'POLY_OBJ':
        switch (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0) {
          case 0:
            tmp$ = 0;
            break;
          case 1:
            tmp$ = 1;
            break;
          default:tmp$ = -1;
            break;
        }

        break;
      default:tmp$ = this.decodeObjectIndex_0(tokenClass, descriptor);
        break;
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeMapIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 % 2 === 1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_OBJ) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the object or comma', $this.tokenPosition_0);
      }}if (this.currentIndex_0 % 2 === 0) {
      var $this_0 = this.reader_8be2vx$;
      if ($this_0.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_0.tokenClass));
        $this_0.fail_bm4lxs$("Expected ':' after the key", $this_0.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }if (!this.reader_8be2vx$.canBeginValue) {
      var $this_1 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_1.currentPosition;
      if (!condition) {
        $this_1.fail_bm4lxs$('Unexpected trailing comma', position);
      }tmp$ = -1;
    } else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.coerceInputValue_0 = function (descriptor, index) {
    var tmp$;
    var elementDescriptor = descriptor.getElementDescriptor_za3lpa$(index);
    if (this.reader_8be2vx$.tokenClass === TC_NULL && !elementDescriptor.isNullable)
      return true;
    if (equals(elementDescriptor.kind, SerialKind.ENUM)) {
      tmp$ = this.reader_8be2vx$.peekString_6taknv$(this.configuration_0.isLenient);
      if (tmp$ == null) {
        return false;
      }var enumValue = tmp$;
      var enumIndex = elementDescriptor.getElementIndex_61zpoe$(enumValue);
      if (enumIndex === -3)
        return true;
    }return false;
  };
  StreamingJsonDecoder.prototype.decodeObjectIndex_0 = function (tokenClass, descriptor) {
    var tmp$;
    if (tokenClass === TC_COMMA && !this.reader_8be2vx$.canBeginValue) {
      this.reader_8be2vx$.fail_bm4lxs$('Unexpected trailing comma');
    }while (this.reader_8be2vx$.canBeginValue) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      var key = this.decodeString();
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected ':'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
      var index = descriptor.getElementIndex_61zpoe$(key);
      if (index !== -3) {
        if (this.configuration_0.coerceInputValues && this.coerceInputValue_0(descriptor, index)) {
          tmp$ = false;
        } else {
          return index;
        }
      } else {
        tmp$ = true;
      }
      var isUnknown = tmp$;
      if (isUnknown && !this.configuration_0.ignoreUnknownKeys) {
        this.reader_8be2vx$.fail_bm4lxs$("Encountered an unknown key '" + key + "'." + '\n' + ignoreUnknownKeysHint);
      } else {
        this.reader_8be2vx$.skipElement();
      }
      if (this.reader_8be2vx$.tokenClass === TC_COMMA) {
        this.reader_8be2vx$.nextToken();
        var $this_0 = this.reader_8be2vx$;
        var condition = this.reader_8be2vx$.canBeginValue;
        var position = this.reader_8be2vx$.currentPosition;
        if (!condition) {
          $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
        }}}
    return -1;
  };
  StreamingJsonDecoder.prototype.decodeListIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 !== -1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_LIST) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the array or comma', $this.tokenPosition_0);
      }}if (!this.reader_8be2vx$.canBeginValue) {
      var $this_0 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_0.currentPosition;
      if (!condition) {
        $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
      }tmp$ = -1;
    } else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    if (this.configuration_0.isLenient) {
      tmp$ = toBooleanStrict(this.reader_8be2vx$.takeString());
    } else {
      tmp$ = toBooleanStrict(this.reader_8be2vx$.takeBooleanStringUnquoted());
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeByte = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toByte($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'byte' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeShort = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toShort($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'short' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeInt = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toInt($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'int' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeLong = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toLong($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'long' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeFloat = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toDouble($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'float' + "'");
      } else
        throw e;
    }
    var result = parse_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_8be2vx$, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toDouble($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'double' + "'");
      } else
        throw e;
    }
    var result = parse_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_8be2vx$, result);
  };
  StreamingJsonDecoder.prototype.decodeChar = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toBoxedChar(single($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'char' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeString = function () {
    var tmp$;
    if (this.configuration_0.isLenient) {
      tmp$ = this.reader_8be2vx$.takeString();
    } else {
      tmp$ = this.reader_8be2vx$.takeStringQuoted();
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.parse_0 = function ($receiver, type, block) {
    try {
      return block($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + type + "'");
      } else
        throw e;
    }
  };
  StreamingJsonDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString());
  };
  StreamingJsonDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StreamingJsonDecoder',
    interfaces: [AbstractDecoder, JsonDecoder]
  };
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.composer_0 = composer;
    this.json_8uu1uy$_0 = json;
    this.mode_0 = mode;
    this.modeReuseCache_0 = modeReuseCache;
    this.serializersModule_tvtxsn$_0 = this.json.serializersModule;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.forceQuoting_0 = false;
    this.writePolymorphic_0 = false;
    var i = this.mode_0.ordinal;
    if (this.modeReuseCache_0[i] !== null || this.modeReuseCache_0[i] !== this)
      this.modeReuseCache_0[i] = this;
  }
  Object.defineProperty(StreamingJsonEncoder.prototype, 'json', {
    get: function () {
      return this.json_8uu1uy$_0;
    }
  });
  Object.defineProperty(StreamingJsonEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_tvtxsn$_0;
    }
  });
  StreamingJsonEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  StreamingJsonEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.configuration_0.encodeDefaults;
  };
  StreamingJsonEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    encodePolymorphically$break: do {
      var tmp$, tmp$_0;
      if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism) {
        serializer.serialize_55azsf$(this, value);
        break encodePolymorphically$break;
      }var actualSerializer = findActualSerializer(this, Kotlin.isType(tmp$ = serializer, SerializationStrategy) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
      this.writePolymorphic_0 = true;
      actualSerializer.serialize_55azsf$(this, value);
    }
     while (false);
  };
  StreamingJsonEncoder.prototype.encodeTypeInfo_0 = function (descriptor) {
    this.composer_0.nextItem();
    this.encodeString_61zpoe$(this.configuration_0.classDiscriminator);
    this.composer_0.print_s8itvh$(COLON);
    this.composer_0.space();
    this.encodeString_61zpoe$(descriptor.serialName);
  };
  StreamingJsonEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$;
    var newMode = switchMode(this.json, descriptor);
    if (unboxChar(newMode.begin) !== INVALID) {
      this.composer_0.print_s8itvh$(unboxChar(newMode.begin));
      this.composer_0.indent();
    }if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      this.encodeTypeInfo_0(descriptor);
    }if (this.mode_0 === newMode) {
      return this;
    }return (tmp$ = this.modeReuseCache_0[newMode.ordinal]) != null ? tmp$ : new StreamingJsonEncoder(this.composer_0, this.json, newMode, this.modeReuseCache_0);
  };
  StreamingJsonEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      this.composer_0.unIndent();
      this.composer_0.nextItem();
      this.composer_0.print_s8itvh$(unboxChar(this.mode_0.end));
    }};
  StreamingJsonEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    var tmp$;
    switch (this.mode_0.name) {
      case 'LIST':
        if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        break;
      case 'MAP':
        if (!this.composer_0.writingFirst) {
          if (index % 2 === 0) {
            this.composer_0.print_s8itvh$(COMMA);
            this.composer_0.nextItem();
            tmp$ = true;
          } else {
            this.composer_0.print_s8itvh$(COLON);
            this.composer_0.space();
            tmp$ = false;
          }
          this.forceQuoting_0 = tmp$;
        } else {
          this.forceQuoting_0 = true;
          this.composer_0.nextItem();
        }

        break;
      case 'POLY_OBJ':
        if (index === 0)
          this.forceQuoting_0 = true;
        if (index === 1) {
          this.composer_0.print_s8itvh$(COMMA);
          this.composer_0.space();
          this.forceQuoting_0 = false;
        }
        break;
      default:if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        this.encodeString_61zpoe$(descriptor.getElementName_za3lpa$(index));
        this.composer_0.print_s8itvh$(COLON);
        this.composer_0.space();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeNull = function () {
    this.composer_0.print_61zpoe$(NULL);
  };
  StreamingJsonEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_6taknv$(value);
  };
  StreamingJsonEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8j3t7$(value);
  };
  StreamingJsonEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mq22fl$(value);
  };
  StreamingJsonEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_za3lpa$(value);
  };
  StreamingJsonEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8cxhz$(value);
  };
  StreamingJsonEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mx4ult$(value);
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, this.composer_0.sb_8be2vx$.toString());
    }};
  StreamingJsonEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_14dthe$(value);
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, this.composer_0.sb_8be2vx$.toString());
    }};
  StreamingJsonEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeString_61zpoe$(String.fromCharCode(value));
  };
  StreamingJsonEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.composer_0.printQuoted_61zpoe$(value);
  };
  StreamingJsonEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeString_61zpoe$(enumDescriptor.getElementName_za3lpa$(index));
  };
  function StreamingJsonEncoder$Composer(sb, json) {
    this.sb_8be2vx$ = sb;
    this.json_0 = json;
    this.level_0 = 0;
    this.writingFirst_4lagic$_0 = true;
  }
  Object.defineProperty(StreamingJsonEncoder$Composer.prototype, 'writingFirst', {
    configurable: true,
    get: function () {
      return this.writingFirst_4lagic$_0;
    },
    set: function (writingFirst) {
      this.writingFirst_4lagic$_0 = writingFirst;
    }
  });
  StreamingJsonEncoder$Composer.prototype.indent = function () {
    this.writingFirst = true;
    this.level_0 = this.level_0 + 1 | 0;
  };
  StreamingJsonEncoder$Composer.prototype.unIndent = function () {
    this.level_0 = this.level_0 - 1 | 0;
  };
  StreamingJsonEncoder$Composer.prototype.nextItem = function () {
    this.writingFirst = false;
    if (this.json_0.configuration_8be2vx$.prettyPrint) {
      this.print_61zpoe$('\n');
      var times = this.level_0;
      for (var index = 0; index < times; index++) {
        this.print_61zpoe$(this.json_0.configuration_8be2vx$.prettyPrintIndent);
      }
    }};
  StreamingJsonEncoder$Composer.prototype.space = function () {
    if (this.json_0.configuration_8be2vx$.prettyPrint)
      this.print_s8itvh$(32);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8itvh$ = function (v) {
    return this.sb_8be2vx$.append_s8itvh$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_61zpoe$ = function (v) {
    return this.sb_8be2vx$.append_pdl1vj$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_mx4ult$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_14dthe$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8j3t7$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_mq22fl$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_za3lpa$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8cxhz$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_6taknv$ = function (v) {
    return this.sb_8be2vx$.append_6taknv$(v);
  };
  StreamingJsonEncoder$Composer.prototype.printQuoted_61zpoe$ = function (value) {
    printQuoted(this.sb_8be2vx$, value);
  };
  StreamingJsonEncoder$Composer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Composer',
    interfaces: []
  };
  StreamingJsonEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StreamingJsonEncoder',
    interfaces: [AbstractEncoder, JsonEncoder]
  };
  function StreamingJsonEncoder_init(output, json, mode, modeReuseCache, $this) {
    $this = $this || Object.create(StreamingJsonEncoder.prototype);
    StreamingJsonEncoder.call($this, new StreamingJsonEncoder$Composer(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function toHexChar(i) {
    var d = i & 15;
    return d < 10 ? toChar(d + 48 | 0) : toChar(d - 10 + 97 | 0);
  }
  var ESCAPE_CHARS;
  function printQuoted($receiver, value) {
    var tmp$;
    $receiver.append_s8itvh$(STRING);
    var lastPos = 0;
    var length = value.length;
    for (var i = 0; i < length; i++) {
      var c = value.charCodeAt(i) | 0;
      if (c >= ESCAPE_CHARS.length)
        continue;
      tmp$ = ESCAPE_CHARS[c];
      if (tmp$ == null) {
        continue;
      }var esc = tmp$;
      $receiver.append_ezbsdh$(value, lastPos, i);
      $receiver.append_pdl1vj$(esc);
      lastPos = i + 1 | 0;
    }
    $receiver.append_ezbsdh$(value, lastPos, length);
    $receiver.append_s8itvh$(STRING);
  }
  function toBooleanStrict($receiver) {
    var tmp$;
    tmp$ = toBooleanStrictOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalStateException_init($receiver + ' does not represent a Boolean');
    }return tmp$;
  }
  function toBooleanStrictOrNull($receiver) {
    if (equals_0($receiver, 'true', true))
      return true;
    else if (equals_0($receiver, 'false', true))
      return false;
    else
      return null;
  }
  function shouldBeQuoted(str) {
    var tmp$;
    if (equals(str, NULL))
      return true;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      if (charToTokenClass(ch) !== TC_OTHER)
        return true;
    }
    return false;
  }
  function readJson($receiver, element, deserializer) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(element, JsonObject))
      tmp$_0 = new JsonTreeDecoder($receiver, element);
    else if (Kotlin.isType(element, JsonArray))
      tmp$_0 = new JsonTreeListDecoder($receiver, element);
    else if (Kotlin.isType(element, JsonLiteral) || equals(element, JsonNull_getInstance())) {
      tmp$_0 = new JsonPrimitiveDecoder($receiver, Kotlin.isType(tmp$ = element, JsonPrimitive) ? tmp$ : throwCCE());
    } else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var input = tmp$_0;
    return input.decodeSerializableValue_w63s0f$(deserializer);
  }
  function readPolymorphicJson($receiver, discriminator, element, deserializer) {
    return (new JsonTreeDecoder($receiver, element, discriminator, deserializer.descriptor)).decodeSerializableValue_w63s0f$(deserializer);
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_nf7dq8$_0 = json;
    this.value_admuh1$_0 = value;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'json', {
    get: function () {
      return this.json_nf7dq8$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'value', {
    get: function () {
      return this.value_admuh1$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode.OVERWRITE;
    }
  });
  AbstractJsonTreeDecoder.prototype.currentObject_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.currentTagOrNull) != null ? this.currentElement_61zpoe$(tmp$) : null) != null ? tmp$_0 : this.value;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement = function () {
    return this.currentObject_0();
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    var currentObject = this.currentObject_0();
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind.LIST) || Kotlin.isType(tmp$, PolymorphicKind)) {
      var tmp$_1 = this.json;
      if (!Kotlin.isType(currentObject, JsonArray)) {
        throw JsonDecodingException_0(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
      }tmp$_0 = new JsonTreeListDecoder(tmp$_1, currentObject);
    } else if (equals(tmp$, StructureKind.MAP)) {
      var $receiver = this.json;
      var tmp$_2;
      var keyDescriptor = descriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        var tmp$_3 = this.json;
        if (!Kotlin.isType(currentObject, JsonObject)) {
          throw JsonDecodingException_0(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
        }tmp$_2 = new JsonTreeMapDecoder(tmp$_3, currentObject);
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        var tmp$_4 = this.json;
        if (!Kotlin.isType(currentObject, JsonArray)) {
          throw JsonDecodingException_0(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
        }tmp$_2 = new JsonTreeListDecoder(tmp$_4, currentObject);
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      tmp$_0 = tmp$_2;
    } else {
      var tmp$_5 = this.json;
      if (!Kotlin.isType(currentObject, JsonObject)) {
        throw JsonDecodingException_0(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
      }tmp$_0 = new JsonTreeDecoder(tmp$_5, currentObject);
    }
    return tmp$_0;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark = function () {
    return !Kotlin.isType(this.currentObject_0(), JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.getValue_61zpoe$ = function (tag) {
    var tmp$, tmp$_0;
    var currentElement = this.currentElement_61zpoe$(tag);
    tmp$_0 = Kotlin.isType(tmp$ = currentElement, JsonPrimitive) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw JsonDecodingException_1(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, this.currentObject_0().toString());
    }return tmp$_0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.getValue_61zpoe$(tag).content);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return this.currentElement_61zpoe$(tag) !== JsonNull_getInstance();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    var tmp$;
    var value = this.getValue_61zpoe$(tag);
    if (!this.json.configuration_8be2vx$.isLenient) {
      var literal = Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE();
      if (literal.isString)
        throw JsonDecodingException_1(-1, "Boolean literal for key '" + tag + "' should be unquoted." + '\n' + lenientHint, this.currentObject_0().toString());
    }return get_boolean(value);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toByte_0(get_int($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'byte' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toShort_0(get_int($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'short' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_int($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'int' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_long($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'long' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_float($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'float' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    var result = primitive_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, this.currentObject_0().toString());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_double($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'double' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    var result = primitive_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, this.currentObject_0().toString());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toBoxedChar(single($receiver.content));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + 'char' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.primitive_0 = function ($receiver, primitive, block) {
    try {
      return block($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_1(-1, "Failed to parse '" + primitive + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_11rb$ = function (tag) {
    var tmp$;
    var value = this.getValue_61zpoe$(tag);
    if (!this.json.configuration_8be2vx$.isLenient) {
      var literal = Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE();
      if (!literal.isString)
        throw JsonDecodingException_1(-1, "String literal for key '" + tag + "' should be quoted." + '\n' + lenientHint, this.currentObject_0().toString());
    }return value.content;
  };
  AbstractJsonTreeDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractJsonTreeDecoder',
    interfaces: [JsonDecoder, NamedValueDecoder]
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_icegni$_0 = value;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  Object.defineProperty(JsonPrimitiveDecoder.prototype, 'value', {
    get: function () {
      return this.value_icegni$_0;
    }
  });
  JsonPrimitiveDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    return 0;
  };
  JsonPrimitiveDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    if (!(tag === PRIMITIVE_TAG)) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }return this.value;
  };
  JsonPrimitiveDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitiveDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    if (polyDiscriminator === void 0)
      polyDiscriminator = null;
    if (polyDescriptor === void 0)
      polyDescriptor = null;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_nyd9q1$_0 = value;
    this.polyDiscriminator_0 = polyDiscriminator;
    this.polyDescriptor_0 = polyDescriptor;
    this.position_0 = 0;
  }
  Object.defineProperty(JsonTreeDecoder.prototype, 'value', {
    get: function () {
      return this.value_nyd9q1$_0;
    }
  });
  JsonTreeDecoder.prototype.coerceInputValue_0 = function (descriptor, index, tag) {
    var tmp$, tmp$_0, tmp$_1;
    var elementDescriptor = descriptor.getElementDescriptor_za3lpa$(index);
    if (Kotlin.isType(this.currentElement_61zpoe$(tag), JsonNull) && !elementDescriptor.isNullable)
      return true;
    if (equals(elementDescriptor.kind, SerialKind.ENUM)) {
      tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.currentElement_61zpoe$(tag), JsonPrimitive) ? tmp$ : null) != null ? get_contentOrNull(tmp$_0) : null;
      if (tmp$_1 == null) {
        return false;
      }var enumValue = tmp$_1;
      var enumIndex = elementDescriptor.getElementIndex_61zpoe$(enumValue);
      if (enumIndex === -3)
        return true;
    }return false;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    while (this.position_0 < descriptor.elementsCount) {
      var name = this.getTag_av9bu7$(descriptor, (tmp$ = this.position_0, this.position_0 = tmp$ + 1 | 0, tmp$));
      var $receiver = this.value;
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name) && (!this.configuration_0.coerceInputValues || !this.coerceInputValue_0(descriptor, this.position_0 - 1 | 0, name))) {
        return this.position_0 - 1 | 0;
      }}
    return -1;
  };
  JsonTreeDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return getValue(this.value, tag);
  };
  JsonTreeDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_0)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_24f42q$.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    var tmp$;
    if (this.configuration_0.ignoreUnknownKeys || Kotlin.isType(descriptor.kind, PolymorphicKind))
      return;
    var names = jsonCachedSerialNames(descriptor);
    tmp$ = this.value.keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      if (!names.contains_11rb$(key) && !equals(key, this.polyDiscriminator_0)) {
        throw UnknownKeyException(key, this.value.toString());
      }}
  };
  JsonTreeDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.value_ozc1lj$_0 = value;
    this.keys_0 = toList(this.value.keys);
    this.size_0 = this.keys_0.size * 2 | 0;
    this.position_1 = -1;
  }
  Object.defineProperty(JsonTreeMapDecoder.prototype, 'value', {
    get: function () {
      return this.value_ozc1lj$_0;
    }
  });
  JsonTreeMapDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_0.get_za3lpa$(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.position_1 < (this.size_0 - 1 | 0)) {
      this.position_1 = this.position_1 + 1 | 0;
      return this.position_1;
    }
    return -1;
  };
  JsonTreeMapDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return this.position_1 % 2 === 0 ? JsonPrimitive_2(tag) : getValue(this.value, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeMapDecoder',
    interfaces: [JsonTreeDecoder]
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_z81zg7$_0 = value;
    this.size_0 = this.value.size;
    this.currentIndex_0 = -1;
  }
  Object.defineProperty(JsonTreeListDecoder.prototype, 'value', {
    get: function () {
      return this.value_z81zg7$_0;
    }
  });
  JsonTreeListDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return this.value.get_za3lpa$(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.currentIndex_0 < (this.size_0 - 1 | 0)) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      return this.currentIndex_0;
    }
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeListDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  var updateModeDeprecated;
  function getElementIndexOrThrow($receiver, name) {
    var index = $receiver.getElementIndex_61zpoe$(name);
    if (index === -3)
      throw SerializationException_init($receiver.serialName + " does not contain element with name '" + name + "'");
    return index;
  }
  function writeJson$lambda(closure$result) {
    return function (it) {
      closure$result.v = it;
      return Unit;
    };
  }
  function writeJson($receiver, value, serializer) {
    var result = {v: null};
    var encoder = new JsonTreeEncoder($receiver, writeJson$lambda(result));
    encoder.encodeSerializableValue_tf03ej$(serializer, value);
    return result.v == null ? throwUPAE('result') : result.v;
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_927t60$_0 = json;
    this.nodeConsumer = nodeConsumer;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.writePolymorphic_0 = false;
  }
  Object.defineProperty(AbstractJsonTreeEncoder.prototype, 'json', {
    get: function () {
      return this.json_927t60$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  AbstractJsonTreeEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  AbstractJsonTreeEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.configuration_0.encodeDefaults;
  };
  AbstractJsonTreeEncoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_11rb$ = function (tag) {
    this.putElement_zafu29$(tag, JsonNull_getInstance());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, this.getCurrent().toString());
    }};
  AbstractJsonTreeEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    if (this.currentTagOrNull != null || (!Kotlin.isType(serializer.descriptor.kind, PrimitiveKind) && serializer.descriptor.kind !== SerialKind.ENUM)) {
      encodePolymorphically$break: do {
        var tmp$, tmp$_0;
        if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism) {
          serializer.serialize_55azsf$(this, value);
          break encodePolymorphically$break;
        }var actualSerializer = findActualSerializer(this, Kotlin.isType(tmp$ = serializer, SerializationStrategy) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
        this.writePolymorphic_0 = true;
        actualSerializer.serialize_55azsf$(this, value);
      }
       while (false);
    } else {
      var $receiver = new JsonPrimitiveEncoder(this.json, this.nodeConsumer);
      $receiver.encodeSerializableValue_tf03ej$(serializer, value);
      $receiver.endEncode_24f42q$(serializer.descriptor);
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, this.getCurrent().toString());
    }};
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(String.fromCharCode(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_4xdzqf$ = function (tag, enumDescriptor, ordinal) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(enumDescriptor.getElementName_za3lpa$(ordinal)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(value.toString()));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$AbstractJsonTreeEncoder) {
    return function (node) {
      this$AbstractJsonTreeEncoder.putElement_zafu29$(this$AbstractJsonTreeEncoder.currentTag, node);
      return Unit;
    };
  }
  AbstractJsonTreeEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    var consumer = this.currentTagOrNull == null ? this.nodeConsumer : AbstractJsonTreeEncoder$beginStructure$lambda(this);
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind.LIST) || Kotlin.isType(tmp$, PolymorphicKind))
      tmp$_0 = new JsonTreeListEncoder(this.json, consumer);
    else if (equals(tmp$, StructureKind.MAP)) {
      var $receiver = this.json;
      var tmp$_1;
      var keyDescriptor = descriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$_1 = new JsonTreeMapEncoder(this.json, consumer);
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$_1 = new JsonTreeListEncoder(this.json, consumer);
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      tmp$_0 = tmp$_1;
    } else
      tmp$_0 = new JsonTreeEncoder(this.json, consumer);
    var encoder = tmp$_0;
    if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      encoder.putElement_zafu29$(this.configuration_0.classDiscriminator, JsonPrimitive_2(descriptor.serialName));
    }return encoder;
  };
  AbstractJsonTreeEncoder.prototype.endEncode_24f42q$ = function (descriptor) {
    this.nodeConsumer(this.getCurrent());
  };
  AbstractJsonTreeEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractJsonTreeEncoder',
    interfaces: [JsonEncoder, NamedValueEncoder]
  };
  var PRIMITIVE_TAG;
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_0 = null;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  JsonPrimitiveEncoder.prototype.putElement_zafu29$ = function (key, element) {
    if (!(key === PRIMITIVE_TAG)) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }if (!(this.content_0 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init(message_0.toString());
    }this.content_0 = element;
  };
  JsonPrimitiveEncoder.prototype.getCurrent = function () {
    var value = this.content_0;
    var requireNotNull$result;
    if (value == null) {
      var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
      throw IllegalArgumentException_init(message.toString());
    } else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  };
  JsonPrimitiveEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitiveEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_0 = LinkedHashMap_init();
  }
  JsonTreeEncoder.prototype.putElement_zafu29$ = function (key, element) {
    this.content_0.put_xwzc9p$(key, element);
  };
  JsonTreeEncoder.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.tag_s622uw$_0 = this.tag_s622uw$_0;
    this.isKey_0 = true;
  }
  Object.defineProperty(JsonTreeMapEncoder.prototype, 'tag_0', {
    configurable: true,
    get: function () {
      if (this.tag_s622uw$_0 == null)
        return throwUPAE('tag');
      return this.tag_s622uw$_0;
    },
    set: function (tag) {
      this.tag_s622uw$_0 = tag;
    }
  });
  JsonTreeMapEncoder.prototype.putElement_zafu29$ = function (key, element) {
    var tmp$;
    if (this.isKey_0) {
      if (Kotlin.isType(element, JsonPrimitive))
        tmp$ = element.content;
      else if (Kotlin.isType(element, JsonObject))
        throw InvalidKeyKindException(JsonObjectSerializer_getInstance().descriptor);
      else if (Kotlin.isType(element, JsonArray))
        throw InvalidKeyKindException(JsonArraySerializer_getInstance().descriptor);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      this.tag_0 = tmp$;
      this.isKey_0 = false;
    } else {
      var $receiver = this.content_0;
      var key_0 = this.tag_0;
      $receiver.put_xwzc9p$(key_0, element);
      this.isKey_0 = true;
    }
  };
  JsonTreeMapEncoder.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeMapEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeMapEncoder',
    interfaces: [JsonTreeEncoder]
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.array_0 = ArrayList_init();
  }
  JsonTreeListEncoder.prototype.elementName_szpzho$ = function (descriptor, index) {
    return index.toString();
  };
  JsonTreeListEncoder.prototype.putElement_zafu29$ = function (key, element) {
    var idx = toInt(key);
    this.array_0.add_wxm5ur$(idx, element);
  };
  JsonTreeListEncoder.prototype.getCurrent = function () {
    return new JsonArray(this.array_0);
  };
  JsonTreeListEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeListEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  var cast = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.internal.cast_f6pxlz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JsonDecodingException = _.kotlinx.serialization.json.internal.JsonDecodingException_f0n09d$;
    return function (T_0, isT, value, descriptor) {
      if (!isT(value)) {
        throw JsonDecodingException(-1, 'Expected ' + getKClass(T_0) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(value));
      }return value;
    };
  }));
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this);
    this.begin = toBoxedChar(begin);
    this.end = toBoxedChar(end);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.beginTc = charToTokenClass(unboxChar(this.begin));
    this.endTc = charToTokenClass(unboxChar(this.end));
  }
  function WriteMode_initFields() {
    WriteMode_initFields = function () {
    };
    WriteMode$OBJ_instance = new WriteMode('OBJ', 0, BEGIN_OBJ, END_OBJ);
    WriteMode$LIST_instance = new WriteMode('LIST', 1, BEGIN_LIST, END_LIST);
    WriteMode$MAP_instance = new WriteMode('MAP', 2, BEGIN_OBJ, END_OBJ);
    WriteMode$POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, BEGIN_LIST, END_LIST);
  }
  var WriteMode$OBJ_instance;
  function WriteMode$OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$OBJ_instance;
  }
  var WriteMode$LIST_instance;
  function WriteMode$LIST_getInstance() {
    WriteMode_initFields();
    return WriteMode$LIST_instance;
  }
  var WriteMode$MAP_instance;
  function WriteMode$MAP_getInstance() {
    WriteMode_initFields();
    return WriteMode$MAP_instance;
  }
  var WriteMode$POLY_OBJ_instance;
  function WriteMode$POLY_OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$POLY_OBJ_instance;
  }
  WriteMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteMode',
    interfaces: [Enum]
  };
  function WriteMode$values() {
    return [WriteMode$OBJ_getInstance(), WriteMode$LIST_getInstance(), WriteMode$MAP_getInstance(), WriteMode$POLY_OBJ_getInstance()];
  }
  WriteMode.values = WriteMode$values;
  function WriteMode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return WriteMode$OBJ_getInstance();
      case 'LIST':
        return WriteMode$LIST_getInstance();
      case 'MAP':
        return WriteMode$MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode$POLY_OBJ_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.json.internal.WriteMode.' + name);
    }
  }
  WriteMode.valueOf_61zpoe$ = WriteMode$valueOf;
  function switchMode($receiver, desc) {
    var tmp$;
    tmp$ = desc.kind;
    if (Kotlin.isType(tmp$, PolymorphicKind))
      return WriteMode$POLY_OBJ_getInstance();
    else if (equals(tmp$, StructureKind.LIST))
      return WriteMode$LIST_getInstance();
    else if (equals(tmp$, StructureKind.MAP)) {
      var tmp$_0;
      var keyDescriptor = desc.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$_0 = WriteMode$MAP_getInstance();
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$_0 = WriteMode$LIST_getInstance();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      return tmp$_0;
    } else
      return WriteMode$OBJ_getInstance();
  }
  var selectMapMode = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.internal.selectMapMode_clqyd9$', wrapFunction(function () {
    var PrimitiveKind = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.descriptors.PrimitiveKind;
    var SerialKind = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.descriptors.SerialKind;
    var equals = Kotlin.equals;
    var InvalidKeyKindException = _.kotlinx.serialization.json.internal.InvalidKeyKindException_jo479d$;
    return function ($receiver, mapDescriptor, ifMap, ifList) {
      var tmp$;
      var keyDescriptor = mapDescriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$ = ifMap();
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$ = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      return tmp$;
    };
  }));
  var parserMessage;
  function DynamicObjectParser(context, configuration) {
    if (context === void 0)
      context = modules.EmptySerializersModule;
    if (configuration === void 0)
      configuration = JsonConfiguration$Companion_getInstance().Default;
    this.context = context;
    this.configuration = configuration;
  }
  DynamicObjectParser.prototype.parse_pgxeca$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.DynamicObjectParser.parse_pgxeca$', wrapFunction(function () {
    var noImpl = _.kotlinx.serialization.noImpl;
    return function (T_0, isT, value) {
      return noImpl();
    };
  }));
  DynamicObjectParser.prototype.parse_tf9272$ = function (obj, deserializer) {
    return noImpl_0();
  };
  DynamicObjectParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectParser',
    interfaces: []
  };
  var serializerMessage;
  function serialize($receiver, strategy, obj) {
    return noImpl_0();
  }
  var serialize_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.serialize_nvcwwn$', wrapFunction(function () {
    var noImpl = _.kotlinx.serialization.noImpl;
    return function (T_0, isT, $receiver, obj) {
      return noImpl();
    };
  }));
  function noImpl_0() {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  }
  function decodeFromDynamic($receiver, deserializer, dynamic) {
    return decodeFromDynamic_1(Json$Default_getInstance(), deserializer, dynamic);
  }
  var decodeFromDynamic_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.decodeFromDynamic_is5yld$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var decodeFromDynamic = _.kotlinx.serialization.json.decodeFromDynamic_76vv94$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, dynamic) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return decodeFromDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), dynamic);
    };
  }));
  function encodeToDynamic($receiver, serializer, value) {
    return encodeToDynamic_1($receiver, serializer, value);
  }
  var encodeToDynamic_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.encodeToDynamic_eahrye$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var encodeToDynamic = _.kotlinx.serialization.json.encodeToDynamic_9ibeu3$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return encodeToDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  function decodeFromDynamic_1($receiver, deserializer, dynamic) {
    return decodeDynamic($receiver, deserializer, dynamic);
  }
  var decodeFromDynamic_2 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.decodeFromDynamic_is5yld$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var decodeFromDynamic = _.kotlinx.serialization.json.decodeFromDynamic_76vv94$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, dynamic) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return decodeFromDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), dynamic);
    };
  }));
  function encodeToDynamic_1($receiver, serializer, value) {
    return encodeDynamic($receiver, serializer, value);
  }
  var encodeToDynamic_2 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-json-jsLegacy.kotlinx.serialization.json.encodeToDynamic_eahrye$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var encodeToDynamic = _.kotlinx.serialization.json.encodeToDynamic_9ibeu3$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var $receiver_0 = $receiver.serializersModule;
      var tmp$;
      return encodeToDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver_0, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var MAX_SAFE_INTEGER;
  function decodeDynamic($receiver, deserializer, dynamic) {
    var tmp$;
    switch (typeof dynamic) {
      case 'boolean':
      case 'number':
      case 'string':
        tmp$ = new PrimitiveDynamicInput(dynamic, $receiver);
        break;
      default:if (Array.isArray(dynamic)) {
          tmp$ = new DynamicListInput(dynamic, $receiver);
        } else {
          tmp$ = new DynamicInput(dynamic, $receiver);
        }

        break;
    }
    var input = tmp$;
    return input.decodeSerializableValue_w63s0f$(deserializer);
  }
  function DynamicInput(value, json) {
    NamedValueDecoder.call(this);
    this.value_0 = value;
    this.json_piha9d$_0 = json;
    this.currentPosition_0 = 0;
  }
  Object.defineProperty(DynamicInput.prototype, 'json', {
    get: function () {
      return this.json_piha9d$_0;
    }
  });
  Object.defineProperty(DynamicInput.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  Object.defineProperty(DynamicInput.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode.OVERWRITE;
    }
  });
  DynamicInput.prototype.decodeJsonElement = function () {
    var tmp$;
    var tag = this.currentTagOrNull;
    if (tag != null) {
      return decodeFromDynamic_1(this.json, JsonElement$Companion_getInstance().serializer(), this.value_0[tag]);
    }var keys = Object.keys(this.value_0);
    var size = typeof (tmp$ = keys.length) === 'number' ? tmp$ : throwCCE();
    var builder = new JsonObjectBuilder();
    for (var i = 0; i < size; i++) {
      var key = keys[i];
      var value = decodeDynamic(this.json, JsonElement$Companion_getInstance().serializer(), this.value_0[key]);
      builder.put_zafu29$(key.toString(), value);
    }
    return builder.build();
  };
  DynamicInput.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  DynamicInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    while (this.currentPosition_0 < descriptor.elementsCount) {
      var name = this.getTag_av9bu7$(descriptor, (tmp$ = this.currentPosition_0, this.currentPosition_0 = tmp$ + 1 | 0, tmp$));
      if (this.value_0[name] !== undefined)
        return this.currentPosition_0 - 1 | 0;
    }
    return -1;
  };
  DynamicInput.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescriptor) {
    var tmp$;
    return getElementIndexOrThrow(enumDescriptor, typeof (tmp$ = this.getByTag_61zpoe$(tag)) === 'string' ? tmp$ : throwCCE());
  };
  DynamicInput.prototype.getByTag_61zpoe$ = function (tag) {
    return this.value_0[tag];
  };
  DynamicInput.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    var value = this.getByTag_61zpoe$(tag);
    if (typeof value === 'string')
      if (value.length === 1)
        tmp$ = value.charCodeAt(0);
      else
        throw SerializationException_init(value.toString() + " can't be represented as Char");
    else if (Kotlin.isNumber(value))
      tmp$ = numberToChar(value);
    else
      throw SerializationException_init(value.toString() + " can't be represented as Char");
    return toBoxedChar(tmp$);
  };
  DynamicInput.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var tmp$, tmp$_0;
    var value = this.getByTag_61zpoe$(tag);
    tmp$_0 = typeof (tmp$ = value) === 'number' ? tmp$ : null;
    if (tmp$_0 == null) {
      throw SerializationException_init(value.toString() + ' is not a Number');
    }var number = tmp$_0;
    return this.toJavascriptLong_0(number);
  };
  DynamicInput.prototype.toJavascriptLong_0 = function (number) {
    var tmp$ = isFinite_0(number);
    if (tmp$) {
      tmp$ = Math_0.floor(number) === number;
    }var canBeConverted = tmp$;
    if (!canBeConverted)
      throw SerializationException_init(number.toString() + " can't be represented as Long because it is not finite or has non-zero fractional part");
    var inBound = Math_0.abs(number) <= MAX_SAFE_INTEGER;
    if (!inBound)
      throw SerializationException_init(number.toString() + " can't be deserialized to Long due to a potential precision loss");
    return Kotlin.Long.fromNumber(number);
  };
  DynamicInput.prototype.decodeTaggedValue_11rb$ = function (tag) {
    var tmp$, tmp$_0;
    var o = (tmp$ = this.getByTag_61zpoe$(tag)) != null ? tmp$ : this.throwMissingTag_0(tag);
    return Kotlin.isType(tmp$_0 = o, Any) ? tmp$_0 : throwCCE();
  };
  DynamicInput.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    var o = this.getByTag_61zpoe$(tag);
    if (o === undefined)
      this.throwMissingTag_0(tag);
    return o != null;
  };
  DynamicInput.prototype.throwMissingTag_0 = function (tag) {
    throw SerializationException_init('Value for field ' + tag + ' is missing');
  };
  DynamicInput.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var currentValue = (tmp$_0 = (tmp$ = this.currentTagOrNull) != null ? this.value_0[tmp$] : null) != null ? tmp$_0 : this.value_0;
    if (Kotlin.isType(descriptor.kind, PolymorphicKind))
      tmp$_1 = this.json.configuration_8be2vx$.useArrayPolymorphism ? StructureKind.LIST : StructureKind.MAP;
    else
      tmp$_1 = descriptor.kind;
    var kind = tmp$_1;
    if (equals(kind, StructureKind.LIST))
      tmp$_2 = new DynamicListInput(currentValue, this.json);
    else if (equals(kind, StructureKind.MAP))
      tmp$_2 = new DynamicMapInput(currentValue, this.json);
    else
      tmp$_2 = new DynamicInput(currentValue, this.json);
    return tmp$_2;
  };
  DynamicInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicInput',
    interfaces: [JsonDecoder, NamedValueDecoder]
  };
  function DynamicMapInput(value, json) {
    DynamicInput.call(this, value, json);
    this.keys_0 = Object.keys(value);
    var tmp$;
    this.size_0 = (typeof (tmp$ = this.keys_0.length) === 'number' ? tmp$ : throwCCE()) * 2 | 0;
    this.currentPosition_1 = -1;
  }
  Object.defineProperty(DynamicMapInput.prototype, 'isKey_0', {
    configurable: true,
    get: function () {
      return this.currentPosition_1 % 2 === 0;
    }
  });
  DynamicMapInput.prototype.elementName_szpzho$ = function (desc, index) {
    var tmp$;
    var i = index / 2 | 0;
    return typeof (tmp$ = this.keys_0[i]) === 'string' ? tmp$ : throwCCE();
  };
  DynamicMapInput.prototype.throwIllegalKeyType_0 = function (tag, value, type) {
    throw SerializationException_init('Property ' + tag + ' is not valid type ' + type + ': ' + value.toString());
  };
  DynamicMapInput.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedByte_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }decodeMapKey_0$result = (tmp$ = toByteOrNull(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'byte');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedByte_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedShort_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }decodeMapKey_0$result = (tmp$ = toShortOrNull(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'short');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedShort_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedInt_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }decodeMapKey_0$result = (tmp$ = toIntOrNull(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'int');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedInt_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedLong_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }var $receiver = value.toString();
        var tmp$_0;
        decodeMapKey_0$result = (tmp$ = this.toJavascriptLong_0((tmp$_0 = toDoubleOrNull($receiver)) != null ? tmp$_0 : this.throwIllegalKeyType_0(tag, $receiver, 'long'))) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'long');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedLong_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedFloat_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }decodeMapKey_0$result = (tmp$ = toDoubleOrNull(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'float');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedFloat_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var decodeMapKey_0$result;
    decodeMapKey_0$break: do {
      var tmp$;
      if (this.isKey_0) {
        var value = this.decodeTaggedValue_11rb$(tag);
        if (!(typeof value === 'string')) {
          decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedDouble_11rb$.call(this, tag);
          break decodeMapKey_0$break;
        }decodeMapKey_0$result = (tmp$ = toDoubleOrNull(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, 'double');
        break decodeMapKey_0$break;
      }decodeMapKey_0$result = DynamicInput.prototype.decodeTaggedDouble_11rb$.call(this, tag);
    }
     while (false);
    return decodeMapKey_0$result;
  };
  DynamicMapInput.prototype.decodeMapKey_0 = function (T_0, isT, tag, type, decode, cast) {
    var tmp$;
    if (this.isKey_0) {
      var value = this.decodeTaggedValue_11rb$(tag);
      if (!(typeof value === 'string'))
        return decode(tag);
      return (tmp$ = cast(value.toString())) != null ? tmp$ : this.throwIllegalKeyType_0(tag, value, type);
    }return decode(tag);
  };
  DynamicMapInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    while (this.currentPosition_1 < (this.size_0 - 1 | 0)) {
      var i = (tmp$ = this.currentPosition_1, this.currentPosition_1 = tmp$ + 1 | 0, tmp$) / 2 | 0;
      var name = typeof (tmp$_0 = this.keys_0[i]) === 'string' ? tmp$_0 : throwCCE();
      if (this.value_0[name] !== undefined)
        return this.currentPosition_1;
    }
    return -1;
  };
  DynamicMapInput.prototype.getByTag_61zpoe$ = function (tag) {
    return this.currentPosition_1 % 2 === 0 ? tag : this.value_0[tag];
  };
  DynamicMapInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMapInput',
    interfaces: [DynamicInput]
  };
  function DynamicListInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp$;
    this.size_0 = typeof (tmp$ = value.length) === 'number' ? tmp$ : throwCCE();
    this.currentPosition_1 = -1;
  }
  DynamicListInput.prototype.elementName_szpzho$ = function (desc, index) {
    return index.toString();
  };
  DynamicListInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.currentPosition_1 < (this.size_0 - 1 | 0)) {
      var o = this.value_0[this.currentPosition_1 = this.currentPosition_1 + 1 | 0, this.currentPosition_1];
      if (o !== undefined)
        return this.currentPosition_1;
    }
    return -1;
  };
  DynamicListInput.prototype.decodeJsonElement = function () {
    var tag = this.currentTagOrNull;
    if (tag != null) {
      return decodeFromDynamic_1(this.json, JsonElement$Companion_getInstance().serializer(), this.value_0[tag]);
    }var builder = new JsonArrayBuilder();
    var tmp$;
    tmp$ = this.size_0;
    for (var i = 0; i < tmp$; i++) {
      builder.add_qiw0cd$(decodeFromDynamic_1(this.json, JsonElement$Companion_getInstance().serializer(), this.value_0[i]));
    }
    return builder.build();
  };
  DynamicListInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicListInput',
    interfaces: [DynamicInput]
  };
  function PrimitiveDynamicInput(value, json) {
    DynamicInput.call(this, value, json);
    this.pushTag_11rb$('primitive');
  }
  PrimitiveDynamicInput.prototype.getByTag_61zpoe$ = function (tag) {
    return this.value_0;
  };
  PrimitiveDynamicInput.prototype.decodeJsonElement = function () {
    var tmp$;
    var str = this.value_0.toString();
    switch (typeof this.value_0) {
      case 'boolean':
        tmp$ = JsonPrimitive_0(toBoolean(str));
        break;
      case 'number':
        var l = toLongOrNull(str);
        if (l != null)
          return JsonPrimitive_1(l);
        var d = toDoubleOrNull(str);
        if (d != null)
          return JsonPrimitive_1(d);
        return JsonPrimitive_2(str);
      default:tmp$ = JsonPrimitive_2(str);
        break;
    }
    return tmp$;
  };
  PrimitiveDynamicInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveDynamicInput',
    interfaces: [DynamicInput]
  };
  function encodeDynamic($receiver, serializer, value) {
    if (Kotlin.isType(serializer.descriptor.kind, PrimitiveKind) || Kotlin.isType(serializer.descriptor.kind, Object.getPrototypeOf(SerialKind.ENUM).constructor)) {
      var encoder = new DynamicPrimitiveEncoder($receiver);
      encoder.encodeSerializableValue_tf03ej$(serializer, value);
      return encoder.result;
    }var encoder_0 = new DynamicObjectEncoder($receiver, false);
    encoder_0.encodeSerializableValue_tf03ej$(serializer, value);
    return encoder_0.result;
  }
  function DynamicObjectEncoder(json, encodeNullAsUndefined) {
    AbstractEncoder.call(this);
    this.json_16lcpu$_0 = json;
    this.encodeNullAsUndefined_0 = encodeNullAsUndefined;
    this.result = DynamicObjectEncoder$NoOutputMark_getInstance();
    this.current_d5mulr$_0 = this.current_d5mulr$_0;
    this.currentName_0 = null;
    this.currentDescriptor_sig5ya$_0 = this.currentDescriptor_sig5ya$_0;
    this.currentElementIsMapKey_0 = false;
  }
  Object.defineProperty(DynamicObjectEncoder.prototype, 'json', {
    get: function () {
      return this.json_16lcpu$_0;
    }
  });
  Object.defineProperty(DynamicObjectEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  Object.defineProperty(DynamicObjectEncoder.prototype, 'current_0', {
    configurable: true,
    get: function () {
      if (this.current_d5mulr$_0 == null)
        return throwUPAE('current');
      return this.current_d5mulr$_0;
    },
    set: function (current) {
      this.current_d5mulr$_0 = current;
    }
  });
  Object.defineProperty(DynamicObjectEncoder.prototype, 'currentDescriptor_0', {
    configurable: true,
    get: function () {
      if (this.currentDescriptor_sig5ya$_0 == null)
        return throwUPAE('currentDescriptor');
      return this.currentDescriptor_sig5ya$_0;
    },
    set: function (currentDescriptor) {
      this.currentDescriptor_sig5ya$_0 = currentDescriptor;
    }
  });
  function DynamicObjectEncoder$NoOutputMark() {
    DynamicObjectEncoder$NoOutputMark_instance = this;
  }
  DynamicObjectEncoder$NoOutputMark.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoOutputMark',
    interfaces: []
  };
  var DynamicObjectEncoder$NoOutputMark_instance = null;
  function DynamicObjectEncoder$NoOutputMark_getInstance() {
    if (DynamicObjectEncoder$NoOutputMark_instance === null) {
      new DynamicObjectEncoder$NoOutputMark();
    }return DynamicObjectEncoder$NoOutputMark_instance;
  }
  function DynamicObjectEncoder$Node(writeMode, jsObject) {
    this.writeMode = writeMode;
    this.jsObject = jsObject;
    this.index = 0;
    this.parent_95alro$_0 = this.parent_95alro$_0;
  }
  Object.defineProperty(DynamicObjectEncoder$Node.prototype, 'parent', {
    configurable: true,
    get: function () {
      if (this.parent_95alro$_0 == null)
        return throwUPAE('parent');
      return this.parent_95alro$_0;
    },
    set: function (parent) {
      this.parent_95alro$_0 = parent;
    }
  });
  DynamicObjectEncoder$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function DynamicObjectEncoder$WriteMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DynamicObjectEncoder$WriteMode_initFields() {
    DynamicObjectEncoder$WriteMode_initFields = function () {
    };
    DynamicObjectEncoder$WriteMode$OBJ_instance = new DynamicObjectEncoder$WriteMode('OBJ', 0);
    DynamicObjectEncoder$WriteMode$MAP_instance = new DynamicObjectEncoder$WriteMode('MAP', 1);
    DynamicObjectEncoder$WriteMode$LIST_instance = new DynamicObjectEncoder$WriteMode('LIST', 2);
  }
  var DynamicObjectEncoder$WriteMode$OBJ_instance;
  function DynamicObjectEncoder$WriteMode$OBJ_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$OBJ_instance;
  }
  var DynamicObjectEncoder$WriteMode$MAP_instance;
  function DynamicObjectEncoder$WriteMode$MAP_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$MAP_instance;
  }
  var DynamicObjectEncoder$WriteMode$LIST_instance;
  function DynamicObjectEncoder$WriteMode$LIST_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$LIST_instance;
  }
  DynamicObjectEncoder$WriteMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteMode',
    interfaces: [Enum]
  };
  function DynamicObjectEncoder$WriteMode$values() {
    return [DynamicObjectEncoder$WriteMode$OBJ_getInstance(), DynamicObjectEncoder$WriteMode$MAP_getInstance(), DynamicObjectEncoder$WriteMode$LIST_getInstance()];
  }
  DynamicObjectEncoder$WriteMode.values = DynamicObjectEncoder$WriteMode$values;
  function DynamicObjectEncoder$WriteMode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return DynamicObjectEncoder$WriteMode$OBJ_getInstance();
      case 'MAP':
        return DynamicObjectEncoder$WriteMode$MAP_getInstance();
      case 'LIST':
        return DynamicObjectEncoder$WriteMode$LIST_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.json.internal.DynamicObjectEncoder.WriteMode.' + name);
    }
  }
  DynamicObjectEncoder$WriteMode.valueOf_61zpoe$ = DynamicObjectEncoder$WriteMode$valueOf;
  DynamicObjectEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    this.current_0.index = index;
    this.currentDescriptor_0 = descriptor;
    if (this.current_0.writeMode === DynamicObjectEncoder$WriteMode$MAP_getInstance()) {
      this.currentElementIsMapKey_0 = this.current_0.index % 2 === 0;
    } else {
      this.currentName_0 = descriptor.getElementName_za3lpa$(index);
    }
    return true;
  };
  DynamicObjectEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    if (this.currentElementIsMapKey_0) {
      this.currentName_0 = value.toString();
    } else if (this.isNotStructured_0()) {
      this.result = value;
    } else {
      this.current_0.jsObject[this.currentName_0] = value;
    }
  };
  DynamicObjectEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(String.fromCharCode(value));
  };
  DynamicObjectEncoder.prototype.encodeNull = function () {
    if (this.currentElementIsMapKey_0) {
      this.currentName_0 = null;
    } else {
      if (this.encodeNullAsUndefined_0)
        return;
      this.current_0.jsObject[this.currentName_0] = null;
    }
  };
  DynamicObjectEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(enumDescriptor.getElementName_za3lpa$(index));
  };
  DynamicObjectEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var asDouble = value.toNumber();
    var conversionHasLossOfPrecision = Math_0.abs(asDouble) > MAX_SAFE_INTEGER;
    if (!this.json.configuration_8be2vx$.isLenient && conversionHasLossOfPrecision) {
      throw IllegalArgumentException_init(value.toString() + " can't be serialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialize anyway');
    }if (this.currentElementIsMapKey_0 && conversionHasLossOfPrecision) {
      throw IllegalArgumentException_init('Long with value ' + value.toString() + " can't be used in json as map key, because its value is larger than Number.MAX_SAFE_INTEGER");
    }this.encodeValue_za3rmp$(asDouble);
  };
  DynamicObjectEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeDouble_14dthe$(value);
  };
  DynamicObjectEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.currentElementIsMapKey_0) {
      var hasNonZeroFractionalPart = Math_0.floor(value) !== value;
      if (!isFinite_0(value) || hasNonZeroFractionalPart) {
        throw IllegalArgumentException_init('Double with value ' + value + " can't be used in json as map key, because its value is not an integer.");
      }}this.encodeValue_za3rmp$(value);
  };
  DynamicObjectEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  DynamicObjectEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.json.configuration_8be2vx$.encodeDefaults;
  };
  DynamicObjectEncoder.prototype.enterNode_0 = function (jsObject, writeMode) {
    var child = new DynamicObjectEncoder$Node(writeMode, jsObject);
    child.parent = this.current_0;
    this.current_0 = child;
  };
  DynamicObjectEncoder.prototype.exitNode_0 = function () {
    this.current_0 = this.current_0.parent;
    this.currentElementIsMapKey_0 = false;
  };
  DynamicObjectEncoder.prototype.isNotStructured_0 = function () {
    return this.result === DynamicObjectEncoder$NoOutputMark_getInstance();
  };
  DynamicObjectEncoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeSerializers) {
    if (this.currentElementIsMapKey_0) {
      throw IllegalArgumentException_init('Value of type ' + descriptor.serialName + " can't be used in json as map key. " + ('It should have either primitive or enum kind, but its kind is ' + descriptor.kind + '.'));
    }var newMode = this.selectMode_24f42q$(descriptor);
    if (this.result === DynamicObjectEncoder$NoOutputMark_getInstance()) {
      this.result = this.newChild_0(newMode);
      this.current_0 = new DynamicObjectEncoder$Node(newMode, this.result);
      this.current_0.parent = this.current_0;
    } else {
      var child = this.newChild_0(newMode);
      this.current_0.jsObject[this.currentName_0] = child;
      this.enterNode_0(child, newMode);
    }
    this.current_0.index = 0;
    return this;
  };
  DynamicObjectEncoder.prototype.newChild_0 = function (writeMode) {
    switch (writeMode.name) {
      case 'OBJ':
      case 'MAP':
        return {};
      case 'LIST':
        return [];
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  DynamicObjectEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    this.exitNode_0();
  };
  DynamicObjectEncoder.prototype.selectMode_24f42q$ = function (desc) {
    var tmp$;
    tmp$ = desc.kind;
    if (equals(tmp$, StructureKind.CLASS) || equals(tmp$, StructureKind.OBJECT) || equals(tmp$, SerialKind.CONTEXTUAL))
      return DynamicObjectEncoder$WriteMode$OBJ_getInstance();
    else if (equals(tmp$, StructureKind.LIST) || Kotlin.isType(tmp$, PolymorphicKind))
      return DynamicObjectEncoder$WriteMode$LIST_getInstance();
    else if (equals(tmp$, StructureKind.MAP))
      return DynamicObjectEncoder$WriteMode$MAP_getInstance();
    else if (Kotlin.isType(tmp$, PrimitiveKind) || equals(tmp$, SerialKind.ENUM)) {
      throw IllegalStateException_init('DynamicObjectSerializer does not support serialization of singular primitive values or enum types.'.toString());
    } else
      return Kotlin.noWhenBranchMatched();
  };
  DynamicObjectEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectEncoder',
    interfaces: [JsonEncoder, AbstractEncoder]
  };
  function DynamicPrimitiveEncoder(json) {
    AbstractEncoder.call(this);
    this.json_kvyz8o$_0 = json;
    this.result = null;
  }
  Object.defineProperty(DynamicPrimitiveEncoder.prototype, 'json', {
    get: function () {
      return this.json_kvyz8o$_0;
    }
  });
  Object.defineProperty(DynamicPrimitiveEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  DynamicPrimitiveEncoder.prototype.encodeNull = function () {
    this.result = null;
  };
  DynamicPrimitiveEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var asDouble = value.toNumber();
    if (!this.json.configuration_8be2vx$.isLenient && abs(value).toNumber() > MAX_SAFE_INTEGER) {
      throw IllegalArgumentException_init(value.toString() + " can't be deserialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialise anyway');
    }this.encodeValue_za3rmp$(asDouble);
  };
  DynamicPrimitiveEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(String.fromCharCode(value));
  };
  DynamicPrimitiveEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    this.result = value;
  };
  DynamicPrimitiveEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(enumDescriptor.getElementName_za3lpa$(index));
  };
  DynamicPrimitiveEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  DynamicPrimitiveEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  DynamicPrimitiveEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicPrimitiveEncoder',
    interfaces: [JsonEncoder, AbstractEncoder]
  };
  Object.defineProperty(Json, 'Default', {
    get: Json$Default_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  var package$json = package$serialization.json || (package$serialization.json = {});
  package$json.Json = Json;
  package$json.Json_x26noe$ = Json_0;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  package$json.JsonBuilder = JsonBuilder;
  package$json.Json_pgorq6$ = Json_1;
  package$json.Json_79ca8q$ = Json_2;
  package$json.Json_qt1oxq$ = Json_3;
  package$json.Json_i4rudb$ = Json_4;
  package$json.Json_4jix7z$ = Json_5;
  package$json._Json = Json_6;
  Object.defineProperty(JsonConfiguration, 'Companion', {
    get: JsonConfiguration$Companion_getInstance
  });
  package$json.JsonConfiguration = JsonConfiguration;
  package$json.SubtypeToDetectDefault = SubtypeToDetectDefault;
  package$json.SubtypeToDetectStable = SubtypeToDetectStable;
  package$json.JsonConfiguration_dqye30$ = JsonConfiguration_0;
  package$json.JsonContentPolymorphicSerializer = JsonContentPolymorphicSerializer;
  package$json.JsonDecoder = JsonDecoder;
  Object.defineProperty(JsonElement, 'Companion', {
    get: JsonElement$Companion_getInstance
  });
  package$json.JsonElement = JsonElement;
  Object.defineProperty(JsonPrimitive, 'Companion', {
    get: JsonPrimitive$Companion_getInstance
  });
  package$json.JsonPrimitive = JsonPrimitive;
  package$json.JsonPrimitive_1v8dbw$ = JsonPrimitive_0;
  package$json.JsonPrimitive_rcaewn$ = JsonPrimitive_1;
  package$json.JsonPrimitive_pdl1vj$ = JsonPrimitive_2;
  package$json.JsonLiteral = JsonLiteral;
  Object.defineProperty(package$json, 'JsonNull', {
    get: JsonNull_getInstance
  });
  Object.defineProperty(JsonObject, 'Companion', {
    get: JsonObject$Companion_getInstance
  });
  package$json.JsonObject = JsonObject;
  Object.defineProperty(JsonArray, 'Companion', {
    get: JsonArray$Companion_getInstance
  });
  package$json.JsonArray = JsonArray;
  package$json.get_jsonPrimitive_u3sd3g$ = get_jsonPrimitive;
  package$json.get_jsonObject_u3sd3g$ = get_jsonObject;
  package$json.get_jsonArray_u3sd3g$ = get_jsonArray;
  package$json.get_jsonNull_u3sd3g$ = get_jsonNull;
  package$json.get_int_59esu7$ = get_int;
  package$json.get_intOrNull_59esu7$ = get_intOrNull;
  package$json.get_long_59esu7$ = get_long;
  package$json.get_longOrNull_59esu7$ = get_longOrNull;
  package$json.get_double_59esu7$ = get_double;
  package$json.get_doubleOrNull_59esu7$ = get_doubleOrNull;
  package$json.get_float_59esu7$ = get_float;
  package$json.get_floatOrNull_59esu7$ = get_floatOrNull;
  package$json.get_boolean_59esu7$ = get_boolean;
  package$json.get_booleanOrNull_59esu7$ = get_booleanOrNull;
  package$json.get_contentOrNull_59esu7$ = get_contentOrNull;
  package$json.unexpectedJson_puj7f4$ = unexpectedJson;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'] = _;
  package$json.buildJsonObject_s5o6vg$ = buildJsonObject;
  package$json.buildJsonArray_mb52fq$ = buildJsonArray;
  package$json.JsonObjectBuilder = JsonObjectBuilder;
  package$json.putJsonObject_qdwamy$ = putJsonObject;
  package$json.putJsonArray_h6ak7k$ = putJsonArray;
  package$json.put_45j0gm$ = put;
  package$json.put_iet0pv$ = put_0;
  package$json.put_kdidqz$ = put_1;
  package$json.JsonArrayBuilder = JsonArrayBuilder;
  package$json.add_2ifez4$ = add;
  package$json.add_imjofx$ = add_0;
  package$json.add_kl91h1$ = add_1;
  package$json.addJsonObject_d58nnk$ = addJsonObject;
  package$json.addJsonArray_t23uk6$ = addJsonArray;
  package$json.JsonDslMarker = JsonDslMarker;
  Object.defineProperty(package$json, 'JsonElementSerializer', {
    get: JsonElementSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonPrimitiveSerializer', {
    get: JsonPrimitiveSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonNullSerializer', {
    get: JsonNullSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonObjectSerializer', {
    get: JsonObjectSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonArraySerializer', {
    get: JsonArraySerializer_getInstance
  });
  package$json.asJsonDecoder_k984l0$ = asJsonDecoder;
  package$json.asJsonEncoder_vwx09w$ = asJsonEncoder;
  package$json.JsonEncoder = JsonEncoder;
  package$json.get_plain_wq5qm5$ = get_plain;
  package$json.get_unquoted_wq5qm5$ = get_unquoted;
  package$json.get_indented_wq5qm5$ = get_indented;
  package$json.get_nonstrict_wq5qm5$ = get_nonstrict;
  package$json.toJson_9ibeu3$ = toJson;
  package$json.toJson_nvcwwn$ = toJson_0;
  package$json.parseJson_abqhco$ = parseJson;
  package$json.fromJson_9qmq3o$ = fromJson;
  package$json.fromJson_w77oo0$ = fromJson_0;
  package$json.JsonInput = JsonInput;
  package$json.decodeJson_vciiv0$ = decodeJson;
  package$json.JsonOutput = JsonOutput;
  package$json.encodeJson_wj7nfz$ = encodeJson;
  package$json.get_isNull_u3sd3g$ = get_isNull;
  package$json.getPrimitive_mxi5qn$ = getPrimitive;
  package$json.getObject_mxi5qn$ = getObject;
  package$json.getArray_mxi5qn$ = getArray;
  package$json.getPrimitiveOrNull_mxi5qn$ = getPrimitiveOrNull;
  package$json.getObjectOrNull_mxi5qn$ = getObjectOrNull;
  package$json.getArrayOrNull_mxi5qn$ = getArrayOrNull;
  package$json.getAs_rvwv4s$ = getAs;
  package$json.getAsOrNull_rvwv4s$ = getAsOrNull;
  package$json.getPrimitive_xpx153$ = getPrimitive_0;
  package$json.getObject_xpx153$ = getObject_0;
  package$json.getArray_xpx153$ = getArray_0;
  package$json.getPrimitiveOrNull_xpx153$ = getPrimitiveOrNull_0;
  package$json.getObjectOrNull_xpx153$ = getObjectOrNull_0;
  package$json.getArrayOrNull_xpx153$ = getArrayOrNull_0;
  package$json.getAs_ke50pa$ = getAs_0;
  package$json.getAsOrNull_ke50pa$ = getAsOrNull_0;
  package$json.get_primitive_u3sd3g$ = get_primitive;
  package$json.contains_95e8em$ = contains;
  package$json.get_int_u3sd3g$ = get_int_0;
  package$json.get_intOrNull_u3sd3g$ = get_intOrNull_0;
  package$json.get_long_u3sd3g$ = get_long_0;
  package$json.get_longOrNull_u3sd3g$ = get_longOrNull_0;
  package$json.get_double_u3sd3g$ = get_double_0;
  package$json.get_doubleOrNull_u3sd3g$ = get_doubleOrNull_0;
  package$json.get_float_u3sd3g$ = get_float_0;
  package$json.get_floatOrNull_u3sd3g$ = get_floatOrNull_0;
  package$json.get_boolean_u3sd3g$ = get_boolean_0;
  package$json.get_booleanOrNull_u3sd3g$ = get_booleanOrNull_0;
  package$json.get_content_u3sd3g$ = get_content;
  package$json.get_contentOrNull_u3sd3g$ = get_contentOrNull_0;
  package$json.JsonLiteral_s8jyv4$ = JsonLiteral_0;
  package$json.json_s5o6vg$ = json;
  package$json.jsonArray_mb52fq$ = jsonArray;
  package$json.JsonTransformingSerializer_init_1x4at$ = JsonTransformingSerializer_init;
  package$json.JsonTransformingSerializer = JsonTransformingSerializer;
  var package$internal = package$json.internal || (package$json.internal = {});
  package$internal.JsonConf = JsonConf;
  package$internal.JsonException = JsonException;
  package$internal.JsonDecodingException = JsonDecodingException;
  package$internal.JsonDecodingException_f0n09d$ = JsonDecodingException_0;
  package$internal.JsonEncodingException = JsonEncodingException;
  package$internal.JsonDecodingException_kx378j$ = JsonDecodingException_1;
  package$internal.InvalidFloatingPointEncoded_qwibp1$ = InvalidFloatingPointEncoded;
  package$internal.InvalidFloatingPointEncoded_x0xb19$ = InvalidFloatingPointEncoded_0;
  package$internal.InvalidFloatingPointDecoded_x0xb19$ = InvalidFloatingPointDecoded;
  package$internal.throwInvalidFloatingPointDecoded_nyj901$ = throwInvalidFloatingPointDecoded;
  package$internal.UnknownKeyException_wdz5eb$ = UnknownKeyException;
  package$internal.InvalidKeyKindException_jo479d$ = InvalidKeyKindException;
  package$internal.JsonParser = JsonParser;
  Object.defineProperty(package$internal, 'lenientHint_8be2vx$', {
    get: function () {
      return lenientHint;
    }
  });
  Object.defineProperty(package$internal, 'coerceInputValuesHint_8be2vx$', {
    get: function () {
      return coerceInputValuesHint;
    }
  });
  Object.defineProperty(package$internal, 'specialFlowingValuesHint_8be2vx$', {
    get: function () {
      return specialFlowingValuesHint;
    }
  });
  Object.defineProperty(package$internal, 'ignoreUnknownKeysHint_8be2vx$', {
    get: function () {
      return ignoreUnknownKeysHint;
    }
  });
  Object.defineProperty(package$internal, 'allowStructuredMapKeysHint_8be2vx$', {
    get: function () {
      return allowStructuredMapKeysHint;
    }
  });
  Object.defineProperty(package$internal, 'NULL_8be2vx$', {
    get: function () {
      return NULL;
    }
  });
  Object.defineProperty(package$internal, 'COMMA_8be2vx$', {
    get: function () {
      return COMMA;
    }
  });
  Object.defineProperty(package$internal, 'COLON_8be2vx$', {
    get: function () {
      return COLON;
    }
  });
  Object.defineProperty(package$internal, 'BEGIN_OBJ_8be2vx$', {
    get: function () {
      return BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$internal, 'END_OBJ_8be2vx$', {
    get: function () {
      return END_OBJ;
    }
  });
  Object.defineProperty(package$internal, 'BEGIN_LIST_8be2vx$', {
    get: function () {
      return BEGIN_LIST;
    }
  });
  Object.defineProperty(package$internal, 'END_LIST_8be2vx$', {
    get: function () {
      return END_LIST;
    }
  });
  Object.defineProperty(package$internal, 'STRING_8be2vx$', {
    get: function () {
      return STRING;
    }
  });
  Object.defineProperty(package$internal, 'STRING_ESC_8be2vx$', {
    get: function () {
      return STRING_ESC;
    }
  });
  Object.defineProperty(package$internal, 'INVALID_8be2vx$', {
    get: function () {
      return INVALID;
    }
  });
  Object.defineProperty(package$internal, 'UNICODE_ESC_8be2vx$', {
    get: function () {
      return UNICODE_ESC;
    }
  });
  Object.defineProperty(package$internal, 'TC_OTHER_8be2vx$', {
    get: function () {
      return TC_OTHER;
    }
  });
  Object.defineProperty(package$internal, 'TC_STRING_8be2vx$', {
    get: function () {
      return TC_STRING;
    }
  });
  Object.defineProperty(package$internal, 'TC_STRING_ESC_8be2vx$', {
    get: function () {
      return TC_STRING_ESC;
    }
  });
  Object.defineProperty(package$internal, 'TC_WS_8be2vx$', {
    get: function () {
      return TC_WS;
    }
  });
  Object.defineProperty(package$internal, 'TC_COMMA_8be2vx$', {
    get: function () {
      return TC_COMMA;
    }
  });
  Object.defineProperty(package$internal, 'TC_COLON_8be2vx$', {
    get: function () {
      return TC_COLON;
    }
  });
  Object.defineProperty(package$internal, 'TC_BEGIN_OBJ_8be2vx$', {
    get: function () {
      return TC_BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$internal, 'TC_END_OBJ_8be2vx$', {
    get: function () {
      return TC_END_OBJ;
    }
  });
  Object.defineProperty(package$internal, 'TC_BEGIN_LIST_8be2vx$', {
    get: function () {
      return TC_BEGIN_LIST;
    }
  });
  Object.defineProperty(package$internal, 'TC_END_LIST_8be2vx$', {
    get: function () {
      return TC_END_LIST;
    }
  });
  Object.defineProperty(package$internal, 'TC_NULL_8be2vx$', {
    get: function () {
      return TC_NULL;
    }
  });
  Object.defineProperty(package$internal, 'TC_INVALID_8be2vx$', {
    get: function () {
      return TC_INVALID;
    }
  });
  Object.defineProperty(package$internal, 'TC_EOF_8be2vx$', {
    get: function () {
      return TC_EOF;
    }
  });
  Object.defineProperty(package$internal, 'C2TC_8be2vx$', {
    get: function () {
      return C2TC;
    }
  });
  Object.defineProperty(package$internal, 'EscapeCharMappings', {
    get: EscapeCharMappings_getInstance
  });
  package$internal.charToTokenClass_8e8zqy$ = charToTokenClass;
  package$internal.escapeToChar_kcn2v3$ = escapeToChar;
  package$internal.JsonReader = JsonReader;
  package$internal.encodePolymorphically_51w9c5$ = encodePolymorphically;
  package$internal.checkKind_x1ow4c$ = checkKind;
  package$internal.decodeSerializableValuePolymorphic_3uiavc$ = decodeSerializableValuePolymorphic;
  package$internal.PolymorphismValidator = PolymorphismValidator;
  package$internal.StreamingJsonDecoder = StreamingJsonDecoder;
  StreamingJsonEncoder.Composer = StreamingJsonEncoder$Composer;
  package$internal.StreamingJsonEncoder_init_e4t9r6$ = StreamingJsonEncoder_init;
  package$internal.StreamingJsonEncoder = StreamingJsonEncoder;
  package$internal.printQuoted_jigvc$ = printQuoted;
  package$internal.toBooleanStrict_7efafi$ = toBooleanStrict;
  package$internal.toBooleanStrictOrNull_7efafi$ = toBooleanStrictOrNull;
  package$internal.shouldBeQuoted_y4putb$ = shouldBeQuoted;
  package$internal.readJson_ijhaef$ = readJson;
  package$internal.readPolymorphicJson_nnpnh6$ = readPolymorphicJson;
  Object.defineProperty(package$internal, 'updateModeDeprecated_8be2vx$', {
    get: function () {
      return updateModeDeprecated;
    }
  });
  package$internal.getElementIndexOrThrow_luk6xe$ = getElementIndexOrThrow;
  package$internal.writeJson_4dixew$ = writeJson;
  Object.defineProperty(package$internal, 'PRIMITIVE_TAG_8be2vx$', {
    get: function () {
      return PRIMITIVE_TAG;
    }
  });
  Object.defineProperty(WriteMode, 'OBJ', {
    get: WriteMode$OBJ_getInstance
  });
  Object.defineProperty(WriteMode, 'LIST', {
    get: WriteMode$LIST_getInstance
  });
  Object.defineProperty(WriteMode, 'MAP', {
    get: WriteMode$MAP_getInstance
  });
  Object.defineProperty(WriteMode, 'POLY_OBJ', {
    get: WriteMode$POLY_OBJ_getInstance
  });
  package$internal.WriteMode = WriteMode;
  package$internal.switchMode_q3nfcb$ = switchMode;
  package$internal.selectMapMode_clqyd9$ = selectMapMode;
  package$serialization.noImpl = noImpl_0;
  package$serialization.DynamicObjectParser = DynamicObjectParser;
  package$serialization.serialize_9ibeu3$ = serialize;
  package$serialization.decodeFromDynamic_76vv94$ = decodeFromDynamic;
  package$json.decodeFromDynamic_76vv94$ = decodeFromDynamic_1;
  package$serialization.encodeToDynamic_9ibeu3$ = encodeToDynamic;
  package$json.encodeToDynamic_9ibeu3$ = encodeToDynamic_1;
  Object.defineProperty(package$internal, 'MAX_SAFE_INTEGER_8be2vx$', {
    get: function () {
      return MAX_SAFE_INTEGER;
    }
  });
  package$internal.decodeDynamic = decodeDynamic;
  package$internal.encodeToDynamic = encodeDynamic;
  JsonContentPolymorphicSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonDecoder.prototype.beginStructure_24f42q$ = Decoder.prototype.beginStructure_24f42q$;
  JsonDecoder.prototype.beginStructure_jvp2sb$ = Decoder.prototype.beginStructure_jvp2sb$;
  JsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  JsonDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  JsonDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  JsonDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  JsonDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  JsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  JsonDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default;
  JsonDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  JsonDecoder.prototype.decodeSerializableElement_186mnl$ = CompositeDecoder.prototype.decodeSerializableElement_186mnl$;
  JsonDecoder.prototype.decodeSerializableElement_12e8id$$default = CompositeDecoder.prototype.decodeSerializableElement_12e8id$$default;
  JsonDecoder.prototype.updateNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  JsonDecoder.prototype.updateSerializableElement_12e8id$ = CompositeDecoder.prototype.updateSerializableElement_12e8id$;
  JsonDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  JsonDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  JsonElementSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonPrimitiveSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonNullSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonLiteralSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonObjectSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonArraySerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(defer$ObjectLiteral.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(defer$ObjectLiteral.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  JsonEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  JsonEncoder.prototype.beginCollection_m8o8wh$ = Encoder.prototype.beginCollection_m8o8wh$;
  JsonEncoder.prototype.beginStructure_24f42q$ = Encoder.prototype.beginStructure_24f42q$;
  JsonEncoder.prototype.beginStructure_jvp2sb$ = Encoder.prototype.beginStructure_jvp2sb$;
  JsonEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  JsonEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  JsonEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  JsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = CompositeEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  JsonEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  JsonTransformingSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  StreamingJsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = JsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$;
  StreamingJsonDecoder.prototype.updateNullableSerializableValue_exmlbs$ = JsonDecoder.prototype.updateNullableSerializableValue_exmlbs$;
  StreamingJsonDecoder.prototype.updateSerializableValue_19c8k5$ = JsonDecoder.prototype.updateSerializableValue_19c8k5$;
  StreamingJsonDecoder.prototype.decodeCollectionSize_24f42q$ = JsonDecoder.prototype.decodeCollectionSize_24f42q$;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = JsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  StreamingJsonDecoder.prototype.decodeSequentially = JsonDecoder.prototype.decodeSequentially;
  StreamingJsonDecoder.prototype.decodeSerializableElement_186mnl$ = JsonDecoder.prototype.decodeSerializableElement_186mnl$;
  StreamingJsonDecoder.prototype.updateNullableSerializableElement_8viuyw$ = JsonDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  StreamingJsonDecoder.prototype.updateSerializableElement_12e8id$ = JsonDecoder.prototype.updateSerializableElement_12e8id$;
  StreamingJsonEncoder.prototype.beginCollection_szpzho$ = JsonEncoder.prototype.beginCollection_szpzho$;
  StreamingJsonEncoder.prototype.beginCollection_m8o8wh$ = JsonEncoder.prototype.beginCollection_m8o8wh$;
  StreamingJsonEncoder.prototype.encodeNotNullMark = JsonEncoder.prototype.encodeNotNullMark;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_f4686g$ = JsonEncoder.prototype.encodeNullableSerializableValue_f4686g$;
  StreamingJsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = JsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  defaultIndent = '    ';
  defaultDiscriminator = 'type';
  infixToDeprecated = "Infix 'to' operator is deprecated for removal for the favour of 'add'";
  unaryPlusDeprecated = "Unary plus is deprecated for removal for the favour of 'add'";
  message = 'Top-level JSON instances are deprecated for removal in the favour of user-configured one. ' + "You can either use a Json top-level object, configure your own instance  via 'Json {}' builder-like constructor, " + "'Json(JsonConfiguration)' constructor or by tweaking stable configuration 'Json(JsonConfiguration.Stable.copy(prettyPrint = true))'";
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  NULL = 'null';
  COMMA = 44;
  COLON = 58;
  BEGIN_OBJ = 123;
  END_OBJ = 125;
  BEGIN_LIST = 91;
  END_LIST = 93;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  TC_OTHER = 0;
  TC_STRING = 1;
  TC_STRING_ESC = 2;
  TC_WS = 3;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_NULL = 10;
  TC_INVALID = 11;
  TC_EOF = 12;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  var $receiver = new Int8Array(126);
  for (var i = 0; i <= 32; i++) {
    initC2TC($receiver, i, TC_INVALID);
  }
  initC2TC($receiver, 9, TC_WS);
  initC2TC($receiver, 10, TC_WS);
  initC2TC($receiver, 13, TC_WS);
  initC2TC($receiver, 32, TC_WS);
  initC2TC_0($receiver, COMMA, TC_COMMA);
  initC2TC_0($receiver, COLON, TC_COLON);
  initC2TC_0($receiver, BEGIN_OBJ, TC_BEGIN_OBJ);
  initC2TC_0($receiver, END_OBJ, TC_END_OBJ);
  initC2TC_0($receiver, BEGIN_LIST, TC_BEGIN_LIST);
  initC2TC_0($receiver, END_LIST, TC_END_LIST);
  initC2TC_0($receiver, STRING, TC_STRING);
  initC2TC_0($receiver, STRING_ESC, TC_STRING_ESC);
  C2TC = $receiver;
  var $receiver_0 = Kotlin.newArray(128, null);
  for (var c = 0; c <= 31; c++) {
    var c1 = toHexChar(c >> 12);
    var c2 = toHexChar(c >> 8);
    var c3 = toHexChar(c >> 4);
    var c4 = toHexChar(c);
    $receiver_0[c] = '\\' + 'u' + String.fromCharCode(c1) + String.fromCharCode(c2) + String.fromCharCode(c3) + String.fromCharCode(c4);
  }
  $receiver_0[34] = '\\"';
  $receiver_0[92] = '\\\\';
  $receiver_0[9] = '\\t';
  $receiver_0[8] = '\\b';
  $receiver_0[10] = '\\n';
  $receiver_0[13] = '\\r';
  $receiver_0[12] = '\\f';
  ESCAPE_CHARS = $receiver_0;
  updateModeDeprecated = 'Update mode in Decoder is deprecated for removal. ' + 'Update behaviour is now considered an implementation detail of the format that should not concern serializer.';
  PRIMITIVE_TAG = 'primitive';
  parserMessage = "DynamicObjectParser and its 'parse' method were unified with Json operations. " + "Please use Json's 'decodeFromDynamic' extension.";
  serializerMessage = "DynamicObjectSerializer and its 'serialize' method were unified with Json operations. " + "Please use Json's 'encodeToDynamic' extension.";
  MAX_SAFE_INTEGER = L9007199254740991.toNumber();
  Kotlin.defineModule('kotlinx-serialization-kotlinx-serialization-json-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-jsLegacy.js.map
