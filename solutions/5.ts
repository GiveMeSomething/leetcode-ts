function longestPalindrome(s: string): string {
    let max = s[0];

    for (let i = 0; i < s.length; i++) {
        let low = i - 1;
        let high = i + 1;
        while (low >= 0 && s[low] === s[i]) {
            low--;
        }

        while (high < s.length && s[high] === s[i]) {
            high++;
        }

        while (low >= 0 && high < s.length && s[low] === s[high]) {
            low--;
            high++;
        }

        const result = s.slice(low + 1, high);
        if (result.length > max.length) {
            max = result;
        }
    }

    return max;
}

export const main_5 = () => {
    const s = "babad";

    const result = longestPalindrome(s);
    console.log(result);
};
