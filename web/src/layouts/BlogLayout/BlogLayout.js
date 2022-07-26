import { routes, Link } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Blog</Link>
        </h1>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
