import React from "react";

const TableBody = ({ Users }) => {
    return (
        <>
            <tbody className="table__tbody" style={{ textAlign: "center" }}>
                {Users.map((User) => (
                    <tr key={User.results[0].cell}>
                        <td>
                            {User.results[0].name.title}{" "}
                            {User.results[0].name.first}{" "}
                            {User.results[0].name.last}
                        </td>
                        <td>{User.results[0].email}</td>
                        <td>{User.results[0].gender}</td>
                        <td>
                            <img
                                src={User.results[0].picture.thumbnail}
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
