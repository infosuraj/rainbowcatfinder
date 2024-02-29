import './App.css';
import {useEffect, useState} from "react";
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [cat, setCat] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredCat, setFilteredCat] = useState(cat)

    useEffect(() => {
        const filteredCatFun = cat.filter((cat) => {
            return cat.name.toLocaleLowerCase().includes(searchField)
        });
        setFilteredCat(filteredCatFun)
    }, [cat, searchField]);

    useEffect(() => {
        (async () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => {
                    return res.json();
                })
                .then(catData => {
                    setCat(catData);
                })
        })();
    }, []);

    let onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        setSearchField(searchField)
    }


    return (
        <div className="App">
            <h1 className="app-title bounce-top">Cat Catcher</h1>
            <SearchBox onSearchHandler={onSearchChange} placeHolder={'Find Cat'} classname={'monsters-search-box'}/>
            <CardList monsters={filteredCat}/>
        </div>
    );
}

export default App;
