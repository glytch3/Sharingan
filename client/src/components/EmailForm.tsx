import axios from "axios";
import { FunctionComponent, useState } from "react";
import "../../styles/EmailForm.css";

const EmailForm: FunctionComponent<{
  id: string;
}> = ({ id }) => {
  const [emailFrom, setEmailFrom] = useState("");
  const [emailTo, setEmailTo] = useState("");
  const [message, setMessage] = useState(null);

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "api/files/email",
        data: {
          id,
          emailFrom,
          emailTo,
        },
      });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="email-form flex flex-col items-center justify-center w-full p-2 space-y-3">
      <h3 className="pt-6">You can also send the file through mail : </h3>
      <form
        className="flex flex-col items-center justify-center w-full p-0 space-y-2"
        onSubmit={handleEmail}
      >
        <input
          className="p-1 text-gray-400 bg-gray-900 border-2 border-gray-500 rounded focus:outline-none inputcsss"
          type="email"
          placeholder="Email From"
          required
          onChange={(e) => setEmailFrom(e.target.value)}
          value={emailFrom}
        />
        <input
          className="p-1 text-gray-400 bg-gray-900 border-2 border-gray-500 rounded focus:outline-none inputcsss"
          type="email"
          placeholder="Email To"
          required
          onChange={(e) => setEmailTo(e.target.value)}
          value={emailTo}
        />
        <button className="button" type="submit">
        <span className="gradient-text-email">Send Email</span>
        </button>
      </form>
      {message && <p className="font-medium text-red-500">{message}</p>}
    </div>
  );
};

export default EmailForm;
