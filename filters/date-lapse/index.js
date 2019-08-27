import { getTime10, dateFormat } from '@/functions/date';

const LIST = {
    '刚刚': 300,
    '5分钟前': 600,
    '10分钟前': 1200,
    '20分钟前': 1800,
    '半小时前': 3600,
    '1小时前': 7200,
    '2小时前': 10800,
    '3小时前': 14400,
    '4小时前': 18000,
    '5小时前': 21600,
    '6小时前': 28800,
    '8小时前': 36000,
    '10小时前': 43200,
    '12小时前': 86400,
    '1天前': 172800,
    '2天前': 259200,
    '3天前': 345600,
    '4天前': 432000,
    '5天前': 518400,
    '6天前': 604800,
    '1周前': 1209600
};

export default function(value) {

    // 不管传入的是10位或13位时间戳，都转换为10位时间戳
    if (typeof value === 'string') value = parseInt(value);
    if (value > 9999999999) value = Math.round(value / 1000);

    // 计算与当前的时间差（秒数），并根据LIST中的设置返回
    const interval = getTime10() - value;
    for (let key in LIST) {
        if (interval < LIST[key]) {
            return key;
        }
    }
    return '很久前';
}
