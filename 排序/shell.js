/** 希尔排序 */
/** 
 * 插入排序的一种优化,增加了步长控制
 */

function shell(array){
	let len = array.length;
	let gap = Math.floor(len/2);

	while(gap>=1){
		for(let i=0;i<=gap;i++){
			for(let j=i+gap;j<len;j+=gap){
				let right = j;// 分组后右边的
				let left = j-gap;// 分组后左边的

				// 如果左边的比右边的大
				if(array[right]<array[left]){
					let temp = array[right];
					array[right] = array[left];
					array[left] = temp;
				}
			}
		}
		// console.log(array) //打印每次排序后的数组
		gap = Math.floor(gap/2);
	}
	return array;
}

console.log(shell([36,7,93,9,6,6,9,4,3,13,90]))