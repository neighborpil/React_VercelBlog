import { ca } from 'date-fns/locale'
import { createPost } from '../../lib/posts'
import { format } from 'date-fns'

export default async function handler(req, res) {
  const { id, title, content } = req.body

  try {
    await createPost({
      id,
      title,
      date: format(new Date(), 'yyyy-MM-dd'),
      content,
    })
    res.status(200).json({ text: 'Successfully created.' })
  } catch (error) {
    res.status(500).json({ error: `create failed. ${error}` })
  }
}
