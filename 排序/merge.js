/** 归并排序 */

function merge(array){
	let len = array.length;
	if(len<2){
		return array;
	}
	
	let half = Math.floor(len/2);
	let left = array.slice(0,half);
	let right = array.slice(half);
	
	return mergeSort(merge(left),merge(right));
}

function mergeSort(left,right){
	let result = [];

	while(left.length>0 && right.length>0){
		if(left[0]<=right[0]){
			result.push(left.shift());
		}
		else{
			result.push(right.shift());
		}
	}

	while(left.length!==0){
		result.push(left.shift());
	}
	while(right.length!==0){
		result.push(right.shift());
	}

	return result;
}

console.log(merge([36,7,93,9,6,6,9,4,3,13,90]))