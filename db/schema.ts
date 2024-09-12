import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id'),
  name: text('name'),
  description: text('description'),
  url: text('url'),
});
