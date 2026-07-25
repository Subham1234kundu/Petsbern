import { MongoClient, Db, Document } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Add it to your .env.local file."
  );
}

const DB_NAME = process.env.MONGODB_DB || "petsbarn";

// Reuse the client across hot-reloads in development to avoid exhausting
// the Atlas connection pool.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export default clientPromise;

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

/** Convert a Mongo document to a plain client-safe object with a string `id`. */
export function serialize<T extends Document>(doc: T | null) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return { id: _id ? String(_id) : undefined, ...rest };
}

/** Escape a user-provided string for safe use inside a RegExp. */
export function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
