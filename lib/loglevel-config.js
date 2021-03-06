import log from 'loglevel';
import remote from 'loglevel-plugin-remote'
const log_endpoint = import.meta.env.VITE_SHERLOGS_ENDPOINT;

const customJSON = log => ({
    message: log.message,
    level: log.level.label,
    timestamp: log.timestamp,
    isBackend: false
  });

remote.apply(log, {
    format: customJSON,
    url: log_endpoint,
    timestamp: () => new Date().toISOString(),
    level: 'debug',
});

export default log;