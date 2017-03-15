/** 插入排序 */

function insert(array){
	let len = array.length,
			preindex = 0,
			curiitem;

	for(let i=1;i<len;i++){
		preindex = i-1;
		curiitem = array[i];
		while(preindex>=0&&array[preindex]>curiitem){
			array[preindex+1] = array[preindex];
			preindex--;
		}
		array[preindex+1] = curiitem;
	}

	return array;
}

console.log(insert([36,7,93,9,6,6,9,4,3,13]))