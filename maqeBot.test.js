const MaqeBot = require('./maqeBot');

test('test maqe bot initial', () => {
    const maqeBot = new MaqeBot();

    expect(maqeBot.getPosition()).toEqual({ x: 0, y: 0, d: 'N' });
    expect(maqeBot.toString()).toBe('X: 0 Y: 0 Direction: North');
});

test('test maqe bot with cmd "RW15RW1"', () => {
    const maqeBot = new MaqeBot('RW15RW1');

    expect(maqeBot.getPosition()).toEqual({ x: 15, y: -1, d: 'S' });
    expect(maqeBot.toString()).toBe('X: 15 Y: -1 Direction: South');
});

test('test maqe bot with cmd "W55555RW555555W444444W1"', () => {
    const maqeBot = new MaqeBot('W55555RW555555W444444W1');

    expect(maqeBot.getPosition()).toEqual({ x: 1000000, y: 55555, d: 'E' });
    expect(maqeBot.toString()).toBe('X: 1000000 Y: 55555 Direction: East');
});

