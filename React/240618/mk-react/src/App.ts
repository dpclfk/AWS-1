import Component from "./lib/Component";
import Counter from "./components/counter";

export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });
    new Counter(document.getElementById("counter"));
  }
  override componentDidMount(): void {
    console.log("now test");
  }
  override componentDidupdate(): void {
    console.log("testing updata");
    // setTimeout(() => {
    //   this.setState({ test: this.state.test });
    //   // 새로운 객체를 만들어서 넘겨줌 새로운 메모리 주소를 갖고있기때문에 기존에 있던거랑 다르게 인식
    //   // this.state.test += 1;
    // }, 1 * 1000);
  }
  // 같은 값인데 다르다고 인식하고 있다.
  override render() {
    // console.log(this.state);
    return `<div>
      ${this.state?.test}
      <div id="counter"></div>
    </div>`;
  }
}

// console.log({}={})
// 이건 다르게 인식한다
// 메모리 주소가 다르기 때문
