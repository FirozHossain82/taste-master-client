import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ContactFrom = () => {
  return (
    <div>
      <form>
        <div className="name-email grid grid-cols-2 gap-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter subject of your message"
            name="subject"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="btn btn-outline btn-primary"
          >
            SEND MESSAGE <FaArrowCircleRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
