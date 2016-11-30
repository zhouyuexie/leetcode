let findMedianSortedArrays = (nums1, nums2)=> {
	let all = nums1.concat(nums2);
	let sortArray = all.sort((a,b)=>{
		return a-b;
	});

	let len = sortArray.length;
	if(len%2===0){
		// 偶数
		return (sortArray[len/2-1]+sortArray[len/2])/2;
	}
	else{
		return sortArray[parseInt(len/2)];
	}
};

let a = [1,2];
let b = [4];

console.log(findMedianSortedArrays(a,b))