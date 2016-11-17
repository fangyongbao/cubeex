import { STATIC_RUL } from './ConfigDev';
import { LocalStorage } from './Util';
const $ = require('jquery');
const md5 = require("md5");

var Sign = {
    init: function(){
        this.getData();
    },
    getData: function(){
        var _this = this;
        var data = {}
        $.ajax({
            type: "POST",
            url: STATIC_RUL + "app/user/GetSalt?ios_ver=2.36&iostype=0",
            dataType: "JSON",
            async: false,
            success: function(msg){
                if(msg.msg_code == 9004){
                  LocalStorage.set("varifyCode",msg.data);
                  LocalStorage.set("varifyTime",msg.server_time);
                }
            }
        });
    },
    timeConversion: function(seconds) {
        var d = new Date();
        d.setTime(seconds);
        var date = d.getDate();
        return date; //截取时间格式的天数返回 验证使用

    },
    //我们自己的加密
    encrypt: function(code, day) {
        try {
            //转十进制数组
            var encrypt_arr = [];
            //字符串转成字符数组
            //1 正则表达式
            var string = code;
            //var obj = "string".replace(/(.)(?=[^$])/g, "$1,").split(","); //字符串转化为数组
            //2 split
            var obj2 = string.split(""); //字符串转化为数组
            for (var i = 0; i < obj2.length; i++) {
                var tem = obj2[i].charCodeAt();
                encrypt_arr.push(tem);
            }
            //alert(encrypt_arr);

            //1.i为奇数时减去i的2倍+今天的日期day，替换原位（注释部分是上1位替换偶数位）
            for (var i = 0; i < encrypt_arr.length; i++) {
                var t;
                if (i % 2 != 0) {
                    t = encrypt_arr[i] - i * 2 + day;
                    encrypt_arr[i] = t; //替换掉对应位置的值
                    // ios对应代码           [encrypt_arr exchangeObjectAtIndex:i-1 withObjectAtIndex:i];
                }
            }
            //console.log("第一步输出："+encrypt_arr);

            for (var i = 0; i < encrypt_arr.length; i++) {
                var t = encrypt_arr[i];
                //        NSLog(@"-----t:%d",t);
                //2.将第1步的结果跟i模3进行异或运算
                t = t ^ (i % 3);
                //3.将第2步的结果右移3位
                t = t >> 3;

                //4.当i模3等于0时，将第3步的结果向左移2位
                if (i % 3 == 0) {
                    t = t << 2;
                } else {
                    //否则将第3步的结果和当前数组元素进行异或运算
                    t = t ^ encrypt_arr[i];
                }
                encrypt_arr[i] = t; //替换掉对应位置的值
                //[encrypt_arr replaceObjectAtIndex: i withObject: [NSString stringWithFormat: @"%d", t]];
            }
            //console.log("第二步输出："+encrypt_arr);

            //运算结果转字符串 并 md5
            var encrypt_strTemp = encrypt_arr.join("");
            var encrypt_str1 = md5(encrypt_strTemp);
            //console.log("Md5加密后输出："+encrypt_arr);

            return encrypt_str1;
        } catch (e) {
            console.log(e);
        }
    },
    setSign: function(data){
        var _this = this;
        var dataStr = JSON.stringify(data);
        if (typeof(common.$localStorage.get("varifyTime")) != 'undefined' && typeof(common.$localStorage.get("varifyCode")) != 'undefined') {
            var day = _this.timeConversion(common.$localStorage.get("varifyTime"));
            var encryptstr = _this.encrypt(common.$localStorage.get("varifyCode"), day);
            var signedString = encryptstr + dataStr + encryptstr;
            // console.log('eee'+signedString);
            var sign = md5(signedString);
            // console.log('sign:'+sign);
            //返回最后的签名字符
            return sign; 
        } else {
            //防止用户清除浏览器本地缓存导致的验签失败
            _this.init();
        }
    }
}

export { Sign };
