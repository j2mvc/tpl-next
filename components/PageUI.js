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
            <ActiveLink  as={`/c/${props.item.id}`} prefetch>
                {props.item.name}
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
        </ul>
    )
}
const PageUI = {
    Navbar
}
export default PageUI
