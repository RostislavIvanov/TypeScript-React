import Card, {CardVariant} from "./components/Card"
import EventExample from "./components/EventExample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Пользователи</NavLink>
                <NavLink to={'/todos'}>Список дел</NavLink>
            </div>
           <Routes>
               <Route path={'/users'} Component={UserPage}/>
               <Route path={'/todos'} Component={TodosPage}/>
               <Route path={'/users/:id'} Component={UserItemPage}/>
           </Routes>
            {/*<div>*/}
            {/*    <EventExample/>*/}
            {/*    <Card height="200px" width="200px" variant={CardVariant.primary} onClick={() => console.log('click')}>*/}
            {/*        <button>ok</button>*/}
            {/*    </Card>*/}
            {/*</div>*/}
        </BrowserRouter>

    )
}

export default App