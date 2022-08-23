import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";


let list = [
    { name: "Art" },
    { name: "National Parks" },
    { name: "Beaches" },
    { name: "Restaurants" },
    { name: "Cafes" },
    { name: "Spas" },
  ];
  
  const MenuItem = ({ text, selected }) => {
    return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
  };
  
  export const Menu = (list, selected) =>
    list.map(el => {
      const { name } = el;
  
      return <MenuItem text={name} key={name} selected={selected} />;
    });
  
  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };
  Arrow.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
  };
  
  export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
  
  class MenuBar extends Component {
    state = {
      alignCenter: true,
      clickWhenDrag: false,
      dragging: true,
      hideArrows: true,
      hideSingleArrow: true,
      itemsCount: list.length,
      scrollToSelected: false,
      selected: "",
      translate: 0,
      transition: 0.3,
      wheel: true
    };
  
    constructor(props) {
      super(props);
      this.menu = null;
      this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
    }
  
    onFirstItemVisible = () => {
      console.log("first item is visible");
    };
  
    onLastItemVisible = () => {
      console.log("last item is visible");
  
      const newItems = Array(5)
        .fill(1)
        .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
      list = list.concat(newItems);
      this.menuItems = Menu(list, list.slice(-1)[0].name);
      this.setState({
        itemsCount: list.length,
        selected: this.state.selected
      });
    };
  
    onUpdate = ({ translate }) => {
      console.log(`onUpdate: translate: ${translate}`);
      this.setState({ translate });
    };
  
    onSelect = key => {
      console.log(`onSelect: ${key}`);
      this.setState({ selected: key });
    };
  
    componentDidUpdate(prevProps, prevState) {
      const { alignCenter } = prevState;
      const { alignCenter: alignCenterNew } = this.state;
      if (alignCenter !== alignCenterNew) {
        this.menu.setInitial();
      }
    }
  
    setItemsCount = ev => {
      const { itemsCount = list.length, selected } = this.state;
      const val = +ev.target.value;
      const itemsCountNew =
        !isNaN(val) && val <= list.length && val >= 0
          ? +ev.target.value
          : list.length;
      const itemsCountChanged = itemsCount !== itemsCountNew;
  
      if (itemsCountChanged) {
        this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
        this.setState({
          itemsCount: itemsCountNew
        });
      }
    };
  
    setSelected = ev => {
      const { value } = ev.target;
      this.setState({ selected: String(value) });
    };
  
    render() {
      const {
        alignCenter,
        clickWhenDrag,
        hideArrows,
        dragging,
        hideSingleArrow,
        scrollToSelected,
        selected,
        translate,
        transition,
        wheel
      } = this.state;
  
      const menu = this.menuItems;
  
    
      const valueStyle = {
        margin: "5px 10px",
        display: "inline-block"
      };
  
      return (
        <div className="Category">
  
          <ScrollMenu
            alignCenter={alignCenter}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            clickWhenDrag={clickWhenDrag}
            data={menu}
            dragging={dragging}
            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            onFirstItemVisible={this.onFirstItemVisible}
            onLastItemVisible={this.onLastItemVisible}
            onSelect={this.onSelect}
            onUpdate={this.onUpdate}
            ref={el => (this.menu = el)}
            scrollToSelected={scrollToSelected}
            selected={selected}
            transition={+transition}
            translate={translate}
            wheel={wheel}
          />
  
          <form className="properties">
            <br />
            <label style={valueStyle}>
              Category:
              <input
                style={{ margin: "0 5px" }}
                name="selected"
                type="text"
                value={selected}
                onChange={this.setSelected}
              />
            </label>
            
        
          </form>
          <hr />
        </div>
      );
    }
  }
  
  export default MenuBar;