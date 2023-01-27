# SPARCS Server Landing Page 2021

현재 운영 중인 SPARCS 내부 서버 `Kong`, `Ssal`, `Aria`, `Channeltalk` 서버등에 추가된 랜딩 페이지입니다. 

## 서버 랜딩 페이지 추가
SPARCS에 새로운 서버가 들어오는 경우, `assets/contents.js` 파일에 서버의 정보를 추가해 주세요.
새로운 서버에 nginx 설치 + certbot 설정 + `/usr/share/nginx` permission owner를 wheel 로 변경까지 마쳐야 합니다.

## 배포
~~master 브랜치로 커밋이 올라오는 경우, 자동으로 build 되어 `secrets.HOST`에 등록된 서버들에 배포됩니다. ssh 로그인에 사용되는 휠 비밀번호가 바뀌는 경우, Github의 secrets에서 바꿔주시길 바랍니다. 각 변수들에 대한 설명은 [여기](https://github.com/appleboy/scp-action)를 참고해 주세요.~~

22년도 교내 방화벽 정책으로 기존의 CD는 작동하지 않게 되어 비활성화했습니다. 기존 서버 or 새로운 서버에 해당 레포를 clone 한후, `npm install; npm run build` 로 생성된 `dist` 폴더를 `/usr/share/nginx/dist` 로 이동시키면 됩니다. 이후 `sites-enabled`에 static file serving을 하도록 nginx 설정 파일을 만들어 주시면 됩니다. 기존 서버에 있는 파일 참고하셔서 생성하시면 됩니다.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
