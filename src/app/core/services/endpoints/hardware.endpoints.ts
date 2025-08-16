export const hardwareEndpoints = {
  'getAll' : 'hardware',
  'getBySlug' : (slug : string) => `hardware/${slug}`,
  'create' : 'hardware',
  'update' : (slug : string) => `hardware/${slug}`,
  'delete' : (slug : string) => `hardware/${slug}`,
}
