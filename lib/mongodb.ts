import * as Realm from "realm-web";

export const app = new Realm.App({ id: process.env.REALM_ID || "" });
export const ObjectId = Realm.BSON.ObjectId;
