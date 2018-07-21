var FileAPIDetector = (function(){
    if (window.File && window.FileReader && window.Blob) {
        return true;
    } else {
        return false;
    }
})();