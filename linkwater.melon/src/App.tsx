import './App.css'

const profiles = [
  {
    name: 'Олена Кавун',
    handle: '@olena_psychology',
    url: 'https://www.instagram.com/olena_psychology',
    avatarSrc: '/images/olena-avatar.jpg',
  },
  {
    name: 'Настя Думанська',
    handle: '@anastasiia_dumanska_psy',
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
        <div className="profile-photo">
          <div className="photo-topline">
            <div className="practice-mark">
              <span className="practice-mark__symbol" aria-hidden="true">
                <img
                  className="practice-mark__icon"
                  src="/images/eye-of-horus.svg"
                  alt=""
                />
              </span>
              <span className="practice-mark__label">
                Психологічна
                <br />
                практика
              </span>
            </div>
            <a
              className="photo-social"
              href="https://www.instagram.com/cabinet_psychology"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram кабінету психологічної практики"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="photo-caption">З турботою до себе</p>
        </div>

        <div className="profile-content">
          <div className="profile-heading">
            <p className="section-kicker">ПСИХОЛОГІЯ <span>·</span> ПСИХОТЕРАПІЯ</p>
            <h1 id="profile-title">
              Простір
              <br />
              для себе<span className="heading-period">.</span>
            </h1>
            <p className="profile-intro">
              Дбайливе місце для розмови, підтримки й внутрішніх змін.
            </p>
          </div>

          <div className="links-heading">
            <span>Оберіть свого спеціаліста</span>
            <span className="links-heading__count">01 — 02</span>
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
                <img className="profile-avatar" src={profile.avatarSrc} alt="" />
                <span className="profile-link__details">
                  <span className="profile-link__name">{profile.name}</span>
                  <span className="profile-link__handle">{profile.handle}</span>
                </span>
                <span className="profile-link__action" aria-hidden="true">
                  <svg className="profile-link__arrow" viewBox="0 0 20 20">
                    <path d="M4.5 10h10M10 5.5l4.5 4.5-4.5 4.5" />
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          <p className="profile-note">
            <InstagramIcon />
            <span>Знайдіть нас в Instagram</span>
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
