export default function sortedIndex(array, value) {
	var low = 0,
		high = array.length;

	while (low < high) {
		var mid = low + high >>> 1;
		if (array[mid].distance < value) low = mid + 1;
		else high = mid;
	}
	return low;
}
