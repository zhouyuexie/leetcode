let log = console.log;

// data is [],数组里的元素是否全部一样
let isRepeat = (data) => {
	let datai = data[0]; //记录第一个数据
	for (let i = 1; i < data.length; i++) {
		if (datai !== data[i]) {
			return false; //说明是这种"bbbbbba"
		}
	}
	return true; //说明是这种"bbbbbbb"
}

//删除所有的重复数据
let deleteAllRepeat = (data) => {
	let result = "";
	let arrayData = data.split("");

	arrayData.map((item) => {
		if (result.indexOf(item) === -1) {
			//result没有这个字段
			result = result + item;
		}
	});

	return result;
}

//一个都没有重复
let isNoRepeat = (data) => {
	//删除全部相同的字段,如果删除后和原来的相等,说明没有相同的字段
	return data === deleteAllRepeat(data) ? true : false;
}

// 得到最大的数
let getBig = (a, b) => {
	return a >= b ? a : b;
}

// 循环获取数组里所有不相等相连的字符串
let getNoRepeatLength = (data) => {
	let Big = 0; //最大的数
	let length = data.length;
	let head = 0; //从数组下标第一个开始比较
	let diffLength = 2; //从长度为1和2开始比较都可以的,但是因为检测过重复,所以不需要再从1开始

	while (head !== length - 1) {
		while (diffLength <= length - head) {
			let diffData = data.substr(head, diffLength); //获取所有的截取字段
			if (diffData === deleteAllRepeat(diffData)) {
				//如果截取的字段和过滤过的字段相等
				//说明里面没有相同的字段
				Big = getBig(Big, diffData.length); //记录长度
			} else {
				diffLength++;
				continue;
			}

			if (isRepeat(diffData)) {
				//有相连相同的
				//要在判断之前的字符串是否有和现在两个相同的字符串,比如这两个相同的字段是a,那么还要检测前面有没有这个a字段
				let sampleData = data.substr(head, 1); //相同的字段
				let preData = data.substr(0, head); //之前的字符串

				if (preData.indexOf(sampleData) === -1) {
					//之前的字符串没有这个相同的字段,也就是没有a
					//那么需要处理
					Big = getBig(Big, diffData.length + 1); //记录长度
				}

				// log(preData,sampleData);
			} else {
				Big = getBig(Big, diffLength); //记录长度
			}
			// log(head,diffLength);
			diffLength++;
		}
		diffLength = 2; //归位
		head++;
	}

	//返回最大的	
	return Big;
}

let lengthOfLongestSubstring = (string) => {
	//首先验证空
	if (string === "") {
		return 0;
	}
	//验证全部都不一样的字符串
	if (isNoRepeat(string)) {
		//如果都不一样就直接返回
		return string.length;
	}
	//验证是不是全部一样的字符

	let deleteRepeat = deleteAllRepeat(string);
	if (deleteRepeat.length === 1) {
		//如果是的话返回1
		return 1;
	} else {
		return getNoRepeatLength(string);
	}
}

log(lengthOfLongestSubstring("naovupjrglxlbhsrbyjrhighbgqhnnkaozxkog"))