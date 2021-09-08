import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPosts } from '../pages/api/PostsApi'
import Feed from '../shared/Feed'
import PostCreator from '../shared/PostCreator'
import Header from './Header'

const Homepage = ({ setToken, user }) => {
  const { name, id } = user

  const [posts, setPosts] = useState()
  useEffect(() => {
    handleGetPosts()
  }, [])

  const handleGetPosts = async () => {
    const response = await getPosts()
    setPosts(response)
  }

  return (
    <div className="Homepage">
      <Header setToken={setToken} id={id} />
      <h1>Hello {name}!</h1>
      <Feed />
      <Feed posts={posts} />
    </div>
  )
}

Homepage.propTypes = {
  handleLogin: PropTypes.func,
}

export default Homepage
