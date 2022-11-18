# Developer Scheduler side project

## 목적 

Notion API를 이용한 자신의 목표와 프로젝트 그리고 오늘의 내가 할 일을 정리한 Notion DB를 이용한  
사이드 프로젝트 입니다.

## Stack  

- FE
  - React
  - Typescript 
  - HTML, JS, CSS 
  - lib :
    - reudx-toolkit
    - axios
    - react-cookie
    - react-router-dom
    - styled-components
    - node-sass
  
- Server
  - Node.js
  - Typescript
    - lib : 
      - Express
      - cor
      - jsonwebtoken
      - @notionhq/client
      - dotenv
      - mongoose-sequence

- DevOps : Notion DB, Notion API, MonggoDB Atomic Degine Pattern, git flow

- 폴더 구조

<img width="209" alt="Directory" src="https://user-images.githubusercontent.com/103201530/202640035-7f25824a-ca61-4ec9-bb74-234d8bec39dc.png">




### TypeScript Config

### Server
```json
{
  "compilerOptions": {
    "target": "es2016",                      
    /* Modules */
    "module": "commonjs",     
    "outDir": "./bin",
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                      
    /* Completeness */
    "skipLibCheck": true                                 
  }
}
```

### FE
```json 
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```


## 기능

### 로그인

**FE**
- 로그인 스타일 : git hub의 로그인 화면을 참조하여 만들었습니다.
- 로그인은 MongDB와 연동하여 이메일과 비밀번호가 맞을 시 메인화면으로 넘어갑니다.
- 하단의 포트폴리오와 블로그로 연동하는 링크 태그를 생성했습니다.
- 로그인 성공 시 서버의 전달 받은 토큰을 쿠키로 저장한다.

  <img width="517" alt="Login" src="https://user-images.githubusercontent.com/103201530/202640589-e25db112-8619-4229-b5a3-5db193d1f007.png">




**Server**

- 서버에서는 RestAPI를 구조화 하기 위해서 Routing Path를 사용자와 게시글을 기준으로 나누었습니다.
- 로그인 기능은 유저 관련 Route로 변경했습니다.

<img width="293" alt="screen_capture 2022-11-18 오후 4 03 17" src="https://user-images.githubusercontent.com/103201530/202641561-b1918851-438c-4abd-a368-3fd88aa82548.png">

- 서버의 단계를 세분화 하기 위해서 route와 controller를 만들어 분리했습니다.
  
   <img width="195" alt="screen_capture 2022-11-18 오후 4 05 38" src="https://user-images.githubusercontent.com/103201530/202641875-6b4b2fef-1a7e-4ce5-a3df-9ae4de1eab0e.png">
- MongoDB에서 사용자를 찾으면 성공 시 토큰과 성공 여부를 전달합니다.
<img width="584" alt="screen_capture 2022-11-18 오후 4 10 45" src="https://user-images.githubusercontent.com/103201530/202642713-0db68b4f-1f89-4e23-a44b-4b9c91bae28d.png">


### 로그아웃

- 로그아웃 시 서버에게 로그아웃 요청
- 서버에서 DB의 토큰 삭제
- 삭제 성공 시 FE의 쿠키의 토큰 값을 삭제한다.

<img width="1419" alt="screen_capture 2022-11-18 오후 4 26 29" src="https://user-images.githubusercontent.com/103201530/202645424-9ab193e5-8e86-44e3-80d4-9c998493888a.png">


### 회원가입

**Server** 

- 회원가입 요청의 비밀번호 암호화 기능을 넣었습니다.
- Hash 암호화 방식으로 DB에 저장하기 이전에 암호화 및 salt를 만들어 저장합니다. 
- 비밀 번호는 단방향으로 복호화 하지 않고 값만 비교합니다.
  
![screen_capture 2022-11-18 오후 4 35 29](https://user-images.githubusercontent.com/103201530/202646987-c7b7a31c-22e4-42a0-b834-8415a8158bc4.png)


### 게시물

**FE**

- Server에서 받은 Goals, Projects, Actions에 대한 정보를 화면에 표시합니다.
- 메뉴 선택에 따른 필요 데이터를 보여줍니다. 
- 메뉴와, 게시글은 Redux-toolkit을 사용하여 상태 관리합니다. 

![screen_capture 2022-11-18 오후 4 41 11](https://user-images.githubusercontent.com/103201530/202648012-d512aa34-3f3a-40a3-9e66-197b686ffd9a.png)
![screen_capture 2022-11-18 오후 4 41 29](https://user-images.githubusercontent.com/103201530/202648016-ffe5a3bc-ef9d-4940-9bcd-3f14782928e0.png)




