export default function Home() {
  return (
    <main className="home">
      <div className="home__main">
        <h1 className="home__name">Kagan Kiesel</h1>
        <p className="home__location">Chicago, IL</p>

        <ul className="home__links">
          <li>
            <a href="mailto:kagan@kagan.ooo">email</a>
          </li>

          <li>
            <details className="home__menu">
              <summary>Projects</summary>
              <ul className="home__submenu">
                <li>
                  <a href="https://www.youtube.com/@kagankiesel">YouTube</a>
                </li>
                <li>
                  <a href="https://www.substack.com/kagankiesel">Journal</a>
                </li>
                <li>
                  <details className="home__menu">
                    <summary>Hopper</summary>
                    <ul className="home__submenu">
                      <li>
                        <a href="https://hopper.kagan.ooo">Hopper</a>
                      </li>
                      <li>
                        <a href="https://github.com/goudarooni/hopper-sun">
                          GitHub Repository
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </main>
  );
}