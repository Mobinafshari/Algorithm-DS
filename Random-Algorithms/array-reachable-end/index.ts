export default function canJump(nums: number[]): boolean {
  let reachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) return false; 
    reachable = Math.max(reachable, i + nums[i]);
    if (reachable >= nums.length - 1) return true;
  }

  return false;
}
console.log(canJump([2, 3, 1, 1, 4])); 
