import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPosts, getPostsComments } from '../pages/api/PostsApi'
import Feed from '../shared/Feed'

const Homepage = ({ user }) => {
  const [postsData, setPostsData] = useState({
    posts: [],
    postComments: [],
  })
  const { posts, postComments } = postsData
  useEffect(() => {
    handleGetPosts()
  }, [])

  const handleGetPosts = async () => {
    const posts = await getPosts()
    const postComments = await getPostsComments()

    setPostsData({
      posts: posts,
      postComments: postComments,
    })
  }

  return (
      <div className="Homepage">
         <Feed posts={posts} comments={postComments} user={user} />
      </div>
    
  )
}

Homepage.propTypes = {
  handleLogin: PropTypes.func,
}

export default Homepage
