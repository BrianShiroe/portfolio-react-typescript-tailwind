const Contact = () => (
  <div className="p-6">
    <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  </div>
);

export default Contact;
