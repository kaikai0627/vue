<template>
    <div class="form-inline-input">
        <div class="code-box" id="code-box">
            <input type="text" name="code" class="code-input"/>
            <p></p>
            <span>&gt;&gt;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Drag',
        methods: {
            //获取元素距离页面边缘的距离
            getOffset(box, direction) {
                var setDirection = (direction == 'top') ? 'offsetTop' : 'offsetLeft';
                var offset = box[setDirection];
                var parentBox = box.offsetParent;
                while (parentBox) {
                    offset += parentBox[setDirection];
                    parentBox = parentBox.offsetParent;
                }
                parentBox = null;
                return parseInt(offset);
            },
            moveCode(code, _this) {
                var fn = {codeVluae: code};
                var box = document.querySelector("#code-box"),
                    progress = box.querySelector("p"),
                    codeInput = box.querySelector('.code-input'),
                    evenBox = box.querySelector("span");
//默认事件
                var boxEven = ['mousedown', 'mousemove', 'mouseup'];
//改变手机端与pc事件类型
                if (typeof document.ontouchstart == 'object') {
                    boxEven = ['touchstart', 'touchmove', 'touchend'];
                }
                var goX, offsetLeft, deviation, evenWidth, endX;

                function moveFn(e) {
                    e.preventDefault();
                    e = (boxEven['0'] == 'touchstart') ? e.touches[0] : e || window.event;
                    endX = e.clientX - goX;
                    endX = (endX > 0) ? (endX > evenWidth) ? evenWidth : endX : 0;
                    if (endX > evenWidth * 0.7) {
                        progress.innerText = '松开验证';
                        progress.style.backgroundColor = "#66CC66";
                    } else {
                        progress.innerText = '';
                        progress.style.backgroundColor = "#66CC66";
                    }
                    progress.style.width = endX + deviation + 'px';
                    evenBox.style.left = endX + 'px';
                }

                function removeFn() {
                    document.removeEventListener(boxEven['2'], removeFn, false);
                    document.removeEventListener(boxEven['1'], moveFn, false);
                    if (endX > evenWidth * 0.7) {
                        progress.innerText = '验证成功';
                        progress.style.width = evenWidth + deviation + 'px';
                        evenBox.style.left = evenWidth + 'px'
                        codeInput.value = fn.codeVluae;
                        evenBox.onmousedown = null;
                        _this.ruleForm.verification = true;
                    } else {
                        progress.style.width = '0px';ssssssssssssssss
                        evenBox.style.left = '0px';
                        alert(1)
                    }
                };

                function getOffset(box, direction) {
                    var setDirection = (direction == 'top') ? 'offsetTop' : 'offsetLeft';
                    var offset = box[setDirection];
                    var parentBox = box.offsetParent;
                    while (parentBox) {
                        offset += parentBox[setDirection];
                        parentBox = parentBox.offsetParent;
                    }
                    parentBox = null;
                    return parseInt(offset);
                };
                evenBox.addEventListener(boxEven['0'], function (e) {
                    e = (boxEven['0'] == 'touchstart') ? e.touches[0] : e || window.event;
                    goX = e.clientX,
                        offsetLeft = getOffset(box, 'left'),
                        deviation = this.clientWidth,
                        evenWidth = box.clientWidth - deviation,
                        endX;
                    document.addEventListener(boxEven['1'], moveFn, false);
                    document.addEventListener(boxEven['2'], removeFn, false);
                }, false);
                fn.setCode = function (code) {
                    if (code)
                        fn.codeVluae = code;
                }
                fn.getCode = function () {
                    return fn.codeVluae;
                }
                fn.resetCode = function () {
                    evenBox.removeAttribute('style');
                    progress.removeAttribute('style');
                    codeInput.value = '';
                };
                return fn;
            }                      //mouseup事件
        },
        mounted() {
            var _this = this;
// window.addEventListener('load',function(){
//code是后台传入的验证字符串
            var code = "jsaidaisd656",
                codeFn = new _this.moveCode(code, _this);
// });
        }
    }
</script>

<style lang="stylus" scoped>

    .form-inline-input input,
    .code-box
        padding: 0 3px
        margin .5rem auto
        width: 6.8rem
        height: .8rem
        color: #fff
        text-shadow: 1px 1px 1px black;
        background: #efefef
        border: 0
        border-radius: 5px
        outline: none

    .code-box
        position: relative

        p,
        span
            display: block
            position: absolute
            left: 0
            height: .8rem
            text-align: center
            line-height: .8rem
            border-radius: 5px
            padding: 0
            margin: 0

        span
            width: .8rem
            background-color: #fff
            cursor: pointer
            margin-right: 1px

        p
            width: 0
            overflow: hidden
            text-indent: -20px

        .code-input
            display: none
</style>