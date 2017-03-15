/** 选择排序 */
/**
 * 每次选择数组中待排序的最小数字放入已排序数组中
 */

function select(array){
	// 第一次先找到数组里最小的
	let len = array.length;

	for(let i=0;i<len;i++){
		let min = array[i];//等于最新加入的最小数
		let minindex = i;

		for(let j=i+1;j<len;j++){
			if(array[j]<min){
				min = array[j];
				minindex = j;
			}
		}

		//此时min是数组最小的
		//和第一个小的交换
		let first = array[i];
		array[i] = min;
		array[minindex] = first;
	}
	return array;
}

console.log(select([36,7,93,9,6,6,9,4,3,13]))