import { contact } from './data'

export type LegalKind = 'terms' | 'privacy'

export function readLegalParam(): LegalKind | null {
  const value = new URLSearchParams(window.location.search).get('p')
  if (value === 'terms' || value === 'privacy') return value
  return null
}

export function LegalArticle({ kind }: { kind: LegalKind }) {
  return kind === 'terms' ? <TermsCopy /> : <PrivacyCopy />
}

function TermsCopy() {
  return (
    <article className="legal">
      <div className="section-head">
        <h1>Terms and conditions</h1>
        <p>The salon’s own terms, from the Yuzu Hair &amp; Beauty site.</p>
      </div>
      <div className="legal-copy">
        <h2>Upon arrival</h2>
        <p>
          Your appointment time is important to us at Yuzu Hair. We kindly ask that you arrive on
          time for your appointment. We understand that unforeseen circumstances may cause delays,
          so please notify us as soon as possible if you are running late. While we do our best to
          accommodate late arrivals, there may be instances where your service time is shortened or
          your appointment needs to be rescheduled.
        </p>
        <h2>Skin patch test</h2>
        <p>
          We request that all new clients make arrangements to visit for a skin patch test if
          possible. You do not need an appointment to do so. Simply pop in, and we will carry out a
          skin patch test for you. If you do not complete your skin patch test within the required
          timeframe of 48 hours, you will be asked to sign a colour consent form. Skin patch tests
          must be carried out every 6 months.
        </p>
        <h2>Cancellation and rescheduling</h2>
        <p>
          Our salon enforces a strict 48 working hour cancellation and rescheduling policy. If you
          cancel or reschedule your appointment before this time frame, your deposit is fully
          refundable or transferable. Deposits will be kept for any cancellations of individual
          services on the day. For instance, if you book a full head colour and a wash, cut and
          style and decide on the day that you no longer want the haircut, we keep the part of your
          deposit that covers the haircut. This is to accommodate the stylist’s lost time. Please
          note that we are closed on Sundays and Mondays, so cancellations for Tuesday appointments
          must be made by the end of Thursday.
        </p>
        <p>
          Failure to provide the minimum 48 working hour notice will result in forfeiture of your
          deposit if one was taken, as it compensates our stylists for their time. A new deposit
          will be required for rescheduling your appointment. If you are unable to reach us by
          phone, please send an email confirmation for cancellations or rescheduling requests.
          Voicemails or texts to the salon’s landline will not be accepted for appointment changes.
        </p>
        <h2>Redo’s and refunds</h2>
        <p>
          Here at Yuzu, our aim is to make sure every client is completely satisfied with their
          services. If you are unsatisfied with the service received, please read the following
          policies related to refunds and redo’s.
        </p>
        <p>
          If you are not satisfied with the work done, we offer a complimentary redo of the service
          within 2 weeks of the initial service. We do not offer redo’s for services rendered beyond
          this 2-week period. The stylist will determine what needs to be done to rectify their
          work, and most of the time a complete redo of all the services provided on your initial
          appointment is not necessary. A redo is not a full refund. It is a modification of the
          service, like adjusting the tone of a hair colour or trimming more off a haircut.
        </p>
        <p>
          Refunds are not given for services provided. In the case of a service issue, we encourage
          clients to return to the salon for us to assess and rectify the problem with a redo, as
          mentioned above. However, if there is strong evidence of a significant issue caused by the
          service received, a refund may be considered at the discretion of the management. If you
          do not want to come back to the salon, or you do not have supporting evidence after a
          claim of dissatisfaction, we cannot refund.
        </p>
        <h2>Product refunds</h2>
        <p>We do not offer refunds or exchanges on products, for health and safety reasons.</p>
        <h2>Children’s services</h2>
        <p>
          We are always very patient with children. In some cases it is not possible to complete the
          service if the child becomes irate and distressed. In such cases, to account for the
          stylist’s time, we charge 50% of the service. We recommend bringing a favourite toy, or an
          iPad, so they have something to watch.
        </p>
        <h2>Online booking</h2>
        <p>
          Adjustments to your appointment time may be made, if needed. Your official appointment
          time will be shown in your SMS and email reminders 3 days before your appointment. Please
          see further terms on the online booking page.
        </p>
        <p>
          Thank you for choosing Yuzu for your beauty and grooming needs. We strive to provide
          excellent service and want to ensure that every client leaves feeling happy and satisfied.
          If you have any questions or concerns about our policies, please contact us.
        </p>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <br />
          <a href={contact.phoneHref}>{contact.phone}</a>
          <br />
          {contact.addressLines.join(', ')}
        </p>
      </div>
    </article>
  )
}

function PrivacyCopy() {
  return (
    <article className="legal">
      <div className="section-head">
        <h1>Privacy</h1>
        <p>How this website and the salon handle your details.</p>
      </div>
      <div className="legal-copy">
        <h2>Who we are</h2>
        <p>
          Yuzu Hair &amp; Beauty, 5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD. Email{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. Phone{' '}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
        <h2>This website</h2>
        <p>
          These pages tell you about the salon, the menu, and how to visit. They do not take card
          payments, and they do not ask you to create an account. They do not run advertising or
          analytics cookies.
        </p>
        <h2>Booking</h2>
        <p>
          Book opens Phorest, the salon’s booking service. Phorest handles the appointment, any
          deposit, and the SMS or email reminders. Their own privacy notice applies once you are on
          that site. We use booking details to provide the appointment and to meet the cancellation
          terms.
        </p>
        <h2>Messages you send us</h2>
        <p>
          If you call, email, or message us on WhatsApp, we use what you send to answer you and to
          arrange your visit. We do not sell those messages or your contact details.
        </p>
        <h2>Maps and social networks</h2>
        <p>
          Directions open Google Maps. The map on the page is loaded from OpenStreetMap. Instagram,
          TikTok, and Facebook links leave this site. Those services set their own cookies and have
          their own privacy notices.
        </p>
        <h2>Ask us</h2>
        <p>
          Questions about your details can go to{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> or {contact.phone}.
        </p>
      </div>
    </article>
  )
}
