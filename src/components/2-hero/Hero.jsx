import Typewriter from "typewriter-effect";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="perant-avatar">
        <img src="/public/5THEHRU6ORNPZHJ7VLXRHA6HCY-modified.png" alt="#" />
        <span className="icon-atom"></span>
      </div>
      <h1>
        Software designer, founder, and{" "}
        <span>
          <Typewriter
            options={{
              strings: ["Web devaloper ...","javascript ...","bootstrap ...","Tailwind ..."],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </span>
      </h1>
      <p>
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <div className="hero-1">
        <img src="/public/facebook.png" alt="#" />
        <img src="/public/chrome.png" alt="#" />
        <img src="/public/instagram.png" alt="#" />
        <img src="/public/linkedin.png" alt="#" />
        <img src="/public/twitter.png" alt="#" />
        <img src="/public/youtube.png" alt="#" />
      </div>
    </section>
  );
}
