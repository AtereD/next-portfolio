import { Github, Linkedin, Mail, UserRound, ChevronsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="container w-full py-16 mx-auto">
        <div className="lg:gap-8 lg:grid lg:grid-cols-5">
          {/* LEFT */}
          <div className="w-full h-full p-4 lg:col-span-2 ">
            <div className="flex flex-col justify-center h-full pt-5 lg:p-4 rounded-xl lg:pt-0">
              <div>
                <p className="text-xl tracking-widest text-[#5651e5] uppercase dark:text-[#eece1a]">
                  Get In Touch!
                </p>
                {/* <h2 className="py-4">Get In Touch</h2> */}
                <h2 className="py-2">Atere Damilola</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="py-2">Let&apos;s Work Together!</p>
                <div className="flex gap-4 py-4 ">
                  <a
                    href="https://www.linkedin.com/in/atere-damilola-337546213"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                      <Linkedin className="text-[#5651e5] dark:text-[#ddd]" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/AtereD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                      <Github className="text-[#5651e5] dark:text-[#ddd]" />
                    </div>
                  </a>
                  <a
                    href="https://ateredamilola4d@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                      <Mail className="text-[#5651e5] dark:text-[#ddd]" />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#eade95]">
                      <UserRound className="text-[#5651e5] dark:text-[#ddd]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 border rounded-xl lg:p-4">
            <div className="p-4">
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <input
                    type="hidden"
                    name="access_key"
                    value="0133f425-642d-44ea-9234-bc5ca17e0dab"
                  />
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="flex p-3 border-b dark:border-[#eece1a] rounded-lg focus:bg-transparent outline-none bg-transparent border-b-[#5651e5]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      className="flex p-3 border-b dark:border-[#eece1a] rounded-lg focus:bg-transparent outline-none bg-transparent border-b-[#5651e5] "
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="flex p-3 border-b dark:border-[#eece1a] rounded-lg focus:bg-transparent outline-none bg-transparent border-b-[#5651e5]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="flex p-3 border-b dark:border-[#eece1a] rounded-lg focus:bg-transparent outline-none bg-transparent border-b-[#5651e5] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    className="w-full py-10 mb-12 transition-all focus:bg-transparent dark:border-[#eece1a] outline-none resize-none focus:border-[#eece1a] border-b rounded-lg pl-3 bg-transparent border-b-[#5651e5] "
                    rows={4}
                  />
                </div>
                <button
                  className="w-full p-4 mt-4 h-[50px]  lg:w-1/2 bg-transparent dark:border-[#eece1a] rounded-none dark:hover:bg-[#eece1a] hover:ease-in-out hover:transition-all dark:hover:border-[#1f1f1f] hover:text-[#111] hover:h-[40px]  flex items-center justify-center border-[#5651e5] hover:border-[#5651e5] dark:text-[#ddd]"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110 dark:shadow-none dark:text-[#eece1a] p-2">
              <ChevronsUp
                size={30}
                className="m-auto animate-bounce text-[#5651e5] dark:text-[#ddd]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
