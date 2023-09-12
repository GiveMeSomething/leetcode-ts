function minDeletions(s: string): number {
    const charMap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        charMap.set(s[i], (charMap.get(s[i]) ?? 0) + 1);
    }

    const frequency: boolean[] = [];
    let deletion = 0;

    for (let occurance of charMap.values()) {
        if (frequency[occurance]) {
            for (let i = occurance - 1; i >= 0; i--) {
                if (frequency[i]) {
                    continue;
                }
                deletion += occurance - i;

                // 0 occurances is always available for all characters
                if (i > 0) {
                    frequency[i] = true;
                }
                break;
            }
            continue;
        }

        frequency[occurance] = true;
    }

    return deletion;
}

export const main_1647 = () => {
    // const s = "aab";
    // const s = "aaabbbcc";
    const s = "bbcebabqwrty";

    const result = minDeletions(s);
    console.log(result);
};
