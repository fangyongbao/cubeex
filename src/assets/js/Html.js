/**
 * desc: html相关模块
 * date: 2016-09-02
 * author: maicon
 **/

const Html = {
    htmlEncode: function(str) {
        var ele = document.createElement('span');
        ele.appendChild(document.createTextNode(str));
        return ele.innerHTML;
    },
    htmlDecode: function(str) {
        var ele = document.createElement('span');
        ele.innerHTML = str;
        return ele.textContent;
    }
}

export {
    Html
};
