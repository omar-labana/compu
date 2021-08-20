import calculate from '../../logic/calculate'
const data = {
    total: null,
    next: null,
    operationName: null,
};

const resetData = () => {
    data.total = null
    data.next = null
    data.operationName = null
}

const setData = (t, n, o) => {
    data.total = t
    data.next = n
    data.operationName = o
}

describe('calculation tests', () => {
    test('ACE', () => {
        const calculation = calculate(data, 'AC');

        expect(typeof calculation).toBe('object');

        expect(calculation).toMatchObject({
            total: "0",
            next: null,
            operationName: null,
        })

        expect(calculation.total).toStrictEqual("0");
        expect(calculation.next).toStrictEqual(null);
        expect(calculation.operationName).toStrictEqual(null);

        expect(calculation).toEqual({
            total: "0",
            next: null,
            operationName: null,
        });
        resetData()
    })

    test('+/-', () => {
        setData("1", "10", null)
        const calculation = calculate(data, '+/-');
        expect(calculation.total).toStrictEqual("-1");
        expect(calculation.next).toStrictEqual("-10");
        expect(calculation.operationName).toStrictEqual(null);

    })

    test('arithmetics', () => {
        setData("10", "10", "+")
        const sum = calculate(data, "=")
        expect(sum.total).toStrictEqual("20");

        setData("10", "10", "-")
        const sub = calculate(data, '=');
        expect(sub.total).toStrictEqual("0");

        setData("10", "10", "X")
        const mul = calculate(data, '=');
        expect(mul.total).toStrictEqual("100");

        setData("10", "10", "÷")
        const div = calculate(data, '=');
        expect(div.total).toStrictEqual("1");

        setData("10", "10", "%")
        const mod = calculate(data, '=');
        expect(mod.total).toStrictEqual("0");
    })

    test('any number', () => {
        const num = calculate({
            total: null,
            next: null,
            operationName: null,
        }, "1")
        expect(num.total).toStrictEqual("1");
    })
})