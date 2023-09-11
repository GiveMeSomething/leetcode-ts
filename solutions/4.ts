// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     if (nums1.length === 0) {
//         if (nums2.length % 2 === 0) {
//             const firstMedian = nums2.length / 2;
//             const secondMedian = firstMedian - 1;
//             return (nums2[firstMedian] + nums2[secondMedian]) / 2;
//         } else {
//             return nums2[Math.floor(nums2.length / 2)];
//         }
//     }

//     if (nums2.length === 0) {
//         if (nums1.length % 2 === 0) {
//             const firstMedian = nums1.length / 2;
//             const secondMedian = firstMedian - 1;
//             return (nums1[firstMedian] + nums1[secondMedian]) / 2;
//         } else {
//             return nums1[Math.floor(nums1.length / 2)];
//         }
//     }

//     const isStartFromNums1 = nums1[0] > nums2[0];
//     const isEndInNums1 = nums1[nums1.length] > nums2[nums2.length];

//     const totalLength = nums1.length + nums2.length;
//     const requireTwoMedian = totalLength % 2 === 0;
//     const result = [];

//     // The number of value that the median need to be lesser/greater than
//     const medianRequirement = Math.floor(totalLength / 2);

//     console.log(
//         "require 2 median",
//         requireTwoMedian,
//         "value",
//         medianRequirement,
//     );

//     while (true) {
//         const median1Index = Math.floor(nums1.length / 2);
//         const median1Value = nums1[median1Index];

//         const median2Index = Math.floor(nums2.length / 2);
//         const median2Value = nums2[median2Index];

//         // Count how many median 1 is greater
//         let median1Greater = median1Index + (isStartFromNums1 ? 0 : 1);
//         let median2Greater = median2Index + (isStartFromNums1 ? 0 : 1);
//         if (median1Value >= median2Value) {
//             median1Greater = median1Index + median2Index + 1;
//         } else {
//             median2Greater = median1Index + median2Index + 1;
//         }

//         console.log(
//             "i1",
//             median1Index,
//             "v1",
//             median1Value,
//             "greater",
//             median1Greater,
//         );
//         console.log(
//             "i2",
//             median2Index,
//             "v2",
//             median2Value,
//             "greater",
//             median2Greater,
//         );

//         if (requireTwoMedian) {
//             if (
//                 median1Greater === medianRequirement ||
//                 median1Greater === medianRequirement - 1
//             ) {
//                 result.push(median1Value);
//             }

//             if (median1Greater > medianRequirement) {
//                 nums1 = nums1.slice(0, median1Index);
//             } else if (median1Greater < medianRequirement) {
//                 nums1 = nums1.slice(median1Index, nums1.length);
//             }

//             if (
//                 median2Greater === medianRequirement ||
//                 median2Greater === medianRequirement - 1
//             ) {
//                 result.push(median2Value);
//             }

//             if (median2Greater > medianRequirement) {
//                 nums2 = nums2.slice(0, median2Index);
//             } else if (median2Greater < medianRequirement) {
//                 nums2 = nums2.slice(median2Index, nums2.length);
//             }

//             console.log(result);

//             if (result.length >= 2) {
//                 return (result[0] + result[1]) / 2;
//             }
//         } else {
//             if (median1Greater > medianRequirement) {
//                 nums1 = nums1.slice(0, median1Index);
//             } else if (median1Greater < medianRequirement) {
//                 nums1 = nums1.slice(median1Index, nums1.length);
//             } else {
//                 return nums1[median1Index];
//             }

//             if (median2Greater > medianRequirement) {
//                 nums2 = nums2.slice(0, median2Index);
//             } else if (median2Greater < medianRequirement) {
//                 nums2 = nums2.slice(median2Index, nums2.length);
//             } else {
//                 return nums2[median2Index];
//             }
//         }
//     }
// }

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length === 0) {
        if (nums2.length % 2 === 0) {
            const firstMedian = nums2.length / 2;
            const secondMedian = firstMedian - 1;
            return (nums2[firstMedian] + nums2[secondMedian]) / 2;
        } else {
            return nums2[Math.floor(nums2.length / 2)];
        }
    }

    if (nums2.length === 0) {
        if (nums1.length % 2 === 0) {
            const firstMedian = nums1.length / 2;
            const secondMedian = firstMedian - 1;
            return (nums1[firstMedian] + nums1[secondMedian]) / 2;
        } else {
            return nums1[Math.floor(nums1.length / 2)];
        }
    }

    const length = nums1.length + nums2.length;
    const cut = Math.floor(length / 2);
    const requireTwoMedian = length % 2 === 0;

    let cut1 = nums1.length > cut ? nums1.length - cut : 0;
    let cut2 = cut - cut1;

    while (true) {
        // console.log("cut1", cut1);
        // console.log("cut2", cut2);

        const x1 = nums1[cut1 - 1];
        const x2 = nums1[cut1];
        const y1 = nums2[cut2 - 1];
        const y2 = nums2[cut2];

        // console.log("x1", x1, "x2", x2, "y1", y1, "y2", y2);

        let allLeftIsSmallerThanRight = true;
        if (x1 == null || y2 == null || x1 <= y2) {
            allLeftIsSmallerThanRight = allLeftIsSmallerThanRight && true;
        } else {
            allLeftIsSmallerThanRight = allLeftIsSmallerThanRight && false;
        }

        if (x2 == null || y1 == null || x2 >= y1) {
            allLeftIsSmallerThanRight = allLeftIsSmallerThanRight && true;
        } else {
            allLeftIsSmallerThanRight = allLeftIsSmallerThanRight && false;
        }

        if (allLeftIsSmallerThanRight) {
            if (requireTwoMedian) {
                return (
                    (Math.max(x1 ?? Number.MIN_VALUE, y1 ?? Number.MIN_VALUE) +
                        Math.min(
                            x2 ?? Number.MAX_VALUE,
                            y2 ?? Number.MAX_VALUE,
                        )) /
                    2
                );
            } else {
                return Math.min(x2 ?? Number.MAX_VALUE, y2 ?? Number.MAX_VALUE);
            }
        }

        // This mean the cut1 need to be reduce so the number of the right
        if (x1 > y2) {
            cut1--;
        }
        if (x2 < y1) {
            cut1++;
        }
        cut2 = cut - cut1;
    }
}

export const main_4 = () => {
    // const nums1 = [1, 2];
    // const nums2 = [3, 4];

    // const nums1 = [0, 0];
    // const nums2 = [0, 0];

    // const nums1 = [1, 100, 200, 600];
    // const nums2 = [3, 5, 7, 500];

    const nums1 = [1, 3];
    const nums2 = [2];

    const median = findMedianSortedArrays(nums1, nums2);
    console.log(median);
};
