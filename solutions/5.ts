// function longestPalindrome(s: string): string {
//     let max = s[0];

//     for (let i = 0; i < s.length; i++) {
//         let low = i - 1;
//         let high = i + 1;
//         while (low >= 0 && s[low] === s[i]) {
//             low--;
//         }

//         while (high < s.length && s[high] === s[i]) {
//             high++;
//         }

//         while (low >= 0 && high < s.length && s[low] === s[high]) {
//             low--;
//             high++;
//         }

//         const result = s.slice(low + 1, high);
//         if (result.length > max.length) {
//             max = result;
//         }
//     }

//     return max;
// }

// function longestPalindrome(s: string): string {
//     let max = "";

//     for (let i = 0; i < s.length; i++) {
//         let low = i - 1;
//         let high = i + 1;
//         while (low >= 0 && s[low] === s[i]) {
//             low--;
//         }
//         while (high < s.length && s[high] === s[i]) {
//             high++;
//         }
//         while (low >= 0 && high < s.length && s[low] === s[high]) {
//             low--;
//             high++;
//         }

//         if (high - low - 1 > max.length) {
//             max = s.slice(low + 1, high);
//         }
//     }

//     return max;
// }

export const main_5 = () => {
    // const s = "babad";
    // const s = "cbbd";
    const s = "bbbb";
    // const s = "ac";
    // const s = "bb";

    const result = longestPalindrome(s);
    console.log(result);
};
