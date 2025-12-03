import { Typography, Button, Box, Card, CardContent } from '@mui/material';
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import styles from "./Home.module.css"
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMui } from 'react-icons/si';

import { FaPython } from 'react-icons/fa';
import { SiNodedotjs, SiPostgresql, SiMongodb, SiDocker, SiJenkins } from 'react-icons/si';
export default function Home() {
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>

      {/* Home Section */}
      <Box 
        className={styles.hero}
        id="home"
      >
        <div className={styles.heroContainer}>
          <div className={styles.leftOffset}>
            <div className={styles.textWrapper}>
              <div className={styles.title}>
                Full Stack <span className={styles.greenText}>Developer</span> 
              </div>
              <div className={styles.description}>
                I’m a full stack developer who enjoys building practical, well-designed digital solutions.              </div>
              <div className={styles.buttonsContainer}>
                <Button
                disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },
              }} 
               onClick={() => scrollToSection('projects')}
                className={styles.viewWorkButton}>
                  View My Work
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.rightWrapper}>

            <div className={styles.image}></div>
          
            <div className={styles.purpleCircle}></div>
            <div className={styles.greenCircle}></div>
          </div>
        </div>
      </Box>

      {/* Skills Section */}

        <Box className={styles.skillsContainer} id="skills">
          <Box className={styles.skillsHeader}>
            <Typography variant="h3" className={styles.skillsTitle}>
              My <span className={styles.greenText}>Skills</span>
            </Typography>
            <Box className={styles.skillsUnderline} />
          </Box>
          <Box className={styles.skillsContent}>
                <Card className={styles.skillCard}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                  <CodeIcon sx={{ color: '#22C55E', fontSize: 36, mb: "15px"}} />
                <Typography variant="h6" className={styles.skillTitle}>
                Frontend Development
                </Typography>
                </Box>
                
                <Box className={styles.skillTech} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: 0.5 }}>
                    <SiJavascript size={24} color="#F7DF1E" />
                    <Typography variant="caption">JavaScript</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: 0.5 }}>
                    <FaReact size={24} color="#61DAFB" />
                    <Typography variant="caption">React</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: 0.5 }}>
                    <SiTypescript size={24} color="#007ACC" />
                    <Typography variant="caption">TypeScript</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: 0.5 }}>
                    <SiMui size={24} color="#007FFF" />
                    <Typography variant="caption">MUI</Typography>
                </Box>
                </Box>
            </CardContent>
            </Card>
                
                <Card className={styles.skillCard}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                    <ApiIcon sx={{ color: '#22C55E', fontSize: 36 , mb:"15px"}} />
                       <Typography variant="h6" className={styles.skillTitle}>
                    Backend Development
                    </Typography>
                    </Box>
                   
                    <Box className={styles.skillTech} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <SiNodedotjs size={24} color="#339933" />
                        <Typography variant="caption">Node.js</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <FaPython size={24} color="#3776AB" />
                        <Typography variant="caption">Python</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <SiPostgresql size={24} color="#4169E1" />
                        <Typography variant="caption">PostgreSQL</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <SiMongodb size={24} color="#47A248" />
                        <Typography variant="caption">MongoDB</Typography>
                    </Box>
                    </Box>
                </CardContent>
                </Card>

                <Card className={styles.skillCard}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                    <CloudIcon sx={{ color: '#22C55E', fontSize: 36 ,mb:"15px"}} />
                     <Typography variant="h6" className={styles.skillTitle}>
                    Cloud & DevOps
                    </Typography>
                    </Box>
                   
                    <Box className={styles.skillTech} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <SiDocker size={24} color="#2496ED" />
                        <Typography variant="caption">Docker</Typography>
                    </Box>
                   
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                        <SiJenkins size={24} color="#F0D811" />
                        <Typography variant="caption">CI/CD</Typography>
                    </Box>
                    </Box>
                </CardContent>
                </Card>
          </Box>
        </Box>
      

      {/* Projects Section */}
   
        <Box className={styles.projectsContainer} id="projects">
          <Box className={styles.projectsHeader}>
            <Typography variant="h3" className={styles.projectsTitle}>
              Featured <span className={styles.greenText}>Projects</span>
            </Typography>
            <Box className={styles.projectsUnderline} />
          </Box>
          <Box className={styles.projectsContent}>
                <Card className={styles.projectCard}>
                <Box className={styles.projectImageContainer}>
                    <Box component="img" src="/Capture.PNG" className={styles.projectImage} />
                </Box>
                <CardContent className={styles.projectDetails}>
                    <Typography variant="h6" className={styles.projectTitle}>
                    E-Commerce Platform
                    </Typography>
                    <Typography variant="body2" className={styles.projectDescription}>
                    Full-stack e-commerce solution with React, Node.js, and Stripe integration
                    </Typography>
                    <Box className={styles.projectIcons}>
                        <a href="https://github.com/danielwubie/Alora-frontend" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: '#22C55E', fontSize: 24, cursor: 'pointer' }} />
                        </a>
                        <a href="https://alora-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <OpenInNewIcon sx={{ color: '#9333EA', fontSize: 24, cursor: 'pointer' }} />
                        </a>
                    </Box>
                </CardContent>
                </Card>
            <Card className={styles.projectCard}>
              <Box className={styles.projectImageContainer}>
                <Box component="img" src="/snip.PNG" className={styles.projectImage} />
              </Box>
              <CardContent className={styles.projectDetails}>
                <Typography variant="h6" className={styles.projectTitle}>
                 Café Website
                </Typography>
                <Typography variant="body2" className={styles.projectDescription}>
                A warm and inviting website showcasing the café’s menu and atmosphere.
                </Typography>
                <Box className={styles.projectIcons}>
                     <a href="https://github.com/isle27/cafe-website" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: '#22C55E', fontSize: 24, cursor: 'pointer' }} />
                    </a>
                    <a href="https://cafe-website-999.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon sx={{ color: '#9333EA', fontSize: 24, cursor: 'pointer' }} />
                    </a>
                </Box>
              </CardContent>
            </Card>
            <Card className={styles.projectCard}>
              <Box className={styles.projectImageContainer}>
                <Box component="img" src="/snip2.PNG" className={styles.projectImage} />
              </Box>
              <CardContent className={styles.projectDetails}>
                <Typography variant="h6" className={styles.projectTitle}>
                  Event Planner Website
                </Typography>
                <Typography variant="body2" className={styles.projectDescription}>
                  A sleek platform for organizing and showcasing events with ease.
                </Typography>
                <Box className={styles.projectIcons}>
                   <a href="https://github.com/isle27/E.B-Events" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: '#22C55E', fontSize: 24, cursor: 'pointer' }} />
                    </a>
                    <a href="https://e-b-events.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon sx={{ color: '#9333EA', fontSize: 24, cursor: 'pointer' }} />
                    </a>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
   

      {/* About Section */}
      
        <Box className={styles.aboutContainer} id="about">
          <Box className={styles.aboutHeader}>
            <Typography variant="h3" className={styles.aboutTitle}>
              About <span className={styles.greenText}>Me</span>
            </Typography>
            <Box className={styles.aboutUnderline} />
          </Box>
          <Box className={styles.aboutContent}>
            <Box className={styles.aboutText}>
             <Typography variant="body1" className={styles.aboutParagraph1}>
            I’m a self-taught full stack developer with several years of hands-on experience building digital projects that make a real difference. I work with modern web technologies and enjoy turning complex ideas into simple, clear solutions.
          </Typography>

          <Typography variant="body1" className={styles.aboutParagraph2}>
            When I’m not coding, I’m learning new tools, working on side projects, or sharing what I know with other developers in the community.
          </Typography>
              <Box className={styles.aboutStats}>
                <Card className={styles.statCard}>
                  <CardContent className={styles.statContent}>
                    <Typography variant="h4" color="primary" className={styles.statValueGreen}>
                      3+
                    </Typography>
                    <Typography variant="body2" className={styles.statLabel}>
                      Projects Completed
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={styles.statCard}>
                  <CardContent className={styles.statContent}>
                    <Typography variant="h4" color="secondary" className={styles.statValuePurple}>
                      1+
                    </Typography>
                    <Typography variant="body2" className={styles.statLabel}>
                      Years Experience
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box className={styles.aboutImageContainer}>
              <Box className={styles.aboutImageBorder}>
                <Box component="img" src="/wwww.png" className={styles.aboutImage} />
              </Box>
            </Box>
          </Box>
        </Box>
      

      {/* Contact Section */}

        <Box className={styles.contactContainer} id="contact">
          <Box className={styles.contactHeader}>
            <Typography variant="h3" className={styles.contactTitle}>
              Get In <span className={styles.greenText}>Touch</span>
            </Typography>
            <Box className={styles.contactUnderline} />
            <Typography variant="body1" className={styles.contactSubtitle}>
              Let&apos;s discuss your next project
            </Typography>
          </Box>
          <Box className={styles.contactContent}>
            <Box className={styles.contactInfo}>
              <Box className={styles.infoItem}>
                <Box className={styles.infoIconContainer}>
                  <EmailIcon sx={{ color: '#22C55E', fontSize: 24 }} />
                </Box>
                <Box className={styles.infoText}>
                  <Typography variant="subtitle1" className={styles.infoLabel}>
                    Email
                  </Typography>
                  <Typography variant="body2" className={styles.infoValue}>
                    betelhemwubie28@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.infoItem}>
                <Box className={styles.infoIconContainer}>
                  <PhoneIcon sx={{ color: '#9333EA', fontSize: 24 }} />
                </Box>
                <Box className={styles.infoText}>
                  <Typography variant="subtitle1" className={styles.infoLabel}>
                    Phone
                  </Typography>
                  <Typography variant="body2" className={styles.infoValue}>
                    +251993744319
                  </Typography>
                </Box>
              </Box>
              
            </Box>
            <Box className={styles.socialIcons}>
                <a href="mailto:betelhemwubie28@gmail.com">
                    <EmailIcon sx={{ color: '#22C55E', fontSize: 24, cursor: 'pointer' }} />
                </a>
                 <a href="https://github.com/isle27" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: '#22C55E', fontSize: 24, cursor: 'pointer' }} />
                </a>
              </Box>
          </Box>
        </Box>
    

<hr className={styles.hr}/>
      
        <Box className={styles.footerContainer}>
          <Box className={styles.footerInner}>
            <Typography variant="body2" className={styles.footerText}>
              © 2024 Developer Portfolio. All rights reserved.
            </Typography>
          </Box>
        </Box>

    




    </>
  );
}