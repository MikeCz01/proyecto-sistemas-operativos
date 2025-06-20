const os = require('os');

function getSystemInfo() {
  return {
    platform: os.platform(),
    arch: os.arch(),
    cpu_count: os.cpus().length,
    memory_total_mb: (os.totalmem() / (1024 * 1024)).toFixed(2),
    memory_free_mb: (os.freemem() / (1024 * 1024)).toFixed(2),
    uptime_seconds: os.uptime(),
    hostname: os.hostname(),
    pid: process.pid,
    node_version: process.version
  };
}

module.exports = { getSystemInfo };
