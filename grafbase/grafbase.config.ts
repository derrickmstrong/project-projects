import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.

const user = g.model('User', {
  name: g.string().length({min: 2, max: 20 }),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  gitHubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => project).list().optional(),
});

const project = g.model('Project', {
  title: g.string().length({min: 3 }),
  description: g.string().optional(),
  liveSiteUrl: g.url().optional(),
  gitHubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => user),
});


export default config({
  schema: g
})
