import CMS from '../lib/cms'

export default function Media ({ id }) {
  return <CMS endpoint={`/wp-json/wp/v2/media/${id}`}>{
    media => <div>
      <p><img src={media.guid.rendered} alt={media.alt_text} /></p>
    </div>
  }</CMS>
}
