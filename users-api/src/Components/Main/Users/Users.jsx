import React, { Component } from "react";
import Input from "../../Common/Input/Input";
import Table from "../../Common/Table/Table";
import Http from "../../../Services";
import { ApiURL } from "../../../Config.json";

class Users extends Component {
    state = {
        Users: [],
        InputValue: "",
    };
    render() {
        const { Users, InputValue } = this.state;
        return (
            <>
                <Input
                    name="Value"
                    label="Value"
                    type="number"
                    value={InputValue}
                    onChange={this.HandleInputChange}
                    onClick={this.HandleSubmitButton}
                />
                <Table Users={Users} />
            </>
        );
    }
    HandleInputChange = (e) => {
        const InputValue = e.currentTarget.value;
        this.setState({ InputValue });
    };
    HandleSubmitButton = async () => {
        const { InputValue } = this.state;

        const Users = [];
        for (let i = 0; i < InputValue; ++i) {
            const { data: User } = await Http.get(ApiURL);
            Users.push(User);
            this.setState({ Users });
        }
    };
}

export default Users;
