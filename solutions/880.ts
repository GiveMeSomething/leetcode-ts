function decodeAtIndex(s: string, k: number): string {
    while (true) {
        let count = 0;
        let finalPosition = 0;

        for (let i = 0; i < s.length; i++) {
            const currentDigit = Number(s[i]);
            if (isNaN(currentDigit)) {
                count++;
            } else {
                count *= currentDigit;
            }

            if (count >= k) {
                finalPosition = i;
                break;
            }
        }

        if (isNaN(Number(s[finalPosition]))) {
            return s[finalPosition];
        }

        let baseCount = count / Number(s[finalPosition]);
        k = k % baseCount === 0 ? baseCount : k % baseCount;
    }
}

export const main_880 = () => {
    const s = "a2b3c4d5e6f7g8h9";
    const k = 9;

    const result = decodeAtIndex(s, k);
    console.log(result);
};
