import React, { useRef, useState } from "react";
import { Icon, ProfilePicture } from "../components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactMe = () => {
  const form = useRef();
  const FORM_STATUSES = {
    INITIAL: "initial",
    SENDING: "sending",
    SUCCESS: "success",
    FAILED: "failed",
  };
  const [currentEmailStatus, setCurrentEmailStatus] = useState(
    FORM_STATUSES.INITIAL
  );
  const buttonStatus = {
    [FORM_STATUSES.SUCCESS]: {
      text: "sent!",
      icon: "thumbs-up-solid",
    },
    [FORM_STATUSES.FAILED]: { text: "Try Again", icon: "redo-alt-solid" },
    [FORM_STATUSES.SENDING]: { text: "sending...", icon: "three-dots-loading" },
    [FORM_STATUSES.INITIAL]: { text: "send", icon: "paper-plane" },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setCurrentEmailStatus(FORM_STATUSES.SENDING);
    emailjs
      .sendForm(
        "service_yw9f5jn", //service id
        "template_9iyz96m", //template id
        form.current,
        "pA4Tk0FGJWjYeDvdj" //public key
      )
      .then(
        () => {
          setCurrentEmailStatus(FORM_STATUSES.SUCCESS);
          setTimeout(() => {
            resetForm();
          }, 3000);
        },
        (error) => {
          setCurrentEmailStatus(FORM_STATUSES.FAILED);
          console.log(error.text);
        }
      );
  };
  const resetForm = () => {
    form.current.reset();
    setCurrentEmailStatus(FORM_STATUSES.INITIAL);
  };

  return (
    <div className="flex flex-col flex-grow justify-center px-4 py-10 laptop:px-20">
      <motion.h2
        className="hidden laptop:flex section-header laptop:relative laptop:-top-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        Contact Me.
      </motion.h2>

      <div className="flex flex-col justify-center items-center gap-6 laptop:gap-12 laptop:gap-12">
        <motion.div
          className="flex justify-center gap-3"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <ProfilePicture className={"w-16 self-end z-10"}></ProfilePicture>
          <h1 className="msg-bubble text-base laptop:text-3xl w-[60%] font-thin text-white bg-russian-blue rounded-[2rem] pl-5 pr-3 py-3 shadow-md self-end">
            I'm always excited to hear from new people and tackle new
            challenges!
          </h1>
        </motion.div>

        <motion.form
          ref={form}
          className="flex flex-col laptop:flex-row w-full laptop:items-center gap-3 px-4 laptop:px-32"
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: "100%" }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="flex flex-col gap-3 laptop:basis-1/3 laptop:mr-1">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              className="input"
              maxLength="160"
              required
            ></input>
            <input
              type="text"
              placeholder="Email"
              name="reply_to"
              className="input"
              maxLength="160"
              required
            ></input>
          </div>
          <div className="flex flex-col gap-3 laptop:flex-row flex-grow h-full">
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="input h-40 resize-none laptop:h-full flex-grow"
              required
            ></textarea>
            <button
              type="submit"
              className="flex w-1/3 laptop:w-fit laptop:bg-transparent self-end bg-russian-blue justify-center items-center laptop:justify-end laptop:self-center hover:shadow-md laptop:hover:shadow-none"
            >
              <p className="laptop:hidden text-white">
                {buttonStatus[currentEmailStatus].text}
              </p>
              <Icon
                name={buttonStatus[currentEmailStatus].icon}
                fill="#8BA7B8"
                className="hidden laptop:block laptop:w-12 hover:animate-wiggle "
              ></Icon>
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;
