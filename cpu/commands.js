/**
 * Returns value of given memory address
 * @param {Number} adr
 * @returns
 */
const get = (adr) => {
    return mem[adr];
};

/**
 * Sets value to one of 255 memory addresses
 * @param {Number} adr
 * @param {i16} val
 */
const set = (adr, val) => {
    mem[adr] = val.i;
};

/**
 * Returns the sum of 2 memory addresses
 * @param {Number} ad1
 * @param {Number} ad2
 * @returns
 */
const sum = (ad1, ad2) => {
    return new i16(get(ad1) + get(ad2));
};

/**
 * Returns the difference of 2 memory addresses
 * @param {Number} ad1
 * @param {Number} ad2
 * @returns
 */
const dif = (ad1, ad2) => {
    return new i16(get(ad1) - get(ad2));
};

/**
 * Returns the product of 2 memory addresses
 * @param {Number} ad1
 * @param {Number} ad2
 * @returns
 */
const mult = (ad1, ad2) => {
    return new i16(get(ad1) * get(ad2));
};

/**
 * Returns the quotient of 2 memory addresses
 * @param {Number} ad1
 * @param {Number} ad2
 * @returns
 */
const div = (ad1, ad2) => {
    return new i16(get(ad1) / get(ad2));
};

/**
 * Swaps the value of 2 memory addresses
 * @param {Number} ad1
 * @param {Number} ad2
 */
const swap = (ad1, ad2) => {
    let sto1 = get(ad1);
    mem[ad1] = get(ad2);
    mem[ad2] = sto1;
};

/**
 * Resets the value of a memory address back to 0
 * @param {Number} adr
 */
const clr = (adr) => {
    mem[adr] = 0;
};

/**
 * Increments a memory address' value by 1
 * @param {Number} adr
 */
const inc = (adr) => {
    mem[adr] = get(adr) + 1;
};

/**
 * Decrements a memory address' value by 1
 * @param {Number} adr
 */
const dec = (adr) => {
    mem[adr] = get(adr) - 1;
};

/**
 * Sets memory address' value to v^p, v being the address' value
 * @param {Number} adr
 * @param {i16} exp
 * @returns
 */
const pow = (adr, exp) => {
    return new i16(get(adr) ** exp.i);
};
