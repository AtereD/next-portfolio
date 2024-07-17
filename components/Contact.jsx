import { Github, Linkedin, Mail, UserRound, ChevronsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="container w-full py-16 mx-auto">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl dark:shadow-[#5651e5] dark:shadow-sm">
            <div className="flex flex-col justify-center h-full pt-5 lg:p-4 rounded-xl lg:pt-0">
              <div>
                <h2 className="py-2">Atere Damilola</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 text-xl uppercase text-[#5651e5]">
                  Get In Touch!
                </p>
                <p className="pb-2">Let's Work Together</p>
                <div className="flex items-center justify-around py-4 lg:justify-between">
                  <a
                    href="https://www.linkedin.com/in/atere-damilola-337546213"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                      <Linkedin color="#5651ef" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/AtereD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                      <Github color="#5651ef" />
                    </div>
                  </a>
                  <a
                    href="https://ateredamilola4d@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                      <Mail color="#5651ef" />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-[#5651e5]">
                      <UserRound color="#5651ef" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-[#5651e5] dark:shadow-sm">
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
                      className="flex p-3 border-b-2 border-[#5651e5] rounded-lg focus:bg-transparent outline-none dark:bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      className="flex p-3 border-b-2 border-[#5651e5] rounded-lg focus:bg-transparent outline-none dark:bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="flex p-3 border-b-2 border-[#5651e5] rounded-lg focus:bg-transparent outline-none dark:bg-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="flex p-3 border-b-2 border-[#5651e5] rounded-lg focus:bg-transparent outline-none dark:bg-transparent "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    className="w-full py-10 mb-12 transition-all focus:bg-transparent border-[#5651e5] outline-none resize-none focus:border-[#5651e5] border-b-2 rounded-lg pl-3 dark:bg-transparent"
                    rows={6}
                  />
                </div>
                <button
                  className="w-full p-4 mt-4 text-gray-100 h-[50px] dark:lg:w-1/2 dark:lg:flex dark:lg:text-center dark:lg:items-center dark:lg:justify-center lg:w-1/2 "
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
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 dark:shadow-none">
              <ChevronsUp
                color="#5651e5"
                size={30}
                className="m-auto animate-bounce"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
