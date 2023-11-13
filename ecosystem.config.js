module.exports = {
    apps: [
      {
        name: 'figk12',
        script: 'npm',
        args: 'start -- --port 3001', // Change the port to 3001 or any available port
        autorestart: true,
        watch: true,
        ignore_watch: ['node_modules'],
        max_memory_restart: '1G',
      },
    ],
  };
  