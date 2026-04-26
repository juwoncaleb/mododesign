import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/form";

export default function contact() {
  return (
    <div className="contact">
      <Header />
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('./contact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="contact_header font-light mb-1">Contact Us</p>
          <p className="contact_sub leading-relaxed">
            No problem is too big or small. Send your questions our way.
          </p>
        </div>
      </section>
      <center>
        <p className="help">We're here to help</p>
      </center>
      <div className="flex justify-center gap-20 mt-10">
        <div>
          <img className="contact_icon" src="./address.webp" />
          <p className="contact_tag">Visit us </p>
          <p className="addy">Modo Experience Center</p>
          <div className="add_div">
            <p className="time mt-6">Mon - Sat: 10:00am - 8:00pm</p>
            <p className="time mt-6">
              {" "}
              Note: Some public holidays may have special hours. Check our
              Google listing for the latest info.
            </p>
          </div>
        </div>

        <div>
          <img className="contact_icon_1" src="./faq1.jpg" />
          <p className="contact_tag">FAQ </p>
          <p className="addy">Read more</p>
        </div>

        <div>
          <img className="contact_icon" src="./num.webp" />
          <p className="contact_tag">Whatsapp/call</p>
          <p className="addy">+234 81623574780</p>
          <div className="add_div">
            <p className="time mt-6">Available 24/7</p>
          </div>
        </div>
      </div>
      <center>
        <div className="policy">
          By texting us, you consent to receive text messages from Castlery at
          the mobile number you use to text and you are opting-in to receive
          future messages or a phone call in the number you provided. Message &
          Data rates may apply. View our Terms and Privacy Policy for more
          information.
        </div>
      </center>

      <center>
        <p
          className="help_2"
        >
          Need More Assistance?
        </p>
        <p>
          Email us via this form. We generally respond within 3 business days.
        </p>
        <ContactForm/>
      </center>
      <Footer />
    </div>
  );
}
