/**
 * 获取10位时间戳
 * 
 * @param {string} 需要转换的时间字符串，不传时使用当前时间
 * @return {number}
 */
export function getTime10(datetime) {
    let date = datetime ? new Date(datetime) : new Date();
    return Date.parse(date) / 1000;
}

/**
 * 获取13位时间戳
 * 
 * @param {string} datetime 需要转换的时间字符串，不传时使用当前时间
 * @return {number}
 */
export function getTime13(datetime) {
    let date = datetime ? new Date(datetime) : new Date();
    return date.getTime();
}

/**
 * 将当前时间或指定时间戳转换为指定时间格式的字符串
 * 
 * @param {string} format 需要转换为的时间格式，默认为：Y-m-d
 * @param {number} timestamp 时间戳，默认为当前时间
 * @return {string}
 */
export function dateFormat(format, timestamp) {
    // 参数默认值 
    format = format || 'Y-m-d';
    let date = timestamp ? new Date(timestamp) : new Date();

    // 取年月日 
    let year = date.getFullYear();
    let month = _zero(date.getMonth() + 1);
    let day = _zero(date.getDate());
    let hour = _zero(date.getHours());
    let minute = _zero(date.getMinutes());
    let second = _zero(date.getSeconds());

    // 替换返回
    return format.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minute,
            s: second
        })[matches];
    });
}

/**
 * 取间隔的秒数（10或13位）
 * 
 * @param {number} start 开始时间戳
 * @param {number} end 结束时间戳，默认为0，即当前时间戳
 * @return {number}
 */
export function dateDiff(start, end = 0) {
    if (end === 0) {
        if (start > 9999999999) end = getTime13();
        else end = getTime10();
    }
    return end - start;
}

/**
 * 倒计时
 * 
 * @param {number} timestamp 时间戳（必须是10位时间戳）
 * @param {Function} callback 回调方法，参数为：res: {day, hour, minute, second}
 * @return {void}
 */
export function countdown(timestamp, callback) {

    // 定义时间戳差值变量
    let diff;

    // 定义时间间隔执行句柄timer, 每秒钟执行一次
    let timer = setInterval(()=> {

        // 取时间秒数差
        diff = timestamp - this.timestamp10();
		
		// 如果diff小于0，则清空timer，并返回
		if (diff < 0) {
			clearInterval(timer);
			return;
		}

        // 计算时间差中的日时分秒（时分秒补0）
        let day = parseInt(Math.floor(diff / (60 * 60 * 24)).toString());
        let hour = _zero(Math.floor(diff / (60 * 60)) - (day * 24));
        let minute = _zero(Math.floor(diff / 60) - (day * 24 * 60) - (hour * 60));
        let second = _zero(Math.floor(diff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));

        // 调用回调
        callback({day, hour, minute, second});

    }, 1000);
}

// ----------------------------------------------------------------------------
// 私有部分
// ----------------------------------------------------------------------------

/**
 * 补时间位上的先导0
 * 
 * @param {number} value 值
 * @return {string}
 */
function _zero(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value.toString();
}
