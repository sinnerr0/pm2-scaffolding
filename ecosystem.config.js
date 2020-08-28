module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      //   watch: true,
      ignore_watch: ['node_modules', 'package*'],
      instances: 'max',
      exec_mode: 'cluster',
      kill_timeout: 10000, // Configure the kill timeout
      listen_timeout: 60000, // Configure the ready timeout
      wait_ready: true,
      exp_backoff_restart_delay: 100,
      //   max_memory_restart: '200M',
      //   cron_restart: '',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
