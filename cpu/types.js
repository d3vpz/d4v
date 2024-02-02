class i16 {
    /**
     * Signed 16-bit integer
     * @param {Number} x
     */
    constructor(x) {
        let num = Math.floor(x);
        if (Math.abs(num) > 32767) {
            this.i = null;
        } else {
            this.i = num;
        }
    }
}
