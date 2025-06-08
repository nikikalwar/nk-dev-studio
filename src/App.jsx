import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Routes, Route, Link } from 'react-router-dom';

function ShadowCloneAnimation({ count = 20, size = 28, style = {} }) {
  // Generate 'count' shadow clones with random positions and delays
  const clones = Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 90 + '%',
    delay: Math.random() * 1.5,
    size: Math.random() * 8 + size,
  }));
  return (
    <div className="relative h-10 w-full mb-2 flex items-center justify-center" style={style}>
      {clones.map((clone, i) => (
        <span
          key={i}
          style={{
            left: clone.left,
            animationDelay: `${clone.delay}s`,
            fontSize: `${clone.size}px`,
            position: 'absolute',
            top: `${Math.random() * 10 + 2}px`,
            opacity: 0.8,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          }}
          className="animate-shadow-clone"
        >
          🥷
        </span>
      ))}
    </div>
  );
}

function HokageRow() {
  // Cute emoji avatars for all 7 Hokages
  return (
    <div className="flex items-center justify-center gap-2 mb-2" style={{ minHeight: 40 }}>
      <span title="Hashirama" style={{ fontSize: 26 }}>🌲🧔</span>
      <span title="Tobirama" style={{ fontSize: 26 }}>💧👴</span>
      <span title="Hiruzen" style={{ fontSize: 26 }}>🐒👴</span>
      <span title="Minato" style={{ fontSize: 26 }}>⚡🦱</span>
      <span title="Tsunade" style={{ fontSize: 26 }}>🍋👱‍♀️</span>
      <span title="Kakashi" style={{ fontSize: 26 }}>📚🥷</span>
      <span title="Naruto" style={{ fontSize: 26 }}>🍜🥷</span>
    </div>
  );
}

