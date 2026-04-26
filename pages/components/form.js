export default function ContactForm() {
  return (
    <section className="bg-[#fbf7f2] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
        
        </div>

        <form className="space-y-12 form_Data">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <label className="mb-5 block text-[18px] text-[#4b1f14]">
                First Name *
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
              />
            </div>

            <div>
              <label className="mb-5 block text-[18px] text-[#4b1f14]">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
              />
            </div>

            <div>
              <label className="mb-5 block text-[18px] text-[#4b1f14]">
                Contact Number *
              </label>
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
              />
            </div>

            <div>
              <label className="mb-5 block text-[18px] text-[#4b1f14]">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
              />
            </div>
          </div>

          <div>
            <label className="mb-5 block text-[18px] text-[#4b1f14]">
              Type *
            </label>
            <select className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none">
              <option>Sales / Product Enquiry</option>
              <option>Customer Support</option>
              <option>Delivery Question</option>
              <option>General Enquiry</option>
            </select>
          </div>

          <div>
            <label className="mb-5 block text-[18px] text-[#4b1f14]">
              Order Number(Optional)
            </label>
            <input
              type="text"
              placeholder="Enter Order Number"
              className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
            />
          </div>

          <div>
            <label className="mb-5 block text-[18px] text-[#4b1f14]">
              Subject *
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              className="w-full border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
            />
          </div>

          <div>
            <label className="mb-5 block text-[18px] text-[#4b1f14]">
              Message *
            </label>
            <textarea
              rows={5}
              placeholder="Write your message"
              className="w-full resize-none border-b border-[#b8958a] bg-transparent pb-5 text-[18px] text-[#4b1f14] outline-none placeholder:text-[#ccbdb6]"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="rounded-full bg-[#844025] px-8 py-3 text-sm tracking-[0.2em] text-white transition hover:bg-[#6d311b]"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
