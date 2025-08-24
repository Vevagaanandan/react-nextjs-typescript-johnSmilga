import { FaBars } from 'react-icons/fa'
import { useGlobalContent } from './Context'
import NavLinks from './navLinks'

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContent()
  const handleSubmenu = (e) => {
    // console.lob(e.target)
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar
