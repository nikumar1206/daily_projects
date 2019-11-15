Array.prototype.mergeSort = function (cb) {
    if (this.length <= 1) {
        return this;
    }
    let mid = Math.floor(this.length / 2);

    let left = this.slice(0, mid);
    let right = this.slice(mid);

    left = left.mergeSort(cb);
    right = right.mergeSort(cb);

    return merge(left, right, cb);

}

function merge(left, right, cb) {
    let merged = [];

    while (left.length !== 0 && right.length !== 0) {
        if (cb(left[0], right[0])) {
            merged.push(left[0]);
            left.shift();
        } else {
            merged.push(right[0]);
            right.shift();
        }
    }

    return merged.concat(left, right);
}