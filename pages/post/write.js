import Layout from '../../components/layout'
import { useRef, useState } from 'react'
import Link from 'next/link'

export default function Write() {
  const idRef = useRef(undefined)
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)

  const [showLink, setShowLinke] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, title, content }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          setShowLinke(true)
          alert(data.text)
        })
        .catch((error) => alert(`Request failed. ${error}`))
    }
  }

  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        {/*<label htmlFor="id">ID</label>*/}
        <input
          type="text"
          id="id"
          name="id"
          placeholder={'id'}
          required
          ref={idRef}
        />
        <br />
        {/*<label htmlFor="title">Title</label>*/}
        <input
          type="text"
          id="title"
          name="title"
          placeholder={'title'}
          required
          ref={titleRef}
        />
        <br />
        {/*<label htmlFor="content">Content</label>*/}
        <textarea
          name="content"
          id="content"
          placeholder={'content'}
          cols="30"
          rows="10"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <button type="submit" value={'Create'}>
          Submit
        </button>
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>Go to post</Link>
      )}
    </Layout>
  )
}
