import fs from 'node:fs/promises'

import { fileURLToPath } from 'url';

const DB_PATH = fileURLToPath(new URL('../db.json', import.meta.url));


// console.log(DB_PATH);
export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, 'utf-8')
  console.log(db);
  return JSON.parse(db)
}


export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  return db
}

export const insert = async (data) => {
  const db = await getDB()
  db.notes.push(data)
  await saveDB(db)
  return data 
}