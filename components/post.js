import CMS from '../lib/cms'

import Media from '../components/media'

import styles from '../styles/post.module.css'

export default function Post ({ id }) {
  return <CMS endpoint={`/wp-json/wp/v2/posts/${id}?_fields=id,title,date,content,featured_media`}>{
    post => <div className={styles.post}>
      <h2>{post.title.rendered}</h2>
      <small dangerouslySetInnerHTML={{ __html: (post.date).substr(5,2) +'/'+ (post.date).substr(8,2) +'/'+ (post.date).substr(0,4) }} />
      {post.featured_media > 0 &&
        <Media id={post.featured_media} />
      }
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  }</CMS>
}
