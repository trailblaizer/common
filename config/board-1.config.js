module.exports = {
  type: 'j5',
  board: 'BOARD_UNO_1',
  components: [
    {
      type: 'imu',
      controller: 'MPU6050',
      address: 0x68,
    },
  ],
};
