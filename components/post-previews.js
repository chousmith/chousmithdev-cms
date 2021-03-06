import Link from 'next/link'
import cn from 'classnames'

import CMS from '../lib/cms'
import styles from '../styles/post.module.css'

import { postsTitlesStyle } from '../config/constants'

export default function PostPreviews() {
  return <CMS endpoint="/wp-json/wp/v2/posts?_fields=id,excerpt,title,date">{
    posts =>
      posts.map(p =>
        <div className={cn(styles.post, styles.excerpt)} key={p.id}>
          <h2 className={postsTitlesStyle}><Link href="/[postId]" as={'/' + p.id}><a>{p.title.rendered}</a></Link></h2>
          <small dangerouslySetInnerHTML={{ __html: (p.date).substr(5,2) +'/'+ (p.date).substr(8,2) +'/'+ (p.date).substr(0,4) }} />
          <div dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
        </div>
      )
      // <small>{p.date}</small>
      // <pre>{ JSON.stringify(p, null, 2) }</pre>
  }</CMS>
}
