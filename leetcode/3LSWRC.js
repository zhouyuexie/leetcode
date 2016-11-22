var log = console.log;

// data is [],数组里的元素是否全部一样
function isRepeat(data){
	var datai = data[0];//记录第一个数据
	for(var i=1;i<data.length;i++){
		if(datai!==data[i]){
			return false;//说明不是这种"bbbbbbb"
		}
	}
	return true;//说明是这种"bbbbbbb"
}

log(isRepeat("bbbbb").split())