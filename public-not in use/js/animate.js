function animate(obj, target, callback) {
    //clear timer in progress
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
       
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            //callback function triggered after target is met
            callback && callback()
        }
        obj.style.left = obj.offsetLeft + step + 'px'

    }, 15)
}

function BackToTop(obj,target,callback){
    clearInterval(obj.timer);
        obj.timer = setInterval(function () {

            let step = (target - window.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (window.pageYOffset == target) {
                clearInterval(obj.timer)
                //callback function triggered after target is met
                callback && callback()
            }
            window.scroll(0, window.pageYOffset + step)

        }, 15)
}