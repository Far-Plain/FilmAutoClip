var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i2 = 0; i2 < arguments.length; i2++)
        this.define(arguments[i2]);
      this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i2 = 0; i2 < extensions.length; i2++) {
          let ext = extensions[i2];
          if (ext[0] !== "*") {
            if (!force && ext in this._types)
              throw new Error(
                'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
              );
            this._types[ext] = type;
          }
        }
        if (force || !this._extensions[type]) {
          let ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase(), ext = last.replace(/^.*\./, "").toLowerCase(), hasPath = last.length < path.length;
      return (ext.length < last.length - 1 || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      return type = /^\s*([^;\s]*)/.test(type) && RegExp.$1, type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js
var require_other = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js
var require_mime = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => (context, next) => {
  let index = -1;
  return dispatch(0);
  async function dispatch(i2) {
    if (i2 <= index)
      throw new Error("next() called multiple times");
    index = i2;
    let res, isError = !1, handler;
    if (middleware[i2] ? (handler = middleware[i2][0][0], context.req.routeIndex = i2) : handler = i2 === middleware.length && next || void 0, handler)
      try {
        res = await handler(context, () => dispatch(i2 + 1));
      } catch (err) {
        if (err instanceof Error && onError)
          context.error = err, res = await onError(err, context), isError = !0;
        else
          throw err;
      }
    else
      context.finalized === !1 && onNotFound && (res = await onNotFound(context));
    return res && (context.finalized === !1 || isError) && (context.res = res), context;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  /**
   * Creates an instance of `HTTPException`.
   * @param status - HTTP status code for the exception. Defaults to 500.
   * @param options - Additional options for the exception.
   */
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause }), this.res = options?.res, this.status = status;
  }
  /**
   * Returns the response object associated with the exception.
   * If a response object is not provided, a new response is created with the error message and status code.
   * @returns The response object.
   */
  getResponse() {
    return this.res ? new Response(this.res.body, {
      status: this.status,
      headers: this.res.headers
    }) : new Response(this.message, {
      status: this.status
    });
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  let { all = !1, dot = !1 } = options, contentType = (request instanceof HonoRequest ? request.raw.headers : request.headers).get("Content-Type");
  return contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded") ? parseFormData(request, { all, dot }) : {};
};
async function parseFormData(request, options) {
  let formData = await request.formData();
  return formData ? convertFormDataToBodyData(formData, options) : {};
}
function convertFormDataToBodyData(formData, options) {
  let form = /* @__PURE__ */ Object.create(null);
  return formData.forEach((value, key) => {
    options.all || key.endsWith("[]") ? handleParsingAllValues(form, key, value) : form[key] = value;
  }), options.dot && Object.entries(form).forEach(([key, value]) => {
    key.includes(".") && (handleParsingNestedValues(form, key, value), delete form[key]);
  }), form;
}
var handleParsingAllValues = (form, key, value) => {
  form[key] !== void 0 ? Array.isArray(form[key]) ? form[key].push(value) : form[key] = [form[key], value] : key.endsWith("[]") ? form[key] = [value] : form[key] = value;
}, handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form, keys = key.split(".");
  keys.forEach((key2, index) => {
    index === keys.length - 1 ? nestedForm[key2] = value : ((!nestedForm[key2] || typeof nestedForm[key2] != "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) && (nestedForm[key2] = /* @__PURE__ */ Object.create(null)), nestedForm = nestedForm[key2]);
  });
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/url.js
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, tryDecodeURI = (str) => tryDecode(str, decodeURI), getPath = (request) => {
  let url2 = request.url, start = url2.indexOf("/", url2.indexOf(":") + 4), i2 = start;
  for (; i2 < url2.length; i2++) {
    let charCode = url2.charCodeAt(i2);
    if (charCode === 37) {
      let queryIndex = url2.indexOf("?", i2), hashIndex = url2.indexOf("#", i2), end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex), path = url2.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35)
      break;
  }
  return url2.slice(start, i2);
};
var getPathNoStrict = (request) => {
  let result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, mergePath = (base, sub, ...rest) => (rest.length && (sub = mergePath(sub, ...rest)), `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`);
var _decodeURI = (value) => /[%+]/.test(value) ? (value.indexOf("+") !== -1 && (value = value.replace(/\+/g, " ")), value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value) : value, _getQueryParam = (url2, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url2.indexOf("?", 8);
    if (keyIndex2 === -1)
      return;
    for (url2.startsWith(key, keyIndex2 + 1) || (keyIndex2 = url2.indexOf(`&${key}`, keyIndex2 + 1)); keyIndex2 !== -1; ) {
      let trailingKeyCode = url2.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        let valueIndex = keyIndex2 + key.length + 2, endIndex = url2.indexOf("&", valueIndex);
        return _decodeURI(url2.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode))
        return "";
      keyIndex2 = url2.indexOf(`&${key}`, keyIndex2 + 1);
    }
    if (encoded = /[%+]/.test(url2), !encoded)
      return;
  }
  let results = {};
  encoded ??= /[%+]/.test(url2);
  let keyIndex = url2.indexOf("?", 8);
  for (; keyIndex !== -1; ) {
    let nextKeyIndex = url2.indexOf("&", keyIndex + 1), valueIndex = url2.indexOf("=", keyIndex);
    valueIndex > nextKeyIndex && nextKeyIndex !== -1 && (valueIndex = -1);
    let name = url2.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded && (name = _decodeURI(name)), keyIndex = nextKeyIndex, name === "")
      continue;
    let value;
    valueIndex === -1 ? value = "" : (value = url2.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex), encoded && (value = _decodeURI(value))), multiple ? (results[name] && Array.isArray(results[name]) || (results[name] = []), results[name].push(value)) : results[name] ??= value;
  }
  return key ? results[key] : results;
}, getQueryParam = _getQueryParam, getQueryParams = (url2, key) => _getQueryParam(url2, key, !0), decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_), HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request, this.path = path, this.#matchResult = matchResult, this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    let paramKey = this.#matchResult[0][this.routeIndex][1][key], param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    let decoded = {}, keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (let key of keys) {
      let value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      value !== void 0 && (decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value);
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name)
      return this.raw.headers.get(name) ?? void 0;
    let headerData = {};
    return this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    }), headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    let { bodyCache, raw: raw2 } = this, cachedBody = bodyCache[key];
    if (cachedBody)
      return cachedBody;
    let anyCachedKey = Object.keys(bodyCache)[0];
    return anyCachedKey ? bodyCache[anyCachedKey].then((body) => (anyCachedKey === "json" && (body = JSON.stringify(body)), new Response(body)[key]())) : bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
}, raw = (value, callbacks) => {
  let escapedString = new String(value);
  return escapedString.isEscaped = !0, escapedString.callbacks = callbacks, escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  typeof str == "object" && !(str instanceof String) && (str instanceof Promise || (str = str.toString()), str instanceof Promise && (str = await str));
  let callbacks = str.callbacks;
  if (!callbacks?.length)
    return Promise.resolve(str);
  buffer ? buffer[0] += str : buffer = [str];
  let resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, !1, context, buffer))
    ).then(() => buffer[0])
  );
  return preserveCallbacks ? raw(await resStr, callbacks) : resStr;
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8", setDefaultContentType = (contentType, headers) => ({
  "Content-Type": contentType,
  ...headers
}), createResponseInstance = (body, init2) => new Response(body, init2), Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = !1;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req, options && (this.#executionCtx = options.executionCtx, this.env = options.env, this.#notFoundHandler = options.notFoundHandler, this.#path = options.path, this.#matchResult = options.matchResult);
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    return this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult), this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no FetchEvent");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no ExecutionContext");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (let [k, v] of this.#res.headers.entries())
        if (k !== "content-type")
          if (k === "set-cookie") {
            let cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (let cookie of cookies)
              _res.headers.append("set-cookie", cookie);
          } else
            _res.headers.set(k, v);
    }
    this.#res = _res, this.finalized = !0;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => (this.#renderer ??= (content) => this.html(content), this.#renderer(...args));
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    this.finalized && (this.#res = createResponseInstance(this.#res.body, this.#res));
    let headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    value === void 0 ? headers.delete(name) : options?.append ? headers.append(name, value) : headers.set(name, value);
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map(), this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => this.#var ? this.#var.get(key) : void 0;
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    return this.#var ? Object.fromEntries(this.#var) : {};
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg == "object" && "headers" in arg) {
      let argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (let [key, value] of argHeaders)
        key.toLowerCase() === "set-cookie" ? responseHeaders.append(key, value) : responseHeaders.set(key, value);
    }
    if (headers)
      for (let [k, v] of Object.entries(headers))
        if (typeof v == "string")
          responseHeaders.set(k, v);
        else {
          responseHeaders.delete(k);
          for (let v2 of v)
            responseHeaders.append(k, v2);
        }
    let status = typeof arg == "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
    text,
    arg,
    setDefaultContentType(TEXT_PLAIN, headers)
  );
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object2, arg, headers) => this.#newResponse(
    JSON.stringify(object2),
    arg,
    setDefaultContentType("application/json", headers)
  );
  html = (html, arg, headers) => {
    let res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html == "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, !1, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    let locationString = String(location);
    return this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      /[^\x00-\xFF]/.test(locationString) ? encodeURI(locationString) : locationString
    ), this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => (this.#notFoundHandler ??= () => createResponseInstance(), this.#notFoundHandler(this));
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL", METHOD_NAME_ALL_LOWERCASE = "all", METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => c.text("404 Not Found", 404), errorHandler = (err, c) => {
  if ("getResponse" in err) {
    let res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  return console.error(err), c.text("Internal Server Error", 500);
}, Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    [...METHODS, METHOD_NAME_ALL_LOWERCASE].forEach((method) => {
      this[method] = (args1, ...args) => (typeof args1 == "string" ? this.#path = args1 : this.#addRoute(method, this.#path, args1), args.forEach((handler) => {
        this.#addRoute(method, this.#path, handler);
      }), this);
    }), this.on = (method, path, ...handlers) => {
      for (let p of [path].flat()) {
        this.#path = p;
        for (let m of [method].flat())
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
      }
      return this;
    }, this.use = (arg1, ...handlers) => (typeof arg1 == "string" ? this.#path = arg1 : (this.#path = "*", handlers.unshift(arg1)), handlers.forEach((handler) => {
      this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
    }), this);
    let { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict), this.getPath = strict ?? !0 ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    let clone2 = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    return clone2.errorHandler = this.errorHandler, clone2.#notFoundHandler = this.#notFoundHandler, clone2.routes = this.routes, clone2;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    let subApp = this.basePath(path);
    return app2.routes.map((r) => {
      let handler;
      app2.errorHandler === errorHandler ? handler = r.handler : (handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, handler[COMPOSED_HANDLER] = r.handler), subApp.#addRoute(r.method, r.path, handler);
    }), this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    let subApp = this.#clone();
    return subApp._basePath = mergePath(this._basePath, path), subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => (this.errorHandler = handler, this);
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => (this.#notFoundHandler = handler, this);
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest, optionHandler;
    options && (typeof options == "function" ? optionHandler = options : (optionHandler = options.optionHandler, options.replaceRequest === !1 ? replaceRequest = (request) => request : replaceRequest = options.replaceRequest));
    let getOptions = optionHandler ? (c) => {
      let options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      let mergedPath = mergePath(this._basePath, path), pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        let url2 = new URL(request.url);
        return url2.pathname = url2.pathname.slice(pathPrefixLength) || "/", new Request(url2, request);
      };
    })();
    let handler = async (c, next) => {
      let res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res)
        return res;
      await next();
    };
    return this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler), this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase(), path = mergePath(this._basePath, path);
    let r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]), this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error)
      return this.errorHandler(err, c);
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD")
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    let path = this.getPath(request, { env: env2 }), matchResult = this.router.match(method, path), c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    let composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        let context = await composed(c);
        if (!context.finalized)
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => this.#dispatch(request, rest[1], rest[0], request.method);
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => input instanceof Request ? this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx) : (input = input.toString(), this.fetch(
    new Request(
      /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
      requestInit
    ),
    Env,
    executionCtx
  ));
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router/pattern-router/router.js
var emptyParams = /* @__PURE__ */ Object.create(null), PatternRouter = class {
  name = "PatternRouter";
  #routes = [];
  add(method, path, handler) {
    let endsWithWildcard = path.at(-1) === "*";
    endsWithWildcard && (path = path.slice(0, -2)), path.at(-1) === "?" && (path = path.slice(0, -1), this.add(method, path.replace(/\/[^/]+$/, ""), handler));
    let parts = (path.match(/\/?(:\w+(?:{(?:(?:{[\d,]+})|[^}])+})?)|\/?[^\/\?]+/g) || []).map(
      (part) => {
        let match = part.match(/^\/:([^{]+)(?:{(.*)})?/);
        return match ? `/(?<${match[1]}>${match[2] || "[^/]+"})` : part === "/*" ? "/[^/]+" : part.replace(/[.\\+*[^\]$()]/g, "\\$&");
      }
    );
    try {
      this.#routes.push([
        new RegExp(`^${parts.join("")}${endsWithWildcard ? "" : "/?$"}`),
        method,
        handler
      ]);
    } catch {
      throw new UnsupportedPathError();
    }
  }
  match(method, path) {
    let handlers = [];
    for (let i2 = 0, len = this.#routes.length; i2 < len; i2++) {
      let [pattern, routeMethod, handler] = this.#routes[i2];
      if (routeMethod === method || routeMethod === METHOD_NAME_ALL) {
        let match = pattern.exec(path);
        match && handlers.push([handler, match.groups || emptyParams]);
      }
    }
    return [handlers];
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/preset/tiny.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options), this.router = new PatternRouter();
  }
};

// src/workers/local-explorer/explorer.worker.ts
var import_mime3 = __toESM(require_mime());

// src/workers/core/constants.ts
var CorePaths = {
  /** Magic proxy used by getPlatformProxy */
  PLATFORM_PROXY: "/cdn-cgi/local/platform-proxy",
  /** Trigger scheduled event handlers */
  SCHEDULED: "/cdn-cgi/local/scheduled",
  /** Trigger email event handlers */
  EMAIL: "/cdn-cgi/local/email",
  /** Local explorer UI and API */
  EXPLORER: "/cdn-cgi/local/explorer",
  /** Stream video serving endpoint (outside /cdn-cgi/ for tunnel access) */
  STREAM_VIDEO: "/__cf_local/stream",
  /** Local image delivery endpoint (outside /cdn-cgi/ for tunnel access) */
  IMAGE_DELIVERY: "/__cf_local/imagedelivery",
  /** Local Direct Creator Upload completion endpoint (outside /cdn-cgi/ for tunnel access) */
  IMAGE_UPLOAD: "/__cf_local/imageupload",
  /** Public R2 bucket object serving endpoint */
  R2_PUBLIC: "/cdn-cgi/local/r2/public",
  /** S3-compatible API endpoint for local R2 buckets */
  R2_S3: "/cdn-cgi/local/r2/s3"
};
var CoreBindings = {
  SERVICE_LOOPBACK: "MINIFLARE_LOOPBACK",
  SERVICE_USER_ROUTE_PREFIX: "MINIFLARE_USER_ROUTE_",
  SERVICE_USER_FALLBACK: "MINIFLARE_USER_FALLBACK",
  TEXT_CUSTOM_SERVICE: "MINIFLARE_CUSTOM_SERVICE",
  // Backs the Images binding (`env.IMAGES`) — see imagesLocalFetcher.
  IMAGES_BINDING_SERVICE: "MINIFLARE_IMAGES_BINDING_SERVICE",
  // Backs `fetch(url, { cf: { image } })` transforms — see cfImageLocalFetcher.
  IMAGES_FETCH_SERVICE: "MINIFLARE_IMAGES_FETCH_SERVICE",
  TEXT_UPSTREAM_URL: "MINIFLARE_UPSTREAM_URL",
  JSON_CF_BLOB: "CF_BLOB",
  JSON_ROUTES: "MINIFLARE_ROUTES",
  JSON_LOG_LEVEL: "MINIFLARE_LOG_LEVEL",
  DURABLE_OBJECT_NAMESPACE_PROXY: "MINIFLARE_PROXY",
  DATA_PROXY_SECRET: "MINIFLARE_PROXY_SECRET",
  DATA_PROXY_SHARED_SECRET: "MINIFLARE_PROXY_SHARED_SECRET",
  TRIGGER_HANDLERS: "TRIGGER_HANDLERS",
  LOG_REQUESTS: "LOG_REQUESTS",
  STRIP_DISABLE_PRETTY_ERROR: "STRIP_DISABLE_PRETTY_ERROR",
  SERVICE_LOCAL_EXPLORER: "MINIFLARE_LOCAL_EXPLORER",
  EXPLORER_DISK: "MINIFLARE_EXPLORER_DISK",
  JSON_LOCAL_EXPLORER_BINDING_MAP: "LOCAL_EXPLORER_BINDING_MAP",
  JSON_LOCAL_EXPLORER_WORKER_NAMES: "LOCAL_EXPLORER_WORKER_NAMES",
  JSON_EXPLORER_WORKER_OPTS: "MINIFLARE_EXPLORER_WORKER_OPTS",
  SERVICE_CACHE: "MINIFLARE_CACHE",
  SERVICE_DEV_CONTROL: "MINIFLARE_DEV_CONTROL",
  SERVICE_DEV_REGISTRY_PROXY: "MINIFLARE_DEV_REGISTRY_PROXY",
  JSON_TELEMETRY_CONFIG: "MINIFLARE_TELEMETRY_CONFIG",
  DEV_REGISTRY_DEBUG_PORT: "DEV_REGISTRY_DEBUG_PORT",
  DEV_REGISTRY_INSTANCE_ID: "DEV_REGISTRY_INSTANCE_ID",
  SERVICE_STREAM: "MINIFLARE_STREAM",
  SERVICE_IMAGES_DELIVERY: "MINIFLARE_IMAGES_DELIVERY",
  SERVICE_R2_PUBLIC: "MINIFLARE_R2_PUBLIC",
  SERVICE_R2_S3: "MINIFLARE_R2_S3",
  SERVICE_OBSERVABILITY_COLLECTOR: "MINIFLARE_OBSERVABILITY_COLLECTOR",
  JSON_ACCESS_BLOB_PREFIX: "MINIFLARE_ACCESS_BLOB_",
  TEXT_FALLBACK_WORKER_NAME: "MINIFLARE_FALLBACK_WORKER_NAME",
  SERVICE_EMAIL_STORE: "MINIFLARE_EMAIL_STORE",
  // Prefix for the local explorer's direct service bindings to each user
  // worker in this instance to invoke handlers (e.g email()).
  SERVICE_EXPLORER_USER_WORKER_PREFIX: "MINIFLARE_EXPLORER_USER_WORKER_"
};

// src/workers/local-explorer/aggregation.ts
import { env } from "cloudflare:workers";
var EXPLORER_API_PATH = `${CorePaths.EXPLORER}/api`, NO_AGGREGATE_HEADER = "X-Miniflare-Explorer-No-Aggregate";
function getPeerDebugPortAddresses(registry2, selfWorkerNames, selfInstanceId) {
  let selfSet = new Set(selfWorkerNames), addresses = Object.entries(registry2).filter(
    ([name, definition]) => !selfSet.has(name) && definition.instanceId !== selfInstanceId
  ).map(([, def]) => def.debugPortAddress).filter((addr) => typeof addr == "string");
  return [...new Set(addresses)];
}
async function getPeerUrlsIfAggregating(c) {
  if (c.req.raw.headers.has(NO_AGGREGATE_HEADER))
    return [];
  let loopback = c.env.MINIFLARE_LOOPBACK, workerNames = c.env.LOCAL_EXPLORER_WORKER_NAMES, response = await loopback.fetch("http://localhost/core/dev-registry"), registry2 = await response.json();
  return getPeerDebugPortAddresses(
    registry2,
    workerNames,
    response.headers.get("X-Miniflare-Dev-Registry-Instance-Id")
  );
}
function getPeerEntrypoint(peerDebugPortAddress, service) {
  return env.DEV_REGISTRY_DEBUG_PORT.connect(
    peerDebugPortAddress
  ).getEntrypoint(service);
}
async function fetchFromPeer(peerDebugPortAddress, apiPath, init2) {
  try {
    let fetcher = getPeerEntrypoint(peerDebugPortAddress, "core:entry"), url2 = new URL(`http://localhost${EXPLORER_API_PATH}${apiPath}`), response = await fetcher.fetch(url2.toString(), {
      ...init2,
      headers: {
        ...init2?.headers,
        [NO_AGGREGATE_HEADER]: "true",
        Host: "localhost"
      }
    });
    return new Response(response.body, response);
  } catch {
    return null;
  }
}
async function aggregateListResults(c, localResults, apiPath, resultKey) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  if (peerUrls.length === 0)
    return localResults;
  let peerResults = await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, apiPath);
      if (!response?.ok) return [];
      try {
        let data = await response.json();
        if (Array.isArray(data.result))
          return data.result;
        if (resultKey)
          return data.result[resultKey] ?? [];
        throw new Error("unreachable");
      } catch {
        return [];
      }
    })
  );
  return [...localResults, ...peerResults.flat()];
}

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/, validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/, parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1)
    return {};
  let pairs = cookie.trim().split(";"), parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    let valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1)
      continue;
    let cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName))
      continue;
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"') && (cookieValue = cookieValue.slice(1, -1)), validCookieValueRegEx.test(cookieValue) && (parsedCookie[cookieName] = cookieValue.indexOf("%") !== -1 ? tryDecode(cookieValue, decodeURIComponent_) : cookieValue, name))
      break;
  }
  return parsedCookie;
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  let cookie = c.req.raw.headers.get("Cookie");
  if (typeof key == "string") {
    if (!cookie)
      return;
    let finalKey = key;
    return prefix === "secure" ? finalKey = "__Secure-" + key : prefix === "host" && (finalKey = "__Host-" + key), parse(cookie, finalKey)[finalKey];
  }
  return cookie ? parse(cookie) : {};
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => new Response(arrayBuffer, {
  headers: {
    "Content-Type": contentType
  }
}).formData();

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/, multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/, urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/, validator = (target, validationFunc) => async (c, next) => {
  let value = {}, contentType = c.req.header("Content-Type");
  switch (target) {
    case "json":
      if (!contentType || !jsonRegex.test(contentType))
        break;
      try {
        value = await c.req.json();
      } catch {
        let message = "Malformed JSON in request body";
        throw new HTTPException(400, { message });
      }
      break;
    case "form": {
      if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType)))
        break;
      let formData;
      if (c.req.bodyCache.formData)
        formData = await c.req.bodyCache.formData;
      else
        try {
          let arrayBuffer = await c.req.arrayBuffer();
          formData = await bufferToFormData(arrayBuffer, contentType), c.req.bodyCache.formData = formData;
        } catch (e) {
          let message = "Malformed FormData request.";
          throw message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`, new HTTPException(400, { message });
        }
      let form = /* @__PURE__ */ Object.create(null);
      formData.forEach((value2, key) => {
        key.endsWith("[]") ? (form[key] ??= []).push(value2) : Array.isArray(form[key]) ? form[key].push(value2) : Object.hasOwn(form, key) ? form[key] = [form[key], value2] : form[key] = value2;
      }), value = form;
      break;
    }
    case "query":
      value = Object.fromEntries(
        Object.entries(c.req.queries()).map(([k, v]) => v.length === 1 ? [k, v[0]] : [k, v])
      );
      break;
    case "param":
      value = c.req.param();
      break;
    case "header":
      value = c.req.header();
      break;
    case "cookie":
      value = getCookie(c);
      break;
  }
  let res = await validationFunc(value, c);
  return res instanceof Response ? res : (c.req.addValidatedData(target, res), await next());
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/external.js
var external_exports = {};
__export(external_exports, {
  $brand: () => $brand,
  $input: () => $input,
  $output: () => $output,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPreprocess: () => ZodPreprocess,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRealError: () => ZodRealError,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  clone: () => clone,
  codec: () => codec,
  coerce: () => coerce_exports,
  config: () => config,
  core: () => core_exports2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  decode: () => decode2,
  decodeAsync: () => decodeAsync2,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  encode: () => encode2,
  encodeAsync: () => encodeAsync2,
  endsWith: () => _endsWith,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  fromJSONSchema: () => fromJSONSchema,
  function: () => _function,
  getErrorMap: () => getErrorMap,
  globalRegistry: () => globalRegistry,
  gt: () => _gt,
  gte: () => _gte,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  includes: () => _includes,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso_exports,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  length: () => _length,
  literal: () => literal,
  locales: () => locales_exports,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  mac: () => mac2,
  map: () => map,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  meta: () => meta2,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  negative: () => _negative,
  never: () => never,
  nonnegative: () => _nonnegative,
  nonoptional: () => nonoptional,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  overwrite: () => _overwrite,
  parse: () => parse3,
  parseAsync: () => parseAsync2,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  positive: () => _positive,
  prefault: () => prefault,
  preprocess: () => preprocess,
  prettifyError: () => prettifyError,
  promise: () => promise,
  property: () => _property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regex: () => _regex,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeEncode: () => safeEncode2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeParse: () => safeParse2,
  safeParseAsync: () => safeParseAsync2,
  set: () => set,
  setErrorMap: () => setErrorMap,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => _trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  uppercase: () => _uppercase,
  url: () => url,
  util: () => util_exports,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: () => $ZodAny,
  $ZodArray: () => $ZodArray,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodBase64: () => $ZodBase64,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBoolean: () => $ZodBoolean,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCUID: () => $ZodCUID,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCatch: () => $ZodCatch,
  $ZodCheck: () => $ZodCheck,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCodec: () => $ZodCodec,
  $ZodCustom: () => $ZodCustom,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodDate: () => $ZodDate,
  $ZodDefault: () => $ZodDefault,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodE164: () => $ZodE164,
  $ZodEmail: () => $ZodEmail,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEnum: () => $ZodEnum,
  $ZodError: () => $ZodError,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodFile: () => $ZodFile,
  $ZodFunction: () => $ZodFunction,
  $ZodGUID: () => $ZodGUID,
  $ZodIPv4: () => $ZodIPv4,
  $ZodIPv6: () => $ZodIPv6,
  $ZodISODate: () => $ZodISODate,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISOTime: () => $ZodISOTime,
  $ZodIntersection: () => $ZodIntersection,
  $ZodJWT: () => $ZodJWT,
  $ZodKSUID: () => $ZodKSUID,
  $ZodLazy: () => $ZodLazy,
  $ZodLiteral: () => $ZodLiteral,
  $ZodMAC: () => $ZodMAC,
  $ZodMap: () => $ZodMap,
  $ZodNaN: () => $ZodNaN,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNever: () => $ZodNever,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNull: () => $ZodNull,
  $ZodNullable: () => $ZodNullable,
  $ZodNumber: () => $ZodNumber,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodObject: () => $ZodObject,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodOptional: () => $ZodOptional,
  $ZodPipe: () => $ZodPipe,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPreprocess: () => $ZodPreprocess,
  $ZodPromise: () => $ZodPromise,
  $ZodReadonly: () => $ZodReadonly,
  $ZodRealError: () => $ZodRealError,
  $ZodRecord: () => $ZodRecord,
  $ZodRegistry: () => $ZodRegistry,
  $ZodSet: () => $ZodSet,
  $ZodString: () => $ZodString,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodSuccess: () => $ZodSuccess,
  $ZodSymbol: () => $ZodSymbol,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodTransform: () => $ZodTransform,
  $ZodTuple: () => $ZodTuple,
  $ZodType: () => $ZodType,
  $ZodULID: () => $ZodULID,
  $ZodURL: () => $ZodURL,
  $ZodUUID: () => $ZodUUID,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUnion: () => $ZodUnion,
  $ZodUnknown: () => $ZodUnknown,
  $ZodVoid: () => $ZodVoid,
  $ZodXID: () => $ZodXID,
  $ZodXor: () => $ZodXor,
  $brand: () => $brand,
  $constructor: () => $constructor,
  $input: () => $input,
  $output: () => $output,
  Doc: () => Doc,
  JSONSchema: () => json_schema_exports,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  _any: () => _any,
  _array: () => _array,
  _base64: () => _base64,
  _base64url: () => _base64url,
  _bigint: () => _bigint,
  _boolean: () => _boolean,
  _catch: () => _catch,
  _check: () => _check,
  _cidrv4: () => _cidrv4,
  _cidrv6: () => _cidrv6,
  _coercedBigint: () => _coercedBigint,
  _coercedBoolean: () => _coercedBoolean,
  _coercedDate: () => _coercedDate,
  _coercedNumber: () => _coercedNumber,
  _coercedString: () => _coercedString,
  _cuid: () => _cuid,
  _cuid2: () => _cuid2,
  _custom: () => _custom,
  _date: () => _date,
  _decode: () => _decode,
  _decodeAsync: () => _decodeAsync,
  _default: () => _default,
  _discriminatedUnion: () => _discriminatedUnion,
  _e164: () => _e164,
  _email: () => _email,
  _emoji: () => _emoji2,
  _encode: () => _encode,
  _encodeAsync: () => _encodeAsync,
  _endsWith: () => _endsWith,
  _enum: () => _enum,
  _file: () => _file,
  _float32: () => _float32,
  _float64: () => _float64,
  _gt: () => _gt,
  _gte: () => _gte,
  _guid: () => _guid,
  _includes: () => _includes,
  _int: () => _int,
  _int32: () => _int32,
  _int64: () => _int64,
  _intersection: () => _intersection,
  _ipv4: () => _ipv4,
  _ipv6: () => _ipv6,
  _isoDate: () => _isoDate,
  _isoDateTime: () => _isoDateTime,
  _isoDuration: () => _isoDuration,
  _isoTime: () => _isoTime,
  _jwt: () => _jwt,
  _ksuid: () => _ksuid,
  _lazy: () => _lazy,
  _length: () => _length,
  _literal: () => _literal,
  _lowercase: () => _lowercase,
  _lt: () => _lt,
  _lte: () => _lte,
  _mac: () => _mac,
  _map: () => _map,
  _max: () => _lte,
  _maxLength: () => _maxLength,
  _maxSize: () => _maxSize,
  _mime: () => _mime,
  _min: () => _gte,
  _minLength: () => _minLength,
  _minSize: () => _minSize,
  _multipleOf: () => _multipleOf,
  _nan: () => _nan,
  _nanoid: () => _nanoid,
  _nativeEnum: () => _nativeEnum,
  _negative: () => _negative,
  _never: () => _never,
  _nonnegative: () => _nonnegative,
  _nonoptional: () => _nonoptional,
  _nonpositive: () => _nonpositive,
  _normalize: () => _normalize,
  _null: () => _null2,
  _nullable: () => _nullable,
  _number: () => _number,
  _optional: () => _optional,
  _overwrite: () => _overwrite,
  _parse: () => _parse,
  _parseAsync: () => _parseAsync,
  _pipe: () => _pipe,
  _positive: () => _positive,
  _promise: () => _promise,
  _property: () => _property,
  _readonly: () => _readonly,
  _record: () => _record,
  _refine: () => _refine,
  _regex: () => _regex,
  _safeDecode: () => _safeDecode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeEncode: () => _safeEncode,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeParse: () => _safeParse,
  _safeParseAsync: () => _safeParseAsync,
  _set: () => _set,
  _size: () => _size,
  _slugify: () => _slugify,
  _startsWith: () => _startsWith,
  _string: () => _string,
  _stringFormat: () => _stringFormat,
  _stringbool: () => _stringbool,
  _success: () => _success,
  _superRefine: () => _superRefine,
  _symbol: () => _symbol,
  _templateLiteral: () => _templateLiteral,
  _toLowerCase: () => _toLowerCase,
  _toUpperCase: () => _toUpperCase,
  _transform: () => _transform,
  _trim: () => _trim,
  _tuple: () => _tuple,
  _uint32: () => _uint32,
  _uint64: () => _uint64,
  _ulid: () => _ulid,
  _undefined: () => _undefined2,
  _union: () => _union,
  _unknown: () => _unknown,
  _uppercase: () => _uppercase,
  _url: () => _url,
  _uuid: () => _uuid,
  _uuidv4: () => _uuidv4,
  _uuidv6: () => _uuidv6,
  _uuidv7: () => _uuidv7,
  _void: () => _void,
  _xid: () => _xid,
  _xor: () => _xor,
  clone: () => clone,
  config: () => config,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  describe: () => describe,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  extractDefs: () => extractDefs,
  finalize: () => finalize,
  flattenError: () => flattenError,
  formatError: () => formatError,
  globalConfig: () => globalConfig,
  globalRegistry: () => globalRegistry,
  initializeContext: () => initializeContext,
  isValidBase64: () => isValidBase64,
  isValidBase64URL: () => isValidBase64URL,
  isValidJWT: () => isValidJWT,
  locales: () => locales_exports,
  meta: () => meta,
  parse: () => parse2,
  parseAsync: () => parseAsync,
  prettifyError: () => prettifyError,
  process: () => process2,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  toDotPath: () => toDotPath,
  toJSONSchema: () => toJSONSchema,
  treeifyError: () => treeifyError,
  util: () => util_exports,
  version: () => version
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
var _a, NEVER = /* @__PURE__ */ Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init2(inst, def) {
    if (inst._zod || Object.defineProperty(inst, "_zod", {
      value: {
        def,
        constr: _,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), inst._zod.traits.has(name))
      return;
    inst._zod.traits.add(name), initializer3(inst, def);
    let proto = _.prototype, keys = Object.keys(proto);
    for (let i2 = 0; i2 < keys.length; i2++) {
      let k = keys[i2];
      k in inst || (inst[k] = proto[k].bind(inst));
    }
  }
  let Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a3;
    let inst = params?.Parent ? new Definition() : this;
    init2(inst, def), (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    for (let fn of inst._zod.deferred)
      fn();
    return inst;
  }
  return Object.defineProperty(_, "init", { value: init2 }), Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => params?.Parent && inst instanceof params.Parent ? !0 : inst?._zod?.traits?.has(name)
  }), Object.defineProperty(_, "name", { value: name }), _;
}
var $brand = /* @__PURE__ */ Symbol("zod_brand"), $ZodAsyncError = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`), this.name = "ZodEncodeError";
  }
};
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  return newConfig && Object.assign(globalConfig, newConfig), globalConfig;
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  let numericValues = Object.values(entries).filter((v) => typeof v == "number");
  return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  return typeof value == "bigint" ? value.toString() : value;
}
function cached(getter) {
  return {
    get value() {
      {
        let value = getter();
        return Object.defineProperty(this, "value", { value }), value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input == null;
}
function cleanRegex(source) {
  let start = source.startsWith("^") ? 1 : 0, end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  let ratio = val / step, roundedRatio = Math.round(ratio), tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
  return Math.abs(ratio - roundedRatio) < tolerance ? 0 : ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object2, key, getter) {
  let value;
  Object.defineProperty(object2, key, {
    get() {
      if (value !== EVALUATING)
        return value === void 0 && (value = EVALUATING, value = getter()), value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function mergeDefs(...defs) {
  let mergedDescriptors = {};
  for (let def of defs) {
    let descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  return path ? path.reduce((acc, key) => acc?.[key], obj) : obj;
}
function promiseAllObject(promisesObj) {
  let keys = Object.keys(promisesObj), promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    let resolvedObj = {};
    for (let i2 = 0; i2 < keys.length; i2++)
      resolvedObj[keys[i2]] = results[i2];
    return resolvedObj;
  });
}
function randomString(length = 10) {
  let chars = "abcdefghijklmnopqrstuvwxyz", str = "";
  for (let i2 = 0; i2 < length; i2++)
    str += chars[Math.floor(Math.random() * chars.length)];
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data == "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    let F = Function;
    return new F(""), !0;
  } catch {
    return !1;
  }
});
function isPlainObject(o) {
  if (isObject(o) === !1)
    return !1;
  let ctor = o.constructor;
  if (ctor === void 0 || typeof ctor != "function")
    return !0;
  let prot = ctor.prototype;
  return !(isObject(prot) === !1 || Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === !1);
}
function shallowClone(o) {
  return isPlainObject(o) ? { ...o } : Array.isArray(o) ? [...o] : o instanceof Map ? new Map(o) : o instanceof Set ? new Set(o) : o;
}
function numKeys(data) {
  let keyCount = 0;
  for (let key in data)
    Object.prototype.hasOwnProperty.call(data, key) && keyCount++;
  return keyCount;
}
var getParsedType = (data) => {
  let t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(data) ? "array" : data === null ? "null" : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? "promise" : typeof Map < "u" && data instanceof Map ? "map" : typeof Set < "u" && data instanceof Set ? "set" : typeof Date < "u" && data instanceof Date ? "date" : typeof File < "u" && data instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]), primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  let cl = new inst._zod.constr(def ?? inst._zod.def);
  return (!def || params?.parent) && (cl._zod.parent = inst), cl;
}
function normalizeParams(_params) {
  let params = _params;
  if (!params)
    return {};
  if (typeof params == "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  return delete params.message, typeof params.error == "string" ? { ...params, error: () => params.error } : params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      return target ?? (target = getter()), Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      return target ?? (target = getter()), Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      return target ?? (target = getter()), Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      return target ?? (target = getter()), Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      return target ?? (target = getter()), Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      return target ?? (target = getter()), Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      return target ?? (target = getter()), Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  return typeof value == "bigint" ? value.toString() + "n" : typeof value == "string" ? `"${value}"` : `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional");
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  let currDef = schema._zod.def, checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let newShape = {};
      for (let key in mask) {
        if (!(key in currDef.shape))
          throw new Error(`Unrecognized key: "${key}"`);
        mask[key] && (newShape[key] = currDef.shape[key]);
      }
      return assignProp(this, "shape", newShape), newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  let currDef = schema._zod.def, checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let newShape = { ...schema._zod.def.shape };
      for (let key in mask) {
        if (!(key in currDef.shape))
          throw new Error(`Unrecognized key: "${key}"`);
        mask[key] && delete newShape[key];
      }
      return assignProp(this, "shape", newShape), newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to extend: expected a plain object");
  let checks = schema._zod.def.checks;
  if (checks && checks.length > 0) {
    let existingShape = schema._zod.def.shape;
    for (let key in shape)
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let _shape = { ...schema._zod.def.shape, ...shape };
      return assignProp(this, "shape", _shape), _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let _shape = { ...schema._zod.def.shape, ...shape };
      return assignProp(this, "shape", _shape), _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  if (a._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let def = mergeDefs(a._zod.def, {
    get shape() {
      let _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      return assignProp(this, "shape", _shape), _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class2, schema, mask) {
  let checks = schema._zod.def.checks;
  if (checks && checks.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let oldShape = schema._zod.def.shape, shape = { ...oldShape };
      if (mask)
        for (let key in mask) {
          if (!(key in oldShape))
            throw new Error(`Unrecognized key: "${key}"`);
          mask[key] && (shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key]);
        }
      else
        for (let key in oldShape)
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
      return assignProp(this, "shape", shape), shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class2, schema, mask) {
  let def = mergeDefs(schema._zod.def, {
    get shape() {
      let oldShape = schema._zod.def.shape, shape = { ...oldShape };
      if (mask)
        for (let key in mask) {
          if (!(key in shape))
            throw new Error(`Unrecognized key: "${key}"`);
          mask[key] && (shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          }));
        }
      else
        for (let key in oldShape)
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
      return assignProp(this, "shape", shape), shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === !0)
    return !0;
  for (let i2 = startIndex; i2 < x.issues.length; i2++)
    if (x.issues[i2]?.continue !== !0)
      return !0;
  return !1;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === !0)
    return !0;
  for (let i2 = startIndex; i2 < x.issues.length; i2++)
    if (x.issues[i2]?.continue === !1)
      return !0;
  return !1;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a3;
    return (_a3 = iss).path ?? (_a3.path = []), iss.path.unshift(path), iss;
  });
}
function unwrapMessage(message) {
  return typeof message == "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  let message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input", { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
  return rest.path ?? (rest.path = []), rest.message = message, ctx?.reportInput && (rest.input = _input), rest;
}
function getSizableOrigin(input) {
  return input instanceof Set ? "set" : input instanceof Map ? "map" : input instanceof File ? "file" : "unknown";
}
function getLengthableOrigin(input) {
  return Array.isArray(input) ? "array" : typeof input == "string" ? "string" : "unknown";
}
function parsedType(data) {
  let t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "object": {
      if (data === null)
        return "null";
      if (Array.isArray(data))
        return "array";
      let obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor)
        return obj.constructor.name;
    }
  }
  return t;
}
function issue(...args) {
  let [iss, input, inst] = args;
  return typeof iss == "string" ? {
    message: iss,
    code: "custom",
    input,
    inst
  } : { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => Number.isNaN(Number.parseInt(k, 10))).map((el) => el[1]);
}
function base64ToUint8Array(base643) {
  let binaryString = atob(base643), bytes = new Uint8Array(binaryString.length);
  for (let i2 = 0; i2 < binaryString.length; i2++)
    bytes[i2] = binaryString.charCodeAt(i2);
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i2 = 0; i2 < bytes.length; i2++)
    binaryString += String.fromCharCode(bytes[i2]);
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  let base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/"), padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex3) {
  let cleanHex = hex3.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  let bytes = new Uint8Array(cleanHex.length / 2);
  for (let i2 = 0; i2 < cleanHex.length; i2 += 2)
    bytes[i2 / 2] = Number.parseInt(cleanHex.slice(i2, i2 + 2), 16);
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError", Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: !1
  }), Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: !1
  }), inst.message = JSON.stringify(def, jsonStringifyReplacer, 2), Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: !1
  });
}, $ZodError = $constructor("$ZodError", initializer), $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error51, mapper = (issue2) => issue2.message) {
  let fieldErrors = {}, formErrors = [];
  for (let sub of error51.issues)
    sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
  return { formErrors, fieldErrors };
}
function formatError(error51, mapper = (issue2) => issue2.message) {
  let fieldErrors = { _errors: [] }, processError = (error52, path = []) => {
    for (let issue2 of error52.issues)
      if (issue2.code === "invalid_union" && issue2.errors.length)
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      else if (issue2.code === "invalid_key")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else if (issue2.code === "invalid_element")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else {
        let fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0)
          fieldErrors._errors.push(mapper(issue2));
        else {
          let curr = fieldErrors, i2 = 0;
          for (; i2 < fullpath.length; ) {
            let el = fullpath[i2];
            i2 === fullpath.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue2))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i2++;
          }
        }
      }
  };
  return processError(error51), fieldErrors;
}
function treeifyError(error51, mapper = (issue2) => issue2.message) {
  let result = { errors: [] }, processError = (error52, path = []) => {
    var _a3, _b;
    for (let issue2 of error52.issues)
      if (issue2.code === "invalid_union" && issue2.errors.length)
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      else if (issue2.code === "invalid_key")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else if (issue2.code === "invalid_element")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else {
        let fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result, i2 = 0;
        for (; i2 < fullpath.length; ) {
          let el = fullpath[i2], terminal = i2 === fullpath.length - 1;
          typeof el == "string" ? (curr.properties ?? (curr.properties = {}), (_a3 = curr.properties)[el] ?? (_a3[el] = { errors: [] }), curr = curr.properties[el]) : (curr.items ?? (curr.items = []), (_b = curr.items)[el] ?? (_b[el] = { errors: [] }), curr = curr.items[el]), terminal && curr.errors.push(mapper(issue2)), i2++;
        }
      }
  };
  return processError(error51), result;
}
function toDotPath(_path) {
  let segs = [], path = _path.map((seg) => typeof seg == "object" ? seg.key : seg);
  for (let seg of path)
    typeof seg == "number" ? segs.push(`[${seg}]`) : typeof seg == "symbol" ? segs.push(`[${JSON.stringify(String(seg))}]`) : /[^\w$]/.test(seg) ? segs.push(`[${JSON.stringify(seg)}]`) : (segs.length && segs.push("."), segs.push(seg));
  return segs.join("");
}
function prettifyError(error51) {
  let lines = [], issues = [...error51.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (let issue2 of issues)
    lines.push(`\u2716 ${issue2.message}`), issue2.path?.length && lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
  return lines.join(`
`);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  let ctx = _ctx ? { ..._ctx, async: !1 } : { async: !1 }, result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    throw new $ZodAsyncError();
  if (result.issues.length) {
    let e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    throw captureStackTrace(e, _params?.callee), e;
  }
  return result.value;
}, parse2 = /* @__PURE__ */ _parse($ZodRealError), _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  let ctx = _ctx ? { ..._ctx, async: !0 } : { async: !0 }, result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise && (result = await result), result.issues.length) {
    let e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    throw captureStackTrace(e, params?.callee), e;
  }
  return result.value;
}, parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError), _safeParse = (_Err) => (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, async: !1 } : { async: !1 }, result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    throw new $ZodAsyncError();
  return result.issues.length ? {
    success: !1,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: !0, data: result.value };
}, safeParse = /* @__PURE__ */ _safeParse($ZodRealError), _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, async: !0 } : { async: !0 }, result = schema._zod.run({ value, issues: [] }, ctx);
  return result instanceof Promise && (result = await result), result.issues.length ? {
    success: !1,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: !0, data: result.value };
}, safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError), _encode = (_Err) => (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
}, encode = /* @__PURE__ */ _encode($ZodRealError), _decode = (_Err) => (schema, value, _ctx) => _parse(_Err)(schema, value, _ctx), decode = /* @__PURE__ */ _decode($ZodRealError), _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
}, encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError), _decodeAsync = (_Err) => async (schema, value, _ctx) => _parseAsync(_Err)(schema, value, _ctx), decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError), _safeEncode = (_Err) => (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
}, safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError), _safeDecode = (_Err) => (schema, value, _ctx) => _safeParse(_Err)(schema, value, _ctx), safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError), _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
}, safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError), _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => _safeParseAsync(_Err)(schema, value, _ctx), safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  httpProtocol: () => httpProtocol,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
var cuid = /^[cC][0-9a-z]{6,}$/, cuid2 = /^[0-9a-z]+$/, ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, xid = /^[0-9a-vA-V]{20}$/, ksuid = /^[A-Za-z0-9]{27}$/, nanoid = /^[a-zA-Z0-9_-]{21}$/, duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uuid = (version2) => version2 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, uuid4 = /* @__PURE__ */ uuid(4), uuid6 = /* @__PURE__ */ uuid(6), uuid7 = /* @__PURE__ */ uuid(7), email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, idnEmail = unicodeEmail, browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, _emoji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, mac = (delimiter) => {
  let escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
}, cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, base64url = /^[A-Za-z0-9_-]*$/, hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, httpProtocol = /^https?$/, e164 = /^\+[1-9]\d{6,14}$/, dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  let hhmm = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof args.precision == "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  let time3 = timeSource({ precision: args.precision }), opts = ["Z"];
  args.local && opts.push(""), args.offset && opts.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let timeRegex = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  let regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${regex}$`);
}, bigint = /^-?\d+n?$/, integer = /^-?\d+$/, number = /^-?\d+(?:\.\d+)?$/, boolean = /^(?:true|false)$/i, _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/, uppercase = /^[^a-z]*$/, hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/, md5_base64 = /* @__PURE__ */ fixedBase64(22, "=="), md5_base64url = /* @__PURE__ */ fixedBase64url(22), sha1_hex = /^[0-9a-fA-F]{40}$/, sha1_base64 = /* @__PURE__ */ fixedBase64(27, "="), sha1_base64url = /* @__PURE__ */ fixedBase64url(27), sha256_hex = /^[0-9a-fA-F]{64}$/, sha256_base64 = /* @__PURE__ */ fixedBase64(43, "="), sha256_base64url = /* @__PURE__ */ fixedBase64url(43), sha384_hex = /^[0-9a-fA-F]{96}$/, sha384_base64 = /* @__PURE__ */ fixedBase64(64, ""), sha384_base64url = /* @__PURE__ */ fixedBase64url(64), sha512_hex = /^[0-9a-fA-F]{128}$/, sha512_base64 = /* @__PURE__ */ fixedBase64(86, "=="), sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a3;
  inst._zod ?? (inst._zod = {}), inst._zod.def = def, (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
}), numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  let origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag, curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    def.value < curr && (def.inclusive ? bag.maximum = def.value : bag.exclusiveMaximum = def.value);
  }), inst._zod.check = (payload) => {
    (def.inclusive ? payload.value <= def.value : payload.value < def.value) || payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value == "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  let origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag, curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    def.value > curr && (def.inclusive ? bag.minimum = def.value : bag.exclusiveMinimum = def.value);
  }), inst._zod.check = (payload) => {
    (def.inclusive ? payload.value >= def.value : payload.value > def.value) || payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value == "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def), inst._zod.onattach.push((inst2) => {
    var _a3;
    (_a3 = inst2._zod.bag).multipleOf ?? (_a3.multipleOf = def.value);
  }), inst._zod.check = (payload) => {
    if (typeof payload.value != typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof payload.value == "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) || payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def), def.format = def.format || "float64";
  let isInt = def.format?.includes("int"), origin = isInt ? "int" : "number", [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.format = def.format, bag.minimum = minimum, bag.maximum = maximum, isInt && (bag.pattern = integer);
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: !1,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        input > 0 ? payload.issues.push({
          input,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          inclusive: !0,
          continue: !def.abort
        }) : payload.issues.push({
          input,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          inclusive: !0,
          continue: !def.abort
        });
        return;
      }
    }
    input < minimum && payload.issues.push({
      origin: "number",
      input,
      code: "too_small",
      minimum,
      inclusive: !0,
      inst,
      continue: !def.abort
    }), input > maximum && payload.issues.push({
      origin: "number",
      input,
      code: "too_big",
      maximum,
      inclusive: !0,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  let [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.format = def.format, bag.minimum = minimum, bag.maximum = maximum;
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    input < minimum && payload.issues.push({
      origin: "bigint",
      input,
      code: "too_small",
      minimum,
      inclusive: !0,
      inst,
      continue: !def.abort
    }), input > maximum && payload.issues.push({
      origin: "bigint",
      input,
      code: "too_big",
      maximum,
      inclusive: !0,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    def.maximum < curr && (inst2._zod.bag.maximum = def.maximum);
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    input.size <= def.maximum || payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    def.minimum > curr && (inst2._zod.bag.minimum = def.minimum);
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    input.size >= def.minimum || payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.size !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.minimum = def.size, bag.maximum = def.size, bag.size = def.size;
  }), inst._zod.check = (payload) => {
    let input = payload.value, size = input.size;
    if (size === def.size)
      return;
    let tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: !0,
      exact: !0,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    def.maximum < curr && (inst2._zod.bag.maximum = def.maximum);
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    if (input.length <= def.maximum)
      return;
    let origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    def.minimum > curr && (inst2._zod.bag.minimum = def.minimum);
  }), inst._zod.check = (payload) => {
    let input = payload.value;
    if (input.length >= def.minimum)
      return;
    let origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    let val = payload.value;
    return !nullish(val) && val.length !== void 0;
  }), inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.minimum = def.length, bag.maximum = def.length, bag.length = def.length;
  }), inst._zod.check = (payload) => {
    let input = payload.value, length = input.length;
    if (length === def.length)
      return;
    let origin = getLengthableOrigin(input), tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: !0,
      exact: !0,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a3, _b;
  $ZodCheck.init(inst, def), inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.format = def.format, def.pattern && (bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(def.pattern));
  }), def.pattern ? (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      ...def.pattern ? { pattern: def.pattern.toString() } : {},
      inst,
      continue: !def.abort
    });
  }) : (_b = inst._zod).check ?? (_b.check = () => {
  });
}), $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def), inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  let escapedRegex = escapeRegex(def.includes), pattern = new RegExp(typeof def.position == "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern, inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = (payload) => {
    payload.value.includes(def.includes, def.position) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  let pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern), inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = (payload) => {
    payload.value.startsWith(def.prefix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  let pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern), inst._zod.onattach.push((inst2) => {
    let bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set()), bag.patterns.add(pattern);
  }), inst._zod.check = (payload) => {
    payload.value.endsWith(def.suffix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  result.issues.length && payload.issues.push(...prefixIssues(property, result.issues));
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def), inst._zod.check = (payload) => {
    let result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise)
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    handleCheckPropertyResult(result, payload, def.property);
  };
}), $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  let mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  }), inst._zod.check = (payload) => {
    mimeSet.has(payload.value.type) || payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def), inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = []) {
    this.content = [], this.indent = 0, this && (this.args = args);
  }
  indented(fn) {
    this.indent += 1, fn(this), this.indent -= 1;
  }
  write(arg) {
    if (typeof arg == "function") {
      arg(this, { execution: "sync" }), arg(this, { execution: "async" });
      return;
    }
    let lines = arg.split(`
`).filter((x) => x), minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length)), dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (let line of dedented)
      this.content.push(line);
  }
  compile() {
    let F = Function, args = this?.args, lines = [...(this?.content ?? [""]).map((x) => `  ${x}`)];
    return new F(...args, lines.join(`
`));
  }
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 4,
  patch: 3
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a3;
  inst ?? (inst = {}), inst._zod.def = def, inst._zod.bag = inst._zod.bag || {}, inst._zod.version = version;
  let checks = [...inst._zod.def.checks ?? []];
  inst._zod.traits.has("$ZodCheck") && checks.unshift(inst);
  for (let ch of checks)
    for (let fn of ch._zod.onattach)
      fn(inst);
  if (checks.length === 0)
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []), inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  else {
    let runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload), asyncResult;
      for (let ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload) || !ch._zod.def.when(payload))
            continue;
        } else if (isAborted)
          continue;
        let currLen = payload.issues.length, _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === !1)
          throw new $ZodAsyncError();
        if (asyncResult || _ instanceof Promise)
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _, payload.issues.length !== currLen && (isAborted || (isAborted = aborted(payload, currLen)));
          });
        else {
          if (payload.issues.length === currLen)
            continue;
          isAborted || (isAborted = aborted(payload, currLen));
        }
      }
      return asyncResult ? asyncResult.then(() => payload) : payload;
    }, handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary))
        return canary.aborted = !0, canary;
      let checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === !1)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks)
        return inst._zod.parse(payload, ctx);
      if (ctx.direction === "backward") {
        let canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: !0 });
        return canary instanceof Promise ? canary.then((canary2) => handleCanaryResult(canary2, payload, ctx)) : handleCanaryResult(canary, payload, ctx);
      }
      let result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === !1)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        let r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag), inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch {
      }
    return typeof payload.value == "string" || payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def), $ZodString.init(inst, def);
}), $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid), $ZodStringFormat.init(inst, def);
}), $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    let v = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
}), $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email), $ZodStringFormat.init(inst, def);
}), $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    try {
      let trimmed = payload.value.trim();
      if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      let url2 = new URL(trimmed);
      def.hostname && (def.hostname.lastIndex = 0, def.hostname.test(url2.hostname) || payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: def.hostname.source,
        input: payload.value,
        inst,
        continue: !def.abort
      })), def.protocol && (def.protocol.lastIndex = 0, def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol) || payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: def.protocol.source,
        input: payload.value,
        inst,
        continue: !def.abort
      })), def.normalize ? payload.value = url2.href : payload.value = trimmed;
      return;
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji()), $ZodStringFormat.init(inst, def);
}), $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid), $ZodStringFormat.init(inst, def);
}), $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid), $ZodStringFormat.init(inst, def);
}), $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2), $ZodStringFormat.init(inst, def);
}), $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid), $ZodStringFormat.init(inst, def);
}), $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid), $ZodStringFormat.init(inst, def);
}), $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid), $ZodStringFormat.init(inst, def);
}), $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date), $ZodStringFormat.init(inst, def);
}), $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration), $ZodStringFormat.init(inst, def);
}), $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "ipv4";
}), $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "ipv6", inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter)), $ZodStringFormat.init(inst, def), inst._zod.bag.format = "mac";
}), $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4), $ZodStringFormat.init(inst, def);
}), $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6), $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    let parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error();
      let [address, prefix] = parts;
      if (!prefix)
        throw new Error();
      let prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return !0;
  if (/\s/.test(data) || data.length % 4 !== 0)
    return !1;
  try {
    return atob(data), !0;
  } catch {
    return !1;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64), $ZodStringFormat.init(inst, def), inst._zod.bag.contentEncoding = "base64", inst._zod.check = (payload) => {
    isValidBase64(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return !1;
  let base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/"), padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url), $ZodStringFormat.init(inst, def), inst._zod.bag.contentEncoding = "base64url", inst._zod.check = (payload) => {
    isValidBase64URL(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164), $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    let tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return !1;
    let [header] = tokensParts;
    if (!header)
      return !1;
    let parsedHeader = JSON.parse(atob(header));
    return !("typ" in parsedHeader && parsedHeader?.typ !== "JWT" || !parsedHeader.alg || algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm));
  } catch {
    return !1;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidJWT(payload.value, def.alg) || payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    def.fn(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = inst._zod.bag.pattern ?? number, inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch {
      }
    let input = payload.value;
    if (typeof input == "number" && !Number.isNaN(input) && Number.isFinite(input))
      return payload;
    let received = typeof input == "number" ? Number.isNaN(input) ? "NaN" : Number.isFinite(input) ? void 0 : "Infinity" : void 0;
    return payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    }), payload;
  };
}), $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def), $ZodNumber.init(inst, def);
}), $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = boolean, inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = !!payload.value;
      } catch {
      }
    let input = payload.value;
    return typeof input == "boolean" || payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = bigint, inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch {
      }
    return typeof payload.value == "bigint" || payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def), $ZodBigInt.init(inst, def);
}), $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return typeof input == "symbol" || payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = _undefined, inst._zod.values = /* @__PURE__ */ new Set([void 0]), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return typeof input > "u" || payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = _null, inst._zod.values = /* @__PURE__ */ new Set([null]), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return input === null || payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload) => payload;
}), $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload) => payload;
}), $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => (payload.issues.push({
    expected: "never",
    code: "invalid_type",
    input: payload.value,
    inst
  }), payload);
}), $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return typeof input > "u" || payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = new Date(payload.value);
      } catch {
      }
    let input = payload.value, isDate = input instanceof Date;
    return isDate && !Number.isNaN(input.getTime()) || payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    }), payload;
  };
});
function handleArrayResult(result, final, index) {
  result.issues.length && final.issues.push(...prefixIssues(index, result.issues)), final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!Array.isArray(input))
      return payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = Array(input.length);
    let proms = [];
    for (let i2 = 0; i2 < input.length; i2++) {
      let item = input[i2], result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      result instanceof Promise ? proms.push(result.then((result2) => handleArrayResult(result2, payload, i2))) : handleArrayResult(result, payload, i2);
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
  let isPresent = key in input;
  if (result.issues.length) {
    if (isOptionalIn && isOptionalOut && !isPresent)
      return;
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && !isOptionalIn) {
    result.issues.length || final.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [key]
    });
    return;
  }
  result.value === void 0 ? isPresent && (final.value[key] = void 0) : final.value[key] = result.value;
}
function normalizeDef(def) {
  let keys = Object.keys(def.shape);
  for (let k of keys)
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
  let okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  let unrecognized = [], keySet = def.keySet, _catchall = def.catchall._zod, t = _catchall.def.type, isOptionalIn = _catchall.optin === "optional", isOptionalOut = _catchall.optout === "optional";
  for (let key in input) {
    if (key === "__proto__" || keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    let r = _catchall.run({ value: input[key], issues: [] }, ctx);
    r instanceof Promise ? proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut))) : handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
  }
  return unrecognized.length && payload.issues.push({
    code: "unrecognized_keys",
    keys: unrecognized,
    input,
    inst
  }), proms.length ? Promise.all(proms).then(() => payload) : payload;
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  if ($ZodType.init(inst, def), !Object.getOwnPropertyDescriptor(def, "shape")?.get) {
    let sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        let newSh = { ...sh };
        return Object.defineProperty(def, "shape", {
          value: newSh
        }), newSh;
      }
    });
  }
  let _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    let shape = def.shape, propValues = {};
    for (let key in shape) {
      let field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (let v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  let isObject2 = isObject, catchall = def.catchall, value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    let input = payload.value;
    if (!isObject2(input))
      return payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = {};
    let proms = [], shape = value.shape;
    for (let key of value.keys) {
      let el = shape[key], isOptionalIn = el._zod.optin === "optional", isOptionalOut = el._zod.optout === "optional", r = el._zod.run({ value: input[key], issues: [] }, ctx);
      r instanceof Promise ? proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut))) : handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
    }
    return catchall ? handleCatchall(proms, input, payload, ctx, _normalized.value, inst) : proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
}), $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  let superParse = inst._zod.parse, _normalized = cached(() => normalizeDef(def)), generateFastpass = (shape) => {
    let doc = new Doc(["shape", "payload", "ctx"]), normalized = _normalized.value, parseStr = (key) => {
      let k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write("const input = payload.value;");
    let ids = /* @__PURE__ */ Object.create(null), counter = 0;
    for (let key of normalized.keys)
      ids[key] = `key_${counter++}`;
    doc.write("const newResult = {};");
    for (let key of normalized.keys) {
      let id = ids[key], k = esc(key), schema = shape[key], isOptionalIn = schema?._zod?.optin === "optional", isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`), isOptionalIn && isOptionalOut ? doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `) : isOptionalIn ? doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `) : doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
    }
    doc.write("payload.value = newResult;"), doc.write("return payload;");
    let fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  }, fastpass, isObject2 = isObject, jit = !globalConfig.jitless, fastEnabled = jit && allowsEval.value, catchall = def.catchall, value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    let input = payload.value;
    return isObject2(input) ? jit && fastEnabled && ctx?.async === !1 && ctx.jitless !== !0 ? (fastpass || (fastpass = generateFastpass(def.shape)), payload = fastpass(payload, ctx), catchall ? handleCatchall([], input, payload, ctx, value, inst) : payload) : superParse(payload, ctx) : (payload.issues.push({
      expected: "object",
      code: "invalid_type",
      input,
      inst
    }), payload);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (let result of results)
    if (result.issues.length === 0)
      return final.value = result.value, final;
  let nonaborted = results.filter((r) => !aborted(r));
  return nonaborted.length === 1 ? (final.value = nonaborted[0].value, nonaborted[0]) : (final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  }), final);
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values))
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
  }), defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      let patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
  });
  let first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first)
      return first(payload, ctx);
    let async = !1, results = [];
    for (let option of def.options) {
      let result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise)
        results.push(result), async = !0;
      else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    return async ? Promise.all(results).then((results2) => handleUnionResults(results2, payload, inst, ctx)) : handleUnionResults(results, payload, inst, ctx);
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  let successes = results.filter((r) => r.issues.length === 0);
  return successes.length === 1 ? (final.value = successes[0].value, final) : (successes.length === 0 ? final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  }) : final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: [],
    inclusive: !1
  }), final);
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def), def.inclusive = !1;
  let first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first)
      return first(payload, ctx);
    let async = !1, results = [];
    for (let option of def.options) {
      let result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      result instanceof Promise ? (results.push(result), async = !0) : results.push(result);
    }
    return async ? Promise.all(results).then((results2) => handleExclusiveUnionResults(results2, payload, inst, ctx)) : handleExclusiveUnionResults(results, payload, inst, ctx);
  };
}), $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = !1, $ZodUnion.init(inst, def);
  let _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    let propValues = {};
    for (let option of def.options) {
      let pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (let [k, v] of Object.entries(pv)) {
        propValues[k] || (propValues[k] = /* @__PURE__ */ new Set());
        for (let val of v)
          propValues[k].add(val);
      }
    }
    return propValues;
  });
  let disc = cached(() => {
    let opts = def.options, map2 = /* @__PURE__ */ new Map();
    for (let o of opts) {
      let values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (let v of values) {
        if (map2.has(v))
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        map2.set(v, o);
      }
    }
    return map2;
  });
  inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!isObject(input))
      return payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      }), payload;
    let opt = disc.value.get(input?.[def.discriminator]);
    return opt ? opt._zod.run(payload, ctx) : def.unionFallback || ctx.direction === "backward" ? _super(payload, ctx) : (payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()),
      input,
      path: [def.discriminator],
      inst
    }), payload);
  };
}), $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value, left = def.left._zod.run({ value: input, issues: [] }, ctx), right = def.right._zod.run({ value: input, issues: [] }, ctx);
    return left instanceof Promise || right instanceof Promise ? Promise.all([left, right]).then(([left2, right2]) => handleIntersectionResults(payload, left2, right2)) : handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b)
    return { valid: !0, data: a };
  if (a instanceof Date && b instanceof Date && +a == +b)
    return { valid: !0, data: a };
  if (isPlainObject(a) && isPlainObject(b)) {
    let bKeys = Object.keys(b), sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    for (let key of sharedKeys) {
      let sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return {
          valid: !1,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return { valid: !1, mergeErrorPath: [] };
    let newArray = [];
    for (let index = 0; index < a.length; index++) {
      let itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return {
          valid: !1,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  let unrecKeys = /* @__PURE__ */ new Map(), unrecIssue;
  for (let iss of left.issues)
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (let k of iss.keys)
        unrecKeys.has(k) || unrecKeys.set(k, {}), unrecKeys.get(k).l = !0;
    } else
      result.issues.push(iss);
  for (let iss of right.issues)
    if (iss.code === "unrecognized_keys")
      for (let k of iss.keys)
        unrecKeys.has(k) || unrecKeys.set(k, {}), unrecKeys.get(k).r = !0;
    else
      result.issues.push(iss);
  let bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue && result.issues.push({ ...unrecIssue, keys: bothKeys }), aborted(result))
    return result;
  let merged = mergeValues(left.value, right.value);
  if (!merged.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  return result.value = merged.data, result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  let items = def.items;
  inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!Array.isArray(input))
      return payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      }), payload;
    payload.value = [];
    let proms = [], optinStart = getTupleOptStart(items, "optin"), optoutStart = getTupleOptStart(items, "optout");
    if (!def.rest) {
      if (input.length < optinStart)
        return payload.issues.push({
          code: "too_small",
          minimum: optinStart,
          inclusive: !0,
          input,
          inst,
          origin: "array"
        }), payload;
      input.length > items.length && payload.issues.push({
        code: "too_big",
        maximum: items.length,
        inclusive: !0,
        input,
        inst,
        origin: "array"
      });
    }
    let itemResults = new Array(items.length);
    for (let i2 = 0; i2 < items.length; i2++) {
      let r = items[i2]._zod.run({ value: input[i2], issues: [] }, ctx);
      r instanceof Promise ? proms.push(r.then((rr) => {
        itemResults[i2] = rr;
      })) : itemResults[i2] = r;
    }
    if (def.rest) {
      let i2 = items.length - 1, rest = input.slice(items.length);
      for (let el of rest) {
        i2++;
        let result = def.rest._zod.run({ value: el, issues: [] }, ctx);
        result instanceof Promise ? proms.push(result.then((r) => handleTupleResult(r, payload, i2))) : handleTupleResult(result, payload, i2);
      }
    }
    return proms.length ? Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart)) : handleTupleResults(itemResults, payload, items, input, optoutStart);
  };
});
function getTupleOptStart(items, key) {
  for (let i2 = items.length - 1; i2 >= 0; i2--)
    if (items[i2]._zod[key] !== "optional")
      return i2 + 1;
  return 0;
}
function handleTupleResult(result, final, index) {
  result.issues.length && final.issues.push(...prefixIssues(index, result.issues)), final.value[index] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
  for (let i2 = 0; i2 < items.length; i2++) {
    let r = itemResults[i2], isPresent = i2 < input.length;
    if (r.issues.length) {
      if (!isPresent && i2 >= optoutStart) {
        final.value.length = i2;
        break;
      }
      final.issues.push(...prefixIssues(i2, r.issues));
    }
    final.value[i2] = r.value;
  }
  for (let i2 = final.value.length - 1; i2 >= input.length && (items[i2]._zod.optout === "optional" && final.value[i2] === void 0); i2--)
    final.value.length = i2;
  return final;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!isPlainObject(input))
      return payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      }), payload;
    let proms = [], values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      let recordKeys = /* @__PURE__ */ new Set();
      for (let key of values)
        if (typeof key == "string" || typeof key == "number" || typeof key == "symbol") {
          recordKeys.add(typeof key == "number" ? key.toString() : key);
          let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          let outKey = keyResult.value, result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          result instanceof Promise ? proms.push(result.then((result2) => {
            result2.issues.length && payload.issues.push(...prefixIssues(key, result2.issues)), payload.value[outKey] = result2.value;
          })) : (result.issues.length && payload.issues.push(...prefixIssues(key, result.issues)), payload.value[outKey] = result.value);
        }
      let unrecognized;
      for (let key in input)
        recordKeys.has(key) || (unrecognized = unrecognized ?? [], unrecognized.push(key));
      unrecognized && unrecognized.length > 0 && payload.issues.push({
        code: "unrecognized_keys",
        input,
        inst,
        keys: unrecognized
      });
    } else {
      payload.value = {};
      for (let key of Reflect.ownKeys(input)) {
        if (key === "__proto__" || !Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof key == "string" && number.test(key) && keyResult.issues.length) {
          let retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          retryResult.issues.length === 0 && (keyResult = retryResult);
        }
        if (keyResult.issues.length) {
          def.mode === "loose" ? payload.value[key] = input[key] : payload.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
            input: key,
            path: [key],
            inst
          });
          continue;
        }
        let result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        result instanceof Promise ? proms.push(result.then((result2) => {
          result2.issues.length && payload.issues.push(...prefixIssues(key, result2.issues)), payload.value[keyResult.value] = result2.value;
        })) : (result.issues.length && payload.issues.push(...prefixIssues(key, result.issues)), payload.value[keyResult.value] = result.value);
      }
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
}), $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!(input instanceof Map))
      return payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      }), payload;
    let proms = [];
    payload.value = /* @__PURE__ */ new Map();
    for (let [key, value] of input) {
      let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx), valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      keyResult instanceof Promise || valueResult instanceof Promise ? proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
        handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
      })) : handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  keyResult.issues.length && (propertyKeyTypes.has(typeof key) ? final.issues.push(...prefixIssues(key, keyResult.issues)) : final.issues.push({
    code: "invalid_key",
    origin: "map",
    input,
    inst,
    issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
  })), valueResult.issues.length && (propertyKeyTypes.has(typeof key) ? final.issues.push(...prefixIssues(key, valueResult.issues)) : final.issues.push({
    origin: "map",
    code: "invalid_element",
    input,
    inst,
    key,
    issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
  })), final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!(input instanceof Set))
      return payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      }), payload;
    let proms = [];
    payload.value = /* @__PURE__ */ new Set();
    for (let item of input) {
      let result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      result instanceof Promise ? proms.push(result.then((result2) => handleSetResult(result2, payload))) : handleSetResult(result, payload);
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
});
function handleSetResult(result, final) {
  result.issues.length && final.issues.push(...result.issues), final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  let values = getEnumValues(def.entries), valuesSet = new Set(values);
  inst._zod.values = valuesSet, inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o == "string" ? escapeRegex(o) : o.toString()).join("|")})$`), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return valuesSet.has(input) || payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    }), payload;
  };
}), $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  if ($ZodType.init(inst, def), def.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  let values = new Set(def.values);
  inst._zod.values = values, inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o == "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return values.has(input) || payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    }), payload;
  };
}), $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return input instanceof File || payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
}), $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    let _out = def.transform(payload.value, payload);
    if (ctx.async)
      return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output2) => (payload.value = output2, payload.fallback = !0, payload));
    if (_out instanceof Promise)
      throw new $ZodAsyncError();
    return payload.value = _out, payload.fallback = !0, payload;
  };
});
function handleOptionalResult(result, input) {
  return input === void 0 && (result.issues.length || result.fallback) ? { issues: [], value: void 0 } : result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", inst._zod.optout = "optional", defineLazy(inst._zod, "values", () => def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0), defineLazy(inst._zod, "pattern", () => {
    let pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  }), inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      let input = payload.value, result = def.innerType._zod.run(payload, ctx);
      return result instanceof Promise ? result.then((r) => handleOptionalResult(r, input)) : handleOptionalResult(result, input);
    }
    return payload.value === void 0 ? payload : def.innerType._zod.run(payload, ctx);
  };
}), $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def), defineLazy(inst._zod, "values", () => def.innerType._zod.values), defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern), inst._zod.parse = (payload, ctx) => def.innerType._zod.run(payload, ctx);
}), $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "optin", () => def.innerType._zod.optin), defineLazy(inst._zod, "optout", () => def.innerType._zod.optout), defineLazy(inst._zod, "pattern", () => {
    let pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  }), defineLazy(inst._zod, "values", () => def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0), inst._zod.parse = (payload, ctx) => payload.value === null ? payload : def.innerType._zod.run(payload, ctx);
}), $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", defineLazy(inst._zod, "values", () => def.innerType._zod.values), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    if (payload.value === void 0)
      return payload.value = def.defaultValue, payload;
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => handleDefaultResult(result2, def)) : handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  return payload.value === void 0 && (payload.value = def.defaultValue), payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", defineLazy(inst._zod, "values", () => def.innerType._zod.values), inst._zod.parse = (payload, ctx) => (ctx.direction === "backward" || payload.value === void 0 && (payload.value = def.defaultValue), def.innerType._zod.run(payload, ctx));
}), $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", () => {
    let v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  }), inst._zod.parse = (payload, ctx) => {
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => handleNonOptionalResult(result2, inst)) : handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  return !payload.issues.length && payload.value === void 0 && payload.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: payload.value,
    inst
  }), payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      throw new $ZodEncodeError("ZodSuccess");
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => (payload.value = result2.issues.length === 0, payload)) : (payload.value = result.issues.length === 0, payload);
  };
}), $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", defineLazy(inst._zod, "optout", () => def.innerType._zod.optout), defineLazy(inst._zod, "values", () => def.innerType._zod.values), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => (payload.value = result2.value, result2.issues.length && (payload.value = def.catchValue({
      ...payload,
      error: {
        issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      },
      input: payload.value
    }), payload.issues = [], payload.fallback = !0), payload)) : (payload.value = result.value, result.issues.length && (payload.value = def.catchValue({
      ...payload,
      error: {
        issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      },
      input: payload.value
    }), payload.issues = [], payload.fallback = !0), payload);
  };
}), $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => ((typeof payload.value != "number" || !Number.isNaN(payload.value)) && payload.issues.push({
    input: payload.value,
    inst,
    expected: "nan",
    code: "invalid_type"
  }), payload);
}), $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", () => def.in._zod.values), defineLazy(inst._zod, "optin", () => def.in._zod.optin), defineLazy(inst._zod, "optout", () => def.out._zod.optout), defineLazy(inst._zod, "propValues", () => def.in._zod.propValues), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      let right = def.out._zod.run(payload, ctx);
      return right instanceof Promise ? right.then((right2) => handlePipeResult(right2, def.in, ctx)) : handlePipeResult(right, def.in, ctx);
    }
    let left = def.in._zod.run(payload, ctx);
    return left instanceof Promise ? left.then((left2) => handlePipeResult(left2, def.out, ctx)) : handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  return left.issues.length ? (left.aborted = !0, left) : next._zod.run({ value: left.value, issues: left.issues, fallback: left.fallback }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "values", () => def.in._zod.values), defineLazy(inst._zod, "optin", () => def.in._zod.optin), defineLazy(inst._zod, "optout", () => def.out._zod.optout), defineLazy(inst._zod, "propValues", () => def.in._zod.propValues), inst._zod.parse = (payload, ctx) => {
    if ((ctx.direction || "forward") === "forward") {
      let left = def.in._zod.run(payload, ctx);
      return left instanceof Promise ? left.then((left2) => handleCodecAResult(left2, def, ctx)) : handleCodecAResult(left, def, ctx);
    } else {
      let right = def.out._zod.run(payload, ctx);
      return right instanceof Promise ? right.then((right2) => handleCodecAResult(right2, def, ctx)) : handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length)
    return result.aborted = !0, result;
  if ((ctx.direction || "forward") === "forward") {
    let transformed = def.transform(result.value, result);
    return transformed instanceof Promise ? transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx)) : handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    let transformed = def.reverseTransform(result.value, result);
    return transformed instanceof Promise ? transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx)) : handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  return left.issues.length ? (left.aborted = !0, left) : nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
  $ZodPipe.init(inst, def);
}), $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues), defineLazy(inst._zod, "values", () => def.innerType._zod.values), defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin), defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(handleReadonlyResult) : handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  return payload.value = Object.freeze(payload.value), payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  let regexParts = [];
  for (let part of def.parts)
    if (typeof part == "object" && part !== null) {
      if (!part._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      let source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      let start = source.startsWith("^") ? 1 : 0, end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part))
      regexParts.push(escapeRegex(`${part}`));
    else
      throw new Error(`Invalid template literal part: ${part}`);
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`), inst._zod.parse = (payload, _ctx) => typeof payload.value != "string" ? (payload.issues.push({
    input: payload.value,
    inst,
    expected: "string",
    code: "invalid_type"
  }), payload) : (inst._zod.pattern.lastIndex = 0, inst._zod.pattern.test(payload.value) || payload.issues.push({
    input: payload.value,
    inst,
    code: "invalid_format",
    format: def.format ?? "template_literal",
    pattern: inst._zod.pattern.source
  }), payload);
}), $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => ($ZodType.init(inst, def), inst._def = def, inst._zod.def = def, inst.implement = (func) => {
  if (typeof func != "function")
    throw new Error("implement() must be called with a function");
  return function(...args) {
    let parsedArgs = inst._def.input ? parse2(inst._def.input, args) : args, result = Reflect.apply(func, this, parsedArgs);
    return inst._def.output ? parse2(inst._def.output, result) : result;
  };
}, inst.implementAsync = (func) => {
  if (typeof func != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...args) {
    let parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args, result = await Reflect.apply(func, this, parsedArgs);
    return inst._def.output ? await parseAsync(inst._def.output, result) : result;
  };
}, inst._zod.parse = (payload, _ctx) => typeof payload.value != "function" ? (payload.issues.push({
  code: "invalid_type",
  expected: "function",
  input: payload.value,
  inst
}), payload) : (inst._def.output && inst._def.output._zod.def.type === "promise" ? payload.value = inst.implementAsync(payload.value) : payload.value = inst.implement(payload.value), payload), inst.input = (...args) => {
  let F = inst.constructor;
  return Array.isArray(args[0]) ? new F({
    type: "function",
    input: new $ZodTuple({
      type: "tuple",
      items: args[0],
      rest: args[1]
    }),
    output: inst._def.output
  }) : new F({
    type: "function",
    input: args[0],
    output: inst._def.output
  });
}, inst.output = (output) => {
  let F = inst.constructor;
  return new F({
    type: "function",
    input: inst._def.input,
    output
  });
}, inst)), $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
}), $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def), defineLazy(inst._zod, "innerType", () => {
    let d = def;
    return d._cachedInner || (d._cachedInner = def.getter()), d._cachedInner;
  }), defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern), defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues), defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0), defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0), inst._zod.parse = (payload, ctx) => inst._zod.innerType._zod.run(payload, ctx);
}), $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def), $ZodType.init(inst, def), inst._zod.parse = (payload, _) => payload, inst._zod.check = (payload) => {
    let input = payload.value, r = def.fn(input);
    if (r instanceof Promise)
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    handleRefineResult(r, payload, input, inst);
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    let _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    inst._zod.def.params && (_iss.params = inst._zod.def.params), payload.issues.push(issue(_iss));
  }
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: () => ar_default,
  az: () => az_default,
  be: () => be_default,
  bg: () => bg_default,
  ca: () => ca_default,
  cs: () => cs_default,
  da: () => da_default,
  de: () => de_default,
  el: () => el_default,
  en: () => en_default,
  eo: () => eo_default,
  es: () => es_default,
  fa: () => fa_default,
  fi: () => fi_default,
  fr: () => fr_default,
  frCA: () => fr_CA_default,
  he: () => he_default,
  hr: () => hr_default,
  hu: () => hu_default,
  hy: () => hy_default,
  id: () => id_default,
  is: () => is_default,
  it: () => it_default,
  ja: () => ja_default,
  ka: () => ka_default,
  kh: () => kh_default,
  km: () => km_default,
  ko: () => ko_default,
  lt: () => lt_default,
  mk: () => mk_default,
  ms: () => ms_default,
  nl: () => nl_default,
  no: () => no_default,
  ota: () => ota_default,
  pl: () => pl_default,
  ps: () => ps_default,
  pt: () => pt_default,
  ro: () => ro_default,
  ru: () => ru_default,
  sl: () => sl_default,
  sv: () => sv_default,
  ta: () => ta_default,
  th: () => th_default,
  tr: () => tr_default,
  ua: () => ua_default,
  uk: () => uk_default,
  ur: () => ur_default,
  uz: () => uz_default,
  vi: () => vi_default,
  yo: () => yo_default,
  zhCN: () => zh_CN_default,
  zhTW: () => zh_TW_default
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ar.js
var error = () => {
  let Sizable = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}` : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}` : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}` : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}` : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"` : _issue.format === "ends_with" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"` : _issue.format === "includes" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"` : _issue.format === "regex" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/az.js
var error2 = () => {
  let Sizable = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}` : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}` : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}` : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r` : _issue.format === "ends_with" ? `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir` : _issue.format === "includes" ? `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r` : _issue.format === "regex" ? `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r` : `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  let absCount = Math.abs(count), lastDigit = absCount % 10, lastTwoDigits = absCount % 100;
  return lastTwoDigits >= 11 && lastTwoDigits <= 19 ? many : lastDigit === 1 ? one : lastDigit >= 2 && lastDigit <= 4 ? few : many;
}
var error3 = () => {
  let Sizable = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u043B\u0456\u043A",
    array: "\u043C\u0430\u0441\u0456\u045E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}` : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}` : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        if (sizing) {
          let maxValue = Number(issue2.maximum), unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        if (sizing) {
          let minValue = Number(issue2.minimum), unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"` : _issue.format === "includes" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"` : _issue.format === "regex" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}` : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/bg.js
var error4 = () => {
  let Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0432\u0445\u043E\u0434",
    email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    json_string: "JSON \u043D\u0438\u0437",
    e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u043E\u0434"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}` : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}` : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}` : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
        let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        return _issue.format === "emoji" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "datetime" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "date" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), _issue.format === "time" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), _issue.format === "duration" && (invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
      default:
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ca.js
var error5 = () => {
  let Sizable = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}` : `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}` : `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "com a m\xE0xim" : "menys de", sizing = getSizing(issue2.origin);
        return sizing ? `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}` : `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de", sizing = getSizing(issue2.origin);
        return sizing ? `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}` : `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"` : _issue.format === "ends_with" ? `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"` : _issue.format === "includes" ? `Format inv\xE0lid: ha d'incloure "${_issue.includes}"` : _issue.format === "regex" ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}` : `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element inv\xE0lid a ${issue2.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/cs.js
var error6 = () => {
  let Sizable = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u010D\xEDslo",
    string: "\u0159et\u011Bzec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}` : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}` : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"` : _issue.format === "ends_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"` : _issue.format === "includes" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"` : _issue.format === "regex" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}` : `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${issue2.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/da.js
var error7 = () => {
  let Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkesl\xE6t",
    date: "ISO-dato",
    time: "ISO-klokkesl\xE6t",
    duration: "ISO-varighed",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "s\xE6t",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}` : `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}` : `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}` : `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}` : `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ugyldig streng: skal starte med "${_issue.prefix}"` : _issue.format === "ends_with" ? `Ugyldig streng: skal ende med "${_issue.suffix}"` : _issue.format === "includes" ? `Ugyldig streng: skal indeholde "${_issue.includes}"` : _issue.format === "regex" ? `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}` : `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8gle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xE6rdi i ${issue2.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/de.js
var error8 = () => {
  let Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  }, TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}` : `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}` : `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat` : `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat` : `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen` : _issue.format === "ends_with" ? `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden` : _issue.format === "includes" ? `Ung\xFCltiger String: muss "${_issue.includes}" enthalten` : _issue.format === "regex" ? `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen` : `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${issue2.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/el.js
var error9 = () => {
  let Sizable = {
    string: { unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    array: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    set: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    map: { unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
    email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
    date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
    time: "ISO \u03CE\u03C1\u03B1",
    duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
    ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
    ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
    mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
    cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
    cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
    base64: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
    base64url: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
    json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
    e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
    jwt: "JWT",
    template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return typeof issue2.expected == "string" && /^[A-Z]/.test(issue2.expected) ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${issue2.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}` : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${stringifyPrimitive(issue2.values[0])}` : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}` : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${_issue.suffix}"` : _issue.format === "includes" ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${_issue.includes}"` : _issue.format === "regex" ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${_issue.pattern}` : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${issue2.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${issue2.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${issue2.origin}`;
      case "invalid_union":
        return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
      case "invalid_element":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${issue2.origin}`;
      default:
        return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
    }
  };
};
function el_default() {
  return {
    localeError: error9()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/en.js
var error10 = () => {
  let Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}` : `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}` : `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Invalid string: must start with "${_issue.prefix}"` : _issue.format === "ends_with" ? `Invalid string: must end with "${_issue.suffix}"` : _issue.format === "includes" ? `Invalid string: must include "${_issue.includes}"` : _issue.format === "regex" ? `Invalid string: must match pattern ${_issue.pattern}` : `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0 ? `Invalid discriminator value. Expected ${issue2.options.map((o) => `'${o}'`).join(" | ")}` : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function en_default() {
  return {
    localeError: error10()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/eo.js
var error11 = () => {
  let Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emo\u011Dio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-da\u016Dro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  }, TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}` : `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}` : `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}` : `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"` : _issue.format === "ends_with" ? `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"` : _issue.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"` : _issue.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}` : `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida \u015Dlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function eo_default() {
  return {
    localeError: error11()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/es.js
var error12 = () => {
  let Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "n\xFAmero",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "n\xFAmero grande",
    symbol: "s\xEDmbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "funci\xF3n",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeraci\xF3n",
    union: "uni\xF3n",
    literal: "literal",
    promise: "promesa",
    void: "vac\xEDo",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}` : `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}` : `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"` : _issue.format === "ends_with" ? `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"` : _issue.format === "includes" ? `Cadena inv\xE1lida: debe incluir "${_issue.includes}"` : _issue.format === "regex" ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}` : `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function es_default() {
  return {
    localeError: error12()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/fa.js
var error13 = () => {
  let Sizable = {
    string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0622\u0631\u0627\u06CC\u0647"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F` : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F` : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F` : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F` : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F` : _issue.format === "ends_with" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F` : _issue.format === "includes" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F` : _issue.format === "regex" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F` : `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function fa_default() {
  return {
    localeError: error13()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/fi.js
var error14 = () => {
  let Sizable = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}` : `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}` : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim() : `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim() : `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"` : _issue.format === "ends_with" ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"` : _issue.format === "includes" ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"` : _issue.format === "regex" ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}` : `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function fi_default() {
  return {
    localeError: error14()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/fr.js
var error15 = () => {
  let Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  }, TypeDictionary = {
    string: "cha\xEEne",
    number: "nombre",
    int: "entier",
    boolean: "bool\xE9en",
    bigint: "grand entier",
    symbol: "symbole",
    undefined: "ind\xE9fini",
    null: "null",
    never: "jamais",
    void: "vide",
    date: "date",
    array: "tableau",
    object: "objet",
    tuple: "tuple",
    record: "enregistrement",
    map: "carte",
    set: "ensemble",
    file: "fichier",
    nonoptional: "non-optionnel",
    nan: "NaN",
    function: "fonction"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u` : `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu` : `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}` : `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"` : _issue.format === "ends_with" ? `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"` : _issue.format === "includes" ? `Cha\xEEne invalide : doit inclure "${_issue.includes}"` : _issue.format === "regex" ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function fr_default() {
  return {
    localeError: error15()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/fr-CA.js
var error16 = () => {
  let Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}` : `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "\u2264" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}` : `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? "\u2265" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"` : _issue.format === "ends_with" ? `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"` : _issue.format === "includes" ? `Cha\xEEne invalide : doit inclure "${_issue.includes}"` : _issue.format === "regex" ? `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error16()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/he.js
var error17 = () => {
  let TypeNames = {
    string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
    number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
    boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
    array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
    object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
    null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
    undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
    symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
    function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
    map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
    set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
    file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
    value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
  }, Sizable = {
    string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
    // no unit
  }, typeEntry = (t) => t ? TypeNames[t] : void 0, typeLabel = (t) => {
    let e = typeEntry(t);
    return e ? e.label : t ?? TypeNames.unknown.label;
  }, withDefinite = (t) => `\u05D4${typeLabel(t)}`, verbFor = (t) => (typeEntry(t)?.gender ?? "m") === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA", getSizing = (origin) => origin ? Sizable[origin] ?? null : null, FormatDictionary = {
    regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
    url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
    time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
    duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
    ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
    ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
    cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
    cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
    base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
    base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
    e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expectedKey = issue2.expected, expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey), receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}` : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1)
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
        let stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2)
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
        let lastValue = stringified[stringified.length - 1];
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified.slice(0, -1).join(", ")} \u05D0\u05D5 ${lastValue}`;
      }
      case "too_big": {
        let sizing = getSizing(issue2.origin), subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string")
          return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
        if (issue2.origin === "number") {
          let comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          let verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA", comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        let adj = issue2.inclusive ? "<=" : "<", be = verbFor(issue2.origin ?? "value");
        return sizing?.unit ? `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}` : `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let sizing = getSizing(issue2.origin), subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string")
          return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
        if (issue2.origin === "number") {
          let comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          let verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          if (issue2.minimum === 1 && issue2.inclusive) {
            let singularPhrase = (issue2.origin === "set", "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
          }
          let comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        let adj = issue2.inclusive ? ">=" : ">", be = verbFor(issue2.origin ?? "value");
        return sizing?.unit ? `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
        let nounEntry = FormatDictionary[_issue.format], noun = nounEntry?.label ?? _issue.format, adjective = (nounEntry?.gender ?? "m") === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
        return `${noun} \u05DC\u05D0 ${adjective}`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${withDefinite(issue2.origin ?? "array")}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function he_default() {
  return {
    localeError: error17()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/hr.js
var error18 = () => {
  let Sizable = {
    string: { unit: "znakova", verb: "imati" },
    file: { unit: "bajtova", verb: "imati" },
    array: { unit: "stavki", verb: "imati" },
    set: { unit: "stavki", verb: "imati" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "unos",
    email: "email adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum i vrijeme",
    date: "ISO datum",
    time: "ISO vrijeme",
    duration: "ISO trajanje",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "IPv4 raspon",
    cidrv6: "IPv6 raspon",
    base64: "base64 kodirani tekst",
    base64url: "base64url kodirani tekst",
    json_string: "JSON tekst",
    e164: "E.164 broj",
    jwt: "JWT",
    template_literal: "unos"
  }, TypeDictionary = {
    nan: "NaN",
    string: "tekst",
    number: "broj",
    boolean: "boolean",
    array: "niz",
    object: "objekt",
    set: "skup",
    file: "datoteka",
    date: "datum",
    bigint: "bigint",
    symbol: "simbol",
    undefined: "undefined",
    null: "null",
    function: "funkcija",
    map: "mapa"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Neispravan unos: o\u010Dekuje se instanceof ${issue2.expected}, a primljeno je ${received}` : `Neispravan unos: o\u010Dekuje se ${expected}, a primljeno je ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Neispravna vrijednost: o\u010Dekivano ${stringifyPrimitive(issue2.values[0])}` : `Neispravna opcija: o\u010Dekivano jedno od ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} ima ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemenata"}` : `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} bude ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin), origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return sizing ? `Premalo: o\u010Dekivano da ${origin} ima ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Premalo: o\u010Dekivano da ${origin} bude ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Neispravan tekst: mora zapo\u010Dinjati s "${_issue.prefix}"` : _issue.format === "ends_with" ? `Neispravan tekst: mora zavr\u0161avati s "${_issue.suffix}"` : _issue.format === "includes" ? `Neispravan tekst: mora sadr\u017Eavati "${_issue.includes}"` : _issue.format === "regex" ? `Neispravan tekst: mora odgovarati uzorku ${_issue.pattern}` : `Neispravna ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neispravan broj: mora biti vi\u0161ekratnik od ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznat${issue2.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neispravan klju\u010D u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Neispravan unos";
      case "invalid_element":
        return `Neispravna vrijednost u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return "Neispravan unos";
    }
  };
};
function hr_default() {
  return {
    localeError: error18()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/hu.js
var error19 = () => {
  let Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  }, TypeDictionary = {
    nan: "NaN",
    number: "sz\xE1m",
    array: "t\xF6mb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}` : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}` : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}` : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie` : _issue.format === "ends_with" ? `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie` : _issue.format === "includes" ? `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia` : _issue.format === "regex" ? `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie` : `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function hu_default() {
  return {
    localeError: error19()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  let vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"], lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
}
var error20 = () => {
  let Sizable = {
    string: {
      unit: {
        one: "\u0576\u0577\u0561\u0576",
        many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    file: {
      unit: {
        one: "\u0562\u0561\u0575\u0569",
        many: "\u0562\u0561\u0575\u0569\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    array: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    set: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0574\u0578\u0582\u057F\u0584",
    email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
    url: "URL",
    emoji: "\u0567\u0574\u0578\u057B\u056B",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
    date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
    time: "ISO \u056A\u0561\u0574",
    duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
    ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
    cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    json_string: "JSON \u057F\u0578\u0572",
    e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
    jwt: "JWT",
    template_literal: "\u0574\u0578\u0582\u057F\u0584"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0569\u056B\u057E",
    array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}` : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}` : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        if (sizing) {
          let maxValue = Number(issue2.maximum), unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        if (sizing) {
          let minValue = Number(issue2.minimum), unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E` : _issue.format === "ends_with" ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E` : _issue.format === "includes" ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"` : _issue.format === "regex" ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576` : `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
      case "unrecognized_keys":
        return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      case "invalid_union":
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      case "invalid_element":
        return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      default:
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
    }
  };
};
function hy_default() {
  return {
    localeError: error20()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/id.js
var error21 = () => {
  let Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}` : `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${_issue.prefix}"` : _issue.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${_issue.suffix}"` : _issue.format === "includes" ? `String tidak valid: harus menyertakan "${_issue.includes}"` : _issue.format === "regex" ? `String tidak valid: harus sesuai pola ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function id_default() {
  return {
    localeError: error21()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/is.js
var error22 = () => {
  let Sizable = {
    string: { unit: "stafi", verb: "a\xF0 hafa" },
    file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
    array: { unit: "hluti", verb: "a\xF0 hafa" },
    set: { unit: "hluti", verb: "a\xF0 hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefsl\xF3\xF0",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og t\xEDmi",
    date: "ISO dagsetning",
    time: "ISO t\xEDmi",
    duration: "ISO t\xEDmalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 t\xF6lugildi",
    jwt: "JWT",
    template_literal: "gildi"
  }, TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}` : `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}` : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}` : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"` : _issue.format === "includes" ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"` : _issue.format === "regex" ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}` : `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xED ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xED ${issue2.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function is_default() {
  return {
    localeError: error22()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/it.js
var error23 = () => {
  let Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}` : `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}` : `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}` : `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Stringa non valida: deve iniziare con "${_issue.prefix}"` : _issue.format === "ends_with" ? `Stringa non valida: deve terminare con "${_issue.suffix}"` : _issue.format === "includes" ? `Stringa non valida: deve includere "${_issue.includes}"` : _issue.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}` : `Input non valido: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function it_default() {
  return {
    localeError: error23()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ja.js
var error24 = () => {
  let Sizable = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5024",
    array: "\u914D\u5217"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F` : `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F` : `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044", sizing = getSizing(issue2.origin);
        return sizing ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044", sizing = getSizing(issue2.origin);
        return sizing ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : _issue.format === "ends_with" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : _issue.format === "includes" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : _issue.format === "regex" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function ja_default() {
  return {
    localeError: error24()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ka.js
var error25 = () => {
  let Sizable = {
    string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    url: "URL",
    emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
    date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
    time: "\u10D3\u10E0\u10DD",
    duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
    ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
    base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
    json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
    e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    jwt: "JWT",
    template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
    string: "\u10D5\u10D4\u10DA\u10D8",
    boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
    function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
    array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}` : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}` : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}` : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7` : _issue.format === "ends_with" ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7` : _issue.format === "includes" ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1` : _issue.format === "regex" ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}` : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
      case "unrecognized_keys":
        return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
      default:
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
    }
  };
};
function ka_default() {
  return {
    localeError: error25()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/km.js
var error26 = () => {
  let Sizable = {
    string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u179B\u17C1\u1781",
    array: "\u17A2\u17B6\u179A\u17C1 (Array)",
    null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}` : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}` : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}` : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}` : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"` : _issue.format === "includes" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"` : _issue.format === "regex" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}` : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function km_default() {
  return {
    localeError: error26()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ko.js
var error27 = () => {
  let Sizable = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4` : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC", suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", sizing = getSizing(issue2.origin), unit = sizing?.unit ?? "\uC694\uC18C";
        return sizing ? `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}` : `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC", suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", sizing = getSizing(issue2.origin), unit = sizing?.unit ?? "\uC694\uC18C";
        return sizing ? `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}` : `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4` : _issue.format === "ends_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4` : _issue.format === "includes" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4` : _issue.format === "regex" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function ko_default() {
  return {
    localeError: error27()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
function getUnitTypeFromNumber(number4) {
  let abs = Math.abs(number4), last = abs % 10, last2 = abs % 100;
  return last2 >= 11 && last2 <= 19 || last === 0 ? "many" : last === 1 ? "one" : "few";
}
var error28 = () => {
  let Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simboli\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "bait\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    let result = Sizable[origin] ?? null;
    return result === null ? result : {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  let FormatDictionary = {
    regex: "\u012Fvestis",
    email: "el. pa\u0161to adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukm\u0117",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 u\u017Ekoduota eilut\u0117",
    base64url: "base64url u\u017Ekoduota eilut\u0117",
    json_string: "JSON eilut\u0117",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "\u012Fvestis"
  }, TypeDictionary = {
    nan: "NaN",
    number: "skai\u010Dius",
    bigint: "sveikasis skai\u010Dius",
    string: "eilut\u0117",
    boolean: "login\u0117 reik\u0161m\u0117",
    undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulin\u0117 reik\u0161m\u0117"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}` : `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}` : `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
      case "too_big": {
        let origin = TypeDictionary[issue2.origin] ?? issue2.origin, sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? !1, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
        let adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        let origin = TypeDictionary[issue2.origin] ?? issue2.origin, sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? !1, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
        let adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"` : _issue.format === "ends_with" ? `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"` : _issue.format === "includes" ? `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"` : _issue.format === "regex" ? `Eilut\u0117 privalo atitikti ${_issue.pattern}` : `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        let origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error28()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/mk.js
var error29 = () => {
  let Sizable = {
    string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0431\u0440\u043E\u0458",
    array: "\u043D\u0438\u0437\u0430"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}` : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}` : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}` : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"` : _issue.format === "includes" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"` : _issue.format === "regex" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}` : `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function mk_default() {
  return {
    localeError: error29()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ms.js
var error30 = () => {
  let Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}` : `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}` : `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${_issue.prefix}"` : _issue.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${_issue.suffix}"` : _issue.format === "includes" ? `String tidak sah: mesti mengandungi "${_issue.includes}"` : _issue.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function ms_default() {
  return {
    localeError: error30()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/nl.js
var error31 = () => {
  let Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  }, TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}` : `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}` : `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin), longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        return sizing ? `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}` : `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin), shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        return sizing ? `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}` : `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ongeldige tekst: moet met "${_issue.prefix}" beginnen` : _issue.format === "ends_with" ? `Ongeldige tekst: moet op "${_issue.suffix}" eindigen` : _issue.format === "includes" ? `Ongeldige tekst: moet "${_issue.includes}" bevatten` : _issue.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}` : `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function nl_default() {
  return {
    localeError: error31()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/no.js
var error32 = () => {
  let Sizable = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}` : `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}` : `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}` : `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"` : _issue.format === "ends_with" ? `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"` : _issue.format === "includes" ? `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"` : _issue.format === "regex" ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}` : `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function no_default() {
  return {
    localeError: error32()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ota.js
var error33 = () => {
  let Sizable = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  }, TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}` : `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}` : `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.` : `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.` : `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.` : _issue.format === "ends_with" ? `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.` : _issue.format === "includes" ? `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.` : _issue.format === "regex" ? `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.` : `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function ota_default() {
  return {
    localeError: error33()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ps.js
var error34 = () => {
  let Sizable = {
    string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
    array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u064A",
    email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
    date: "\u0646\u06D0\u067C\u0647",
    time: "\u0648\u062E\u062A",
    duration: "\u0645\u0648\u062F\u0647",
    ipv4: "\u062F IPv4 \u067E\u062A\u0647",
    ipv6: "\u062F IPv6 \u067E\u062A\u0647",
    cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
    cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
    base64: "base64-encoded \u0645\u062A\u0646",
    base64url: "base64url-encoded \u0645\u062A\u0646",
    json_string: "JSON \u0645\u062A\u0646",
    e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u064A"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0627\u0631\u06D0"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648` : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC` : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A` : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A` : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A` : _issue.format === "ends_with" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A` : _issue.format === "includes" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A` : _issue.format === "regex" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A` : `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
      }
      case "not_multiple_of":
        return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
      case "unrecognized_keys":
        return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      case "invalid_union":
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
      case "invalid_element":
        return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      default:
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
    }
  };
};
function ps_default() {
  return {
    localeError: error34()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/pl.js
var error35 = () => {
  let Sizable = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  }, TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}` : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}` : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}` : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}` : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"` : _issue.format === "ends_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"` : _issue.format === "includes" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"` : _issue.format === "regex" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}` : `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function pl_default() {
  return {
    localeError: error35()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/pt.js
var error36 = () => {
  let Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmero",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}` : `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}` : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}` : `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"` : _issue.format === "ends_with" ? `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"` : _issue.format === "includes" ? `Texto inv\xE1lido: deve incluir "${_issue.includes}"` : _issue.format === "regex" ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${issue2.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function pt_default() {
  return {
    localeError: error36()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ro.js
var error37 = () => {
  let Sizable = {
    string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
    file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
    array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
    set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
    map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "intrare",
    email: "adres\u0103 de email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "dat\u0103 \u0219i or\u0103 ISO",
    date: "dat\u0103 ISO",
    time: "or\u0103 ISO",
    duration: "durat\u0103 ISO",
    ipv4: "adres\u0103 IPv4",
    ipv6: "adres\u0103 IPv6",
    mac: "adres\u0103 MAC",
    cidrv4: "interval IPv4",
    cidrv6: "interval IPv6",
    base64: "\u0219ir codat base64",
    base64url: "\u0219ir codat base64url",
    json_string: "\u0219ir JSON",
    e164: "num\u0103r E.164",
    jwt: "JWT",
    template_literal: "intrare"
  }, TypeDictionary = {
    nan: "NaN",
    string: "\u0219ir",
    number: "num\u0103r",
    boolean: "boolean",
    function: "func\u021Bie",
    array: "matrice",
    object: "obiect",
    undefined: "nedefinit",
    symbol: "simbol",
    bigint: "num\u0103r mare",
    void: "void",
    never: "never",
    map: "hart\u0103",
    set: "set"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return `Intrare invalid\u0103: a\u0219teptat ${expected}, primit ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Intrare invalid\u0103: a\u0219teptat ${stringifyPrimitive(issue2.values[0])}` : `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemente"}` : `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} s\u0103 fie ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Prea mic: a\u0219teptat ca ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Prea mic: a\u0219teptat ca ${issue2.origin} s\u0103 fie ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u0218ir invalid: trebuie s\u0103 se termine cu "${_issue.suffix}"` : _issue.format === "includes" ? `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${_issue.includes}"` : _issue.format === "regex" ? `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${_issue.pattern}` : `Format invalid: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chei nerecunoscute: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cheie invalid\u0103 \xEEn ${issue2.origin}`;
      case "invalid_union":
        return "Intrare invalid\u0103";
      case "invalid_element":
        return `Valoare invalid\u0103 \xEEn ${issue2.origin}`;
      default:
        return "Intrare invalid\u0103";
    }
  };
};
function ro_default() {
  return {
    localeError: error37()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  let absCount = Math.abs(count), lastDigit = absCount % 10, lastTwoDigits = absCount % 100;
  return lastTwoDigits >= 11 && lastTwoDigits <= 19 ? many : lastDigit === 1 ? one : lastDigit >= 2 && lastDigit <= 4 ? few : many;
}
var error38 = () => {
  let Sizable = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}` : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}` : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        if (sizing) {
          let maxValue = Number(issue2.maximum), unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        if (sizing) {
          let minValue = Number(issue2.minimum), unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"` : _issue.format === "includes" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"` : _issue.format === "regex" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}` : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function ru_default() {
  return {
    localeError: error38()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/sl.js
var error39 = () => {
  let Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0161tevilo",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}` : `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}` : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}` : `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Neveljaven niz: mora se za\u010Deti z "${_issue.prefix}"` : _issue.format === "ends_with" ? `Neveljaven niz: mora se kon\u010Dati z "${_issue.suffix}"` : _issue.format === "includes" ? `Neveljaven niz: mora vsebovati "${_issue.includes}"` : _issue.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}` : `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error39()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/sv.js
var error40 = () => {
  let Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  }, TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${issue2.expected}, fick ${received}` : `Ogiltig inmatning: f\xF6rv\xE4ntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${stringifyPrimitive(issue2.values[0])}` : `Ogiltigt val: f\xF6rv\xE4ntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}` : `F\xF6r stor(t): f\xF6rv\xE4ntat ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_issue.prefix}"` : _issue.format === "ends_with" ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${_issue.suffix}"` : _issue.format === "includes" ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_issue.includes}"` : _issue.format === "regex" ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_issue.pattern}"` : `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${issue2.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function sv_default() {
  return {
    localeError: error40()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ta.js
var error41 = () => {
  let Sizable = {
    string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0B8E\u0BA3\u0BCD",
    array: "\u0B85\u0BA3\u0BBF",
    null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${issue2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}` : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${stringifyPrimitive(issue2.values[0])}` : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${joinValues(issue2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : _issue.format === "ends_with" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : _issue.format === "includes" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : _issue.format === "regex" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_issue.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${issue2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function ta_default() {
  return {
    localeError: error41()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/th.js
var error42 = () => {
  let Sizable = {
    string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
    array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
    null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${issue2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}` : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${stringifyPrimitive(issue2.values[0])}` : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32", sizing = getSizing(issue2.origin);
        return sizing ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}` : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32", sizing = getSizing(issue2.origin);
        return sizing ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()} ${sizing.unit}` : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_issue.suffix}"` : _issue.format === "includes" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_issue.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21` : _issue.format === "regex" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_issue.pattern}` : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${issue2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function th_default() {
  return {
    localeError: error42()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/tr.js
var error43 = () => {
  let Sizable = {
    string: { unit: "karakter", verb: "olmal\u0131" },
    file: { unit: "bayt", verb: "olmal\u0131" },
    array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${issue2.expected}, al\u0131nan ${received}` : `Ge\xE7ersiz de\u011Fer: beklenen ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Ge\xE7ersiz de\u011Fer: beklenen ${stringifyPrimitive(issue2.values[0])}` : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xF6\u011Fe"}` : `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Ge\xE7ersiz metin: "${_issue.prefix}" ile ba\u015Flamal\u0131` : _issue.format === "ends_with" ? `Ge\xE7ersiz metin: "${_issue.suffix}" ile bitmeli` : _issue.format === "includes" ? `Ge\xE7ersiz metin: "${_issue.includes}" i\xE7ermeli` : _issue.format === "regex" ? `Ge\xE7ersiz metin: ${_issue.pattern} desenine uymal\u0131` : `Ge\xE7ersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${issue2.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return "Ge\xE7ersiz de\u011Fer";
    }
  };
};
function tr_default() {
  return {
    localeError: error43()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/uk.js
var error44 = () => {
  let Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${issue2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}` : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${stringifyPrimitive(issue2.values[0])}` : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}` : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} \u0431\u0443\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_issue.suffix}"` : _issue.format === "includes" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_issue.includes}"` : _issue.format === "regex" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}` : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0456" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${issue2.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function uk_default() {
  return {
    localeError: error44()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/ur.js
var error45 = () => {
  let Sizable = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u0646\u0645\u0628\u0631",
    array: "\u0622\u0631\u06D2",
    null: "\u0646\u0644"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${issue2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627` : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${stringifyPrimitive(issue2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627` : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${joinValues(issue2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2` : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${adj}${issue2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u06D2 ${adj}${issue2.minimum.toString()} ${sizing.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2` : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u0627 ${adj}${issue2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : _issue.format === "ends_with" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : _issue.format === "includes" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : _issue.format === "regex" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_issue.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : `\u063A\u0644\u0637 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${issue2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${issue2.keys.length > 1 ? "\u0632" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function ur_default() {
  return {
    localeError: error45()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/uz.js
var error46 = () => {
  let Sizable = {
    string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
    file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
    array: { unit: "element", verb: "bo\u2018lishi kerak" },
    set: { unit: "element", verb: "bo\u2018lishi kerak" },
    map: { unit: "yozuv", verb: "bo\u2018lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  }, TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}` : `Noto\u2018g\u2018ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Noto\u2018g\u2018ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}` : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}` : `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}` : `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Noto\u2018g\u2018ri satr: "${_issue.prefix}" bilan boshlanishi kerak` : _issue.format === "ends_with" ? `Noto\u2018g\u2018ri satr: "${_issue.suffix}" bilan tugashi kerak` : _issue.format === "includes" ? `Noto\u2018g\u2018ri satr: "${_issue.includes}" ni o\u2018z ichiga olishi kerak` : _issue.format === "regex" ? `Noto\u2018g\u2018ri satr: ${_issue.pattern} shabloniga mos kelishi kerak` : `Noto\u2018g\u2018ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto\u2018g\u2018ri raqam: ${issue2.divisor} ning karralisi bo\u2018lishi kerak`;
      case "unrecognized_keys":
        return `Noma\u2019lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto\u2018g\u2018ri`;
      case "invalid_union":
        return "Noto\u2018g\u2018ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto\u2018g\u2018ri qiymat`;
      default:
        return "Noto\u2018g\u2018ri kirish";
    }
  };
};
function uz_default() {
  return {
    localeError: error46()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/vi.js
var error47 = () => {
  let Sizable = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  }, TypeDictionary = {
    nan: "NaN",
    number: "s\u1ED1",
    array: "m\u1EA3ng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${issue2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}` : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${stringifyPrimitive(issue2.values[0])}` : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "ph\u1EA7n t\u1EED"}` : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_issue.prefix}"` : _issue.format === "ends_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_issue.suffix}"` : _issue.format === "includes" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_issue.includes}"` : _issue.format === "regex" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_issue.pattern}` : `${FormatDictionary[_issue.format] ?? issue2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function vi_default() {
  return {
    localeError: error47()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/zh-CN.js
var error48 = () => {
  let Sizable = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  }, TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5B57",
    array: "\u6570\u7EC4",
    null: "\u7A7A\u503C(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${issue2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}` : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${stringifyPrimitive(issue2.values[0])}` : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u4E2A\u5143\u7D20"}` : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.prefix}" \u5F00\u5934` : _issue.format === "ends_with" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.suffix}" \u7ED3\u5C3E` : _issue.format === "includes" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_issue.includes}"` : _issue.format === "regex" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_issue.pattern}` : `\u65E0\u6548${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${issue2.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error48()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/zh-TW.js
var error49 = () => {
  let Sizable = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  }, TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${issue2.expected}\uFF0C\u4F46\u6536\u5230 ${received}` : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${stringifyPrimitive(issue2.values[0])}` : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u500B\u5143\u7D20"}` : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.prefix}" \u958B\u982D` : _issue.format === "ends_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.suffix}" \u7D50\u5C3E` : _issue.format === "includes" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_issue.includes}"` : _issue.format === "regex" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_issue.pattern}` : `\u7121\u6548\u7684 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${issue2.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${issue2.keys.length > 1 ? "\u5011" : ""}\uFF1A${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error49()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/locales/yo.js
var error50 = () => {
  let Sizable = {
    string: { unit: "\xE0mi", verb: "n\xED" },
    file: { unit: "bytes", verb: "n\xED" },
    array: { unit: "nkan", verb: "n\xED" },
    set: { unit: "nkan", verb: "n\xED" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\xE0k\xF3k\xF2 ISO",
    date: "\u1ECDj\u1ECD\u0301 ISO",
    time: "\xE0k\xF3k\xF2 ISO",
    duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
    ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
    ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
    cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
    cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
    base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
    base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
    json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
    e164: "n\u1ECD\u0301mb\xE0 E.164",
    jwt: "JWT",
    template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
  }, TypeDictionary = {
    nan: "NaN",
    number: "n\u1ECD\u0301mb\xE0",
    array: "akop\u1ECD"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = TypeDictionary[issue2.expected] ?? issue2.expected, receivedType = parsedType(issue2.input), received = TypeDictionary[receivedType] ?? receivedType;
        return /^[A-Z]/.test(issue2.expected) ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${issue2.expected}, \xE0m\u1ECD\u0300 a r\xED ${received}` : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${stringifyPrimitive(issue2.values[0])}` : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}` : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        let adj = issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}` : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_issue.prefix}"` : _issue.format === "ends_with" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_issue.suffix}"` : _issue.format === "includes" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_issue.includes}"` : _issue.format === "regex" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_issue.pattern}` : `A\u1E63\xEC\u1E63e: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
};
function yo_default() {
  return {
    localeError: error50()
  };
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
var _a2, $output = /* @__PURE__ */ Symbol("ZodOutput"), $input = /* @__PURE__ */ Symbol("ZodInput"), $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    let meta3 = _meta[0];
    return this._map.set(schema, meta3), meta3 && typeof meta3 == "object" && "id" in meta3 && this._idmap.set(meta3.id, schema), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(schema) {
    let meta3 = this._map.get(schema);
    return meta3 && typeof meta3 == "object" && "id" in meta3 && this._idmap.delete(meta3.id), this._map.delete(schema), this;
  }
  get(schema) {
    let p = schema._zod.parent;
    if (p) {
      let pm = { ...this.get(p) ?? {} };
      delete pm.id;
      let f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: !0,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: !0,
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: !0,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: !0,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: !0,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function _positive(params) {
  return /* @__PURE__ */ _gt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _negative(params) {
  return /* @__PURE__ */ _lt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
  return /* @__PURE__ */ _lte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
  return /* @__PURE__ */ _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  return new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
// @__NO_SIDE_EFFECTS__
function _tuple(Class2, items, _paramsOrRest, _params) {
  let hasRest = _paramsOrRest instanceof $ZodType, params = hasRest ? _params : _paramsOrRest, rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class2, values, params) {
  let entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue == "function" ? catchValue : () => catchValue
  });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class2, fn, _params) {
  let norm = normalizeParams(_params);
  return norm.abort ?? (norm.abort = !0), new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  return new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
  let ch = /* @__PURE__ */ _check((payload) => (payload.addIssue = (issue2) => {
    if (typeof issue2 == "string")
      payload.issues.push(issue(issue2, payload.value, ch._zod.def));
    else {
      let _issue = issue2;
      _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), _issue.input ?? (_issue.input = payload.value), _issue.inst ?? (_issue.inst = ch), _issue.continue ?? (_issue.continue = !ch._zod.def.abort), payload.issues.push(issue(_issue));
    }
  }, fn(payload.value, payload)), params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  let ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  return ch._zod.check = fn, ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
  let ch = new $ZodCheck({ check: "describe" });
  return ch._zod.onattach = [
    (inst) => {
      let existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ], ch._zod.check = () => {
  }, ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
  let ch = new $ZodCheck({ check: "meta" });
  return ch._zod.onattach = [
    (inst) => {
      let existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ], ch._zod.check = () => {
  }, ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
  let params = normalizeParams(_params), truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  params.case !== "sensitive" && (truthyArray = truthyArray.map((v) => typeof v == "string" ? v.toLowerCase() : v), falsyArray = falsyArray.map((v) => typeof v == "string" ? v.toLowerCase() : v));
  let truthySet = new Set(truthyArray), falsySet = new Set(falsyArray), _Codec = Classes.Codec ?? $ZodCodec, _Boolean = Classes.Boolean ?? $ZodBoolean, _String = Classes.String ?? $ZodString, stringSchema = new _String({ type: "string", error: params.error }), booleanSchema = new _Boolean({ type: "boolean", error: params.error }), codec2 = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: ((input, payload) => {
      let data = input;
      return params.case !== "sensitive" && (data = data.toLowerCase()), truthySet.has(data) ? !0 : falsySet.has(data) ? !1 : (payload.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...truthySet, ...falsySet],
        input: payload.value,
        inst: codec2,
        continue: !1
      }), {});
    }),
    reverseTransform: ((input, _payload) => input === !0 ? truthyArray[0] || "true" : falsyArray[0] || "false"),
    error: params.error
  });
  return codec2;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  let params = normalizeParams(_params), def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex == "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  return fnOrRegex instanceof RegExp && (def.pattern = fnOrRegex), new Class2(def);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  return target === "draft-4" && (target = "draft-04"), target === "draft-7" && (target = "draft-07"), {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function process2(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a3;
  let def = schema._zod.def, seen = ctx.seen.get(schema);
  if (seen)
    return seen.count++, _params.schemaPath.includes(schema) && (seen.cycle = _params.path), seen.schema;
  let result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  let overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema)
    result.schema = overrideSchema;
  else {
    let params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema)
      schema._zod.processJSONSchema(ctx, result.schema, params);
    else {
      let _json = result.schema, processor = ctx.processors[def.type];
      if (!processor)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      processor(schema, ctx, _json, params);
    }
    let parent = schema._zod.parent;
    parent && (result.ref || (result.ref = parent), process2(parent, ctx, params), ctx.seen.get(parent).isParent = !0);
  }
  let meta3 = ctx.metadataRegistry.get(schema);
  return meta3 && Object.assign(result.schema, meta3), ctx.io === "input" && isTransforming(schema) && (delete result.schema.examples, delete result.schema.default), ctx.io === "input" && "_prefault" in result.schema && ((_a3 = result.schema).default ?? (_a3.default = result.schema._prefault)), delete result.schema._prefault, ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
  let root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  let idToSchema = /* @__PURE__ */ new Map();
  for (let entry of ctx.seen.entries()) {
    let id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      let existing = idToSchema.get(id);
      if (existing && existing !== entry[0])
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      idToSchema.set(id, entry[0]);
    }
  }
  let makeURI = (entry) => {
    let defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      let externalId = ctx.external.registry.get(entry[0])?.id, uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId)
        return { ref: uriGenerator(externalId) };
      let id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      return entry[1].defId = id, { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root)
      return { ref: "#" };
    let defUriPrefix = `#/${defsSegment}/`, defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  }, extractToDef = (entry) => {
    if (entry[1].schema.$ref)
      return;
    let seen = entry[1], { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema }, defId && (seen.defId = defId);
    let schema2 = seen.schema;
    for (let key in schema2)
      delete schema2[key];
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw")
    for (let entry of ctx.seen.entries()) {
      let seen = entry[1];
      if (seen.cycle)
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let entry of ctx.seen.entries()) {
    let seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      let ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    if (ctx.metadataRegistry.get(entry[0])?.id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1 && ctx.reused === "ref") {
      extractToDef(entry);
      continue;
    }
  }
}
function finalize(ctx, schema) {
  let root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  let flattenRef = (zodSchema) => {
    let seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    let schema2 = seen.def ?? seen.schema, _cached = { ...schema2 }, ref = seen.ref;
    if (seen.ref = null, ref) {
      flattenRef(ref);
      let refSeen = ctx.seen.get(ref), refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0") ? (schema2.allOf = schema2.allOf ?? [], schema2.allOf.push(refSchema)) : Object.assign(schema2, refSchema), Object.assign(schema2, _cached), zodSchema._zod.parent === ref)
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in _cached || delete schema2[key];
      if (refSchema.$ref && refSeen.def)
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key]) && delete schema2[key];
    }
    let parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      let parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref && (schema2.$ref = parentSeen.schema.$ref, parentSeen.def))
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key]) && delete schema2[key];
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (let entry of [...ctx.seen.entries()].reverse())
    flattenRef(entry[0]);
  let result = {};
  if (ctx.target === "draft-2020-12" ? result.$schema = "https://json-schema.org/draft/2020-12/schema" : ctx.target === "draft-07" ? result.$schema = "http://json-schema.org/draft-07/schema#" : ctx.target === "draft-04" ? result.$schema = "http://json-schema.org/draft-04/schema#" : ctx.target, ctx.external?.uri) {
    let id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  let rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  rootMetaId !== void 0 && result.id === rootMetaId && delete result.id;
  let defs = ctx.external?.defs ?? {};
  for (let entry of ctx.seen.entries()) {
    let seen = entry[1];
    seen.def && seen.defId && (seen.def.id === seen.defId && delete seen.def.id, defs[seen.defId] = seen.def);
  }
  ctx.external || Object.keys(defs).length > 0 && (ctx.target === "draft-2020-12" ? result.$defs = defs : result.definitions = defs);
  try {
    let finalized = JSON.parse(JSON.stringify(result));
    return Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), finalized;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  let ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return !1;
  ctx.seen.add(_schema);
  let def = _schema._zod.def;
  if (def.type === "transform")
    return !0;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault")
    return isTransforming(def.innerType, ctx);
  if (def.type === "intersection")
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  if (def.type === "record" || def.type === "map")
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  if (def.type === "pipe")
    return _schema._zod.traits.has("$ZodCodec") ? !0 : isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  if (def.type === "object") {
    for (let key in def.shape)
      if (isTransforming(def.shape[key], ctx))
        return !0;
    return !1;
  }
  if (def.type === "union") {
    for (let option of def.options)
      if (isTransforming(option, ctx))
        return !0;
    return !1;
  }
  if (def.type === "tuple") {
    for (let item of def.items)
      if (isTransforming(item, ctx))
        return !0;
    return !!(def.rest && isTransforming(def.rest, ctx));
  }
  return !1;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  let ctx = initializeContext({ ...params, processors });
  return process2(schema, ctx), extractDefs(ctx, schema), finalize(ctx, schema);
}, createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  let { libraryOptions, target } = params ?? {}, ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  return process2(schema, ctx), extractDefs(ctx, schema), finalize(ctx, schema);
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, stringProcessor = (schema, ctx, _json, _params) => {
  let json2 = _json;
  json2.type = "string";
  let { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum == "number" && (json2.minLength = minimum), typeof maximum == "number" && (json2.maxLength = maximum), format && (json2.format = formatMap[format] ?? format, json2.format === "" && delete json2.format, format === "time" && delete json2.format), contentEncoding && (json2.contentEncoding = contentEncoding), patterns && patterns.size > 0) {
    let regexes = [...patterns];
    regexes.length === 1 ? json2.pattern = regexes[0].source : regexes.length > 1 && (json2.allOf = [
      ...regexes.map((regex) => ({
        ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: regex.source
      }))
    ]);
  }
}, numberProcessor = (schema, ctx, _json, _params) => {
  let json2 = _json, { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  typeof format == "string" && format.includes("int") ? json2.type = "integer" : json2.type = "number";
  let exMin = typeof exclusiveMinimum == "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY), exMax = typeof exclusiveMaximum == "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY), legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  exMin ? legacy ? (json2.minimum = exclusiveMinimum, json2.exclusiveMinimum = !0) : json2.exclusiveMinimum = exclusiveMinimum : typeof minimum == "number" && (json2.minimum = minimum), exMax ? legacy ? (json2.maximum = exclusiveMaximum, json2.exclusiveMaximum = !0) : json2.exclusiveMaximum = exclusiveMaximum : typeof maximum == "number" && (json2.maximum = maximum), typeof multipleOf == "number" && (json2.multipleOf = multipleOf);
}, booleanProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
}, bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("BigInt cannot be represented in JSON Schema");
}, symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Symbols cannot be represented in JSON Schema");
}, nullProcessor = (_schema, ctx, json2, _params) => {
  ctx.target === "openapi-3.0" ? (json2.type = "string", json2.nullable = !0, json2.enum = [null]) : json2.type = "null";
}, undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Void cannot be represented in JSON Schema");
}, neverProcessor = (_schema, _ctx, json2, _params) => {
  json2.not = {};
}, anyProcessor = (_schema, _ctx, _json, _params) => {
}, unknownProcessor = (_schema, _ctx, _json, _params) => {
}, dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, enumProcessor = (schema, _ctx, json2, _params) => {
  let def = schema._zod.def, values = getEnumValues(def.entries);
  values.every((v) => typeof v == "number") && (json2.type = "number"), values.every((v) => typeof v == "string") && (json2.type = "string"), json2.enum = values;
}, literalProcessor = (schema, ctx, json2, _params) => {
  let def = schema._zod.def, vals = [];
  for (let val of def.values)
    if (val === void 0) {
      if (ctx.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof val == "bigint") {
      if (ctx.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      vals.push(Number(val));
    } else
      vals.push(val);
  if (vals.length !== 0)
    if (vals.length === 1) {
      let val = vals[0];
      json2.type = val === null ? "null" : typeof val, ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? json2.enum = [val] : json2.const = val;
    } else
      vals.every((v) => typeof v == "number") && (json2.type = "number"), vals.every((v) => typeof v == "string") && (json2.type = "string"), vals.every((v) => typeof v == "boolean") && (json2.type = "boolean"), vals.every((v) => v === null) && (json2.type = "null"), json2.enum = vals;
}, nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("NaN cannot be represented in JSON Schema");
}, templateLiteralProcessor = (schema, _ctx, json2, _params) => {
  let _json = json2, pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string", _json.pattern = pattern.source;
}, fileProcessor = (schema, _ctx, json2, _params) => {
  let _json = json2, file2 = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum, maximum, mime: mime2 } = schema._zod.bag;
  minimum !== void 0 && (file2.minLength = minimum), maximum !== void 0 && (file2.maxLength = maximum), mime2 ? mime2.length === 1 ? (file2.contentMediaType = mime2[0], Object.assign(_json, file2)) : (Object.assign(_json, file2), _json.anyOf = mime2.map((m) => ({ contentMediaType: m }))) : Object.assign(_json, file2);
}, successProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
}, customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Function types cannot be represented in JSON Schema");
}, transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw")
    throw new Error("Set cannot be represented in JSON Schema");
}, arrayProcessor = (schema, ctx, _json, params) => {
  let json2 = _json, def = schema._zod.def, { minimum, maximum } = schema._zod.bag;
  typeof minimum == "number" && (json2.minItems = minimum), typeof maximum == "number" && (json2.maxItems = maximum), json2.type = "array", json2.items = process2(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
}, objectProcessor = (schema, ctx, _json, params) => {
  let json2 = _json, def = schema._zod.def;
  json2.type = "object", json2.properties = {};
  let shape = def.shape;
  for (let key in shape)
    json2.properties[key] = process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  let allKeys = new Set(Object.keys(shape)), requiredKeys = new Set([...allKeys].filter((key) => {
    let v = def.shape[key]._zod;
    return ctx.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  requiredKeys.size > 0 && (json2.required = Array.from(requiredKeys)), def.catchall?._zod.def.type === "never" ? json2.additionalProperties = !1 : def.catchall ? def.catchall && (json2.additionalProperties = process2(def.catchall, ctx, {
    ...params,
    path: [...params.path, "additionalProperties"]
  })) : ctx.io === "output" && (json2.additionalProperties = !1);
}, unionProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def, isExclusive = def.inclusive === !1, options = def.options.map((x, i2) => process2(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i2]
  }));
  isExclusive ? json2.oneOf = options : json2.anyOf = options;
}, intersectionProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def, a = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  }), b = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  }), isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1, allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json2.allOf = allOf;
}, tupleProcessor = (schema, ctx, _json, params) => {
  let json2 = _json, def = schema._zod.def;
  json2.type = "array";
  let prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items", restPath = ctx.target === "draft-2020-12" || ctx.target === "openapi-3.0" ? "items" : "additionalItems", prefixItems = def.items.map((x, i2) => process2(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i2]
  })), rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  ctx.target === "draft-2020-12" ? (json2.prefixItems = prefixItems, rest && (json2.items = rest)) : ctx.target === "openapi-3.0" ? (json2.items = {
    anyOf: prefixItems
  }, rest && json2.items.anyOf.push(rest), json2.minItems = prefixItems.length, rest || (json2.maxItems = prefixItems.length)) : (json2.items = prefixItems, rest && (json2.additionalItems = rest));
  let { minimum, maximum } = schema._zod.bag;
  typeof minimum == "number" && (json2.minItems = minimum), typeof maximum == "number" && (json2.maxItems = maximum);
}, recordProcessor = (schema, ctx, _json, params) => {
  let json2 = _json, def = schema._zod.def;
  json2.type = "object";
  let keyType = def.keyType, patterns = keyType._zod.bag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    let valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json2.patternProperties = {};
    for (let pattern of patterns)
      json2.patternProperties[pattern.source] = valueSchema;
  } else
    (ctx.target === "draft-07" || ctx.target === "draft-2020-12") && (json2.propertyNames = process2(def.keyType, ctx, {
      ...params,
      path: [...params.path, "propertyNames"]
    })), json2.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  let keyValues = keyType._zod.values;
  if (keyValues) {
    let validKeyValues = [...keyValues].filter((v) => typeof v == "string" || typeof v == "number");
    validKeyValues.length > 0 && (json2.required = validKeyValues);
  }
}, nullableProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def, inner = process2(def.innerType, ctx, params), seen = ctx.seen.get(schema);
  ctx.target === "openapi-3.0" ? (seen.ref = def.innerType, json2.nullable = !0) : json2.anyOf = [inner, { type: "null" }];
}, nonoptionalProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, defaultProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType, json2.default = JSON.parse(JSON.stringify(def.defaultValue));
}, prefaultProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType, ctx.io === "input" && (json2._prefault = JSON.parse(JSON.stringify(def.defaultValue)));
}, catchProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json2.default = catchValue;
}, pipeProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def, inIsTransform = def.in._zod.traits.has("$ZodTransform"), innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = innerType;
}, readonlyProcessor = (schema, ctx, json2, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType, json2.readOnly = !0;
}, promiseProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, optionalProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  process2(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, lazyProcessor = (schema, ctx, _json, params) => {
  let innerType = schema._zod.innerType;
  process2(innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = innerType;
}, allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    let registry2 = input, ctx2 = initializeContext({ ...params, processors: allProcessors }), defs = {};
    for (let entry of registry2._idmap.entries()) {
      let [_, schema] = entry;
      process2(schema, ctx2);
    }
    let schemas = {}, external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (let entry of registry2._idmap.entries()) {
      let [key, schema] = entry;
      extractDefs(ctx2, schema), schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      let defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  let ctx = initializeContext({ ...params, processors: allProcessors });
  return process2(input, ctx), extractDefs(ctx, input), finalize(ctx, input);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-generator.js
var JSONSchemaGenerator = class {
  /** @deprecated Access via ctx instead */
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  /** @deprecated Access via ctx instead */
  get target() {
    return this.ctx.target;
  }
  /** @deprecated Access via ctx instead */
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  /** @deprecated Access via ctx instead */
  get override() {
    return this.ctx.override;
  }
  /** @deprecated Access via ctx instead */
  get io() {
    return this.ctx.io;
  }
  /** @deprecated Access via ctx instead */
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  /** @deprecated Access via ctx instead */
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    normalizedTarget === "draft-4" && (normalizedTarget = "draft-04"), normalizedTarget === "draft-7" && (normalizedTarget = "draft-07"), this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  /**
   * Process a schema to prepare it for JSON Schema generation.
   * This must be called before emit().
   */
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process2(schema, this.ctx, _params);
  }
  /**
   * Emit the final JSON Schema after processing.
   * Must call process() first.
   */
  emit(schema, _params) {
    _params && (_params.cycles && (this.ctx.cycles = _params.cycles), _params.reused && (this.ctx.reused = _params.reused), _params.external && (this.ctx.external = _params.external)), extractDefs(this.ctx, schema);
    let result = finalize(this.ctx, schema), { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
var schemas_exports2 = {};
__export(schemas_exports2, {
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodIntersection: () => ZodIntersection,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPreprocess: () => ZodPreprocess,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  codec: () => codec,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  float32: () => float32,
  float64: () => float64,
  function: () => _function,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  literal: () => literal,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  mac: () => mac2,
  map: () => map,
  meta: () => meta2,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  never: () => never,
  nonoptional: () => nonoptional,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  prefault: () => prefault,
  preprocess: () => preprocess,
  promise: () => promise,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  set: () => set,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  transform: () => transform,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  url: () => url,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/checks.js
var checks_exports2 = {};
__export(checks_exports2, {
  endsWith: () => _endsWith,
  gt: () => _gt,
  gte: () => _gte,
  includes: () => _includes,
  length: () => _length,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  negative: () => _negative,
  nonnegative: () => _nonnegative,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  overwrite: () => _overwrite,
  positive: () => _positive,
  property: () => _property,
  regex: () => _regex,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  trim: () => _trim,
  uppercase: () => _uppercase
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def), ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def), ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def), ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def), ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues), inst.name = "ZodError", Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2), inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2), inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ZodError = /* @__PURE__ */ $constructor("ZodError", initializer2), ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, {
  Parent: Error
});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
var parse3 = /* @__PURE__ */ _parse(ZodRealError), parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError), safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError), safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError), encode2 = /* @__PURE__ */ _encode(ZodRealError), decode2 = /* @__PURE__ */ _decode(ZodRealError), encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError), decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError), safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError), safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError), safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError), safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
var _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
  let proto = Object.getPrototypeOf(inst), installed = _installedGroups.get(proto);
  if (installed || (installed = /* @__PURE__ */ new Set(), _installedGroups.set(proto, installed)), !installed.has(group)) {
    installed.add(group);
    for (let key in methods) {
      let fn = methods[key];
      Object.defineProperty(proto, key, {
        configurable: !0,
        enumerable: !1,
        get() {
          let bound = fn.bind(this);
          return Object.defineProperty(this, key, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: bound
          }), bound;
        },
        set(v) {
          Object.defineProperty(this, key, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: v
          });
        }
      });
    }
  }
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => ($ZodType.init(inst, def), Object.assign(inst["~standard"], {
  jsonSchema: {
    input: createStandardJSONSchemaMethod(inst, "input"),
    output: createStandardJSONSchemaMethod(inst, "output")
  }
}), inst.toJSONSchema = createToJSONSchemaMethod(inst, {}), inst.def = def, inst.type = def.type, Object.defineProperty(inst, "_def", { value: def }), inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse }), inst.safeParse = (data, params) => safeParse2(inst, data, params), inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync }), inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params), inst.spa = inst.safeParseAsync, inst.encode = (data, params) => encode2(inst, data, params), inst.decode = (data, params) => decode2(inst, data, params), inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params), inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params), inst.safeEncode = (data, params) => safeEncode2(inst, data, params), inst.safeDecode = (data, params) => safeDecode2(inst, data, params), inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params), inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params), _installLazyMethods(inst, "ZodType", {
  check(...chks) {
    let def2 = this.def;
    return this.clone(util_exports.mergeDefs(def2, {
      checks: [
        ...def2.checks ?? [],
        ...chks.map((ch) => typeof ch == "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: !0 });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def2, params) {
    return clone(this, def2, params);
  },
  brand() {
    return this;
  },
  register(reg, meta3) {
    return reg.add(this, meta3), this;
  },
  refine(check2, params) {
    return this.check(refine(check2, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default2(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch2(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    let cl = this.clone();
    return globalRegistry.add(cl, { description }), cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    let cl = this.clone();
    return globalRegistry.add(cl, args[0]), cl;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn) {
    return fn(this);
  }
}), Object.defineProperty(inst, "description", {
  get() {
    return globalRegistry.get(inst)?.description;
  },
  configurable: !0
}), inst)), _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => stringProcessor(inst, ctx, json2, params);
  let bag = inst._zod.bag;
  inst.format = bag.format ?? null, inst.minLength = bag.minimum ?? null, inst.maxLength = bag.maximum ?? null, _installLazyMethods(inst, "_ZodString", {
    regex(...args) {
      return this.check(_regex(...args));
    },
    includes(...args) {
      return this.check(_includes(...args));
    },
    startsWith(...args) {
      return this.check(_startsWith(...args));
    },
    endsWith(...args) {
      return this.check(_endsWith(...args));
    },
    min(...args) {
      return this.check(_minLength(...args));
    },
    max(...args) {
      return this.check(_maxLength(...args));
    },
    length(...args) {
      return this.check(_length(...args));
    },
    nonempty(...args) {
      return this.check(_minLength(1, ...args));
    },
    lowercase(params) {
      return this.check(_lowercase(params));
    },
    uppercase(params) {
      return this.check(_uppercase(params));
    },
    trim() {
      return this.check(_trim());
    },
    normalize(...args) {
      return this.check(_normalize(...args));
    },
    toLowerCase() {
      return this.check(_toLowerCase());
    },
    toUpperCase() {
      return this.check(_toUpperCase());
    },
    slugify() {
      return this.check(_slugify());
    }
  });
}), ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def), _ZodString.init(inst, def), inst.email = (params) => inst.check(_email(ZodEmail, params)), inst.url = (params) => inst.check(_url(ZodURL, params)), inst.jwt = (params) => inst.check(_jwt(ZodJWT, params)), inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params)), inst.guid = (params) => inst.check(_guid(ZodGUID, params)), inst.uuid = (params) => inst.check(_uuid(ZodUUID, params)), inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params)), inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params)), inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params)), inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params)), inst.guid = (params) => inst.check(_guid(ZodGUID, params)), inst.cuid = (params) => inst.check(_cuid(ZodCUID, params)), inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params)), inst.ulid = (params) => inst.check(_ulid(ZodULID, params)), inst.base64 = (params) => inst.check(_base64(ZodBase64, params)), inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params)), inst.xid = (params) => inst.check(_xid(ZodXID, params)), inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params)), inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params)), inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params)), inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params)), inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params)), inst.e164 = (params) => inst.check(_e164(ZodE164, params)), inst.datetime = (params) => inst.check(datetime2(params)), inst.date = (params) => inst.check(date2(params)), inst.time = (params) => inst.check(time2(params)), inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def), _ZodString.init(inst, def);
}), ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def), ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def), ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: regexes_exports.httpProtocol,
    hostname: regexes_exports.domain,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def), ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def), ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def), ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def), ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def), ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def), ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def), ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
  $ZodMAC.init(inst, def), ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def), ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def), ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def), ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def), ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def), ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def), ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def), ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def), ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", regexes_exports.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", regexes_exports.hex, _params);
}
function hash(alg, params) {
  let enc = params?.enc ?? "hex", format = `${alg}_${enc}`, regex = regexes_exports[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => numberProcessor(inst, ctx, json2, params), _installLazyMethods(inst, "ZodNumber", {
    gt(value, params) {
      return this.check(_gt(value, params));
    },
    gte(value, params) {
      return this.check(_gte(value, params));
    },
    min(value, params) {
      return this.check(_gte(value, params));
    },
    lt(value, params) {
      return this.check(_lt(value, params));
    },
    lte(value, params) {
      return this.check(_lte(value, params));
    },
    max(value, params) {
      return this.check(_lte(value, params));
    },
    int(params) {
      return this.check(int(params));
    },
    safe(params) {
      return this.check(int(params));
    },
    positive(params) {
      return this.check(_gt(0, params));
    },
    nonnegative(params) {
      return this.check(_gte(0, params));
    },
    negative(params) {
      return this.check(_lt(0, params));
    },
    nonpositive(params) {
      return this.check(_lte(0, params));
    },
    multipleOf(value, params) {
      return this.check(_multipleOf(value, params));
    },
    step(value, params) {
      return this.check(_multipleOf(value, params));
    },
    finite() {
      return this;
    }
  });
  let bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5), inst.isFinite = !0, inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def), ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => booleanProcessor(inst, ctx, json2, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => bigintProcessor(inst, ctx, json2, params), inst.gte = (value, params) => inst.check(_gte(value, params)), inst.min = (value, params) => inst.check(_gte(value, params)), inst.gt = (value, params) => inst.check(_gt(value, params)), inst.gte = (value, params) => inst.check(_gte(value, params)), inst.min = (value, params) => inst.check(_gte(value, params)), inst.lt = (value, params) => inst.check(_lt(value, params)), inst.lte = (value, params) => inst.check(_lte(value, params)), inst.max = (value, params) => inst.check(_lte(value, params)), inst.positive = (params) => inst.check(_gt(BigInt(0), params)), inst.negative = (params) => inst.check(_lt(BigInt(0), params)), inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params)), inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params)), inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  let bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null, inst.maxValue = bag.maximum ?? null, inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def), ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => symbolProcessor(inst, ctx, json2, params);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => undefinedProcessor(inst, ctx, json2, params);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => nullProcessor(inst, ctx, json2, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => anyProcessor(inst, ctx, json2, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => unknownProcessor(inst, ctx, json2, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => neverProcessor(inst, ctx, json2, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => voidProcessor(inst, ctx, json2, params);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => dateProcessor(inst, ctx, json2, params), inst.min = (value, params) => inst.check(_gte(value, params)), inst.max = (value, params) => inst.check(_lte(value, params));
  let c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null, inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => arrayProcessor(inst, ctx, json2, params), inst.element = def.element, _installLazyMethods(inst, "ZodArray", {
    min(n, params) {
      return this.check(_minLength(n, params));
    },
    nonempty(params) {
      return this.check(_minLength(1, params));
    },
    max(n, params) {
      return this.check(_maxLength(n, params));
    },
    length(n, params) {
      return this.check(_length(n, params));
    },
    unwrap() {
      return this.element;
    }
  });
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  let shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => objectProcessor(inst, ctx, json2, params), util_exports.defineLazy(inst, "shape", () => def.shape), _installLazyMethods(inst, "ZodObject", {
    keyof() {
      return _enum2(Object.keys(this._zod.def.shape));
    },
    catchall(catchall) {
      return this.clone({ ...this._zod.def, catchall });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: never() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(incoming) {
      return util_exports.extend(this, incoming);
    },
    safeExtend(incoming) {
      return util_exports.safeExtend(this, incoming);
    },
    merge(other) {
      return util_exports.merge(this, other);
    },
    pick(mask) {
      return util_exports.pick(this, mask);
    },
    omit(mask) {
      return util_exports.omit(this, mask);
    },
    partial(...args) {
      return util_exports.partial(ZodOptional, this, args[0]);
    },
    required(...args) {
      return util_exports.required(ZodNonOptional, this, args[0]);
    }
  });
});
function object(shape, params) {
  let def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...util_exports.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params), inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
  ZodUnion.init(inst, def), $ZodXor.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params), inst.options = def.options;
});
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: !1,
    ...util_exports.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def), $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => intersectionProcessor(inst, ctx, json2, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => tupleProcessor(inst, ctx, json2, params), inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  let hasRest = _paramsOrRest instanceof $ZodType, params = hasRest ? _params : _paramsOrRest, rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util_exports.normalizeParams(params)
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => recordProcessor(inst, ctx, json2, params), inst.keyType = def.keyType, inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return !valueType || !valueType._zod ? new ZodRecord({
    type: "record",
    keyType: string2(),
    valueType: keyType,
    ...util_exports.normalizeParams(valueType)
  }) : new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  let k = clone(keyType);
  return k._zod.values = void 0, new ZodRecord({
    type: "record",
    keyType: k,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...util_exports.normalizeParams(params)
  });
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => mapProcessor(inst, ctx, json2, params), inst.keyType = def.keyType, inst.valueType = def.valueType, inst.min = (...args) => inst.check(_minSize(...args)), inst.nonempty = (params) => inst.check(_minSize(1, params)), inst.max = (...args) => inst.check(_maxSize(...args)), inst.size = (...args) => inst.check(_size(...args));
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => setProcessor(inst, ctx, json2, params), inst.min = (...args) => inst.check(_minSize(...args)), inst.nonempty = (params) => inst.check(_minSize(1, params)), inst.max = (...args) => inst.check(_maxSize(...args)), inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => enumProcessor(inst, ctx, json2, params), inst.enum = def.entries, inst.options = Object.values(def.entries);
  let keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    let newEntries = {};
    for (let value of values)
      if (keys.has(value))
        newEntries[value] = def.entries[value];
      else
        throw new Error(`Key ${value} not found in enum`);
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  }, inst.exclude = (values, params) => {
    let newEntries = { ...def.entries };
    for (let value of values)
      if (keys.has(value))
        delete newEntries[value];
      else
        throw new Error(`Key ${value} not found in enum`);
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  let entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => literalProcessor(inst, ctx, json2, params), inst.values = new Set(def.values), Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => fileProcessor(inst, ctx, json2, params), inst.min = (size, params) => inst.check(_minSize(size, params)), inst.max = (size, params) => inst.check(_maxSize(size, params)), inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => transformProcessor(inst, ctx, json2, params), inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    payload.addIssue = (issue2) => {
      if (typeof issue2 == "string")
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      else {
        let _issue = issue2;
        _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), _issue.input ?? (_issue.input = payload.value), _issue.inst ?? (_issue.inst = inst), payload.issues.push(util_exports.issue(_issue));
      }
    };
    let output = def.transform(payload.value, payload);
    return output instanceof Promise ? output.then((output2) => (payload.value = output2, payload.fallback = !0, payload)) : (payload.value = output, payload.fallback = !0, payload);
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => nullableProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => defaultProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType, inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => prefaultProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => nonoptionalProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => successProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => catchProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType, inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue == "function" ? catchValue : () => catchValue
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => nanProcessor(inst, ctx, json2, params);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => pipeProcessor(inst, ctx, json2, params), inst.in = def.in, inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
  ZodPipe.init(inst, def), $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
function invertCodec(codec2) {
  let def = codec2._zod.def;
  return new ZodCodec({
    type: "pipe",
    in: def.out,
    out: def.in,
    transform: def.reverseTransform,
    reverseTransform: def.transform
  });
}
var ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
  ZodPipe.init(inst, def), $ZodPreprocess.init(inst, def);
}), ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => readonlyProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => templateLiteralProcessor(inst, ctx, json2, params);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => lazyProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => promiseProcessor(inst, ctx, json2, params), inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
  $ZodFunction.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => functionProcessor(inst, ctx, json2, params);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
    output: params?.output ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def), ZodType.init(inst, def), inst._zod.processJSONSchema = (ctx, json2, params) => customProcessor(inst, ctx, json2, params);
});
function check(fn) {
  let ch = new $ZodCheck({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return ch._zod.check = fn, ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => !0), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
var describe2 = describe, meta2 = meta;
function _instanceof(cls, params = {}) {
  let inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: !0,
    ...util_exports.normalizeParams(params)
  });
  return inst._zod.bag.Class = cls, inst._zod.check = (payload) => {
    payload.value instanceof cls || payload.issues.push({
      code: "invalid_type",
      expected: cls.name,
      input: payload.value,
      inst,
      path: [...inst._zod.def.path ?? []]
    });
  }, inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
function json(params) {
  let jsonSchema = lazy(() => union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]));
  return jsonSchema;
}
function preprocess(fn, schema) {
  return new ZodPreprocess({
    type: "pipe",
    in: transform(fn),
    out: schema
  });
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {});

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/from-json-schema.js
var z = {
  ...schemas_exports2,
  ...checks_exports2,
  iso: iso_exports
}, RECOGNIZED_KEYS = /* @__PURE__ */ new Set([
  // Schema identification
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  // Core schema keywords
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  // Type
  "type",
  "enum",
  "const",
  // Composition
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  // Object
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  // Array
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  // String
  "minLength",
  "maxLength",
  "pattern",
  "format",
  // Number
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  // Already handled metadata
  "description",
  "default",
  // Content
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  // Unsupported (error-throwing)
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  // OpenAPI
  "nullable",
  "readOnly"
]);
function detectVersion(schema, defaultTarget) {
  let $schema = schema.$schema;
  return $schema === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : $schema === "http://json-schema.org/draft-07/schema#" ? "draft-7" : $schema === "http://json-schema.org/draft-04/schema#" ? "draft-4" : defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let path = ref.slice(1).split("/").filter(Boolean);
  if (path.length === 0)
    return ctx.rootSchema;
  let defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path[0] === defsKey) {
    let key = path[1];
    if (!key || !ctx.defs[key])
      throw new Error(`Reference not found: ${ref}`);
    return ctx.defs[key];
  }
  throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema, ctx) {
  if (schema.not !== void 0) {
    if (typeof schema.not == "object" && Object.keys(schema.not).length === 0)
      return z.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema.unevaluatedItems !== void 0)
    throw new Error("unevaluatedItems is not supported");
  if (schema.unevaluatedProperties !== void 0)
    throw new Error("unevaluatedProperties is not supported");
  if (schema.if !== void 0 || schema.then !== void 0 || schema.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (schema.dependentSchemas !== void 0 || schema.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (schema.$ref) {
    let refPath = schema.$ref;
    if (ctx.refs.has(refPath))
      return ctx.refs.get(refPath);
    if (ctx.processing.has(refPath))
      return z.lazy(() => {
        if (!ctx.refs.has(refPath))
          throw new Error(`Circular reference not resolved: ${refPath}`);
        return ctx.refs.get(refPath);
      });
    ctx.processing.add(refPath);
    let resolved = resolveRef(refPath, ctx), zodSchema2 = convertSchema(resolved, ctx);
    return ctx.refs.set(refPath, zodSchema2), ctx.processing.delete(refPath), zodSchema2;
  }
  if (schema.enum !== void 0) {
    let enumValues = schema.enum;
    if (ctx.version === "openapi-3.0" && schema.nullable === !0 && enumValues.length === 1 && enumValues[0] === null)
      return z.null();
    if (enumValues.length === 0)
      return z.never();
    if (enumValues.length === 1)
      return z.literal(enumValues[0]);
    if (enumValues.every((v) => typeof v == "string"))
      return z.enum(enumValues);
    let literalSchemas = enumValues.map((v) => z.literal(v));
    return literalSchemas.length < 2 ? literalSchemas[0] : z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema.const !== void 0)
    return z.literal(schema.const);
  let type = schema.type;
  if (Array.isArray(type)) {
    let typeSchemas = type.map((t) => {
      let typeSchema = { ...schema, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    return typeSchemas.length === 0 ? z.never() : typeSchemas.length === 1 ? typeSchemas[0] : z.union(typeSchemas);
  }
  if (!type)
    return z.any();
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema.format) {
        let format = schema.format;
        format === "email" ? stringSchema = stringSchema.check(z.email()) : format === "uri" || format === "uri-reference" ? stringSchema = stringSchema.check(z.url()) : format === "uuid" || format === "guid" ? stringSchema = stringSchema.check(z.uuid()) : format === "date-time" ? stringSchema = stringSchema.check(z.iso.datetime()) : format === "date" ? stringSchema = stringSchema.check(z.iso.date()) : format === "time" ? stringSchema = stringSchema.check(z.iso.time()) : format === "duration" ? stringSchema = stringSchema.check(z.iso.duration()) : format === "ipv4" ? stringSchema = stringSchema.check(z.ipv4()) : format === "ipv6" ? stringSchema = stringSchema.check(z.ipv6()) : format === "mac" ? stringSchema = stringSchema.check(z.mac()) : format === "cidr" ? stringSchema = stringSchema.check(z.cidrv4()) : format === "cidr-v6" ? stringSchema = stringSchema.check(z.cidrv6()) : format === "base64" ? stringSchema = stringSchema.check(z.base64()) : format === "base64url" ? stringSchema = stringSchema.check(z.base64url()) : format === "e164" ? stringSchema = stringSchema.check(z.e164()) : format === "jwt" ? stringSchema = stringSchema.check(z.jwt()) : format === "emoji" ? stringSchema = stringSchema.check(z.emoji()) : format === "nanoid" ? stringSchema = stringSchema.check(z.nanoid()) : format === "cuid" ? stringSchema = stringSchema.check(z.cuid()) : format === "cuid2" ? stringSchema = stringSchema.check(z.cuid2()) : format === "ulid" ? stringSchema = stringSchema.check(z.ulid()) : format === "xid" ? stringSchema = stringSchema.check(z.xid()) : format === "ksuid" && (stringSchema = stringSchema.check(z.ksuid()));
      }
      typeof schema.minLength == "number" && (stringSchema = stringSchema.min(schema.minLength)), typeof schema.maxLength == "number" && (stringSchema = stringSchema.max(schema.maxLength)), schema.pattern && (stringSchema = stringSchema.regex(new RegExp(schema.pattern))), zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      typeof schema.minimum == "number" && (numberSchema = numberSchema.min(schema.minimum)), typeof schema.maximum == "number" && (numberSchema = numberSchema.max(schema.maximum)), typeof schema.exclusiveMinimum == "number" ? numberSchema = numberSchema.gt(schema.exclusiveMinimum) : schema.exclusiveMinimum === !0 && typeof schema.minimum == "number" && (numberSchema = numberSchema.gt(schema.minimum)), typeof schema.exclusiveMaximum == "number" ? numberSchema = numberSchema.lt(schema.exclusiveMaximum) : schema.exclusiveMaximum === !0 && typeof schema.maximum == "number" && (numberSchema = numberSchema.lt(schema.maximum)), typeof schema.multipleOf == "number" && (numberSchema = numberSchema.multipleOf(schema.multipleOf)), zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      let shape = {}, properties = schema.properties || {}, requiredSet = new Set(schema.required || []);
      for (let [key, propSchema] of Object.entries(properties)) {
        let propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema.propertyNames) {
        let keySchema = convertSchema(schema.propertyNames, ctx), valueSchema = schema.additionalProperties && typeof schema.additionalProperties == "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        let objectSchema2 = z.object(shape).passthrough(), recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema.patternProperties) {
        let patternProps = schema.patternProperties, patternKeys = Object.keys(patternProps), looseRecords = [];
        for (let pattern of patternKeys) {
          let patternValue = convertSchema(patternProps[pattern], ctx), keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        let schemasToIntersect = [];
        if (Object.keys(shape).length > 0 && schemasToIntersect.push(z.object(shape).passthrough()), schemasToIntersect.push(...looseRecords), schemasToIntersect.length === 0)
          zodSchema = z.object({}).passthrough();
        else if (schemasToIntersect.length === 1)
          zodSchema = schemasToIntersect[0];
        else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i2 = 2; i2 < schemasToIntersect.length; i2++)
            result = z.intersection(result, schemasToIntersect[i2]);
          zodSchema = result;
        }
        break;
      }
      let objectSchema = z.object(shape);
      schema.additionalProperties === !1 ? zodSchema = objectSchema.strict() : typeof schema.additionalProperties == "object" ? zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx)) : zodSchema = objectSchema.passthrough();
      break;
    }
    case "array": {
      let prefixItems = schema.prefixItems, items = schema.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        let tupleItems = prefixItems.map((item) => convertSchema(item, ctx)), rest = items && typeof items == "object" && !Array.isArray(items) ? convertSchema(items, ctx) : void 0;
        rest ? zodSchema = z.tuple(tupleItems).rest(rest) : zodSchema = z.tuple(tupleItems), typeof schema.minItems == "number" && (zodSchema = zodSchema.check(z.minLength(schema.minItems))), typeof schema.maxItems == "number" && (zodSchema = zodSchema.check(z.maxLength(schema.maxItems)));
      } else if (Array.isArray(items)) {
        let tupleItems = items.map((item) => convertSchema(item, ctx)), rest = schema.additionalItems && typeof schema.additionalItems == "object" ? convertSchema(schema.additionalItems, ctx) : void 0;
        rest ? zodSchema = z.tuple(tupleItems).rest(rest) : zodSchema = z.tuple(tupleItems), typeof schema.minItems == "number" && (zodSchema = zodSchema.check(z.minLength(schema.minItems))), typeof schema.maxItems == "number" && (zodSchema = zodSchema.check(z.maxLength(schema.maxItems)));
      } else if (items !== void 0) {
        let element = convertSchema(items, ctx), arraySchema = z.array(element);
        typeof schema.minItems == "number" && (arraySchema = arraySchema.min(schema.minItems)), typeof schema.maxItems == "number" && (arraySchema = arraySchema.max(schema.maxItems)), zodSchema = arraySchema;
      } else
        zodSchema = z.array(z.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
  return zodSchema;
}
function convertSchema(schema, ctx) {
  if (typeof schema == "boolean")
    return schema ? z.any() : z.never();
  let baseSchema = convertBaseSchema(schema, ctx), hasExplicitType = schema.type || schema.enum !== void 0 || schema.const !== void 0;
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    let options = schema.anyOf.map((s) => convertSchema(s, ctx)), anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    let options = schema.oneOf.map((s) => convertSchema(s, ctx)), oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema.allOf && Array.isArray(schema.allOf))
    if (schema.allOf.length === 0)
      baseSchema = hasExplicitType ? baseSchema : z.any();
    else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx), startIdx = hasExplicitType ? 0 : 1;
      for (let i2 = startIdx; i2 < schema.allOf.length; i2++)
        result = z.intersection(result, convertSchema(schema.allOf[i2], ctx));
      baseSchema = result;
    }
  schema.nullable === !0 && ctx.version === "openapi-3.0" && (baseSchema = z.nullable(baseSchema)), schema.readOnly === !0 && (baseSchema = z.readonly(baseSchema)), schema.default !== void 0 && (baseSchema = baseSchema.default(schema.default));
  let extraMeta = {}, coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let key of coreMetadataKeys)
    key in schema && (extraMeta[key] = schema[key]);
  let contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let key of contentMetadataKeys)
    key in schema && (extraMeta[key] = schema[key]);
  for (let key of Object.keys(schema))
    RECOGNIZED_KEYS.has(key) || (extraMeta[key] = schema[key]);
  return Object.keys(extraMeta).length > 0 && ctx.registry.add(baseSchema, extraMeta), schema.description && (baseSchema = baseSchema.describe(schema.description)), baseSchema;
}
function fromJSONSchema(schema, params) {
  if (typeof schema == "boolean")
    return schema ? z.any() : z.never();
  let normalized;
  try {
    normalized = JSON.parse(JSON.stringify(schema));
  } catch {
    throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
  }
  let version2 = detectVersion(normalized, params?.defaultTarget), defs = normalized.$defs || normalized.definitions || {}, ctx = {
    version: version2,
    defs,
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: normalized,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(normalized, ctx);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint3,
  boolean: () => boolean3,
  date: () => date4,
  number: () => number3,
  string: () => string3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/external.js
config(en_default());

// src/workers/local-explorer/common.ts
function validateQuery(schema) {
  return validator("query", async (value, c) => {
    let result;
    try {
      let coerced = coerceValue(schema, value);
      result = await schema.safeParseAsync(coerced);
    } catch (error51) {
      if (error51 instanceof external_exports.ZodError)
        return validationHook({ success: !1, error: error51 }, c);
      throw error51;
    }
    return result.success ? result.data : validationHook(result, c);
  });
}
function validateRequestBody(schema) {
  return validator("json", async (value, c) => {
    let result = await schema.safeParseAsync(value);
    return result.success ? result.data : validationHook(result, c);
  });
}
function coerceValue(schema, value, path = []) {
  if (schema instanceof external_exports.ZodOptional || schema instanceof external_exports.ZodDefault)
    return value === void 0 ? value : coerceValue(schema._zod.def.innerType, value, path);
  if (schema instanceof external_exports.ZodNumber && typeof value == "string") {
    let num = Number(value);
    if (isNaN(num))
      throw new external_exports.ZodError([
        {
          code: "invalid_type",
          expected: "number",
          path,
          message: `Expected query param to be number but received "${value}"`
        }
      ]);
    return num;
  }
  if (schema instanceof external_exports.ZodBoolean && typeof value == "string") {
    if (value === "true") return !0;
    if (value === "false") return !1;
    throw new external_exports.ZodError([
      {
        code: "invalid_type",
        expected: "boolean",
        path,
        message: `Expected query param to be 'true' or 'false' but received "${value}"`
      }
    ]);
  }
  if (schema instanceof external_exports.ZodArray && Array.isArray(value))
    return value.map(
      (item, index) => coerceValue(schema.element, item, [...path, index])
    );
  if (schema instanceof external_exports.ZodObject && typeof value == "object" && value !== null) {
    let result = {};
    for (let [key, propSchema] of Object.entries(schema.shape))
      key in value && (result[key] = coerceValue(
        propSchema,
        value[key],
        [...path, key]
      ));
    return result;
  }
  return value;
}
function validationHook(result, c) {
  let errors = result.error.issues.map((e) => ({
    code: 10001,
    message: e.path.length > 0 ? `${e.path.join(".")}: ${e.message}` : e.message
  }));
  return c.json({ success: !1, errors, messages: [], result: null }, 400);
}
function wrapResponse(result) {
  return {
    success: !0,
    errors: [],
    messages: [],
    result
  };
}
function errorResponse(status, code, message) {
  return Response.json(
    {
      success: !1,
      errors: [{ code, message }],
      messages: [],
      result: null
    },
    { status }
  );
}

// src/workers/local-explorer/generated/zod.gen.ts
var zR2Messages = array(string2()), zR2Errors = array(
  object({
    code: int().gte(1e3),
    message: string2()
  })
), zR2V4Response = object({
  errors: zR2Errors,
  messages: zR2Messages,
  result: record(string2(), unknown()),
  success: literal(!0)
}), zR2BucketName = string2().min(3).max(64).regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]/), zR2V4ResponseFailure = object({
  errors: zR2Errors,
  messages: zR2Messages,
  result: unknown().nullable(),
  success: literal(!1)
}), zR2Bucket = object({
  creation_date: string2().optional(),
  name: zR2BucketName.optional()
}), zR2ResultInfo = record(string2(), unknown()), zR2V4ResponseList = zR2V4Response.and(
  object({
    result_info: zR2ResultInfo.optional()
  })
), zWorkersCursor = string2(), zWorkersObject = object({
  hasStoredData: boolean2().readonly().optional(),
  id: string2().readonly().optional(),
  name: string2().readonly().optional()
}), zWorkersSchemasId = string2(), zWorkersMessages = array(
  object({
    code: int().gte(1e3),
    documentation_url: string2().optional(),
    message: string2(),
    source: object({
      pointer: string2().optional()
    }).optional()
  })
), zWorkersApiResponseCommonFailure = object({
  errors: zWorkersMessages,
  messages: zWorkersMessages,
  result: unknown().nullable(),
  success: literal(!1)
}), zWorkersNamespace = object({
  class: string2().optional(),
  id: string2().readonly().optional(),
  name: string2().optional(),
  script: string2().optional(),
  use_sqlite: boolean2().optional()
}), zWorkersApiResponseCommon = object({
  errors: zWorkersMessages,
  messages: zWorkersMessages,
  success: literal(!0)
}), zWorkersApiResponseCollection = zWorkersApiResponseCommon.and(
  object({
    result_info: object({
      count: number2().optional(),
      page: number2().optional(),
      per_page: number2().optional(),
      total_count: number2().optional(),
      total_pages: number2().optional()
    }).optional()
  })
), zD1QueryMeta = object({
  changed_db: boolean2().optional(),
  changes: number2().optional(),
  duration: number2().optional(),
  last_row_id: number2().optional(),
  rows_read: number2().optional(),
  rows_written: number2().optional(),
  size_after: number2().optional(),
  timings: object({
    sql_duration_ms: number2().optional()
  }).optional()
}), zD1RawResultResponse = object({
  meta: zD1QueryMeta.optional(),
  results: object({
    columns: array(string2()).optional(),
    rows: array(
      array(
        union([number2(), string2(), record(string2(), unknown())])
      )
    ).optional()
  }).optional(),
  success: boolean2().optional()
}), zD1Sql = string2(), zD1Params = array(string2()), zD1SingleQuery = object({
  params: zD1Params.optional(),
  sql: zD1Sql
}), zD1BatchQuery = union([
  zD1SingleQuery,
  object({
    batch: array(zD1SingleQuery)
  })
]), zD1DatabaseIdentifier = string2().readonly(), zD1Messages = array(
  object({
    code: int().gte(1e3),
    message: string2()
  })
), zD1ApiResponseCommonFailure = object({
  errors: zD1Messages,
  messages: zD1Messages,
  result: unknown().nullable(),
  success: literal(!1)
}), zD1DatabaseVersion = string2().regex(/^(alpha|beta|production)$/), zD1DatabaseName = string2().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), zD1JurisdictionNullable = _enum2(["eu", "fedramp"]), zD1DatabaseResponse = object({
  jurisdiction: zD1JurisdictionNullable.optional(),
  name: zD1DatabaseName.optional(),
  uuid: zD1DatabaseIdentifier.optional(),
  version: zD1DatabaseVersion.optional()
}), zD1ApiResponseCommon = object({
  errors: zD1Messages,
  messages: zD1Messages,
  success: literal(!0)
}), zWorkersKvAny = union([
  string2(),
  number2(),
  int(),
  boolean2(),
  record(string2(), unknown()),
  array(lazy(() => zWorkersKvAny))
]).nullable(), zWorkersKvExpiration = number2(), zWorkersKvBulkGetResultWithMetadata = object({
  values: record(
    string2(),
    object({
      expiration: zWorkersKvExpiration.optional(),
      metadata: zWorkersKvAny.and(unknown()),
      value: zWorkersKvAny.and(unknown())
    }).nullable()
  ).optional()
}), zWorkersKvBulkGetResult = object({
  values: record(
    string2(),
    union([
      string2(),
      number2(),
      boolean2(),
      record(string2(), unknown())
    ]).nullable()
  ).optional()
}), zWorkersKvKeyNameBulk = string2().max(512), zWorkersKvMessages = array(
  object({
    code: int().gte(1e3),
    message: string2()
  })
), zWorkersKvApiResponseCommon = object({
  errors: zWorkersKvMessages,
  messages: zWorkersKvMessages,
  success: literal(!0)
}), zWorkersKvApiResponseCommonNoResult = zWorkersKvApiResponseCommon.and(
  object({
    result: record(string2(), unknown()).nullish()
  })
), zWorkersKvMetadata = zWorkersKvAny.and(unknown()), zWorkersKvValue = union([string2(), string2()]), zWorkersKvKeyName = string2().max(512), zWorkersKvCursor = string2(), zWorkersKvCursorResultInfo = object({
  count: number2().optional(),
  cursor: zWorkersKvCursor.optional()
}), zWorkersKvListMetadata = zWorkersKvAny.and(unknown()), zWorkersKvKey = object({
  expiration: number2().optional(),
  metadata: zWorkersKvListMetadata.optional(),
  name: zWorkersKvKeyName
}), zWorkersKvNamespaceIdentifier = string2().max(32).readonly(), zWorkersKvApiResponseCommonFailure = object({
  errors: zWorkersKvMessages,
  messages: zWorkersKvMessages,
  result: record(string2(), unknown()).nullable(),
  success: literal(!1)
}), zWorkersKvNamespaceTitle = string2().max(512), zWorkersKvNamespace = object({
  id: zWorkersKvNamespaceIdentifier,
  title: zWorkersKvNamespaceTitle
}), zWorkersKvResultInfo = object({
  count: number2().optional()
}), zWorkersKvApiResponseCollection = zWorkersKvApiResponseCommon.and(
  object({
    result_info: zWorkersKvResultInfo.optional()
  })
), zR2Object = object({
  key: string2().optional(),
  etag: string2().optional(),
  size: int().optional(),
  last_modified: iso_exports.datetime().optional(),
  http_metadata: record(string2(), string2()).optional(),
  custom_metadata: record(string2(), string2()).optional()
}), zR2ListObjectsResultInfo = object({
  delimited: array(string2()).optional(),
  cursor: string2().optional(),
  is_truncated: string2().optional()
}), zR2HeadObjectResult = object({
  key: string2().optional(),
  etag: string2().optional(),
  last_modified: string2().optional(),
  size: int().optional(),
  http_metadata: record(string2(), string2()).optional(),
  custom_metadata: record(string2(), string2()).optional()
}), zR2PutObjectResult = object({
  key: string2().optional(),
  etag: string2().optional(),
  size: int().optional(),
  version: string2().optional()
}), zDoSqlWithParams = object({
  sql: string2().min(1),
  params: array(unknown()).optional()
}), zDoQueryById = object({
  durable_object_id: string2().min(1),
  queries: array(zDoSqlWithParams)
}), zDoQueryByName = object({
  durable_object_name: string2().min(1),
  queries: array(zDoSqlWithParams)
}), zDoRawQueryResult = object({
  columns: array(string2()).optional(),
  rows: array(array(unknown())).optional(),
  meta: object({
    rows_read: number2().optional(),
    rows_written: number2().optional()
  }).optional()
}), zLocalExplorerNamedBinding = object({
  bindingName: string2()
}), zLocalExplorerResourceBinding = object({
  id: string2(),
  bindingName: string2()
}), zLocalExplorerDoBinding = object({
  id: string2(),
  bindingName: string2(),
  className: string2(),
  scriptName: string2(),
  useSqlite: boolean2()
}), zLocalExplorerWorkflowBinding = object({
  id: string2(),
  bindingName: string2(),
  className: string2(),
  scriptName: string2()
}), zLocalExplorerWorkerBindings = object({
  kv: array(zLocalExplorerResourceBinding).optional(),
  d1: array(zLocalExplorerResourceBinding).optional(),
  r2: array(zLocalExplorerResourceBinding).optional(),
  do: array(zLocalExplorerDoBinding).optional(),
  workflows: array(zLocalExplorerWorkflowBinding).optional(),
  sendEmail: array(zLocalExplorerNamedBinding).optional()
}), zLocalExplorerWorker = object({
  isSelf: boolean2(),
  name: string2(),
  bindings: zLocalExplorerWorkerBindings.optional()
}), zWorkflowsWorkflowName = string2(), zWorkflowsInstanceId = string2(), zWorkflowsWorkflow = object({
  name: string2(),
  class_name: string2().optional(),
  script_name: string2().optional()
}), zWorkflowsWorkflowDetails = object({
  name: string2(),
  class_name: string2(),
  script_name: string2(),
  instances: object({
    complete: number2().optional(),
    errored: number2().optional(),
    paused: number2().optional(),
    queued: number2().optional(),
    running: number2().optional(),
    terminated: number2().optional(),
    waiting: number2().optional(),
    waitingForPause: number2().optional()
  })
}), zWorkflowsInstance = object({
  id: string2(),
  status: _enum2([
    "queued",
    "running",
    "paused",
    "errored",
    "terminated",
    "complete",
    "waitingForPause",
    "waiting",
    "unknown"
  ]).optional(),
  created_on: string2().optional()
}), zWorkflowsInstanceDetails = object({
  id: string2(),
  status: _enum2([
    "queued",
    "running",
    "paused",
    "errored",
    "terminated",
    "complete",
    "waitingForPause",
    "waiting",
    "unknown"
  ]),
  output: unknown().optional(),
  error: object({
    name: string2().optional(),
    message: string2().optional()
  }).optional()
}), zObservabilityQueryResult = object({
  columns: array(string2()),
  rows: array(array(unknown()))
}), zEmailHandlerEvent = union([
  object({
    type: _enum2(["received", "reject", "unhandled"]),
    timestamp: string2()
  }),
  object({
    type: _enum2(["forward", "reply"]),
    timestamp: string2(),
    messageId: string2()
  })
]), zEmailHandlerForward = object({
  messageId: string2(),
  recipient: string2(),
  headers: array(tuple([string2(), string2()]))
}), zEmailHandlerReply = object({
  messageId: string2(),
  sender: string2(),
  raw: string2().optional(),
  rawBase64: string2().optional()
}), zEmailSendRequest = object({
  from: string2(),
  to: array(string2()).min(1),
  cc: array(string2()).optional(),
  bcc: array(string2()).optional(),
  replyTo: string2().optional(),
  subject: string2(),
  text: string2().optional(),
  html: string2().optional(),
  headers: record(string2(), string2()).optional(),
  attachments: array(
    object({
      filename: string2(),
      type: string2(),
      content: string2(),
      contentId: string2().optional(),
      disposition: _enum2(["inline", "attachment"]).optional()
    })
  ).optional()
}), zEmailAttachment = object({
  filename: string2(),
  contentType: string2(),
  disposition: _enum2(["inline", "attachment"]),
  size: number2()
}), zEmailBase = object({
  worker: string2().optional(),
  from: string2(),
  subject: string2(),
  messageId: string2(),
  attachments: array(zEmailAttachment)
}), zEmailRoutingItem = object({
  worker: string2().optional(),
  from: string2(),
  subject: string2(),
  messageId: string2(),
  attachments: array(zEmailAttachment),
  to: string2(),
  cc: array(string2()).optional(),
  headers: record(string2(), string2()).optional(),
  headerEntries: array(tuple([string2(), string2()])).optional(),
  receivedAt: string2(),
  rawSize: number2(),
  outcome: _enum2(["ok", "exception"]),
  rejectReason: string2().optional(),
  forwards: array(zEmailHandlerForward),
  replies: array(zEmailHandlerReply),
  events: array(zEmailHandlerEvent)
}), zEmailRoutingDetail = object({
  worker: string2().optional(),
  from: string2(),
  subject: string2(),
  messageId: string2(),
  attachments: array(zEmailAttachment),
  to: string2(),
  cc: array(string2()).optional(),
  headers: record(string2(), string2()).optional(),
  headerEntries: array(tuple([string2(), string2()])).optional(),
  receivedAt: string2(),
  rawSize: number2(),
  outcome: _enum2(["ok", "exception"]),
  rejectReason: string2().optional(),
  forwards: array(zEmailHandlerForward),
  replies: array(zEmailHandlerReply),
  events: array(zEmailHandlerEvent),
  text: string2().optional(),
  html: string2().optional(),
  raw: string2(),
  rawBase64: string2().optional()
}), zEmailSendingItem = object({
  worker: string2().optional(),
  from: string2(),
  subject: string2(),
  messageId: string2(),
  attachments: array(zEmailAttachment),
  to: array(string2()),
  cc: array(string2()).optional(),
  bcc: array(string2()).optional(),
  replyTo: string2().optional(),
  sentAt: string2(),
  headers: record(string2(), string2()).optional()
}), zEmailSendingDetail = object({
  worker: string2().optional(),
  from: string2(),
  subject: string2(),
  messageId: string2(),
  attachments: array(zEmailAttachment),
  to: array(string2()),
  cc: array(string2()).optional(),
  bcc: array(string2()).optional(),
  replyTo: string2().optional(),
  sentAt: string2(),
  headers: record(string2(), string2()).optional(),
  text: string2().optional(),
  html: string2().optional(),
  raw: string2().optional(),
  rawBase64: string2().optional()
}), zR2ResultInfoWritable = record(string2(), unknown()), zWorkersNamespaceWritable = object({
  class: string2().optional(),
  name: string2().optional(),
  script: string2().optional(),
  use_sqlite: boolean2().optional()
}), zD1DatabaseResponseWritable = object({
  jurisdiction: zD1JurisdictionNullable.optional(),
  name: zD1DatabaseName.optional(),
  version: zD1DatabaseVersion.optional()
}), zWorkersKvAnyWritable = union([
  string2(),
  number2(),
  int(),
  boolean2(),
  record(string2(), unknown()),
  array(lazy(() => zWorkersKvAnyWritable))
]).nullable(), zWorkersKvMetadataWritable = zWorkersKvAnyWritable.and(
  unknown()
), zWorkersKvListMetadataWritable = zWorkersKvAnyWritable.and(
  unknown()
), zWorkersKvNamespaceWritable = object({
  title: zWorkersKvNamespaceTitle
}), zWorkersKvNamespaceListNamespacesData = object({
  body: never().optional(),
  path: never().optional(),
  query: object({
    order: _enum2(["id", "title"]).optional(),
    direction: _enum2(["asc", "desc"]).optional()
  }).optional()
}), zWorkersKvNamespaceListNamespacesResponse = zWorkersKvApiResponseCollection.and(
  object({
    result: array(zWorkersKvNamespace).optional()
  })
), zWorkersKvNamespaceListANamespaceSKeysData = object({
  body: never().optional(),
  path: object({
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: object({
    limit: number2().gte(10).lte(1e3).optional().default(1e3),
    prefix: string2().optional(),
    cursor: string2().optional()
  }).optional()
}), zWorkersKvNamespaceListANamespaceSKeysResponse = zWorkersKvApiResponseCommon.and(
  object({
    result: array(zWorkersKvKey).optional(),
    result_info: zWorkersKvCursorResultInfo.optional()
  })
), zWorkersKvNamespaceDeleteKeyValuePairData = object({
  body: unknown(),
  path: object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: never().optional()
});
var zWorkersKvNamespaceReadKeyValuePairData = object({
  body: never().optional(),
  path: object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: never().optional()
});
var zWorkersKvNamespaceWriteKeyValuePairWithMetadataData = object({
  body: zWorkersKvValue,
  path: object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: never().optional()
});
var zWorkersKvNamespaceGetMultipleKeyValuePairsData = object({
  body: object({
    keys: array(zWorkersKvKeyNameBulk).max(100)
  }),
  path: object({
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: never().optional()
}), zWorkersKvNamespaceGetMultipleKeyValuePairsResponse = zWorkersKvApiResponseCommonNoResult.and(
  object({
    result: union([zWorkersKvBulkGetResult, zWorkersKvBulkGetResultWithMetadata]).optional()
  })
), zD1ListDatabasesData = object({
  body: never().optional(),
  path: never().optional(),
  query: object({
    name: string2().optional()
  }).optional()
}), zD1ListDatabasesResponse = zD1ApiResponseCommon.and(
  object({
    result: array(zD1DatabaseResponse).optional(),
    result_info: object({
      count: number2().optional()
    }).optional()
  })
), zD1RawDatabaseQueryData = object({
  body: zD1BatchQuery,
  path: object({
    database_id: zD1DatabaseIdentifier
  }),
  query: never().optional()
}), zD1RawDatabaseQueryResponse = zD1ApiResponseCommon.and(
  object({
    result: array(zD1RawResultResponse).optional()
  })
), zDurableObjectsNamespaceListNamespacesData = object({
  body: never().optional(),
  path: never().optional(),
  query: never().optional()
}), zDurableObjectsNamespaceListNamespacesResponse = zWorkersApiResponseCollection.and(
  object({
    result: array(zWorkersNamespace).optional()
  })
), zDurableObjectsNamespaceListObjectsData = object({
  body: never().optional(),
  path: object({
    id: zWorkersSchemasId
  }),
  query: object({
    limit: number2().gte(10).lte(1e4).optional().default(1e3),
    cursor: string2().optional()
  }).optional()
}), zDurableObjectsNamespaceListObjectsResponse = zWorkersApiResponseCollection.and(
  object({
    result: array(zWorkersObject).optional(),
    result_info: object({
      count: number2().optional(),
      cursor: zWorkersCursor.optional()
    }).optional()
  })
), zR2ListBucketsData = object({
  body: never().optional(),
  path: never().optional(),
  query: never().optional()
}), zR2ListBucketsResponse = zR2V4ResponseList.and(
  object({
    result: object({
      buckets: array(zR2Bucket).optional()
    }).optional()
  })
), zR2GetBucketData = object({
  body: never().optional(),
  path: object({
    bucket_name: zR2BucketName
  }),
  query: never().optional()
}), zR2GetBucketResponse = zR2V4Response.and(
  object({
    result: zR2Bucket.optional()
  })
), zR2BucketDeleteObjectsData = object({
  body: array(string2()),
  path: object({
    bucket_name: string2()
  }),
  query: never().optional()
}), zR2BucketDeleteObjectsResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(
      object({
        key: string2().optional()
      })
    ).optional()
  })
), zR2BucketListObjectsData = object({
  body: never().optional(),
  path: object({
    bucket_name: string2()
  }),
  query: object({
    prefix: string2().optional(),
    delimiter: string2().optional(),
    cursor: string2().optional(),
    per_page: int().optional().default(1e3)
  }).optional()
}), zR2BucketListObjectsResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(zR2Object).optional(),
    result_info: zR2ListObjectsResultInfo.optional()
  })
), zR2BucketGetObjectData = object({
  body: never().optional(),
  path: object({
    bucket_name: string2(),
    object_key: string2()
  }),
  query: never().optional(),
  headers: object({
    "cf-metadata-only": string2().optional()
  }).optional()
}), zR2BucketGetObjectResponse = zWorkersApiResponseCommon.and(
  object({
    result: zR2HeadObjectResult.optional()
  })
), zR2BucketPutObjectData = object({
  body: string2(),
  path: object({
    bucket_name: string2(),
    object_key: string2()
  }),
  query: never().optional(),
  headers: object({
    "content-type": string2().optional(),
    "cf-r2-custom-metadata": string2().optional()
  }).optional()
}), zR2BucketPutObjectResponse = zWorkersApiResponseCommon.and(
  object({
    result: zR2PutObjectResult.optional()
  })
), zDurableObjectsNamespaceQuerySqliteData = object({
  body: union([zDoQueryById, zDoQueryByName]),
  path: object({
    namespace_id: zWorkersSchemasId
  }),
  query: never().optional()
}), zDurableObjectsNamespaceQuerySqliteResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(zDoRawQueryResult).optional()
  })
), zLocalExplorerListWorkersData = object({
  body: never().optional(),
  path: never().optional(),
  query: never().optional()
}), zLocalExplorerListWorkersResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(zLocalExplorerWorker).optional()
  })
), zEmailListRoutingData = object({
  body: never().optional(),
  path: never().optional(),
  query: object({
    worker: string2().optional(),
    email_id: string2().optional(),
    cursor: string2().optional(),
    per_page: int().gte(1).lte(100).optional().default(25)
  }).optional()
}), zEmailListRoutingResponse = zWorkersApiResponseCommon.and(
  object({
    result: union([array(zEmailRoutingItem), zEmailRoutingDetail]).optional(),
    result_info: object({
      count: number2().optional(),
      cursor: string2().optional(),
      per_page: int().optional(),
      has_more: boolean2().optional()
    }).optional()
  })
), zEmailSendRoutingData = object({
  body: zEmailSendRequest,
  path: never().optional(),
  query: object({
    worker: string2()
  })
}), zEmailSendRoutingResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      messageId: string2().optional(),
      outcome: _enum2(["ok", "exception"]).optional(),
      rejectReason: string2().optional()
    }).optional()
  })
), zEmailListSendingData = object({
  body: never().optional(),
  path: never().optional(),
  query: object({
    worker: string2().optional(),
    email_id: string2().optional(),
    cursor: string2().optional(),
    per_page: int().gte(1).lte(100).optional().default(25)
  }).optional()
}), zEmailListSendingResponse = zWorkersApiResponseCommon.and(
  object({
    result: union([array(zEmailSendingItem), zEmailSendingDetail]).optional(),
    result_info: object({
      count: number2().optional(),
      cursor: string2().optional(),
      per_page: int().optional(),
      has_more: boolean2().optional()
    }).optional()
  })
), zWorkflowsListWorkflowsData = object({
  body: never().optional(),
  path: never().optional(),
  query: never().optional()
}), zWorkflowsListWorkflowsResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(zWorkflowsWorkflow).optional(),
    result_info: object({
      count: number2().optional()
    }).optional()
  })
), zWorkflowsDeleteWorkflowData = object({
  body: never().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: never().optional()
}), zWorkflowsDeleteWorkflowResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      status: string2().optional(),
      success: boolean2().optional()
    }).optional()
  })
), zWorkflowsGetWorkflowDetailsData = object({
  body: never().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: never().optional()
}), zWorkflowsGetWorkflowDetailsResponse = zWorkersApiResponseCommon.and(
  object({
    result: zWorkflowsWorkflowDetails.optional()
  })
), zWorkflowsListInstancesData = object({
  body: never().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: object({
    page: number2().gte(1).optional().default(1),
    per_page: number2().gte(1).lte(100).optional().default(25),
    status: _enum2([
      "queued",
      "running",
      "paused",
      "errored",
      "terminated",
      "complete",
      "waitingForPause",
      "waiting"
    ]).optional()
  }).optional()
}), zWorkflowsListInstancesResponse = zWorkersApiResponseCommon.and(
  object({
    result: array(zWorkflowsInstance).optional(),
    result_info: object({
      page: number2().optional(),
      per_page: number2().optional(),
      total_count: number2().optional(),
      total_pages: number2().optional()
    }).optional()
  })
), zWorkflowsCreateInstanceData = object({
  body: object({
    id: string2().optional(),
    params: unknown().optional()
  }).optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: never().optional()
}), zWorkflowsCreateInstanceResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      id: string2()
    }).optional()
  })
), zWorkflowsBatchDeleteInstancesData = object({
  body: object({
    instances: array(
      string2().min(1).max(271).regex(/^[a-zA-Z0-9, *\/#_-]+$/)
    ).min(1).max(100)
  }),
  path: object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: never().optional()
}), zWorkflowsBatchDeleteInstancesResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      deleted: array(
        object({
          id: string2()
        })
      ),
      errors: array(
        object({
          id: string2(),
          code: number2(),
          message: string2()
        })
      )
    }).optional()
  })
), zWorkflowsDeleteInstanceData = object({
  body: never().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: never().optional()
}), zWorkflowsDeleteInstanceResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      success: boolean2().optional()
    }).optional()
  })
), zWorkflowsGetInstanceDetailsData = object({
  body: never().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: never().optional()
}), zWorkflowsGetInstanceDetailsResponse = zWorkersApiResponseCommon.and(
  object({
    result: zWorkflowsInstanceDetails.optional()
  })
), zWorkflowsChangeInstanceStatusData = object({
  body: object({
    action: _enum2(["pause", "resume", "restart", "terminate"]),
    from: object({
      name: string2(),
      count: int().gte(1).optional(),
      type: _enum2(["do", "sleep", "waitForEvent"]).optional()
    }).optional(),
    rollback: boolean2().optional()
  }),
  path: object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: never().optional()
}), zWorkflowsChangeInstanceStatusResponse = zWorkersApiResponseCommon.and(
  object({
    result: object({
      success: boolean2().optional()
    }).optional()
  })
), zWorkflowsSendInstanceEventData = object({
  body: unknown().optional(),
  path: object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId,
    event_type: string2()
  }),
  query: never().optional()
});
var zObservabilityQueryData = object({
  body: object({
    sql: string2(),
    params: array(unknown()).optional()
  }),
  path: never().optional(),
  query: never().optional()
}), zObservabilityQueryResponse = zWorkersApiResponseCommon.and(
  object({
    result: zObservabilityQueryResult.optional()
  })
), zObservabilityClearData = object({
  body: never().optional(),
  path: never().optional(),
  query: never().optional()
});

// src/workers/local-explorer/openapi.local.json
var openapi_local_default = {
  openapi: "3.0.3",
  info: {
    title: "Local Explorer API",
    description: "A local subset of the Cloudflare API for inspecting and modifying resource state during local development. Supports D1, R2, KV, Durable Objects and Workflows.",
    version: "0.0.1"
  },
  servers: [
    {
      description: "Local Explorer",
      url: "/cdn-cgi/local/explorer/api"
    }
  ],
  paths: {
    "/storage/kv/namespaces": {
      get: {
        description: "Returns the namespaces owned by an account.",
        operationId: "workers-kv-namespace-list-namespaces",
        parameters: [
          {
            in: "query",
            name: "order",
            schema: {
              description: "Field to order results by.",
              enum: ["id", "title"],
              example: "id",
              type: "string"
            }
          },
          {
            in: "query",
            name: "direction",
            schema: {
              description: "Direction to order namespaces.",
              enum: ["asc", "desc"],
              example: "asc",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers-kv_namespace"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "List Namespaces response failure."
          }
        },
        summary: "List Namespaces",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/keys": {
      get: {
        description: "Lists a namespace's keys.",
        operationId: "workers-kv-namespace-list-a-namespace'-s-keys",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          },
          {
            in: "query",
            name: "limit",
            schema: {
              default: 1e3,
              description: "Limits the number of keys returned in the response. The cursor attribute may be used to iterate over the next batch of keys if there are more than the limit.",
              maximum: 1e3,
              minimum: 10,
              type: "number"
            }
          },
          {
            in: "query",
            name: "prefix",
            schema: {
              description: "Filters returned keys by a name prefix. Exact matches and any key names that begin with the prefix will be returned.",
              example: "My-Prefix",
              type: "string"
            }
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              description: "Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the `cursors` object in the `result_info` structure.",
              example: "6Ck1la0VxJ0djhidm1MdX2FyDGxLKVeeHZZmORS_8XeSuhz9SjIJRaSa2lnsF01tQOHrfTGAP3R5X1Kv5iVUuMbNKhWNAXHOl6ePB0TUL8nw",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers-kv_key"
                          },
                          type: "array"
                        },
                        result_info: {
                          $ref: "#/components/schemas/workers-kv_cursor_result_info"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List a Namespace's Keys response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "List a Namespace's Keys response failure."
          }
        },
        summary: "List a Namespace's Keys",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/values/{key_name}": {
      get: {
        description: "Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the `expiration` response header.",
        operationId: "workers-kv-namespace-read-key-value-pair",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/octet-stream": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_value"
                }
              }
            },
            description: "Read key-value pair response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Read key-value pair response failure."
          }
        },
        summary: "Read key-value pair",
        tags: ["Workers KV Namespace"]
      },
      put: {
        description: "Write a value identified by a key. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use `multipart/form-data` content type for your PUT request (see dropdown below in `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.",
        operationId: "workers-kv-namespace-write-key-value-pair-with-metadata",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/octet-stream": {
              schema: {
                $ref: "#/components/schemas/workers-kv_value"
              }
            },
            "multipart/form-data": {
              encoding: {
                metadata: {
                  contentType: "application/json"
                }
              },
              schema: {
                properties: {
                  metadata: {
                    $ref: "#/components/schemas/workers-kv_metadata"
                  },
                  value: {
                    $ref: "#/components/schemas/workers-kv_value"
                  }
                },
                required: ["value"],
                type: "object"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                }
              }
            },
            description: "Write key-value pair with metadata response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Write key-value pair with metadata response failure."
          }
        },
        summary: "Write key-value pair with optional metadata",
        tags: ["Workers KV Namespace"]
      },
      delete: {
        description: "Remove a KV pair from the namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.",
        operationId: "workers-kv-namespace-delete-key-value-pair",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {}
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                }
              }
            },
            description: "Delete key-value pair response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Delete key-value pair response failure."
          }
        },
        summary: "Delete key-value pair",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/bulk/get": {
      post: {
        description: "Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.",
        operationId: "workers-kv-namespace-get-multiple-key-value-pairs",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  keys: {
                    description: "Array of keys to retrieve (maximum of 100).",
                    items: {
                      $ref: "#/components/schemas/workers-kv_key_name_bulk"
                    },
                    maxItems: 100,
                    type: "array"
                  }
                },
                required: ["keys"],
                type: "object"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                    },
                    {
                      properties: {
                        result: {
                          oneOf: [
                            {
                              $ref: "#/components/schemas/workers-kv_bulk-get-result"
                            },
                            {
                              $ref: "#/components/schemas/workers-kv_bulk-get-result-with-metadata"
                            }
                          ]
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get multiple key-value pairs response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Get multiple key-value pairs response failure."
          }
        },
        summary: "Get multiple key-value pairs",
        tags: ["Workers KV Namespace"]
      }
    },
    "/d1/database": {
      get: {
        description: "Returns a list of D1 databases.",
        operationId: "d1-list-databases",
        parameters: [
          {
            in: "query",
            name: "name",
            schema: {
              description: "a database name to search for.",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/d1_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/d1_database-response"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              description: "Total number of results for the requested service",
                              example: 1,
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      }
                    }
                  ]
                }
              }
            },
            description: "List D1 databases response"
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/d1_api-response-common-failure"
                }
              }
            },
            description: "List D1 databases response failure"
          }
        },
        summary: "List D1 Databases",
        tags: ["D1"]
      }
    },
    "/d1/database/{database_id}/raw": {
      post: {
        description: "Returns the query result rows as arrays rather than objects. This is a performance-optimized version of the /query endpoint.",
        operationId: "d1-raw-database-query",
        parameters: [
          {
            in: "path",
            name: "database_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/d1_database-identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/d1_batch-query"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/d1_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/d1_raw-result-response"
                          },
                          type: "array"
                        }
                      }
                    }
                  ]
                }
              }
            },
            description: "Raw query response"
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/d1_api-response-common-failure"
                }
              }
            },
            description: "Query response failure"
          }
        },
        summary: "Raw D1 Database query",
        tags: ["D1"]
      }
    },
    "/workers/durable_objects/namespaces": {
      get: {
        description: "Returns the Durable Object namespaces owned by an account.",
        operationId: "durable-objects-namespace-list-namespaces",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers_namespace"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      allOf: [
                        {
                          $ref: "#/components/schemas/workers_api-response-collection"
                        },
                        {
                          properties: {
                            result: {
                              items: {
                                $ref: "#/components/schemas/workers_namespace"
                              },
                              type: "array"
                            }
                          },
                          type: "object"
                        }
                      ]
                    },
                    {
                      $ref: "#/components/schemas/workers_api-response-common-failure"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response failure."
          }
        },
        summary: "List Namespaces",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/workers/durable_objects/namespaces/{id}/objects": {
      get: {
        description: "Returns the Durable Objects in a given namespace.",
        operationId: "durable-objects-namespace-list-objects",
        parameters: [
          {
            in: "path",
            name: "id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers_schemas-id"
            }
          },
          {
            in: "query",
            name: "limit",
            schema: {
              default: 1e3,
              description: "The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.",
              maximum: 1e4,
              minimum: 10,
              type: "number"
            }
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              description: "Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
              example: "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers_object"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              description: "Total results returned based on your list parameters.",
                              example: 1,
                              type: "number"
                            },
                            cursor: {
                              $ref: "#/components/schemas/workers_cursor"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      allOf: [
                        {
                          $ref: "#/components/schemas/workers_api-response-collection"
                        },
                        {
                          properties: {
                            result: {
                              items: {
                                $ref: "#/components/schemas/workers_object"
                              },
                              type: "array"
                            },
                            result_info: {
                              properties: {
                                count: {
                                  description: "Total results returned based on your list parameters.",
                                  example: 1,
                                  type: "number"
                                },
                                cursor: {
                                  $ref: "#/components/schemas/workers_cursor"
                                }
                              },
                              type: "object"
                            }
                          },
                          type: "object"
                        }
                      ]
                    },
                    {
                      $ref: "#/components/schemas/workers_api-response-common-failure"
                    }
                  ]
                }
              }
            },
            description: "List Objects response failure."
          }
        },
        summary: "List Objects",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/r2/buckets": {
      get: {
        description: "Lists all R2 buckets on your account.",
        operationId: "r2-list-buckets",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/r2_v4_response_list"
                    },
                    {
                      properties: {
                        result: {
                          properties: {
                            buckets: {
                              items: {
                                $ref: "#/components/schemas/r2_bucket"
                              },
                              type: "array"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Buckets response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/r2_v4_response_failure"
                }
              }
            },
            description: "List Buckets response failure."
          }
        },
        summary: "List Buckets",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}": {
      get: {
        description: "Gets properties of an existing R2 bucket.",
        operationId: "r2-get-bucket",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/r2_bucket_name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/r2_v4_response"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_bucket"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Bucket response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/r2_v4_response_failure"
                }
              }
            },
            description: "Get Bucket response failure."
          }
        },
        summary: "Get Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}/objects": {
      get: {
        description: "List objects in an R2 bucket with optional prefix and delimiter.",
        operationId: "r2-bucket-list-objects",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "query",
            name: "prefix",
            schema: {
              type: "string"
            },
            description: "Filter objects by key prefix"
          },
          {
            in: "query",
            name: "delimiter",
            schema: {
              type: "string"
            },
            description: "Delimiter for directory-style listing (usually '/')"
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              type: "string"
            },
            description: "Pagination cursor from previous response"
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              type: "integer",
              default: 1e3
            },
            description: "Maximum number of objects to return"
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/r2_object"
                          }
                        },
                        result_info: {
                          $ref: "#/components/schemas/r2_list-objects-result-info"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List objects failure."
          }
        },
        summary: "List Objects in R2 Bucket",
        tags: ["R2 Bucket"]
      },
      delete: {
        description: "Delete multiple objects from an R2 bucket.",
        operationId: "r2-bucket-delete-objects",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "string"
                },
                description: "Array of object keys to delete"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              key: {
                                type: "string"
                              }
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete objects failure."
          }
        },
        summary: "Delete Multiple Objects from R2 Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}/objects/{object_key}": {
      get: {
        description: "Get an object from an R2 bucket. Use cf-metadata-only header for HEAD-like behavior.",
        operationId: "r2-bucket-get-object",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "path",
            name: "object_key",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "header",
            name: "cf-metadata-only",
            schema: {
              type: "string"
            },
            description: "Set to 'true' to return only metadata (HEAD-like behavior)"
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_head-object-result"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              },
              "application/octet-stream": {
                schema: {
                  type: "string",
                  format: "binary"
                }
              }
            },
            description: "Object content or metadata."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get object failure."
          }
        },
        summary: "Get Object from R2 Bucket",
        tags: ["R2 Bucket"]
      },
      put: {
        description: "Upload an object to an R2 bucket.",
        operationId: "r2-bucket-put-object",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "path",
            name: "object_key",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "header",
            name: "content-type",
            schema: {
              type: "string"
            },
            description: "Content type of the object"
          },
          {
            in: "header",
            name: "cf-r2-custom-metadata",
            schema: {
              type: "string"
            },
            description: "JSON-encoded custom metadata"
          }
        ],
        requestBody: {
          content: {
            "application/octet-stream": {
              schema: {
                type: "string",
                format: "binary"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_put-object-result"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Put object response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Put object failure."
          }
        },
        summary: "Upload Object to R2 Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/workers/durable_objects/namespaces/{namespace_id}/query": {
      post: {
        description: "Execute SQL queries against a Durable Object's SQLite storage.",
        operationId: "durable-objects-namespace-query-sqlite",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers_schemas-id"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                oneOf: [
                  {
                    $ref: "#/components/schemas/do_query-by-id"
                  },
                  {
                    $ref: "#/components/schemas/do_query-by-name"
                  }
                ]
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/do_raw-query-result"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Query response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Query response failure."
          }
        },
        summary: "Query Durable Object SQLite",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/local/workers": {
      get: {
        description: "List all workers in the local dev registry.",
        operationId: "local-explorer-list-workers",
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/local-explorer_worker"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List workers response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List workers failure."
          }
        },
        summary: "List Workers in Dev Registry",
        tags: ["Local Explorer"]
      }
    },
    "/local/email/routing": {
      get: {
        description: "Lists emails received by any email() handler during this dev session. Use the optional `worker` query parameter to filter by worker, or `email_id` to return one email's details.",
        operationId: "email-list-routing",
        parameters: [
          {
            in: "query",
            name: "worker",
            schema: {
              type: "string"
            },
            description: "Only return emails received by this worker's email() handler."
          },
          {
            in: "query",
            name: "email_id",
            schema: {
              type: "string"
            },
            description: "Return the details for this email instead of a paginated list."
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              type: "string"
            },
            description: "Opaque cursor for the next page of emails."
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              default: 25
            },
            description: "Number of emails per page."
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          oneOf: [
                            {
                              items: {
                                $ref: "#/components/schemas/email_routing-item"
                              },
                              type: "array"
                            },
                            {
                              $ref: "#/components/schemas/email_routing-detail"
                            }
                          ]
                        },
                        result_info: {
                          type: "object",
                          properties: {
                            count: {
                              type: "number"
                            },
                            cursor: {
                              type: "string"
                            },
                            per_page: {
                              type: "integer"
                            },
                            has_more: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List received emails response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List received emails failure."
          }
        },
        summary: "List Received Emails",
        tags: ["Email"]
      }
    },
    "/local/email/routing/send": {
      post: {
        description: "Sends a test email to trigger the worker's email() handler. Only the first `to` address is used as the envelope recipient; any additional to and cc addresses appear only in the composed MIME headers. bcc addresses are accepted but, by convention, are not written into the composed message.",
        operationId: "email-send-routing",
        parameters: [
          {
            in: "query",
            name: "worker",
            required: !0,
            schema: {
              type: "string"
            },
            description: "Deliver the test email directly to this worker's email() handler. Required because a single dev port can serve multiple workers, so the target cannot be inferred from the recipient address."
          }
        ],
        requestBody: {
          required: !0,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/email_send-request"
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            messageId: {
                              type: "string",
                              description: "RFC Message-ID header value of the delivered test email."
                            },
                            outcome: {
                              type: "string",
                              enum: ["ok", "exception"],
                              description: "Whether the handler ran to completion or threw."
                            },
                            rejectReason: {
                              type: "string",
                              description: "Reason passed to setReject(), if the handler rejected the message."
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Send test email response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Send test email failure."
          }
        },
        summary: "Send Test Email",
        tags: ["Email"]
      }
    },
    "/local/email/sending": {
      get: {
        description: "Lists emails sent through send_email bindings during this dev session, or returns one email's details when `email_id` is provided.",
        operationId: "email-list-sending",
        parameters: [
          {
            in: "query",
            name: "worker",
            schema: {
              type: "string"
            },
            description: "Only return emails sent through this worker's send_email bindings."
          },
          {
            in: "query",
            name: "email_id",
            schema: {
              type: "string"
            },
            description: "Return the details for this email instead of a paginated list."
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              type: "string"
            },
            description: "Opaque cursor for the next page of emails."
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              default: 25
            },
            description: "Number of emails per page."
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          oneOf: [
                            {
                              items: {
                                $ref: "#/components/schemas/email_sending-item"
                              },
                              type: "array"
                            },
                            {
                              $ref: "#/components/schemas/email_sending-detail"
                            }
                          ]
                        },
                        result_info: {
                          type: "object",
                          properties: {
                            count: {
                              type: "number"
                            },
                            cursor: {
                              type: "string"
                            },
                            per_page: {
                              type: "integer"
                            },
                            has_more: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List sent emails response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List sent emails failure."
          }
        },
        summary: "List Sent Emails",
        tags: ["Email"]
      }
    },
    "/workflows": {
      get: {
        description: "Returns the workflows configured for local development.",
        operationId: "workflows-list-workflows",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workflows_workflow"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Workflows response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List Workflows response failure."
          }
        },
        summary: "List Workflows",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}": {
      get: {
        description: "Returns details of a specific workflow including instance status counts.",
        operationId: "workflows-get-workflow-details",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/workflows_workflow-details"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Workflow Details response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get Workflow Details response failure."
          }
        },
        summary: "Get Workflow Details",
        tags: ["Workflows"]
      },
      delete: {
        description: "Deletes all instances of a workflow by removing their persistence files.",
        operationId: "workflows-delete-workflow",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            status: {
                              type: "string"
                            },
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete Workflow response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete Workflow response failure."
          }
        },
        summary: "Delete Workflow (all instances)",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances": {
      get: {
        description: "Returns the instances of a workflow.",
        operationId: "workflows-list-instances",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "query",
            name: "page",
            schema: {
              default: 1,
              description: "Page number (1-indexed).",
              minimum: 1,
              type: "number"
            }
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              default: 25,
              description: "Number of instances per page.",
              maximum: 100,
              minimum: 1,
              type: "number"
            }
          },
          {
            in: "query",
            name: "status",
            schema: {
              type: "string",
              enum: [
                "queued",
                "running",
                "paused",
                "errored",
                "terminated",
                "complete",
                "waitingForPause",
                "waiting"
              ],
              description: "Filter instances by status."
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workflows_instance"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            page: {
                              type: "number"
                            },
                            per_page: {
                              type: "number"
                            },
                            total_count: {
                              type: "number"
                            },
                            total_pages: {
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Workflow Instances response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List Workflow Instances response failure."
          }
        },
        summary: "List Workflow Instances",
        tags: ["Workflows"]
      },
      post: {
        description: "Creates a new workflow instance.",
        operationId: "workflows-create-instance",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                    description: "Optional instance ID. If not provided, a UUID is generated."
                  },
                  params: {
                    description: "Optional JSON payload to pass to the workflow."
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                              description: "The instance ID of the newly created workflow instance."
                            }
                          },
                          required: ["id"]
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Create Workflow Instance response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Create Workflow Instance response failure."
          }
        },
        summary: "Create Workflow Instance",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/batch/delete": {
      post: {
        description: "Deletes multiple workflow instances.",
        operationId: "workflows-batch-delete-instances",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        requestBody: {
          required: !0,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  instances: {
                    type: "array",
                    minItems: 1,
                    maxItems: 100,
                    items: {
                      type: "string",
                      minLength: 1,
                      maxLength: 271,
                      pattern: "^[a-zA-Z0-9, */#_-]+$"
                    }
                  }
                },
                required: ["instances"]
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      type: "object",
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            deleted: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  id: {
                                    type: "string"
                                  }
                                },
                                required: ["id"]
                              }
                            },
                            errors: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  id: {
                                    type: "string"
                                  },
                                  code: {
                                    type: "number"
                                  },
                                  message: {
                                    type: "string"
                                  }
                                },
                                required: ["id", "code", "message"]
                              }
                            }
                          },
                          required: ["deleted", "errors"]
                        }
                      }
                    }
                  ]
                }
              }
            },
            description: "Batch delete Workflow Instances response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Batch delete Workflow Instances response failure."
          }
        },
        summary: "Batch Delete Workflow Instances",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}": {
      get: {
        description: "Returns the status details of a workflow instance.",
        operationId: "workflows-get-instance-details",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/workflows_instance-details"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Workflow Instance Details response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get Workflow Instance Details response failure."
          }
        },
        summary: "Get Workflow Instance Details",
        tags: ["Workflows"]
      },
      delete: {
        description: "Deletes a workflow instance by removing its persistence files.",
        operationId: "workflows-delete-instance",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete Workflow Instance response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete Workflow Instance response failure."
          }
        },
        summary: "Delete Workflow Instance",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}/status": {
      patch: {
        description: "Changes the status of a workflow instance (pause, resume, restart, terminate).",
        operationId: "workflows-change-instance-status",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        requestBody: {
          required: !0,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["action"],
                properties: {
                  action: {
                    type: "string",
                    enum: ["pause", "resume", "restart", "terminate"],
                    description: "The action to perform on the workflow instance."
                  },
                  from: {
                    type: "object",
                    description: "The step to restart the instance from. Only valid when action is restart.",
                    required: ["name"],
                    properties: {
                      name: {
                        type: "string",
                        description: "The name of the step."
                      },
                      count: {
                        type: "integer",
                        minimum: 1,
                        description: "The 1-based index of the step when multiple steps share the same name and type. Defaults to 1."
                      },
                      type: {
                        type: "string",
                        enum: ["do", "sleep", "waitForEvent"],
                        description: "The step type. Defaults to do."
                      }
                    }
                  },
                  rollback: {
                    type: "boolean",
                    description: "The option to trigger rollbacks when terminating the workflow instance."
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Change Workflow Instance Status response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Change Workflow Instance Status response failure."
          }
        },
        summary: "Change Workflow Instance Status",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}": {
      post: {
        description: "Sends an event to a workflow instance.",
        operationId: "workflows-send-instance-event",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          },
          {
            in: "path",
            name: "event_type",
            required: !0,
            schema: {
              type: "string",
              description: "The event type to send."
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                description: "Optional JSON payload for the event."
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common"
                }
              }
            },
            description: "Send Event response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Send Event response failure."
          }
        },
        summary: "Send Event to Workflow Instance",
        tags: ["Workflows"]
      }
    },
    "/local/observability/query": {
      post: {
        description: `Runs a single read-only SQL query against the local trace store and returns { columns, rows }.

Only one SELECT/WITH statement is allowed; writes, DDL, PRAGMA, ATTACH, and multiple statements are rejected, and at most 10000 rows are returned.
Bind values with \`params\` rather than string-interpolating them.
\`attributes\` is stored as JSONB \u2014 wrap it with \`json(attributes)\` to read it back as JSON.

Schema (the query contract):

CREATE TABLE spans (
  trace_id TEXT NOT NULL, span_id TEXT NOT NULL, parent_id TEXT, -- parent_id IS NULL on a root (invocation) span
  service TEXT,        -- owning worker name (multi-worker attribution)
  name TEXT, kind TEXT,
  start_ms INTEGER,    -- absolute epoch ms
  duration_ms INTEGER, -- whole ms; NULL while the span is still running
  outcome TEXT, error TEXT,
  attributes BLOB,     -- JSONB; read via json(attributes)
  created_at TEXT,
  PRIMARY KEY (trace_id, span_id)
);
-- index spans_roots ON spans (start_ms) WHERE parent_id IS NULL

CREATE TABLE logs (
  trace_id TEXT NOT NULL, span_id TEXT,
  seq INTEGER NOT NULL, -- order within the trace
  ts_ms INTEGER, level TEXT, message TEXT, -- message is a JSON-encoded console arg array
  operation TEXT, created_at TEXT,
  PRIMARY KEY (trace_id, seq)
);`,
        operationId: "observability-query",
        parameters: [],
        requestBody: {
          required: !0,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  sql: {
                    type: "string",
                    description: "A single read-only SELECT/WITH query against the spans/logs schema above."
                  },
                  params: {
                    type: "array",
                    items: {},
                    description: "Values bound to `?` placeholders in the query, in order."
                  }
                },
                required: ["sql"]
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/observability_query-result"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Query response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Query response failure."
          }
        },
        summary: "Query Observability Store",
        tags: ["Observability"]
      }
    },
    "/local/observability/clear": {
      post: {
        description: "Deletes all captured spans and logs from the local trace store.",
        operationId: "observability-clear",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common"
                }
              }
            },
            description: "Clear response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Clear response failure."
          }
        },
        summary: "Clear Observability Store",
        tags: ["Observability"]
      }
    }
  },
  components: {
    schemas: {
      r2_v4_response: {
        properties: {
          errors: {
            $ref: "#/components/schemas/r2_errors"
          },
          messages: {
            $ref: "#/components/schemas/r2_messages"
          },
          result: {
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      r2_messages: {
        items: {
          type: "string"
        },
        type: "array"
      },
      r2_errors: {
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      r2_bucket_name: {
        description: "Name of the bucket.",
        example: "example-bucket",
        maxLength: 64,
        minLength: 3,
        pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]",
        type: "string"
      },
      r2_v4_response_failure: {
        properties: {
          errors: {
            $ref: "#/components/schemas/r2_errors"
          },
          messages: {
            $ref: "#/components/schemas/r2_messages"
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      r2_bucket: {
        description: "A single R2 bucket.",
        properties: {
          creation_date: {
            description: "Creation timestamp.",
            type: "string"
          },
          name: {
            $ref: "#/components/schemas/r2_bucket_name"
          }
        },
        type: "object"
      },
      r2_v4_response_list: {
        allOf: [
          {
            $ref: "#/components/schemas/r2_v4_response"
          },
          {
            properties: {
              result_info: {
                $ref: "#/components/schemas/r2_result_info"
              }
            },
            type: "object"
          }
        ]
      },
      r2_result_info: {
        properties: {},
        type: "object"
      },
      workers_cursor: {
        description: "Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
        example: "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc",
        type: "string"
      },
      workers_object: {
        properties: {
          hasStoredData: {
            description: "Whether the Durable Object has stored data.",
            example: !0,
            readOnly: !0,
            type: "boolean"
          },
          id: {
            description: "ID of the Durable Object.",
            example: "fe7803fc55b964e09d94666545aab688d360c6bda69ba349ced1e5f28d2fc2c8",
            readOnly: !0,
            type: "string"
          },
          name: {
            type: "string",
            description: "Name of the Durable Object instance, if created via idFromName().",
            readOnly: !0
          }
        },
        type: "object"
      },
      "workers_schemas-id": {
        description: "ID of the namespace.",
        example: "5fd1cafff895419c8bcc647fc64ab8f0",
        type: "string"
      },
      "workers_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/workers_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/workers_messages"
              }
            ],
            example: []
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      workers_messages: {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            documentation_url: {
              type: "string"
            },
            message: {
              type: "string"
            },
            source: {
              properties: {
                pointer: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      workers_namespace: {
        properties: {
          class: {
            type: "string"
          },
          id: {
            readOnly: !0,
            type: "string"
          },
          name: {
            type: "string"
          },
          script: {
            type: "string"
          },
          use_sqlite: {
            type: "boolean"
          }
        },
        type: "object"
      },
      "workers_api-response-collection": {
        allOf: [
          {
            $ref: "#/components/schemas/workers_api-response-common"
          },
          {
            properties: {
              result_info: {
                properties: {
                  count: {
                    description: "Total number of results for the requested service.",
                    example: 1,
                    type: "number"
                  },
                  page: {
                    description: "Current page within paginated list of results.",
                    example: 1,
                    type: "number"
                  },
                  per_page: {
                    description: "Number of results per page of results.",
                    example: 20,
                    type: "number"
                  },
                  total_count: {
                    description: "Total results available without any search parameters.",
                    example: 2e3,
                    type: "number"
                  },
                  total_pages: {
                    description: "The number of total pages in the entire result set.",
                    example: 100,
                    type: "number"
                  }
                },
                type: "object"
              }
            },
            type: "object"
          }
        ],
        type: "object"
      },
      "workers_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/workers_messages"
          },
          messages: {
            $ref: "#/components/schemas/workers_messages"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages"],
        type: "object"
      },
      "d1_raw-result-response": {
        properties: {
          meta: {
            $ref: "#/components/schemas/d1_query-meta"
          },
          results: {
            properties: {
              columns: {
                items: {
                  type: "string"
                },
                type: "array"
              },
              rows: {
                items: {
                  items: {
                    anyOf: [
                      {
                        type: "number"
                      },
                      {
                        type: "string"
                      },
                      {
                        type: "object"
                      }
                    ]
                  },
                  type: "array"
                },
                type: "array"
              }
            },
            type: "object"
          },
          success: {
            type: "boolean"
          }
        },
        type: "object"
      },
      "d1_query-meta": {
        properties: {
          changed_db: {
            description: "Denotes if the database has been altered in some way, like deleting rows.",
            type: "boolean"
          },
          changes: {
            description: "Rough indication of how many rows were modified by the query, as provided by SQLite's `sqlite3_total_changes()`.",
            type: "number"
          },
          duration: {
            description: "The duration of the SQL query execution inside the database. Does not include any network communication.",
            type: "number"
          },
          last_row_id: {
            description: "The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.",
            type: "number"
          },
          rows_read: {
            description: "Number of rows read during the SQL query execution, including indices (not all rows are necessarily returned).",
            type: "number"
          },
          rows_written: {
            description: "Number of rows written during the SQL query execution, including indices.",
            type: "number"
          },
          size_after: {
            description: "Size of the database after the query committed, in bytes.",
            type: "number"
          },
          timings: {
            description: "Various durations for the query.",
            properties: {
              sql_duration_ms: {
                description: "The duration of the SQL query execution inside the database. Does not include any network communication.",
                type: "number"
              }
            },
            type: "object"
          }
        },
        type: "object"
      },
      "d1_batch-query": {
        description: "A single query object or a batch query object",
        oneOf: [
          {
            $ref: "#/components/schemas/d1_single-query"
          },
          {
            properties: {
              batch: {
                items: {
                  $ref: "#/components/schemas/d1_single-query"
                },
                type: "array"
              }
            },
            required: ["batch"],
            title: "multiple queries",
            type: "object"
          }
        ]
      },
      "d1_single-query": {
        description: "A single query with or without parameters",
        properties: {
          params: {
            $ref: "#/components/schemas/d1_params"
          },
          sql: {
            $ref: "#/components/schemas/d1_sql"
          }
        },
        required: ["sql"],
        title: "single query",
        type: "object"
      },
      d1_sql: {
        description: "Your SQL query. Supports multiple statements, joined by semicolons, which will be executed as a batch.",
        example: "SELECT * FROM myTable WHERE field = ? OR field = ?;",
        type: "string"
      },
      d1_params: {
        example: ["firstParam", "secondParam"],
        items: {
          type: "string"
        },
        type: "array"
      },
      "d1_database-identifier": {
        description: "D1 database identifier (UUID).",
        example: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        readOnly: !0,
        type: "string"
      },
      "d1_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/d1_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/d1_messages"
              }
            ],
            example: []
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      d1_messages: {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      "d1_database-response": {
        properties: {
          jurisdiction: {
            $ref: "#/components/schemas/d1_jurisdiction-nullable"
          },
          name: {
            $ref: "#/components/schemas/d1_database-name"
          },
          uuid: {
            $ref: "#/components/schemas/d1_database-identifier"
          },
          version: {
            $ref: "#/components/schemas/d1_database-version"
          }
        },
        type: "object"
      },
      "d1_database-version": {
        example: "production",
        pattern: "^(alpha|beta|production)$",
        type: "string"
      },
      "d1_database-name": {
        description: "D1 database name.",
        example: "my-database",
        pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$",
        type: "string"
      },
      "d1_jurisdiction-nullable": {
        description: "Specify the location to restrict the D1 database to run and store data. If this option is present, the location hint is ignored.",
        enum: ["eu", "fedramp"],
        example: "eu",
        nullable: !0,
        type: "string"
      },
      "d1_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/d1_messages"
          },
          messages: {
            $ref: "#/components/schemas/d1_messages"
          },
          result: {
            type: "object"
          },
          success: {
            description: "Whether the API call was successful",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      "workers-kv_bulk-get-result-with-metadata": {
        properties: {
          values: {
            additionalProperties: {
              nullable: !0,
              properties: {
                expiration: {
                  $ref: "#/components/schemas/workers-kv_expiration"
                },
                metadata: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_any"
                    },
                    {
                      description: "The metadata associated with the key."
                    }
                  ]
                },
                value: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_any"
                    },
                    {
                      description: "The value associated with the key."
                    }
                  ]
                }
              },
              required: ["value", "metadata"],
              type: "object"
            },
            description: "Requested keys are paired with their values and metadata in an object.",
            example: {
              key1: {
                expiration: 1577836800,
                metadata: {
                  someMetadataKey: "someMetadataValue"
                },
                value: "value1"
              },
              key2: {
                metadata: {
                  anotherKey: "anotherValue"
                },
                value: "value2"
              }
            },
            type: "object"
          }
        },
        type: "object"
      },
      "workers-kv_any": {
        anyOf: [
          {
            type: "string"
          },
          {
            type: "number"
          },
          {
            type: "integer"
          },
          {
            type: "boolean"
          },
          {
            additionalProperties: !0,
            nullable: !0,
            type: "object"
          },
          {
            items: {
              $ref: "#/components/schemas/workers-kv_any"
            },
            type: "array"
          }
        ]
      },
      "workers-kv_expiration": {
        description: "Expires the key at a certain time, measured in number of seconds since the UNIX epoch.",
        example: 1578435e3,
        type: "number"
      },
      "workers-kv_bulk-get-result": {
        properties: {
          values: {
            additionalProperties: {
              description: "The value associated with the key.",
              oneOf: [
                {
                  type: "string"
                },
                {
                  type: "number"
                },
                {
                  type: "boolean"
                },
                {
                  additionalProperties: !0,
                  type: "object"
                }
              ],
              nullable: !0
            },
            description: "Requested keys are paired with their values in an object.",
            example: {
              key1: "value1",
              key2: "value2"
            },
            type: "object"
          }
        },
        type: "object"
      },
      "workers-kv_key_name_bulk": {
        description: "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
        example: "My-Key",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_api-response-common-no-result": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_api-response-common"
          },
          {
            properties: {
              result: {
                nullable: !0,
                type: "object"
              }
            },
            type: "object"
          }
        ]
      },
      "workers-kv_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/workers-kv_messages"
          },
          messages: {
            $ref: "#/components/schemas/workers-kv_messages"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages"],
        type: "object"
      },
      "workers-kv_messages": {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object"
        },
        type: "array",
        uniqueItems: !0
      },
      "workers-kv_metadata": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_any"
          },
          {
            description: "Associates arbitrary JSON data with a key/value pair.",
            example: {
              someMetadataKey: "someMetadataValue"
            }
          }
        ]
      },
      "workers-kv_value": {
        anyOf: [
          {
            type: "string"
          },
          {
            format: "binary",
            type: "string"
          }
        ],
        description: "A byte sequence to be stored, up to 25 MiB in length.",
        example: "Some Value"
      },
      "workers-kv_key_name": {
        description: "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
        example: "My-Key",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_cursor_result_info": {
        properties: {
          count: {
            description: "Total results returned based on your list parameters.",
            example: 1,
            type: "number"
          },
          cursor: {
            $ref: "#/components/schemas/workers-kv_cursor"
          }
        },
        type: "object"
      },
      "workers-kv_cursor": {
        description: "Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
        example: "6Ck1la0VxJ0djhidm1MdX2FyDGxLKVeeHZZmORS_8XeSuhz9SjIJRaSa2lnsF01tQOHrfTGAP3R5X1Kv5iVUuMbNKhWNAXHOl6ePB0TUL8nw",
        type: "string"
      },
      "workers-kv_key": {
        description: "A name for a value. A value stored under a given key may be retrieved via the same key.",
        properties: {
          expiration: {
            description: "The time, measured in number of seconds since the UNIX epoch, at which the key will expire. This property is omitted for keys that will not expire.",
            example: 1577836800,
            type: "number"
          },
          metadata: {
            $ref: "#/components/schemas/workers-kv_list_metadata"
          },
          name: {
            $ref: "#/components/schemas/workers-kv_key_name"
          }
        },
        required: ["name"],
        type: "object"
      },
      "workers-kv_list_metadata": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_any"
          },
          {
            description: "Arbitrary JSON that is associated with a key.",
            example: {
              someMetadataKey: "someMetadataValue"
            }
          }
        ]
      },
      "workers-kv_namespace_identifier": {
        description: "Namespace identifier tag.",
        example: "0f2ac74b498b48028cb68387c421e279",
        maxLength: 32,
        readOnly: !0,
        type: "string"
      },
      "workers-kv_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/workers-kv_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/workers-kv_messages"
              }
            ],
            example: []
          },
          result: {
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      "workers-kv_namespace": {
        properties: {
          id: {
            $ref: "#/components/schemas/workers-kv_namespace_identifier"
          },
          title: {
            $ref: "#/components/schemas/workers-kv_namespace_title"
          }
        },
        required: ["id", "title"],
        type: "object"
      },
      "workers-kv_namespace_title": {
        description: "A human-readable string name for a Namespace.",
        example: "My Own Namespace",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_api-response-collection": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_api-response-common"
          },
          {
            properties: {
              result_info: {
                $ref: "#/components/schemas/workers-kv_result_info"
              }
            },
            type: "object"
          }
        ],
        type: "object"
      },
      "workers-kv_result_info": {
        properties: {
          count: {
            description: "Total number of results for the requested service.",
            example: 1,
            type: "number"
          }
        },
        type: "object"
      },
      r2_object: {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          last_modified: {
            type: "string",
            format: "date-time",
            description: "Last modified timestamp"
          },
          http_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "HTTP metadata for the object"
          },
          custom_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "Custom user-defined metadata"
          }
        }
      },
      "r2_list-objects-result-info": {
        type: "object",
        properties: {
          delimited: {
            type: "array",
            items: {
              type: "string"
            },
            description: "Common prefixes when using delimiter (virtual directories)"
          },
          cursor: {
            type: "string",
            description: "Cursor for fetching next page of results"
          },
          is_truncated: {
            type: "string",
            description: "Whether there are more results to fetch"
          }
        }
      },
      "r2_head-object-result": {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          last_modified: {
            type: "string",
            description: "Last modified timestamp"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          http_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "HTTP metadata for the object"
          },
          custom_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "Custom user-defined metadata"
          }
        }
      },
      "r2_put-object-result": {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          version: {
            type: "string",
            description: "Object version ID"
          }
        }
      },
      "do_sql-with-params": {
        type: "object",
        required: ["sql"],
        properties: {
          sql: {
            type: "string",
            minLength: 1,
            description: "SQL query to execute"
          },
          params: {
            type: "array",
            items: {},
            description: "Optional parameters for the SQL query"
          }
        }
      },
      "do_query-by-id": {
        type: "object",
        required: ["durable_object_id", "queries"],
        properties: {
          durable_object_id: {
            type: "string",
            minLength: 1,
            description: "Hex string ID of the Durable Object"
          },
          queries: {
            type: "array",
            items: {
              $ref: "#/components/schemas/do_sql-with-params"
            },
            description: "Array of SQL queries to execute"
          }
        }
      },
      "do_query-by-name": {
        type: "object",
        required: ["durable_object_name", "queries"],
        properties: {
          durable_object_name: {
            type: "string",
            minLength: 1,
            description: "Name to derive DO ID via idFromName()"
          },
          queries: {
            type: "array",
            items: {
              $ref: "#/components/schemas/do_sql-with-params"
            },
            description: "Array of SQL queries to execute"
          }
        }
      },
      "do_raw-query-result": {
        type: "object",
        properties: {
          columns: {
            type: "array",
            items: {
              type: "string"
            },
            description: "Column names from the query result"
          },
          rows: {
            type: "array",
            items: {
              type: "array",
              items: {}
            },
            description: "Array of row arrays containing query results"
          },
          meta: {
            type: "object",
            properties: {
              rows_read: {
                type: "number",
                description: "Number of rows read during query execution"
              },
              rows_written: {
                type: "number",
                description: "Number of rows written during query execution"
              }
            }
          }
        }
      },
      "local-explorer_worker": {
        type: "object",
        required: ["isSelf", "name"],
        properties: {
          isSelf: {
            type: "boolean",
            description: "Whether this worker is the one hosting the explorer"
          },
          name: {
            type: "string",
            description: "Worker name from the dev registry"
          },
          bindings: {
            $ref: "#/components/schemas/local-explorer_worker-bindings",
            description: "Resource bindings for this worker"
          }
        }
      },
      "local-explorer_worker-bindings": {
        type: "object",
        description: "Resource bindings for a worker",
        properties: {
          kv: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "KV namespace bindings"
          },
          d1: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "D1 database bindings"
          },
          r2: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "R2 bucket bindings"
          },
          do: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_do-binding"
            },
            description: "Durable Object bindings"
          },
          workflows: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_workflow-binding"
            },
            description: "Workflow bindings"
          },
          sendEmail: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_named-binding"
            },
            description: "Send Email bindings"
          }
        }
      },
      "local-explorer_named-binding": {
        type: "object",
        required: ["bindingName"],
        properties: {
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          }
        }
      },
      "local-explorer_resource-binding": {
        type: "object",
        required: ["id", "bindingName"],
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the resource"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          }
        }
      },
      "local-explorer_do-binding": {
        type: "object",
        required: [
          "id",
          "bindingName",
          "className",
          "scriptName",
          "useSqlite"
        ],
        properties: {
          id: {
            type: "string",
            description: "Unique identifier (scriptName-className)"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          },
          className: {
            type: "string",
            description: "Durable Object class name"
          },
          scriptName: {
            type: "string",
            description: "Script containing the Durable Object"
          },
          useSqlite: {
            type: "boolean",
            description: "Whether the Durable Object uses SQLite storage"
          }
        }
      },
      "local-explorer_workflow-binding": {
        type: "object",
        required: ["id", "bindingName", "className", "scriptName"],
        properties: {
          id: {
            type: "string",
            description: "Workflow name"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          },
          className: {
            type: "string",
            description: "Workflow entrypoint class name"
          },
          scriptName: {
            type: "string",
            description: "Script containing the workflow"
          }
        }
      },
      "workflows_workflow-name": {
        description: "The name of the workflow.",
        example: "my-workflow",
        type: "string"
      },
      "workflows_instance-id": {
        description: "The unique identifier of a workflow instance.",
        example: "my-instance-id",
        type: "string"
      },
      workflows_workflow: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the workflow."
          },
          class_name: {
            type: "string",
            description: "The entrypoint class name of the workflow."
          },
          script_name: {
            type: "string",
            description: "The script name containing the workflow."
          }
        },
        required: ["name"]
      },
      "workflows_workflow-details": {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the workflow."
          },
          class_name: {
            type: "string",
            description: "The entrypoint class name."
          },
          script_name: {
            type: "string",
            description: "The script containing the workflow."
          },
          instances: {
            type: "object",
            description: "Instance counts by status.",
            properties: {
              complete: {
                type: "number"
              },
              errored: {
                type: "number"
              },
              paused: {
                type: "number"
              },
              queued: {
                type: "number"
              },
              running: {
                type: "number"
              },
              terminated: {
                type: "number"
              },
              waiting: {
                type: "number"
              },
              waitingForPause: {
                type: "number"
              }
            }
          }
        },
        required: ["name", "class_name", "script_name", "instances"]
      },
      workflows_instance: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The unique identifier of the workflow instance."
          },
          status: {
            type: "string",
            enum: [
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "unknown"
            ],
            description: "The current status of the instance."
          },
          created_on: {
            type: "string",
            description: "ISO 8601 timestamp of when the instance was created."
          }
        },
        required: ["id"]
      },
      "workflows_instance-details": {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The unique identifier of the workflow instance."
          },
          status: {
            type: "string",
            enum: [
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "unknown"
            ],
            description: "The current status of the instance."
          },
          output: {
            description: "Output value if the workflow completed successfully."
          },
          error: {
            type: "object",
            properties: {
              name: {
                type: "string"
              },
              message: {
                type: "string"
              }
            },
            description: "Error details if the workflow errored."
          }
        },
        required: ["id", "status"]
      },
      "observability_query-result": {
        type: "object",
        description: "Columns and rows for a read-only SQL query.",
        properties: {
          columns: {
            type: "array",
            items: {
              type: "string"
            }
          },
          rows: {
            type: "array",
            items: {
              type: "array",
              items: {}
            }
          }
        },
        required: ["columns", "rows"]
      },
      "email_handler-event": {
        oneOf: [
          {
            type: "object",
            properties: {
              type: {
                type: "string",
                enum: ["received", "reject", "unhandled"]
              },
              timestamp: {
                type: "string",
                description: "ISO 8601 timestamp of when the event occurred."
              }
            },
            required: ["type", "timestamp"],
            additionalProperties: !1
          },
          {
            type: "object",
            properties: {
              type: {
                type: "string",
                enum: ["forward", "reply"]
              },
              timestamp: {
                type: "string",
                description: "ISO 8601 timestamp of when the event occurred."
              },
              messageId: {
                type: "string",
                description: "Correlates with the matching `forwards`/`replies` entry."
              }
            },
            required: ["type", "timestamp", "messageId"],
            additionalProperties: !1
          }
        ],
        description: "One entry in the ordered lifecycle of what the handler did to the message. `received` is first for any message actually delivered to an `email()` handler. The exception is `unhandled`: when the Worker exports no `email()` handler the message never reaches one, so the timeline is a single `unhandled` event with no preceding `received`. `forward`/`reply` events carry a `messageId` correlating with the matching `forwards`/`replies` entry."
      },
      "email_handler-forward": {
        type: "object",
        properties: {
          messageId: {
            type: "string"
          },
          recipient: {
            type: "string",
            description: "Envelope recipient the message was forwarded to."
          },
          headers: {
            type: "array",
            items: {
              type: "array",
              items: {
                anyOf: [
                  {
                    type: "string"
                  },
                  {
                    type: "string"
                  }
                ]
              },
              minItems: 2,
              maxItems: 2
            },
            description: "Headers added to the forwarded message."
          }
        },
        required: ["messageId", "recipient", "headers"],
        additionalProperties: !1
      },
      "email_handler-reply": {
        type: "object",
        properties: {
          messageId: {
            type: "string"
          },
          sender: {
            type: "string",
            description: "Address the reply was sent from."
          },
          raw: {
            type: "string",
            description: "Raw MIME content of the reply. Omitted from the routing list; present on the detail response."
          },
          rawBase64: {
            type: "string",
            description: "Lossless base64 representation of the reply MIME."
          }
        },
        required: ["messageId", "sender"],
        additionalProperties: !1
      },
      email_base: {
        type: "object",
        properties: {
          worker: {
            type: "string",
            description: "Worker associated with the email, if known."
          },
          from: {
            type: "string",
            description: "Envelope MAIL FROM address."
          },
          subject: {
            type: "string"
          },
          messageId: {
            type: "string",
            description: "RFC Message-ID header value. Identifies the email in the store."
          },
          attachments: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_attachment"
            },
            description: "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
          }
        },
        required: ["from", "subject", "messageId", "attachments"],
        additionalProperties: !1
      },
      "email_routing-item": {
        type: "object",
        properties: {
          worker: {
            type: "string",
            description: "Worker associated with the email, if known."
          },
          from: {
            type: "string",
            description: "Envelope MAIL FROM address."
          },
          subject: {
            type: "string"
          },
          messageId: {
            type: "string",
            description: "RFC Message-ID header value. Identifies the email in the store."
          },
          attachments: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_attachment"
            },
            description: "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
          },
          to: {
            type: "string",
            description: "Envelope RCPT TO address."
          },
          cc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          headers: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          },
          headerEntries: {
            type: "array",
            items: {
              type: "array",
              items: {
                anyOf: [
                  {
                    type: "string"
                  },
                  {
                    type: "string"
                  }
                ]
              },
              minItems: 2,
              maxItems: 2
            },
            description: "Email headers as ordered name/value pairs, including duplicates."
          },
          receivedAt: {
            type: "string"
          },
          rawSize: {
            type: "number"
          },
          outcome: {
            type: "string",
            enum: ["ok", "exception"],
            description: "Whether the handler ran to completion or threw."
          },
          rejectReason: {
            type: "string",
            description: "Reason passed to setReject(), if the handler rejected the message."
          },
          forwards: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-forward"
            }
          },
          replies: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-reply"
            }
          },
          events: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-event"
            }
          }
        },
        required: [
          "from",
          "subject",
          "messageId",
          "attachments",
          "to",
          "receivedAt",
          "rawSize",
          "outcome",
          "forwards",
          "replies",
          "events"
        ],
        additionalProperties: !1
      },
      "email_routing-detail": {
        type: "object",
        properties: {
          worker: {
            type: "string",
            description: "Worker associated with the email, if known."
          },
          from: {
            type: "string",
            description: "Envelope MAIL FROM address."
          },
          subject: {
            type: "string"
          },
          messageId: {
            type: "string",
            description: "RFC Message-ID header value. Identifies the email in the store."
          },
          attachments: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_attachment"
            },
            description: "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
          },
          to: {
            type: "string",
            description: "Envelope RCPT TO address."
          },
          cc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          headers: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          },
          headerEntries: {
            type: "array",
            items: {
              type: "array",
              items: {
                anyOf: [
                  {
                    type: "string"
                  },
                  {
                    type: "string"
                  }
                ]
              },
              minItems: 2,
              maxItems: 2
            },
            description: "Email headers as ordered name/value pairs, including duplicates."
          },
          receivedAt: {
            type: "string"
          },
          rawSize: {
            type: "number"
          },
          outcome: {
            type: "string",
            enum: ["ok", "exception"],
            description: "Whether the handler ran to completion or threw."
          },
          rejectReason: {
            type: "string",
            description: "Reason passed to setReject(), if the handler rejected the message."
          },
          forwards: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-forward"
            }
          },
          replies: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-reply"
            }
          },
          events: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_handler-event"
            }
          },
          text: {
            type: "string",
            description: "Parsed plain text body, when present."
          },
          html: {
            type: "string",
            description: "Parsed HTML body, when present."
          },
          raw: {
            type: "string",
            description: "Raw MIME content of the received email."
          },
          rawBase64: {
            type: "string",
            description: "Lossless base64 representation of the received MIME."
          }
        },
        required: [
          "from",
          "subject",
          "messageId",
          "attachments",
          "to",
          "receivedAt",
          "rawSize",
          "outcome",
          "forwards",
          "replies",
          "events",
          "raw"
        ],
        additionalProperties: !1
      },
      "email_send-request": {
        type: "object",
        properties: {
          from: {
            type: "string",
            description: "Sender address."
          },
          to: {
            minItems: 1,
            type: "array",
            items: {
              type: "string"
            },
            description: "Recipient addresses."
          },
          cc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          bcc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          replyTo: {
            type: "string"
          },
          subject: {
            type: "string"
          },
          text: {
            type: "string",
            description: "Plain text body."
          },
          html: {
            type: "string",
            description: "HTML body."
          },
          headers: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "Custom headers to include on the message."
          },
          attachments: {
            type: "array",
            items: {
              type: "object",
              properties: {
                filename: {
                  type: "string",
                  description: "Name the attachment is presented under."
                },
                type: {
                  type: "string",
                  description: "MIME type of the attachment, e.g. 'application/pdf'."
                },
                content: {
                  type: "string",
                  description: "Attachment content, base64-encoded. MessageBuilder takes raw bytes here, but this endpoint accepts JSON so the bytes must be base64-encoded."
                },
                contentId: {
                  type: "string",
                  description: "Content-ID for an inline attachment."
                },
                disposition: {
                  type: "string",
                  enum: ["inline", "attachment"],
                  description: "How the attachment is presented. Defaults to 'attachment'."
                }
              },
              required: ["filename", "type", "content"],
              additionalProperties: !1
            },
            description: "Attachments to include on the message, mirroring the MessageBuilder `attachments` entries accepted by a send_email binding. Adding any attachment composes the message as multipart/mixed."
          }
        },
        required: ["from", "to", "subject"],
        additionalProperties: !1,
        description: "Fields for composing a test email, mirroring MessageBuilder."
      },
      email_attachment: {
        type: "object",
        properties: {
          filename: {
            type: "string"
          },
          contentType: {
            type: "string"
          },
          disposition: {
            type: "string",
            enum: ["inline", "attachment"]
          },
          size: {
            type: "number"
          }
        },
        required: ["filename", "contentType", "disposition", "size"],
        additionalProperties: !1,
        description: "Metadata describing an attachment on a captured email, without its content."
      },
      "email_sending-item": {
        type: "object",
        properties: {
          worker: {
            type: "string",
            description: "Worker associated with the email, if known."
          },
          from: {
            type: "string",
            description: "Envelope MAIL FROM address."
          },
          subject: {
            type: "string"
          },
          messageId: {
            type: "string",
            description: "RFC Message-ID header value. Identifies the email in the store."
          },
          attachments: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_attachment"
            },
            description: "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
          },
          to: {
            type: "array",
            items: {
              type: "string"
            }
          },
          cc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          bcc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          replyTo: {
            type: "string"
          },
          sentAt: {
            type: "string"
          },
          headers: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        required: [
          "from",
          "subject",
          "messageId",
          "attachments",
          "to",
          "sentAt"
        ],
        additionalProperties: !1
      },
      "email_sending-detail": {
        type: "object",
        properties: {
          worker: {
            type: "string",
            description: "Worker associated with the email, if known."
          },
          from: {
            type: "string",
            description: "Envelope MAIL FROM address."
          },
          subject: {
            type: "string"
          },
          messageId: {
            type: "string",
            description: "RFC Message-ID header value. Identifies the email in the store."
          },
          attachments: {
            type: "array",
            items: {
              $ref: "#/components/schemas/email_attachment"
            },
            description: "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
          },
          to: {
            type: "array",
            items: {
              type: "string"
            }
          },
          cc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          bcc: {
            type: "array",
            items: {
              type: "string"
            }
          },
          replyTo: {
            type: "string"
          },
          sentAt: {
            type: "string"
          },
          headers: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          },
          text: {
            type: "string"
          },
          html: {
            type: "string"
          },
          raw: {
            type: "string",
            description: "Raw MIME content, present when sent via the EmailMessage API."
          },
          rawBase64: {
            type: "string",
            description: "Lossless base64 representation of sent MIME."
          }
        },
        required: [
          "from",
          "subject",
          "messageId",
          "attachments",
          "to",
          "sentAt"
        ],
        additionalProperties: !1
      }
    }
  }
};

// src/workers/local-explorer/resources/d1.ts
var D1_ERROR_DATABASE_NOT_FOUND = 7404;
function getD1Binding(env2, databaseId) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.d1[databaseId];
  return bindingName ? env2[bindingName] : null;
}
function getLocalD1Databases(env2) {
  let d1BindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.d1;
  return Object.entries(d1BindingMap).map(([id, bindingName]) => ({
    name: bindingName.split(":").pop() || bindingName,
    uuid: id,
    version: "production"
  }));
}
async function findD1DatabaseOwner(c, databaseId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, "/d1/database");
      return response?.ok && (await response.json()).result?.some((db) => db.uuid === databaseId) ? url2 : null;
    })
  )).find((url2) => url2 !== null) ?? null;
}
async function listD1Databases(c, query) {
  let { name } = query, localDatabases = getLocalD1Databases(c.env), aggregatedDatabases = await aggregateListResults(
    c,
    localDatabases,
    "/d1/database"
  ), localIds = new Set(localDatabases.map((db) => db.uuid)), allDatabases = aggregatedDatabases.filter(
    (db, index) => index < localDatabases.length || !localIds.has(db.uuid)
  );
  return name && (allDatabases = allDatabases.filter(
    (db) => db.name?.toLowerCase().includes(name.toLowerCase())
  )), c.json({
    ...wrapResponse(allDatabases),
    result_info: {
      count: allDatabases.length
    }
  });
}
async function rawD1Database(c, databaseId, body) {
  let db = getD1Binding(c.env, databaseId);
  if (db)
    return executeD1Query(c, db, body);
  let ownerMiniflare = await findD1DatabaseOwner(c, databaseId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/d1/database/${encodeURIComponent(databaseId)}/raw`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    D1_ERROR_DATABASE_NOT_FOUND,
    `The database ${databaseId} could not be found`
  );
}
async function executeD1Query(c, db, body) {
  let queries = "batch" in body && body.batch ? body.batch : [body], results = new Array();
  try {
    for (let query of queries) {
      let statement = db.prepare(query.sql);
      query.params && query.params.length > 0 && (statement = statement.bind(...query.params));
      let allResults = await statement.all(), columns = allResults.results.length > 0 ? Object.keys(allResults.results[0]) : [], rows = allResults.results.map(
        (row) => columns.map(
          (col) => row[col]
        )
      );
      results.push({
        meta: {
          changed_db: allResults.meta.changed_db,
          changes: allResults.meta.changes,
          duration: allResults.meta.duration,
          last_row_id: allResults.meta.last_row_id,
          rows_read: allResults.meta.rows_read,
          rows_written: allResults.meta.rows_written,
          size_after: allResults.meta.size_after,
          timings: allResults.meta.timings
        },
        results: {
          columns,
          rows
        },
        success: allResults.success
      });
    }
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Query failed";
    return errorResponse(500, 10001, message);
  }
  return c.json(wrapResponse(results));
}

// src/plugins/core/constants.ts
var CORE_PLUGIN_NAME = "core", SERVICE_ENTRY = `${CORE_PLUGIN_NAME}:entry`, SERVICE_LOCAL_EXPLORER = `${CORE_PLUGIN_NAME}:local-explorer`, LOCAL_EXPLORER_DISK = `${CORE_PLUGIN_NAME}:local-explorer-disk`;
var EMAIL_STORE_SERVICE_NAME = "email:store";
var SERVICE_USER_PREFIX = `${CORE_PLUGIN_NAME}:user`, SERVICE_BUILTIN_PREFIX = `${CORE_PLUGIN_NAME}:builtin`, SERVICE_CUSTOM_FETCH_PREFIX = `${CORE_PLUGIN_NAME}:custom-fetch`, SERVICE_CUSTOM_NODE_PREFIX = `${CORE_PLUGIN_NAME}:custom-node`;
var INTROSPECT_SQLITE_METHOD = "__miniflare_introspectSqlite", GET_DO_NAME_METHOD = "__miniflare_getDOName";

// src/workers/local-explorer/resources/do.ts
var DO_ERROR_NAMESPACE_NOT_FOUND = 10066;
function getDOBinding(env2, namespaceId) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.do[namespaceId];
  return info ? {
    binding: env2[info.binding],
    useSQLite: info.useSQLite
  } : null;
}
function getLocalDONamespaces(env2) {
  let doBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.do;
  return Object.entries(doBindingMap).map(([id, info]) => ({
    id,
    // This is the unsafeUniqueKey - ${scriptName}-${className}
    name: `${info.scriptName}_${info.className}`,
    // This is what the API returns...
    script: info.scriptName,
    class: info.className,
    use_sqlite: info.useSQLite
  }));
}
async function findDONamespaceOwner(c, namespaceId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(
        url2,
        "/workers/durable_objects/namespaces"
      );
      return response?.ok && (await response.json()).result?.some((ns) => ns.id === namespaceId) ? url2 : null;
    })
  )).find((url2) => url2 !== null) ?? null;
}
async function listDONamespaces(c) {
  let localNamespaces = getLocalDONamespaces(c.env), allNamespaces = await aggregateListResults(
    c,
    localNamespaces,
    "/workers/durable_objects/namespaces"
  );
  return c.json({
    ...wrapResponse(allNamespaces),
    result_info: {
      count: allNamespaces.length
    }
  });
}
async function listDOObjects(c, namespaceId, query) {
  let { limit, cursor } = query;
  if (c.env.LOCAL_EXPLORER_BINDING_MAP.do[namespaceId])
    return executeListDOObjects(c, namespaceId, { limit, cursor });
  let ownerMiniflare = await findDONamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    cursor && params.set("cursor", cursor), limit !== void 0 && params.set("limit", String(limit));
    let queryString = params.toString(), path = `/workers/durable_objects/namespaces/${encodeURIComponent(
      namespaceId
    )}/objects${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    DO_ERROR_NAMESPACE_NOT_FOUND,
    `Durable Object namespace ID '${namespaceId}' not found.`
  );
}
async function executeListDOObjects(c, namespaceId, options) {
  let { limit, cursor } = options;
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/do-storage/${encodeURIComponent(namespaceId)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
  if (!response.ok)
    return response.status === 404 ? c.json({
      ...wrapResponse([]),
      result_info: {
        count: 0,
        cursor: ""
      }
    }) : errorResponse(
      500,
      10001,
      `Failed to read DO storage: ${response.statusText}`
    );
  let objectIds = (await response.json()).filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
  ).map((entry) => entry.name.replace(/\.sqlite$/, ""));
  if (objectIds.sort(), cursor) {
    let cursorIndex = objectIds.findIndex((id) => id > cursor);
    cursorIndex === -1 ? objectIds = [] : objectIds = objectIds.slice(cursorIndex);
  }
  let hasMore = objectIds.length > limit, paginatedIds = objectIds.slice(0, limit), ns = getDOBinding(c.env, namespaceId), objects = await Promise.all(
    paginatedIds.map(async (id) => {
      let name;
      if (ns && ns.useSQLite)
        try {
          let doId = ns.binding.idFromString(id);
          name = await ns.binding.get(doId)[GET_DO_NAME_METHOD]();
        } catch {
        }
      return {
        id,
        name,
        hasStoredData: !0
      };
    })
  ), nextCursor = hasMore ? paginatedIds[paginatedIds.length - 1] : "";
  return c.json({
    ...wrapResponse(objects),
    result_info: {
      count: objects.length,
      cursor: nextCursor
    }
  });
}
async function queryDOSqlite(c, namespaceId, body) {
  let ns = getDOBinding(c.env, namespaceId);
  if (ns)
    return executeQueryDOSqlite(c, ns, namespaceId, body);
  let ownerMiniflare = await findDONamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/workers/durable_objects/namespaces/${encodeURIComponent(
        namespaceId
      )}/query`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    DO_ERROR_NAMESPACE_NOT_FOUND,
    `Durable Object namespace ID '${namespaceId}' not found.`
  );
}
async function executeQueryDOSqlite(c, ns, namespaceId, body) {
  if (!ns.useSQLite)
    return errorResponse(
      400,
      10001,
      `Namespace does not use SQLite storage: ${namespaceId}`
    );
  let binding = ns.binding, doId;
  try {
    "durable_object_id" in body ? doId = binding.idFromString(body.durable_object_id) : doId = binding.idFromName(body.durable_object_name);
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Invalid Durable Object ID";
    return errorResponse(400, 10001, message);
  }
  if (body.queries.length === 0)
    return errorResponse(400, 10001, "No queries provided");
  let stub = binding.get(doId);
  try {
    let results = await stub[INTROSPECT_SQLITE_METHOD](body.queries);
    return c.json(wrapResponse(results));
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Query failed";
    return errorResponse(400, 10001, message);
  }
}

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/decode-strings.js
var textEncoder = new TextEncoder(), base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64Lookup = new Uint8Array(256);
for (i = 0; i < base64Chars.length; i++)
  base64Lookup[base64Chars.charCodeAt(i)] = i;
var i;
function decodeBase64(base643) {
  let bufferLength = Math.ceil(base643.length / 4) * 3, len = base643.length, p = 0;
  base643.length % 4 === 3 ? bufferLength-- : base643.length % 4 === 2 ? bufferLength -= 2 : base643[base643.length - 1] === "=" && (bufferLength--, base643[base643.length - 2] === "=" && bufferLength--);
  let arrayBuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arrayBuffer);
  for (let i2 = 0; i2 < len; i2 += 4) {
    let encoded1 = base64Lookup[base643.charCodeAt(i2)], encoded2 = base64Lookup[base643.charCodeAt(i2 + 1)], encoded3 = base64Lookup[base643.charCodeAt(i2 + 2)], encoded4 = base64Lookup[base643.charCodeAt(i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4, bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2, bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arrayBuffer;
}
function getDecoder(charset) {
  return charset = charset || "utf8", new TextDecoder(charset);
}
async function blobToArrayBuffer(blob) {
  if ("arrayBuffer" in blob)
    return await blob.arrayBuffer();
  let fr = new FileReader();
  return new Promise((resolve, reject) => {
    fr.onload = function(e) {
      resolve(e.target.result);
    }, fr.onerror = function(e) {
      reject(fr.error);
    }, fr.readAsArrayBuffer(blob);
  });
}
function getHex(c) {
  return c >= 48 && c <= 57 || c >= 97 && c <= 102 || c >= 65 && c <= 70 ? String.fromCharCode(c) : !1;
}
function decodeWord(charset, encoding, str) {
  let splitPos = charset.indexOf("*");
  splitPos >= 0 && (charset = charset.substr(0, splitPos)), encoding = encoding.toUpperCase();
  let byteStr;
  if (encoding === "Q") {
    str = str.replace(/=\s+([0-9a-fA-F])/g, "=$1").replace(/[_\s]/g, " ");
    let buf = textEncoder.encode(str), encodedBytes = [];
    for (let i2 = 0, len = buf.length; i2 < len; i2++) {
      let c = buf[i2];
      if (i2 <= len - 2 && c === 61) {
        let c1 = getHex(buf[i2 + 1]), c2 = getHex(buf[i2 + 2]);
        if (c1 && c2) {
          let c3 = parseInt(c1 + c2, 16);
          encodedBytes.push(c3), i2 += 2;
          continue;
        }
      }
      encodedBytes.push(c);
    }
    byteStr = new ArrayBuffer(encodedBytes.length);
    let dataView = new DataView(byteStr);
    for (let i2 = 0, len = encodedBytes.length; i2 < len; i2++)
      dataView.setUint8(i2, encodedBytes[i2]);
  } else encoding === "B" ? byteStr = decodeBase64(str.replace(/[^a-zA-Z0-9\+\/=]+/g, "")) : byteStr = textEncoder.encode(str);
  return getDecoder(charset).decode(byteStr);
}
function decodeWords(str) {
  let joinString = !0, done = !1;
  for (; !done; ) {
    let result = (str || "").toString().replace(/(=\?([^?]+)\?[Bb]\?([^?]*)\?=)\s*(?==\?([^?]+)\?[Bb]\?[^?]*\?=)/g, (match, left, chLeft, encodedLeftStr, chRight) => joinString && chLeft === chRight && encodedLeftStr.length % 4 === 0 && !/=$/.test(encodedLeftStr) ? left + "__\0JOIN\0__" : match).replace(/(=\?([^?]+)\?[Qq]\?[^?]*\?=)\s*(?==\?([^?]+)\?[Qq]\?[^?]*\?=)/g, (match, left, chLeft, chRight) => joinString && chLeft === chRight ? left + "__\0JOIN\0__" : match).replace(/(\?=)?__\x00JOIN\x00__(=\?([^?]+)\?[QqBb]\?)?/g, "").replace(/(=\?[^?]+\?[QqBb]\?[^?]*\?=)\s+(?==\?[^?]+\?[QqBb]\?[^?]*\?=)/g, "$1").replace(/=\?([\w_\-*]+)\?([QqBb])\?([^?]*)\?=/g, (m, charset, encoding, text) => decodeWord(charset, encoding, text));
    if (joinString && result.indexOf("\uFFFD") >= 0)
      joinString = !1;
    else
      return result;
  }
}
function decodeURIComponentWithCharset(encodedStr, charset) {
  charset = charset || "utf-8";
  let encodedBytes = [];
  for (let i2 = 0; i2 < encodedStr.length; i2++) {
    let c = encodedStr.charAt(i2);
    if (c === "%" && /^[a-f0-9]{2}/i.test(encodedStr.substr(i2 + 1, 2))) {
      let byte = encodedStr.substr(i2 + 1, 2);
      i2 += 2, encodedBytes.push(parseInt(byte, 16));
    } else if (c.charCodeAt(0) > 126) {
      c = textEncoder.encode(c);
      for (let j = 0; j < c.length; j++)
        encodedBytes.push(c[j]);
    } else
      encodedBytes.push(c.charCodeAt(0));
  }
  let byteStr = new ArrayBuffer(encodedBytes.length), dataView = new DataView(byteStr);
  for (let i2 = 0, len = encodedBytes.length; i2 < len; i2++)
    dataView.setUint8(i2, encodedBytes[i2]);
  return getDecoder(charset).decode(byteStr);
}
function decodeParameterValueContinuations(header) {
  let paramKeys = /* @__PURE__ */ new Map();
  Object.keys(header.params).forEach((key) => {
    let match = key.match(/\*((\d+)\*?)?$/);
    if (!match)
      return;
    let actualKey = key.substr(0, match.index).toLowerCase(), nr = Number(match[2]) || 0, paramVal;
    paramKeys.has(actualKey) ? paramVal = paramKeys.get(actualKey) : (paramVal = {
      charset: !1,
      values: []
    }, paramKeys.set(actualKey, paramVal));
    let value = header.params[key];
    nr === 0 && match[0].charAt(match[0].length - 1) === "*" && (match = value.match(/^([^']*)'[^']*'(.*)$/)) && (paramVal.charset = match[1] || "utf-8", value = match[2]), paramVal.values.push({ nr, value }), delete header.params[key];
  }), paramKeys.forEach((paramVal, key) => {
    header.params[key] = decodeURIComponentWithCharset(
      paramVal.values.sort((a, b) => a.nr - b.nr).map((a) => a.value).join(""),
      paramVal.charset
    );
  });
}

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/pass-through-decoder.js
var PassThroughDecoder = class {
  constructor() {
    this.chunks = [];
  }
  update(line) {
    this.chunks.push(line), this.chunks.push(`
`);
  }
  finalize() {
    return blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/base64-decoder.js
var Base64Decoder = class {
  constructor(opts) {
    opts = opts || {}, this.decoder = opts.decoder || new TextDecoder(), this.maxChunkSize = 100 * 1024, this.chunks = [], this.remainder = "";
  }
  update(buffer) {
    let str = this.decoder.decode(buffer);
    if (/[^a-zA-Z0-9+\/]/.test(str) && (str = str.replace(/[^a-zA-Z0-9+\/]+/g, "")), this.remainder += str, this.remainder.length >= this.maxChunkSize) {
      let allowedBytes = Math.floor(this.remainder.length / 4) * 4, base64Str;
      allowedBytes === this.remainder.length ? (base64Str = this.remainder, this.remainder = "") : (base64Str = this.remainder.substr(0, allowedBytes), this.remainder = this.remainder.substr(allowedBytes)), base64Str.length && this.chunks.push(decodeBase64(base64Str));
    }
  }
  finalize() {
    return this.remainder && !/^=+$/.test(this.remainder) && this.chunks.push(decodeBase64(this.remainder)), blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/qp-decoder.js
var QPDecoder = class {
  constructor(opts) {
    opts = opts || {}, this.decoder = opts.decoder || new TextDecoder(), this.maxChunkSize = 100 * 1024, this.remainder = "", this.chunks = [];
  }
  decodeQPBytes(encodedBytes) {
    let buf = new ArrayBuffer(encodedBytes.length), dataView = new DataView(buf);
    for (let i2 = 0, len = encodedBytes.length; i2 < len; i2++)
      dataView.setUint8(i2, parseInt(encodedBytes[i2], 16));
    return buf;
  }
  decodeChunks(str) {
    str = str.replace(/=\r?\n/g, "");
    let list = str.split(/(?==)/), encodedBytes = [];
    for (let part of list) {
      if (part.charAt(0) !== "=") {
        encodedBytes.length && (this.chunks.push(this.decodeQPBytes(encodedBytes)), encodedBytes = []), this.chunks.push(part);
        continue;
      }
      if (part.length === 3) {
        encodedBytes.push(part.substr(1));
        continue;
      }
      part.length > 3 && (encodedBytes.push(part.substr(1, 2)), this.chunks.push(this.decodeQPBytes(encodedBytes)), encodedBytes = [], part = part.substr(3), this.chunks.push(part));
    }
    encodedBytes.length && (this.chunks.push(this.decodeQPBytes(encodedBytes)), encodedBytes = []);
  }
  update(buffer) {
    let str = this.decoder.decode(buffer) + `
`;
    if (str = this.remainder + str, str.length < this.maxChunkSize) {
      this.remainder = str;
      return;
    }
    this.remainder = "";
    let partialEnding = str.match(/=[a-fA-F0-9]?$/);
    if (partialEnding) {
      if (partialEnding.index === 0) {
        this.remainder = str;
        return;
      }
      this.remainder = str.substr(partialEnding.index), str = str.substr(0, partialEnding.index);
    }
    this.decodeChunks(str);
  }
  finalize() {
    return this.remainder.length && (this.decodeChunks(this.remainder), this.remainder = ""), blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/mime-node.js
var MimeNode = class {
  constructor(opts) {
    opts = opts || {}, this.postalMime = opts.postalMime, this.root = !!opts.parentNode, this.childNodes = [], opts.parentNode && opts.parentNode.childNodes.push(this), this.state = "header", this.headerLines = [], this.contentType = {
      value: "text/plain",
      default: !0
    }, this.contentTransferEncoding = {
      value: "8bit"
    }, this.contentDisposition = {
      value: ""
    }, this.headers = [], this.contentDecoder = !1;
  }
  setupContentDecoder(transferEncoding) {
    /base64/i.test(transferEncoding) ? this.contentDecoder = new Base64Decoder() : /quoted-printable/i.test(transferEncoding) ? this.contentDecoder = new QPDecoder({ decoder: getDecoder(this.contentType.parsed.params.charset) }) : this.contentDecoder = new PassThroughDecoder();
  }
  async finalize() {
    if (this.state === "finished")
      return;
    this.state === "header" && this.processHeaders();
    let boundaries = this.postalMime.boundaries;
    for (let i2 = boundaries.length - 1; i2 >= 0; i2--)
      if (boundaries[i2].node === this) {
        boundaries.splice(i2, 1);
        break;
      }
    await this.finalizeChildNodes(), this.content = this.contentDecoder ? await this.contentDecoder.finalize() : null, this.state = "finished";
  }
  async finalizeChildNodes() {
    for (let childNode of this.childNodes)
      await childNode.finalize();
  }
  parseStructuredHeader(str) {
    let response = {
      value: !1,
      params: {}
    }, key = !1, value = "", stage = "value", quote = !1, escaped = !1, chr;
    for (let i2 = 0, len = str.length; i2 < len; i2++)
      switch (chr = str.charAt(i2), stage) {
        case "key":
          if (chr === "=") {
            key = value.trim().toLowerCase(), stage = "value", value = "";
            break;
          }
          value += chr;
          break;
        case "value":
          if (escaped)
            value += chr;
          else if (chr === "\\") {
            escaped = !0;
            continue;
          } else quote && chr === quote ? quote = !1 : !quote && chr === '"' ? quote = chr : !quote && chr === ";" ? (key === !1 ? response.value = value.trim() : response.params[key] = value.trim(), stage = "key", value = "") : value += chr;
          escaped = !1;
          break;
      }
    return value = value.trim(), stage === "value" ? key === !1 ? response.value = value : response.params[key] = value : value && (response.params[value.toLowerCase()] = ""), response.value && (response.value = response.value.toLowerCase()), decodeParameterValueContinuations(response), response;
  }
  decodeFlowedText(str, delSp) {
    return str.split(/\r?\n/).reduce((previousValue, currentValue) => / $/.test(previousValue) && !/(^|\n)-- $/.test(previousValue) ? delSp ? previousValue.slice(0, -1) + currentValue : previousValue + currentValue : previousValue + `
` + currentValue).replace(/^ /gm, "");
  }
  getTextContent() {
    if (!this.content)
      return "";
    let str = getDecoder(this.contentType.parsed.params.charset).decode(this.content);
    return /^flowed$/i.test(this.contentType.parsed.params.format) && (str = this.decodeFlowedText(str, /^yes$/i.test(this.contentType.parsed.params.delsp))), str;
  }
  processHeaders() {
    for (let i2 = this.headerLines.length - 1; i2 >= 0; i2--) {
      let line = this.headerLines[i2];
      if (i2 && /^\s/.test(line))
        this.headerLines[i2 - 1] += `
` + line, this.headerLines.splice(i2, 1);
      else {
        line = line.replace(/\s+/g, " ");
        let sep = line.indexOf(":"), key = sep < 0 ? line.trim() : line.substr(0, sep).trim(), value = sep < 0 ? "" : line.substr(sep + 1).trim();
        switch (this.headers.push({ key: key.toLowerCase(), originalKey: key, value }), key.toLowerCase()) {
          case "content-type":
            this.contentType.default && (this.contentType = { value, parsed: {} });
            break;
          case "content-transfer-encoding":
            this.contentTransferEncoding = { value, parsed: {} };
            break;
          case "content-disposition":
            this.contentDisposition = { value, parsed: {} };
            break;
          case "content-id":
            this.contentId = value;
            break;
          case "content-description":
            this.contentDescription = value;
            break;
        }
      }
    }
    this.contentType.parsed = this.parseStructuredHeader(this.contentType.value), this.contentType.multipart = /^multipart\//i.test(this.contentType.parsed.value) ? this.contentType.parsed.value.substr(this.contentType.parsed.value.indexOf("/") + 1) : !1, this.contentType.multipart && this.contentType.parsed.params.boundary && this.postalMime.boundaries.push({
      value: textEncoder.encode(this.contentType.parsed.params.boundary),
      node: this
    }), this.contentDisposition.parsed = this.parseStructuredHeader(this.contentDisposition.value), this.contentTransferEncoding.encoding = this.contentTransferEncoding.value.toLowerCase().split(/[^\w-]/).shift(), this.setupContentDecoder(this.contentTransferEncoding.encoding);
  }
  feed(line) {
    switch (this.state) {
      case "header":
        if (!line.length)
          return this.state = "body", this.processHeaders();
        this.headerLines.push(getDecoder().decode(line));
        break;
      case "body":
        this.contentDecoder.update(line);
    }
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/html-entities.js
var htmlEntities = {
  "&AElig": "\xC6",
  "&AElig;": "\xC6",
  "&AMP": "&",
  "&AMP;": "&",
  "&Aacute": "\xC1",
  "&Aacute;": "\xC1",
  "&Abreve;": "\u0102",
  "&Acirc": "\xC2",
  "&Acirc;": "\xC2",
  "&Acy;": "\u0410",
  "&Afr;": "\u{1D504}",
  "&Agrave": "\xC0",
  "&Agrave;": "\xC0",
  "&Alpha;": "\u0391",
  "&Amacr;": "\u0100",
  "&And;": "\u2A53",
  "&Aogon;": "\u0104",
  "&Aopf;": "\u{1D538}",
  "&ApplyFunction;": "\u2061",
  "&Aring": "\xC5",
  "&Aring;": "\xC5",
  "&Ascr;": "\u{1D49C}",
  "&Assign;": "\u2254",
  "&Atilde": "\xC3",
  "&Atilde;": "\xC3",
  "&Auml": "\xC4",
  "&Auml;": "\xC4",
  "&Backslash;": "\u2216",
  "&Barv;": "\u2AE7",
  "&Barwed;": "\u2306",
  "&Bcy;": "\u0411",
  "&Because;": "\u2235",
  "&Bernoullis;": "\u212C",
  "&Beta;": "\u0392",
  "&Bfr;": "\u{1D505}",
  "&Bopf;": "\u{1D539}",
  "&Breve;": "\u02D8",
  "&Bscr;": "\u212C",
  "&Bumpeq;": "\u224E",
  "&CHcy;": "\u0427",
  "&COPY": "\xA9",
  "&COPY;": "\xA9",
  "&Cacute;": "\u0106",
  "&Cap;": "\u22D2",
  "&CapitalDifferentialD;": "\u2145",
  "&Cayleys;": "\u212D",
  "&Ccaron;": "\u010C",
  "&Ccedil": "\xC7",
  "&Ccedil;": "\xC7",
  "&Ccirc;": "\u0108",
  "&Cconint;": "\u2230",
  "&Cdot;": "\u010A",
  "&Cedilla;": "\xB8",
  "&CenterDot;": "\xB7",
  "&Cfr;": "\u212D",
  "&Chi;": "\u03A7",
  "&CircleDot;": "\u2299",
  "&CircleMinus;": "\u2296",
  "&CirclePlus;": "\u2295",
  "&CircleTimes;": "\u2297",
  "&ClockwiseContourIntegral;": "\u2232",
  "&CloseCurlyDoubleQuote;": "\u201D",
  "&CloseCurlyQuote;": "\u2019",
  "&Colon;": "\u2237",
  "&Colone;": "\u2A74",
  "&Congruent;": "\u2261",
  "&Conint;": "\u222F",
  "&ContourIntegral;": "\u222E",
  "&Copf;": "\u2102",
  "&Coproduct;": "\u2210",
  "&CounterClockwiseContourIntegral;": "\u2233",
  "&Cross;": "\u2A2F",
  "&Cscr;": "\u{1D49E}",
  "&Cup;": "\u22D3",
  "&CupCap;": "\u224D",
  "&DD;": "\u2145",
  "&DDotrahd;": "\u2911",
  "&DJcy;": "\u0402",
  "&DScy;": "\u0405",
  "&DZcy;": "\u040F",
  "&Dagger;": "\u2021",
  "&Darr;": "\u21A1",
  "&Dashv;": "\u2AE4",
  "&Dcaron;": "\u010E",
  "&Dcy;": "\u0414",
  "&Del;": "\u2207",
  "&Delta;": "\u0394",
  "&Dfr;": "\u{1D507}",
  "&DiacriticalAcute;": "\xB4",
  "&DiacriticalDot;": "\u02D9",
  "&DiacriticalDoubleAcute;": "\u02DD",
  "&DiacriticalGrave;": "`",
  "&DiacriticalTilde;": "\u02DC",
  "&Diamond;": "\u22C4",
  "&DifferentialD;": "\u2146",
  "&Dopf;": "\u{1D53B}",
  "&Dot;": "\xA8",
  "&DotDot;": "\u20DC",
  "&DotEqual;": "\u2250",
  "&DoubleContourIntegral;": "\u222F",
  "&DoubleDot;": "\xA8",
  "&DoubleDownArrow;": "\u21D3",
  "&DoubleLeftArrow;": "\u21D0",
  "&DoubleLeftRightArrow;": "\u21D4",
  "&DoubleLeftTee;": "\u2AE4",
  "&DoubleLongLeftArrow;": "\u27F8",
  "&DoubleLongLeftRightArrow;": "\u27FA",
  "&DoubleLongRightArrow;": "\u27F9",
  "&DoubleRightArrow;": "\u21D2",
  "&DoubleRightTee;": "\u22A8",
  "&DoubleUpArrow;": "\u21D1",
  "&DoubleUpDownArrow;": "\u21D5",
  "&DoubleVerticalBar;": "\u2225",
  "&DownArrow;": "\u2193",
  "&DownArrowBar;": "\u2913",
  "&DownArrowUpArrow;": "\u21F5",
  "&DownBreve;": "\u0311",
  "&DownLeftRightVector;": "\u2950",
  "&DownLeftTeeVector;": "\u295E",
  "&DownLeftVector;": "\u21BD",
  "&DownLeftVectorBar;": "\u2956",
  "&DownRightTeeVector;": "\u295F",
  "&DownRightVector;": "\u21C1",
  "&DownRightVectorBar;": "\u2957",
  "&DownTee;": "\u22A4",
  "&DownTeeArrow;": "\u21A7",
  "&Downarrow;": "\u21D3",
  "&Dscr;": "\u{1D49F}",
  "&Dstrok;": "\u0110",
  "&ENG;": "\u014A",
  "&ETH": "\xD0",
  "&ETH;": "\xD0",
  "&Eacute": "\xC9",
  "&Eacute;": "\xC9",
  "&Ecaron;": "\u011A",
  "&Ecirc": "\xCA",
  "&Ecirc;": "\xCA",
  "&Ecy;": "\u042D",
  "&Edot;": "\u0116",
  "&Efr;": "\u{1D508}",
  "&Egrave": "\xC8",
  "&Egrave;": "\xC8",
  "&Element;": "\u2208",
  "&Emacr;": "\u0112",
  "&EmptySmallSquare;": "\u25FB",
  "&EmptyVerySmallSquare;": "\u25AB",
  "&Eogon;": "\u0118",
  "&Eopf;": "\u{1D53C}",
  "&Epsilon;": "\u0395",
  "&Equal;": "\u2A75",
  "&EqualTilde;": "\u2242",
  "&Equilibrium;": "\u21CC",
  "&Escr;": "\u2130",
  "&Esim;": "\u2A73",
  "&Eta;": "\u0397",
  "&Euml": "\xCB",
  "&Euml;": "\xCB",
  "&Exists;": "\u2203",
  "&ExponentialE;": "\u2147",
  "&Fcy;": "\u0424",
  "&Ffr;": "\u{1D509}",
  "&FilledSmallSquare;": "\u25FC",
  "&FilledVerySmallSquare;": "\u25AA",
  "&Fopf;": "\u{1D53D}",
  "&ForAll;": "\u2200",
  "&Fouriertrf;": "\u2131",
  "&Fscr;": "\u2131",
  "&GJcy;": "\u0403",
  "&GT": ">",
  "&GT;": ">",
  "&Gamma;": "\u0393",
  "&Gammad;": "\u03DC",
  "&Gbreve;": "\u011E",
  "&Gcedil;": "\u0122",
  "&Gcirc;": "\u011C",
  "&Gcy;": "\u0413",
  "&Gdot;": "\u0120",
  "&Gfr;": "\u{1D50A}",
  "&Gg;": "\u22D9",
  "&Gopf;": "\u{1D53E}",
  "&GreaterEqual;": "\u2265",
  "&GreaterEqualLess;": "\u22DB",
  "&GreaterFullEqual;": "\u2267",
  "&GreaterGreater;": "\u2AA2",
  "&GreaterLess;": "\u2277",
  "&GreaterSlantEqual;": "\u2A7E",
  "&GreaterTilde;": "\u2273",
  "&Gscr;": "\u{1D4A2}",
  "&Gt;": "\u226B",
  "&HARDcy;": "\u042A",
  "&Hacek;": "\u02C7",
  "&Hat;": "^",
  "&Hcirc;": "\u0124",
  "&Hfr;": "\u210C",
  "&HilbertSpace;": "\u210B",
  "&Hopf;": "\u210D",
  "&HorizontalLine;": "\u2500",
  "&Hscr;": "\u210B",
  "&Hstrok;": "\u0126",
  "&HumpDownHump;": "\u224E",
  "&HumpEqual;": "\u224F",
  "&IEcy;": "\u0415",
  "&IJlig;": "\u0132",
  "&IOcy;": "\u0401",
  "&Iacute": "\xCD",
  "&Iacute;": "\xCD",
  "&Icirc": "\xCE",
  "&Icirc;": "\xCE",
  "&Icy;": "\u0418",
  "&Idot;": "\u0130",
  "&Ifr;": "\u2111",
  "&Igrave": "\xCC",
  "&Igrave;": "\xCC",
  "&Im;": "\u2111",
  "&Imacr;": "\u012A",
  "&ImaginaryI;": "\u2148",
  "&Implies;": "\u21D2",
  "&Int;": "\u222C",
  "&Integral;": "\u222B",
  "&Intersection;": "\u22C2",
  "&InvisibleComma;": "\u2063",
  "&InvisibleTimes;": "\u2062",
  "&Iogon;": "\u012E",
  "&Iopf;": "\u{1D540}",
  "&Iota;": "\u0399",
  "&Iscr;": "\u2110",
  "&Itilde;": "\u0128",
  "&Iukcy;": "\u0406",
  "&Iuml": "\xCF",
  "&Iuml;": "\xCF",
  "&Jcirc;": "\u0134",
  "&Jcy;": "\u0419",
  "&Jfr;": "\u{1D50D}",
  "&Jopf;": "\u{1D541}",
  "&Jscr;": "\u{1D4A5}",
  "&Jsercy;": "\u0408",
  "&Jukcy;": "\u0404",
  "&KHcy;": "\u0425",
  "&KJcy;": "\u040C",
  "&Kappa;": "\u039A",
  "&Kcedil;": "\u0136",
  "&Kcy;": "\u041A",
  "&Kfr;": "\u{1D50E}",
  "&Kopf;": "\u{1D542}",
  "&Kscr;": "\u{1D4A6}",
  "&LJcy;": "\u0409",
  "&LT": "<",
  "&LT;": "<",
  "&Lacute;": "\u0139",
  "&Lambda;": "\u039B",
  "&Lang;": "\u27EA",
  "&Laplacetrf;": "\u2112",
  "&Larr;": "\u219E",
  "&Lcaron;": "\u013D",
  "&Lcedil;": "\u013B",
  "&Lcy;": "\u041B",
  "&LeftAngleBracket;": "\u27E8",
  "&LeftArrow;": "\u2190",
  "&LeftArrowBar;": "\u21E4",
  "&LeftArrowRightArrow;": "\u21C6",
  "&LeftCeiling;": "\u2308",
  "&LeftDoubleBracket;": "\u27E6",
  "&LeftDownTeeVector;": "\u2961",
  "&LeftDownVector;": "\u21C3",
  "&LeftDownVectorBar;": "\u2959",
  "&LeftFloor;": "\u230A",
  "&LeftRightArrow;": "\u2194",
  "&LeftRightVector;": "\u294E",
  "&LeftTee;": "\u22A3",
  "&LeftTeeArrow;": "\u21A4",
  "&LeftTeeVector;": "\u295A",
  "&LeftTriangle;": "\u22B2",
  "&LeftTriangleBar;": "\u29CF",
  "&LeftTriangleEqual;": "\u22B4",
  "&LeftUpDownVector;": "\u2951",
  "&LeftUpTeeVector;": "\u2960",
  "&LeftUpVector;": "\u21BF",
  "&LeftUpVectorBar;": "\u2958",
  "&LeftVector;": "\u21BC",
  "&LeftVectorBar;": "\u2952",
  "&Leftarrow;": "\u21D0",
  "&Leftrightarrow;": "\u21D4",
  "&LessEqualGreater;": "\u22DA",
  "&LessFullEqual;": "\u2266",
  "&LessGreater;": "\u2276",
  "&LessLess;": "\u2AA1",
  "&LessSlantEqual;": "\u2A7D",
  "&LessTilde;": "\u2272",
  "&Lfr;": "\u{1D50F}",
  "&Ll;": "\u22D8",
  "&Lleftarrow;": "\u21DA",
  "&Lmidot;": "\u013F",
  "&LongLeftArrow;": "\u27F5",
  "&LongLeftRightArrow;": "\u27F7",
  "&LongRightArrow;": "\u27F6",
  "&Longleftarrow;": "\u27F8",
  "&Longleftrightarrow;": "\u27FA",
  "&Longrightarrow;": "\u27F9",
  "&Lopf;": "\u{1D543}",
  "&LowerLeftArrow;": "\u2199",
  "&LowerRightArrow;": "\u2198",
  "&Lscr;": "\u2112",
  "&Lsh;": "\u21B0",
  "&Lstrok;": "\u0141",
  "&Lt;": "\u226A",
  "&Map;": "\u2905",
  "&Mcy;": "\u041C",
  "&MediumSpace;": "\u205F",
  "&Mellintrf;": "\u2133",
  "&Mfr;": "\u{1D510}",
  "&MinusPlus;": "\u2213",
  "&Mopf;": "\u{1D544}",
  "&Mscr;": "\u2133",
  "&Mu;": "\u039C",
  "&NJcy;": "\u040A",
  "&Nacute;": "\u0143",
  "&Ncaron;": "\u0147",
  "&Ncedil;": "\u0145",
  "&Ncy;": "\u041D",
  "&NegativeMediumSpace;": "\u200B",
  "&NegativeThickSpace;": "\u200B",
  "&NegativeThinSpace;": "\u200B",
  "&NegativeVeryThinSpace;": "\u200B",
  "&NestedGreaterGreater;": "\u226B",
  "&NestedLessLess;": "\u226A",
  "&NewLine;": `
`,
  "&Nfr;": "\u{1D511}",
  "&NoBreak;": "\u2060",
  "&NonBreakingSpace;": "\xA0",
  "&Nopf;": "\u2115",
  "&Not;": "\u2AEC",
  "&NotCongruent;": "\u2262",
  "&NotCupCap;": "\u226D",
  "&NotDoubleVerticalBar;": "\u2226",
  "&NotElement;": "\u2209",
  "&NotEqual;": "\u2260",
  "&NotEqualTilde;": "\u2242\u0338",
  "&NotExists;": "\u2204",
  "&NotGreater;": "\u226F",
  "&NotGreaterEqual;": "\u2271",
  "&NotGreaterFullEqual;": "\u2267\u0338",
  "&NotGreaterGreater;": "\u226B\u0338",
  "&NotGreaterLess;": "\u2279",
  "&NotGreaterSlantEqual;": "\u2A7E\u0338",
  "&NotGreaterTilde;": "\u2275",
  "&NotHumpDownHump;": "\u224E\u0338",
  "&NotHumpEqual;": "\u224F\u0338",
  "&NotLeftTriangle;": "\u22EA",
  "&NotLeftTriangleBar;": "\u29CF\u0338",
  "&NotLeftTriangleEqual;": "\u22EC",
  "&NotLess;": "\u226E",
  "&NotLessEqual;": "\u2270",
  "&NotLessGreater;": "\u2278",
  "&NotLessLess;": "\u226A\u0338",
  "&NotLessSlantEqual;": "\u2A7D\u0338",
  "&NotLessTilde;": "\u2274",
  "&NotNestedGreaterGreater;": "\u2AA2\u0338",
  "&NotNestedLessLess;": "\u2AA1\u0338",
  "&NotPrecedes;": "\u2280",
  "&NotPrecedesEqual;": "\u2AAF\u0338",
  "&NotPrecedesSlantEqual;": "\u22E0",
  "&NotReverseElement;": "\u220C",
  "&NotRightTriangle;": "\u22EB",
  "&NotRightTriangleBar;": "\u29D0\u0338",
  "&NotRightTriangleEqual;": "\u22ED",
  "&NotSquareSubset;": "\u228F\u0338",
  "&NotSquareSubsetEqual;": "\u22E2",
  "&NotSquareSuperset;": "\u2290\u0338",
  "&NotSquareSupersetEqual;": "\u22E3",
  "&NotSubset;": "\u2282\u20D2",
  "&NotSubsetEqual;": "\u2288",
  "&NotSucceeds;": "\u2281",
  "&NotSucceedsEqual;": "\u2AB0\u0338",
  "&NotSucceedsSlantEqual;": "\u22E1",
  "&NotSucceedsTilde;": "\u227F\u0338",
  "&NotSuperset;": "\u2283\u20D2",
  "&NotSupersetEqual;": "\u2289",
  "&NotTilde;": "\u2241",
  "&NotTildeEqual;": "\u2244",
  "&NotTildeFullEqual;": "\u2247",
  "&NotTildeTilde;": "\u2249",
  "&NotVerticalBar;": "\u2224",
  "&Nscr;": "\u{1D4A9}",
  "&Ntilde": "\xD1",
  "&Ntilde;": "\xD1",
  "&Nu;": "\u039D",
  "&OElig;": "\u0152",
  "&Oacute": "\xD3",
  "&Oacute;": "\xD3",
  "&Ocirc": "\xD4",
  "&Ocirc;": "\xD4",
  "&Ocy;": "\u041E",
  "&Odblac;": "\u0150",
  "&Ofr;": "\u{1D512}",
  "&Ograve": "\xD2",
  "&Ograve;": "\xD2",
  "&Omacr;": "\u014C",
  "&Omega;": "\u03A9",
  "&Omicron;": "\u039F",
  "&Oopf;": "\u{1D546}",
  "&OpenCurlyDoubleQuote;": "\u201C",
  "&OpenCurlyQuote;": "\u2018",
  "&Or;": "\u2A54",
  "&Oscr;": "\u{1D4AA}",
  "&Oslash": "\xD8",
  "&Oslash;": "\xD8",
  "&Otilde": "\xD5",
  "&Otilde;": "\xD5",
  "&Otimes;": "\u2A37",
  "&Ouml": "\xD6",
  "&Ouml;": "\xD6",
  "&OverBar;": "\u203E",
  "&OverBrace;": "\u23DE",
  "&OverBracket;": "\u23B4",
  "&OverParenthesis;": "\u23DC",
  "&PartialD;": "\u2202",
  "&Pcy;": "\u041F",
  "&Pfr;": "\u{1D513}",
  "&Phi;": "\u03A6",
  "&Pi;": "\u03A0",
  "&PlusMinus;": "\xB1",
  "&Poincareplane;": "\u210C",
  "&Popf;": "\u2119",
  "&Pr;": "\u2ABB",
  "&Precedes;": "\u227A",
  "&PrecedesEqual;": "\u2AAF",
  "&PrecedesSlantEqual;": "\u227C",
  "&PrecedesTilde;": "\u227E",
  "&Prime;": "\u2033",
  "&Product;": "\u220F",
  "&Proportion;": "\u2237",
  "&Proportional;": "\u221D",
  "&Pscr;": "\u{1D4AB}",
  "&Psi;": "\u03A8",
  "&QUOT": '"',
  "&QUOT;": '"',
  "&Qfr;": "\u{1D514}",
  "&Qopf;": "\u211A",
  "&Qscr;": "\u{1D4AC}",
  "&RBarr;": "\u2910",
  "&REG": "\xAE",
  "&REG;": "\xAE",
  "&Racute;": "\u0154",
  "&Rang;": "\u27EB",
  "&Rarr;": "\u21A0",
  "&Rarrtl;": "\u2916",
  "&Rcaron;": "\u0158",
  "&Rcedil;": "\u0156",
  "&Rcy;": "\u0420",
  "&Re;": "\u211C",
  "&ReverseElement;": "\u220B",
  "&ReverseEquilibrium;": "\u21CB",
  "&ReverseUpEquilibrium;": "\u296F",
  "&Rfr;": "\u211C",
  "&Rho;": "\u03A1",
  "&RightAngleBracket;": "\u27E9",
  "&RightArrow;": "\u2192",
  "&RightArrowBar;": "\u21E5",
  "&RightArrowLeftArrow;": "\u21C4",
  "&RightCeiling;": "\u2309",
  "&RightDoubleBracket;": "\u27E7",
  "&RightDownTeeVector;": "\u295D",
  "&RightDownVector;": "\u21C2",
  "&RightDownVectorBar;": "\u2955",
  "&RightFloor;": "\u230B",
  "&RightTee;": "\u22A2",
  "&RightTeeArrow;": "\u21A6",
  "&RightTeeVector;": "\u295B",
  "&RightTriangle;": "\u22B3",
  "&RightTriangleBar;": "\u29D0",
  "&RightTriangleEqual;": "\u22B5",
  "&RightUpDownVector;": "\u294F",
  "&RightUpTeeVector;": "\u295C",
  "&RightUpVector;": "\u21BE",
  "&RightUpVectorBar;": "\u2954",
  "&RightVector;": "\u21C0",
  "&RightVectorBar;": "\u2953",
  "&Rightarrow;": "\u21D2",
  "&Ropf;": "\u211D",
  "&RoundImplies;": "\u2970",
  "&Rrightarrow;": "\u21DB",
  "&Rscr;": "\u211B",
  "&Rsh;": "\u21B1",
  "&RuleDelayed;": "\u29F4",
  "&SHCHcy;": "\u0429",
  "&SHcy;": "\u0428",
  "&SOFTcy;": "\u042C",
  "&Sacute;": "\u015A",
  "&Sc;": "\u2ABC",
  "&Scaron;": "\u0160",
  "&Scedil;": "\u015E",
  "&Scirc;": "\u015C",
  "&Scy;": "\u0421",
  "&Sfr;": "\u{1D516}",
  "&ShortDownArrow;": "\u2193",
  "&ShortLeftArrow;": "\u2190",
  "&ShortRightArrow;": "\u2192",
  "&ShortUpArrow;": "\u2191",
  "&Sigma;": "\u03A3",
  "&SmallCircle;": "\u2218",
  "&Sopf;": "\u{1D54A}",
  "&Sqrt;": "\u221A",
  "&Square;": "\u25A1",
  "&SquareIntersection;": "\u2293",
  "&SquareSubset;": "\u228F",
  "&SquareSubsetEqual;": "\u2291",
  "&SquareSuperset;": "\u2290",
  "&SquareSupersetEqual;": "\u2292",
  "&SquareUnion;": "\u2294",
  "&Sscr;": "\u{1D4AE}",
  "&Star;": "\u22C6",
  "&Sub;": "\u22D0",
  "&Subset;": "\u22D0",
  "&SubsetEqual;": "\u2286",
  "&Succeeds;": "\u227B",
  "&SucceedsEqual;": "\u2AB0",
  "&SucceedsSlantEqual;": "\u227D",
  "&SucceedsTilde;": "\u227F",
  "&SuchThat;": "\u220B",
  "&Sum;": "\u2211",
  "&Sup;": "\u22D1",
  "&Superset;": "\u2283",
  "&SupersetEqual;": "\u2287",
  "&Supset;": "\u22D1",
  "&THORN": "\xDE",
  "&THORN;": "\xDE",
  "&TRADE;": "\u2122",
  "&TSHcy;": "\u040B",
  "&TScy;": "\u0426",
  "&Tab;": "	",
  "&Tau;": "\u03A4",
  "&Tcaron;": "\u0164",
  "&Tcedil;": "\u0162",
  "&Tcy;": "\u0422",
  "&Tfr;": "\u{1D517}",
  "&Therefore;": "\u2234",
  "&Theta;": "\u0398",
  "&ThickSpace;": "\u205F\u200A",
  "&ThinSpace;": "\u2009",
  "&Tilde;": "\u223C",
  "&TildeEqual;": "\u2243",
  "&TildeFullEqual;": "\u2245",
  "&TildeTilde;": "\u2248",
  "&Topf;": "\u{1D54B}",
  "&TripleDot;": "\u20DB",
  "&Tscr;": "\u{1D4AF}",
  "&Tstrok;": "\u0166",
  "&Uacute": "\xDA",
  "&Uacute;": "\xDA",
  "&Uarr;": "\u219F",
  "&Uarrocir;": "\u2949",
  "&Ubrcy;": "\u040E",
  "&Ubreve;": "\u016C",
  "&Ucirc": "\xDB",
  "&Ucirc;": "\xDB",
  "&Ucy;": "\u0423",
  "&Udblac;": "\u0170",
  "&Ufr;": "\u{1D518}",
  "&Ugrave": "\xD9",
  "&Ugrave;": "\xD9",
  "&Umacr;": "\u016A",
  "&UnderBar;": "_",
  "&UnderBrace;": "\u23DF",
  "&UnderBracket;": "\u23B5",
  "&UnderParenthesis;": "\u23DD",
  "&Union;": "\u22C3",
  "&UnionPlus;": "\u228E",
  "&Uogon;": "\u0172",
  "&Uopf;": "\u{1D54C}",
  "&UpArrow;": "\u2191",
  "&UpArrowBar;": "\u2912",
  "&UpArrowDownArrow;": "\u21C5",
  "&UpDownArrow;": "\u2195",
  "&UpEquilibrium;": "\u296E",
  "&UpTee;": "\u22A5",
  "&UpTeeArrow;": "\u21A5",
  "&Uparrow;": "\u21D1",
  "&Updownarrow;": "\u21D5",
  "&UpperLeftArrow;": "\u2196",
  "&UpperRightArrow;": "\u2197",
  "&Upsi;": "\u03D2",
  "&Upsilon;": "\u03A5",
  "&Uring;": "\u016E",
  "&Uscr;": "\u{1D4B0}",
  "&Utilde;": "\u0168",
  "&Uuml": "\xDC",
  "&Uuml;": "\xDC",
  "&VDash;": "\u22AB",
  "&Vbar;": "\u2AEB",
  "&Vcy;": "\u0412",
  "&Vdash;": "\u22A9",
  "&Vdashl;": "\u2AE6",
  "&Vee;": "\u22C1",
  "&Verbar;": "\u2016",
  "&Vert;": "\u2016",
  "&VerticalBar;": "\u2223",
  "&VerticalLine;": "|",
  "&VerticalSeparator;": "\u2758",
  "&VerticalTilde;": "\u2240",
  "&VeryThinSpace;": "\u200A",
  "&Vfr;": "\u{1D519}",
  "&Vopf;": "\u{1D54D}",
  "&Vscr;": "\u{1D4B1}",
  "&Vvdash;": "\u22AA",
  "&Wcirc;": "\u0174",
  "&Wedge;": "\u22C0",
  "&Wfr;": "\u{1D51A}",
  "&Wopf;": "\u{1D54E}",
  "&Wscr;": "\u{1D4B2}",
  "&Xfr;": "\u{1D51B}",
  "&Xi;": "\u039E",
  "&Xopf;": "\u{1D54F}",
  "&Xscr;": "\u{1D4B3}",
  "&YAcy;": "\u042F",
  "&YIcy;": "\u0407",
  "&YUcy;": "\u042E",
  "&Yacute": "\xDD",
  "&Yacute;": "\xDD",
  "&Ycirc;": "\u0176",
  "&Ycy;": "\u042B",
  "&Yfr;": "\u{1D51C}",
  "&Yopf;": "\u{1D550}",
  "&Yscr;": "\u{1D4B4}",
  "&Yuml;": "\u0178",
  "&ZHcy;": "\u0416",
  "&Zacute;": "\u0179",
  "&Zcaron;": "\u017D",
  "&Zcy;": "\u0417",
  "&Zdot;": "\u017B",
  "&ZeroWidthSpace;": "\u200B",
  "&Zeta;": "\u0396",
  "&Zfr;": "\u2128",
  "&Zopf;": "\u2124",
  "&Zscr;": "\u{1D4B5}",
  "&aacute": "\xE1",
  "&aacute;": "\xE1",
  "&abreve;": "\u0103",
  "&ac;": "\u223E",
  "&acE;": "\u223E\u0333",
  "&acd;": "\u223F",
  "&acirc": "\xE2",
  "&acirc;": "\xE2",
  "&acute": "\xB4",
  "&acute;": "\xB4",
  "&acy;": "\u0430",
  "&aelig": "\xE6",
  "&aelig;": "\xE6",
  "&af;": "\u2061",
  "&afr;": "\u{1D51E}",
  "&agrave": "\xE0",
  "&agrave;": "\xE0",
  "&alefsym;": "\u2135",
  "&aleph;": "\u2135",
  "&alpha;": "\u03B1",
  "&amacr;": "\u0101",
  "&amalg;": "\u2A3F",
  "&amp": "&",
  "&amp;": "&",
  "&and;": "\u2227",
  "&andand;": "\u2A55",
  "&andd;": "\u2A5C",
  "&andslope;": "\u2A58",
  "&andv;": "\u2A5A",
  "&ang;": "\u2220",
  "&ange;": "\u29A4",
  "&angle;": "\u2220",
  "&angmsd;": "\u2221",
  "&angmsdaa;": "\u29A8",
  "&angmsdab;": "\u29A9",
  "&angmsdac;": "\u29AA",
  "&angmsdad;": "\u29AB",
  "&angmsdae;": "\u29AC",
  "&angmsdaf;": "\u29AD",
  "&angmsdag;": "\u29AE",
  "&angmsdah;": "\u29AF",
  "&angrt;": "\u221F",
  "&angrtvb;": "\u22BE",
  "&angrtvbd;": "\u299D",
  "&angsph;": "\u2222",
  "&angst;": "\xC5",
  "&angzarr;": "\u237C",
  "&aogon;": "\u0105",
  "&aopf;": "\u{1D552}",
  "&ap;": "\u2248",
  "&apE;": "\u2A70",
  "&apacir;": "\u2A6F",
  "&ape;": "\u224A",
  "&apid;": "\u224B",
  "&apos;": "'",
  "&approx;": "\u2248",
  "&approxeq;": "\u224A",
  "&aring": "\xE5",
  "&aring;": "\xE5",
  "&ascr;": "\u{1D4B6}",
  "&ast;": "*",
  "&asymp;": "\u2248",
  "&asympeq;": "\u224D",
  "&atilde": "\xE3",
  "&atilde;": "\xE3",
  "&auml": "\xE4",
  "&auml;": "\xE4",
  "&awconint;": "\u2233",
  "&awint;": "\u2A11",
  "&bNot;": "\u2AED",
  "&backcong;": "\u224C",
  "&backepsilon;": "\u03F6",
  "&backprime;": "\u2035",
  "&backsim;": "\u223D",
  "&backsimeq;": "\u22CD",
  "&barvee;": "\u22BD",
  "&barwed;": "\u2305",
  "&barwedge;": "\u2305",
  "&bbrk;": "\u23B5",
  "&bbrktbrk;": "\u23B6",
  "&bcong;": "\u224C",
  "&bcy;": "\u0431",
  "&bdquo;": "\u201E",
  "&becaus;": "\u2235",
  "&because;": "\u2235",
  "&bemptyv;": "\u29B0",
  "&bepsi;": "\u03F6",
  "&bernou;": "\u212C",
  "&beta;": "\u03B2",
  "&beth;": "\u2136",
  "&between;": "\u226C",
  "&bfr;": "\u{1D51F}",
  "&bigcap;": "\u22C2",
  "&bigcirc;": "\u25EF",
  "&bigcup;": "\u22C3",
  "&bigodot;": "\u2A00",
  "&bigoplus;": "\u2A01",
  "&bigotimes;": "\u2A02",
  "&bigsqcup;": "\u2A06",
  "&bigstar;": "\u2605",
  "&bigtriangledown;": "\u25BD",
  "&bigtriangleup;": "\u25B3",
  "&biguplus;": "\u2A04",
  "&bigvee;": "\u22C1",
  "&bigwedge;": "\u22C0",
  "&bkarow;": "\u290D",
  "&blacklozenge;": "\u29EB",
  "&blacksquare;": "\u25AA",
  "&blacktriangle;": "\u25B4",
  "&blacktriangledown;": "\u25BE",
  "&blacktriangleleft;": "\u25C2",
  "&blacktriangleright;": "\u25B8",
  "&blank;": "\u2423",
  "&blk12;": "\u2592",
  "&blk14;": "\u2591",
  "&blk34;": "\u2593",
  "&block;": "\u2588",
  "&bne;": "=\u20E5",
  "&bnequiv;": "\u2261\u20E5",
  "&bnot;": "\u2310",
  "&bopf;": "\u{1D553}",
  "&bot;": "\u22A5",
  "&bottom;": "\u22A5",
  "&bowtie;": "\u22C8",
  "&boxDL;": "\u2557",
  "&boxDR;": "\u2554",
  "&boxDl;": "\u2556",
  "&boxDr;": "\u2553",
  "&boxH;": "\u2550",
  "&boxHD;": "\u2566",
  "&boxHU;": "\u2569",
  "&boxHd;": "\u2564",
  "&boxHu;": "\u2567",
  "&boxUL;": "\u255D",
  "&boxUR;": "\u255A",
  "&boxUl;": "\u255C",
  "&boxUr;": "\u2559",
  "&boxV;": "\u2551",
  "&boxVH;": "\u256C",
  "&boxVL;": "\u2563",
  "&boxVR;": "\u2560",
  "&boxVh;": "\u256B",
  "&boxVl;": "\u2562",
  "&boxVr;": "\u255F",
  "&boxbox;": "\u29C9",
  "&boxdL;": "\u2555",
  "&boxdR;": "\u2552",
  "&boxdl;": "\u2510",
  "&boxdr;": "\u250C",
  "&boxh;": "\u2500",
  "&boxhD;": "\u2565",
  "&boxhU;": "\u2568",
  "&boxhd;": "\u252C",
  "&boxhu;": "\u2534",
  "&boxminus;": "\u229F",
  "&boxplus;": "\u229E",
  "&boxtimes;": "\u22A0",
  "&boxuL;": "\u255B",
  "&boxuR;": "\u2558",
  "&boxul;": "\u2518",
  "&boxur;": "\u2514",
  "&boxv;": "\u2502",
  "&boxvH;": "\u256A",
  "&boxvL;": "\u2561",
  "&boxvR;": "\u255E",
  "&boxvh;": "\u253C",
  "&boxvl;": "\u2524",
  "&boxvr;": "\u251C",
  "&bprime;": "\u2035",
  "&breve;": "\u02D8",
  "&brvbar": "\xA6",
  "&brvbar;": "\xA6",
  "&bscr;": "\u{1D4B7}",
  "&bsemi;": "\u204F",
  "&bsim;": "\u223D",
  "&bsime;": "\u22CD",
  "&bsol;": "\\",
  "&bsolb;": "\u29C5",
  "&bsolhsub;": "\u27C8",
  "&bull;": "\u2022",
  "&bullet;": "\u2022",
  "&bump;": "\u224E",
  "&bumpE;": "\u2AAE",
  "&bumpe;": "\u224F",
  "&bumpeq;": "\u224F",
  "&cacute;": "\u0107",
  "&cap;": "\u2229",
  "&capand;": "\u2A44",
  "&capbrcup;": "\u2A49",
  "&capcap;": "\u2A4B",
  "&capcup;": "\u2A47",
  "&capdot;": "\u2A40",
  "&caps;": "\u2229\uFE00",
  "&caret;": "\u2041",
  "&caron;": "\u02C7",
  "&ccaps;": "\u2A4D",
  "&ccaron;": "\u010D",
  "&ccedil": "\xE7",
  "&ccedil;": "\xE7",
  "&ccirc;": "\u0109",
  "&ccups;": "\u2A4C",
  "&ccupssm;": "\u2A50",
  "&cdot;": "\u010B",
  "&cedil": "\xB8",
  "&cedil;": "\xB8",
  "&cemptyv;": "\u29B2",
  "&cent": "\xA2",
  "&cent;": "\xA2",
  "&centerdot;": "\xB7",
  "&cfr;": "\u{1D520}",
  "&chcy;": "\u0447",
  "&check;": "\u2713",
  "&checkmark;": "\u2713",
  "&chi;": "\u03C7",
  "&cir;": "\u25CB",
  "&cirE;": "\u29C3",
  "&circ;": "\u02C6",
  "&circeq;": "\u2257",
  "&circlearrowleft;": "\u21BA",
  "&circlearrowright;": "\u21BB",
  "&circledR;": "\xAE",
  "&circledS;": "\u24C8",
  "&circledast;": "\u229B",
  "&circledcirc;": "\u229A",
  "&circleddash;": "\u229D",
  "&cire;": "\u2257",
  "&cirfnint;": "\u2A10",
  "&cirmid;": "\u2AEF",
  "&cirscir;": "\u29C2",
  "&clubs;": "\u2663",
  "&clubsuit;": "\u2663",
  "&colon;": ":",
  "&colone;": "\u2254",
  "&coloneq;": "\u2254",
  "&comma;": ",",
  "&commat;": "@",
  "&comp;": "\u2201",
  "&compfn;": "\u2218",
  "&complement;": "\u2201",
  "&complexes;": "\u2102",
  "&cong;": "\u2245",
  "&congdot;": "\u2A6D",
  "&conint;": "\u222E",
  "&copf;": "\u{1D554}",
  "&coprod;": "\u2210",
  "&copy": "\xA9",
  "&copy;": "\xA9",
  "&copysr;": "\u2117",
  "&crarr;": "\u21B5",
  "&cross;": "\u2717",
  "&cscr;": "\u{1D4B8}",
  "&csub;": "\u2ACF",
  "&csube;": "\u2AD1",
  "&csup;": "\u2AD0",
  "&csupe;": "\u2AD2",
  "&ctdot;": "\u22EF",
  "&cudarrl;": "\u2938",
  "&cudarrr;": "\u2935",
  "&cuepr;": "\u22DE",
  "&cuesc;": "\u22DF",
  "&cularr;": "\u21B6",
  "&cularrp;": "\u293D",
  "&cup;": "\u222A",
  "&cupbrcap;": "\u2A48",
  "&cupcap;": "\u2A46",
  "&cupcup;": "\u2A4A",
  "&cupdot;": "\u228D",
  "&cupor;": "\u2A45",
  "&cups;": "\u222A\uFE00",
  "&curarr;": "\u21B7",
  "&curarrm;": "\u293C",
  "&curlyeqprec;": "\u22DE",
  "&curlyeqsucc;": "\u22DF",
  "&curlyvee;": "\u22CE",
  "&curlywedge;": "\u22CF",
  "&curren": "\xA4",
  "&curren;": "\xA4",
  "&curvearrowleft;": "\u21B6",
  "&curvearrowright;": "\u21B7",
  "&cuvee;": "\u22CE",
  "&cuwed;": "\u22CF",
  "&cwconint;": "\u2232",
  "&cwint;": "\u2231",
  "&cylcty;": "\u232D",
  "&dArr;": "\u21D3",
  "&dHar;": "\u2965",
  "&dagger;": "\u2020",
  "&daleth;": "\u2138",
  "&darr;": "\u2193",
  "&dash;": "\u2010",
  "&dashv;": "\u22A3",
  "&dbkarow;": "\u290F",
  "&dblac;": "\u02DD",
  "&dcaron;": "\u010F",
  "&dcy;": "\u0434",
  "&dd;": "\u2146",
  "&ddagger;": "\u2021",
  "&ddarr;": "\u21CA",
  "&ddotseq;": "\u2A77",
  "&deg": "\xB0",
  "&deg;": "\xB0",
  "&delta;": "\u03B4",
  "&demptyv;": "\u29B1",
  "&dfisht;": "\u297F",
  "&dfr;": "\u{1D521}",
  "&dharl;": "\u21C3",
  "&dharr;": "\u21C2",
  "&diam;": "\u22C4",
  "&diamond;": "\u22C4",
  "&diamondsuit;": "\u2666",
  "&diams;": "\u2666",
  "&die;": "\xA8",
  "&digamma;": "\u03DD",
  "&disin;": "\u22F2",
  "&div;": "\xF7",
  "&divide": "\xF7",
  "&divide;": "\xF7",
  "&divideontimes;": "\u22C7",
  "&divonx;": "\u22C7",
  "&djcy;": "\u0452",
  "&dlcorn;": "\u231E",
  "&dlcrop;": "\u230D",
  "&dollar;": "$",
  "&dopf;": "\u{1D555}",
  "&dot;": "\u02D9",
  "&doteq;": "\u2250",
  "&doteqdot;": "\u2251",
  "&dotminus;": "\u2238",
  "&dotplus;": "\u2214",
  "&dotsquare;": "\u22A1",
  "&doublebarwedge;": "\u2306",
  "&downarrow;": "\u2193",
  "&downdownarrows;": "\u21CA",
  "&downharpoonleft;": "\u21C3",
  "&downharpoonright;": "\u21C2",
  "&drbkarow;": "\u2910",
  "&drcorn;": "\u231F",
  "&drcrop;": "\u230C",
  "&dscr;": "\u{1D4B9}",
  "&dscy;": "\u0455",
  "&dsol;": "\u29F6",
  "&dstrok;": "\u0111",
  "&dtdot;": "\u22F1",
  "&dtri;": "\u25BF",
  "&dtrif;": "\u25BE",
  "&duarr;": "\u21F5",
  "&duhar;": "\u296F",
  "&dwangle;": "\u29A6",
  "&dzcy;": "\u045F",
  "&dzigrarr;": "\u27FF",
  "&eDDot;": "\u2A77",
  "&eDot;": "\u2251",
  "&eacute": "\xE9",
  "&eacute;": "\xE9",
  "&easter;": "\u2A6E",
  "&ecaron;": "\u011B",
  "&ecir;": "\u2256",
  "&ecirc": "\xEA",
  "&ecirc;": "\xEA",
  "&ecolon;": "\u2255",
  "&ecy;": "\u044D",
  "&edot;": "\u0117",
  "&ee;": "\u2147",
  "&efDot;": "\u2252",
  "&efr;": "\u{1D522}",
  "&eg;": "\u2A9A",
  "&egrave": "\xE8",
  "&egrave;": "\xE8",
  "&egs;": "\u2A96",
  "&egsdot;": "\u2A98",
  "&el;": "\u2A99",
  "&elinters;": "\u23E7",
  "&ell;": "\u2113",
  "&els;": "\u2A95",
  "&elsdot;": "\u2A97",
  "&emacr;": "\u0113",
  "&empty;": "\u2205",
  "&emptyset;": "\u2205",
  "&emptyv;": "\u2205",
  "&emsp13;": "\u2004",
  "&emsp14;": "\u2005",
  "&emsp;": "\u2003",
  "&eng;": "\u014B",
  "&ensp;": "\u2002",
  "&eogon;": "\u0119",
  "&eopf;": "\u{1D556}",
  "&epar;": "\u22D5",
  "&eparsl;": "\u29E3",
  "&eplus;": "\u2A71",
  "&epsi;": "\u03B5",
  "&epsilon;": "\u03B5",
  "&epsiv;": "\u03F5",
  "&eqcirc;": "\u2256",
  "&eqcolon;": "\u2255",
  "&eqsim;": "\u2242",
  "&eqslantgtr;": "\u2A96",
  "&eqslantless;": "\u2A95",
  "&equals;": "=",
  "&equest;": "\u225F",
  "&equiv;": "\u2261",
  "&equivDD;": "\u2A78",
  "&eqvparsl;": "\u29E5",
  "&erDot;": "\u2253",
  "&erarr;": "\u2971",
  "&escr;": "\u212F",
  "&esdot;": "\u2250",
  "&esim;": "\u2242",
  "&eta;": "\u03B7",
  "&eth": "\xF0",
  "&eth;": "\xF0",
  "&euml": "\xEB",
  "&euml;": "\xEB",
  "&euro;": "\u20AC",
  "&excl;": "!",
  "&exist;": "\u2203",
  "&expectation;": "\u2130",
  "&exponentiale;": "\u2147",
  "&fallingdotseq;": "\u2252",
  "&fcy;": "\u0444",
  "&female;": "\u2640",
  "&ffilig;": "\uFB03",
  "&fflig;": "\uFB00",
  "&ffllig;": "\uFB04",
  "&ffr;": "\u{1D523}",
  "&filig;": "\uFB01",
  "&fjlig;": "fj",
  "&flat;": "\u266D",
  "&fllig;": "\uFB02",
  "&fltns;": "\u25B1",
  "&fnof;": "\u0192",
  "&fopf;": "\u{1D557}",
  "&forall;": "\u2200",
  "&fork;": "\u22D4",
  "&forkv;": "\u2AD9",
  "&fpartint;": "\u2A0D",
  "&frac12": "\xBD",
  "&frac12;": "\xBD",
  "&frac13;": "\u2153",
  "&frac14": "\xBC",
  "&frac14;": "\xBC",
  "&frac15;": "\u2155",
  "&frac16;": "\u2159",
  "&frac18;": "\u215B",
  "&frac23;": "\u2154",
  "&frac25;": "\u2156",
  "&frac34": "\xBE",
  "&frac34;": "\xBE",
  "&frac35;": "\u2157",
  "&frac38;": "\u215C",
  "&frac45;": "\u2158",
  "&frac56;": "\u215A",
  "&frac58;": "\u215D",
  "&frac78;": "\u215E",
  "&frasl;": "\u2044",
  "&frown;": "\u2322",
  "&fscr;": "\u{1D4BB}",
  "&gE;": "\u2267",
  "&gEl;": "\u2A8C",
  "&gacute;": "\u01F5",
  "&gamma;": "\u03B3",
  "&gammad;": "\u03DD",
  "&gap;": "\u2A86",
  "&gbreve;": "\u011F",
  "&gcirc;": "\u011D",
  "&gcy;": "\u0433",
  "&gdot;": "\u0121",
  "&ge;": "\u2265",
  "&gel;": "\u22DB",
  "&geq;": "\u2265",
  "&geqq;": "\u2267",
  "&geqslant;": "\u2A7E",
  "&ges;": "\u2A7E",
  "&gescc;": "\u2AA9",
  "&gesdot;": "\u2A80",
  "&gesdoto;": "\u2A82",
  "&gesdotol;": "\u2A84",
  "&gesl;": "\u22DB\uFE00",
  "&gesles;": "\u2A94",
  "&gfr;": "\u{1D524}",
  "&gg;": "\u226B",
  "&ggg;": "\u22D9",
  "&gimel;": "\u2137",
  "&gjcy;": "\u0453",
  "&gl;": "\u2277",
  "&glE;": "\u2A92",
  "&gla;": "\u2AA5",
  "&glj;": "\u2AA4",
  "&gnE;": "\u2269",
  "&gnap;": "\u2A8A",
  "&gnapprox;": "\u2A8A",
  "&gne;": "\u2A88",
  "&gneq;": "\u2A88",
  "&gneqq;": "\u2269",
  "&gnsim;": "\u22E7",
  "&gopf;": "\u{1D558}",
  "&grave;": "`",
  "&gscr;": "\u210A",
  "&gsim;": "\u2273",
  "&gsime;": "\u2A8E",
  "&gsiml;": "\u2A90",
  "&gt": ">",
  "&gt;": ">",
  "&gtcc;": "\u2AA7",
  "&gtcir;": "\u2A7A",
  "&gtdot;": "\u22D7",
  "&gtlPar;": "\u2995",
  "&gtquest;": "\u2A7C",
  "&gtrapprox;": "\u2A86",
  "&gtrarr;": "\u2978",
  "&gtrdot;": "\u22D7",
  "&gtreqless;": "\u22DB",
  "&gtreqqless;": "\u2A8C",
  "&gtrless;": "\u2277",
  "&gtrsim;": "\u2273",
  "&gvertneqq;": "\u2269\uFE00",
  "&gvnE;": "\u2269\uFE00",
  "&hArr;": "\u21D4",
  "&hairsp;": "\u200A",
  "&half;": "\xBD",
  "&hamilt;": "\u210B",
  "&hardcy;": "\u044A",
  "&harr;": "\u2194",
  "&harrcir;": "\u2948",
  "&harrw;": "\u21AD",
  "&hbar;": "\u210F",
  "&hcirc;": "\u0125",
  "&hearts;": "\u2665",
  "&heartsuit;": "\u2665",
  "&hellip;": "\u2026",
  "&hercon;": "\u22B9",
  "&hfr;": "\u{1D525}",
  "&hksearow;": "\u2925",
  "&hkswarow;": "\u2926",
  "&hoarr;": "\u21FF",
  "&homtht;": "\u223B",
  "&hookleftarrow;": "\u21A9",
  "&hookrightarrow;": "\u21AA",
  "&hopf;": "\u{1D559}",
  "&horbar;": "\u2015",
  "&hscr;": "\u{1D4BD}",
  "&hslash;": "\u210F",
  "&hstrok;": "\u0127",
  "&hybull;": "\u2043",
  "&hyphen;": "\u2010",
  "&iacute": "\xED",
  "&iacute;": "\xED",
  "&ic;": "\u2063",
  "&icirc": "\xEE",
  "&icirc;": "\xEE",
  "&icy;": "\u0438",
  "&iecy;": "\u0435",
  "&iexcl": "\xA1",
  "&iexcl;": "\xA1",
  "&iff;": "\u21D4",
  "&ifr;": "\u{1D526}",
  "&igrave": "\xEC",
  "&igrave;": "\xEC",
  "&ii;": "\u2148",
  "&iiiint;": "\u2A0C",
  "&iiint;": "\u222D",
  "&iinfin;": "\u29DC",
  "&iiota;": "\u2129",
  "&ijlig;": "\u0133",
  "&imacr;": "\u012B",
  "&image;": "\u2111",
  "&imagline;": "\u2110",
  "&imagpart;": "\u2111",
  "&imath;": "\u0131",
  "&imof;": "\u22B7",
  "&imped;": "\u01B5",
  "&in;": "\u2208",
  "&incare;": "\u2105",
  "&infin;": "\u221E",
  "&infintie;": "\u29DD",
  "&inodot;": "\u0131",
  "&int;": "\u222B",
  "&intcal;": "\u22BA",
  "&integers;": "\u2124",
  "&intercal;": "\u22BA",
  "&intlarhk;": "\u2A17",
  "&intprod;": "\u2A3C",
  "&iocy;": "\u0451",
  "&iogon;": "\u012F",
  "&iopf;": "\u{1D55A}",
  "&iota;": "\u03B9",
  "&iprod;": "\u2A3C",
  "&iquest": "\xBF",
  "&iquest;": "\xBF",
  "&iscr;": "\u{1D4BE}",
  "&isin;": "\u2208",
  "&isinE;": "\u22F9",
  "&isindot;": "\u22F5",
  "&isins;": "\u22F4",
  "&isinsv;": "\u22F3",
  "&isinv;": "\u2208",
  "&it;": "\u2062",
  "&itilde;": "\u0129",
  "&iukcy;": "\u0456",
  "&iuml": "\xEF",
  "&iuml;": "\xEF",
  "&jcirc;": "\u0135",
  "&jcy;": "\u0439",
  "&jfr;": "\u{1D527}",
  "&jmath;": "\u0237",
  "&jopf;": "\u{1D55B}",
  "&jscr;": "\u{1D4BF}",
  "&jsercy;": "\u0458",
  "&jukcy;": "\u0454",
  "&kappa;": "\u03BA",
  "&kappav;": "\u03F0",
  "&kcedil;": "\u0137",
  "&kcy;": "\u043A",
  "&kfr;": "\u{1D528}",
  "&kgreen;": "\u0138",
  "&khcy;": "\u0445",
  "&kjcy;": "\u045C",
  "&kopf;": "\u{1D55C}",
  "&kscr;": "\u{1D4C0}",
  "&lAarr;": "\u21DA",
  "&lArr;": "\u21D0",
  "&lAtail;": "\u291B",
  "&lBarr;": "\u290E",
  "&lE;": "\u2266",
  "&lEg;": "\u2A8B",
  "&lHar;": "\u2962",
  "&lacute;": "\u013A",
  "&laemptyv;": "\u29B4",
  "&lagran;": "\u2112",
  "&lambda;": "\u03BB",
  "&lang;": "\u27E8",
  "&langd;": "\u2991",
  "&langle;": "\u27E8",
  "&lap;": "\u2A85",
  "&laquo": "\xAB",
  "&laquo;": "\xAB",
  "&larr;": "\u2190",
  "&larrb;": "\u21E4",
  "&larrbfs;": "\u291F",
  "&larrfs;": "\u291D",
  "&larrhk;": "\u21A9",
  "&larrlp;": "\u21AB",
  "&larrpl;": "\u2939",
  "&larrsim;": "\u2973",
  "&larrtl;": "\u21A2",
  "&lat;": "\u2AAB",
  "&latail;": "\u2919",
  "&late;": "\u2AAD",
  "&lates;": "\u2AAD\uFE00",
  "&lbarr;": "\u290C",
  "&lbbrk;": "\u2772",
  "&lbrace;": "{",
  "&lbrack;": "[",
  "&lbrke;": "\u298B",
  "&lbrksld;": "\u298F",
  "&lbrkslu;": "\u298D",
  "&lcaron;": "\u013E",
  "&lcedil;": "\u013C",
  "&lceil;": "\u2308",
  "&lcub;": "{",
  "&lcy;": "\u043B",
  "&ldca;": "\u2936",
  "&ldquo;": "\u201C",
  "&ldquor;": "\u201E",
  "&ldrdhar;": "\u2967",
  "&ldrushar;": "\u294B",
  "&ldsh;": "\u21B2",
  "&le;": "\u2264",
  "&leftarrow;": "\u2190",
  "&leftarrowtail;": "\u21A2",
  "&leftharpoondown;": "\u21BD",
  "&leftharpoonup;": "\u21BC",
  "&leftleftarrows;": "\u21C7",
  "&leftrightarrow;": "\u2194",
  "&leftrightarrows;": "\u21C6",
  "&leftrightharpoons;": "\u21CB",
  "&leftrightsquigarrow;": "\u21AD",
  "&leftthreetimes;": "\u22CB",
  "&leg;": "\u22DA",
  "&leq;": "\u2264",
  "&leqq;": "\u2266",
  "&leqslant;": "\u2A7D",
  "&les;": "\u2A7D",
  "&lescc;": "\u2AA8",
  "&lesdot;": "\u2A7F",
  "&lesdoto;": "\u2A81",
  "&lesdotor;": "\u2A83",
  "&lesg;": "\u22DA\uFE00",
  "&lesges;": "\u2A93",
  "&lessapprox;": "\u2A85",
  "&lessdot;": "\u22D6",
  "&lesseqgtr;": "\u22DA",
  "&lesseqqgtr;": "\u2A8B",
  "&lessgtr;": "\u2276",
  "&lesssim;": "\u2272",
  "&lfisht;": "\u297C",
  "&lfloor;": "\u230A",
  "&lfr;": "\u{1D529}",
  "&lg;": "\u2276",
  "&lgE;": "\u2A91",
  "&lhard;": "\u21BD",
  "&lharu;": "\u21BC",
  "&lharul;": "\u296A",
  "&lhblk;": "\u2584",
  "&ljcy;": "\u0459",
  "&ll;": "\u226A",
  "&llarr;": "\u21C7",
  "&llcorner;": "\u231E",
  "&llhard;": "\u296B",
  "&lltri;": "\u25FA",
  "&lmidot;": "\u0140",
  "&lmoust;": "\u23B0",
  "&lmoustache;": "\u23B0",
  "&lnE;": "\u2268",
  "&lnap;": "\u2A89",
  "&lnapprox;": "\u2A89",
  "&lne;": "\u2A87",
  "&lneq;": "\u2A87",
  "&lneqq;": "\u2268",
  "&lnsim;": "\u22E6",
  "&loang;": "\u27EC",
  "&loarr;": "\u21FD",
  "&lobrk;": "\u27E6",
  "&longleftarrow;": "\u27F5",
  "&longleftrightarrow;": "\u27F7",
  "&longmapsto;": "\u27FC",
  "&longrightarrow;": "\u27F6",
  "&looparrowleft;": "\u21AB",
  "&looparrowright;": "\u21AC",
  "&lopar;": "\u2985",
  "&lopf;": "\u{1D55D}",
  "&loplus;": "\u2A2D",
  "&lotimes;": "\u2A34",
  "&lowast;": "\u2217",
  "&lowbar;": "_",
  "&loz;": "\u25CA",
  "&lozenge;": "\u25CA",
  "&lozf;": "\u29EB",
  "&lpar;": "(",
  "&lparlt;": "\u2993",
  "&lrarr;": "\u21C6",
  "&lrcorner;": "\u231F",
  "&lrhar;": "\u21CB",
  "&lrhard;": "\u296D",
  "&lrm;": "\u200E",
  "&lrtri;": "\u22BF",
  "&lsaquo;": "\u2039",
  "&lscr;": "\u{1D4C1}",
  "&lsh;": "\u21B0",
  "&lsim;": "\u2272",
  "&lsime;": "\u2A8D",
  "&lsimg;": "\u2A8F",
  "&lsqb;": "[",
  "&lsquo;": "\u2018",
  "&lsquor;": "\u201A",
  "&lstrok;": "\u0142",
  "&lt": "<",
  "&lt;": "<",
  "&ltcc;": "\u2AA6",
  "&ltcir;": "\u2A79",
  "&ltdot;": "\u22D6",
  "&lthree;": "\u22CB",
  "&ltimes;": "\u22C9",
  "&ltlarr;": "\u2976",
  "&ltquest;": "\u2A7B",
  "&ltrPar;": "\u2996",
  "&ltri;": "\u25C3",
  "&ltrie;": "\u22B4",
  "&ltrif;": "\u25C2",
  "&lurdshar;": "\u294A",
  "&luruhar;": "\u2966",
  "&lvertneqq;": "\u2268\uFE00",
  "&lvnE;": "\u2268\uFE00",
  "&mDDot;": "\u223A",
  "&macr": "\xAF",
  "&macr;": "\xAF",
  "&male;": "\u2642",
  "&malt;": "\u2720",
  "&maltese;": "\u2720",
  "&map;": "\u21A6",
  "&mapsto;": "\u21A6",
  "&mapstodown;": "\u21A7",
  "&mapstoleft;": "\u21A4",
  "&mapstoup;": "\u21A5",
  "&marker;": "\u25AE",
  "&mcomma;": "\u2A29",
  "&mcy;": "\u043C",
  "&mdash;": "\u2014",
  "&measuredangle;": "\u2221",
  "&mfr;": "\u{1D52A}",
  "&mho;": "\u2127",
  "&micro": "\xB5",
  "&micro;": "\xB5",
  "&mid;": "\u2223",
  "&midast;": "*",
  "&midcir;": "\u2AF0",
  "&middot": "\xB7",
  "&middot;": "\xB7",
  "&minus;": "\u2212",
  "&minusb;": "\u229F",
  "&minusd;": "\u2238",
  "&minusdu;": "\u2A2A",
  "&mlcp;": "\u2ADB",
  "&mldr;": "\u2026",
  "&mnplus;": "\u2213",
  "&models;": "\u22A7",
  "&mopf;": "\u{1D55E}",
  "&mp;": "\u2213",
  "&mscr;": "\u{1D4C2}",
  "&mstpos;": "\u223E",
  "&mu;": "\u03BC",
  "&multimap;": "\u22B8",
  "&mumap;": "\u22B8",
  "&nGg;": "\u22D9\u0338",
  "&nGt;": "\u226B\u20D2",
  "&nGtv;": "\u226B\u0338",
  "&nLeftarrow;": "\u21CD",
  "&nLeftrightarrow;": "\u21CE",
  "&nLl;": "\u22D8\u0338",
  "&nLt;": "\u226A\u20D2",
  "&nLtv;": "\u226A\u0338",
  "&nRightarrow;": "\u21CF",
  "&nVDash;": "\u22AF",
  "&nVdash;": "\u22AE",
  "&nabla;": "\u2207",
  "&nacute;": "\u0144",
  "&nang;": "\u2220\u20D2",
  "&nap;": "\u2249",
  "&napE;": "\u2A70\u0338",
  "&napid;": "\u224B\u0338",
  "&napos;": "\u0149",
  "&napprox;": "\u2249",
  "&natur;": "\u266E",
  "&natural;": "\u266E",
  "&naturals;": "\u2115",
  "&nbsp": "\xA0",
  "&nbsp;": "\xA0",
  "&nbump;": "\u224E\u0338",
  "&nbumpe;": "\u224F\u0338",
  "&ncap;": "\u2A43",
  "&ncaron;": "\u0148",
  "&ncedil;": "\u0146",
  "&ncong;": "\u2247",
  "&ncongdot;": "\u2A6D\u0338",
  "&ncup;": "\u2A42",
  "&ncy;": "\u043D",
  "&ndash;": "\u2013",
  "&ne;": "\u2260",
  "&neArr;": "\u21D7",
  "&nearhk;": "\u2924",
  "&nearr;": "\u2197",
  "&nearrow;": "\u2197",
  "&nedot;": "\u2250\u0338",
  "&nequiv;": "\u2262",
  "&nesear;": "\u2928",
  "&nesim;": "\u2242\u0338",
  "&nexist;": "\u2204",
  "&nexists;": "\u2204",
  "&nfr;": "\u{1D52B}",
  "&ngE;": "\u2267\u0338",
  "&nge;": "\u2271",
  "&ngeq;": "\u2271",
  "&ngeqq;": "\u2267\u0338",
  "&ngeqslant;": "\u2A7E\u0338",
  "&nges;": "\u2A7E\u0338",
  "&ngsim;": "\u2275",
  "&ngt;": "\u226F",
  "&ngtr;": "\u226F",
  "&nhArr;": "\u21CE",
  "&nharr;": "\u21AE",
  "&nhpar;": "\u2AF2",
  "&ni;": "\u220B",
  "&nis;": "\u22FC",
  "&nisd;": "\u22FA",
  "&niv;": "\u220B",
  "&njcy;": "\u045A",
  "&nlArr;": "\u21CD",
  "&nlE;": "\u2266\u0338",
  "&nlarr;": "\u219A",
  "&nldr;": "\u2025",
  "&nle;": "\u2270",
  "&nleftarrow;": "\u219A",
  "&nleftrightarrow;": "\u21AE",
  "&nleq;": "\u2270",
  "&nleqq;": "\u2266\u0338",
  "&nleqslant;": "\u2A7D\u0338",
  "&nles;": "\u2A7D\u0338",
  "&nless;": "\u226E",
  "&nlsim;": "\u2274",
  "&nlt;": "\u226E",
  "&nltri;": "\u22EA",
  "&nltrie;": "\u22EC",
  "&nmid;": "\u2224",
  "&nopf;": "\u{1D55F}",
  "&not": "\xAC",
  "&not;": "\xAC",
  "&notin;": "\u2209",
  "&notinE;": "\u22F9\u0338",
  "&notindot;": "\u22F5\u0338",
  "&notinva;": "\u2209",
  "&notinvb;": "\u22F7",
  "&notinvc;": "\u22F6",
  "&notni;": "\u220C",
  "&notniva;": "\u220C",
  "&notnivb;": "\u22FE",
  "&notnivc;": "\u22FD",
  "&npar;": "\u2226",
  "&nparallel;": "\u2226",
  "&nparsl;": "\u2AFD\u20E5",
  "&npart;": "\u2202\u0338",
  "&npolint;": "\u2A14",
  "&npr;": "\u2280",
  "&nprcue;": "\u22E0",
  "&npre;": "\u2AAF\u0338",
  "&nprec;": "\u2280",
  "&npreceq;": "\u2AAF\u0338",
  "&nrArr;": "\u21CF",
  "&nrarr;": "\u219B",
  "&nrarrc;": "\u2933\u0338",
  "&nrarrw;": "\u219D\u0338",
  "&nrightarrow;": "\u219B",
  "&nrtri;": "\u22EB",
  "&nrtrie;": "\u22ED",
  "&nsc;": "\u2281",
  "&nsccue;": "\u22E1",
  "&nsce;": "\u2AB0\u0338",
  "&nscr;": "\u{1D4C3}",
  "&nshortmid;": "\u2224",
  "&nshortparallel;": "\u2226",
  "&nsim;": "\u2241",
  "&nsime;": "\u2244",
  "&nsimeq;": "\u2244",
  "&nsmid;": "\u2224",
  "&nspar;": "\u2226",
  "&nsqsube;": "\u22E2",
  "&nsqsupe;": "\u22E3",
  "&nsub;": "\u2284",
  "&nsubE;": "\u2AC5\u0338",
  "&nsube;": "\u2288",
  "&nsubset;": "\u2282\u20D2",
  "&nsubseteq;": "\u2288",
  "&nsubseteqq;": "\u2AC5\u0338",
  "&nsucc;": "\u2281",
  "&nsucceq;": "\u2AB0\u0338",
  "&nsup;": "\u2285",
  "&nsupE;": "\u2AC6\u0338",
  "&nsupe;": "\u2289",
  "&nsupset;": "\u2283\u20D2",
  "&nsupseteq;": "\u2289",
  "&nsupseteqq;": "\u2AC6\u0338",
  "&ntgl;": "\u2279",
  "&ntilde": "\xF1",
  "&ntilde;": "\xF1",
  "&ntlg;": "\u2278",
  "&ntriangleleft;": "\u22EA",
  "&ntrianglelefteq;": "\u22EC",
  "&ntriangleright;": "\u22EB",
  "&ntrianglerighteq;": "\u22ED",
  "&nu;": "\u03BD",
  "&num;": "#",
  "&numero;": "\u2116",
  "&numsp;": "\u2007",
  "&nvDash;": "\u22AD",
  "&nvHarr;": "\u2904",
  "&nvap;": "\u224D\u20D2",
  "&nvdash;": "\u22AC",
  "&nvge;": "\u2265\u20D2",
  "&nvgt;": ">\u20D2",
  "&nvinfin;": "\u29DE",
  "&nvlArr;": "\u2902",
  "&nvle;": "\u2264\u20D2",
  "&nvlt;": "<\u20D2",
  "&nvltrie;": "\u22B4\u20D2",
  "&nvrArr;": "\u2903",
  "&nvrtrie;": "\u22B5\u20D2",
  "&nvsim;": "\u223C\u20D2",
  "&nwArr;": "\u21D6",
  "&nwarhk;": "\u2923",
  "&nwarr;": "\u2196",
  "&nwarrow;": "\u2196",
  "&nwnear;": "\u2927",
  "&oS;": "\u24C8",
  "&oacute": "\xF3",
  "&oacute;": "\xF3",
  "&oast;": "\u229B",
  "&ocir;": "\u229A",
  "&ocirc": "\xF4",
  "&ocirc;": "\xF4",
  "&ocy;": "\u043E",
  "&odash;": "\u229D",
  "&odblac;": "\u0151",
  "&odiv;": "\u2A38",
  "&odot;": "\u2299",
  "&odsold;": "\u29BC",
  "&oelig;": "\u0153",
  "&ofcir;": "\u29BF",
  "&ofr;": "\u{1D52C}",
  "&ogon;": "\u02DB",
  "&ograve": "\xF2",
  "&ograve;": "\xF2",
  "&ogt;": "\u29C1",
  "&ohbar;": "\u29B5",
  "&ohm;": "\u03A9",
  "&oint;": "\u222E",
  "&olarr;": "\u21BA",
  "&olcir;": "\u29BE",
  "&olcross;": "\u29BB",
  "&oline;": "\u203E",
  "&olt;": "\u29C0",
  "&omacr;": "\u014D",
  "&omega;": "\u03C9",
  "&omicron;": "\u03BF",
  "&omid;": "\u29B6",
  "&ominus;": "\u2296",
  "&oopf;": "\u{1D560}",
  "&opar;": "\u29B7",
  "&operp;": "\u29B9",
  "&oplus;": "\u2295",
  "&or;": "\u2228",
  "&orarr;": "\u21BB",
  "&ord;": "\u2A5D",
  "&order;": "\u2134",
  "&orderof;": "\u2134",
  "&ordf": "\xAA",
  "&ordf;": "\xAA",
  "&ordm": "\xBA",
  "&ordm;": "\xBA",
  "&origof;": "\u22B6",
  "&oror;": "\u2A56",
  "&orslope;": "\u2A57",
  "&orv;": "\u2A5B",
  "&oscr;": "\u2134",
  "&oslash": "\xF8",
  "&oslash;": "\xF8",
  "&osol;": "\u2298",
  "&otilde": "\xF5",
  "&otilde;": "\xF5",
  "&otimes;": "\u2297",
  "&otimesas;": "\u2A36",
  "&ouml": "\xF6",
  "&ouml;": "\xF6",
  "&ovbar;": "\u233D",
  "&par;": "\u2225",
  "&para": "\xB6",
  "&para;": "\xB6",
  "&parallel;": "\u2225",
  "&parsim;": "\u2AF3",
  "&parsl;": "\u2AFD",
  "&part;": "\u2202",
  "&pcy;": "\u043F",
  "&percnt;": "%",
  "&period;": ".",
  "&permil;": "\u2030",
  "&perp;": "\u22A5",
  "&pertenk;": "\u2031",
  "&pfr;": "\u{1D52D}",
  "&phi;": "\u03C6",
  "&phiv;": "\u03D5",
  "&phmmat;": "\u2133",
  "&phone;": "\u260E",
  "&pi;": "\u03C0",
  "&pitchfork;": "\u22D4",
  "&piv;": "\u03D6",
  "&planck;": "\u210F",
  "&planckh;": "\u210E",
  "&plankv;": "\u210F",
  "&plus;": "+",
  "&plusacir;": "\u2A23",
  "&plusb;": "\u229E",
  "&pluscir;": "\u2A22",
  "&plusdo;": "\u2214",
  "&plusdu;": "\u2A25",
  "&pluse;": "\u2A72",
  "&plusmn": "\xB1",
  "&plusmn;": "\xB1",
  "&plussim;": "\u2A26",
  "&plustwo;": "\u2A27",
  "&pm;": "\xB1",
  "&pointint;": "\u2A15",
  "&popf;": "\u{1D561}",
  "&pound": "\xA3",
  "&pound;": "\xA3",
  "&pr;": "\u227A",
  "&prE;": "\u2AB3",
  "&prap;": "\u2AB7",
  "&prcue;": "\u227C",
  "&pre;": "\u2AAF",
  "&prec;": "\u227A",
  "&precapprox;": "\u2AB7",
  "&preccurlyeq;": "\u227C",
  "&preceq;": "\u2AAF",
  "&precnapprox;": "\u2AB9",
  "&precneqq;": "\u2AB5",
  "&precnsim;": "\u22E8",
  "&precsim;": "\u227E",
  "&prime;": "\u2032",
  "&primes;": "\u2119",
  "&prnE;": "\u2AB5",
  "&prnap;": "\u2AB9",
  "&prnsim;": "\u22E8",
  "&prod;": "\u220F",
  "&profalar;": "\u232E",
  "&profline;": "\u2312",
  "&profsurf;": "\u2313",
  "&prop;": "\u221D",
  "&propto;": "\u221D",
  "&prsim;": "\u227E",
  "&prurel;": "\u22B0",
  "&pscr;": "\u{1D4C5}",
  "&psi;": "\u03C8",
  "&puncsp;": "\u2008",
  "&qfr;": "\u{1D52E}",
  "&qint;": "\u2A0C",
  "&qopf;": "\u{1D562}",
  "&qprime;": "\u2057",
  "&qscr;": "\u{1D4C6}",
  "&quaternions;": "\u210D",
  "&quatint;": "\u2A16",
  "&quest;": "?",
  "&questeq;": "\u225F",
  "&quot": '"',
  "&quot;": '"',
  "&rAarr;": "\u21DB",
  "&rArr;": "\u21D2",
  "&rAtail;": "\u291C",
  "&rBarr;": "\u290F",
  "&rHar;": "\u2964",
  "&race;": "\u223D\u0331",
  "&racute;": "\u0155",
  "&radic;": "\u221A",
  "&raemptyv;": "\u29B3",
  "&rang;": "\u27E9",
  "&rangd;": "\u2992",
  "&range;": "\u29A5",
  "&rangle;": "\u27E9",
  "&raquo": "\xBB",
  "&raquo;": "\xBB",
  "&rarr;": "\u2192",
  "&rarrap;": "\u2975",
  "&rarrb;": "\u21E5",
  "&rarrbfs;": "\u2920",
  "&rarrc;": "\u2933",
  "&rarrfs;": "\u291E",
  "&rarrhk;": "\u21AA",
  "&rarrlp;": "\u21AC",
  "&rarrpl;": "\u2945",
  "&rarrsim;": "\u2974",
  "&rarrtl;": "\u21A3",
  "&rarrw;": "\u219D",
  "&ratail;": "\u291A",
  "&ratio;": "\u2236",
  "&rationals;": "\u211A",
  "&rbarr;": "\u290D",
  "&rbbrk;": "\u2773",
  "&rbrace;": "}",
  "&rbrack;": "]",
  "&rbrke;": "\u298C",
  "&rbrksld;": "\u298E",
  "&rbrkslu;": "\u2990",
  "&rcaron;": "\u0159",
  "&rcedil;": "\u0157",
  "&rceil;": "\u2309",
  "&rcub;": "}",
  "&rcy;": "\u0440",
  "&rdca;": "\u2937",
  "&rdldhar;": "\u2969",
  "&rdquo;": "\u201D",
  "&rdquor;": "\u201D",
  "&rdsh;": "\u21B3",
  "&real;": "\u211C",
  "&realine;": "\u211B",
  "&realpart;": "\u211C",
  "&reals;": "\u211D",
  "&rect;": "\u25AD",
  "&reg": "\xAE",
  "&reg;": "\xAE",
  "&rfisht;": "\u297D",
  "&rfloor;": "\u230B",
  "&rfr;": "\u{1D52F}",
  "&rhard;": "\u21C1",
  "&rharu;": "\u21C0",
  "&rharul;": "\u296C",
  "&rho;": "\u03C1",
  "&rhov;": "\u03F1",
  "&rightarrow;": "\u2192",
  "&rightarrowtail;": "\u21A3",
  "&rightharpoondown;": "\u21C1",
  "&rightharpoonup;": "\u21C0",
  "&rightleftarrows;": "\u21C4",
  "&rightleftharpoons;": "\u21CC",
  "&rightrightarrows;": "\u21C9",
  "&rightsquigarrow;": "\u219D",
  "&rightthreetimes;": "\u22CC",
  "&ring;": "\u02DA",
  "&risingdotseq;": "\u2253",
  "&rlarr;": "\u21C4",
  "&rlhar;": "\u21CC",
  "&rlm;": "\u200F",
  "&rmoust;": "\u23B1",
  "&rmoustache;": "\u23B1",
  "&rnmid;": "\u2AEE",
  "&roang;": "\u27ED",
  "&roarr;": "\u21FE",
  "&robrk;": "\u27E7",
  "&ropar;": "\u2986",
  "&ropf;": "\u{1D563}",
  "&roplus;": "\u2A2E",
  "&rotimes;": "\u2A35",
  "&rpar;": ")",
  "&rpargt;": "\u2994",
  "&rppolint;": "\u2A12",
  "&rrarr;": "\u21C9",
  "&rsaquo;": "\u203A",
  "&rscr;": "\u{1D4C7}",
  "&rsh;": "\u21B1",
  "&rsqb;": "]",
  "&rsquo;": "\u2019",
  "&rsquor;": "\u2019",
  "&rthree;": "\u22CC",
  "&rtimes;": "\u22CA",
  "&rtri;": "\u25B9",
  "&rtrie;": "\u22B5",
  "&rtrif;": "\u25B8",
  "&rtriltri;": "\u29CE",
  "&ruluhar;": "\u2968",
  "&rx;": "\u211E",
  "&sacute;": "\u015B",
  "&sbquo;": "\u201A",
  "&sc;": "\u227B",
  "&scE;": "\u2AB4",
  "&scap;": "\u2AB8",
  "&scaron;": "\u0161",
  "&sccue;": "\u227D",
  "&sce;": "\u2AB0",
  "&scedil;": "\u015F",
  "&scirc;": "\u015D",
  "&scnE;": "\u2AB6",
  "&scnap;": "\u2ABA",
  "&scnsim;": "\u22E9",
  "&scpolint;": "\u2A13",
  "&scsim;": "\u227F",
  "&scy;": "\u0441",
  "&sdot;": "\u22C5",
  "&sdotb;": "\u22A1",
  "&sdote;": "\u2A66",
  "&seArr;": "\u21D8",
  "&searhk;": "\u2925",
  "&searr;": "\u2198",
  "&searrow;": "\u2198",
  "&sect": "\xA7",
  "&sect;": "\xA7",
  "&semi;": ";",
  "&seswar;": "\u2929",
  "&setminus;": "\u2216",
  "&setmn;": "\u2216",
  "&sext;": "\u2736",
  "&sfr;": "\u{1D530}",
  "&sfrown;": "\u2322",
  "&sharp;": "\u266F",
  "&shchcy;": "\u0449",
  "&shcy;": "\u0448",
  "&shortmid;": "\u2223",
  "&shortparallel;": "\u2225",
  "&shy": "\xAD",
  "&shy;": "\xAD",
  "&sigma;": "\u03C3",
  "&sigmaf;": "\u03C2",
  "&sigmav;": "\u03C2",
  "&sim;": "\u223C",
  "&simdot;": "\u2A6A",
  "&sime;": "\u2243",
  "&simeq;": "\u2243",
  "&simg;": "\u2A9E",
  "&simgE;": "\u2AA0",
  "&siml;": "\u2A9D",
  "&simlE;": "\u2A9F",
  "&simne;": "\u2246",
  "&simplus;": "\u2A24",
  "&simrarr;": "\u2972",
  "&slarr;": "\u2190",
  "&smallsetminus;": "\u2216",
  "&smashp;": "\u2A33",
  "&smeparsl;": "\u29E4",
  "&smid;": "\u2223",
  "&smile;": "\u2323",
  "&smt;": "\u2AAA",
  "&smte;": "\u2AAC",
  "&smtes;": "\u2AAC\uFE00",
  "&softcy;": "\u044C",
  "&sol;": "/",
  "&solb;": "\u29C4",
  "&solbar;": "\u233F",
  "&sopf;": "\u{1D564}",
  "&spades;": "\u2660",
  "&spadesuit;": "\u2660",
  "&spar;": "\u2225",
  "&sqcap;": "\u2293",
  "&sqcaps;": "\u2293\uFE00",
  "&sqcup;": "\u2294",
  "&sqcups;": "\u2294\uFE00",
  "&sqsub;": "\u228F",
  "&sqsube;": "\u2291",
  "&sqsubset;": "\u228F",
  "&sqsubseteq;": "\u2291",
  "&sqsup;": "\u2290",
  "&sqsupe;": "\u2292",
  "&sqsupset;": "\u2290",
  "&sqsupseteq;": "\u2292",
  "&squ;": "\u25A1",
  "&square;": "\u25A1",
  "&squarf;": "\u25AA",
  "&squf;": "\u25AA",
  "&srarr;": "\u2192",
  "&sscr;": "\u{1D4C8}",
  "&ssetmn;": "\u2216",
  "&ssmile;": "\u2323",
  "&sstarf;": "\u22C6",
  "&star;": "\u2606",
  "&starf;": "\u2605",
  "&straightepsilon;": "\u03F5",
  "&straightphi;": "\u03D5",
  "&strns;": "\xAF",
  "&sub;": "\u2282",
  "&subE;": "\u2AC5",
  "&subdot;": "\u2ABD",
  "&sube;": "\u2286",
  "&subedot;": "\u2AC3",
  "&submult;": "\u2AC1",
  "&subnE;": "\u2ACB",
  "&subne;": "\u228A",
  "&subplus;": "\u2ABF",
  "&subrarr;": "\u2979",
  "&subset;": "\u2282",
  "&subseteq;": "\u2286",
  "&subseteqq;": "\u2AC5",
  "&subsetneq;": "\u228A",
  "&subsetneqq;": "\u2ACB",
  "&subsim;": "\u2AC7",
  "&subsub;": "\u2AD5",
  "&subsup;": "\u2AD3",
  "&succ;": "\u227B",
  "&succapprox;": "\u2AB8",
  "&succcurlyeq;": "\u227D",
  "&succeq;": "\u2AB0",
  "&succnapprox;": "\u2ABA",
  "&succneqq;": "\u2AB6",
  "&succnsim;": "\u22E9",
  "&succsim;": "\u227F",
  "&sum;": "\u2211",
  "&sung;": "\u266A",
  "&sup1": "\xB9",
  "&sup1;": "\xB9",
  "&sup2": "\xB2",
  "&sup2;": "\xB2",
  "&sup3": "\xB3",
  "&sup3;": "\xB3",
  "&sup;": "\u2283",
  "&supE;": "\u2AC6",
  "&supdot;": "\u2ABE",
  "&supdsub;": "\u2AD8",
  "&supe;": "\u2287",
  "&supedot;": "\u2AC4",
  "&suphsol;": "\u27C9",
  "&suphsub;": "\u2AD7",
  "&suplarr;": "\u297B",
  "&supmult;": "\u2AC2",
  "&supnE;": "\u2ACC",
  "&supne;": "\u228B",
  "&supplus;": "\u2AC0",
  "&supset;": "\u2283",
  "&supseteq;": "\u2287",
  "&supseteqq;": "\u2AC6",
  "&supsetneq;": "\u228B",
  "&supsetneqq;": "\u2ACC",
  "&supsim;": "\u2AC8",
  "&supsub;": "\u2AD4",
  "&supsup;": "\u2AD6",
  "&swArr;": "\u21D9",
  "&swarhk;": "\u2926",
  "&swarr;": "\u2199",
  "&swarrow;": "\u2199",
  "&swnwar;": "\u292A",
  "&szlig": "\xDF",
  "&szlig;": "\xDF",
  "&target;": "\u2316",
  "&tau;": "\u03C4",
  "&tbrk;": "\u23B4",
  "&tcaron;": "\u0165",
  "&tcedil;": "\u0163",
  "&tcy;": "\u0442",
  "&tdot;": "\u20DB",
  "&telrec;": "\u2315",
  "&tfr;": "\u{1D531}",
  "&there4;": "\u2234",
  "&therefore;": "\u2234",
  "&theta;": "\u03B8",
  "&thetasym;": "\u03D1",
  "&thetav;": "\u03D1",
  "&thickapprox;": "\u2248",
  "&thicksim;": "\u223C",
  "&thinsp;": "\u2009",
  "&thkap;": "\u2248",
  "&thksim;": "\u223C",
  "&thorn": "\xFE",
  "&thorn;": "\xFE",
  "&tilde;": "\u02DC",
  "&times": "\xD7",
  "&times;": "\xD7",
  "&timesb;": "\u22A0",
  "&timesbar;": "\u2A31",
  "&timesd;": "\u2A30",
  "&tint;": "\u222D",
  "&toea;": "\u2928",
  "&top;": "\u22A4",
  "&topbot;": "\u2336",
  "&topcir;": "\u2AF1",
  "&topf;": "\u{1D565}",
  "&topfork;": "\u2ADA",
  "&tosa;": "\u2929",
  "&tprime;": "\u2034",
  "&trade;": "\u2122",
  "&triangle;": "\u25B5",
  "&triangledown;": "\u25BF",
  "&triangleleft;": "\u25C3",
  "&trianglelefteq;": "\u22B4",
  "&triangleq;": "\u225C",
  "&triangleright;": "\u25B9",
  "&trianglerighteq;": "\u22B5",
  "&tridot;": "\u25EC",
  "&trie;": "\u225C",
  "&triminus;": "\u2A3A",
  "&triplus;": "\u2A39",
  "&trisb;": "\u29CD",
  "&tritime;": "\u2A3B",
  "&trpezium;": "\u23E2",
  "&tscr;": "\u{1D4C9}",
  "&tscy;": "\u0446",
  "&tshcy;": "\u045B",
  "&tstrok;": "\u0167",
  "&twixt;": "\u226C",
  "&twoheadleftarrow;": "\u219E",
  "&twoheadrightarrow;": "\u21A0",
  "&uArr;": "\u21D1",
  "&uHar;": "\u2963",
  "&uacute": "\xFA",
  "&uacute;": "\xFA",
  "&uarr;": "\u2191",
  "&ubrcy;": "\u045E",
  "&ubreve;": "\u016D",
  "&ucirc": "\xFB",
  "&ucirc;": "\xFB",
  "&ucy;": "\u0443",
  "&udarr;": "\u21C5",
  "&udblac;": "\u0171",
  "&udhar;": "\u296E",
  "&ufisht;": "\u297E",
  "&ufr;": "\u{1D532}",
  "&ugrave": "\xF9",
  "&ugrave;": "\xF9",
  "&uharl;": "\u21BF",
  "&uharr;": "\u21BE",
  "&uhblk;": "\u2580",
  "&ulcorn;": "\u231C",
  "&ulcorner;": "\u231C",
  "&ulcrop;": "\u230F",
  "&ultri;": "\u25F8",
  "&umacr;": "\u016B",
  "&uml": "\xA8",
  "&uml;": "\xA8",
  "&uogon;": "\u0173",
  "&uopf;": "\u{1D566}",
  "&uparrow;": "\u2191",
  "&updownarrow;": "\u2195",
  "&upharpoonleft;": "\u21BF",
  "&upharpoonright;": "\u21BE",
  "&uplus;": "\u228E",
  "&upsi;": "\u03C5",
  "&upsih;": "\u03D2",
  "&upsilon;": "\u03C5",
  "&upuparrows;": "\u21C8",
  "&urcorn;": "\u231D",
  "&urcorner;": "\u231D",
  "&urcrop;": "\u230E",
  "&uring;": "\u016F",
  "&urtri;": "\u25F9",
  "&uscr;": "\u{1D4CA}",
  "&utdot;": "\u22F0",
  "&utilde;": "\u0169",
  "&utri;": "\u25B5",
  "&utrif;": "\u25B4",
  "&uuarr;": "\u21C8",
  "&uuml": "\xFC",
  "&uuml;": "\xFC",
  "&uwangle;": "\u29A7",
  "&vArr;": "\u21D5",
  "&vBar;": "\u2AE8",
  "&vBarv;": "\u2AE9",
  "&vDash;": "\u22A8",
  "&vangrt;": "\u299C",
  "&varepsilon;": "\u03F5",
  "&varkappa;": "\u03F0",
  "&varnothing;": "\u2205",
  "&varphi;": "\u03D5",
  "&varpi;": "\u03D6",
  "&varpropto;": "\u221D",
  "&varr;": "\u2195",
  "&varrho;": "\u03F1",
  "&varsigma;": "\u03C2",
  "&varsubsetneq;": "\u228A\uFE00",
  "&varsubsetneqq;": "\u2ACB\uFE00",
  "&varsupsetneq;": "\u228B\uFE00",
  "&varsupsetneqq;": "\u2ACC\uFE00",
  "&vartheta;": "\u03D1",
  "&vartriangleleft;": "\u22B2",
  "&vartriangleright;": "\u22B3",
  "&vcy;": "\u0432",
  "&vdash;": "\u22A2",
  "&vee;": "\u2228",
  "&veebar;": "\u22BB",
  "&veeeq;": "\u225A",
  "&vellip;": "\u22EE",
  "&verbar;": "|",
  "&vert;": "|",
  "&vfr;": "\u{1D533}",
  "&vltri;": "\u22B2",
  "&vnsub;": "\u2282\u20D2",
  "&vnsup;": "\u2283\u20D2",
  "&vopf;": "\u{1D567}",
  "&vprop;": "\u221D",
  "&vrtri;": "\u22B3",
  "&vscr;": "\u{1D4CB}",
  "&vsubnE;": "\u2ACB\uFE00",
  "&vsubne;": "\u228A\uFE00",
  "&vsupnE;": "\u2ACC\uFE00",
  "&vsupne;": "\u228B\uFE00",
  "&vzigzag;": "\u299A",
  "&wcirc;": "\u0175",
  "&wedbar;": "\u2A5F",
  "&wedge;": "\u2227",
  "&wedgeq;": "\u2259",
  "&weierp;": "\u2118",
  "&wfr;": "\u{1D534}",
  "&wopf;": "\u{1D568}",
  "&wp;": "\u2118",
  "&wr;": "\u2240",
  "&wreath;": "\u2240",
  "&wscr;": "\u{1D4CC}",
  "&xcap;": "\u22C2",
  "&xcirc;": "\u25EF",
  "&xcup;": "\u22C3",
  "&xdtri;": "\u25BD",
  "&xfr;": "\u{1D535}",
  "&xhArr;": "\u27FA",
  "&xharr;": "\u27F7",
  "&xi;": "\u03BE",
  "&xlArr;": "\u27F8",
  "&xlarr;": "\u27F5",
  "&xmap;": "\u27FC",
  "&xnis;": "\u22FB",
  "&xodot;": "\u2A00",
  "&xopf;": "\u{1D569}",
  "&xoplus;": "\u2A01",
  "&xotime;": "\u2A02",
  "&xrArr;": "\u27F9",
  "&xrarr;": "\u27F6",
  "&xscr;": "\u{1D4CD}",
  "&xsqcup;": "\u2A06",
  "&xuplus;": "\u2A04",
  "&xutri;": "\u25B3",
  "&xvee;": "\u22C1",
  "&xwedge;": "\u22C0",
  "&yacute": "\xFD",
  "&yacute;": "\xFD",
  "&yacy;": "\u044F",
  "&ycirc;": "\u0177",
  "&ycy;": "\u044B",
  "&yen": "\xA5",
  "&yen;": "\xA5",
  "&yfr;": "\u{1D536}",
  "&yicy;": "\u0457",
  "&yopf;": "\u{1D56A}",
  "&yscr;": "\u{1D4CE}",
  "&yucy;": "\u044E",
  "&yuml": "\xFF",
  "&yuml;": "\xFF",
  "&zacute;": "\u017A",
  "&zcaron;": "\u017E",
  "&zcy;": "\u0437",
  "&zdot;": "\u017C",
  "&zeetrf;": "\u2128",
  "&zeta;": "\u03B6",
  "&zfr;": "\u{1D537}",
  "&zhcy;": "\u0436",
  "&zigrarr;": "\u21DD",
  "&zopf;": "\u{1D56B}",
  "&zscr;": "\u{1D4CF}",
  "&zwj;": "\u200D",
  "&zwnj;": "\u200C"
}, html_entities_default = htmlEntities;

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/text-format.js
function decodeHTMLEntities(str) {
  return str.replace(/&(#\d+|#x[a-f0-9]+|[a-z]+\d*);?/gi, (match, entity) => {
    if (typeof html_entities_default[match] == "string")
      return html_entities_default[match];
    if (entity.charAt(0) !== "#" || match.charAt(match.length - 1) !== ";")
      return match;
    let codePoint;
    entity.charAt(1) === "x" ? codePoint = parseInt(entity.substr(2), 16) : codePoint = parseInt(entity.substr(1), 10);
    var output = "";
    return codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111 ? "\uFFFD" : (codePoint > 65535 && (codePoint -= 65536, output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), output += String.fromCharCode(codePoint), output);
  });
}
function escapeHtml(str) {
  return str.trim().replace(/[<>"'?&]/g, (c) => {
    let hex3 = c.charCodeAt(0).toString(16);
    return hex3.length < 2 && (hex3 = "0" + hex3), "&#x" + hex3.toUpperCase() + ";";
  });
}
function textToHtml(str) {
  return "<div>" + escapeHtml(str).replace(/\n/g, "<br />") + "</div>";
}
function htmlToText(str) {
  return str = str.replace(/\r?\n/g, "").replace(/<\!\-\-.*?\-\->/gi, " ").replace(/<br\b[^>]*>/gi, `
`).replace(/<\/?(p|div|table|tr|td|th)\b[^>]*>/gi, `

`).replace(/<script\b[^>]*>.*?<\/script\b[^>]*>/gi, " ").replace(/^.*<body\b[^>]*>/i, "").replace(/^.*<\/head\b[^>]*>/i, "").replace(/^.*<\!doctype\b[^>]*>/i, "").replace(/<\/body\b[^>]*>.*$/i, "").replace(/<\/html\b[^>]*>.*$/i, "").replace(/<a\b[^>]*href\s*=\s*["']?([^\s"']+)[^>]*>/gi, " ($1) ").replace(/<\/?(span|em|i|strong|b|u|a)\b[^>]*>/gi, "").replace(/<li\b[^>]*>[\n\u0001\s]*/gi, "* ").replace(/<hr\b[^>]*>/g, `
-------------
`).replace(/<[^>]*>/g, " ").replace(/\u0001/g, `
`).replace(/[ \t]+/g, " ").replace(/^\s+$/gm, "").replace(/\n\n+/g, `

`).replace(/^\n+/, `
`).replace(/\n+$/, `
`), str = decodeHTMLEntities(str), str;
}
function formatTextAddress(address) {
  return [].concat(address.name || []).concat(address.name ? `<${address.address}>` : address.address).join(" ");
}
function formatTextAddresses(addresses) {
  let parts = [], processAddress = (address, partCounter) => {
    if (partCounter && parts.push(", "), address.group) {
      let groupStart = `${address.name}:`, groupEnd = ";";
      parts.push(groupStart), address.group.forEach(processAddress), parts.push(groupEnd);
    } else
      parts.push(formatTextAddress(address));
  };
  return addresses.forEach(processAddress), parts.join("");
}
function formatHtmlAddress(address) {
  return `<a href="mailto:${escapeHtml(address.address)}" class="postal-email-address">${escapeHtml(address.name || `<${address.address}>`)}</a>`;
}
function formatHtmlAddresses(addresses) {
  let parts = [], processAddress = (address, partCounter) => {
    if (partCounter && parts.push('<span class="postal-email-address-separator">, </span>'), address.group) {
      let groupStart = `<span class="postal-email-address-group">${escapeHtml(address.name)}:</span>`, groupEnd = '<span class="postal-email-address-group">;</span>';
      parts.push(groupStart), address.group.forEach(processAddress), parts.push(groupEnd);
    } else
      parts.push(formatHtmlAddress(address));
  };
  return addresses.forEach(processAddress), parts.join(" ");
}
function foldLines(str, lineLength, afterSpace) {
  str = (str || "").toString(), lineLength = lineLength || 76;
  let pos = 0, len = str.length, result = "", line, match;
  for (; pos < len; ) {
    if (line = str.substr(pos, lineLength), line.length < lineLength) {
      result += line;
      break;
    }
    if (match = line.match(/^[^\n\r]*(\r?\n|\r)/)) {
      line = match[0], result += line, pos += line.length;
      continue;
    } else (match = line.match(/(\s+)[^\s]*$/)) && match[0].length - (afterSpace ? (match[1] || "").length : 0) < line.length ? line = line.substr(0, line.length - (match[0].length - (afterSpace ? (match[1] || "").length : 0))) : (match = str.substr(pos + line.length).match(/^[^\s]+(\s*)/)) && (line = line + match[0].substr(0, match[0].length - (afterSpace ? 0 : (match[1] || "").length)));
    result += line, pos += line.length, pos < len && (result += `\r
`);
  }
  return result;
}
function formatTextHeader(message) {
  let rows = [];
  if (message.from && rows.push({ key: "From", val: formatTextAddress(message.from) }), message.subject && rows.push({ key: "Subject", val: message.subject }), message.date) {
    let dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !1
    }, dateStr = typeof Intl > "u" ? message.date : new Intl.DateTimeFormat("default", dateOptions).format(new Date(message.date));
    rows.push({ key: "Date", val: dateStr });
  }
  message.to && message.to.length && rows.push({ key: "To", val: formatTextAddresses(message.to) }), message.cc && message.cc.length && rows.push({ key: "Cc", val: formatTextAddresses(message.cc) }), message.bcc && message.bcc.length && rows.push({ key: "Bcc", val: formatTextAddresses(message.bcc) });
  let maxKeyLength = rows.map((r) => r.key.length).reduce((acc, cur) => cur > acc ? cur : acc, 0);
  rows = rows.flatMap((row) => {
    let sepLen = maxKeyLength - row.key.length, prefix = `${row.key}: ${" ".repeat(sepLen)}`, emptyPrefix = `${" ".repeat(row.key.length + 1)} ${" ".repeat(sepLen)}`;
    return foldLines(row.val, 80, !0).split(/\r?\n/).map((line) => line.trim()).map((line, i2) => `${i2 ? emptyPrefix : prefix}${line}`);
  });
  let maxLineLength = rows.map((r) => r.length).reduce((acc, cur) => cur > acc ? cur : acc, 0), lineMarker = "-".repeat(maxLineLength);
  return `
${lineMarker}
${rows.join(`
`)}
${lineMarker}
`;
}
function formatHtmlHeader(message) {
  let rows = [];
  if (message.from && rows.push(`<div class="postal-email-header-key">From</div><div class="postal-email-header-value">${formatHtmlAddress(message.from)}</div>`), message.subject && rows.push(
    `<div class="postal-email-header-key">Subject</div><div class="postal-email-header-value postal-email-header-subject">${escapeHtml(
      message.subject
    )}</div>`
  ), message.date) {
    let dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !1
    }, dateStr = typeof Intl > "u" ? message.date : new Intl.DateTimeFormat("default", dateOptions).format(new Date(message.date));
    rows.push(
      `<div class="postal-email-header-key">Date</div><div class="postal-email-header-value postal-email-header-date" data-date="${escapeHtml(
        message.date
      )}">${escapeHtml(dateStr)}</div>`
    );
  }
  return message.to && message.to.length && rows.push(`<div class="postal-email-header-key">To</div><div class="postal-email-header-value">${formatHtmlAddresses(message.to)}</div>`), message.cc && message.cc.length && rows.push(`<div class="postal-email-header-key">Cc</div><div class="postal-email-header-value">${formatHtmlAddresses(message.cc)}</div>`), message.bcc && message.bcc.length && rows.push(`<div class="postal-email-header-key">Bcc</div><div class="postal-email-header-value">${formatHtmlAddresses(message.bcc)}</div>`), `<div class="postal-email-header">${rows.length ? '<div class="postal-email-header-row">' : ""}${rows.join(
    `</div>
<div class="postal-email-header-row">`
  )}${rows.length ? "</div>" : ""}</div>`;
}

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/address-parser.js
function _handleAddress(tokens) {
  let token, isGroup = !1, state = "text", address, addresses = [], data = {
    address: [],
    comment: [],
    group: [],
    text: []
  }, i2, len;
  for (i2 = 0, len = tokens.length; i2 < len; i2++)
    if (token = tokens[i2], token.type === "operator")
      switch (token.value) {
        case "<":
          state = "address";
          break;
        case "(":
          state = "comment";
          break;
        case ":":
          state = "group", isGroup = !0;
          break;
        default:
          state = "text";
      }
    else token.value && (state === "address" && (token.value = token.value.replace(/^[^<]*<\s*/, "")), data[state].push(token.value));
  if (!data.text.length && data.comment.length && (data.text = data.comment, data.comment = []), isGroup)
    data.text = data.text.join(" "), addresses.push({
      name: decodeWords(data.text || address && address.name),
      group: data.group.length ? addressParser(data.group.join(",")) : []
    });
  else {
    if (!data.address.length && data.text.length) {
      for (i2 = data.text.length - 1; i2 >= 0; i2--)
        if (data.text[i2].match(/^[^@\s]+@[^@\s]+$/)) {
          data.address = data.text.splice(i2, 1);
          break;
        }
      let _regexHandler = function(address2) {
        return data.address.length ? address2 : (data.address = [address2.trim()], " ");
      };
      if (!data.address.length)
        for (i2 = data.text.length - 1; i2 >= 0 && (data.text[i2] = data.text[i2].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, _regexHandler).trim(), !data.address.length); i2--)
          ;
    }
    if (!data.text.length && data.comment.length && (data.text = data.comment, data.comment = []), data.address.length > 1 && (data.text = data.text.concat(data.address.splice(1))), data.text = data.text.join(" "), data.address = data.address.join(" "), !data.address && /^=\?[^=]+?=$/.test(data.text.trim())) {
      let parsedSubAddresses = addressParser(decodeWords(data.text));
      if (parsedSubAddresses && parsedSubAddresses.length)
        return parsedSubAddresses;
    }
    if (!data.address && isGroup)
      return [];
    address = {
      address: data.address || data.text || "",
      name: decodeWords(data.text || data.address || "")
    }, address.address === address.name && ((address.address || "").match(/@/) ? address.name = "" : address.address = ""), addresses.push(address);
  }
  return addresses;
}
var Tokenizer = class {
  constructor(str) {
    this.str = (str || "").toString(), this.operatorCurrent = "", this.operatorExpecting = "", this.node = null, this.escaped = !1, this.list = [], this.operators = {
      '"': '"',
      "(": ")",
      "<": ">",
      ",": "",
      ":": ";",
      // Semicolons are not a legal delimiter per the RFC2822 grammar other
      // than for terminating a group, but they are also not valid for any
      // other use in this context.  Given that some mail clients have
      // historically allowed the semicolon as a delimiter equivalent to the
      // comma in their UI, it makes sense to treat them the same as a comma
      // when used outside of a group.
      ";": ""
    };
  }
  /**
   * Tokenizes the original input string
   *
   * @return {Array} An array of operator|text tokens
   */
  tokenize() {
    let chr, list = [];
    for (let i2 = 0, len = this.str.length; i2 < len; i2++)
      chr = this.str.charAt(i2), this.checkChar(chr);
    return this.list.forEach((node) => {
      node.value = (node.value || "").toString().trim(), node.value && list.push(node);
    }), list;
  }
  /**
   * Checks if a character is an operator or text and acts accordingly
   *
   * @param {String} chr Character from the address field
   */
  checkChar(chr) {
    if (!this.escaped) {
      if (chr === this.operatorExpecting) {
        this.node = {
          type: "operator",
          value: chr
        }, this.list.push(this.node), this.node = null, this.operatorExpecting = "", this.escaped = !1;
        return;
      } else if (!this.operatorExpecting && chr in this.operators) {
        this.node = {
          type: "operator",
          value: chr
        }, this.list.push(this.node), this.node = null, this.operatorExpecting = this.operators[chr], this.escaped = !1;
        return;
      } else if (['"', "'"].includes(this.operatorExpecting) && chr === "\\") {
        this.escaped = !0;
        return;
      }
    }
    this.node || (this.node = {
      type: "text",
      value: ""
    }, this.list.push(this.node)), chr === `
` && (chr = " "), (chr.charCodeAt(0) >= 33 || [" ", "	"].includes(chr)) && (this.node.value += chr), this.escaped = !1;
  }
};
function addressParser(str, options) {
  options = options || {};
  let tokens = new Tokenizer(str).tokenize(), addresses = [], address = [], parsedAddresses = [];
  if (tokens.forEach((token) => {
    token.type === "operator" && (token.value === "," || token.value === ";") ? (address.length && addresses.push(address), address = []) : address.push(token);
  }), address.length && addresses.push(address), addresses.forEach((address2) => {
    address2 = _handleAddress(address2), address2.length && (parsedAddresses = parsedAddresses.concat(address2));
  }), options.flatten) {
    let addresses2 = [], walkAddressList = (list) => {
      list.forEach((address2) => {
        if (address2.group)
          return walkAddressList(address2.group);
        addresses2.push(address2);
      });
    };
    return walkAddressList(parsedAddresses), addresses2;
  }
  return parsedAddresses;
}
var address_parser_default = addressParser;

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/base64-encoder.js
function base64ArrayBuffer(arrayBuffer) {
  for (var base643 = "", encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bytes = new Uint8Array(arrayBuffer), byteLength = bytes.byteLength, byteRemainder = byteLength % 3, mainLength = byteLength - byteRemainder, a, b, c, d, chunk, i2 = 0; i2 < mainLength; i2 = i2 + 3)
    chunk = bytes[i2] << 16 | bytes[i2 + 1] << 8 | bytes[i2 + 2], a = (chunk & 16515072) >> 18, b = (chunk & 258048) >> 12, c = (chunk & 4032) >> 6, d = chunk & 63, base643 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  return byteRemainder == 1 ? (chunk = bytes[mainLength], a = (chunk & 252) >> 2, b = (chunk & 3) << 4, base643 += encodings[a] + encodings[b] + "==") : byteRemainder == 2 && (chunk = bytes[mainLength] << 8 | bytes[mainLength + 1], a = (chunk & 64512) >> 10, b = (chunk & 1008) >> 4, c = (chunk & 15) << 2, base643 += encodings[a] + encodings[b] + encodings[c] + "="), base643;
}

// ../../node_modules/.pnpm/postal-mime@2.4.3_patch_hash=44bc62560d3d339b5c0836c18991f42b3b998db144f5ee7101d6758bbe74d3f2/node_modules/postal-mime/src/postal-mime.js
var PostalMime = class _PostalMime {
  static parse(buf, options) {
    return new _PostalMime(options).parse(buf);
  }
  constructor(options) {
    this.options = options || {}, this.root = this.currentNode = new MimeNode({
      postalMime: this
    }), this.boundaries = [], this.textContent = {}, this.attachments = [], this.attachmentEncoding = (this.options.attachmentEncoding || "").toString().replace(/[-_\s]/g, "").trim().toLowerCase() || "arraybuffer", this.started = !1;
  }
  async finalize() {
    await this.root.finalize();
  }
  async processLine(line, isFinal) {
    let boundaries = this.boundaries;
    if (boundaries.length && line.length > 2 && line[0] === 45 && line[1] === 45)
      for (let i2 = boundaries.length - 1; i2 >= 0; i2--) {
        let boundary = boundaries[i2];
        if (line.length !== boundary.value.length + 2 && line.length !== boundary.value.length + 4)
          continue;
        let isTerminator = line.length === boundary.value.length + 4;
        if (isTerminator && (line[line.length - 2] !== 45 || line[line.length - 1] !== 45))
          continue;
        let boudaryMatches = !0;
        for (let i3 = 0; i3 < boundary.value.length; i3++)
          if (line[i3 + 2] !== boundary.value[i3]) {
            boudaryMatches = !1;
            break;
          }
        if (boudaryMatches)
          return isTerminator ? (await boundary.node.finalize(), this.currentNode = boundary.node.parentNode || this.root) : (await boundary.node.finalizeChildNodes(), this.currentNode = new MimeNode({
            postalMime: this,
            parentNode: boundary.node
          })), isFinal ? this.finalize() : void 0;
      }
    if (this.currentNode.feed(line), isFinal)
      return this.finalize();
  }
  readLine() {
    let startPos = this.readPos, endPos = this.readPos, res = () => ({
      bytes: new Uint8Array(this.buf, startPos, endPos - startPos),
      done: this.readPos >= this.av.length
    });
    for (; this.readPos < this.av.length; ) {
      let c = this.av[this.readPos++];
      if (c !== 13 && c !== 10 && (endPos = this.readPos), c === 10)
        return res();
    }
    return res();
  }
  async processNodeTree() {
    let textContent = {}, textTypes = /* @__PURE__ */ new Set(), textMap = this.textMap = /* @__PURE__ */ new Map(), forceRfc822Attachments = this.forceRfc822Attachments(), walk = async (node, alternative, related) => {
      if (alternative = alternative || !1, related = related || !1, node.contentType.multipart)
        node.contentType.multipart === "alternative" ? alternative = node : node.contentType.multipart === "related" && (related = node);
      else if (this.isInlineMessageRfc822(node) && !forceRfc822Attachments) {
        let subParser = new _PostalMime();
        node.subMessage = await subParser.parse(node.content), textMap.has(node) || textMap.set(node, {});
        let textEntry = textMap.get(node);
        (node.subMessage.text || !node.subMessage.html) && (textEntry.plain = textEntry.plain || [], textEntry.plain.push({ type: "subMessage", value: node.subMessage }), textTypes.add("plain")), node.subMessage.html && (textEntry.html = textEntry.html || [], textEntry.html.push({ type: "subMessage", value: node.subMessage }), textTypes.add("html")), subParser.textMap && subParser.textMap.forEach((subTextEntry, subTextNode) => {
          textMap.set(subTextNode, subTextEntry);
        });
        for (let attachment of node.subMessage.attachments || [])
          this.attachments.push(attachment);
      } else if (this.isInlineTextNode(node)) {
        let textType = node.contentType.parsed.value.substr(node.contentType.parsed.value.indexOf("/") + 1), selectorNode = alternative || node;
        textMap.has(selectorNode) || textMap.set(selectorNode, {});
        let textEntry = textMap.get(selectorNode);
        textEntry[textType] = textEntry[textType] || [], textEntry[textType].push({ type: "text", value: node.getTextContent() }), textTypes.add(textType);
      } else if (node.content) {
        let filename = node.contentDisposition.parsed.params.filename || node.contentType.parsed.params.name || null, attachment = {
          filename: filename ? decodeWords(filename) : null,
          mimeType: node.contentType.parsed.value,
          disposition: node.contentDisposition.parsed.value || null
        };
        switch (related && node.contentId && (attachment.related = !0), node.contentDescription && (attachment.description = node.contentDescription), node.contentId && (attachment.contentId = node.contentId), node.contentType.parsed.value) {
          // Special handling for calendar events
          case "text/calendar":
          case "application/ics": {
            node.contentType.parsed.params.method && (attachment.method = node.contentType.parsed.params.method.toString().toUpperCase().trim());
            let decodedText = node.getTextContent().replace(/\r?\n/g, `
`).replace(/\n*$/, `
`);
            attachment.content = textEncoder.encode(decodedText);
            break;
          }
          // Regular attachments
          default:
            attachment.content = node.content;
        }
        this.attachments.push(attachment);
      }
      for (let childNode of node.childNodes)
        await walk(childNode, alternative, related);
    };
    await walk(this.root, !1, []), textMap.forEach((mapEntry) => {
      textTypes.forEach((textType) => {
        if (textContent[textType] || (textContent[textType] = []), mapEntry[textType])
          mapEntry[textType].forEach((textEntry) => {
            switch (textEntry.type) {
              case "text":
                textContent[textType].push(textEntry.value);
                break;
              case "subMessage":
                switch (textType) {
                  case "html":
                    textContent[textType].push(formatHtmlHeader(textEntry.value));
                    break;
                  case "plain":
                    textContent[textType].push(formatTextHeader(textEntry.value));
                    break;
                }
                break;
            }
          });
        else {
          let alternativeType;
          switch (textType) {
            case "html":
              alternativeType = "plain";
              break;
            case "plain":
              alternativeType = "html";
              break;
          }
          (mapEntry[alternativeType] || []).forEach((textEntry) => {
            switch (textEntry.type) {
              case "text":
                switch (textType) {
                  case "html":
                    textContent[textType].push(textToHtml(textEntry.value));
                    break;
                  case "plain":
                    textContent[textType].push(htmlToText(textEntry.value));
                    break;
                }
                break;
              case "subMessage":
                switch (textType) {
                  case "html":
                    textContent[textType].push(formatHtmlHeader(textEntry.value));
                    break;
                  case "plain":
                    textContent[textType].push(formatTextHeader(textEntry.value));
                    break;
                }
                break;
            }
          });
        }
      });
    }), Object.keys(textContent).forEach((textType) => {
      textContent[textType] = textContent[textType].join(`
`);
    }), this.textContent = textContent;
  }
  isInlineTextNode(node) {
    if (node.contentDisposition.parsed.value === "attachment")
      return !1;
    switch (node.contentType.parsed.value) {
      case "text/html":
      case "text/plain":
        return !0;
      default:
        return !1;
    }
  }
  isInlineMessageRfc822(node) {
    return node.contentType.parsed.value !== "message/rfc822" ? !1 : (node.contentDisposition.parsed.value || (this.options.rfc822Attachments ? "attachment" : "inline")) === "inline";
  }
  // Check if this is a specially crafted report email where message/rfc822 content should not be inlined
  forceRfc822Attachments() {
    if (this.options.forceRfc822Attachments)
      return !0;
    let forceRfc822Attachments = !1, walk = (node) => {
      node.contentType.multipart || ["message/delivery-status", "message/feedback-report"].includes(node.contentType.parsed.value) && (forceRfc822Attachments = !0);
      for (let childNode of node.childNodes)
        walk(childNode);
    };
    return walk(this.root), forceRfc822Attachments;
  }
  async resolveStream(stream) {
    let chunkLen = 0, chunks = [], reader = stream.getReader();
    for (; ; ) {
      let { done, value } = await reader.read();
      if (done)
        break;
      chunks.push(value), chunkLen += value.length;
    }
    let result = new Uint8Array(chunkLen), chunkPointer = 0;
    for (let chunk of chunks)
      result.set(chunk, chunkPointer), chunkPointer += chunk.length;
    return result;
  }
  async parse(buf) {
    if (this.started)
      throw new Error("Can not reuse parser, create a new PostalMime object");
    for (this.started = !0, buf && typeof buf.getReader == "function" && (buf = await this.resolveStream(buf)), buf = buf || new ArrayBuffer(0), typeof buf == "string" && (buf = textEncoder.encode(buf)), (buf instanceof Blob || Object.prototype.toString.call(buf) === "[object Blob]") && (buf = await blobToArrayBuffer(buf)), buf.buffer instanceof ArrayBuffer && (buf = new Uint8Array(buf).buffer), this.buf = buf, this.av = new Uint8Array(buf), this.readPos = 0; this.readPos < this.av.length; ) {
      let line = this.readLine();
      await this.processLine(line.bytes, line.done);
    }
    await this.processNodeTree();
    let message = {
      headers: this.root.headers.map((entry) => ({ key: entry.key, value: entry.value })).reverse()
    };
    for (let key of ["from", "sender"]) {
      let addressHeader = this.root.headers.find((line) => line.key === key);
      if (addressHeader && addressHeader.value) {
        let addresses = address_parser_default(addressHeader.value);
        addresses && addresses.length && (message[key] = addresses[0]);
      }
    }
    for (let key of ["delivered-to", "return-path"]) {
      let addressHeader = this.root.headers.find((line) => line.key === key);
      if (addressHeader && addressHeader.value) {
        let addresses = address_parser_default(addressHeader.value);
        if (addresses && addresses.length && addresses[0].address) {
          let camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
          message[camelKey] = addresses[0].address;
        }
      }
    }
    for (let key of ["to", "cc", "bcc", "reply-to"]) {
      let addressHeaders = this.root.headers.filter((line) => line.key === key), addresses = [];
      if (addressHeaders.filter((entry) => entry && entry.value).map((entry) => address_parser_default(entry.value)).forEach((parsed) => addresses = addresses.concat(parsed || [])), addresses && addresses.length) {
        let camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
        message[camelKey] = addresses;
      }
    }
    for (let key of ["subject", "message-id", "in-reply-to", "references"]) {
      let header = this.root.headers.find((line) => line.key === key);
      if (header && header.value) {
        let camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
        message[camelKey] = decodeWords(header.value);
      }
    }
    let dateHeader = this.root.headers.find((line) => line.key === "date");
    if (dateHeader) {
      let date5 = new Date(dateHeader.value);
      !date5 || date5.toString() === "Invalid Date" ? date5 = dateHeader.value : date5 = date5.toISOString(), message.date = date5;
    }
    switch (this.textContent?.html && (message.html = this.textContent.html), this.textContent?.plain && (message.text = this.textContent.plain), message.attachments = this.attachments, this.attachmentEncoding) {
      case "arraybuffer":
        break;
      case "base64":
        for (let attachment of message.attachments || [])
          attachment?.content && (attachment.content = base64ArrayBuffer(attachment.content), attachment.encoding = "base64");
        break;
      case "utf8":
        let attachmentDecoder = new TextDecoder("utf8");
        for (let attachment of message.attachments || [])
          attachment?.content && (attachment.content = attachmentDecoder.decode(attachment.content), attachment.encoding = "utf8");
        break;
      default:
        throw new Error("Unknwon attachment encoding");
    }
    return message;
  }
};

// src/workers/core/email.ts
import assert2 from "node:assert";

// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY = !0;
typeof process < "u" && ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {}, isTTY = process.stdout && process.stdout.isTTY);
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g"), open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    return !$.enabled || txt == null ? txt : open + (~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0), bold = init(1, 22), dim = init(2, 22), italic = init(3, 23), underline = init(4, 24), inverse = init(7, 27), hidden = init(8, 28), strikethrough = init(9, 29), black = init(30, 39), red = init(31, 39), green = init(32, 39), yellow = init(33, 39), blue = init(34, 39), magenta = init(35, 39), cyan = init(36, 39), white = init(37, 39), gray = init(90, 39), grey = init(90, 39), bgBlack = init(40, 49), bgRed = init(41, 49), bgGreen = init(42, 49), bgYellow = init(43, 49), bgBlue = init(44, 49), bgMagenta = init(45, 49), bgCyan = init(46, 49), bgWhite = init(47, 49);

// src/workers/core/email.ts
import { LogLevel as LogLevel2 } from "miniflare:shared";

// src/workers/email/capture.ts
var RAW_EMAIL = "EmailMessage::raw";
var MAX_EMAIL_BODY_BYTES = Math.floor(499744) * 3, encoder = new TextEncoder();
function bytesToBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.byteLength; offset += 32768)
    binary += String.fromCharCode(
      ...bytes.subarray(offset, offset + 32768)
    );
  return btoa(binary);
}
function base64ToBytes(encoded) {
  let binary = atob(encoded), bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++)
    bytes[index] = binary.charCodeAt(index);
  return bytes;
}
function stripEmailHeader(raw2, headerName) {
  let removals = [], offset = 0, headerStart = 0, removeHeader = !1;
  for (; offset < raw2.byteLength; ) {
    let line = findHeaderLine(raw2, offset);
    if (line.contentEnd === offset) {
      removeHeader && (removals.push({ start: headerStart, end: offset }), removeHeader = !1);
      break;
    }
    raw2[offset] === 32 || raw2[offset] === 9 || (removeHeader && removals.push({ start: headerStart, end: offset }), headerStart = offset, removeHeader = headerNameMatches(
      raw2,
      offset,
      line.contentEnd,
      headerName
    )), offset = line.end;
  }
  if (removeHeader && removals.push({ start: headerStart, end: offset }), removals.length === 0)
    return raw2;
  let removedBytes = removals.reduce(
    (total, removal) => total + removal.end - removal.start,
    0
  ), stripped = new Uint8Array(raw2.byteLength - removedBytes), sourceOffset = 0, targetOffset = 0;
  for (let removal of removals) {
    let retained = raw2.subarray(sourceOffset, removal.start);
    stripped.set(retained, targetOffset), targetOffset += retained.byteLength, sourceOffset = removal.end;
  }
  return stripped.set(raw2.subarray(sourceOffset), targetOffset), stripped;
}
function captureRawForBodyRow(raw2) {
  return captureRawForBase64Budget(raw2, 1998976);
}
function captureRawForBase64Budget(raw2, maxBase64Bytes) {
  let maxRawBytes = Math.max(0, Math.floor(maxBase64Bytes / 4)) * 3, truncated = raw2.byteLength > maxRawBytes, captured = truncated ? raw2.subarray(0, maxRawBytes) : raw2;
  return { rawBase64: bytesToBase64(captured), truncated };
}
function findHeaderLine(raw2, start) {
  for (let index = start; index < raw2.byteLength; index++) {
    if (raw2[index] !== 10)
      continue;
    return { contentEnd: index > start && raw2[index - 1] === 13 ? index - 1 : index, end: index + 1 };
  }
  return { contentEnd: raw2.byteLength, end: raw2.byteLength };
}
function headerNameMatches(raw2, start, end, headerName) {
  let colon = start;
  for (; colon < end && raw2[colon] !== 58; )
    colon++;
  if (colon === end || colon - start !== headerName.length)
    return !1;
  for (let index = 0; index < headerName.length; index++) {
    let byte = raw2[start + index], lowerByte = byte >= 65 && byte <= 90 ? byte + 32 : byte, expected = headerName.charCodeAt(index), lowerExpected = expected >= 65 && expected <= 90 ? expected + 32 : expected;
    if (lowerByte !== lowerExpected)
      return !1;
  }
  return !0;
}

// src/workers/email/message-id.ts
var ID_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function synthesizeMessageId(senderEmail) {
  let bytes = crypto.getRandomValues(new Uint8Array(36)), id = Array.from(
    bytes,
    (byte) => ID_ALPHABET[byte % ID_ALPHABET.length]
  ).join(""), domain2 = senderEmail.slice(senderEmail.lastIndexOf("@") + 1);
  return `<${id}@${domain2}>`;
}
function setMessageIdHeader(rawEmail, messageId) {
  let crlfSeparator = new Uint8Array([13, 10, 13, 10]), lfSeparator = new Uint8Array([10, 10]), crlfHeaderEnd = findSequence(rawEmail, crlfSeparator), lfHeaderEnd = findSequence(rawEmail, lfSeparator), usesCrlf = crlfHeaderEnd !== -1 && (lfHeaderEnd === -1 || crlfHeaderEnd <= lfHeaderEnd), headerEnd = usesCrlf ? crlfHeaderEnd : lfHeaderEnd;
  if (headerEnd === -1)
    throw new Error("could not find end of email headers");
  let lineEnding = usesCrlf ? `\r
` : `
`, lines = new TextDecoder().decode(rawEmail.subarray(0, headerEnd)).split(/\r?\n/u), normalizedLines = [], foundMessageId = !1, skippingContinuation = !1;
  for (let line of lines) {
    if (/^[ \t]/u.test(line)) {
      skippingContinuation || normalizedLines.push(line);
      continue;
    }
    if (skippingContinuation = /^message-id\s*:/iu.test(line), skippingContinuation) {
      foundMessageId || (normalizedLines.push(`Message-ID: ${messageId}`), foundMessageId = !0);
      continue;
    }
    normalizedLines.push(line);
  }
  foundMessageId || normalizedLines.unshift(`Message-ID: ${messageId}`);
  let encodedHeaders = new TextEncoder().encode(
    normalizedLines.join(lineEnding)
  ), separator = usesCrlf ? crlfSeparator : lfSeparator, body = rawEmail.subarray(headerEnd + separator.byteLength), normalizedEmail = new Uint8Array(
    encodedHeaders.byteLength + separator.byteLength + body.byteLength
  );
  return normalizedEmail.set(encodedHeaders), normalizedEmail.set(separator, encodedHeaders.byteLength), normalizedEmail.set(body, encodedHeaders.byteLength + separator.byteLength), normalizedEmail;
}
function findSequence(bytes, sequence) {
  for (let index = 0; index <= bytes.byteLength - sequence.byteLength; index++)
    if (sequence.every(
      (value, sequenceIndex) => bytes[index + sequenceIndex] === value
    ))
      return index;
  return -1;
}
function messageIdToStorageId(messageId) {
  return messageId.replace(/^<|>$/g, "");
}
function extractAddressFromString(value) {
  let match = value.match(/<([^>]+)>\s*$/u);
  return (match ? match[1] : value).trim();
}

// src/workers/email/address.ts
function quoteDisplayName(name) {
  return `"${name.replace(/["\\]/gu, (character) => `\\${character}`)}"`;
}
function formatParsedAddress(address) {
  let email3 = address.address ?? "";
  return address.name === void 0 || address.name === "" ? email3 : `${quoteDisplayName(address.name)} <${email3}>`;
}
function extractEmailAddress(address) {
  return typeof address == "string" ? extractAddressFromString(address) : address.email;
}
function formatEmailAddress(address) {
  return typeof address == "string" ? address : `${quoteDisplayName(address.name)} <${address.email}>`;
}

// src/workers/email/capture-metadata.ts
function contentByteLength(content) {
  return typeof content == "string" ? new TextEncoder().encode(content).byteLength : content.byteLength;
}
function getParsedEmailCaptureFields(email3, excludedHeaderNames = []) {
  return {
    cc: email3.cc?.map(formatParsedAddress),
    bcc: email3.bcc?.map(formatParsedAddress),
    replyTo: email3.replyTo ? email3.replyTo.map(formatParsedAddress).join(", ") : void 0,
    subject: email3.subject ?? "(no subject)",
    headers: Object.fromEntries(
      getParsedEmailHeaderEntries(email3, excludedHeaderNames)
    ),
    attachments: (email3.attachments ?? []).map((attachment) => ({
      filename: attachment.filename ?? "attachment",
      contentType: attachment.mimeType ?? "application/octet-stream",
      disposition: attachment.disposition === "inline" ? "inline" : "attachment",
      size: contentByteLength(attachment.content)
    }))
  };
}
function getParsedEmailHeaderEntries(email3, excludedHeaderNames = []) {
  let excludedHeaders = new Set(
    excludedHeaderNames.map((name) => name.toLowerCase())
  );
  return email3.headers.filter(({ key }) => !excludedHeaders.has(key.toLowerCase())).map(({ key, value }) => [key, value]);
}

// src/workers/email/loopback.ts
import { LogLevel, SharedHeaders } from "miniflare:shared";
function logEmailToLoopback(loopback, message, level = LogLevel.INFO) {
  return loopback.fetch("http://localhost/core/log", {
    method: "POST",
    headers: { [SharedHeaders.LOG_LEVEL]: level.toString() },
    body: message
  });
}
function storeEmailTempFile(loopback, content, options) {
  let body;
  typeof content == "string" ? body = content : content instanceof ArrayBuffer ? body = new Uint8Array(content) : body = new Uint8Array(
    content.buffer,
    content.byteOffset,
    content.byteLength
  );
  let params = new URLSearchParams(options);
  return loopback.fetch(
    `http://localhost/core/store-temp-file?${params.toString()}`,
    {
      method: "POST",
      body
    }
  );
}

// src/workers/email/input-validation.ts
var TOKEN_PATTERN = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/u, BASE64_PATTERN = /^[A-Za-z0-9+/]*={0,2}$/u, MANAGED_EMAIL_HEADER_NAMES = /* @__PURE__ */ new Set([
  "bcc",
  "cc",
  "content-transfer-encoding",
  "content-type",
  "date",
  "from",
  "message-id",
  "mime-version",
  "reply-to",
  "subject",
  "to"
]);
function hasControlCharacters(value) {
  return /[\u0000-\u001f\u007f]/u.test(value);
}
function isHeaderName(value) {
  return TOKEN_PATTERN.test(value);
}
function hasInvalidHeaderValueCharacters(value) {
  for (let index = 0; index < value.length; index++) {
    let codePoint = value.charCodeAt(index);
    if (codePoint !== 10) {
      if (codePoint === 13 && value.charCodeAt(index + 1) === 10) {
        index += 1;
        continue;
      }
      if (codePoint < 32 || codePoint === 127)
        return !0;
    }
  }
  return !1;
}
function isManagedEmailHeaderName(value) {
  return MANAGED_EMAIL_HEADER_NAMES.has(value.toLowerCase());
}
function foldHeaderValue(value) {
  return value.replace(/\r?\n/gu, `\r
 `);
}
function isMimeType(value) {
  let separator = value.indexOf("/");
  return separator > 0 && separator === value.lastIndexOf("/") && TOKEN_PATTERN.test(value.slice(0, separator)) && TOKEN_PATTERN.test(value.slice(separator + 1));
}
function normalizeBase64(value) {
  let normalized = value.replace(/\s/gu, "");
  if (!(normalized.length % 4 !== 0 || !BASE64_PATTERN.test(normalized)))
    try {
      return atob(normalized), normalized;
    } catch {
      return;
    }
}

// src/workers/email/mime.ts
function buildMimeMessage(message, messageId, generatedHeaders = {}) {
  let headers = [
    `From: ${message.from}`,
    `To: ${message.to.join(", ")}`
  ];
  message.cc?.length && headers.push(`Cc: ${message.cc.join(", ")}`), message.replyTo && headers.push(`Reply-To: ${message.replyTo}`), headers.push(`Subject: ${message.subject}`), headers.push(`Message-ID: ${messageId}`), headers.push(`Date: ${(/* @__PURE__ */ new Date()).toUTCString()}`), headers.push("MIME-Version: 1.0");
  for (let [key, value] of Object.entries(generatedHeaders))
    headers.push(`${key}: ${value}`);
  let generatedHeaderNames = new Set(
    Object.keys(generatedHeaders).map((name) => name.toLowerCase())
  );
  for (let [key, value] of Object.entries(message.headers ?? {})) {
    let normalizedKey = key.toLowerCase();
    isManagedEmailHeaderName(normalizedKey) || generatedHeaderNames.has(normalizedKey) || headers.push(`${key}: ${foldHeaderValue(value)}`);
  }
  let text = message.text ?? "", html = message.html, contentHeaders, content;
  if (html && message.text) {
    let boundary2 = `----=_Part_${crypto.randomUUID()}`;
    contentHeaders = [
      `Content-Type: multipart/alternative; boundary="${boundary2}"`
    ], content = [
      `--${boundary2}`,
      "Content-Type: text/plain; charset=utf-8",
      "",
      text,
      `--${boundary2}`,
      "Content-Type: text/html; charset=utf-8",
      "",
      html,
      `--${boundary2}--`,
      ""
    ].join(`\r
`);
  } else html ? (contentHeaders = ["Content-Type: text/html; charset=utf-8"], content = html) : (contentHeaders = ["Content-Type: text/plain; charset=utf-8"], content = text);
  let attachments = message.attachments ?? [];
  if (attachments.length === 0)
    return headers.push(...contentHeaders), `${headers.join(`\r
`)}\r
\r
${content}`;
  let boundary = `----=_Mixed_${crypto.randomUUID()}`;
  headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);
  let parts = [`--${boundary}`, ...contentHeaders, "", content];
  for (let attachment of attachments) {
    let filename = attachment.filename.replace(/[\r\n]/g, " ").replace(/(["\\])/g, "\\$1");
    parts.push(
      `--${boundary}`,
      `Content-Type: ${attachment.type}; name="${filename}"`,
      `Content-Disposition: ${attachment.disposition ?? "attachment"}; filename="${filename}"`,
      "Content-Transfer-Encoding: base64",
      ...attachment.disposition === "inline" && attachment.contentId ? [
        `Content-ID: ${attachment.contentId.startsWith("<") ? attachment.contentId : `<${attachment.contentId}>`}`
      ] : [],
      "",
      attachment.content.replace(/\s/g, "").replace(/(.{76})/g, `$1\r
`).trimEnd()
    );
  }
  return parts.push(`--${boundary}--`, ""), `${headers.join(`\r
`)}\r
\r
${parts.join(`\r
`)}`;
}
function attachmentContentToBase64(content) {
  if (typeof content == "string") {
    let normalized = normalizeBase64(content);
    if (normalized === void 0)
      throw new Error("invalid attachment content");
    return normalized;
  }
  let bytes = content instanceof ArrayBuffer ? new Uint8Array(content) : new Uint8Array(content.buffer, content.byteOffset, content.byteLength);
  return bytesToBase64(bytes);
}
function buildReplyFromMessageBuilder(builder, incomingMessage, recipient) {
  let sender = formatEmailAddress(builder.from), replyTo = builder.replyTo === void 0 ? void 0 : formatEmailAddress(builder.replyTo);
  if ([
    sender,
    recipient,
    replyTo,
    builder.subject,
    ...(builder.attachments ?? []).flatMap((attachment) => [
      attachment.filename,
      attachment.contentId
    ])
  ].filter((value) => value !== void 0).some(hasControlCharacters))
    throw new Error("invalid headers set");
  for (let attachment of builder.attachments ?? [])
    if (!isMimeType(attachment.type) || attachment.disposition !== void 0 && attachment.disposition !== "inline" && attachment.disposition !== "attachment" || attachment.disposition === "inline" && !attachment.contentId)
      throw new Error("invalid attachment");
  if (Object.values(builder.headers ?? {}).some(hasControlCharacters))
    throw new Error("invalid headers set");
  let customHeaders;
  try {
    customHeaders = new Headers(builder.headers);
  } catch {
    throw new Error("invalid headers set");
  }
  if (customHeaders.has("received"))
    throw new Error("invalid headers set");
  for (let name of Array.from(customHeaders.keys()))
    (isManagedEmailHeaderName(name) || name === "in-reply-to" || name === "references") && customHeaders.delete(name);
  let incomingMessageId = incomingMessage.messageId;
  if (incomingMessageId === void 0)
    throw new Error("Original email has no Message-ID");
  let messageId = synthesizeMessageId(extractEmailAddress(builder.from)), references = incomingMessage.references === void 0 ? incomingMessageId : `${incomingMessage.references} ${incomingMessageId}`, raw2 = buildMimeMessage(
    {
      from: sender,
      to: [recipient],
      replyTo,
      subject: builder.subject,
      headers: Object.fromEntries(customHeaders),
      text: builder.text,
      html: builder.html,
      attachments: builder.attachments?.map((attachment) => ({
        disposition: attachment.disposition,
        contentId: attachment.contentId,
        filename: attachment.filename,
        type: attachment.type,
        content: attachmentContentToBase64(attachment.content)
      }))
    },
    messageId,
    {
      "In-Reply-To": incomingMessageId,
      References: references
    }
  );
  return {
    raw: new TextEncoder().encode(raw2),
    messageId,
    sender
  };
}

// src/workers/email/validate.ts
async function isEmailReplyable(email3, incomingEmailHeaders, log) {
  let autoResponseSuppress = incomingEmailHeaders.get("x-auto-response-suppress")?.toLowerCase();
  if (autoResponseSuppress !== void 0 && autoResponseSuppress !== "none")
    return !1;
  let autoSubmittedValue = incomingEmailHeaders.get("auto-submitted")?.toLowerCase();
  return autoSubmittedValue !== void 0 && autoSubmittedValue !== "no" ? !1 : email3.inReplyTo === void 0 && email3.references === void 0 ? !0 : email3.inReplyTo !== void 0 && email3.references !== void 0 ? (email3.references.match(/@/g)?.length ?? 0) >= 100 ? (await log(
    red(
      `The incoming email's "References" header has more than 100 entries. As such, your Worker cannot respond to this email. Refer to https://developers.cloudflare.com/email-routing/email-workers/reply-email-workers/`
    )
  ), !1) : !0 : !1;
}
async function validateReply(incomingMessage, replyMessage) {
  let rawEmail = replyMessage[RAW_EMAIL], rawEmailBuffer = new Uint8Array(
    await new Response(rawEmail).arrayBuffer()
  ), parsedReply;
  try {
    parsedReply = await PostalMime.parse(rawEmailBuffer);
  } catch (e) {
    let error51 = e;
    throw new Error(`could not parse email: ${error51.message}`);
  }
  if (parsedReply.from?.address !== replyMessage.from)
    throw new Error("From: header does not match mail from");
  let hasMessageIdHeader = parsedReply.headers.some(
    (header) => header.key.toLowerCase() === "message-id"
  );
  if (parsedReply.messageId === void 0 && hasMessageIdHeader)
    throw new Error("invalid message-id");
  let messageId = synthesizeMessageId(replyMessage.from), headersToPrepend = [];
  if (new Headers(
    parsedReply.headers.map((header) => [header.key, header.value])
  ).get("received") !== null)
    throw new Error("invalid headers set");
  if (parsedReply.inReplyTo === void 0)
    throw new Error("no In-Reply-To header found in reply message");
  if (parsedReply.inReplyTo !== incomingMessage.messageId)
    throw new Error("In-Reply-To does not match original Message-ID");
  let incomingReferences = incomingMessage.references ?? "";
  if (parsedReply.references !== void 0) {
    if (!(parsedReply.references.includes(incomingMessage.messageId) && parsedReply.references.includes(incomingReferences)))
      throw new Error("provided References header is invalid");
  } else
    headersToPrepend.push(
      `References: ${incomingReferences}${incomingReferences.length > 0 ? " " : ""}${incomingMessage.messageId}\r
`
    );
  let finalReplyEmail = rawEmailBuffer;
  if (headersToPrepend.length > 0) {
    let encodedHeaders = new TextEncoder().encode(headersToPrepend.join("")), replyWithReferences = new Uint8Array(
      encodedHeaders.byteLength + finalReplyEmail.byteLength
    );
    replyWithReferences.set(encodedHeaders, 0), replyWithReferences.set(finalReplyEmail, encodedHeaders.byteLength), finalReplyEmail = replyWithReferences;
  }
  return { raw: setMessageIdHeader(finalReplyEmail, messageId), messageId };
}

// src/workers/core/email.ts
$.enabled = !0;
function renderEmailHeaders(headers) {
  return headers ? `
  headers:
${[...headers.entries()].map(([k, v]) => `    ${escapeLogValue(k)}: ${escapeLogValue(v)}`).join(`
`)}` : "";
}
function escapeLogValue(value) {
  return value.replace(/[\u0000-\u001f\u007f]/gu, (character) => `\\x${(character.codePointAt(0) ?? 0).toString(16).padStart(2, "0")}`);
}
function isMissingEmailHandlerError(e) {
  return e instanceof Error && e.message.includes('does not implement the method "email"');
}
async function handleEmail(params, request, service, workerName, env2, ctx) {
  let events = [], forwards = [], replies = [], capturedReplyRawBase64 = [], capturedReplyTruncated = [], from = params.get("from"), to = params.get("to");
  if (!request.body || !from || !to)
    return new Response(
      "Invalid email. Your request must include URL parameters specifying the `from` and `to` addresses, as well as an email in the body",
      {
        status: 400
      }
    );
  let incomingEmailRaw = new Uint8Array(await request.arrayBuffer());
  if (incomingEmailRaw.byteLength > 26214400)
    return new Response(
      "Email message size is bigger than the production size limit of 25 MiB.",
      { status: 400 }
    );
  let deliveredEmailRaw = stripEmailHeader(incomingEmailRaw, "bcc"), parsedIncomingEmail;
  try {
    parsedIncomingEmail = await PostalMime.parse(deliveredEmailRaw);
  } catch (e) {
    let error51 = e;
    return new Response(
      `Email could not be parsed: ${error51.name}: ${error51.message}`,
      { status: 400 }
    );
  }
  if (parsedIncomingEmail.messageId === void 0)
    return new Response(
      "Email could not be parsed: invalid or no message id provided",
      { status: 400 }
    );
  from !== parsedIncomingEmail.from.address && await logEmailToLoopback(
    env2[CoreBindings.SERVICE_LOOPBACK],
    `${yellow(`Provided MAIL FROM address doesn't match the email message's "From" header`)}:
  MAIL FROM: ${escapeLogValue(from)}
  "From" header: ${escapeLogValue(parsedIncomingEmail.from.address ?? "")}`,
    LogLevel2.WARN
  ), parsedIncomingEmail.to?.map((addr) => addr.address).includes(to) || await logEmailToLoopback(
    env2[CoreBindings.SERVICE_LOOPBACK],
    `${yellow(`Provided RCPT TO address doesn't match any "To" header in the email message`)}:
  RCPT TO: ${escapeLogValue(to)}
  "To" header: ${escapeLogValue(parsedIncomingEmail.to?.map((addr) => addr.address).join(", ") ?? "")}`,
    LogLevel2.WARN
  );
  let incomingEmailHeaders = new Headers(
    parsedIncomingEmail.headers.filter(({ key }) => key.toLowerCase() !== "bcc").map((header) => [header.key, header.value])
  ), outcome = "ok", rejectReason;
  function structuredResultResponse() {
    return Response.json(
      {
        outcome,
        rejectReason,
        forwards,
        replies: replies.map(({ rawBase64: _rawBase64, ...reply }) => reply),
        events
      },
      { status: outcome === "ok" ? 200 : 500 }
    );
  }
  events.push({ type: "received", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  let store = env2[CoreBindings.SERVICE_EMAIL_STORE], storedFrom = from, storedTo = to, receivedAt = (/* @__PURE__ */ new Date()).toISOString(), stored = !1;
  async function storeReceivedEmail() {
    if (!stored) {
      stored = !0;
      try {
        let capturedRaw = captureRawForBodyRow(deliveredEmailRaw), rawBase64 = capturedRaw.rawBase64, parsedFields = getParsedEmailCaptureFields(parsedIncomingEmail, [
          "bcc"
        ]), metadata = {
          worker: workerName,
          from: storedFrom,
          to: storedTo,
          cc: parsedFields.cc,
          subject: parsedFields.subject,
          messageId: parsedIncomingEmail.messageId,
          headers: parsedFields.headers,
          headerEntries: getParsedEmailHeaderEntries(parsedIncomingEmail, [
            "bcc"
          ]),
          receivedAt,
          rawSize: deliveredEmailRaw.byteLength,
          attachments: parsedFields.attachments,
          outcome,
          rejectReason,
          forwards,
          replies: replies.map(
            ({ raw: _raw, rawBase64: _rawBase64, ...reply }, index) => ({
              ...reply,
              ...capturedReplyTruncated[index] ? { captureTruncated: !0 } : {}
            })
          ),
          events,
          ...capturedRaw.truncated ? { captureTruncated: !0 } : {}
        }, captureId = crypto.randomUUID();
        try {
          await store.storeReceivedBody(captureId, 0, rawBase64);
          for (let [index] of replies.entries()) {
            let replyRawBase64 = capturedReplyRawBase64[index];
            if (replyRawBase64 === void 0)
              throw new Error(
                `Received email ${metadata.messageId} has no captured reply body at index ${index}`
              );
            await store.storeReceivedBody(captureId, index + 1, replyRawBase64);
          }
          await store.storeReceivedMetadata(
            captureId,
            replies.length + 1,
            metadata
          );
        } catch (error51) {
          throw await store.discardReceived(captureId).catch(() => {
          }), error51;
        }
      } catch (error51) {
        stored = !1;
        try {
          await logEmailToLoopback(
            env2[CoreBindings.SERVICE_LOOPBACK],
            `Failed to capture received email for the Local Explorer; the email was still delivered. Cause: ${escapeLogValue(error51 instanceof Error ? error51.message : String(error51))}`,
            LogLevel2.WARN
          );
        } catch {
        }
      }
    }
  }
  try {
    let deliveredEmailBody = new Response(deliveredEmailRaw).body;
    assert2(deliveredEmailBody !== null, "Delivered email body is null");
    let emailEvent = service.email(
      // Construct a ForwardableEmailMessage-like object. We need
      // - ForwardableEmailMessage to be able to be passed across JSRPC (to support e.g. userWorker.email(ForwardableEmailMessage))
      // - ForwardableEmailMessage properties to be synchronously available (to match production). This rules out a class extending `RpcStub`
      // However, unlike EmailMessage (see email.worker.ts) it doesn't need to be user-constructable, and so we can just use an object with `satisfies`
      {
        from,
        to,
        raw: deliveredEmailBody,
        rawSize: deliveredEmailRaw.byteLength,
        headers: incomingEmailHeaders,
        setReject: (reason) => {
          ctx.waitUntil(
            logEmailToLoopback(
              env2[CoreBindings.SERVICE_LOOPBACK],
              `${red("Email handler rejected message")}${reset(` with the following reason: "${escapeLogValue(reason)}"`)}`,
              LogLevel2.ERROR
            )
          ), events.push({
            type: "reject",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }), rejectReason = reason;
        },
        forward: async (rcptTo, headers) => {
          await logEmailToLoopback(
            env2[CoreBindings.SERVICE_LOOPBACK],
            `${blue("Email handler forwarded message")}${reset(` with
  rcptTo: ${escapeLogValue(rcptTo)}${renderEmailHeaders(headers)}`)}`
          );
          let result = { messageId: synthesizeMessageId(rcptTo) };
          return events.push({
            type: "forward",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            messageId: result.messageId
          }), forwards.push({
            recipient: rcptTo,
            headers: headers ? [...headers.entries()] : [],
            messageId: result.messageId
          }), result;
        },
        reply: async (replyMessage) => {
          if (!await isEmailReplyable(
            parsedIncomingEmail,
            incomingEmailHeaders,
            async (msg) => {
              await logEmailToLoopback(
                env2[CoreBindings.SERVICE_LOOPBACK],
                msg,
                LogLevel2.ERROR
              );
            }
          ))
            throw new Error("Original email is not replyable");
          let validatedReply, replySender;
          if (RAW_EMAIL in replyMessage) {
            let rawReply = replyMessage;
            validatedReply = await validateReply(parsedIncomingEmail, rawReply), replySender = rawReply.from;
          } else {
            let builtReply = buildReplyFromMessageBuilder(
              replyMessage,
              parsedIncomingEmail,
              from
            );
            validatedReply = builtReply, replySender = builtReply.sender;
          }
          let finalReply = validatedReply.raw, replyId = messageIdToStorageId(validatedReply.messageId), file2, resp = await storeEmailTempFile(
            env2[CoreBindings.SERVICE_LOOPBACK],
            finalReply,
            {
              extension: "eml",
              prefix: "email/reply",
              id: replyId
            }
          );
          resp.ok ? file2 = await resp.text() : await logEmailToLoopback(
            env2[CoreBindings.SERVICE_LOOPBACK],
            `${yellow("Failed to persist replied email for the Local Explorer; the reply was still sent")}${reset(`: ${escapeLogValue(await resp.text())}`)}`,
            LogLevel2.WARN
          ), await logEmailToLoopback(
            env2[CoreBindings.SERVICE_LOOPBACK],
            `${blue("Email handler replied to sender")}${reset(` with the following message:
  ${escapeLogValue(file2 ?? "(reply not persisted)")}`)}`
          );
          let result = { messageId: validatedReply.messageId };
          events.push({
            type: "reply",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            messageId: result.messageId
          });
          let capturedReply = captureRawForBodyRow(finalReply);
          return capturedReplyRawBase64.push(capturedReply.rawBase64), capturedReplyTruncated.push(capturedReply.truncated), replies.push({
            messageId: result.messageId,
            sender: replySender,
            raw: new TextDecoder().decode(finalReply)
          }), result;
        }
      }
    );
    if (params.get("format") !== "json")
      return await emailEvent, await scheduler.wait(0), await storeReceivedEmail(), rejectReason !== void 0 ? new Response(
        `Worker rejected email with the following reason: ${rejectReason}`,
        { status: 400 }
      ) : new Response("Worker successfully processed email", {
        status: 200
      });
    try {
      await emailEvent, outcome = "ok";
    } catch (e) {
      outcome = "exception", isMissingEmailHandlerError(e) ? events.splice(0, events.length, {
        type: "unhandled",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }) : await logEmailToLoopback(
        env2[CoreBindings.SERVICE_LOOPBACK],
        red(e instanceof Error ? e.stack ?? String(e) : String(e)),
        LogLevel2.ERROR
      ).catch(() => {
      });
    }
    return await scheduler.wait(0), await storeReceivedEmail(), structuredResultResponse();
  } catch (e) {
    if (outcome = "exception", isMissingEmailHandlerError(e))
      return events.splice(0, events.length, {
        type: "unhandled",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), await storeReceivedEmail(), params.get("format") === "json" ? structuredResultResponse() : new Response(
        "Worker does not export an email() handler; message stored without delivery.",
        { status: 500 }
      );
    throw await storeReceivedEmail(), e;
  }
}

// src/workers/email/contracts.ts
var zEmailHandlerEvent2 = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.enum(["received", "reject", "unhandled"]),
    timestamp: external_exports.string().describe("ISO 8601 timestamp of when the event occurred.")
  }),
  external_exports.object({
    type: external_exports.enum(["forward", "reply"]),
    timestamp: external_exports.string().describe("ISO 8601 timestamp of when the event occurred."),
    messageId: external_exports.string().describe("Correlates with the matching `forwards`/`replies` entry.")
  })
]).describe(
  "One entry in the ordered lifecycle of what the handler did to the message. `received` is first for any message actually delivered to an `email()` handler. The exception is `unhandled`: when the Worker exports no `email()` handler the message never reaches one, so the timeline is a single `unhandled` event with no preceding `received`. `forward`/`reply` events carry a `messageId` correlating with the matching `forwards`/`replies` entry."
), zEmailHeaders = external_exports.array(external_exports.tuple([external_exports.string(), external_exports.string()])).describe("Email headers as ordered name/value pairs, including duplicates."), zEmailHandlerForward2 = external_exports.object({
  messageId: external_exports.string(),
  recipient: external_exports.string().describe("Envelope recipient the message was forwarded to."),
  headers: external_exports.array(external_exports.tuple([external_exports.string(), external_exports.string()])).describe("Headers added to the forwarded message.")
}), zEmailHandlerReplyBase = external_exports.object({
  messageId: external_exports.string(),
  sender: external_exports.string().describe("Address the reply was sent from.")
}), zEmailHandlerReplyApi = zEmailHandlerReplyBase.extend({
  raw: external_exports.string().describe(
    "Raw MIME content of the reply. Omitted from the routing list; present on the detail response."
  ).optional(),
  rawBase64: external_exports.string().describe("Lossless base64 representation of the reply MIME.").optional()
}), zEmailHandlerReply2 = zEmailHandlerReplyBase.extend({
  raw: external_exports.string().describe("Raw MIME content of the reply."),
  rawBase64: external_exports.string().describe("Lossless base64 representation of the reply MIME.").optional()
}), zEmailHandlerResult = external_exports.object({
  outcome: external_exports.enum(["ok", "exception"]),
  rejectReason: external_exports.string().describe(
    "Reason passed to `setReject()`, if the handler rejected the message."
  ).optional(),
  forwards: external_exports.array(zEmailHandlerForward2),
  replies: external_exports.array(zEmailHandlerReply2),
  events: external_exports.array(zEmailHandlerEvent2).describe(
    "Ordered lifecycle of everything the handler did to the message."
  )
}), zEmailAttachment2 = external_exports.object({
  filename: external_exports.string(),
  contentType: external_exports.string(),
  disposition: external_exports.enum(["inline", "attachment"]),
  size: external_exports.number()
}).describe(
  "Metadata describing an attachment on a captured email, without its content."
), zEmailBase2 = external_exports.object({
  worker: external_exports.string().describe("Worker associated with the email, if known.").optional(),
  from: external_exports.string().describe("Envelope MAIL FROM address."),
  subject: external_exports.string(),
  messageId: external_exports.string().describe(
    "RFC Message-ID header value. Identifies the email in the store."
  ),
  attachments: external_exports.array(zEmailAttachment2).describe(
    "Metadata for attachments parsed out of the email. The content itself is only available in the raw MIME."
  )
}), zEmailRoutingItem2 = zEmailBase2.extend({
  to: external_exports.string().describe("Envelope RCPT TO address."),
  cc: external_exports.array(external_exports.string()).optional(),
  headers: external_exports.record(external_exports.string(), external_exports.string()).optional(),
  headerEntries: zEmailHeaders.optional(),
  receivedAt: external_exports.string(),
  rawSize: external_exports.number(),
  outcome: external_exports.enum(["ok", "exception"]).describe("Whether the handler ran to completion or threw."),
  rejectReason: external_exports.string().describe(
    "Reason passed to setReject(), if the handler rejected the message."
  ).optional(),
  forwards: external_exports.array(zEmailHandlerForward2),
  replies: external_exports.array(zEmailHandlerReplyApi),
  events: external_exports.array(zEmailHandlerEvent2)
}), zEmailRoutingDetail2 = zEmailRoutingItem2.extend({
  text: external_exports.string().describe("Parsed plain text body, when present.").optional(),
  html: external_exports.string().describe("Parsed HTML body, when present.").optional(),
  raw: external_exports.string().describe("Raw MIME content of the received email."),
  rawBase64: external_exports.string().describe("Lossless base64 representation of the received MIME.").optional()
}), zEmailSendAttachment = external_exports.object({
  filename: external_exports.string().describe("Name the attachment is presented under."),
  type: external_exports.string().describe("MIME type of the attachment, e.g. 'application/pdf'."),
  content: external_exports.string().describe(
    "Attachment content, base64-encoded. MessageBuilder takes raw bytes here, but this endpoint accepts JSON so the bytes must be base64-encoded."
  ),
  contentId: external_exports.string().describe("Content-ID for an inline attachment.").optional(),
  disposition: external_exports.enum(["inline", "attachment"]).describe("How the attachment is presented. Defaults to 'attachment'.").optional()
}), zEmailSendRequest2 = external_exports.object({
  from: external_exports.string().describe("Sender address."),
  to: external_exports.array(external_exports.string()).min(1).describe("Recipient addresses."),
  cc: external_exports.array(external_exports.string()).optional(),
  bcc: external_exports.array(external_exports.string()).optional(),
  replyTo: external_exports.string().optional(),
  subject: external_exports.string(),
  text: external_exports.string().describe("Plain text body.").optional(),
  html: external_exports.string().describe("HTML body.").optional(),
  headers: external_exports.record(external_exports.string(), external_exports.string()).describe("Custom headers to include on the message.").optional(),
  attachments: external_exports.array(zEmailSendAttachment).describe(
    "Attachments to include on the message, mirroring the MessageBuilder `attachments` entries accepted by a send_email binding. Adding any attachment composes the message as multipart/mixed."
  ).optional()
}).describe("Fields for composing a test email, mirroring MessageBuilder."), zEmailSendingItem2 = zEmailBase2.extend({
  to: external_exports.array(external_exports.string()),
  cc: external_exports.array(external_exports.string()).optional(),
  bcc: external_exports.array(external_exports.string()).optional(),
  replyTo: external_exports.string().optional(),
  sentAt: external_exports.string(),
  headers: external_exports.record(external_exports.string(), external_exports.string()).optional()
}), zEmailSendingDetail2 = zEmailSendingItem2.extend({
  text: external_exports.string().optional(),
  html: external_exports.string().optional(),
  raw: external_exports.string().describe("Raw MIME content, present when sent via the EmailMessage API.").optional(),
  rawBase64: external_exports.string().describe("Lossless base64 representation of sent MIME.").optional()
});

// src/workers/local-explorer/resources/email.ts
var EMAIL_ERROR_NOT_FOUND = 10601, EMAIL_ERROR_SEND_FAILED = 10602, EMAIL_ERROR_PEER_UNAVAILABLE = 10603, EMAIL_WARNING_CAPTURE_TRUNCATED = 10604;
function getEmailStore(c) {
  return c.env[CoreBindings.SERVICE_EMAIL_STORE];
}
async function getEmailPeerSourcesIfAggregating(c) {
  let peerUrls = await getPeerUrlsIfAggregating(c), discovered = await Promise.all(
    peerUrls.map(async (url2) => {
      try {
        let sourceId = await getPeerEntrypoint(
          url2,
          EMAIL_STORE_SERVICE_NAME
        ).getSourceId();
        return sourceId === "" ? void 0 : { id: `peer:${sourceId}`, url: url2 };
      } catch {
        return;
      }
    })
  );
  return [
    ...new Map(
      discovered.filter((source) => source !== void 0).map((source) => [source.id, source])
    ).values()
  ].sort((a, b) => a.id.localeCompare(b.id));
}
function isFetcher(value) {
  return typeof value == "object" && value !== null && "fetch" in value && typeof value.fetch == "function";
}
function isLocalWorker(c, worker) {
  return c.env[CoreBindings.JSON_LOCAL_EXPLORER_WORKER_NAMES].includes(worker);
}
function getUserWorkerService(c, worker) {
  let service = c.env[`${CoreBindings.SERVICE_EXPLORER_USER_WORKER_PREFIX}${worker}`];
  return isFetcher(service) ? service : void 0;
}
var EMAIL_CURSOR_START = "";
function parsePeerEmailList(value, itemSchema) {
  return external_exports.object({
    result: external_exports.array(itemSchema),
    result_info: external_exports.object({
      cursor: external_exports.string().optional(),
      has_more: external_exports.boolean()
    })
  }).parse(value);
}
function buildEmailListResponse(c, query, items, hasMore, cursor) {
  return c.json({
    ...wrapResponse(items),
    result_info: {
      count: items.length,
      per_page: query.per_page,
      has_more: hasMore,
      ...cursor === void 0 ? {} : { cursor }
    }
  });
}
function encodeAggregateCursor(resource, worker, sources) {
  let json2 = JSON.stringify({ resource, worker, sources });
  return `a.${bytesToBase64(new TextEncoder().encode(json2))}`;
}
function isEmailCursorState(value) {
  return typeof value == "object" && value !== null && !Array.isArray(value) && Object.values(value).every(
    (cursor) => cursor === null || typeof cursor == "string"
  );
}
function isEmailCursorEnvelope(value) {
  return typeof value == "object" && value !== null && !Array.isArray(value) && "resource" in value && (value.resource === "routing" || value.resource === "sending") && (!("worker" in value) || typeof value.worker == "string") && "sources" in value && isEmailCursorState(value.sources);
}
function isInvalidEmailCursor(error51) {
  return error51 instanceof TypeError && error51.message === "Invalid email pagination cursor";
}
function decodeAggregateCursor(cursor, resource, worker) {
  if (cursor === void 0)
    return {};
  try {
    if (!cursor.startsWith("a."))
      throw new Error("Invalid cursor");
    let envelope = JSON.parse(
      new TextDecoder().decode(base64ToBytes(cursor.slice(2)))
    );
    if (!isEmailCursorEnvelope(envelope) || envelope.resource !== resource || envelope.worker !== worker)
      throw new Error("Invalid cursor");
    return envelope.sources;
  } catch {
    throw new TypeError("Invalid email pagination cursor");
  }
}
async function listLocalEmails(query, resource, list) {
  let state = decodeAggregateCursor(query.cursor, resource, query.worker), localCursor = state.local === EMAIL_CURSOR_START ? void 0 : state.local;
  if (localCursor === null)
    return { items: [], hasMore: !1 };
  let { cursor, ...page } = await list(localCursor, query.per_page);
  return {
    ...page,
    ...cursor === void 0 ? {} : {
      cursor: encodeAggregateCursor(resource, query.worker, {
        ...state,
        local: cursor
      })
    }
  };
}
function getEmailTimestamp(email3) {
  return "receivedAt" in email3 ? email3.receivedAt : email3.sentAt;
}
function compareEmailCandidates([sourceA, candidateA], [sourceB, candidateB]) {
  return getEmailTimestamp(candidateB.item).localeCompare(
    getEmailTimestamp(candidateA.item)
  ) || sourceA.localeCompare(sourceB);
}
async function getNextLocalEmail(list, cursor, worker) {
  let currentCursor = cursor;
  for (; ; ) {
    let page = await list(currentCursor), item = page.items[0];
    if (item === void 0)
      return;
    if (worker === void 0 || item.worker === worker)
      return {
        item,
        nextCursor: page.cursor,
        hasMore: page.hasMore
      };
    if (!page.hasMore || page.cursor === void 0)
      return;
    currentCursor = page.cursor;
  }
}
async function getNextPeerEmail(peerUrl, basePath, cursor, worker, itemSchema) {
  let params = new URLSearchParams({ per_page: "1" });
  cursor !== void 0 && params.set("cursor", cursor), worker !== void 0 && params.set("worker", worker);
  let response = await fetchFromPeer(peerUrl, `${basePath}?${params}`);
  if (response?.status === 400)
    throw new TypeError("Invalid email pagination cursor");
  if (!response?.ok)
    return null;
  try {
    let data = parsePeerEmailList(await response.json(), itemSchema), item = data.result[0];
    if (item === void 0)
      return {};
    let nextCursor = data.result_info.cursor, hasMore = data.result_info.has_more;
    return hasMore && (!nextCursor || nextCursor === cursor) ? null : {
      candidate: { item, nextCursor, hasMore }
    };
  } catch {
    return null;
  }
}
async function listAggregatedEmails(options) {
  let state = decodeAggregateCursor(
    options.query.cursor,
    options.resource,
    options.query.worker
  ), peers = new Map(
    (options.query.cursor === void 0 ? options.peerSources : options.peerSources.filter(({ id }) => Object.hasOwn(state, id))).map((peer) => [peer.id, peer])
  ), sourceIds = ["local", ...peers.keys()];
  for (let source of sourceIds)
    Object.hasOwn(state, source) || (state[source] = EMAIL_CURSOR_START);
  let candidates = /* @__PURE__ */ new Map(), unavailableSources = /* @__PURE__ */ new Set();
  async function getCandidate(source) {
    if (state[source] === null)
      return;
    let candidate;
    if (source === "local")
      candidate = await getNextLocalEmail(
        options.localList,
        state[source] === EMAIL_CURSOR_START ? void 0 : state[source],
        options.query.worker
      );
    else {
      let peer = peers.get(source);
      if (peer === void 0)
        return;
      let result = await getNextPeerEmail(
        peer.url,
        options.basePath,
        state[source] === EMAIL_CURSOR_START ? void 0 : state[source],
        options.query.worker,
        options.itemSchema
      );
      result === null ? candidate = null : candidate = result.candidate;
    }
    if (candidate === null) {
      unavailableSources.add(source);
      return;
    }
    if (candidate === void 0) {
      state[source] = null;
      return;
    }
    candidates.set(source, candidate);
  }
  await Promise.all(sourceIds.map((source) => getCandidate(source)));
  let items = [];
  for (; items.length < options.query.per_page && candidates.size > 0; ) {
    let source = [...candidates.entries()].sort(
      compareEmailCandidates
    )[0]?.[0];
    if (source === void 0)
      break;
    let candidate = candidates.get(source);
    if (candidate === void 0)
      break;
    candidates.delete(source), items.push(candidate.item);
    let canContinue = candidate.hasMore && candidate.nextCursor !== void 0;
    state[source] = canContinue ? candidate.nextCursor : null, items.length < options.query.per_page && canContinue && await getCandidate(source);
  }
  let hasMore = candidates.size > 0 || sourceIds.some((source) => {
    if (unavailableSources.has(source))
      return !1;
    let cursor = state[source];
    return cursor != null;
  });
  return {
    items,
    hasMore,
    ...hasMore ? {
      cursor: encodeAggregateCursor(
        options.resource,
        options.query.worker,
        state
      )
    } : {}
  };
}
async function findWorkerOwner(c, peerUrls, worker) {
  let responses = await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, "/local/workers");
      if (!response?.ok)
        return { owner: null, unavailable: !0 };
      try {
        return { owner: zLocalExplorerListWorkersResponse.parse(
          await response.json()
        ).result?.some((w) => w.isSelf === !0 && w.name === worker) ?? !1 ? url2 : null, unavailable: !1 };
      } catch {
        return { owner: null, unavailable: !0 };
      }
    })
  );
  return {
    owner: responses.find(({ owner }) => owner !== null)?.owner ?? null,
    unavailable: responses.some(({ unavailable }) => unavailable)
  };
}
async function fetchWorkerScopedListFromOwner(ownerUrl, basePath, query) {
  if (query.worker === void 0)
    return null;
  let params = new URLSearchParams({
    per_page: String(query.per_page),
    worker: query.worker
  });
  return query.cursor !== void 0 && params.set("cursor", query.cursor), await fetchFromPeer(ownerUrl, `${basePath}?${params}`) ?? null;
}
function peerUnavailableResponse(worker) {
  return errorResponse(
    502,
    EMAIL_ERROR_PEER_UNAVAILABLE,
    worker === void 0 ? "One or more workers are temporarily unavailable in this dev session." : `Worker '${worker}' is temporarily unavailable in this dev session.`
  );
}
function decodeEmailHeaders(raw2) {
  let separator = /\r?\n\r?\n/u.exec(raw2);
  if (separator?.index !== void 0)
    return `${decodeWords(raw2.slice(0, separator.index))}${raw2.slice(separator.index)}`;
  let lines = raw2.split(/(\r?\n)/u), headerEnd = 0;
  for (let index = 0; index < lines.length; index += 2) {
    let line = lines[index], isFieldStart = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+:/u.test(line), isFoldedContinuation = index > 0 && /^[ \t]/u.test(line);
    if (line === "" || !isFieldStart && !isFoldedContinuation)
      break;
    headerEnd = index + 2;
  }
  let headerPart = lines.slice(0, headerEnd).join(""), rest = lines.slice(headerEnd).join("");
  return `${decodeWords(headerPart)}${rest}`;
}
function validateEmailRequest(body) {
  if ([
    body.from,
    ...body.to,
    ...body.cc ?? [],
    ...body.bcc ?? [],
    body.replyTo,
    body.subject
  ].filter((value) => value !== void 0).some(hasControlCharacters))
    return "Email fields must not contain control characters.";
  if (Object.keys(body.headers ?? {}).some((name) => !isHeaderName(name)) || Object.values(body.headers ?? {}).some(hasInvalidHeaderValueCharacters))
    return "Custom headers must use valid names and values.";
  for (let attachment of body.attachments ?? [])
    if (hasControlCharacters(attachment.filename) || attachment.contentId !== void 0 && hasControlCharacters(attachment.contentId) || !isMimeType(attachment.type) || normalizeBase64(attachment.content) === void 0)
      return "Attachments must have valid filenames, MIME types, and base64 content.";
}
var receivedEmailListDescriptor = {
  resource: "routing",
  basePath: "/local/email/routing",
  itemSchema: zEmailRoutingItem2,
  async listStorePage(store, cursor, limit, worker) {
    using result = await store.listReceived(cursor, limit, worker);
    return structuredClone(result);
  }
}, sentEmailListDescriptor = {
  resource: "sending",
  basePath: "/local/email/sending",
  itemSchema: zEmailSendingItem2,
  async listStorePage(store, cursor, limit, worker) {
    using result = await store.listSent(cursor, limit, worker);
    return structuredClone(result);
  }
};
function parseEmailListPage(page, itemSchema) {
  return {
    ...page,
    items: external_exports.array(itemSchema).parse(page.items)
  };
}
async function listEmails(c, query, descriptor) {
  let store = getEmailStore(c);
  try {
    if (query.worker !== void 0) {
      if (decodeAggregateCursor(query.cursor, descriptor.resource, query.worker), isLocalWorker(c, query.worker)) {
        let page2 = await listLocalEmails(
          query,
          descriptor.resource,
          async (cursor, limit) => parseEmailListPage(
            await descriptor.listStorePage(
              store,
              cursor,
              limit,
              query.worker
            ),
            descriptor.itemSchema
          )
        );
        return buildEmailListResponse(
          c,
          query,
          page2.items,
          page2.hasMore,
          page2.cursor
        );
      }
      let ownerLookup = await findWorkerOwner(
        c,
        await getPeerUrlsIfAggregating(c),
        query.worker
      ), owner = ownerLookup.owner;
      if (owner !== null) {
        let response = await fetchWorkerScopedListFromOwner(
          owner,
          descriptor.basePath,
          query
        );
        return response !== null ? response : peerUnavailableResponse(query.worker);
      }
      return ownerLookup.unavailable ? peerUnavailableResponse(query.worker) : buildEmailListResponse(c, query, [], !1);
    }
    let peerSources = await getEmailPeerSourcesIfAggregating(c);
    if (peerSources.length === 0) {
      let page2 = await listLocalEmails(
        query,
        descriptor.resource,
        async (cursor, limit) => parseEmailListPage(
          await descriptor.listStorePage(store, cursor, limit),
          descriptor.itemSchema
        )
      );
      return buildEmailListResponse(
        c,
        query,
        page2.items,
        page2.hasMore,
        page2.cursor
      );
    }
    let page = await listAggregatedEmails({
      c,
      query,
      basePath: descriptor.basePath,
      resource: descriptor.resource,
      peerSources,
      itemSchema: descriptor.itemSchema,
      localList: async (cursor) => parseEmailListPage(
        await descriptor.listStorePage(store, cursor, 1, query.worker),
        descriptor.itemSchema
      )
    });
    return buildEmailListResponse(
      c,
      query,
      page.items,
      page.hasMore,
      page.cursor
    );
  } catch (error51) {
    if (!isInvalidEmailCursor(error51))
      throw error51;
    return errorResponse(400, 1e4, "Invalid email pagination cursor");
  }
}
async function listReceivedEmails(c, query) {
  return listEmails(c, query, receivedEmailListDescriptor);
}
async function getReceivedEmail(c, emailId, worker) {
  using email3 = await getEmailStore(c).findReceived(
    messageIdToStorageId(emailId),
    worker
  );
  if (!email3 || worker !== void 0 && email3.worker !== worker)
    return getReceivedEmailFromPeers(c, emailId, worker);
  let { captureTruncated, replies: storedReplies, ...storedEmail } = email3, body = {};
  if (email3.rawBase64 !== void 0)
    try {
      let parsed = await new PostalMime().parse(
        base64ToBytes(email3.rawBase64)
      );
      body = { text: parsed.text, html: parsed.html };
    } catch {
    }
  let replyCaptureTruncated = storedReplies.some(
    (reply) => reply.captureTruncated
  ), decoded = {
    ...storedEmail,
    ...body,
    replies: storedReplies.map(
      ({ captureTruncated: _captureTruncated, ...reply }) => ({
        ...reply,
        raw: decodeEmailHeaders(reply.raw)
      })
    )
  }, messages = [];
  return captureTruncated && messages.push({
    code: EMAIL_WARNING_CAPTURE_TRUNCATED,
    message: "Displayed received email content was truncated during local capture. The complete message was still delivered to the Worker."
  }), replyCaptureTruncated && messages.push({
    code: EMAIL_WARNING_CAPTURE_TRUNCATED,
    message: "Displayed reply content was truncated during local capture. The complete reply is available in the local filesystem; see the development log for its path."
  }), c.json({
    ...wrapResponse(zEmailRoutingDetail2.parse(decoded)),
    messages
  });
}
async function findEmailOnPeers(c, basePath, emailId, worker) {
  let params = new URLSearchParams({ email_id: emailId });
  worker !== void 0 && params.set("worker", worker);
  let query = `?${params}`;
  if (worker !== void 0) {
    if (!isLocalWorker(c, worker)) {
      let ownerLookup = await findWorkerOwner(
        c,
        await getPeerUrlsIfAggregating(c),
        worker
      ), owner = ownerLookup.owner;
      if (owner) {
        let response = await fetchFromPeer(owner, `${basePath}${query}`);
        return response !== null ? response : peerUnavailableResponse(worker);
      }
      if (ownerLookup.unavailable)
        return peerUnavailableResponse(worker);
    }
  } else {
    let peerUrls = await getPeerUrlsIfAggregating(c), responses = await Promise.all(
      peerUrls.map((url2) => fetchFromPeer(url2, `${basePath}${query}`))
    ), found = responses.find((response) => response?.ok);
    if (found)
      return found;
    let peerError = responses.find(
      (response) => response !== null && response.status !== 404
    );
    if (peerError !== void 0)
      return peerError;
    if (responses.some((response) => response === null))
      return peerUnavailableResponse();
  }
  return errorResponse(
    404,
    EMAIL_ERROR_NOT_FOUND,
    `Email '${emailId}' not found.`
  );
}
async function getReceivedEmailFromPeers(c, emailId, worker) {
  return findEmailOnPeers(c, "/local/email/routing", emailId, worker);
}
async function deliverTestEmail(c, email3) {
  let { from, to, id, mime: mime2, worker } = email3, deliverUrl = new URL(CorePaths.EMAIL, "http://localhost");
  deliverUrl.searchParams.set("from", from), deliverUrl.searchParams.set("to", to), deliverUrl.searchParams.set("id", id), deliverUrl.searchParams.set("format", "json");
  let targetService = getUserWorkerService(c, worker);
  if (targetService === void 0)
    return;
  let deliverRequest = new Request(deliverUrl, {
    method: "POST",
    body: mime2
  });
  return handleEmail(
    deliverUrl.searchParams,
    deliverRequest,
    targetService,
    worker,
    c.env,
    // Hono's `executionCtx` and workerd's `ExecutionContext` differ only by
    // the `@cloudflare/workers-types` version in scope; `handleEmail` uses
    // only `waitUntil`, which both provide.
    c.executionCtx
  );
}
async function sendTestEmail(c, body, worker) {
  let invalidRequest = validateEmailRequest(body);
  if (invalidRequest !== void 0)
    return errorResponse(400, 1e4, invalidRequest);
  if (worker === void 0)
    return errorResponse(400, 1e4, "A target worker is required.");
  if (!isLocalWorker(c, worker)) {
    let owner = (await findWorkerOwner(c, await getPeerUrlsIfAggregating(c), worker)).owner;
    if (owner) {
      let response2 = await fetchFromPeer(
        owner,
        `/local/email/routing/send?worker=${encodeURIComponent(worker)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      if (response2)
        return response2;
    }
    return errorResponse(
      400,
      EMAIL_ERROR_SEND_FAILED,
      `Worker '${worker}' is not available in this dev session.`
    );
  }
  let from = extractAddressFromString(body.from), to = extractAddressFromString(body.to[0] ?? "");
  if (!to)
    return errorResponse(400, 1e4, "At least one recipient is required.");
  let messageId = synthesizeMessageId(from), id = messageIdToStorageId(messageId), mime2 = buildMimeMessage(body, messageId), response = await deliverTestEmail(c, { from, to, id, mime: mime2, worker });
  if (response === void 0)
    return errorResponse(
      400,
      EMAIL_ERROR_SEND_FAILED,
      `Worker '${worker}' is not available in this dev session.`
    );
  if (response.status >= 400 && response.status < 500) {
    let message = await response.text();
    return errorResponse(
      400,
      EMAIL_ERROR_SEND_FAILED,
      message || "Failed to deliver test email."
    );
  }
  if (!(response.headers.get("Content-Type") ?? "").includes("application/json"))
    return await response.text(), errorResponse(
      400,
      EMAIL_ERROR_SEND_FAILED,
      `Worker '${worker}' does not export an email() handler.`
    );
  let result = zEmailHandlerResult.parse(await response.json());
  return result.events.length === 1 && result.events[0]?.type === "unhandled" ? errorResponse(
    400,
    EMAIL_ERROR_SEND_FAILED,
    `Worker '${worker}' does not export an email() handler.`
  ) : c.json(
    wrapResponse({
      messageId,
      outcome: result.outcome,
      ...result.rejectReason !== void 0 ? { rejectReason: result.rejectReason } : {}
    })
  );
}
async function listSentEmails(c, query) {
  return listEmails(c, query, sentEmailListDescriptor);
}
async function getSentEmail(c, emailId, worker) {
  using email3 = await getEmailStore(c).findSent(messageIdToStorageId(emailId), worker);
  if (!email3 || worker !== void 0 && email3.worker !== worker)
    return getSentEmailFromPeers(c, emailId, worker);
  let { captureTruncated, ...storedEmail } = email3;
  return c.json({
    ...wrapResponse(zEmailSendingDetail2.parse(storedEmail)),
    messages: captureTruncated ? [
      {
        code: EMAIL_WARNING_CAPTURE_TRUNCATED,
        message: "Displayed sent email content was truncated during local capture. The complete email is available in the local filesystem; see the development log for its path."
      }
    ] : []
  });
}
async function getSentEmailFromPeers(c, emailId, worker) {
  return findEmailOnPeers(c, "/local/email/sending", emailId, worker);
}

// src/workers/local-explorer/resources/kv.ts
var KV_ERROR_KEY_NOT_FOUND = 10009, KV_ERROR_NAMESPACE_NOT_FOUND = 10013;
function getKVBinding(env2, namespace_id) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.kv[namespace_id];
  return bindingName ? env2[bindingName] : null;
}
async function findKVNamespaceOwner(c, namespaceId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, "/storage/kv/namespaces");
      return response?.ok && (await response.json()).result?.some((ns) => ns.id === namespaceId) ? url2 : null;
    })
  )).find((url2) => url2 !== null) ?? null;
}
function getLocalKVNamespaces(env2) {
  let kvBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.kv;
  return Object.entries(kvBindingMap).map(([id, bindingName]) => {
    let title = bindingName.split(":").pop() || bindingName;
    return {
      id,
      title
    };
  });
}
async function listKVNamespaces(c, query) {
  let direction = query.direction ?? "asc", order = query.order ?? "id", localNamespaces = getLocalKVNamespaces(c.env), aggregatedNamespaces = await aggregateListResults(
    c,
    localNamespaces,
    "/storage/kv/namespaces"
  ), localIds = new Set(localNamespaces.map((ns) => ns.id)), allNamespaces = aggregatedNamespaces.filter(
    (ns, index) => index < localNamespaces.length || !localIds.has(ns.id)
  );
  return allNamespaces.sort((a, b) => {
    let aVal = order === "id" ? a.id : a.title, bVal = order === "id" ? b.id : b.title, cmp = aVal.localeCompare(bVal);
    return direction === "asc" ? cmp : -cmp;
  }), c.json({
    ...wrapResponse(allNamespaces),
    result_info: {
      count: allNamespaces.length
    }
  });
}
async function listKVKeys(c, query) {
  let namespace_id = c.req.param("namespace_id");
  if (!namespace_id)
    return errorResponse(400, 1e4, "Missing namespace_id parameter");
  let cursor = query.cursor, limit = query.limit, prefix = query.prefix, kv = getKVBinding(c.env, namespace_id);
  if (kv)
    return executeListKeys(c, kv, { cursor, limit, prefix });
  let ownerMiniflare = await findKVNamespaceOwner(c, namespace_id);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    cursor && params.set("cursor", cursor), limit !== void 0 && params.set("limit", String(limit)), prefix && params.set("prefix", prefix);
    let queryString = params.toString(), path = `/storage/kv/namespaces/${encodeURIComponent(
      namespace_id
    )}/keys${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "list keys: 'namespace not found'"
  );
}
async function executeListKeys(c, kv, options) {
  let listResult = await kv.list(options), resultCursor = "cursor" in listResult ? listResult.cursor ?? "" : "";
  return c.json({
    ...wrapResponse(
      listResult.keys.map((key) => ({
        name: key.name,
        expiration: key.expiration,
        metadata: key.metadata
      }))
    ),
    result_info: {
      count: listResult.keys.length,
      cursor: resultCursor
    }
  });
}
async function getKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv) {
    let value = await kv.get(keyName, { type: "arrayBuffer" });
    return value === null ? errorResponse(404, KV_ERROR_KEY_NOT_FOUND, "get: 'key not found'") : new Response(value);
  }
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "get: 'namespace not found'"
  );
}
async function putKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv)
    return executePutKVValue(c, kv, keyName);
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let body = await c.req.arrayBuffer(), response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": c.req.header("content-type") || "application/octet-stream"
        },
        body
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "put: 'namespace not found'"
  );
}
async function executePutKVValue(c, kv, key_name) {
  let value, metadata;
  if ((c.req.header("content-type") || "").includes("multipart/form-data")) {
    let formData = await c.req.formData(), formValue = formData.get("value"), formMetadata = formData.get("metadata");
    if (formValue instanceof Blob)
      value = await formValue.arrayBuffer();
    else if (typeof formValue == "string")
      value = formValue;
    else return formValue === null ? errorResponse(400, 10001, "Missing value field") : errorResponse(400, 10001, "Unsupported value type in form data");
    if (formMetadata instanceof Blob) {
      let metadataText = await formMetadata.text();
      try {
        metadata = JSON.parse(metadataText);
      } catch {
        return errorResponse(400, 10001, "Invalid metadata JSON");
      }
    } else if (typeof formMetadata == "string")
      try {
        metadata = JSON.parse(formMetadata);
      } catch {
        return errorResponse(400, 10001, "Invalid metadata JSON");
      }
  } else
    value = await c.req.arrayBuffer();
  let options = {};
  return metadata && (options.metadata = metadata), await kv.put(key_name, value, options), c.json(wrapResponse({}));
}
async function deleteKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv)
    return await kv.delete(keyName), c.json(wrapResponse({}));
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`,
      { method: "DELETE" }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "remove key: 'namespace not found'"
  );
}
async function bulkGetKVValues(c, body) {
  let namespace_id = c.req.param("namespace_id");
  if (!namespace_id)
    return errorResponse(400, 1e4, "Missing namespace_id parameter");
  let { keys } = body, kv = getKVBinding(c.env, namespace_id);
  if (kv) {
    let results = await kv.get(keys), values = {};
    for (let key of keys)
      values[key] = results?.get(key) ?? null;
    return c.json(wrapResponse({ values }));
  }
  let ownerMiniflare = await findKVNamespaceOwner(c, namespace_id);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(namespace_id)}/bulk/get`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "bulk get keys: 'namespace not found'"
  );
}

// src/workers/local-explorer/resources/observability.ts
var OBSERVABILITY_NOT_ENABLED = 10130, OBSERVABILITY_COLLECTOR_ERROR = 10131;
async function proxyToCollector(env2, path, init2) {
  let collector = env2[CoreBindings.SERVICE_OBSERVABILITY_COLLECTOR];
  if (!collector)
    return errorResponse(
      404,
      OBSERVABILITY_NOT_ENABLED,
      "Local observability is not enabled for this dev session."
    );
  let response = await collector.fetch(`http://collector${path}`, init2);
  if (!response.ok) {
    let message = `Observability collector returned ${response.status}`;
    try {
      let body = await response.json();
      body && typeof body.error == "string" && (message = body.error);
    } catch {
    }
    let status = response.status === 400 ? 400 : 502;
    return errorResponse(status, OBSERVABILITY_COLLECTOR_ERROR, message);
  }
  return Response.json(wrapResponse(await response.json()));
}
async function runQuery(c, body) {
  return proxyToCollector(c.env, "/query", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sql: body.sql, params: body.params })
  });
}
async function clearTraces(c) {
  return proxyToCollector(c.env, "/clear", { method: "POST" });
}

// src/workers/local-explorer/resources/r2.ts
var R2_ERROR_BUCKET_NOT_FOUND = 10006, R2_ERROR_OBJECT_NOT_FOUND = 10007;
function getR2Binding(env2, bucket_name) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.r2[bucket_name];
  return bindingName ? env2[bindingName] : null;
}
async function findR2BucketOwner(c, bucketName) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, "/r2/buckets");
      return response?.ok && (await response.json()).result?.buckets?.some((b) => b.name === bucketName) ? url2 : null;
    })
  )).find((url2) => url2 !== null) ?? null;
}
function getLocalR2Buckets(env2) {
  let r2BindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.r2;
  return Object.entries(r2BindingMap).map(([bucketName]) => ({
    name: bucketName
  }));
}
async function listR2Buckets(c) {
  let localBuckets = getLocalR2Buckets(c.env), aggregatedBuckets = await aggregateListResults(c, localBuckets, "/r2/buckets", "buckets"), localNames = new Set(localBuckets.map((b) => b.name)), allBuckets = aggregatedBuckets.filter(
    (b, index) => index < localBuckets.length || !localNames.has(b.name)
  );
  return allBuckets.sort((a, b) => a.name.localeCompare(b.name)), c.json({
    ...wrapResponse({ buckets: allBuckets }),
    result_info: {
      count: allBuckets.length
    }
  });
}
async function listR2Objects(c, bucket_name, query) {
  let prefix = query.prefix, delimiter = query.delimiter, cursor = query.cursor, limit = query.per_page, r2 = getR2Binding(c.env, bucket_name);
  if (r2)
    return executeListObjects(r2, { prefix, delimiter, cursor, limit }, c);
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    prefix && params.set("prefix", prefix), delimiter && params.set("delimiter", delimiter), cursor && params.set("cursor", cursor), limit !== void 0 && params.set("per_page", String(limit));
    let queryString = params.toString(), path = `/r2/buckets/${encodeURIComponent(bucket_name)}/objects${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "list objects: 'bucket not found'"
  );
}
async function executeListObjects(r2, options, c) {
  let listResult = await r2.list(options), objects = listResult.objects.map((obj) => ({
    key: obj.key,
    etag: obj.etag,
    size: obj.size,
    last_modified: obj.uploaded.toISOString(),
    http_metadata: obj.httpMetadata ? {
      contentType: obj.httpMetadata.contentType,
      contentLanguage: obj.httpMetadata.contentLanguage,
      contentDisposition: obj.httpMetadata.contentDisposition,
      contentEncoding: obj.httpMetadata.contentEncoding,
      cacheControl: obj.httpMetadata.cacheControl,
      cacheExpiry: obj.httpMetadata.cacheExpiry?.toISOString()
    } : void 0,
    custom_metadata: obj.customMetadata
  }));
  return c.json({
    ...wrapResponse(objects),
    result_info: {
      delimited: listResult.delimitedPrefixes,
      cursor: listResult.truncated ? listResult.cursor : void 0,
      is_truncated: listResult.truncated ? "true" : "false"
    }
  });
}
async function getR2Object(c, bucket_name, object_key, headers) {
  let metadataOnly = headers["cf-metadata-only"] === "true", r2 = getR2Binding(c.env, bucket_name);
  if (r2) {
    if (metadataOnly) {
      let obj2 = await r2.head(object_key);
      return obj2 === null ? errorResponse(
        404,
        R2_ERROR_OBJECT_NOT_FOUND,
        "head: 'object not found'"
      ) : c.json(
        wrapResponse({
          key: obj2.key,
          etag: obj2.etag,
          last_modified: obj2.uploaded.toISOString(),
          size: obj2.size,
          http_metadata: obj2.httpMetadata ? {
            contentType: obj2.httpMetadata.contentType,
            contentLanguage: obj2.httpMetadata.contentLanguage,
            contentDisposition: obj2.httpMetadata.contentDisposition,
            contentEncoding: obj2.httpMetadata.contentEncoding,
            cacheControl: obj2.httpMetadata.cacheControl,
            cacheExpiry: obj2.httpMetadata.cacheExpiry?.toISOString()
          } : void 0,
          custom_metadata: obj2.customMetadata
        })
      );
    }
    let obj = await r2.get(object_key);
    if (obj === null)
      return errorResponse(
        404,
        R2_ERROR_OBJECT_NOT_FOUND,
        "get: 'object not found'"
      );
    let responseHeaders = new Headers();
    if (obj.httpMetadata?.contentType && responseHeaders.set("Content-Type", obj.httpMetadata.contentType), responseHeaders.set("Content-Length", String(obj.size)), responseHeaders.set("ETag", obj.etag), responseHeaders.set("Last-Modified", obj.uploaded.toUTCString()), obj.customMetadata)
      for (let [key, value] of Object.entries(obj.customMetadata))
        responseHeaders.set(`X-R2-Custom-Metadata-${key}`, value);
    return new Response(obj.body, { headers: responseHeaders });
  }
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let route = `/r2/buckets/${encodeURIComponent(
      bucket_name
    )}/objects/${encodeURIComponent(object_key)}`, response = await fetchFromPeer(ownerMiniflare, route, {
      headers: metadataOnly ? { "cf-metadata-only": "true" } : void 0
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "get: 'bucket not found'"
  );
}
async function putR2Object(c, bucket_name, object_key, headers) {
  let r2 = getR2Binding(c.env, bucket_name);
  if (r2) {
    let body = await c.req.arrayBuffer(), contentType = headers["content-type"], customMetadataHeader = headers["cf-r2-custom-metadata"], options = {};
    if (contentType && (options.httpMetadata = { contentType }), customMetadataHeader)
      try {
        options.customMetadata = JSON.parse(customMetadataHeader);
      } catch {
        return errorResponse(400, 10001, "Invalid custom metadata JSON");
      }
    let obj = await r2.put(object_key, body, options);
    return c.json(
      wrapResponse({
        key: obj.key,
        etag: obj.etag,
        size: obj.size,
        version: obj.version
      })
    );
  }
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let body = await c.req.arrayBuffer(), fetchHeaders = {};
    headers["content-type"] && (fetchHeaders["content-type"] = headers["content-type"]), headers["cf-r2-custom-metadata"] && (fetchHeaders["cf-r2-custom-metadata"] = headers["cf-r2-custom-metadata"]);
    let path = `/r2/buckets/${encodeURIComponent(
      bucket_name
    )}/objects/${encodeURIComponent(object_key)}`, response = await fetchFromPeer(ownerMiniflare, path, {
      method: "PUT",
      headers: fetchHeaders,
      body
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "put: 'bucket not found'"
  );
}
async function deleteR2Objects(c, bucket_name, body) {
  let keys = body;
  if (keys.length === 0)
    return errorResponse(
      400,
      10001,
      "Request body must be a non-empty array of keys"
    );
  let r2 = getR2Binding(c.env, bucket_name);
  if (r2)
    return await r2.delete(keys), c.json(wrapResponse(keys.map((key) => ({ key }))));
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let path = `/r2/buckets/${encodeURIComponent(bucket_name)}/objects`, response = await fetchFromPeer(ownerMiniflare, path, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(keys)
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "delete: 'bucket not found'"
  );
}

// src/workers/local-explorer/resources/workflows.ts
var WORKFLOW_ERROR_NOT_FOUND = 10501, EVT = {
  WORKFLOW_QUEUED: 0,
  WORKFLOW_START: 1,
  WORKFLOW_SUCCESS: 2,
  WORKFLOW_FAILURE: 3,
  WORKFLOW_TERMINATED: 4,
  STEP_START: 5,
  STEP_SUCCESS: 6,
  STEP_FAILURE: 7,
  SLEEP_START: 8,
  SLEEP_COMPLETE: 9,
  ATTEMPT_START: 10,
  ATTEMPT_SUCCESS: 11,
  ATTEMPT_FAILURE: 12,
  WAIT_START: 14,
  WAIT_COMPLETE: 15,
  WAIT_TIMED_OUT: 16
}, STATUS_COUNTS_TTL_MS = 3e4, statusCountsCache = /* @__PURE__ */ new Map();
async function getStatusCounts(workflowName, sqliteFiles, engineNamespace) {
  let cached2 = statusCountsCache.get(workflowName), now = Date.now();
  if (cached2 && cached2.fileCount === sqliteFiles.length && now - cached2.timestamp < STATUS_COUNTS_TTL_MS)
    return cached2.counts;
  let counts = {};
  if (engineNamespace) {
    let results = await Promise.allSettled(
      sqliteFiles.map(async (entry) => {
        let hexId = entry.name.replace(/\.sqlite$/, ""), stubId = engineNamespace.idFromString(hexId), metadata = await engineNamespace.get(stubId).getInstanceMetadata();
        return STATUS_NAMES[metadata.status] ?? "unknown";
      })
    );
    for (let result of results) {
      let statusName = result.status === "fulfilled" ? result.value : "unknown";
      counts[statusName] = (counts[statusName] ?? 0) + 1;
    }
  }
  return statusCountsCache.set(workflowName, {
    counts,
    fileCount: sqliteFiles.length,
    timestamp: now
  }), counts;
}
var STATUS_NAMES = {
  0: "queued",
  1: "running",
  2: "paused",
  3: "errored",
  4: "terminated",
  5: "complete",
  6: "waitingForPause",
  7: "waiting"
};
function getEngineNamespace(env2, workflowName) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  return info ? env2[info.engineBinding] : null;
}
function getWorkflowBinding(env2, workflowName) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  return info ? env2[info.binding] : null;
}
function getLocalWorkflows(env2) {
  let workflowBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.workflows;
  return Object.values(workflowBindingMap).map((info) => ({
    name: info.name,
    class_name: info.className,
    script_name: info.scriptName
  }));
}
var workflowOwnerCache = /* @__PURE__ */ new Map(), OWNER_CACHE_TTL_MS = 3e4;
async function findWorkflowOwner(c, workflowName) {
  let cached2 = workflowOwnerCache.get(workflowName);
  if (cached2 && Date.now() - cached2.timestamp < OWNER_CACHE_TTL_MS)
    return cached2.url;
  let peerUrls = await getPeerUrlsIfAggregating(c);
  if (peerUrls.length === 0)
    return null;
  let owner = (await Promise.all(
    peerUrls.map(async (url2) => {
      let response = await fetchFromPeer(url2, "/workflows");
      return response?.ok && (await response.json()).result?.some((wf) => wf.name === workflowName) ? url2 : null;
    })
  )).find((url2) => url2 !== null) ?? null;
  return workflowOwnerCache.set(workflowName, { url: owner, timestamp: Date.now() }), owner;
}
async function listWorkflows(c) {
  let localWorkflows = getLocalWorkflows(c.env), aggregatedWorkflows = await aggregateListResults(
    c,
    localWorkflows,
    "/workflows"
  ), seen = /* @__PURE__ */ new Set(), allWorkflows = aggregatedWorkflows.filter((wf) => seen.has(wf.name) ? !1 : (seen.add(wf.name), !0));
  return c.json({
    ...wrapResponse(allWorkflows),
    result_info: { count: allWorkflows.length }
  });
}
async function getWorkflowDetails(c, workflowName) {
  let info = c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  if (!info) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}`
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  let statusCounts = {
    complete: 0,
    errored: 0,
    paused: 0,
    queued: 0,
    running: 0,
    terminated: 0,
    waiting: 0,
    waitingForPause: 0
  };
  if (c.env.MINIFLARE_LOOPBACK !== void 0) {
    let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
    if (response.ok) {
      let sqliteFiles = (await response.json()).filter(
        (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
      ), engineNamespace = getEngineNamespace(c.env, workflowName), counts = await getStatusCounts(
        workflowName,
        sqliteFiles,
        engineNamespace
      );
      statusCounts = { ...statusCounts, ...counts };
    }
  }
  return c.json(
    wrapResponse({
      name: info.name,
      class_name: info.className,
      script_name: info.scriptName,
      instances: statusCounts
    })
  );
}
async function deleteWorkflow(c, workflowName) {
  if (!c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName])
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`;
  return await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl, { method: "DELETE" }), statusCountsCache.delete(workflowName), c.json(wrapResponse({ status: "ok", success: !0 }));
}
async function listWorkflowInstances(c, workflowName, query) {
  let { page = 1, per_page: perPage = 25, status: statusFilter } = query;
  if (c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName])
    return executeListWorkflowInstances(c, workflowName, {
      page,
      perPage,
      statusFilter
    });
  let ownerMiniflare = await findWorkflowOwner(c, workflowName);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    params.set("page", String(page)), params.set("per_page", String(perPage)), statusFilter && params.set("status", statusFilter);
    let peerPath = `/workflows/${encodeURIComponent(workflowName)}/instances?${params.toString()}`, response = await fetchFromPeer(ownerMiniflare, peerPath);
    if (response)
      return response;
  }
  return errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow '${workflowName}' not found.`
  );
}
async function executeListWorkflowInstances(c, workflowName, options) {
  let { page, perPage, statusFilter } = options;
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
  if (!response.ok)
    return response.status === 404 ? c.json({
      ...wrapResponse([]),
      result_info: {
        page: 1,
        per_page: perPage,
        total_count: 0,
        total_pages: 0
      }
    }) : errorResponse(
      500,
      10001,
      `Failed to read workflow storage: ${response.statusText}`
    );
  let sqliteFiles = (await response.json()).filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
  ).sort((a, b) => b.birthtimeMs - a.birthtimeMs), engineNamespace = getEngineNamespace(c.env, workflowName), statusCounts = await getStatusCounts(
    workflowName,
    sqliteFiles,
    engineNamespace
  );
  async function resolveInstance(entry) {
    let hexId = entry.name.replace(/\.sqlite$/, "");
    if (!engineNamespace)
      return {
        id: hexId,
        status: void 0,
        created_on: void 0
      };
    try {
      let stubId = engineNamespace.idFromString(hexId), metadata = await engineNamespace.get(stubId).getInstanceMetadata();
      return {
        id: metadata.instanceId || hexId,
        status: STATUS_NAMES[metadata.status] ?? "unknown",
        created_on: metadata.createdOn || void 0
      };
    } catch {
      return { id: hexId, status: void 0, created_on: void 0 };
    }
  }
  let instances, totalCount;
  if (statusFilter) {
    let filtered = (await Promise.all(sqliteFiles.map(resolveInstance))).filter((inst) => inst.status === statusFilter);
    totalCount = filtered.length;
    let offset = (page - 1) * perPage;
    instances = filtered.slice(offset, offset + perPage);
  } else {
    totalCount = sqliteFiles.length;
    let offset = (page - 1) * perPage, pageFiles = sqliteFiles.slice(offset, offset + perPage);
    instances = await Promise.all(pageFiles.map(resolveInstance));
  }
  let totalPages = Math.max(1, Math.ceil(totalCount / perPage)), cleanInstances = instances.map(({ id, status, created_on }) => ({
    id,
    ...status !== void 0 ? { status } : {},
    ...created_on ? { created_on } : {}
  }));
  return c.json({
    ...wrapResponse(cleanInstances),
    result_info: {
      page,
      per_page: perPage,
      total_count: totalCount,
      total_pages: totalPages,
      status_counts: statusCounts
    }
  });
}
async function getWorkflowInstanceDetails(c, workflowName, instanceId) {
  let engineNamespace = getEngineNamespace(c.env, workflowName);
  if (engineNamespace)
    return executeGetInstanceDetails(engineNamespace, instanceId, c);
  let ownerMiniflare = await findWorkflowOwner(c, workflowName);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}`
    );
    if (response)
      return response;
  }
  return errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow '${workflowName}' not found.`
  );
}
async function executeGetInstanceDetails(engineNamespace, instanceId, c) {
  try {
    let stubId = /^[0-9a-f]{64}$/i.test(instanceId) ? engineNamespace.idFromString(instanceId) : engineNamespace.idFromName(instanceId), stub = engineNamespace.get(stubId), metadata = await stub.getInstanceMetadata();
    if (!metadata.instanceId)
      return errorResponse(
        404,
        WORKFLOW_ERROR_NOT_FOUND,
        `Workflow instance '${instanceId}' not found.`
      );
    let logs = await stub.readDetailedLogs(), queuedLog = logs.find((l) => l.event === EVT.WORKFLOW_QUEUED), startLog = logs.find((l) => l.event === EVT.WORKFLOW_START), successLog = logs.find((l) => l.event === EVT.WORKFLOW_SUCCESS), failureLog = logs.find((l) => l.event === EVT.WORKFLOW_FAILURE), terminatedLog = logs.find((l) => l.event === EVT.WORKFLOW_TERMINATED), endLog = successLog ?? failureLog ?? terminatedLog, stepGroups = /* @__PURE__ */ new Map();
    for (let log of logs)
      if (log.group) {
        let group = stepGroups.get(log.group) ?? [];
        group.push(log), stepGroups.set(log.group, group);
      }
    let steps = [];
    for (let [, groupLogs] of stepGroups) {
      let name = groupLogs[0].target ?? "", stepStart = groupLogs.find((l) => l.event === EVT.STEP_START), stepSuccess = groupLogs.find((l) => l.event === EVT.STEP_SUCCESS), stepFailure = groupLogs.find((l) => l.event === EVT.STEP_FAILURE), sleepStart = groupLogs.find((l) => l.event === EVT.SLEEP_START), sleepComplete = groupLogs.find(
        (l) => l.event === EVT.SLEEP_COMPLETE
      ), waitStart = groupLogs.find((l) => l.event === EVT.WAIT_START), waitComplete = groupLogs.find((l) => l.event === EVT.WAIT_COMPLETE), waitTimedOut = groupLogs.find(
        (l) => l.event === EVT.WAIT_TIMED_OUT
      );
      if (sleepStart)
        steps.push({
          name,
          start: sleepStart.timestamp,
          end: sleepComplete?.timestamp ?? null,
          finished: !!sleepComplete,
          type: "sleep",
          error: null
        });
      else if (waitStart) {
        let waitEnd = waitComplete ?? waitTimedOut, waitError = waitTimedOut?.metadata, waitMeta = waitComplete?.metadata;
        steps.push({
          name,
          start: waitStart.timestamp,
          end: waitEnd?.timestamp ?? null,
          finished: !!waitEnd,
          type: "waitForEvent",
          error: waitError ? {
            name: waitError.name ?? "Error",
            message: waitError.message ?? ""
          } : null,
          output: waitComplete ? {
            type: waitMeta?.type ?? "",
            payload: waitMeta?.payload ?? {},
            timestamp: waitMeta?.timestamp ?? null
          } : null
        });
      } else if (stepStart) {
        let attempts = [], attemptStarts = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_START
        ), attemptSuccesses = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_SUCCESS
        ), attemptFailures = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_FAILURE
        );
        for (let aStart of attemptStarts) {
          let attemptNum = aStart.metadata.attempt, aSuccess = attemptSuccesses.find(
            (l) => l.metadata.attempt === attemptNum
          ), aFailure = attemptFailures.find(
            (l) => l.metadata.attempt === attemptNum
          ), aEnd = aSuccess ?? aFailure;
          attempts.push({
            start: aStart.timestamp,
            end: aEnd?.timestamp ?? null,
            success: aSuccess ? !0 : aFailure ? !1 : null,
            error: aFailure ? aFailure.metadata.error ?? null : null
          });
        }
        let stepEnd = stepSuccess ?? stepFailure;
        steps.push({
          name,
          start: stepStart.timestamp,
          end: stepEnd?.timestamp ?? null,
          success: stepSuccess ? !0 : stepFailure ? !1 : null,
          type: "step",
          output: stepSuccess?.metadata?.result ?? void 0,
          config: stepStart.metadata?.config ?? null,
          attempts
        });
      }
    }
    return c.json(
      wrapResponse({
        status: STATUS_NAMES[metadata.status] ?? "unknown",
        params: queuedLog?.metadata?.params ?? null,
        queued: queuedLog?.timestamp ?? null,
        start: startLog?.timestamp ?? null,
        end: endLog?.timestamp ?? null,
        output: successLog?.metadata?.result ?? null,
        error: failureLog ? failureLog.metadata.error ?? null : null,
        steps,
        step_count: steps.length
      })
    );
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Instance not found";
    return message === "instance.not_found" || message === "Engine was never started" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}
async function createWorkflowInstance(c, workflowName) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await c.req.text()
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let body = {};
    try {
      body = await c.req.json();
    } catch {
    }
    let result = await workflow.create({
      id: body.id,
      params: body.params
    });
    return statusCountsCache.delete(workflowName), c.json(wrapResponse({ id: result.id }));
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Failed to create instance";
    return errorResponse(500, 10001, message);
  }
}
async function changeWorkflowInstanceStatus(c, workflowName, instanceId, body) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let { action } = body;
    if (!["pause", "resume", "restart", "terminate"].includes(action))
      return errorResponse(
        400,
        10001,
        `Invalid action '${action}'. Must be one of: pause, resume, restart, terminate.`
      );
    if (body.rollback !== void 0 && action !== "terminate")
      return errorResponse(
        400,
        10001,
        "'rollback' is only valid when terminating."
      );
    let handle = await workflow.get(instanceId);
    switch (action) {
      case "pause":
        await handle.pause();
        break;
      case "resume":
        await handle.resume();
        break;
      case "restart": {
        if (body.from && !body.from.name)
          return errorResponse(
            400,
            10001,
            "'from.name' is required when restarting from a specific step."
          );
        let opts = body.from ? { from: body.from } : void 0;
        await handle.restart(opts);
        break;
      }
      case "terminate":
        await handle.terminate(
          body.rollback === !0 ? { rollback: !0 } : void 0
        );
        break;
    }
    return statusCountsCache.delete(workflowName), c.json(wrapResponse({ success: !0 }));
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Failed to change status";
    return message === "instance.not_found" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}
async function deleteWorkflowInstances(c, workflowName, body) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/batch/delete`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let result = await workflow.deleteBatch(body.instances);
    return statusCountsCache.delete(workflowName), c.json(wrapResponse(result));
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Failed to delete instances";
    return errorResponse(500, 10001, message);
  }
}
async function deleteWorkflowInstance(c, workflowName, instanceId) {
  let engineNamespace = getEngineNamespace(c.env, workflowName);
  if (!engineNamespace) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response2 = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}`,
        { method: "DELETE" }
      );
      if (response2)
        return response2;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let hexId = /^[0-9a-f]{64}$/i.test(instanceId) ? instanceId : engineNamespace.idFromName(instanceId).toString(), encodedName = encodeURIComponent(workflowName), encodedHexId = encodeURIComponent(hexId), loopbackUrl = `http://localhost/core/workflow-storage/${encodedName}/${encodedHexId}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl, {
    method: "DELETE"
  });
  return response.ok ? (statusCountsCache.delete(workflowName), c.json(wrapResponse({ success: !0 }))) : response.status === 404 ? errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow instance '${instanceId}' not found.`
  ) : errorResponse(500, 10001, "Failed to delete instance");
}
async function sendWorkflowInstanceEvent(c, workflowName, instanceId, eventType) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}/events/${encodeURIComponent(eventType)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await c.req.text()
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let payload;
    try {
      payload = await c.req.json();
    } catch {
    }
    return await (await workflow.get(
      instanceId
    )).sendEvent({ payload, type: eventType }), c.json(wrapResponse({ success: !0 }));
  } catch (error51) {
    let message = error51 instanceof Error ? error51.message : "Failed to send event";
    return message === "instance.not_found" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}

// src/workers/local-explorer/route-names.ts
var ROUTE_PATTERNS = [
  [/^\/storage\/kv\/namespaces\/[^/]+\/bulk\/get$/, "kv.bulk_get"],
  [/^\/storage\/kv\/namespaces\/[^/]+\/values\/[^/]+$/, "kv.value"],
  [/^\/storage\/kv\/namespaces\/[^/]+\/keys$/, "kv.keys"],
  [/^\/storage\/kv\/namespaces$/, "kv.namespaces"],
  [/^\/d1\/database\/[^/]+\/raw$/, "d1.query"],
  [/^\/d1\/database$/, "d1.databases"],
  [/^\/workers\/durable_objects\/namespaces\/[^/]+\/query$/, "do.query"],
  [/^\/workers\/durable_objects\/namespaces\/[^/]+\/objects$/, "do.objects"],
  [/^\/workers\/durable_objects\/namespaces$/, "do.namespaces"],
  [/^\/r2\/buckets\/[^/]+\/objects\/[^/]+$/, "r2.object"],
  [/^\/r2\/buckets\/[^/]+\/objects$/, "r2.objects"],
  [/^\/r2\/buckets\/[^/]+$/, "r2.bucket"],
  [/^\/r2\/buckets$/, "r2.buckets"],
  [
    /^\/workflows\/[^/]+\/instances\/batch\/delete$/,
    "workflows.instances.batch_delete"
  ],
  [
    /^\/workflows\/[^/]+\/instances\/[^/]+\/events\/[^/]+$/,
    "workflows.instance.event"
  ],
  [
    /^\/workflows\/[^/]+\/instances\/[^/]+\/status$/,
    "workflows.instance.status"
  ],
  [/^\/workflows\/[^/]+\/instances\/[^/]+$/, "workflows.instance"],
  [/^\/workflows\/[^/]+\/instances$/, "workflows.instances"],
  [/^\/workflows\/[^/]+$/, "workflows.details"],
  [/^\/workflows$/, "workflows.list"],
  [/^\/local\/observability\/query$/, "observability.query"],
  [/^\/local\/observability\/clear$/, "observability.clear"],
  [/^\/local\/email\/routing\/send$/, "email.routing.send"],
  [/^\/local\/email\/routing$/, "email.routing.list"],
  [/^\/local\/email\/sending$/, "email.sending.list"],
  [/^\/local\/workers$/, "local.workers"]
];
function getRouteName(path) {
  let apiPath = path.replace(/^\/cdn-cgi\/local\/explorer\/api/, "");
  for (let [pattern, name] of ROUTE_PATTERNS)
    if (pattern.test(apiPath))
      return name;
  return "unknown";
}

// src/workers/local-explorer/telemetry.ts
var SPARROW_URL = "https://sparrow.cloudflare.com";
function sendTelemetryEvent(deviceId, event, properties) {
  let body = {
    event,
    deviceId,
    timestamp: Date.now(),
    properties
  };
  return fetch(`${SPARROW_URL}/api/v1/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Sparrow-Source-Key": "50598e014ed44c739ec8074fdc16057c"
    },
    body: JSON.stringify(body)
  }).then(
    () => {
    },
    // fail silently
    () => {
    }
  );
}
async function telemetryMiddleware(c, next) {
  if (await next(), !c.res.ok || !c.env.MINIFLARE_TELEMETRY_CONFIG.enabled || // Skip telemetry for aggregation calls between instances
  c.req.raw.headers.has(NO_AGGREGATE_HEADER) || !c.env.MINIFLARE_TELEMETRY_CONFIG.deviceId)
    return;
  let route = `${getRouteName(c.req.path)}.${c.req.method.toLowerCase()}`, properties = {
    userAgent: c.req.header("User-Agent") ?? "unknown"
  };
  if (route === "local.workers.get")
    try {
      let workers = (await c.res.clone().json()).result ?? [], kvCount = 0, d1Count = 0, r2Count = 0, doCount = 0, workflowsCount = 0;
      for (let worker of workers)
        worker.bindings && (kvCount += worker.bindings.kv?.length ?? 0, d1Count += worker.bindings.d1?.length ?? 0, r2Count += worker.bindings.r2?.length ?? 0, doCount += worker.bindings.do?.length ?? 0, workflowsCount += worker.bindings.workflows?.length ?? 0);
      properties.workerCount = workers.length, properties.kvCount = kvCount, properties.d1Count = d1Count, properties.r2Count = r2Count, properties.doCount = doCount, properties.workflowsCount = workflowsCount;
    } catch {
    }
  let telemetryPromise = sendTelemetryEvent(
    c.env.MINIFLARE_TELEMETRY_CONFIG.deviceId,
    `localapi.${route}`,
    properties
  );
  c.executionCtx.waitUntil(telemetryPromise);
}

// src/workers/local-explorer/explorer.worker.ts
var EXPLORER_API_PATH2 = `${CorePaths.EXPLORER}/api`, app = new Hono2().basePath(CorePaths.EXPLORER);
app.onError((err) => errorResponse(500, 1e4, err.message));
app.use("/api/*", async (c, next) => {
  let origin = c.req.header("Origin");
  if (c.req.method === "OPTIONS")
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin ?? "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, cf-metadata-only, cf-r2-custom-metadata",
        "Access-Control-Max-Age": "86400"
      }
    });
  await next(), origin && c.res.headers.set("Access-Control-Allow-Origin", origin);
});
app.use("/api/*", telemetryMiddleware);
function getContentType(filePath) {
  let contentType = import_mime3.default.getType(filePath);
  return contentType?.startsWith("text/") && !contentType.includes("charset") && (contentType = `${contentType}; charset=utf-8`), contentType || "application/octet-stream";
}
app.get("/*", async (c, next) => {
  if (c.req.path.startsWith(EXPLORER_API_PATH2))
    return next();
  let assetPath = c.req.path.replace(CorePaths.EXPLORER, "") || "/index.html";
  assetPath === "/" && (assetPath = "/index.html");
  let response = await c.env.MINIFLARE_EXPLORER_DISK.fetch(
    new URL(assetPath, "http://placeholder")
  );
  if (response.ok) {
    let contentType = getContentType(assetPath);
    return new Response(response.body, {
      headers: { "Content-Type": contentType }
    });
  }
  let indexResponse = await c.env.MINIFLARE_EXPLORER_DISK.fetch(
    new URL("index.html", "http://placeholder")
  );
  return indexResponse.ok ? new Response(indexResponse.body, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  }) : c.notFound();
});
app.get("/api", (c) => c.json(openapi_local_default));
app.get(
  "/api/storage/kv/namespaces",
  // The query params are optional, so the whole schema is wrapped in an optional,
  // but hono's validator will always receive an object.
  // This just unwraps it so we can validate the inner schema.
  // The inner schema has all the individual params as optional
  validateQuery(zWorkersKvNamespaceListNamespacesData.shape.query.unwrap()),
  (c) => listKVNamespaces(c, c.req.valid("query"))
);
app.get(
  "/api/storage/kv/namespaces/:namespace_id/keys",
  validateQuery(
    zWorkersKvNamespaceListANamespaceSKeysData.shape.query.unwrap()
  ),
  (c) => listKVKeys(c, c.req.valid("query"))
);
app.get(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => getKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.put(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => putKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.delete(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => deleteKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.post(
  "/api/storage/kv/namespaces/:namespace_id/bulk/get",
  validateRequestBody(
    zWorkersKvNamespaceGetMultipleKeyValuePairsData.shape.body
  ),
  (c) => bulkGetKVValues(c, c.req.valid("json"))
);
app.get(
  "/api/d1/database",
  validateQuery(zD1ListDatabasesData.shape.query.unwrap()),
  (c) => listD1Databases(c, c.req.valid("query"))
);
app.post(
  "/api/d1/database/:database_id/raw",
  validateRequestBody(zD1RawDatabaseQueryData.shape.body),
  (c) => rawD1Database(c, c.req.param("database_id"), c.req.valid("json"))
);
app.get("/api/workers/durable_objects/namespaces", (c) => listDONamespaces(c));
app.get(
  "/api/workers/durable_objects/namespaces/:namespace_id/objects",
  validateQuery(zDurableObjectsNamespaceListObjectsData.shape.query.unwrap()),
  (c) => listDOObjects(c, c.req.param("namespace_id"), c.req.valid("query"))
);
app.post(
  "/api/workers/durable_objects/namespaces/:namespace_id/query",
  validateRequestBody(zDurableObjectsNamespaceQuerySqliteData.shape.body),
  (c) => queryDOSqlite(c, c.req.param("namespace_id"), c.req.valid("json"))
);
app.get("/api/r2/buckets", listR2Buckets);
app.get(
  "/api/r2/buckets/:bucket_name/objects",
  validateQuery(zR2BucketListObjectsData.shape.query.unwrap()),
  (c) => listR2Objects(c, c.req.param("bucket_name"), c.req.valid("query"))
);
app.get(
  "/api/r2/buckets/:bucket_name/objects/:object_key",
  (c) => getR2Object(c, c.req.param("bucket_name"), c.req.param("object_key"), {
    "cf-metadata-only": c.req.header("cf-metadata-only")
  })
);
app.put(
  "/api/r2/buckets/:bucket_name/objects/:object_key",
  (c) => putR2Object(c, c.req.param("bucket_name"), c.req.param("object_key"), {
    "content-type": c.req.header("content-type"),
    "cf-r2-custom-metadata": c.req.header("cf-r2-custom-metadata")
  })
);
app.delete(
  "/api/r2/buckets/:bucket_name/objects",
  validateRequestBody(zR2BucketDeleteObjectsData.shape.body),
  (c) => deleteR2Objects(c, c.req.param("bucket_name"), c.req.valid("json"))
);
app.get("/api/workflows", (c) => listWorkflows(c));
app.get(
  "/api/workflows/:workflow_name",
  (c) => getWorkflowDetails(c, c.req.param("workflow_name"))
);
app.delete(
  "/api/workflows/:workflow_name",
  (c) => deleteWorkflow(c, c.req.param("workflow_name"))
);
app.get(
  "/api/workflows/:workflow_name/instances",
  validateQuery(zWorkflowsListInstancesData.shape.query.unwrap()),
  (c) => listWorkflowInstances(c, c.req.param("workflow_name"), c.req.valid("query"))
);
app.post(
  "/api/workflows/:workflow_name/instances",
  (c) => createWorkflowInstance(c, c.req.param("workflow_name"))
);
app.post(
  "/api/workflows/:workflow_name/instances/batch/delete",
  validateRequestBody(zWorkflowsBatchDeleteInstancesData.shape.body),
  (c) => deleteWorkflowInstances(
    c,
    c.req.param("workflow_name"),
    c.req.valid("json")
  )
);
app.get(
  "/api/workflows/:workflow_name/instances/:instance_id",
  (c) => getWorkflowInstanceDetails(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id")
  )
);
app.patch(
  "/api/workflows/:workflow_name/instances/:instance_id/status",
  validateRequestBody(zWorkflowsChangeInstanceStatusData.shape.body),
  (c) => changeWorkflowInstanceStatus(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id"),
    c.req.valid("json")
  )
);
app.post(
  "/api/workflows/:workflow_name/instances/:instance_id/events/:event_type",
  (c) => sendWorkflowInstanceEvent(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id"),
    c.req.param("event_type")
  )
);
app.delete(
  "/api/workflows/:workflow_name/instances/:instance_id",
  (c) => deleteWorkflowInstance(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id")
  )
);
app.post(
  "/api/local/observability/query",
  validateRequestBody(zObservabilityQueryData.shape.body),
  (c) => runQuery(c, c.req.valid("json"))
);
app.post("/api/local/observability/clear", (c) => clearTraces(c));
app.get(
  "/api/local/email/routing",
  validateQuery(zEmailListRoutingData.shape.query.unwrap()),
  (c) => {
    let query = c.req.valid("query");
    return query.email_id === void 0 ? listReceivedEmails(c, query) : getReceivedEmail(c, query.email_id, query.worker);
  }
);
app.post(
  "/api/local/email/routing/send",
  validateQuery(zEmailSendRoutingData.shape.query),
  validateRequestBody(zEmailSendRoutingData.shape.body),
  (c) => sendTestEmail(c, c.req.valid("json"), c.req.valid("query").worker)
);
app.get(
  "/api/local/email/sending",
  validateQuery(zEmailListSendingData.shape.query.unwrap()),
  (c) => {
    let query = c.req.valid("query");
    return query.email_id === void 0 ? listSentEmails(c, query) : getSentEmail(c, query.email_id, query.worker);
  }
);
app.get("/api/local/workers", async (c) => {
  let loopback = c.env.MINIFLARE_LOOPBACK, selfWorkerNames = c.env.LOCAL_EXPLORER_WORKER_NAMES, explorerWorkerOpts = c.env.MINIFLARE_EXPLORER_WORKER_OPTS;
  try {
    let registry2 = await (await loopback.fetch("http://localhost/core/dev-registry")).json(), localWorkers = selfWorkerNames.filter((name) => registry2[name]).map((name) => ({
      isSelf: !0,
      name,
      bindings: explorerWorkerOpts[name]
    })), peerUrls = await getPeerUrlsIfAggregating(c), peerResults = await Promise.all(
      peerUrls.map(async (url2) => {
        let peerResponse = await fetchFromPeer(url2, "/local/workers");
        if (!peerResponse?.ok) return [];
        try {
          return ((await peerResponse.json()).result ?? []).map((w) => ({ ...w, isSelf: !1 }));
        } catch {
          return [];
        }
      })
    ), allWorkers = [...localWorkers, ...peerResults.flat()];
    return c.json(wrapResponse(allWorkers));
  } catch (err) {
    let message = err instanceof Error ? err.message : "Failed to fetch dev registry";
    return errorResponse(500, 1e4, message);
  }
});
var explorer_worker_default = app;
export {
  explorer_worker_default as default
};
//# sourceMappingURL=explorer.worker.js.map
