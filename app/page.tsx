export default function Home() {
  return (
    <>
    <video
      className="bg-video"
      src="/background.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
     />
     
    <main className="home">
      <div className="home__main">
        <h1 className="home__name">(under construction)</h1>

        <ul className="home__links">
          <li>
            <a href="mailto:kagan@kagan.ooo">email</a>
          </li>
        </ul>
      </div>
    </main>
  );
}