Problem Statement:

Solve the following problems with a focus on edge case handling:

Find the First Non-Repeating Character in a String Return the character or 1 if none found Group Anagrams Given an array of strings,group all anagrams together Longest Palindromic Substring Return the longest substring that is a palindrome(optimize using center expansion)1. Find the First Non-Repeating Character in a String Edge cases handled:

Empty string

All repeating characters

Case sensitivity

import java.util.*;

public class FirstUniqueCharacter {
    public static char firstNonRepeatingChar(String s) {
        if (s == null || s.isEmpty())
            return '1';

        Map<Character, Integer> countMap = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            countMap.put(c, countMap.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == 1)
                return entry.getKey();
        }

        return '1'; // No non-repeating character found
    }

    public static void main(String[] args) {
        System.out.println(firstNonRepeatingChar("aabbcdd")); // Output: c
        System.out.println(firstNonRepeatingChar("aabb")); // Output: 1
        System.out.println(firstNonRepeatingChar("")); // Output: 1
    }}2.

    Group Anagrams
Edge cases handled:

    Empty array

Words with
different lengths

Duplicate stringsimport java.util.*;

    public class GroupAnagrams {
        public static List<List<String>> groupAnagrams(String[] strs) {
            Map<String, List<String>> map = new HashMap<>();

            for (String word : strs) {
                char[] chars = word.toCharArray();
                Arrays.sort(chars);
                String sortedKey = new String(chars);

                map.computeIfAbsent(sortedKey, k -> new ArrayList<>()).add(word);
            }

            return new ArrayList<>(map.values());
        }

        public static void main(String[] args) {
            String[] input = { "eat", "tea", "tan", "ate", "nat", "bat" };
            System.out.println(groupAnagrams(input));
            // Output: [[eat, tea, ate], [tan, nat], [bat]]
        }
}3.

Longest Palindromic

Substring (Center Expansion)
Edge cases handled:

Empty string

All characters same

No palindromes longer than 1 character
public class LongestPalindrome {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";

        int start = 0, end = 0;

        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);     // Odd-length palindromes
            int len2 = expandAroundCenter(s, i, i + 1); // Even-length palindromes
            int len = Math.max(len1, len2);

            if (len > end - start) {
                start = i - ((len - 1) / 2);
                end = i + (len / 2);
            }
        }

        return s.substring(start, end + 1);
    }

    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Output: "bab" or "aba"
        System.out.println(longestPalindrome("cbbd"));  // Output: "bb"
        System.out.println(longestPalindrome("a"));     // Output: "a"
        System.out.println(longestPalindrome(""));      // Output: ""
    }
}
