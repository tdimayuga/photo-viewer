import { useState } from 'react'
import PostCard from '../components/PostCard'
import { createPost } from '../pages/api/PostsApi'
import Button from './Button'

const PostCreator = ({ userId, name }) => {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [mockPost, setMockPost] = useState()
  
  const handlePostSubmit = async (e) => {
      e.preventDefault()
      const response = await createPost(postTitle, postBody, userId)
      
          setMockPost(response)
          console.log("🚀 ~ file: PostCreator.js ~ line 11 ~ PostCreator ~ title", mockPost)
      setPostTitle('')
      setPostBody('')
    
  }

  return (
    <div className="Post">
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
        {mockPost && <PostCard post={mockPost} name={name} />}
      </form>
    </div>
  )
}

export default PostCreator
