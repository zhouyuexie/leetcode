/**
 * 是否回文
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
const isPalindromic = s => {
	let len = s.length;
	// 偶数
	if(len%2===0){
		let head = 0;//第一个
		let last = len-1;//最后一个

		for(let i=0;i<len/2;i++){
			// 判断是否相同
			if(s[head]!==s[last]){
				//只要有一个不同就返回false
				return false;
			}
			head++;
			last--;
		}
		return true;
	}
	else{
		// 奇数
		let head = 0;
		let last = len-1;
		while(head!==last){
			if(s[head]!==s[last]){
				return false;
			}
			head++;
			last--;
		}
		// 如果s为一个字符串
		if(len===1){
			return false;
		}
		return true;
	}
}

/**
 * 入口
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
const longestPalindrome = s => {
	if(s.length===1)return s;//如果输入字符串长度为1就直接返回

	let start = 0;//s开始地方
	let head = 1;//指针
	let len = s.length;
	let result = [];//存储回文

	while(start<len){
		let diff = len-start;//head可以移动的范围
		while(head<=diff){
			let substr = s.substr(start,head);

			if(isPalindromic(substr)){
				result.push(substr);
			}
			// console.log(substr)
			head++;
		}
		head=1;
		start++;
	}

	// 如果一个都没有
	if(result.length===0){
		return s[0];//直接返回第一个
	}
	else{
		// console.log(result)
		return result.sort((a,b)=>{
			return b.length-a.length;
		})[0];//只返回第一个
	}
};

console.log(longestPalindrome("aaabaaaa"))