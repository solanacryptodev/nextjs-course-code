// With Hashtable - O(n) time | O(n) space
export function twoNumberSumOne(array: number[], targetSum: number)
{
    // The Hash Table
    const nums: {[key: number]: boolean} = {}
    for (const num of array)
    {
        const potentialMatch = targetSum - num;
        if ( potentialMatch in nums )
        {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

// With array sort - O(n Log(n)) time | O(1) space
export function twoNumberSumTwo(array: number[], targetSum: number) {
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while ( left < right )
    {
        const currentSum = array[left] + array[right];
        if ( currentSum === targetSum )
        {
            return [array[left], array[right]];
        } else if ( currentSum < targetSum )
        {
            left++;
        } else if ( currentSum > targetSum )
        {
            right--;
        }
    }
    return [];
}

