/**
 * Created by Administrator on 2018/5/26.
 */
'use strict';
var pageName = 'test3';

var com = require ('./com');

//"Encrypt":["SF/YvlvsvK9BcG2siT/rQezWwwdrcycRyXScDWmusPnKkhxR59oX7oBzD4hOMonzhY7nCo8W/R2LGflZoNiNiHfPPy/5eLLGfZlh0QyiVyfVV2/ov8H8HueI8hI+Q0ZQ3GptL6S5WiANRk5IjWjNAbx1XdPA4xj6EhAKt6wZOIj+M1v8FSDAkfUrroEma2dCoBoVxebcu106nFP/y7oSRUT/r1eXGRN5VKDG1UlvuzHUisXnIgwAgE+XFv36WBvvQHcbt/y0GbBWNvAkiQqR/434zkyBpsrO7fyJKfzZd3LxPid6lExaFsCgdi+jHghlPK1jo+lxpgjkXay3pGcztIwmjYLIVN7fdZYnJ56BwLXTlR3iZpHETEK1wwfYqThprKr5jUQHbmzdCMickah5JCApQFG9OrDtOnDNaBuJj/2ToxBoQFrhWb6vbWQ2wI6t0tBA47Q9RJl2ROf6qRm49w=="]
//"Encrypt":["n+BF4JCsHg6+bQtP8dtKNDXbaqe1B2hcWqJ33OJa7zizg1pND8yp+izYInyMm54ShYKjg4Lw+JA5KkqP17AgGJh2LUP+LpjaWduyDaY4san9ia0lGMyEIMCrRzaSvlUQg4aUxhfdX4mqLMtf0fLIqV/uNxrjwuueYmMhYXeCcZqUAotw/DMvBtnSV/3c+JQ2aE7fsx4X3PfTtVg2EMU5OuqOSzly3XDxY7xkGwzsxic7H5s5dYMstGg5iFHwZRfiAYa4m3yE0FYdmwtns6JG7/8="]
//"Encrypt":["cIMFY2XtkZ+GiHUQ0tlT009jMzvzo+g1bKIsSWBrYUJV6DUkrSDNyU/ZAM6v21+75LxHN9aKsOOXp32bwG1btK1XJsuJZiuMl1515DyZG2VWuGKJYYsQcdeX9fdm3fBwEv1wBtf5u79wA8ybDW2en+BF4JCsHg6+bQtP8dtKNDXbaqe1B2hcWqJ33OJa7zizg1pND8yp+izYInyMm54ShYKjg4Lw+JA5KkqP17AgGJh2LUP+LpjaWduyDaY4san9ia0lGMyEIMCrRzaSvlUQg4aUxhfdX4mqLMtf0fLIqV/uNxrjwuueYmMhYXeCcZqUAotw/DMvBtnSV/3c+JQ2aE7fsx4X3PfTtVg2EMU5OuqOSzly3XDxY7xkGwzsxic7H5s5dYMstGg5iFHwZRfiAYa4m3yE0FYdmwtns6JG7/8="]
//cIMFY2XtkZ+GiHUQ0tlT009jMzvzo+g1bKIsSWBrYUJV6DUkrSDNyU/ZAM6v21+75LxHN9aKsOOXp32bwG1btK1XJsuJZiuMl1515DyZG2VWuGKJYYsQcdeX9fdm3fBwEv1wBtf5u79wA8ybDW2e
//
//
//var encrypted = 'SF/YvlvsvK9BcG2siT/rQezWwwdrcycRyXScDWmusPnKkhxR59oX7oBzD4hOMonzhY7nCo8W/R2LGflZoNiNiHfPPy/5eLLGfZlh0QyiVyfVV2/ov8H8HueI8hI+Q0ZQ3GptL6S5WiANRk5IjWjNAbx1XdPA4xj6EhAKt6wZOIj+M1v8FSDAkfUrroEma2dCoBoVxebcu106nFP/y7oSRUT/r1eXGRN5VKDG1UlvuzHUisXnIgwAgE+XFv36WBvvQHcbt/y0GbBWNvAkiQqR/434zkyBpsrO7fyJKfzZd3LxPid6lExaFsCgdi+jHghlPK1jo+lxpgjkXay3pGcztIwmjYLIVN7fdZYnJ56BwLXTlR3iZpHETEK1wwfYqThprKr5jUQHbmzdCMickah5JCApQFG9OrDtOnDNaBuJj/2ToxBoQFrhWb6vbWQ2wI6t0tBA47Q9RJl2ROf6qRm49';
//
//
//var encrypted  = 'cIMFY2XtkZ+GiHUQ0tlT009jMzvzo+g1bKIsSWBrYUJV6DUkrSDNyU/ZAM6v21+75LxHN9aKsOOXp32bwG1btK1XJsuJZiuMl1515DyZG2VWuGKJYYsQcdeX9fdm3fBwEv1wBtf5u79wA8ybDW2en+BF4JCsHg6+bQtP8dtKNDXbaqe1B2hcWqJ33OJa7zizg1pND8yp+izYInyMm54ShYKjg4Lw+JA5KkqP17AgGJh2LUP+LpjaWduyDaY4san9ia0lGMyEIMCrRzaSvlUQg4aUxhfdX4mqLMtf0fLIqV/uNxrjwuueYmMhYXeCcZqUAotw/DMvBtnSV/3c+JQ2aE7fsx4X3PfTtVg2EMU5OuqOSzly3XDxY7xkGwzsxic7H5s5dYMstGg5iFHwZRfiAYa4m3yE0FYdmwtns6JG7/8==';

