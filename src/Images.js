import React, { Component } from "react";

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: [
        {
          id: "1",
          img: "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "11",
          img: "https://m.media-amazon.com/images/I/51Z-CqWUN1L._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "21",
          img: "https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "31",
          img: "https://m.media-amazon.com/images/I/61WqF8Y6HTL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "12",
          img: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "2",
          img: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "32",
          img: "https://m.media-amazon.com/images/I/51i+LdztEBL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "22",
          img: "https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UL320_.jpg",
          type: "a,t",
        },
        {
          id: "33",
          img: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "13",
          img: "https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "23",
          img: "https://m.media-amazon.com/images/I/71CKGX0iXPS._AC_UL320_.jpg",
          type: "a,t",
        },
        {
          id: "3",
          img: "https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "24",
          img: "https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UL320_.jpg",
          type: "a,t",
        },
        {
          id: "5",
          img: "https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "34",
          img: "https://m.media-amazon.com/images/I/81lLGM7SKbL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "14",
          img: "https://m.media-amazon.com/images/I/810Y-PUrbyL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "6",
          img: "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "15",
          img: "https://m.media-amazon.com/images/I/61Newaer7kS._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "25",
          img: "https://m.media-amazon.com/images/I/61Eb9vtdSML._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "35",
          img: "https://m.media-amazon.com/images/I/61YHhQzV+KL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "16",
          img: "https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "36",
          img: "https://m.media-amazon.com/images/I/61HXCeozUjL._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "7",
          img: "https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "26",
          img: "https://m.media-amazon.com/images/I/41jdvXSoeyS._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "37",
          img: "https://m.media-amazon.com/images/I/61LoZ5bkOkL._AC_UL320_.jpg",
          type: "a,h",
        },
        {
          id: "27",
          img: "https://m.media-amazon.com/images/I/61R1tulpfzL._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "17",
          img: "https://m.media-amazon.com/images/I/618M+ksuptL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "8",
          img: "https://m.media-amazon.com/images/I/61SpA599GgL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "9",
          img: "https://m.media-amazon.com/images/I/8104evx11QL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "18",
          img: "https://m.media-amazon.com/images/I/71b8lYXqorL._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "28",
          img: "https://m.media-amazon.com/images/I/91veRYPjpeL._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "39",
          img: "https://m.media-amazon.com/images/I/51v35xHUkIL._AC_UL320_.jpg",
          type: "a,h",
        },
        {
          id: "19",
          img: "https://m.media-amazon.com/images/I/61y-dK-6VhL._AC_UL320_.jpg",
          type: "a,l",
        },
        {
          id: "40",
          img: "https://m.media-amazon.com/images/I/61leGjTDm0L._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "29",
          img: "https://m.media-amazon.com/images/I/51ZlTi5UKgL._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "10",
          img: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg",
          type: "a,m",
        },
        {
          id: "20",
          img: "https://m.media-amazon.com/images/I/91d75JiCH9L._AC_UY218_.jpg",
          type: "a,l",
        },
        {
          id: "41",
          img: "https://m.media-amazon.com/images/I/716Il5U5F4L._AC_UY218_.jpg",
          type: "a,h",
        },
        {
          id: "30",
          img: "https://m.media-amazon.com/images/I/81Vs371KLML._AC_UY218_.jpg",
          type: "a,t",
        },
        {
          id: "42",
          img: "https://m.media-amazon.com/images/I/61HBpQuLjVL._AC_UY218_.jpg",
          type: "a,h",
        },
      ],
    };
  }

  render() {
    let images = this.state.image.map((value) => {
      if (value.type.includes(this.props.status)) {
        return (
          <div key={value.id} className="boxes">
            <img src={value.img} alt="pic"></img>
          </div>
        );
      } else {
        return null;
      }
    });
    return <div className="flex box mx-w">{images}</div>;
  }
}

export default Images;
