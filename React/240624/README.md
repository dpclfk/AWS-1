# Hook

## useState

- State 관련 훅

## useEffect

- 생명주기 관련 훅

## useCallback

- 함수를 상태값처럼 필요시에만 재할당하도록 함

## useMemo

- 값을 상태값처럼 필요시에만 수정함

# Props

- 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값

# 폴더 구조

## Component

- UI 관련

## Container

- JS 관련(로직)

UI관련 즉, 컴포넌트가 아니면 파일확장자가 ts, 관련된거면 tsx
html을 내보내면 tsx, 내보내지않으면 ts
lib(API)
현재는 Todo Class만 가져옴

compontents와 containers 구분하는법
html 고유 엘리먼트가 들어가는가

key값 : 여러개를 받아올때 리액트가 정확히 뭔지 모른다
겹치지 않는 값을 넣는게 중요 string도 가능
