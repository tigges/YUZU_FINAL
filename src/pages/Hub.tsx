import { BOOKING_URL, LIVE_SITE_URL, ORIGINALS } from '../data'
import { Ext, VersionBar } from '../ui'
import { versionUrl, versions } from '../versions'

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
          <h1>Three directions, each one finished.</h1>
          <p>
            Round, Instagram, and Hairlust from the September gallery, rebuilt around the same
            salon: 5 Dickens Yard, Phorest booking, the 2025 menu, and the photographs already on
            the site. The pages are shorter to use, and the type stays readable.
          </p>
        </div>

        <div className="hub-grid">
          {versions.map((item) => (
            <article className="hub-card" key={item.id}>
              <a className="hub-card-media" href={versionUrl(item.id)}>
                <img src={item.preview} alt={item.previewAlt} />
              </a>
              <div className="hub-card-body">
                <p className="kicker">{item.kicker}</p>
                <h2>
                  <a href={versionUrl(item.id)}>{item.name}</a>
                </h2>
                <p>{item.summary}</p>
                <p className="hub-was">
                  <strong>September version. </strong>
                  {item.was}
                </p>
                <div className="hub-card-actions">
                  <a className="btn btn-ink" href={versionUrl(item.id)}>
                    Open {item.name}
                  </a>
                  <Ext href={ORIGINALS[item.id]}>Compare</Ext>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="hub-note">
          <h2>What stayed true</h2>
          <p>
            Address, hours, phone, and email are the Dickens Yard facts. Book goes to Phorest.
            Directions and Google reviews use the salon’s Maps link. Instagram, TikTok, and
            Facebook are the live profiles. Prices are the 2025 senior and stylist menu. Offers
            are Colour Tuesdays, Smooth Wednesdays, and Thursday colour — the pictures and the
            sentences now say the same thing.
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
