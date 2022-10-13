## Nomad Coder의 blockchain 인강을 듣고 정리한 프로젝트

- ts-node: 컴파일할 필요없이 타입스크립트 코드를 대신 실행하는 패키지

### 블록 체인
블록체인은 말 그대로 여러 개의 블록이 사슬처럼 묶인 것.  
그리고, 그 블록 안에는 보호하고 싶은 데이터가 들어있으며 다른 블록에 사슬처럼 묶여있다.  
그 연결고리는 해쉬값이다. 해쉬는 블록의 고유 서명이다.

블록의 해쉬값은 prevHash, height, data 값을 이용해서 계산된다.  
해쉬값은 이상하게 생긴 문자열이 생성되는데 해당 값은 결정론적이다(어떤 입력값의 해쉬는 언제나 같은 결과값이 나옴[어떤 환경에서든]).  
`123 = regmaegrahaerhfmslemfgprwe`는 어디서 돌려도 123은 해당 값이 나온다. 

### DefinitelyTyped Repo
https://github.com/DefinitelyTyped/DefinitelyTyped

타입 정의로만 이루어져있는 Repo이다. npm에 존재하는 거의 모든 패키지들에 대해서 말이다.  
자바스크립트로 이루어진 패키지를 다운 받았을 때 해당 Repo를 확인하는 것도 좋다.  
찾으면 전체를 copy/paste하기 보다는 해당 부분만 설치할 수 있다. 다음과 같이 말이다.  
`npm i -D @types/node`

그러나 요즘은, 이런 일을 할 필요는 없다.  
최근 패키지는 배포자가 알아서 타입을 설치하게끔 해주기 때문.
