import NavBar from "./navbar"


const PageWrapper = (props) => {
    const { component } = props

    return (
        <div className="page-wrapper">
            <NavBar />
            {component}
        </div>
    )

}

export default PageWrapper