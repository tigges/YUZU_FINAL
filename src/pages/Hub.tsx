import { BOOKING_URL, LIVE_SITE_URL } from '../data'
import { Ext, VersionBar } from '../ui'
import { versionUrl, versions, type VersionId } from '../versions'

const groups = ['Rebuilt', 'September clones', 'From Round'] as const

export default function Hub() {
  return (
    <div className="hub">
      <VersionBar current={null} />
      <header className="hub-top">
        <div className="wrap hub-top-inner">
          <p className="hub-mark">YUZU</p>
          <Ext href={LIVE_SITE_URL}>Current site</Ext>
        </div>
      </header>
      <main id="main" className="wrap hub-main">
        <div className="hub-intro">
          <p className="kicker">Dickens Yard · Ealing</p>
          <h1>The three directions, the September pages, and two takes on Round.</h1>
          <p>
            Round, Instagram, and Hairlust are rebuilt above. Under them, the same three pages
            copied from the September gallery, unchanged. Japanese keeps Round’s rounded rooms
            and resets the palette to ink, paper, and a seal. Carousel keeps those rooms and
            replaces the hero with a sliding feature.
          </p>
        </div>

        {groups.map((group) => (
          <section className="hub-group" key={group} aria-labelledby={`group-${group}`}>
            <h2 id={`group-${group}`} className="hub-group-title">{group}</h2>
            <div className="hub-grid">
              {versions.filter((item) => item.group === group).map((item) => (
                <article className="hub-card" key={item.id}>
                  <a className="hub-card-media" href={versionUrl(item.id as VersionId)}>
                    <img src={item.preview} alt={item.previewAlt} />
                  </a>
                  <div className="hub-card-body">
                    <p className="kicker">{item.kicker}</p>
                    <h2>
                      <a href={versionUrl(item.id)}>{item.name}</a>
                    </h2>
                    <p>{item.summary}</p>
                    <p className="hub-was">
                      <strong>{item.noteLabel}. </strong>
                      {item.note}
                    </p>
                    <div className="hub-card-actions">
                      <a className="btn btn-ink" href={versionUrl(item.id)}>
                        Open {item.name}
                      </a>
                      {item.origin ? <Ext href={item.origin}>September page</Ext> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <aside className="hub-note">
          <h2>What stayed true</h2>
          <p>
            Address, hours, phone, and email are the Dickens Yard facts. Book goes to Phorest.
            Directions and Google reviews use the salon’s Maps link. Instagram, TikTok, and
            Facebook are the live profiles. The clones keep the September wording, including
            where an offer title and its picture do not match.
          </p>
          <div className="hub-card-actions">
            <Ext className="btn btn-ink" href={LIVE_SITE_URL}>
              yuzuhairandbeauty.london
            </Ext>
            <Ext className="btn btn-ghost" href={BOOKING_URL}>
              Book on Phorest
            </Ext>
          </div>
        </aside>
      </main>
    </div>
  )
}
