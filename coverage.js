
function gyayscale(context) {
    var canvas = context.canvas;
    var width = canvas.width;
    var height = canvas.height;
    var imageData = context.getImageData(0, 0, width, height);
    var data = imageData.data;
    
    for (i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];
        var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (v === 0.0) {
            v = 255.0;
        }
        data[i + 0] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
    }
    context.putImageData(imageData, 0, 0);
}

