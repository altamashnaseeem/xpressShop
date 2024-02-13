import React from "react";
import Layout from "../components/Layout";
import logo from "../image/contact.jpg";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <Layout >
      <div className="grid grid-rows-3 grid-cols-3 m-28 gap-3">
        <div className="row-span-3 col-span-2">
          <img src={logo} alt="logo" className="h-full w-full rounded-lg shadow-lg" />
        </div>
        {/* <div className='flex items-center justify-center font-semibold text-4xl'>about us</div> */}
        <div className="row-span-3 p-2 pt-0 font-sans text-l">
          <h1 className="text-4xl mt-0 bg-gray-900 text-white pl-2 pb-2 rounded-lg text-center hover:shadow-xl">
            Contact Us
          </h1>
          Customer Support Hours:<br></br>
          Monday - Friday: 9:00 AM - 6:00 PM <br></br>
          Saturday: 10:00 AM - 4:00 PM <br></br>
          Sunday: Closed Contact Information:<br></br>
          Email:OfficialXpressShop@gmail.com<br></br>
          Phone: 7078662220<br></br>
          Mailing Address:<br></br>
          XpressShop<br></br>
          st-12,near hajipura<br></br>
          Firozabad,283203<br></br>
          Firozabad<br></br>
          Social Media:<br></br>
          Connect with us on social media for updates, special offers, and more!
          <br></br>
          <Link to="/facebook " className="hover:text-sky-700 hover:underline">
            Facebook
          </Link>
          <br></br>
          <Link to="/Twitter" className="hover:text-sky-700 hover:underline">
            Twitter
          </Link>
          <br></br>
          <Link to="/Instagram" className="hover:text-sky-700 hover:underline">
            Instagram
          </Link>
          <br></br>
          <Link to="/LinkedIn" className="hover:text-sky-700 hover:underline">
            LinkedIn
          </Link>
          <br></br>
          For general inquiries, please check out our [FAQ](link to FAQ page)
          page to find answers to commonly asked questions. Your satisfaction is
          important to us, and we look forward to assisting you.
      
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
