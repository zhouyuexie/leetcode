/** 快速排序 */

function quick(array,low,high){
	let i = low;
	let j = high;
	if(i>=j){
		return array;
	}
	let keyvalue = array[low];//基准值

	while(i!=j){
		while(array[j]>=keyvalue && i<j){
			j = j-1;
		}
		while(array[i]<keyvalue && i<j){
			i = i+1;
		}

		if(i<j){
			// 此时说明找到了需要交换的值
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	array[low] = array[i];
	array[i] = keyvalue;
	quick(array,low,i-1);
	quick(array,j+1,high);
	return array;
}

console.log(quick([36,7,93,9,6,6,9,4,3,13,90],0,10))