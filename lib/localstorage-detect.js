var LSDetector = (function(){
    if (window.localStorage && window.sessionStorage) {
        return true;
    } else {
        return false;
    }
})();