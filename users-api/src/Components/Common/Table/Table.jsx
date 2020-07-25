import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

const Table = ({ Users }) => {
    return (
        <>
            <table className="table">
                <TableHeader />
                <TableBody Users={Users} />
            </table>
        </>
    );
};

export default Table;
