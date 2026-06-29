import { EngineManager } from './EngineManager';

const engine = new EngineManager();

async function run() {
  const path = process.argv[2];

  if (!path) {
    console.log('❌ Please provide project path');
    return;
  }

  console.log('🧠 AI-SEOS analyzing:', path);

  const report = await engine.analyzeProject(path);

  console.log('\n📊 AI-SEOS REPORT\n');
  console.log(JSON.stringify(report, null, 2));
}

run();
