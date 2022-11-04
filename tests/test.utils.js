const User = require('../models/User')
const Blog = require('../models/blog.model')

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((user) => user.toJSON())
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const createUserObject = (n) => {
  return {
    firstName: 'user',
    lastName: `${n}`,
    username: `user${n}`,
    email: `user${n}@mail.com`,
    password: 'Atschooler123',
  }
}

const initialUsers = () => {
  return require('./fixtures/users.json')
}

const initialBlogs = () => {
  return require('./fixtures/blogs.json')
}

const blogObject = (title) => {
  return {
    title,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, est!',
    tags: ['lorem', 'royal'],
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nam, eum a quod eius quasi modi tempore sed, pariatur totam amet corporis atque dolorum cupiditate! Nulla culpa modi reprehenderit deserunt laboriosam voluptatem incidunt quidem! Quibusdam, neque in eveniet temporibus id reiciendis quidem ratione voluptas accusamus voluptatibus, consectetur, vero odio deserunt tenetur provident non? Quasi necessitatibus minus veniam autem quos, numquam dolore quae nemo commodi. Tempora maiores dolore laborum veniam sed fuga eveniet facilis tenetur, possimus at distinctio iste a earum officiis laudantium nulla id necessitatibus amet et mollitia? Obcaecati doloribus et a nesciunt atque excepturi accusamus nostrum similique rem, optio voluptas ut tempora! Laudantium excepturi deleniti animi dolorum illo sequi, accusantium eius id quia, inventore dignissimos maiores? Voluptatem quasi exercitationem iusto autem possimus assumenda labore reprehenderit sequi nostrum.',
  }
}

module.exports = {
  usersInDb,
  createUserObject,
  blogObject,
  blogsInDb,
  initialUsers,
  initialBlogs,
}
