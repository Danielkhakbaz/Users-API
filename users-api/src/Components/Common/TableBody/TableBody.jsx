import React from "react";

const TableBody = ({ users }) => {
    return (
        <>
            <tbody className="table__tbody" style={{ textAlign: "center" }}>
                {users.map((user) => (
                    <tr key={user.results[0].cell}>
                        <td>
                            {user.results[0].name.title}{" "}
                            {user.results[0].name.first}{" "}
                            {user.results[0].name.last}
                        </td>
                        <td>{user.results[0].email}</td>
                        <td>{user.results[0].gender}</td>
                        <td>
                            <img
                                src={user.results[0].picture.thumbnail}
                                alt="User's Pic"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default TableBody;
