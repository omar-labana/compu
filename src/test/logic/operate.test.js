import operate from '../../logic/operate';

describe('Operate module', () => {
  test('working arthmetics', () => {
    const sum = operate('10', '10', '+').toString();
    expect(sum).toBe('20');
    const sub = operate('10', '10', '-').toString();
    expect(sub).toBe('0');
    const mul = operate('10', '10', 'X').toString();
    expect(mul).toBe('100');
    const div = operate('10', '10', '÷').toString();
    expect(div).toBe('1');
    const mod = operate('10', '10', '%').toString();
    expect(mod).toBe('0');
  });
});
