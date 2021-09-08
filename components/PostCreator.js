import { useState } from 'react'
import PostCard from './PostCard'
import { createPost } from '../pages/api/PostsApi'
import Button from '../shared/Button'

const PostCreator = ({ user }) => {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [mockPost, setMockPost] = useState()
  const {id} = user

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    
    const response = await createPost(postTitle, postBody, id)

    setMockPost(response)
    setPostTitle('')
    setPostBody('')
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          onChange={(e) => setPostBody(e.target.value)}
          value={postBody}
        />
        <Button type="submit" text="Post" />
        </form>
        {/* Added to mock new post data */}
        {mockPost && <PostCard post={mockPost} author={user} user={user} />}
    </div>
  )
}

export default PostCreator
