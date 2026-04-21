import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='Navbar'>
        <div className='navbar-left'>
            <h2 className='logo'>OS</h2>
        </div>
        <div className='navbar-center'>
            <ul className='nav-menu'>
                <li>Summary</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Certificates</li>
                <li>Experience</li>
            </ul>
        </div>
    </nav>
  )
}
