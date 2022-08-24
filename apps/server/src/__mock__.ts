export const mocks = {
  Query: () => ({
    tracks: () => [...new Array(6)]
  }),
  Track: () => ({
    id: () => `${Date.now()}`,
    title: () => "Astro Kitty, Space Explorer",
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    moduleCount: () => 6
  }),
  Author: () => ({
    id: () => `${Date.now()}`,
    name: () => "Grumpy Cat",
    photo:
      "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg"
  })
}
