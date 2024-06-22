import Cards from "../Cards/Cards.jsx";
import Columns from "../Columns/Columns.jsx";

function Main(){
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="main__block">
                        <div className="main__content">
                            <div className="main__column column">
                                <div className="column__title">
                                    <p>Без статуса</p>
                                </div>
                                < Cards />
                            </div>
                            < Columns />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;