import React from 'react';
import './Footer.css'
import Link from  '../shared/Link/Link'

function Footer() {
    return <nav className="Footer">
        <ul>
        <Link url="#" >
                <img id="logo" src="blue-origami-bird.png" alt="my-app-logo" />
            </Link>
            <Link>Link 1</Link>
            <Link>Link 2</Link>
            <Link>Link 3</Link>

        </ul>
    </nav>
};

export default Footer;