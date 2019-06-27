import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, router, as,href }) => {
    const handleClick = (e) => {
        e.preventDefault()
        window.location.href=as;
    }

    return (
        <a  as={as} href={href} onClick={handleClick} >
            {children}
        </a>
    )
}

export default withRouter(ActiveLink)
