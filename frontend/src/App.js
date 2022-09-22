import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                <h1>Testing</h1>
                </Container>
            </main>
            <Footer />
        </>

    );
}

export default App;
