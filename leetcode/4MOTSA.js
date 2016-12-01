/**
 * 入口
 * @param  {[type]} nums1 [description]
 * @param  {[type]} nums2 [description]
 * @return {[type]}       [description]
 */
let findMedianSortedArrays = (nums1, nums2)=> {
	let all = nums1.concat(nums2);//连接两个数组
	// 排序
	let sortArray = all.sort((a,b)=>{
		return a-b;
	});

	let len = sortArray.length;//获取该数组长度
	if(len%2===0){
		// 数组为偶数
		// 返回数组中间的两个数的平均数
		return (sortArray[len/2-1]+sortArray[len/2])/2;
	}
	else{
		// 数组为奇数
		// 返回数组的中间值
		return sortArray[parseInt(len/2)];
	}
};

let a = [1,2];
let b = [4];

console.log(findMedianSortedArrays(a,b))