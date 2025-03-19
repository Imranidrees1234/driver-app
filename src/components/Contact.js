import React from "react";

const Contact = () => {
  const contact = {
    name: "Imran",
    phone: "+92 302 6045025",
    email: "imran.dummy@email.com",
  };

  const handleShareOnWhatsApp = () => {
    const message = `Contact details of ${contact.name}: \nPhone: ${contact.phone} \nEmail: ${contact.email}`;
    const whatsappURL = `https://wa.me/${
      contact.phone
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h2>Contact Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>
              <button onClick={handleShareOnWhatsApp}>Share on WhatsApp</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
