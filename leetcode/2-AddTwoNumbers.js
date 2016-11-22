//链表
function ListNode(val) {
	this.val = val;
	this.next = null;
}

//链表值相加,判断是否大于9
function ListAdd(l1,l2){
	var len = l1.val+l2.val;
	if(len>9){
		//结果两位数
		var a = parseInt(len/10);//十位
		var b = len%10;//个位
		console.log("addlen:",a,b);
		return [a,b];
	}
	else{
		//结果一位数
		console.log("addlen:",len);
		return len;
	}
}

//计算链表长度
function ListLength(l){
	var length = 0;
	while(l){
		length++;
		l = l.next;
	}
	console.log("length:",length);
	return length;
}

//判断数据类型
function judgeType(data){
	return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

//长度相等的两个链表相加
function AllAddEqual(l1,l2,result){
	var addresult = 0;//每次相加后存储的数据
	while(l1){
		addresult = ListAdd(l1,l2);
		if(judgeType(addresult)==="number"){
			//个位数
			result.val = addresult+result.val;

			if(l1.next||result.val>9){
				//如果还有的话就再赋值
				result.next = new ListNode(0);
				//如果这个值是两位数
				if(result.val>9){
					//console.log(result.val)
					result.val = 0;
					result.next = new ListNode(1);
				}
				result = result.next;
			}
		}
		else{
			//十位数
			result.val = addresult[1]+result.val;
			result.next = new ListNode(addresult[0]);
			result = result.next;
		}
		l1 = l1.next;
		l2 = l2.next;
	}
}

//长度不相等的两个链表相加
function L1NoEqualL2(l1,l2,BigOne,result){
	// 区分最大最小的
	var TheSmallOne = null;
	var TheBigOne = null;
	if(BigOne==="l1"){
		TheSmallOne = l2;
		TheBigOne = l1;
	}
	else{
		TheSmallOne = l1;
		TheBigOne = l2;
	}
	
	var addresult = null;//每次相加后存储的数据

	while(TheSmallOne){
		addresult = ListAdd(TheSmallOne,TheBigOne);
		if(judgeType(addresult)==="number"){
			//个位数
			result.val = addresult;
			result.next = new ListNode(0);
			result = result.next;
		}
		else{
			//十位数
			result.val = addresult[1]+result.val;
			result.next = new ListNode(addresult[0]);
			result = result.next;
		}
		TheSmallOne = TheSmallOne.next;
		TheBigOne = TheBigOne.next;
	}
	
	while(TheBigOne){
		addresult = ListAdd(result,TheBigOne);
		if(judgeType(addresult)==="number"){
			//个位数
			result.val = addresult;//个位数不用再加result.val
			if(TheBigOne.next){
				// 防止最后输出多一个0
				result.next = new ListNode(0);
				result = result.next;
			}
		}
		else{
			//十位数
			result.val = addresult[1];
			result.next = new ListNode(addresult[0]);
			result = result.next;
		}

		TheBigOne = TheBigOne.next;
	}
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var length1 = ListLength(l1);
	var length2 = ListLength(l2);
	var result = new ListNode(0);
	var resultHead = result;//保存结果开头地址

	if(length1===length2){
		// 长度相等
		AllAddEqual(l1,l2,result);
	}
	else{
		if(length1>length2){
			// l1大于l2
			L1NoEqualL2(l1,l2,"l1",result);
		}
		else{
			// l1小于l2
			L1NoEqualL2(l1,l2,"l2",result);
		}
	}
	return showList(resultHead);
};

function showList(data){
	var array = [];
	while(data){
		array.push(data.val);
		data = data.next;
	}
	return array;
}

var arrayTolist = (data)=>{
	var listdata = new ListNode(0);
	var head = listdata;
	// for(var i=0;i<data.length;i++){
	// 	list.val = data[i];
	// 	list = list.next;
	// }
	data.map((item)=>{
		listdata.val = item;
		listdata.next = new ListNode(0);
		listdata = listdata.next;
	});
	return head;
}

var l1 = arrayTolist([2,8,9,9,9,9,8,9,9,9])

var l2 = arrayTolist([8,1,2])

console.log(addTwoNumbers(l1,l2));