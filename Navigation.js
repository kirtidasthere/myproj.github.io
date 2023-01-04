
function Navigation({ filterItem, menuList }) {
    return (
        <>

            <ul className="nav">


                {

                    menuList.map((item) => {
                        return (
                            <>

                                <li className="nav-item" onClick={() => filterItem(item)}>
                                    <a className="nav-link active" href="#">{item}</a>
                                </li>
                            </>
                        )
                    })

                }



                

            </ul>
        </>
    )
}

export default Navigation;