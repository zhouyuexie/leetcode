/**
 * 是否回文
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
const isPalindromic = s => {
	let len = s.length;
	// 偶数
	if(len%2===0){
		let headValue = s[0];
		for(let i=1;i<len-1;i++){
			// 判断是否相同
			if(headValue!==s[i]){
				//i之前的相同
				return true;
			}
		}
		return false;
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
	let start = 0;//s开始地方
	let head = 1;//指针
	let len = s.length-1;

	while(start<=len){
		let diff = len-start;
		while(head<diff){
			let substr = s.substr(start,head);
			// if(isPalindromic(substr)){
			// 	console.log(substr)
			// }
			console.log(substr)
			head++;
		}
		start++;
		head=1;
	}
};

longestPalindrome("cbbd")