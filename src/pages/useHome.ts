import { ChangeEvent, useState } from "react";

const useHome = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [message, setMessage] = useState({
    type: "",
    msg: "",
  });

  const sendEmail = async () => {
    const res = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const url = "https://api.jsonbin.io/v3/b";
    if (!res)
      return setMessage({ ...message, type: "error", msg: "Error State" });
    const response = await fetch(url, {
      method: "POST",
      body: `{"email": "${email}"}`,
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": `$2b$10$ssMlcLNZb0wdkZKx04NfVOLCiQ1eCPVqNC7BtuGBmRdl0rMDQmPRe`,
      },
    });
    const { metadata } = await response.json();

    setEmail("");
    setMessage({
      ...message,
      type: "success",
      msg: `${url}/${metadata.id}`,
    });
  };
  return { email, handleChange, message, sendEmail };
};

export default useHome;
