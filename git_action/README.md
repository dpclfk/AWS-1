yml

사용법
.git이 있는 폴더에서
.gitgub 폴더를 만들고
안에 workflows 폴더를 만들고
안에 deploy.yml 파일을 만든다

pem같은 중요 파일은 다른사람한테 노출 되면 안된다.
yml파일에 적으면 깃에 그대로 올라가기때문에 따로 설정을 해야한다

해당 레포지토리의 Setting탭을 들어간다
왼쪽 탭에서 Security의 Secrets and variables를 열고
actions의 New repository secret안에 넣는다

KEY는 pem키값을 그대로 넣는다
HOST는 AWS의 퍼블릭 IPv4 주소를 넣는다
user는 우상단에 연결 - EC2인스턴스 연결에 나오는걸로 넣는다
user 넣기전에 연결해서 var 폴더 들어가서 www에 권한 주는게 필요하다
cd var로 들어가야함
sudo chown -R ubuntu:ubuntu www

# XML을 대체하는 문서 / YML, YXML

```yml
name: Deploy React to EC2

on:
  # ~ 했을때
  push:
    # push 했을 때
    branches:
      # 브랜치에
      - main
      # 메인 브랜치에

jobs:
  # 작업들
  test:
    # 작업 명
    runs-on: ubuntu-latest
    # 작업 환경
    steps:
      # 작업들을 순서에 맞춰서 작성
      - name: "testing"
        # 작업명은 testing 이고
        run: echo "now test"
        # 작업 내용은 echo "now test"
  deploy:
    runs-on: ubuntu-latest
    # 우분투 최신버전
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4 # 체크아웃 이라는걸 가져다 쓰겠다 JS에서 import

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Add SSH key
        uses: webfactory/ssh-agent@v0.5.4
        with:
          ssh-private-key: ${{ secrets.EC2_KEY }}

      - name: Ensure SSH directory exists
        run: |
          mkdir -p ~/.ssh
          chmod 700 ~/.ssh

      - name: Install dependencies of project
        working-directory: ./
        run: npm i

      - name: Build project
        working-directory: ./
        run: npm run build

      - name: Add SSH known hosts
        run: ssh-keyscan -H ${{ secrets.EC2_HOST }} >> ~/.ssh/known_hosts

      - name: Copy files to EC2
        run: |
          ssh ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} "rm -rf /var/www/html"
          ssh ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} "mkdir -p /var/www/html"
          rsync -avz -e "ssh" ./build/ ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }}:/var/www/html
        # rsync == filezilla 파일을 넘겨줌
        # rsync -avz -e "ssh" ./build ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }}:/var/www/html == 현재 폴더의 build 폴더를 EC2 유저로 EC2 인스턴스(HOST)에 접속해서 /var/www/html 폴더에 복사해 달라
        # -e "ssh" == 접속 방법에 대한 설정
        # -avz == 설정, 옵션
        # -a : 전부
        # -v : 모두 출력
        # -z : 권한, 소유자 그룹등 유지
```
