function Contact() {
  return (
    <>
      <div className="flex items-center justify-between px-40 py-24 ">
        <div className="space-y-12">
          <div>
            <h3 className="font-medium text-base text-brighter">Contact</h3>
            <h2 className="font-bold text-4xl text-primary">Get In Touch</h2>
          </div>
          <div className="flex space-x-4 items-end">
            <picture>
              <img src="/call.png" alt="icon" />
            </picture>
            <div>
              <p>Tel</p>
              <p>708-790-0000</p>
            </div>
          </div>
          <div className="flex space-x-4 items-end">
            <picture>
              <img src="/messenger.png" alt="icon" />
            </picture>
            <div>
              <p>Tel</p>
              <p>708-790-0000</p>
            </div>
          </div>
          <div className="flex space-x-6 items-end">
            <picture>
              <img src="/messenger.png" alt="icon" />
            </picture>
            <div>
              <p>Tel</p>
              <p>708-790-0000</p>
            </div>
          </div>
        </div>
        <div className="bg-light px-8 py-12 space-y-6 shadow-xl rounded-md">
          <div className="flex space-x-4">
            <div>
              <p className="font-normal text-sm text-normal">Name</p>
              <input className="outline-none rounded-sm border-2 border-primary" />
            </div>
            <div>
              <p className="font-normal text-sm text-normal">Email</p>
              <input className="outline-none rounded-sm border-2 border-primary" />
            </div>
          </div>
          <div>
            <p className="font-normal text-sm text-normal">Subject</p>
            <input className="outline-none rounded-sm border-2 border-primary px-24" />
          </div>
          <div>
            <p className="font-normal text-sm text-normal">Message</p>
            <input className="outline-none rounded-sm border-2 border-primary px-24 py-8" />
          </div>
          <div>
            <button className="bg-darkblue text-white px-44 py-2 shadow-md rounded-md ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
