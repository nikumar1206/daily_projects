function binarySearch(arr, target) {
    if (arr.length === 0) return -1;

    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
        // Checking middle
        return mid;
    } else if (arr[mid] > target) {
        // Checking left half
        return binarySearch(arr.slice(0, mid), target);
    } else {
        // Checking right half - need to keep track of the search result and see if we found target
        const searchRes = binarySearch(arr.slice(mid + 1), target);
        return (searchRes === -1) ? -1 : searchRes + mid + 1
    }
}