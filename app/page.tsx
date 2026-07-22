export default function Home() {
  return (
    <main className="home">
      <div className="home__main">
        <h1 className="home__name">Kagan Kiesel</h1>

        <ul className="home__links">
          <li>
            <a href="mailto:kagan@kagankiesel.com">Email</a>
          </li>
        </ul>
      </div>
      <figure className="home__photo-wrap">
        <img className="home__photo" src="/site.jpg" alt="Kagan Kiesel" />
        <figcaption className="home__caption">
          Andy Warhol, <em>Pelé</em>, 1977, Polaroid
          <br />
          4 1/4 × 3 3/8 in | 10.8 × 8.6 cm
          <br />
          Brooklyn Museum, New York City, New York, USA
        </figcaption>
      </figure>
    </main>
  );
}