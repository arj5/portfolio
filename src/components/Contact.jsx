import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_7d6qd57",
          "template_1dgox3a",
          formData,
          "_erOcuJ-umTwrc31z"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAIL - ", error);
          toast.error("Failed to send message. Please Try again.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="  pt-20 lg:w-3/4  " id="contact">
        <h2 className=" text-center text-3xl lg:text-4xl">Connect With Me</h2>
        <div className="flex justify-center gap-2 items-center my-10">
          <a
            href="mailto:arjunsharma0510@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail
              fontSize={25}
              className="transition-transform duration-300 hover:scale-150"
            />
          </a>
          arjunsharma0510@gmail.com
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" mb-4  ">
            <div className="flex gap-4">
              <div className="lg:w-1/2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="placeholder:text-white my-2 w-full appearance-none rounded-lg border border-white bg-transparent px-3 py-2 text-lg focus:border-stone-400 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-md font-bold text-white bg-red-600 max-w-32 rounded-lg px-2 ">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="lg:w-1/2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="placeholder:text-white my-2 w-full appearance-none rounded-lg border border-white bg-transparent px-3 py-2 text-lg focus:border-stone-400 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-md font-bold text-white bg-red-600 max-w-32 rounded-lg px-2">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4 ">
              <textarea
                type="message"
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className=" placeholder:text-white my-2 w-full appearance-none rounded-lg border border-white bg-transparent px-3 py-2 text-lg focus:border-stone-400 focus:outline-none"
                rows="6"
              />
              {errors.message && (
                <p className="text-md font-bold text-white bg-red-600 max-w-36 rounded-lg px-2">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`mb-8 w-full rounded border-2 border-stone-50/30 bg-white text-stone-900 hover:bg-stone-300 px-4 py-2 text-sm font-semibold ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
