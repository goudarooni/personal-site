export default function Home() {
  return (
    <>
      <video
        className="bg-video"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="bg-scrim" aria-hidden="true" />

      <main className="home">
        <div className="home__left">
          <h1 className="home__name">Kagan Kiesel</h1>
          <p className="home__email">
            <a href="mailto:kagan@kagan.ooo">kagan@kagan.ooo</a>
          </p>
          <p className="home__location">Chicago, IL</p>

          <p className="section-label">Projects</p>
          <ul className="list">
            <li>
              <details className="project">
                <summary className="project__name">Hopper (W.i.P)</summary>
                <div className="project__body">
                  <p className="project__desc">
                    A site showing a different Edward Hopper painting depending
                    on the sun's position in a given location.
                  </p>
                  <ul className="project__links">
                    <li>
                      <a href="https://hopper.kagan.ooo">Hopper</a>
                    </li>
                    ·
                    <li>
                      <a href="https://github.com/goudarooni/hopper">Git</a>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}