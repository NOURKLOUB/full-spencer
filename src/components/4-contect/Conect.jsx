import Add from "./Add";
import Word from "./Word";
import "./conect.css";

export default function Conect() {
  return (
    <div className="click">
      <div className="tap-1 ">
        <Add
          title="| September 5, 2022"
          write="Crafting a design system for a multiplanetary future"
          paragraph="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system"
          zunhr="read article ~"
        />
        <Add
          title="| September 2, 2022"
          write="Crafting a design system for a multiplanetary future"
          paragraph="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system"
          zunhr="read article ~"
        />
        <Add
          title="| july 14, 2022"
          write="Crafting a design system for a multiplanetary future"
          paragraph="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system"
          zunhr="read article ~"
        />
      </div>
      <div className="tap-2">
        <div className="card-1">
          <div className="groub-1">
            <span className="icon-envelope"></span>
            <h4>Stay up to date</h4>
          </div>
          <p>
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div className="groub-2">
            <input type="email" placeholder=" Email Address" />
            <button type="submit">join</button>
          </div>
        </div>
        <div className="card-2">
          <div className="card-5">
            <div className="dics-1">
              <span className="icon-suitcase"></span>
              <h5>Work</h5>
            </div>

            <div className="tiles">
              <Word imege="/public/planetaria.ecd81ade.svg" title="im" h5="Planetaria" pragh="CEO" praght="2019 — Present"/>
              <Word imege="/public/airbnb.b4000690.svg" title="id" h5="Airbnb" pragh="Product Designer" praght="2014 — 2019"/>
              <Word imege="/public/facebook.dd9e7d48.svg" title="is" h5="Facebook" pragh="iOS Software Engineer" praght="2011 — 2014"/>
              <Word imege="/public/starbucks.4a5bd050.svg" title="iq" h5="Starbucks" pragh="Shift Supervisor" praght="2008 — 2011"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
