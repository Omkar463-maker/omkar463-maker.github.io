import './App.css'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import '../src/assets/calling.png'
import '../src/assets/email.png'
import '../src/assets/github.png'
import '../src/assets/linkedin.png'

function openSkill(evt, Skills){

  var i, tabcontent,tabs_head;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tabs_head = document.getElementsByClassName("tabs_head");
  for (i = 0; i < tabs_head.length; i++) {
    tabs_head[i].className = tabs_head[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Skills).style.display = "block";
  evt.target.className += " active";
  console.log(evt.target);
}

function App() {

  return (
    <div className="portfolio" >
      <Navbar />
      <div className="main">
      <h1 className='main_header'>Omkar Shinde</h1>
      <h2 className='secondary_head'> AWS - SA certified | Azure certified | Terraform JavaScript | PowerShell scripting | CKA certified | Dockers | Ansible | GitHub | Python</h2>
      <div className='about'>
        <p>
          Software Engineer-in-training with 4+ years of experience in troubleshooting cloud-based systems, with hands-on development experience in Ruby, Python and JavaScript. Fast learner who takes ownership,contributes from day one, and is driven to grow into a software or data engineering role.
        </p>
      </div>
      <div className='skill'>
        <h2 className='header' >Skills</h2>
        <div className="tab">
        <div className="cat">
          <button className="tabs_head" onClick={() => openSkill(event, 'lang')}>Programming Languages</button>
          <button className="tabs_head" onClick={() => openSkill(event, 'cloud')}>Cloud Computing</button>
          <button className="tabs_head" onClick={() => openSkill(event, 'fw')}>Frameworks</button>
          <button className="tabs_head" onClick={() => openSkill(event, 'db')}>Database</button>
          <button className="tabs_head" onClick={() => openSkill(event, 'devops')}>DevOps tools</button>
        </div>
        <div id='lang' className="tabcontent">
          <p>Ruby, C++, Python, JavaScript.</p>
        </div>
        <div id='cloud' className="tabcontent">
          <p>EC2, AWS CloudWatch Logs, IAM, S3, CloudFront, Route 53, Certificate Manager, Dynamo DB.</p>
        </div>
        <div id='fw' className="tabcontent">
          <p>React (Node Js), Ruby on Rails, Express Js (WebAPI).</p>
        </div>
        <div id='db' className="tabcontent">
          <p>MySQL, PostgreSQL.</p>
        </div>
        <div id='devops' className="tabcontent">
          <p>Jenkins CI/CD, Maven, Terraform, Docker, Kubernetes, Ansible, Git/ GitHub, Visual Studio Code, Prometheus, Grafana, JIRA.</p>
        </div>
        </div>
      </div>
      <div className='project'>
        <h2 className='header' >Projects</h2>
        <div className="tile-container">
          <div className="tile">
            <h4 className='pro_head'>NetScan (In progress):</h4>
            <ul>
              <li>Built a code to scan the devices in the Network, using Python modules.</li>
              <li>Leveraging GitHub for versioning.</li>
              <li>Express.js (JavaScript) for WebAPI.</li>
              <li>React.js (HTML/ CSS/ JavaScript) for UI.</li>
            </ul>
            <h4 className='pro_head'>Roadmap(future implementation)</h4>
              <ul>
                <li>Integration with AI.</li>
                <li>Signup user with an ⁠ existing Gmail account with Firebase.</li>
              </ul>
            <button className="view">View Project</button>
          </div>
          <div className="tile">
            <h4 className='pro_head'>HR Mintra⁠</h4>
            <ul>
              <li>Developed a Web application with Ruby on Rails.</li>
              <li>Built a docker image to containerize the app</li>
              <li>Hosted on EC2 with ALB and Clouldfront, registered the domain</li>
            </ul>
            <button className="view">View Project</button>
          </div>
        </div>
        <div className="more_pro">
          <button className="view">More Projects</button>
        </div>
      </div>
        <div className='education'>
          <h2 className='header'>Education</h2>
          <div className="edu_des">
            <p>
              Bachelors of Computer Information System - University of the Fraser Valley
              2016/06 – 2020/06

              Abbotsford, Canada
            </p>
            <p>
              Concept:

              Operating System, Software Management Life Cycle, Security, Object-Oriented Design, Relational Databases, Data Structures and Algorithms.
            </p>
          </div>
        </div>

        <div className='certs'>
          <h2 className='header'>Certificate</h2>
          <div className="cert_content">
            <ul>
              <li><button>AWS Certified Solution Architect - Associate AWS SAA03</button></li> 
              <li><button>Certified Kubernetes Administrator</button></li>
              <li><button>Microsoft Certified: DevOps Engineer Expert</button></li>
              <li><button>AZ-104 Microsoft Azure Administrator</button></li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <h2 className='header'>Professional Experience</h2>
          <div className="card_container">
            <div className="itglue">
              <div className="prof_header">
                <h2>IT Glue</h2>
                <h3>Premium Customer Support - L2 2022/10 – present | Vancouver, Canada</h3>
              </div>
              <div className="duties">
                <ul>
                  <li>Resolved over 300 end-user technical issues weekly related to cloud services, APIs, databases, and networking, maintaining a 98% satisfaction rate based on internal surveys.</li>
                  <li>Collaborating across various groups and departments for debugging, problem-solving, and escalating if required.</li>
                  <li>Configure the test environment to assist the quality assurance team in maintaining product quality.</li>
                  <li>DevelopedPowerShell scripts leveraging public API documentation to automate recurring operational tasks.</li>
                  <li>Wrote and updated SQL queries for data retrieval and resolution of customer issues, optimizing database performance and resolving complex queries.</li>
                  <li>Debugged frontend application errors by examining HAR files using browser developer tools, leading to a 30% reduction in page load times across web applications and a positive user experience.</li>
                  <li>Reproduce and report a bug to the engineers with detailed information and replication steps, including screen captures.</li>
                  <li>Ensure exceptional customer satisfaction while maintaining a Service Level Agreement (SLA) compliance rate of over 95%.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="coleman">
              <div className="prof_header">
                <h2>Coleman Technologies</h2>
                <h3>IT SUPPORT SPECIALIST 2021/09 – 2022/09 | Langley, Canada</h3>
              </div>
              <div className="duties">
                <ul>
                  <li>Resolved over 20 escalated technical support tickets daily, maintaining a 98% client satisfaction rating and reducing average resolution time by 15% within the first quarter.</li>
                  <li>Deployed and configured VPNs, remote systems, and cloud-based services, ensuring seamless integration with cloud platforms.</li>
                  <li>Manage Windows servers - Configure, monitor, pushing updates, Cloud Backup and maintain security.</li>
                  <li>Delivered support for various operating systems and applications, managing user access control and ensuring compliance with security policies.</li>
                  <li>Created and maintained system documentation and technical guides to improve internal processes and customer satisfaction.</li>
                  <li>Manage Entra ID user, security group and monitor condition access policy.</li>
                  <li>Deploy Domain Controller on a Window 2022 server from scratch and Manage AD users, security group and deploy GPO.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="myriad">
              <div className="prof_header">
                <h2>Myriad Information Technology Solutions</h2>
                <h3>
                  TECHNICAL ANALYST  2021/01 – 2021/09 | Chilliwack, Canada
                </h3>
              </div>
              <div className="duties">
                <ul>
                  <li>Supported cloud and network infrastructure, configuring servers, troubleshooting issues, and ensuring reliable service delivery.</li>
                  <li>Managed network-related projects, configuring network devices and security systems (VPN, DNS, Firewall) for cloud and on-premise environments.</li>
                  <li>Provided hands-on technical support, ensuring the uptime and reliability of internal and customer-facing systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section id='form'>
          <h1 className='header'>Email me:</h1>
          <div className="form">
            <form className="field">
              <label>First Name:</label><br />
              <input type="text" className="fname" /><br />
              <label>Last Name:</label><br />
              <input type="text" className="lname" /><br />
              <label>Company:</label><br />
              <input type="text" className='company'/><br />
              <label>Email:</label><br />
              <input type="text" className="email" /><br />
              <label>Phone:</label><br />
              <input type="text" className="phone" /><br />
              <label>Comment:</label><br />
              <textarea className="comment" />
              <div className="submission">
                <button className="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
        </div>
        <section>
          <div className="social">
            <div className="contact_content">
              <ul>
                <li><img className='email' src='../src/assets/email.png'></img>:omkarshinde4639932@gmail.com</li>
                <li><img className='phone' src='../src/assets/calling.png'></img>: +1 (236)-865-3757</li>
                <li><a href='https://github.com/Omkar463-maker'><img className='github' src='../src/assets/github.png' /></a></li>
                <li><a href='www.linkedin.com/in/omkar-shinde-931baa170'><img className='linkedin' src='../src/assets/linkedin.png' /></a></li>
              </ul>
            </div>
            <div className="foot_cont">
            <table className='nav'>
              <tbody>
                <th>Navigation</th>
                <tr><td>Summary</td></tr>
                <tr><td>Skills</td></tr>
                <tr><td>Project</td></tr>
                <tr><td>Education</td></tr>
                <tr><td>Certificate</td></tr>
                <tr><td>Experience</td></tr>
              </tbody>
              <tbody>
                <th>Projects</th>
                <tr><td>Network Scanner</td></tr>
                <tr><td>HR Mintra</td></tr>
                <tr><td>Monitoring App</td></tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default App;
