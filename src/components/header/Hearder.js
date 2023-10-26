import { NavLink } from "react-router-dom";


const Header = ({ tabs }) => {
    let elems

    if (tabs !== null) {

        let newTabs = tabs.sort(sortOrder)

        function sortOrder(a, b) {
            if (a.order > b.order) return 1;
            if (a.order < b.order) return -1;
            return 0;
        }

        elems = newTabs.map((tab, i) => {
            return (
                <NavLink to={`/${tab.id}`}>
                    <p>{tab.title}</p>
                </NavLink>

            )
        })
    }

    return (
        <header>
            <nav>
                <NavLink to='/'>home</NavLink>
                {elems}
            </nav>
        </header>
    )
}

export default Header