Solve the following using optimized approaches:

Longest Subarray with Sum=K Given an array and integer K,return the length of the longest subarray with sum=K Top K Frequent Elements Given an array and integer K,return the K most frequent elements Longest Consecutive Sequence Given an unsorted array,find the length of the longest consecutive elements sequence Solve in O(n)time using Set

1. Longest Subarray with Sum=K(O(n))

import java.util.*;

public class LongestSubarraySumK {
    public static int longestSubarrayWithSumK(int[] nums, int k) {
        Map<Integer, Integer> prefixMap = new HashMap<>();
        int sum = 0, maxLen = 0;

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum == k) {
                maxLen = i + 1;
            }

            if (prefixMap.containsKey(sum - k)) {
                maxLen = Math.max(maxLen, i - prefixMap.get(sum - k));
            }

            prefixMap.putIfAbsent(sum, i);
        }

        return maxLen;
    }

    // Example usage
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 1, 1, 1, 1, 2 };
        int k = 4;
        System.out.println(longestSubarrayWithSumK(arr, k)); // Output: 4
    }
}

2.

Top K

Frequent Elements (O(n log k) with Min-Heap)
import java.util.*;

public class TopKFrequentElements {
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>(Map.Entry.comparingByValue());

        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        List<Integer> result = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : minHeap) {
            result.add(entry.getKey());
        }

        return result;
    }

    // Example usage
    public static void main(String[] args) {
        int[] nums = { 1, 1, 1, 2, 2, 3 };
        int k = 2;
        System.out.println(topKFrequent(nums, k)); // Output: [1, 2]
    }
}3.

Longest Consecutive

Sequence (O(n) using HashSet)
import java.util.*;

public class LongestConsecutiveSequence {
    public static int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums)
            numSet.add(num);

        int longest = 0;

        for (int num : numSet) {
            if (!numSet.contains(num - 1)) { // Start of a sequence
                int current = num;
                int streak = 1;

                while (numSet.contains(current + 1)) {
                    current++;
                    streak++;
                }

                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }

    // Example usage
    public static void main(String[] args) {
        int[] nums = { 100, 4, 200, 1, 3, 2 };
        System.out.println(longestConsecutive(nums)); // Output: 4
    }
}
