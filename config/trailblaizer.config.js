module.exports = {
  name: 'Trailblaizer 8',
  boards: [
    {
      // Test Comment
      name: 'Left Hand IMU',
      ref: 'BOARD_UNO_1',
      components: [
        {
          type: 'imu',
          controller: 'MPU6050',
          address: 0x68,
        },
      ],
    },
    {
      name: 'Right Hand IMU',
      ref: 'BOARD_UNO_2',
      components: [
        {
          type: 'imu',
          controller: 'MPU6050',
          address: 0x68,
        },
      ],
    },
    {
      name: 'Faders & Knobs',
      ref: 'BOARD_MEGA_1',
      components: [
        {
          id: 'knob-1',
          type: 'knob',
          clk: 2,
          dt: 3,
          sw: 4,
        },
        {
          id: 'knob-2',
          type: 'knob',
          clk: 5,
          dt: 6,
          sw: 7,
        },
        {
          id: 'knob-3',
          type: 'knob',
          clk: 8,
          dt: 9,
          sw: 10,
        },
        {
          id: 'knob-4',
          type: 'knob',
          clk: 11,
          dt: 12,
          sw: 13,
        },
        {
          id: 'knob-5',
          type: 'knob',
          clk: 14,
          dt: 15,
          sw: 16,
        },
        {
          id: 'knob-6',
          type: 'knob',
          clk: 17,
          dt: 18,
          sw: 19,
        },
        {
          id: 'knob-7',
          type: 'knob',
          clk: 20,
          dt: 21,
          sw: 22,
        },
        {
          id: 'knob-8',
          type: 'knob',
          clk: 23,
          dt: 24,
          sw: 25,
        },
        {
          id: 'knob-master-1',
          type: 'knob',
          clk: 26,
          dt: 27,
          sw: 28,
        },
        {
          id: 'knob-master-2',
          type: 'knob',
          clk: 29,
          dt: 30,
          sw: 31,
        },
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
      ],
    },
  ],
};
