//Find a peak element which is not smaller than its neighbors

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Example usage:
const nums = [1, 3, 20, 4, 1, 0];
const peakIndex = findPeakElement(nums);
console.log(`Peak element is at index: ${peakIndex}, value: ${nums[peakIndex]}`);
