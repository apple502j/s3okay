var WebGLDetector = {
    webgl: (function () {
        try {
            var canvas = document.createElement('canvas');
            if (!canvas || !canvas.getContext) return false;
            var webGLContext = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            return !!( window.WebGLRenderingContext && webGLContext && webGLContext.getShaderPrecisionFormat );
        } catch (e) {
            return false;
        }
    })(),
    canvas: (function () {
        try {
            var canvas = document.createElement('canvas');
            if (!canvas || !canvas.getContext) return false;
            return true;
        } catch (e) {
            return false;
        }
    })()
};
