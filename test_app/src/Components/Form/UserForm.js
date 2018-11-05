import React, { Component } from "react";

class UserForm extends Component {
  state = {
    lastname: "",
    firstname: "",
    gender: "male"
  };

  handleChange = e => {
    switch(e.target.id)
    {
      case "lastnameTextbox":
      this.setState({
        lastname: e.target.value
      });
        break;
      case "firstnameTextbox":
      this.setState({
        firstname: e.target.value
      });
        break;
      case "genderSelectbox":
      this.setState({
        gender: e.target.value
      });
        break;
      default:
    }
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      lastname: "",
      firstname: "",
      gender: "male"
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="lastnameTextbox"
          placeholder="성"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <input
          id="firstnameTextbox"
          placeholder="이름"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <select
          id="genderSelectbox"
          placeholder="성별"
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default UserForm;
