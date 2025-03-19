import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#777' }}>
          Experience seamless car rental services designed to meet your every need.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
        {/* Section 1: Who We Are */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'justify' }}>
          <h2 style={{ color: '#333' }}>Who We Are</h2>
          <p>
            At <strong>DriveEase Rentals</strong>, we believe in making travel hassle-free and enjoyable. 
            Our mission is to provide top-notch car rental services, offering a wide range of vehicles 
            that cater to all preferences and budgets. Whether you're planning a family trip, a business 
            journey, or a quick weekend getaway, we've got you covered.
          </p>
        </div>

        {/* Section 2: What We Offer */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'justify' }}>
          <h2 style={{ color: '#333' }}>What We Offer</h2>
          <p>
            From luxurious sedans to spacious SUVs and economy cars, our fleet is constantly updated to 
            ensure safety, comfort, and style. With 24/7 customer support, flexible rental plans, and 
            transparent pricing, we aim to deliver a seamless experience every time you hit the road.
          </p>
        </div>

        {/* Section 3: Why Choose Us */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'justify' }}>
          <h2 style={{ color: '#333' }}>Why Choose Us?</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Affordable and competitive pricing with no hidden fees.</li>
            <li>Flexible pick-up and drop-off options at convenient locations.</li>
            <li>Well-maintained, clean, and modern vehicles.</li>
            <li>Dedicated support team available around the clock.</li>
            <li>Easy booking process with just a few clicks.</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_M3oxTZcrbtplW06GMgPzOEevturgIeu_KQ&s"
          alt="About Us"
          style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
        />
      </div>

      {/* Closing Statement */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h3 style={{ color: '#333' }}>Ready to Drive?</h3>
        <p style={{ color: '#777', fontSize: '1.1rem' }}>
          Discover the joy of stress-free travel with <strong>DriveEase Rentals</strong>. Book your car today and hit the road with confidence!
        </p>
      </div>
    </div>
  );
};

export default About;
