const selector = (value, getter) => {
    if (!getter) return value;
    if (typeof getter === 'string') return value[getter]
    return getter(value);
}

Array.prototype.select = function (selector) {
    return this.map(value => value[selector])
};

Array.prototype.max = function (getter) {
    let max = selector(this[0], getter);

    for (let value of this) {
        value = selector(value, getter)
        if (value !== null && max < value)
            max = value
    }

    return max;
};

Array.prototype.min = function (getter) {
    let min = selector(this[0], getter);

    for (let value of this) {
        value = selector(value, getter)
        if (value !== null && min > value)
            min = value
    }

    return min;
};

Array.prototype.sum = function (getter) {
    let sum = 0;
    for (const value of this)
        sum += selector(value, getter)

    return sum
};

Array.prototype.mean = function (getter) {
    if (this.length === 0) return NaN;

    let sum = 0;
    for (const value of this)
        sum += selector(value, getter)

    return sum / this.length
};

Array.prototype.median = function (getter) {
    const sorted = (getter ? this.map(value => selector(value, getter)) : this).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0)
        return (sorted[middle - 1] + sorted[middle]) / 2;

    return sorted[middle];
}

Array.prototype.groupBy = function (getter) {
    const results = {};
    let group;
    for (const value of this) {
        group = selector(value, getter)
        if (!results[group]) results[group] = []
        results[group].push(value)
    }
    return results;
}

Array.prototype.unique = function () {
    return [...new Set(this)];
};

Array.prototype.shuffle = function () {
    let currentIndex = this.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
    }

    return this;
}