function AkatsukiRow() {
  // Animated Akatsuki clouds and rogue ninjas
  const items = [
    '☁️', '🥷', '☁️', '☁️', '🥷', '☁️', '☁️', '☁️', '🥷', '☁️', '☁️', '☁️', '🥷', '☁️', '☁️', '☁️', '🥷', '☁️', '☁️', '☁️',
  ];
  return (
    <div className="flex items-center justify-center gap-1 mb-2" style={{ minHeight: 40 }}>
      {items.map((item, i) => (
        <span
          key={i}
          className={item === '☁️' ? 'akatsuki-cloud' : 'akatsuki-ninja'}
          style={{
            fontSize: 24,
            filter: item === '☁️' ? 'drop-shadow(0 0 4px #dc2626) saturate(2) hue-rotate(-20deg)' : 'drop-shadow(0 0 2px #000)',
            animation: `akatsuki-float ${1.5 + Math.random()}s ease-in-out infinite alternate`,
            marginLeft: 2, marginRight: 2,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function WebDevelopment() {
  const products = [
    {
      title: 'ShadowClone Sites',
      subtitle: 'Replicate your site like a true ninja',
      desc: 'Harness the power of the Shadow Clone Jutsu for your business! Instantly replicate your website across global servers, ensuring blazing speed and unbeatable uptime. Each clone adapts to local markets, making your brand as agile as a true shinobi.',
      type: 'clones',
    },
    {
      title: 'Rasengan Builder',
      subtitle: 'Create with unstoppable energy',
      desc: 'Spin up stunning web pages with the force of a Rasengan! Our drag-and-drop builder channels raw creative energy, letting you sculpt interactive, high-impact sites that leave a lasting impression—no coding chakra required.',
      type: 'rasengan',
    },
    {
      title: 'Hokage Dashboard',
      subtitle: 'Lead your digital village',
      desc: 'Rule your digital village with the Hokage Dashboard. Oversee analytics, user engagement, and security from a single, powerful command center. Customizable widgets let you monitor your site like the leader of legends.',
      type: 'hokage',
    },
    {
      title: 'Akatsuki Firewall',
      subtitle: 'Elite rogue-AI protection',
      desc: 'Defend your site with the elite Akatsuki Firewall. This advanced security suite uses rogue AI to detect and neutralize threats before they breach your defenses. Only the most cunning can even attempt to get past this barrier.',
      type: 'akatsuki',
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-2 sm:px-4">
      <h2 className="text-3xl font-extrabold mb-10 text-center tracking-tight">Web Development Products</h2>
      <div className="flex flex-col gap-8 w-full">
        {products.map((p, i) => (
          <div key={i} className="w-full bg-white p-8 rounded-2xl shadow flex flex-col items-center hover:shadow-xl transition-shadow border border-blue-100">
            {p.type === 'clones' && <ShadowCloneAnimation count={24} size={22} style={{ marginBottom: 0 }} />}
            {p.type === 'rasengan' && (
              <div className="flex items-center justify-center mb-2" style={{ height: 40 }}>
                <span style={{ fontSize: 28, marginRight: 4 }}>🥷</span>
                <span style={{ fontSize: 22, marginRight: 4, marginLeft: 2, filter: 'drop-shadow(0 0 4px #3b82f6)' }}>🌀</span>
                <span style={{ fontSize: 28, marginLeft: 4, filter: 'drop-shadow(0 0 2px #f59e42)' }}>🦊</span>
              </div>
            )}
            {p.type === 'hokage' && <HokageRow />}
            {p.type === 'akatsuki' && <AkatsukiRow />}
            <h3 className={`text-2xl sm:text-3xl font-extrabold mb-1 text-center drop-shadow ${p.type === 'akatsuki' ? 'text-red-700' : 'text-blue-700'}`}>{p.title}</h3>
            <div className={`font-semibold mb-2 text-lg text-center tracking-wide ${p.type === 'akatsuki' ? 'text-red-400 italic' : 'text-blue-400'}`}>{p.subtitle}</div>
            <p className={`text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto ${p.type === 'akatsuki' ? 'text-gray-800' : 'text-gray-700'}`} style={{letterSpacing: '0.01em'}}>{p.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 mt-12">Testimonials</h3>
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“ShadowClone Sites made our global launch as fast as a ninja dash!”</p>
          <span className="block mt-2 font-semibold">— Kakashi H., Tech Lead</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“With Rasengan Builder, our landing pages pack a real punch!”</p>
          <span className="block mt-2 font-semibold">— Sakura U., Marketing Ninja</span>
        </div>
      </div>
    </div>
  );
}

function MobileApps() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Mobile Apps Products</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="FitNest" />
          <h3 className="text-xl font-semibold mb-2">FitNest</h3>
          <p className="text-gray-600">A smart fitness tracker app with AI coaching and real-time health analytics.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="Travelio" />
          <h3 className="text-xl font-semibold mb-2">Travelio</h3>
          <p className="text-gray-600">Your AI-powered travel companion for planning, booking, and exploring the world.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="SnapShop" />
          <h3 className="text-xl font-semibold mb-2">SnapShop</h3>
          <p className="text-gray-600">A seamless mobile e-commerce platform with AR product previews and instant checkout.</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“FitNest helped me achieve my fitness goals with personalized AI coaching!”</p>
          <span className="block mt-2 font-semibold">— Jamie L., Fitness Enthusiast</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“Travelio made my trip planning stress-free and fun. Highly recommended!”</p>
          <span className="block mt-2 font-semibold">— Marco P., Traveler</span>
        </div>
      </div>
    </div>
  );
}

function UIDesign() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">UI/UX Design Products</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="FlowFrame" />
          <h3 className="text-xl font-semibold mb-2">FlowFrame</h3>
          <p className="text-gray-600">A collaborative wireframing tool for teams to design, iterate, and share ideas in real time.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="ColorMuse" />
          <h3 className="text-xl font-semibold mb-2">ColorMuse</h3>
          <p className="text-gray-600">An AI-powered color palette generator for beautiful, accessible designs.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" className="w-20 h-20 rounded-full mb-4" alt="PersonaCraft" />
          <h3 className="text-xl font-semibold mb-2">PersonaCraft</h3>
          <p className="text-gray-600">A persona builder that helps teams understand and design for their users.</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“FlowFrame made our design process so much faster and more collaborative!”</p>
          <span className="block mt-2 font-semibold">— Dana K., Product Designer</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic">“ColorMuse helped us create a beautiful, accessible brand palette in minutes.”</p>
          <span className="block mt-2 font-semibold">— Lee W., Brand Manager</span>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">NK Dev Studio</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/web-development" className="text-gray-600 hover:text-gray-900">Web Development</Link>
              <Link to="/mobile-apps" className="text-gray-600 hover:text-gray-900">Mobile Apps</Link>
              <Link to="/ui-ux-design" className="text-gray-600 hover:text-gray-900">UI/UX Design</Link>
              <Link to="/our-work" className="text-gray-600 hover:text-gray-900">Our Work</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link to="/get-started">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function OurWork() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Our Work</h2>
      <p className="mb-4">Here are some of the projects we've delivered for our clients:</p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <strong>FitNest</strong> - AI-powered fitness app for personalized coaching and progress tracking.
        </li>
        <li className="bg-white p-4 rounded shadow">
          <strong>Travelio</strong> - Smart travel planner with real-time recommendations and itinerary management.
        </li>
        <li className="bg-white p-4 rounded shadow">
          <strong>SnapShop</strong> - Mobile e-commerce platform with AR product previews and instant checkout.
        </li>
        <li className="bg-white p-4 rounded shadow">
          <strong>FlowFrame</strong> - Collaborative wireframing tool for design teams.
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-4">We'd love to hear from you! Fill out the form below or email us at <a href="mailto:contact@nkdevstudio.com" className="text-blue-600 underline">contact@nkdevstudio.com</a>.</p>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" required />
        <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" required />
        <textarea className="w-full p-2 border rounded" placeholder="Your Message" rows="5" required></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  );
}

function GetStarted() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Get Started with NK Dev Studio</h2>
      <p className="mb-4">Ready to bring your idea to life? Tell us about your project and we'll help you make it a reality!</p>
      <Link to="/contact">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Contact Us</button>
      </Link>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen">
              {/* Hero Section */}
              <section className="pt-12 pb-20 hero-pattern">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      Transforming Ideas into
                      <span className="gradient-text"> Digital Reality</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                      We craft exceptional digital experiences that help businesses grow and succeed in the digital world.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to="/get-started">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                          Start Your Project
                        </button>
                      </Link>
                      <Link to="/our-work">
                        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                          View Our Work
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>
              {/* Services Section */}
              <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive solutions for your digital needs. We blend creativity, technology, and strategy to deliver products that stand out in the digital world.</p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Web Development",
                        description: "Custom websites and web applications built with modern technologies",
                        icon: "🌐",
                        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
                        content: "Our expert developers craft blazing-fast, scalable, and secure web solutions tailored to your business needs. From landing pages to complex SaaS platforms, we turn your vision into reality with pixel-perfect precision and seamless user experiences.",
                        link: "/web-development"
                      },
                      {
                        title: "Mobile Apps",
                        description: "Native and cross-platform mobile applications for iOS and Android",
                        icon: "📱",
                        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                        content: "Reach your audience on any device with our innovative mobile app solutions. We design and develop intuitive, high-performance apps that engage users and drive growth, whether you need a startup MVP or a full-scale enterprise app.",
                        link: "/mobile-apps"
                      },
                      {
                        title: "UI/UX Design",
                        description: "Beautiful and intuitive user interfaces that enhance user experience",
                        icon: "🎨",
                        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                        content: "Our designers blend art and science to create stunning, user-centric interfaces. We focus on usability, accessibility, and delight, ensuring every interaction with your product is memorable and meaningful.",
                        link: "/ui-ux-design"
                      }
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center cursor-pointer group"
                      >
                        <Link to={service.link} className="flex flex-col items-center w-full h-full">
                          <img src={service.image} alt={service.title + ' illustration'} className="w-24 h-24 object-cover rounded-full mb-4 shadow-md border-4 border-blue-100 group-hover:scale-105 transition-transform" />
                          <div className="text-4xl mb-2">{service.icon}</div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <p className="text-gray-500 text-sm">{service.content}</p>
                          <span className="mt-4 text-blue-600 font-semibold group-hover:underline">Learn More →</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
              {/* Contact Section */}
              <section id="contact" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600">Let's discuss your next project</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          rows="4"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </section>
              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">NK Dev Studio</h3>
                      <p className="text-gray-400">Creating digital experiences that make a difference.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                      <ul className="space-y-2">
                        <li><Link to="/web-development" className="text-gray-400 hover:text-white">Web Development</Link></li>
                        <li><Link to="/mobile-apps" className="text-gray-400 hover:text-white">Mobile Apps</Link></li>
                        <li><Link to="/ui-ux-design" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
                        <li><Link to="/our-work" className="text-gray-400 hover:text-white">Our Work</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        <li><Link to="/get-started" className="text-gray-400 hover:text-white">Get Started</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Contact</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>Email: contact@nkdevstudio.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Location: New York, NY</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} NK Dev Studio. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
          } />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/ui-ux-design" element={<UIDesign />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </>
  );
}

export default App; 