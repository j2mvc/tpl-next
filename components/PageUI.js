import ActiveLink from "./ActiveLink";

/**
 * 导航条目
 * @param props
 * @returns {*}
 * @constructor
 */
const NavbarItem = props =>{
    return (
        <li>
            <ActiveLink className='nav' prefetch as={`/c/${props.item.id}`} href={{ pathname: '/content/list', query: { catId: props.item.id }}}>
                <a>{props.item.name}</a>
                <style jsx>{`
            .nav {
                display:flex;
                list-style-type:none;
                font: 15px Helvetica, Arial, sans-serif;
                white-space:nowrap;
                text-align: center;
                transition: 100ms ease-in background;
                color:#fff;
            }
            .nav a{
                padding: 20px;
                color:#fff;
               text-decoration:none;
                cursor:pointer
            }
            .nav:hover {
                background: #555;
            }
    `}</style>
            </ActiveLink>
        </li>
    )
}

/**
 * 导航栏
 * @param props
 * @returns {*}
 * @constructor
 */
const Navbar = props =>{
    return (
        <ul className='navbar'>
            {props.list && props.list.length > 0 &&
            props.list.map((item)=><NavbarItem  key={item.id} item={item}/>)}

            <style jsx>{`
            .navbar {
                 display:flex;
                 background:#333
            }
    `}</style>
        </ul>
    )
}
const PageUI = {
    Navbar
}
export default PageUI
