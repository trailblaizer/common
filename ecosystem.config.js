const path = require('path');

if (!process.env.TRAILBLAIZER_CONFIG_ROOT) {
  throw 'Root configuration directory was not provided!';
}

const config = (file) => path.join(process.env.TRAILBLAIZER_CONFIG_ROOT, file);

module.exports = {
  apps: [
    {
      name: 'Boards Discovery',
      script: './middleware/scripts/boards.js',
      args: ['--n=3', `--config=${config('boards.config.json')}`],
      watch: false,
      autorestart: false,
    },
    {
      name: '@trailblaizer/middleware #1 (Left Hand)',
      script: './middleware/dist/index.js',
      max_memory_restart: '300M',
      args: [
        '--port=10000',
        '--timeout=4000',
        '--board=BOARD_UNO_1',
        `--board-config=${config('board-1.config.js')}`,
        `--boards-config=${config('boards.config.json')}`,
      ],
      watch: './middleware',
    },
    // {
    //   name: '@trailblaizer/middleware #1 (Left Hand)',
    //   script: './arduino-code/node-serialport/lib/index.js',
    //   max_memory_restart: '300M',
    //   args: [
    //     '--name="Left Hand IMU"',
    //     '--port=10000',
    //     '--baud-rate=38400',
    //     '--board-port=/dev/cu.usbmodem143201',
    //   ],
    //   watch: './arduino-code/node-serialport',
    // },
    {
      name: '@trailblaizer/middleware #2 (Right Hand)',
      script: './middleware/dist/index.js',
      max_memory_restart: '300M',
      args: [
        '--port=10001',
        '--timeout=4000',
        '--board=BOARD_UNO_2',
        `--board-config=${config('board-2.config.js')}`,
        `--boards-config=${config('boards.config.json')}`,
      ],
      watch: './middleware',
    },
    {
      name: '@trailblaizer/middleware #3 (Faders & Knobs)',
      script: './middleware/dist/index.js',
      max_memory_restart: '300M',
      args: [
        '--port=10002',
        '--timeout=4000',
        '--board=BOARD_MEGA_1',
        `--board-config=${config('board-3.config.js')}`,
        `--boards-config=${config('boards.config.json')}`,
      ],
      watch: './middleware',
    },
    {
      name: '@trailblaizer/middleware-aggregator',
      script: 'middleware-aggregator/dist/index.js',
      max_memory_restart: '500M',
      args: [
        '--port=12000',
        `--middleware-config=${config('middleware.config.js')}`,
      ],
      watch: './middleware-aggregator',
    },
    {
      name: '@trailblaizer/midi-router',
      script: 'midi-router/dist/index.js',
      max_memory_restart: '500M',
      args: [
        '--port=14001',
        `--aggregator-ws-url=http://localhost:12000`,
        `--midi-router-config=${config('midi-router.config.js')}`,
      ],
      watch: './midi-router',
    },

    {
      name: '@trailblaizer/imu-performer',
      script: 'imu-performer/dist/index.js',
      max_memory_restart: '500M',
      args: [
        '--port=14000',
        `--aggregator-ws-url=http://localhost:12000`,
        `--midi-router-config=${config('midi-router.config.js')}`,
      ],
      watch: './imu-performer',
    },
    {
      name: '@trailblaizer/web',
      max_memory_restart: '300M',
      script: 'cd trailblaizer-web && npm run dev',
      watch: false,
    },
  ],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy':
  //       'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
};
