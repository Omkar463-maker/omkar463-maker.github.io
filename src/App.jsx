import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Omkar Shinde</h1>
          <h3>Welcome to my Portfolio!</h3>
          <h2>Summary</h2>
          <p>
            Software Engineer-in-training with 4+ years of experience in troubleshooting cloud-based systems, with hands-on development experience in Ruby, Python and JavaScript. Fast learner who takes ownership,contributes from day one, and is driven to grow into a software or data engineering role.
          </p>
          <h2>Skills</h2>
          <p>
            Programming Languages: Ruby, C++, Python, JavaScript.
            AWS Services: EC2, AWS CloudWatch Logs, IAM, S3, CloudFront, Route 53, Certificate Manager, Dynamo DB.
            Frameworks: React (Node Js), Ruby on Rails, Express Js (WebAPI).
            Database: MySQL, PostgreSQL.
            DevOps Tools: Jenkins CI/CD, Maven, Terraform, Docker, Kubernetes, Ansible, Git/ GitHub, Visual Studio Code, Prometheus, Grafana, JIRA.
          </p>
          <h2>Project</h2>
          <p>
            NetScan (In progress):

              • Built a code to scan the devices in the Network, using Python modules.
              • Leveraging GitHub for versioning.
              • Express.js (JavaScript) for WebAPI.
              • React.js (HTML/ CSS/ JavaScript) for UI.
            Roadmap(future implementation)
              • Integration with AI.
              • Signup user with an ⁠ existing Gmail account with Firebase.

            HR Mintra⁠
              • Developed a Web application with Ruby on Rails.
              • Built a docker image to containerize the app
              • Hosted on EC2 with ALB and Clouldfront, registered the domain
          </p>
          <h2>Education</h2>
          <p>
            Bachelors of Computer Information System - University of the Fraser Valley
            2016/06 – 2020/06

            Abbotsford, Canada
            Concept:

              Operating System, Software Management Life Cycle, Security, Object-Oriented Design, Relational Databases, Data Structures and Algorithms.
          </p>
          <h2>Certificate</h2>
          <p>
            AWS Certified Solution Architect - Associate AWS SAA03 (EC2, SQS, S3, Certificate Manager, RDMS, Dynamo DB, CloudWatch etc) 

            Certified Kubernetes Administrator⁠ 

            Microsoft Certified: DevOps Engineer Expert 

            AZ-104 Microsoft Azure Administrator
          </p>
          <h2>Professional Experience</h2>
          <p>
            IT Glue
            Premium Customer Support - L2 2022/10 – present | Vancouver, Canada

            • Resolved over 300 end-user technical issues weekly related to cloud services, APIs, databases, and networking, maintaining a 98% satisfaction rate based on internal surveys.
            • Collaborating across various groups and departments for debugging, problem-solving, and escalating if required.
            • Configure the test environment to assist the quality assurance team in maintaining product quality.
            • DevelopedPowerShell scripts leveraging public API documentation to automate recurring operational tasks.
            • Wrote and updated SQL queries for data retrieval and resolution of customer issues, optimizing database performance and resolving complex queries.
            • Debugged frontend application errors by examining HAR files using browser developer tools, leading to a 30% reduction in page load times across web applications and a positive user experience.
            • Reproduce and report a bug to the engineers with detailed information and replication steps, including screen captures.
            • Ensure exceptional customer satisfaction while maintaining a Service Level Agreement (SLA) compliance rate of over 95%.

          IT SUPPORT SPECIALIST - Coleman Technologies 2021/09 – 2022/09 | Langley, Canada  

            • Resolved over 20 escalated technical support tickets daily, maintaining a 98% client satisfaction rating and reducing average resolution time by 15% within the first quarter.
            • Deployed and configured VPNs, remote systems, and cloud-based services, ensuring seamless integration with cloud platforms.
            • Manage Windows servers - Configure, monitor, pushing updates, Cloud Backup and maintain security.
            • Delivered support for various operating systems and applications, managing user access control and ensuring compliance with security policies.
            • Created and maintained system documentation and technical guides to improve internal processes and customer satisfaction.
            • Manage Entra ID user, security group and monitor condition access policy.
            • Deploy Domain Controller on a Window 2022 server from scratch and Manage AD users, security group and deploy GPO.

          TECHNICAL ANALYST - Myriad Information Technology Solutions 2021/01 – 2021/09 | Chilliwack, Canada
            • Supported cloud and network infrastructure, configuring servers, troubleshooting issues, and ensuring reliable service delivery.
            • Managed network-related projects, configuring network devices and security systems (VPN, DNS, Firewall) for cloud and on-premise environments.
            • Provided hands-on technical support, ensuring the uptime and reliability of internal and customer-facing systems.
          </p>
        </div>
        <div>
        </div>
      </section>
      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Thank you for visiting. I hope you had great time!</h2>
          <p>Contact me on:</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://wwww.linkedin.com/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
