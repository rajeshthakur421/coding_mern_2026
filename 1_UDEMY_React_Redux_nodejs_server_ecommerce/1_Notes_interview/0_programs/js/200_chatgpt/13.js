//Merge Intervals.

function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let lastMerged = merged[merged.length - 1];

        // If the current interval overlaps with the last merged interval
        if (current[0] <= lastMerged[1]) {
            // Merge the intervals by updating the end time
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add the current interval to the merged list
            merged.push(current);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log("Merged intervals:", mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]
