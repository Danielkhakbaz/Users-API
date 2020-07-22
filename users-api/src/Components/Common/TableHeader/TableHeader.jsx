import React from "react";

const TableHeader = () => {
    return (
        <>
            <thead className="table__thead" style={{ textAlign: "center" }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Picture</th>
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;
