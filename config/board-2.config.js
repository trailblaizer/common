module.exports = {
  type: 'j5',
  board: 'BOARD_UNO_2',
  components: [
    {
      type: 'imu',
      controller: 'MPU6050',
      address: 0x68,
    },
  ],
};
