type State = {
  [key: string]: any;
};

export interface IComponent {
  setState(newState: State): void;
  componentDidMount(): void;
  componentDidupdate(): void;
  componentWillUnmount(): void;
  render(): string;
}

export default class Component {
  protected state: State = [];
  private parent: HTMLElement;
  // React에서 가장 기초되는 단위 << 어떤 단위?
  // 엘리먼트(영역)에 대한 단위
  // React의 중요 개념 : VDOM, state
  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.rerender();
    this.componentDidMount();
  }
  // 필요한 메서드는?
  setState(newState: State): void {
    let isNewState = false;
    // keyof State => State에 포함된 key값만 가져옴
    Object.keys(newState).forEach((key: keyof State) => {
      if (this.state[key] != newState[key]) {
        isNewState = true;
      }
    });
    if (isNewState) {
      this.state = { ...this.state, ...newState };
      this.rerender();
      this.componentDidupdate();
    }
  }
  componentDidMount(): void {}
  componentDidupdate(): void {}
  componentWillUnmount(): void {}
  render(): string {
    return "";
  }
  private rerender(): void {
    this.parent.innerHTML = this.render();
  }
}
