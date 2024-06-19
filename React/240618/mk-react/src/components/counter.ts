import Component from "../lib/Component";

export default class Counter extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ count: 0 });
    // document.getElementById("count-btn").onclick = this.handlerCount;

    document.getElementById("count-btn").onclick = () => {
      // 화살표 함수랑 function의 차이
      // function => thisbinding => this에 대해서 상위 객체를 가르킨다
      // arrow function => 왜 카운터가 나왔을까? => thisbinding X
      // console.log(this);
      this.handlerCount();
    };
    // document.getElementById("count-btn").addEventListener("click", () => {
    //   this.handlerCount();
    // });
  }
  componentDidupdate(): void {
    document.getElementById("count-btn").onclick = () => {
      this.handlerCount();
    };
  }
  handlerCount() {
    // console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return `<button id="count-btn">count : ${this.state.count}</button>`;
    // return `<button onclick="(${this.handlerCount})()">count : ${this.state.count}</button>`;
  }
}
