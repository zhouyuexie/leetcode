// 实现思路:
// 1. 将l1,l2相加,不管结果(函数AddList)
// 2. AddList的返回值是没有处理过也就是没有格式化过的数据链表,
//    需要我们加工一次才能获取到正确的链表值(函数formatList)
// 3. 格式化后还有最后一步就是处理成数组返回给leetcode(函数showList)

// 1,2是核心步骤,其中的函数也是核心函数.

// 链表格式
function ListNode(val) {
	this.val = val;
	this.next = null;
}

//计算链表长度
function ListLength(l) {
	let length = 0;
	while (l) {
		length++;
		l = l.next;
	}
	return length;
}

//判断数据类型
function judgeType(data) {
	return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

// 处理成leetcode识别的数组形式
function showList(data) {
	const array = [];
	while (data) {
		array.push(data.val);
		data = data.next;
	}
	return array;
}

// 将输入的数组格式化成链表格式以便我们使用
const arrayTolist = (data) => {
	let first = true;
	let listdata = null;
	let head = null;

	data.map((item) => {
		if (first) {
			listdata = new ListNode(item);
			head = listdata;
			first = false;
		} else {
			listdata.next = new ListNode(item);
			listdata = listdata.next;
		}
	});
	return head;
}

// 将l1,l2全部相加
function AddList(l1, l2) {
	let result = new ListNode(0);
	let resultHead = result; //保存结果开头地址

	// 区分最大最小的
	let TheSmallOne = null;
	let TheBigOne = null;
	if (ListLength(l1) >= ListLength(l2)) {
		TheSmallOne = l2;
		TheBigOne = l1;
	} else {
		TheSmallOne = l1;
		TheBigOne = l2;
	}

	while (TheSmallOne) {
		result.val = TheSmallOne.val + TheBigOne.val;

		if (TheSmallOne.next || ListLength(l1) !== ListLength(l2)) {
			// 这里是有下一个的话就就设置
			// 或者如果长度不相等,就需要设置这个结果
			result.next = new ListNode(0);
			result = result.next;
		}

		TheSmallOne = TheSmallOne.next;
		TheBigOne = TheBigOne.next;
	}

	while (TheBigOne) {
		result.val = TheBigOne.val;

		if (TheBigOne.next) {
			result.next = new ListNode(0);
			result = result.next;
		}

		TheBigOne = TheBigOne.next;
	}
	return resultHead;
}

//格式化链表
function formatList(list) {
	let NewList = list; //保存头部位置;
	let TenDigit = 0; //链表val中的十位数
	let SingleDigit = 0; //链表val中的个位数

	while (list) {
		if (list.val > 9) {
			//val 是两位数,记录这个数的十位数和个位数
			TenDigit = parseInt(list.val / 10);
			SingleDigit = list.val % 10;

			list.val = SingleDigit; //自己取个位数
			if (list.next) {
				//如果存在下一位
				list.next.val = list.next.val + TenDigit; //前面一位加一
			} else {
				//如果不存在下一位
				list.next = new ListNode(TenDigit);
			}
		}
		list = list.next;
	}
	return NewList;
}

//开始执行程序入口
const addTwoNumbers = function (l1, l2) {
	return showList(formatList(AddList(l1, l2)));
};

//构造两个链表
const l1 = arrayTolist([6, 6, 5, 5, 1, 3, 4, 6, 1])
const l2 = arrayTolist([8, 2, 5, 5, 4, 5, 6, 2, 1])

console.log(addTwoNumbers(l1, l2));