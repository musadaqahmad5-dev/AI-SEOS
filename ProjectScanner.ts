import fs from 'fs';
import path from 'path';

export class ProjectScanner {
  scan(dir: string) {
    const files: string[] = [];

    function walk(current: string) {
      const items = fs.readdirSync(current);

      for (const item of items) {
        const fullPath = path.join(current, item);

        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath);
        } else {
          files.push(fullPath);
        }
      }
    }

    walk(dir);

    return {
      totalFiles: files.length,
      files,
    };
  }
}
