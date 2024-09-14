import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id'),
  name: text('name'),
  description: text('description'),
  url: text('url'),
});

export const feedbacks = pgTable('feedbacks', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id').references(() => projects.id),
  name: text('user_name'),
  email: text('user_email'),
  feedback: text('feedback'),
  starRating: integer('star_rating'),
});

export const projectsToFeedbacksRelation = relations(projects, ({ many }) => ({
  feedback: many(feedbacks),
}));

export const feedbacksToProjectRelation = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

export const subscriptions = pgTable('subscriptions', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id'),
  stripeCustomerId: text('stripe_customer_id'),
  stripeSubscriptionId: text('stripe_subscription_id'),
  subscribed: boolean('subscribed'),
});
