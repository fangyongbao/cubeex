/***
 *desc: 数据请求模块
 *date: 2016-09-02
 *author: maicon
 ***/

import $ from 'jquery'
import {
    STATIC_RUL
} from './ConfigDev'
import {
    Sign
} from './Sign'

const Ajax = function(url, data, beforeSend, success, error, complete) {
    var initPar = {
        timestamp: parseInt(new Date().getTime() / 1000),
        login_id: '',
        user_id: '',
        platform: 'ios',
        versionNum: '2.94',
        form: '',
        iostype: '',
        idfa: ''
    };
    initPar = $.extend(initPar, data);
    var parameter = {
        sign: Sign(initPar),
        data: JSON.stringify(initPar)
    };
    $.ajax({
        type: 'post',
        url: STATIC_RUL + url,
        data: parameter,
        timeout: 6000,
        dataType: 'json',
        beforeSend: function() {
            beforeSend();
        },
        success: function(d) {
            success(d);
        },
        error: function(d) {
            error(d);
        },
        complete: function(d) {
            complete(d);
        }
    })
}

export {
    Ajax
};