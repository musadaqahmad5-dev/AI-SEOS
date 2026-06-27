export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export class Logger {
  constructor(private level: LogLevel = LogLevel.INFO) {}

  private format(level: string, msg: string) {
    return `[${new Date().toISOString()}] [${level}] ${msg}`;
  }

  setLevel(level: LogLevel) {
    this.level = level;
  }

  debug(msg: string) {
    if (this.level <= LogLevel.DEBUG)
      console.log(this.format("DEBUG", msg));
  }

  info(msg: string) {
    if (this.level <= LogLevel.INFO)
      console.log(this.format("INFO", msg));
  }

  warn(msg: string) {
    if (this.level <= LogLevel.WARN)
      console.warn(this.format("WARN", msg));
  }

  error(msg: string) {
    if (this.level <= LogLevel.ERROR)
      console.error(this.format("ERROR", msg));
  }
}