import {useState} from 'react';

export function Searchbar(props) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.prevent.default;
        setSearch(e.target.value);
    }
    if(search.length > 0) {
        props.rings.filter((ring) => {
            return ring.Name.match(search);
        })
    }

    return (
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search" onChange={handleSearch} value={search} />
        </div>
        </>
    );
}