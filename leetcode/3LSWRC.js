var log = console.log;

// data is [],数组里的元素是否全部一样
let isRepeat = (data)=>{
	var datai = data[0];//记录第一个数据
	for(var i=1;i<data.length;i++){
		if(datai!==data[i]){
			return false;//说明是这种"bbbbbba"
		}
	}
	return true;//说明是这种"bbbbbbb"
}

// 删除重复的数据
let deleteRepeatString = (data) =>{
	let noRepeat = "";
	for(let i=0;i<data.length;i++){
		if(data[i]!==data[i+1]){
			noRepeat = data[i] + noRepeat;
		}
	}
	log("deleteRepeatString:",noRepeat.split("").reverse().join(""))
	return noRepeat.split("").reverse().join("");
}

// 循环获取数组里所有不相等相连的字符串
let getNoRepeatLength = (data) =>{
	let arrayData = [];
	let length = data.length;
	let head = 0;//从数组下标第一个开始比较
	let diffLength = 2;//从长度为2开始比较,因为deleteRepeatString函数去掉了相邻相同的字符串了

	//第一个开始,数组每个元素都要循环和它之后的元素就行对比
	while(head!==length-1){
		for(let i=head;i<length;i++){
			//截取相同长度不同位置的字符串对比
			//如果有相等的说明
			if(data.substr(i,diffLength)===data.substr(i+1,diffLength)){
				arrayData.push(diffLength);//找到目前最长的长度diffLength了
				diffLength++;
				head++;
				break;
			}
			else{
				diffLength++;
				head++;
			}
		}
	}
	return arrayData.sort()[arrayData.length-1];
}

let lengthOfLongestSubstring = (string) => {
	//首先验证是不是全部一样的字符
	let arrayData = string.split("");
	let deleteRepeat = deleteRepeatString(arrayData);
	if(deleteRepeat.length===1){
		//如果是的话返回1
		return 1;
	}
	else{
		return getNoRepeatLength(string);
	}
}

log(lengthOfLongestSubstring("pwwkew"))