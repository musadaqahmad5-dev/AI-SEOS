export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

export class Logger {
  constructor(private level: LogLevel = LogLevel.INFO) {}

  info(msg: string) { console.log('[INFO]', msg); }
  debug(msg: string) { console.log('[DEBUG]', msg); }
  warn(msg: string) { console.warn('[WARN]', msg); }
  error(msg: string) { console.error('[ERROR]', msg); }
}