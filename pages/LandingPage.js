import React from "react";
import Header from "./components/Header";
import ImageCarousel from "./components/carousel";

export default function LandingPage() {
  return (
    <div>
      <Header />

      {/* HERO SECTION (video) */}
      <section className="hero">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/bkvideo.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>All you need to create a Home​</h1>
          <button className="seebtn">See More</button>
        </div>
      </section>

      {/* NORMAL CONTENT BELOW */}
      <section className="discount_div flex justify-center">
        <div className="discount_price">
          <p className="discount_head">$100 off</p>
          <p>$1,500 min.spend</p>
        </div>
        <div className="discount_price">
          <p className="discount_head">$180 off</p>
          <p>$2,500 min.spend</p>
        </div>
        <div className="discount_price">
          <p className="discount_head">$100 off</p>
          <p>$1,500 min.spend</p>
        </div>
      </section>

      <div className="flex carousel_img justify-center gap-14">
        {/* TEXTS */}
        <div className="image__text">
          <p className="img_txt">
            From unexpected plus-ones to evenings that don’t go according to
            plan, these are the pieces that hold everyday chaos together so you
            can stay exactly where you want to be: in the moment.
          </p>
          <button className="selling">Explore the collection</button>
        </div>

        <div>
          <ImageCarousel />
        </div>
      </div>

      <div className="bestselling">
        <center>
          <p className="modo_shop">Shop the look with MODO</p>
          <p className="modo_text">Thoughtfully made by people who live in homes, too. That’s why you love them so much.</p>
        <button className="view_all">
          View all
        </button>
        </center>
      </div>

      <div className="new_items">
fjjf
      </div>
    </div>
  );
}
