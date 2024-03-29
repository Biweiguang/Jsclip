/*
此文件用于前端输入的通用验证
*/
/*处理前端输入方法，将Html标识做编码*/
function htmlEncode(str) {
    str = str.Replace("&", " & a m p;");
    str = str.Replace("'", "''");
    str = str.Replace("\"", "& q u o t;");
    str = str.Replace(" ", "& n b s p;");
    str = str.Replace("<", "& l t;");
    str = str.Replace(">", "& g t;");
    str = str.Replace("\n", "< b r>");
    return str;
}

/*验证手机号码*/
function isTelphoneNumber(telNum: string): boolean {
    // 手机号码长度是11位
    if (telNum.length != 11) {
        return false;
    }

    /**
     * 手机号码: 13[0-9], 14[5,7,9], 15[0, 1, 2, 3, 5, 6, 7, 8, 9], 17[0, 1, 6, 7, 8], 18[0-9]
     * 移动号段: 134,135,136,137,138,139,147,150,151,152,157,158,159,170,178,182,183,184,187,188
     * 联通号段: 130,131,132,145,155,156,170,171,175,176,185,186
     * 电信号段: 133,149,153,170,173,177,180,181,189
     *
     * [数据卡]: 14号段以前为上网卡专属号段，如中国联通的是145，中国移动的是147,中国电信的是149等等。
     * [虚拟运营商]: 170[1700/1701/1702(电信)、1703/1705/1706(移动)、1704/1707/1708/1709(联通)]、171（联通）
     * [卫星通信]: 1349
     */

    /**
     * 中国移动：China Mobile
     * 134,135,136,137,138,139,147,150,151,152,157,158,159,170[5],178,182,183,184,187,188
     */
    let CM_NUM = "^((13[4-9])|(147)|(15[0-2,7-9])|(17[8])|(18[2-4,7-8]))\\d{8}|(170[5])\\d{7}$";

    /**
     * 中国联通：China Unicom
     * 130,131,132,145,155,156,170[4,7-9],171,175,176,185,186
     */
    let CU_NUM = "^((13[0-2])|(145)|(15[5-6])|(17[156])|(18[5,6]))\\d{8}|(170[4,7-9])\\d{7}$";

    /**
     * 中国电信：China Telecom
     * 133,149,153,170[0-2],173,177,180,181,189
     */
    let CT_NUM = "^((133)|(149)|(153)|(17[3,7])|(18[0,1,9]))\\d{8}|(170[0-2])\\d{7}$";

    let isMatch_CM = telNum.match(CM_NUM); // 匹配移动
    let isMatch_CU = telNum.match(CU_NUM); // 匹配联通
    let isMatch_CT = telNum.match(CT_NUM); // 匹配电信
    if (isMatch_CM || isMatch_CT || isMatch_CU) {
        return true;

    }
    return false;
}

function isEmail(mail) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail)) {
        return true; 
    } else {
        return false;
    } 
}


