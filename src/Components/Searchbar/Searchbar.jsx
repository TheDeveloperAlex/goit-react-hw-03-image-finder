import React, { Component } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    name: "",
  };

  onHandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({ name: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      toast.error("Error, please enter text ");
      return;
    }
    this.props.onSubmit(this.state.name);
    document.getElementById("input").value = "";
    this.setState({ name: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            onChange={this.onHandleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id="input"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
