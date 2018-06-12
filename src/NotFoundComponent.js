/**
 * Created by mmab on 06/03/2018.
 */

import React from "react";
import { Link } from 'react-router-dom';

export default function NotFoundComponent(props) {

    return <div className="list-books">
        <div className="list-books-title">
            <h1>You landed on wrong planet</h1>
            <Link to="/">Back</Link>
        </div>
    </div>
}

