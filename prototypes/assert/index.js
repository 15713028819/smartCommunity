/**
 * 判断变量是否为Boolean类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isBoolean = (value) => {
    return typeof value === 'boolean';
}

/**
 * 判断变量是否为Number类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isNumber = (value) => {
    return typeof value === 'number';
}

/**
 * 判断变量是否为String类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isString = (value) => {
    return typeof value === 'string';
}

/**
 * 判断变量是否为Undefined类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isUndefined = (value) => {
    return value === void 0;
}

/**
 * 判断变量是否为NaN
 * 
 * @param {any} value 需要判断的变量
 */
export const isNaN = (value) => {
    return value === NaN;
}

/**
 * 判断变量是否为NULL
 * 
 * @param {any} value 需要判断的变量
 */
export const isNull = (value) => {
    return Object.prototype.toString.call(value) == "[object Null]";
}

/**
 * 判断变量是否为Function类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isFunction = (value) => {
    return Object.prototype.toString.call(value) == "[object Function]";
}

/**
 * 判断变量是否为Object类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isObject = (value) => {
    return Object.prototype.toString.call(value) == "[object Object]";
}

/**
 * 判断变量是否为Array类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isArray = (value) => {
    return Object.prototype.toString.call(value) == "[object Array]";
}

/**
 * 判断变量是否为Symbol类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isSymbol = (value) => {
    return Object.prototype.toString.call(value) == "[object Symbol]";
}

/**
 * 判断变量是否为RegExp类型
 * 
 * @param {any} value 需要判断的变量
 */
export const isRegExp = (value) => {
    return Object.prototype.toString.call(value) == "[object RegExp]";
}

/**
 * 判断变量是否为空
 * 
 * @param {any} value 需要判断的变量
 */
export const isEmpty = (value) => {
    if(value === void(0) || value === null) return true
    else if(isObject(value)) return !Object.keys(value).length
    else if(isArray(value)) return !value.length
    else if(isString(value)) return !value
    else return value.toString().length == 0
}
