function AssertException(message) { this.message = message; }
AssertException.prototype.toString = function () {
	return 'AssertException: ' + this.message;
};

function assert(exp, message) {
	if (!exp) {
		throw new AssertException(message);
	}
}

function showMessage(trial, message, color, waitPress, callback){
    var container = document.getElementById("container");
    document.getElementsByTagName("BODY")[0].style.backgroundColor = 'rgb(90, 90, 90)';
    container.innerHTML = '<div id="ready" style="color: ' + color + '"></div>';
    var ready = document.getElementById("ready");
    ready.style.fontSize = "30px";
    ready.innerText = message;
    if(waitPress){
        var pressed = function(e){
            if(e.key === "t"){
                document.onkeypress = undefined;
                callback.call(trial);
            }

        }
        document.onkeypress = pressed;
    } else {
        setTimeout(function(){callback.call(trial)}, 2000)
    }
}

function pix2num(pix){
    return parseFloat(pix.substring(0, pix.length - 2));
}

function lockMouse(){ // Must be called in context of Trial, e.g. from showMessage.
    var cursor = this.cursor;
    var moveFactor = this.factor;
    document.onpointerlockchange = document.onpointerlockchange ||
        document.onmozpointerlockchange ||
        document.onwebkitpointerlockchange;

    document.onpointerlockchange = lockReceived;

    cursor.requestPointerLock = cursor.requestPointerLock ||
        cursor.mozRequestPointerLock ||
        cursor.webkitRequestPointerLock;

    document.addEventListener("mousemove", moveCallback);

    cursor.requestPointerLock();

    function lockReceived(){
        if(document.pointerLockElement === cursor ||
            document.mozPointerLockElement === cursor ||
            document.webkitPointerLockElement === cursor) {

            document.exitPointerLock = document.exitPointerLock ||
                document.mozExitPointerLock ||
                document.webkitExitPointerLock;

            cursor.style.display = "inline";
            cursor.style.left = "0px";
            cursor.style.top = "0px";

        } else {
            cursor.style.display = "none";
        }
    }

    function moveCallback(e){
        var movementX = e.movementX ||
            e.mozMovementX          ||
            e.webkitMovementX       ||
            0,
            movementY = e.movementY ||
                e.mozMovementY      ||
                e.webkitMovementY   ||
                0;

        var width = $(window).width();
        var height = $(window).height();
        var xoff = $(cursor).width();
        var yoff = $(cursor).height();
        var newleft, newtop = 0;

        if(movementX > 0){
            newleft = pix2num(cursor.style.left) + movementX/moveFactor;
            if(newleft < width - xoff){
                cursor.style.left = newleft.toString() + "px";
            }
        } else if(movementX < 0){
            newleft = pix2num(cursor.style.left) + movementX/moveFactor;
            if(newleft > 0){
                cursor.style.left = newleft.toString() + "px";
            }
        }

        if(movementY > 0){
            newtop = pix2num(cursor.style.top) + movementY/moveFactor;
            if(newtop < height - yoff){
                cursor.style.top = newtop.toString() + "px";
            }
        } else if(movementY < 0){
            newtop = pix2num(cursor.style.top) + movementY/moveFactor;
            if(newtop > 0){
                cursor.style.top = newtop.toString() + "px";
            }
        }
    }
}

function cursorOn(element) {
    var bb = element.getBoundingClientRect();
    var cursor = document.getElementById("cursor");
    var x = pix2num(cursor.style.left) + cursor.width/2;
    var y = pix2num(cursor.style.top) + cursor.height/2;

    return x >= bb.left && x <= bb.right && y >= bb.top && y <= bb.bottom;
}