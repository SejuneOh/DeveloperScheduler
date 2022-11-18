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


  <img width="517" alt="Login" src="https://user-images.githubusercontent.com/103201530/202640589-e25db112-8619-4229-b5a3-5db193d1f007.png">