//sBJ/ttntveYnAjdNR4PK1/SgShoB8b9mkgkbkWyQbhp8/gjEkToRpa57WHQV54IzHURopb4mjeidF2RkmZ7KcF2PQh4jnT2h/eM7nmO08ZRHDe9LCl/fC3zJKu7iG+G1FI2uXrL5750vaCSAJGk/Yfm58AHTsFvd4KE9tH68/CpcFtcAUp7p1pODbdIK3qTi6cIR8TjEqyLreRuGQzcqwsp8wp0WYEugR40UKqvqrDcekBMFTQya7DoIwc2+8gphn//Y1m6R1/aqFAOtDhP1GnQuaKeHGWgbc8X41wQ71FGOjdiQSAYPBaciKk5GnkscdLfVOOEVnjjZbYaqFi1WESBJIpN1p0DQ6mbl8+LcWKMWY5MslabXhYclay8MzhNuROeu8tfNgRaeQXv4aqqOt+8pN53UjoBi4x9zyFQ1ta9/umpAjomxT5n7g6xISPyzY2Ci1awE2tWFro+u4dptPQ==

//var encrypted = 'sBJ/ttntveYnAjdNR4PK1/SgShoB8b9mkgkbkWyQbhp8/gjEkToRpa57WHQV54IzHURopb4mjeidF2RkmZ7KcF2PQh4jnT2h/eM7nmO08ZRHDe9LCl/fC3zJKu7iG+G1FI2uXrL5750vaCSAJGk/Yfm58AHTsFvd4KE9tH68/CpcFtcAUp7p1pODbdIK3qTi6cIR8TjEqyLreRuGQzcqwsp8wp0WYEugR40UKqvqrDcekBMFTQya7DoIwc2+8gphn//Y1m6R1/aqFAOtDhP1GnQuaKeHGWgbc8X41wQ71FGOjdiQSAYPBaciKk5GnkscdLfVOOEVnjjZbYaqFi1WESBJIpN1p0DQ6mbl8+LcWKMWY5MslabXhYclay8MzhNuROeu8tfNgRaeQXv4aqqOt+8pN53UjoBi4x9zyFQ1ta9/umpAjomxT5n7g6xISPyzY2Ci1awE2tWFro+u4dptPQ==';
//var encrypted = 'X5zzo2c6lUyXIUG2jyrTh+LVTWSuhJdcdXksMuJxs8OM4tLkgmqYHqkLtGwR8d6K5bGRwuh2TrRHonQoTMLXtWxBFwJO5kJUzjGlOUTyF9LCSEus5JZ6qto9H88DOh/WDLr8kT/w4q94sSEnrXp1fgAk8JBu7+B+Aa90ZAheqq5dQwxsEpH5YvURSzw3S6Ept9GYKA0PaLHZ+diMX6gDMg4fGwkV/hUsPEHycA2HSCEn2o8P3bNURDhlRMie6DkH364RSW9MRffAVh7Go0hqGrJM3UpEWs0XpWHXXzoX+1Z3+d16TXautmwkj8YHvyGTPPo/0DOlXtH1OSnQMyoU9J5CxJA0p11qtCS5/NPvVziQ9zMUK+k+lzlhGUnnpme6q4c+Y0fAN5eBiC7p5AIiWXnZg+5R1ygBoUD1jukRw5Ryh+T7QcBZaUwQC/w63Og3VY0ZLqcH1AgrFCrB5HjgbQ==';
//["8XWUO2H30ex0C+wPAep1dNQNOrMT9vOWZnNNvrMbJEcii9azqP9fzsltWe9deEkYmatj7BhgHoO7o8KCLZAK6Wg39k3tOMKmVJRzu6/aB9FYgk80DpzWvQJA4i8J57XBuW9I1agJLyNTz9i6RLDXATxOj7S80u+TPbsyM2lOXFaD+/Q+OQ9std+23i2dhWVn2nyc58K756DX3f6vZ3qf+7+gtL0YztKTI+aGyIvMLKKtvSsdUhv1anxvqSAkOjTmy33kG/FO3f9M+r0yS7e9bJnHTKZVpGc5C4iQVRguJL6LPYgJwFM1UQx3OEWCuiTXX5MPe28oAd9hxjMU5ZTPyknYCg7C/mH7KsAnNir0WtuU9vj3EMwlEonuQmzzMxAshZJqjwq2AoxR2FSO9yqJUBZ23+JzPlMXGLE5chAYcHSYvDChsLZVDYjdbi2I+xBPqC4owz8qENGKUtci63AkHg==
var encrypted ='8XWUO2H30ex0C+wPAep1dNQNOrMT9vOWZnNNvrMbJEcii9azqP9fzsltWe9deEkYmatj7BhgHoO7o8KCLZAK6Wg39k3tOMKmVJRzu6/aB9FYgk80DpzWvQJA4i8J57XBuW9I1agJLyNTz9i6RLDXATxOj7S80u+TPbsyM2lOXFaD+/Q+OQ9std+23i2dhWVn2nyc58K756DX3f6vZ3qf+7+gtL0YztKTI+aGyIvMLKKtvSsdUhv1anxvqSAkOjTmy33kG/FO3f9M+r0yS7e9bJnHTKZVpGc5C4iQVRguJL6LPYgJwFM1UQx3OEWCuiTXX5MPe28oAd9hxjMU5ZTPyknYCg7C/mH7KsAnNir0WtuU9vj3EMwlEonuQmzzMxAshZJqjwq2AoxR2FSO9yqJUBZ23+JzPlMXGLE5chAYcHSYvDChsLZVDYjdbi2I+xBPqC4owz8qENGKUtci63AkHg==';


var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
//var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var bEncrypted = Buffer.from(encrypted ,'base64');

// Decode base64 encodingAesKey
var sEncodingAesKey = encodingAesKey + '=';
//var sEncodingAesKey = encodingAesKey;
var bAesKey=Buffer.from (sEncodingAesKey,'base64');
console.log( pageName + ':bAesKey: ' + bAesKey + ':lenght:' + bAesKey.length);
// Fetch front 16 byte to iv
var bIv = bAesKey.slice(0,16);
console.log (pageName + ':bIv: ' + bIv + ':length:' + bIv.length);



var decrypto =  com.crypto.aes.decryptoPaddingFalse;
var msg =decrypto(encrypted,bAesKey,bIv);

console.log(pageName,'-----msg---------',msg);


