export class Logger {
  static info(msg: string) {
    console.log(`[INFO] ${msg}`);
  }

  static error(msg: string) {
    console.error(`[ERROR] ${msg}`);
  }

  static debug(msg: string) {
    console.log(`[DEBUG] ${msg}`);
  }
}