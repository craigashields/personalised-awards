import ContactButton from "./contact-button";
import { sendEmail } from "@/actions/sendEmail";

const ContactUs = ({}) => {
  return (
    <form action={sendEmail}>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="from_name" className="inline-block mb-1 font-medium">
          Name
        </label>
        <input
          placeholder="John Doe"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
          id="from_name"
          name="from_name"
        />
      </div>

      <div className="mb-1 sm:mb-2">
        <label htmlFor="from_email" className="inline-block mb-1 font-medium">
          E-mail
        </label>
        <input
          placeholder="john.doe@example.org"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
          id="from_email"
          name="from_email"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="message" className="inline-block mb-1 font-medium">
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
          placeholder="Leave us a message..."
          name="message"
        ></textarea>
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <ContactButton></ContactButton>
      </div>
    </form>
  );
};

export default ContactUs;
