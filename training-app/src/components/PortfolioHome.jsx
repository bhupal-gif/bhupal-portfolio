import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import img from "../assets/photo.jpeg";


const PortfolioHome = () => {

  const sendMsg = ()=>{
    alert("HIiii")
  }
  return (
    <div style={styles.page}>

      {/* Home Section */}
      <header id="home" style={styles.header}>
        <div style={styles.navbar}>
          <h1 style={styles.logo}>Bhupal</h1>
          <nav style={styles.navLinks}>
            <a style={styles.navItem} href="#home">Home</a>
            <a style={styles.navItem} href="#about">About</a>
            <a style={styles.navItem} href="#projects">Projects</a>
            <a style={styles.navItem} href="#contact">Contact</a>
          </nav>
        </div>
        <div style={styles.hero}>
          <div style={styles.heroText}>
            <h2 style={styles.greeting}>Hello! I'm</h2>
          
            <h1 style={styles.name}>Bhupal Smart</h1>
            <p style={styles.role}>Java Full Stack Developer & React Enthusiast</p>
            <p style={styles.description}>
              Passionate developer with 1.7+ years of experience building scalable Java applications. I love clean code, challenging puzzles, and lifelong learning.
            </p>
            <div style={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/bhupal-kummari-2a283b262/" target="_blank" rel="noreferrer" style={styles.icon}><FaLinkedin /></a>
              <a href="https://github.com/bhupal-gif" target="_blank" rel="noreferrer" style={styles.icon}><FaGithub /></a>
              <a href="mailto:bhupalsmart@gmail.com" style={styles.icon}><FaEnvelope /></a>
            </div>
            
            <a href="#contact" style={styles.contactButton}>Contact Me</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>⚛ About me</h2>
        <p style={styles.paragraph}>
          Hi there! I'm Bhupal , a Full Stack Developer with 1.7 years of experience in developing stand-alone and web-based applications using Java. My expertise spans across developing robust web-based applications using Java, Spring Boot for the backend.
        </p>
        <p style={styles.paragraph}>
          With extensive experience in Core Java, Spring Boot, I specialize in designing, programming, and coding. My experience also includes working with backend databases like MySQL and PostgreSQL, and I am proficient in using Spring Data, JPA, and Hibernate to manage database interactions efficiently.
        </p>
        <p style={styles.paragraph}>
          If you're looking for someone to develop a robust and scalable application, whether it's a new project or enhancing an existing one, I'd love to collaborate and help you achieve your goals. Let's build something great together!
        </p>

        <p style={styles.skillsHeading}>Here are my main skills:</p>
        <div style={styles.skillIcons}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={styles.icon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={styles.icon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={styles.icon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={styles.icon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={styles.icon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" style={styles.icon} />
        </div>
      </div>

      <div style={styles.imageContainer}>
        <img
        src={img}
          alt="Bhupal Kummari"
          style={styles.image}
        />
      </div>
    </section>


      {/* Project Section */}
         <section id="projects" style={styles.projectSection}>
      <h2 style={styles.sectionTitle}>My Projects</h2>
      <div style={styles.projectsGrid}>
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>OICL (ORIENTAL INSURANCE COMPANY LIMITED)</h3>
          <p style={styles.projectDesc}>
            Developed and built the core backend infrastructure using Java.<br></br>
            (<a href="https://orientalinsurance.org.in/" target="_blank" rel="noreferrer" style={styles.projectLinks}>Live site here</a>)
          </p>
          <div>
            <span style={styles.techTags}>React.js</span>
            <span style={styles.techTags}>Spring Boot</span>
            <span style={styles.techTags}>PostgreSQL</span>
          </div>
        </div>

        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>AIRTEL LOGIN SOLUTION</h3>
          <p style={styles.projectDesc}>
            Designed and implemented the core Java-based backend infrastructure, enhancing website security.<br></br>
            (<a href="https://www.airtel.in/s/selfcare/order-history?normalLogin" target="_blank" rel="noreferrer" style={styles.projectLinks}>Link here</a>)
          </p>
          <div>
            <span style={styles.techTags}>React.js</span>
            <span style={styles.techTags}>Spring Boot</span>
            <span style={styles.techTags}>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>


        {/* Contact Section */}
        <section id="contact" style={styles.contactSection}>
      <h2 style={styles.contactHeading}>Contact</h2>
      <p style={styles.subheading}>
        Ready to get started on your project? <br></br>Contact me now for a Free consultation.
      </p>

      <div style={styles.contactInfoWrapper}>
        <div style={styles.contactCard}>
          <span>✉︎</span>
          <a href="mailto:Hello@bhupalkummari3@gmail.com" style={{textDecoration:'none'}}>Hello@BhupalKummari</a>
        </div>
        <div style={styles.contactCard}>
          <span>📞</span>
          <a href="tel:+919848757148" style={{textDecoration:'none'}}>(+91) 7569889634</a>
        </div>
      </div>

      <form style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} />
        <textarea placeholder="Send a message to get started." style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>SUBMIT</button>
      </form>
    </section>

    {/* Footer Section*/}
    <footer style={styles.footer}>
        
      <style>{`@keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`}</style>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          This Website was made with <span style={styles.reactIcon}>⚛</span>
        </p>
        <div style={styles.socialIcons}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={styles.iconImg}
            />
          </a>
          <a
            href="https://wa.me/917569889634"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              style={styles.iconImg}
            />
          </a>
          <a
            href="https://www.instagram.com/bhupal.kummari.777/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              style={styles.iconImg}
            />
          </a>
        </div>
      </div>
    </footer>


    </div>
  );
};


const styles = {

  page: {
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    backgroundColor: '#1b1f2a',
    lineHeight: 1.6,
    width: '100vw', 
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    minHeight: '100vh',  
  },
  // Nav bar:
  navbar: {
    position: 'sticky',         
    top: 0,                      
    zIndex: 1000,                
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
    backdropFilter: 'blur(10px)',         
    WebkitBackdropFilter: 'blur(10px)',    
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
  },
  logo: {
    color: '#fff',
    fontSize: '1.5rem'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem'
  },
  navItem: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500'
  },
    // Home :
  hero: {
  minHeight: '10h', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  padding: '2rem',
  textAlign: 'center',
},
  heroText: {
    maxWidth: '50%'
  },
  greeting: {
    fontSize: '1.2rem',
    color: '#ccc'
  },
  name: {
    fontSize: '3rem',
    color: '#fff'
  },
  role: {
    fontSize: '2rem',
    color: '#ff4a57',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.5rem',
    color: '#ddd',
    marginBottom: '2rem',
    textAlign:'center'
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  icon: {
    color: '#ff4a57',
    fontSize: '3rem',
    textDecoration: 'none',
  },
  contactButton: {
    textDecoration:'none',
    backgroundColor: '#ff4a57',
    color: '#fff',
    border: 'none',
    padding: '20px 40px',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  
// About Me :
aboutSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    color: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '4rem 2rem',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
     minHeight: '100vh',
  width: '100%',    
  boxSizing: 'border-box'
  },
  textContainer: {
    maxWidth: '700px',
    flex: '1 1 500px',
  },
  heading: {
    fontSize: '2rem',
    color: '#22c55e', 
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  paragraph: {
    lineHeight: '1.7',
    marginBottom: '1rem',
    fontSize: '1.05rem',
    color: '#e2e2e2',
  },
  skillsHeading: {
    color: '#22c55e',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    fontSize: '1.1rem',
  },
  skillIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  imageContainer: {
    flex: '1 1 300px',
    maxWidth: '500px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  },


//  Projects :
  projectSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    color: '#fff',
    padding: '4rem 1rem',
    gap: '3rem',
    minHeight: '100vh',
    width: '100%',    
    boxSizing: 'border-box'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '5rem',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '8rem',
    padding: '0 15rem',
  },
  projectCard: {
    backgroundColor: '#1f1f1f',
    padding: '1.5rem',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
     minHeight: '40vh',
  },
  projectTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  projectDesc: {
    fontSize: '1.4rem',
    color: '#ccc',
    marginBottom: '2rem',
    lineHeight: '2',
  },
  projectLinks:{
    fontSize: '1.4rem',
    color: '#ccc',
    textDecoration:'none',
    // lineHeight: '2',
  },
  techTags: {
    fontSize: '1.3rem',
    color: '#00ff99',
    marginRight: '1rem',
  },

  //Contacts :
  contactSection: {
    color: '#fff',
    padding: '4rem 1rem',
     backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    alignItems: 'center',
    justifyContent: 'center',
     minHeight: '100vh',
  width: '100%',    
  boxSizing: 'border-box'
  },
  contactHeading: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  subheading: {
    textAlign: 'center',
    color: '#00ff99',
    fontSize: '1.5rem',
    margin: '0.5rem 0 2.5rem',
  },
  contactInfoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2.5rem',
    textDecoration: 'none',
    flexWrap: 'wrap',
  },
  contactCard: {
    backgroundColor: '#00ff99',
    color: '#000',
    padding: '1.4rem 2.0rem',
    borderRadius: '12px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '0.5rem',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '1.6rem',
    borderRadius: '12px',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    backgroundColor: '#000',
    border: '4px solid #555',
    color: '#fff',
    fontSize: '1.3rem',
  },
  textarea: {
    width: '100%',
    height: '8rem',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    backgroundColor: '#000',
    border: '4px solid #555',
    color: '#fff',
    fontSize: '1.4rem',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#00ff99',
    color: '#000',
    padding: '1.4rem 2.3rem',
    border: 'none',
    borderRadius: '999px',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    cursor: 'pointer',
  },

  //Footer :
    footer: {
    backgroundColor: '#1f1f1f',
    color: '#ffffff',
    padding: '1rem 2rem',
    fontSize: '0.95rem',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footerText: {
    margin: '0.5rem 0',
    fontWeight: 500,
  },
  reactIcon: {
    color: '#61dafb',
     fontSize: '2.5rem',
    marginLeft: '5px',
    display: 'inline-block',
    animation: 'spin 4s linear infinite',
  },
  iconLink: {
    display: 'inline-block',
    transition: 'transform 0.2s ease',
  },
  iconImg: {
    width: '24px',
    height: '24px',
  },

};

export default PortfolioHome;