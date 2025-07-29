import React from 'react'

const page = () => {
  return (
    <div>
<section className="py-12 px-4 md:px-8 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Contact Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="text-blue-600 text-3xl mb-2">📍</div>
        <h3 className="text-lg font-semibold mb-1">Address</h3>
        <p className="text-gray-600 text-sm">A108 Adam Street, New York, NY 535022</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="text-blue-600 text-3xl mb-2">📞</div>
        <h3 className="text-lg font-semibold mb-1">Call Us</h3>
        <p className="text-gray-600 text-sm">+1 5589 55488 55</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="text-blue-600 text-3xl mb-2">✉️</div>
        <h3 className="text-lg font-semibold mb-1">Email Us</h3>
        <p className="text-gray-600 text-sm">info@example.com</p>
      </div>
    </div>

    {/* Map & Form */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Embedded Google Map */}
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps?q=Downtown%20Conference%20Center%20New%20York&output=embed"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0 w-full h-full"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default page