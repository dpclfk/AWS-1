테스트관련 jest

npx jest

npm test = 리액트가 자동으로 까는 테스트

/learn react/i => learn react를 찾고있음

test("renders learn react link", () => {
render(<App />); 앱을 그려라
const linkElement = screen.getByText(/learn react/i); learn react라는 텍스트를 찾아라
expect(linkElement).toBeInTheDocument();
expect : 인자를 테스트 한다
toBeInTheDocument : 문서 안에 존재하는가?
getByText : 해당 텍스트를 가지고있는 엘리멘트
});

TDD 테스트를 먼저만들고 맞춰서 구현

fireEvent : 이벤트 실행
beforeEach: 모든 테스트전에 해주는것

const buttonElem = screen.getByRole("button", { name: "Add Todo" });
에서 name은 innerhtml 즉 button name = "Add Todo" 가 아니라 <button>Add Todo</button>
