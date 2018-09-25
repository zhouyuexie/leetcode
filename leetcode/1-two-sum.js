/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
 */

const twoSum = function(nums, target) {
  const result = [];
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
		const needMatch = target - nums[i];
    
    if (map.get(nums[i]) !== undefined) {
      result[0] = nums.indexOf(needMatch);
			result[1] = i;
			break;
    } else {
			map.set(needMatch, nums[i]);
    }
  }
  
  return result;
};