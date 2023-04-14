function createPinMapper(length) {
  return function createPinMap(start) {
    return new Array(length).fill(0).map((_, index) => start + index + 1);
  };
}

const NUM_KNOBS = 8;
const pinMapper8 = createPinMapper(NUM_KNOBS);
const clkPinMap = pinMapper8(22);
const dtPinMap = pinMapper8(38);
const swPinMap = pinMapper8(48);

const knobs = new Array(NUM_KNOBS).fill(0).map((_, index) => ({
  id: `knob-${index + 1}`,
  type: 'knob',
  clk: clkPinMap[index],
  dt: dtPinMap[index],
  sw: swPinMap[index],
}));

const faders = [
  {
    id: 'fader-1',
    type: 'fader',
    pin: 'A0',
  },
  {
    id: 'fader-2',
    type: 'fader',
    pin: 'A1',
  },
  {
    id: 'fader-3',
    type: 'fader',
    pin: 'A2',
  },
  {
    id: 'fader-4',
    type: 'fader',
    pin: 'A3',
  },
  {
    id: 'fader-5',
    type: 'fader',
    pin: 'A4',
  },
  {
    id: 'fader-6',
    type: 'fader',
    pin: 'A5',
  },
  {
    id: 'fader-7',
    type: 'fader',
    pin: 'A6',
  },
  {
    id: 'fader-8',
    type: 'fader',
    pin: 'A7',
  },
  {
    id: 'fader-master-1',
    type: 'fader',
    pin: 'A8',
  },
  {
    id: 'fader-master-2',
    type: 'fader',
    pin: 'A9',
  },
];

module.exports = {
  type: 'j5',
  board: 'BOARD_MEGA_1',
  components: [...knobs],
};
