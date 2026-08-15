export default function Home() {
  return (
    <main className="home">
      <div className="home__main">
        <h1 className="home__name">kagan kiesel</h1>

        <ul className="home__links">
          <li>
            <a href="mailto:kagan@kagan.ooo">email</a>
          </li>

          <li>
            <details className="home__menu">
              <summary>projects</summary>
              <ul className="home__submenu">
                <li>
                  <a href="https://www.youtube.com/@kagankiesel">youtube</a>
                </li>
                <li>
                  <a href="https://www.substack.com/kagankiesel">journal</a>
                </li>
                <li>
                  <details className="home__menu">
                    <summary>hopper</summary>
                    <ul className="home__submenu">
                      <li>
                        <a href="https://hopper.kagan.ooo">hopper</a>
                      </li>
                      <li>
                        <a href="https://github.com/goudarooni/hopper-sun">
                          github
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