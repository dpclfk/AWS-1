import Component from "./lib/Component";

export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });
  }
  override componentDidMount(): void {
    console.log("now test");
  }
  // 부모가 가지고있는걸 다시만들때 override를 쓴다
  // overloading : 적용방법 찾아볼 것
  // componentDidMount(str: string): string {
  //   console.log("now test");
  //   return str;
  // }
  override componentDidupdate(): void {
    console.log("testing updata");
    // setTimeout(() => {
    //   this.setState({ test: this.state.test + 1 });
    //   // this.state.test += 1;
    // }, 10 * 1000);
  }
  override render() {
    // console.log(this.state);
    return `<div>
      ${this.state?.test}
    </div>`;
  }
}
