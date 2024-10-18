# 소개

NestJs는 NodeJs기반의 효율적이고 확장가능한 프레임워크다.

점진적 JaveScript를 사용할수 있고, TypeScript로 빌드되어 완벽하게 지원한다.

> 점진적 : 이전브라우저 및 장치를 사용하는 사람들을 위해 간단하지만 여전히 사용가능한 환경을 제공하고, 동시에 사용자경험을 향상하는 디자인

OOP(객체지향 프로그래밍), FP(함수형 프로그래밍), FRP(함수 반응형 프로그래밍)의 요소를 결합한다.

> OOP : 데이터가 객체 내에 캡슐화되고 구성 요소 부분이 아닌, 객체 자체가 운용되는 프로그래밍 접근 방식
> FP : 자료 처리를 수학적 함수의 계산으로 취급하고 상태와 가변 데이터(값이 변경됨)를 멀리하는 프로그래밍 패러다임의 하나
> FRP : 반응형 프로그래밍을 함수형 프로그래밍을 통해 구현한 패러다임

NestJs는 기본적으로 Express와 같은 서버 프레임워크를 사용하나, 선택적으로 Fastify도 사용하게 구성할수 있다.

- Fastify : Express같은 프레임워크

일반적인 NodeJs프레임워크(Express, Fastify)보다 높은수준의 추상화를 제공하며, API를 개발자에게 직접 노출한다.

- 추상화 : 직접적으로 만들어지진 않았지만, 이런게 만들어질것이다 미리 선언하는것
  이를통해 개발자는 기본플랫폼에서 사용할수 있는 수많은 타사모듈을 자유롭게 사용할 수 있다.

# 철학

최근 몇년간 NodeJs덕분에 JavaScript는 프론트엔드와 백엔드의 “링구아 프랑카”가 되었다

- 링구아 프랑카 : 서로 다른언어를 사용하는 사람들이 의사소통을 하기위한 국제어, 공통어로 사용하는 언어
  이로 인해 Angular , React , Vue 와 같은 프로젝트가 생겨나 개발자 생산성을 개선하고 빠르고 테스트 가능하며 확장 가능한 프론트엔드 애플리케이션을 만들 수 있게 되었다.

그러나 NodeJs및 서버측 JavaScript에 훌륭한 라이브러리, 헬퍼 및 도구가 많이 있지만, 그 중 어느 것도 주요 문제인 아키텍처를 효과적으로 해결하지 못하고있다.

- 아키텍처 : 다양한 영역과 관련된 의사결정의 결과물

NestJs는 개발자와 팀이 테스트하기 쉽고, 확장 가능하고, 느슨하게 결합되고, 쉽게 유지 관리할 수 있는 애플리케이션을 만들 수 있는 즉시 사용 가능한 애플리케이션 아키텍처를 제공한다.
NestJs는 Angular에서 많은 영감을 받았다

# 설치

NestJs를 스캐폴딩 하려면 아래와같이 하면된다.

- 스캐폴딩 : 새로운 프로젝트나 모듈을 시작할 때, 초기 구조와 설정을 자동으로 생성해주는 도구

```bash
npm i -g @nestjs/cli
# npm -g를 사용하여 설치위치 확인 : npm root -g을 사용하여 위치 확인이 가능함
nest new project-name
```

또는

```bash
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
```

해당 깃에서 파일을 가져와 설치도 가능함

만약 JavaScript환경에서 하고싶다면

```bash
git clone https://github.com/nestjs/javascript-starter.git project
```

하면 된다

이렇게 만드는것말고 직접 처음부터 수동으로 만들수도 있다

```bash
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

명령어를 사용하면 수동으로 만들 수 있다
