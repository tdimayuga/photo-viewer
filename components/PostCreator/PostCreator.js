import { useState } from 'react'
import PostCard from '../PostCard'
import { createPost } from '../../pages/api/PostsApi'
import Button from '../../shared/Button'
import styles from './PostCreator.module.scss'
import { Accordion } from 'react-bootstrap'

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

  const handleClear = async (e) => {
    e.preventDefault()
    
    setPostTitle('')
    setPostBody('')
  }

  return (
    <div>
      <div className={styles.postCreator}>
        <form className={styles.form}>
          <input
            className={`form-control ${styles.titleInput}`}
            type="text"
            placeholder="Title"
            onChange={(e) => setPostTitle(e.target.value)}
            value={postTitle}
            maxLength={50}
          />
          <textarea
            className={`form-control ${styles.bodyInput}`}
            type="text"
            placeholder="What's on your mind?"
            onChange={(e) => setPostBody(e.target.value)}
            value={postBody}
            maxLength={200}

          />
          <div className={styles.formBtn}>
            <Button
              className={`btn btn-outline-dark `}
              onClick={(e) => handleClear(e)}
              text="Clear"
            />
            <div className={styles.divider}></div>
            <Button
              className={`btn btn-outline-dark `}
              type="submit"
              onClick={(e) => handlePostSubmit(e)}
              text="Post"
            />
          </div>
        </form>
      </div>
      {/* Added to mock new post data */}
      {mockPost && (
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{mockPost?.title}</Accordion.Header>
            <Accordion.Body>
              <PostCard post={mockPost} author={user} user={user} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  )
}

export default PostCreator
