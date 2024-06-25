react-router-dom 은 5.3버전 기준으로 크게 바뀜

function App() {
return (
<Routes>
<Route path="/" element={<div>홈페이지</div>} />
<Route path="/test" element={<div>테스트중</div>} />
</Routes>
);
}
빌드전에 뒤에 /test를 하면 해당 페이지로 이동

빌드를 한뒤 /test를 가면 404에러가뜸(빌드에는 test가 없음)

            <Link to={"/test"} className="text-blue-600">
              테스트
            </Link>

위에 이런식으로 넣어주면 이동함
a태그는 404뜸

      <Routes>
        <Route path="/" element={<div>홈페이지</div>} />
        <Route path="/test" element={<div>테스트중</div>} />
      </Routes>
      <Routes>
        <Route path="/" element={<div>홈페이지2</div>} />
        <Route path="/test" element={<div>테스트중2</div>} />
      </Routes>

하면 두개가 동시에 뜬다

        <Route path="/test/*" element={<Test></Test>} />

/\*이 없으면 test까지만 확인
있으면 아래에있는 모든걸 확인

        <Route path="/test/:id/*" Component={Test} />

이렇게하면 /test/asd/asd 일경우 다 받아옴

        <Route path="/test/:id" Component={Test} />

는 /test/asd 만 받아옴, /test/asd/asd일경우 받지못함
