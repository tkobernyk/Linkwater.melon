import './App.css'

const profiles = [
  {
    name: 'Олена Кавун',
    url: 'https://www.instagram.com/olena_psychology',
    avatarSrc: '/images/olena-avatar.jpg',
  },
  {
    name: 'Настя Думанська',
    url: 'https://www.instagram.com/anastasiia_dumanska_psy',
    avatarSrc: '/images/nastia-avatar.jpg',
  },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="instagram-icon__dot" cx="17.5" cy="6.8" r="1" />
    </svg>
  )
}

function App() {
  return (
    <main className="page-shell">
      <section className="profile-card" aria-labelledby="profile-title">
        <div className="profile-content">
          <div className="profile-heading">
            <h1 id="profile-title">
              Консультування
              <span aria-hidden="true"> | </span>
              <br className="heading-break" />
              Психотерапія
            </h1>
            <p>Психологічне консультування, психотерапія</p>
            <a
              className="instagram-link"
              href={profiles[0].url}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Олени Кавун"
            >
              <InstagramIcon />
            </a>
          </div>

          <nav className="profile-links" aria-label="Профілі в Instagram">
            {profiles.map((profile) => (
              <a
                className="profile-link"
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                key={profile.url}
              >
                <img
                  className="profile-avatar"
                  src={profile.avatarSrc}
                  alt=""
                />
                <span className="profile-link__name">{profile.name}</span>
                <svg
                  className="profile-link__arrow"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5 10h10M10 5l5 5-5 5" />
                </svg>
              </a>
            ))}
          </nav>
          <p className="profile-note">Оберіть профіль, щоб перейти в Instagram</p>
        </div>
      </section>
    </main>
  )
}

export default App
