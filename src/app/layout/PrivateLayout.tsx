import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"


const PrivateLayout = () => {
    return (
        <div className="vh-100">
            <Container className="py-5 mt-5">
                <Outlet />
            </Container>
        </div>
    )
}

export default PrivateLayout
