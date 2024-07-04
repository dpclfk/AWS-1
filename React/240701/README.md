context : 전역 상태

컴포넌트 내부 스테이트는 어디에 있을까?
Store에 저장된다.

setState를하면 store에서 어떻게 될까
store => view => setState => ?? => store
setState자주 사용한거 setList (list)=>

??는 Dispatch<action>
setState는 Dispatch라는 메서드 호출

Reducer는 Dispatch에서 값을받아서 store에 저장 하게됨

스토어는 뷰를 호출
view는 디스패치 호출
디스패치는 리듀서 일을시키고
리듀서는 그값을 스토어에 저장한다

디스패치 액션 : 어떤 행동을 할까? 뭐할건데?

액션 : 어떤 행동을 할지 정해둠
