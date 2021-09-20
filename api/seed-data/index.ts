import { cards } from './data';

export async function insertSeedData(ks) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${cards.length} Cards`);
  const { mongoose } = adapter;
  let count = 1;
  for (const card of cards) {
    console.log(`   🎴 Adding Card # ${count}`);
    count++;
    await mongoose.model('Card').create(card);
  }
  console.log(`✅ Seed Data Inserted: ${cards.length} Cards`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
