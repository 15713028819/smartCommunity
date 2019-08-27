import { dateFormat } from '@/functions/date';

export default function(value, format) {
	return dateFormat(format, value);
}
