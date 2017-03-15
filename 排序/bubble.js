/** 冒泡 */
function bubble(array){
	for(let i=0;i<array.length;i++){
		for(let j=0;j<array.length;j++){
			if(array[j]>array[j+1]){
				let data = array[j];
				array[j] = array[j+1];
				array[j+1] = data;
			}
		}
	}
	return array;
}

console.log(bubble([36,7,93,9,6,6,9,4,3,13]))