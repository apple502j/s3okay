/*
Values:
msie Internet Explorer
n3b  Vivaldi Opera Silk
chless63desk Chrome (63-) Desktop
chless62mob Chrome (62-) Mobile
safless11 Safari (11-)
edgless15 Edge (15-)
firless57 Firefox (57-)
maybeno Native browsers of mobile
safonwin Safari on Windows
*/

var BrowserDetector = (function(){
    // Bowser check
    if (typeof(bowser) == "undefined") return false;
    // Unsupported
    if (bowser.msie) return "msie";
    if (bowser.vivaldi || bowser.opera || bowser.silk) return "n3b";
    // Version
    if (bowser.chrome && bowser.version < "63.0" && !(bowser.mobile || bowser.tablet)) return "chless63desk";
    if (bowser.chrome && bowser.version < "62.0" && (bowser.mobile || bowser.tablet)) return "chless62mob";
    if (bowser.safari && bowser.version < "11.0") return "safless11";
    if (bowser.msedge && bowser.version < "15.0") return "edgless15";
    if (bowser.firefox && bowser.version < "57.0") return "firless57";
    // Maybe unsupported
    if (bowser.android || bowser.ios || bowser.samsungBrowser) return "maybeno";
    if (bowser.safari && bowser.windows) return "safonwin";
    return "okay";
})();

var EMD = {
    "msie" : "Internet Explorer was blocked due to its bad behavior for HTML5.",
    "n3b" : "Opera, Silk, Vivaldi were blocked due to lots of bug and crash reports.",
    "chless63desk" : "You had better update Chrome. It's less than 63 so it's not supported.",
    "chless62mob" : "You had better update Chrome. It's less than 62 so it's not supported.",
    "safless11" : "You had better update Safari. It's less than 11 so it's not supported.",
    "edgless15" : "You had better update Windows and Edge. It's less than 15 so it's not supported.",
    "firless57" : "You had better update Firefox. It's less than 57 so it's not supported.",
    "maybeno" : "These browsers are not supported. They may work worse than supported ones.",
    "safonwin" : "Safari on Windows is not supported. Please use Edge, Chrome, or Firefox."
};