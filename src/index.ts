/**
 * Project: withtype
 * Core module
 */

export interface Config {
  name: string;
  version: string;
}

export class Core {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  execute(input: string): string {
    return `Executed: ${input}`;
  }

  getConfig(): Config {
    return { ...this.config };
  }
}

export function createCore(config: Config): Core {
  return new Core(config);
}

export default Core;
