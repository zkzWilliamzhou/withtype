#!/usr/bin/env node
/**
 * withtype CLI
 */

import { Core, createCore } from './index.js';

function showHelp(): void {
  console.log(`
withtype - Description

Usage:
  withtype run <input>    Run with input
  withtype help           Show this help
`);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'help') {
    showHelp();
    return;
  }

  const core = createCore({ name: 'withtype', version: '0.1.0' });
  
  const command = args[0];
  
  switch (command) {
    case 'run': {
      const input = args[1] || 'default';
      console.log(core.execute(input));
      break;
    }
    default:
      console.error(`Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

main().catch(console.error);
