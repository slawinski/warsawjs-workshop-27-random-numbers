module.exports = {
    arrOfRand(n = 6) {
        // const arr = Array(n);

        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(this.randNum());
        }
        return arr;
    },

    randNum(lBound = 1, uBound = 81) {
        let min = Number(lBound);
        let max = Number(uBound);
        return Math.ceil(Math.random() * (max - min) + min); // eslint-disable-line
    }
};
