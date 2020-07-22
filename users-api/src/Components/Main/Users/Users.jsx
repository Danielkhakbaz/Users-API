import React, { Component } from "react";
import Input from "../../Common/Input/Input";
import Table from "../../Common/Table/Table";
import http from "../../../Services";
import { apiURL } from "../../../Config.json";

class Users extends Component {
    state = {
        users: [],
        inputValue: "",
    };
    render() {
        const { users, inputValue } = this.state;
        return (
            <>
                <Input
                    name="Value"
                    label="Value"
                    type="number"
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onClick={this.handleSubmitButton}
                />
                <Table users={users} />
            </>
        );
    }
    handleInputChange = (e) => {
        const inputValue = e.currentTarget.value;
        this.setState({ inputValue });
    };
    handleSubmitButton = async () => {
        const users = [];
        for (let i = 0; i < this.state.inputValue; ++i) {
            const { data } = await http.get(apiURL);
            users.push(data);
            this.setState({ users });
        }
        console.log(this.state.users);
    };
}

export default Users;
