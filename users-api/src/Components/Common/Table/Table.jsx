import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

const Table = ({ users }) => {
    return (
        <>
            <table className="table">
                <TableHeader />
                <TableBody users={users} />
            </table>
        </>
    );
};

export default Table;
