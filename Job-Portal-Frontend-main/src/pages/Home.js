import React from "react";
import "./RedBoost.css";

// Home Section
const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <div className="text-section">
          <h1>Boost Your Business</h1>
          <p>
            Your All-in-One Platform for Efficient Program Management, Startup
            Support, and Seamless Communication.
          </p>
          <button className="cta-button">Get Started today</button>
        </div>
        <div className="image-section">
          <img
            src="/redboostphoto.png"
            alt="Boost your business illustration"
            className="feature-image"
          />
        </div>
      </div>

      <FeaturesSection />
      <KeyFeaturesSection />
      <RoadmapSection />
      <ServicesSection />
      <Testimonials />
      <FooterCTA />
    </div>
  );
};

const FeaturesSection = () => {
  // Array of image paths (relative to the public folder or imported)
  const featureImages = [
    "/images (1).jpeg", // Replace with the actual path to your images
    "/images (2).jpeg",
    "/images (3).jpeg",
    "/images (4).jpeg",
  ];

  const features = [
    {
      title: "Streamline program management",
    },
    {
      title: "Automate repetitive tasks",
    },
    {
      title: "Provide real-time insights",
    },
    {
      title: "Ensure secure,",
    },
  ];

  return (
    <div className="features-container">
      <h2>The Challenge We Solve</h2>
      <p className="features-description">
        Managing entrepreneurial programs shouldn't be a maze. At Redstart, we
        know the struggles of disjointed tools, scattered data, and inefficient
        processes.
      </p>
      <p>RedBoost is built to change that:</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {/* Display the image instead of the placeholder */}
              <img 
                src={featureImages[index]} 
                alt={`Feature ${index + 1}`} 
                className="feature-image" 
              />
            </div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
      <button className="cta-button">See RedBoost in Action</button>
    </div>
  );
};

// Key Features Section
const KeyFeaturesSection = () => {
  const features = [
    "Track activities, KPIs, Milestones—all in one place",
    "Centralized Data Management",
    "Access critical data securely, with backup and history tracking",
    "Customized Interactions",
    "Engage seamlessly with stakeholders, including entrepreneurs, investors, and government entities",
    "Automated Reporting",
    "Save time with reports that generate themselves",
    "Secure and Scalable",
    "Built on trusted technologies like React.js and Node.js for a future-proof solution",
  ];

  return (
    <div className="key-features-container">
      <div className="features-text">
        <h3>Key Features</h3>
        <h2>Built for Startups, Designed for Efficiency</h2>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
        <button className="cta-button float-left">Explore Our Features</button>
      </div>
      <div className="features-image">
        <img
          src="/redboostphoto.png"  // Use the actual image path
          alt="Features Image"
          className="feature-image"
        />
      </div>
    </div>
  );
};



// Roadmap Section
const RoadmapSection = () => {
  const roadmap = [
    {
      phase: "Phase 1 (Launch: July 2024):",
      description: "Internal platform for program management and tracking",
      position: "left",
      classes: "first-point",
    },
    {
      phase: "Phase 2:",
      description:
        "Open access for entrepreneurs, investors, and partners",
      position: "right",
    },
    {
      phase: "Phase 3:",
      description:
        "Integrate with external systems and expand networking features",
      position: "left",
      classes: "last-point",
    },
  ];

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h3>Phased Growth Approach</h3>
        <h2>A Roadmap to RedBoost Success</h2>
      </div>
      <div className="roadmap-timeline">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className={`roadmap-item ${
              item.position === "left" ? "left" : "right"
            }`}
          >
            <div className="roadmap-content">
              <div className="roadmap-icon"></div>
              <h3>{item.phase}</h3>
              <p>{item.description}</p>
            </div>
            <div className={`timeline-point ${item.classes}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "Web Development Services",
      description: "Custom, scalable websites built to grow with you",
    },
    {
      title: "Communication and Design Solutions",
      description: "Engaging content and visuals that amplify your brand",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h3>Services We Offer</h3>
        <h2>More Than Just a Platform</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <div className="placeholder-icon"></div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">Discover Our Services</button>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      name: "Oussama Lamine - CEO Pixi",
      feedback: "This service is really awesome, thank you for the great job!",
    },
    {
      stars: 5,
      name: "Oussama Lamine - CEO Pixi",
      feedback: "This service is really awesome, thank you for the great job!",
    },
    {
      stars: 5,
      name: "Oussama Lamine - CEO Pixi",
      feedback: "This service is really awesome, thank you for the great job!",
    },
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h3>Testimonials or Trust Section</h3>
        <h2>Trusted by Innovators</h2>
      </div>
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"★".repeat(testimonial.stars)}</div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Footer CTA Section
const FooterCTA = () => {
  return (
    <div className="cta-section">
      <h2>Get Started or Demo Request</h2>
      <button className="button">Book a Demo</button>
    </div>
  );
};

export default Home;
