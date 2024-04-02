/* React */
import React, { useState } from "react";

/* Email service */
import emailjs from "@emailjs/browser";

/* Styles */
import "../styles/ContactStyle.css";

/* Bootstrap */
import { Button } from "react-bootstrap";

/* Typescript interface */
interface FormData {
  name: string;
  email: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_wwyv5zh",
        "template_c7bsi1p",
        e.currentTarget,
        "HtmyPQfWiVNNlPvPF"
      );
      console.log("Email sent successfully!");
      setFormData({ name: "", email: "" }); // Clear form fields after sending
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>bright stone ceramics</h1>
        <p className="p-contact">
          Please register for my newsletter to recieve special offers and shop
          updates!
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="label">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="btn-container">
          <Button id="btn-secondary">Submit</Button>
        </div>
      </div>

      <div className="credits">
        <p className="p-contact">website designed and built by Jennifer Rothrock</p>
        <p className="p-contact">jennifer.r.rothrock@gmail.com</p>
        <div className="disclaimer">
          <p className="p-contact">
            Disclaimer: all content on this site is fictional and only for the
            purpose of showing the website design
          </p>
          <p className="p-contact">
            all product photos from Unsplash/Tom Crew/Turning Earth Ceramics
          </p>
          <p className="p-contact">
            other photos from Unsplash by Taylor Heery & Anne Nygard
          </p>
        </div>
      </div>
    </>
  );
}
