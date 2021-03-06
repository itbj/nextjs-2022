var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var image = new Image();
image.src = "long.jpg";

image.onload = function(){
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image,0,0);



var imageData = ctx.getImageData(0,0,image.width,image.height).data;
ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0,image.width,image.height);

console.log("###########################")
console.log(image.width,image.height)

var gap = 6;

for (var h = 0; h < image.height; h+=gap) {
    for(var w = 0; w < image.width; w+=gap){
            var position = (image.width * h + w) * 4;
            var r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];

            if(r+g+b==0){
                    ctx.fillStyle = "#000";
                    ctx.fillRect(w,h,4,4);
                }
    }
}



var dragonContainer = document.getElementById("container");
var dragonScale = 2;

for (var h = 0; h < image.height; h+=gap) {
    for(var w = 0; w < image.width; w+=gap){
            var position = (image.width * h + w) * 4;
            var r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];

            if(r+g+b==0){
                    var bubble = document.createElement("img");
                    bubble.src = "bubble.png";
                    bubble.setAttribute("class","bubble");

                    var bubbleSize = Math.random()*10+20;
                    bubble.style.left = (w*dragonScale-bubbleSize/2) + "px";
                    bubble.style.top = (h*dragonScale-bubbleSize/2) + "px";
                    bubble.style.width = bubble.style.height = bubbleSize+"px";
                    bubble.style.animationDuration = Math.random()*6+4 + "s";

                    dragonContainer.appendChild(bubble);
                    //console.log("-----------------------------");
                    //console.log("bubble!");
                }
    }
}
}

