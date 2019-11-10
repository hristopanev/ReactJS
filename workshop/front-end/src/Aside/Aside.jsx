import React from 'react';
import './Aside.css'
import Link from  '../shared/Link/Link'

function Aisde() {
    return <aside className="Aside">
        <ul>
            <Link>Aside Link 1</Link>
            <Link>Aside Link 2</Link>
            <Link>Aside Link 3</Link>
        </ul>
    </aside>
};

export default Aisde;