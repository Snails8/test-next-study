import React from "react";
import {Button} from "bootstrap-react";

const List = (props) => (
    <>
        <ul className="list-group">
            <li className="list-group-item">スライムA　<Button variant="info">Info</Button></li>
            <li className="list-group-item">スライムA　<Button variant="info">Info</Button></li>
            <li className="list-group-item">スライムA　<Button variant="info">Info</Button></li>
        </ul>
    </>
);

export default List