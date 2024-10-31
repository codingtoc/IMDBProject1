import { LightningElement } from "lwc";

export default class MoviesList1 extends LightningElement {
  enteredText = "";
  searchText = "";
  showText = "Please Enter Valid Movie Name";

  handleChange(event) {
    this.enteredText = event.target.value;
  }

  handleClick(event) {
    this.searchText = this.enteredText;
  }
}
