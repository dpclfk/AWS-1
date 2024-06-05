# EC2

- Elastic Compute Clude
- 탄력적 컴퓨트 클라우드

## DNS

- Domain Name System
- 도메인 이름 시스템 : 주소에 쓰는 IP 주소가 아닌 영어로 된 이름
- DNS는 영어로 된 주소에 접근 시 IP 주소로 연결해준다.

### 최상위 도메인

- www.naver.com
  - com << 최상위
  - naver 라는 회사가 갖고있는 최상위 도메인 : naver.com

## Instance 유형(type)

- t2.micro : 앞으로 우리가 사용하게 될 인스턴스 종류
- CPU, RAM 등 컴퓨터의 물리적 성능에 대해서 종류를 나눠둔 것

## VPC ID

- Virtual Private Cloud ID
- AWS에서 우리가 다루는 영역에 있어서 가장 최상위(프로그램)
- 물리적으로 봤을 때 가장 아래
- 우리가 서버를 만들고자 한다면 그에 따른 컴퓨터가 필요
- 어디에 속해 있느냐? << VPC
  - 단순한 용량, CPU, RAM, ...
- 우리가 외부에서 접근할 때 가장 먼저 접근하게 되는 영역

## 서브넷 ID

- VPC 내의 영역
- Private && Public

요청은 처음들어오면 게이트웨이로 감 -> 가상 라우터 -> 서브넷
서브넷 안에 있는게 EC2
서브넷, EC2는 여러개 있을 수 있음

# end poing

- 끝나는 지점 : 서버 접근 목적지

## 플랫폼 세부 정보

- Linux/UNIX

## AMI 이름

- ubuntu
- Amazon Machine Image
- 아마존에서 서비스하는 플랫폼에 대한 설정을 맞춰춘 이미지들 모음
- Windows
- Windows 2016 Server Base(있음)
- Windows 7(없음)
- Windows 10(없음)
- Windows 11(없음)
  -20H1
  -20H2
- 서버에 대한 기본 설치등을 모두 포함한 OS의 압축

## 시작시 할당된 키페어

- home
- 접근 시 필요한 암호화된 파일
- 없으면 접근 불가능
- "키 파일이 사라졌어요"
  - 윈도우 리셋, 맥 리셋등을 하면서 키 파일 날려먹음 -> EC2에 영원히 접근 및 수정 불가능
  - 웹상에서는 가능함을 확인함
  - 직접적인 파일 수정은 안될듯?
  - 깃으로는 가능?

# 연결(접근 || 접속)

```bash
sudo ssh -i "aws_test.pem" ubuntu@ec2-3-34-50-175.ap-northeast-2.compute.amazonaws.com
```

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install nginx -y

# NginX 세팅

```bash
cd /etc/nginx
cd /opt/homebrew/etc/nginx

ls -al
sudo vi nginx.conf
```

```nginx
http { # http 통신을 받았을 때 어떻게 처리할건지 설정한다.

include /etc/nginx/sites-enabled/*; # 설정 파일을 가져와서 사용한다.
}
```

- 설정파일 보기

```bash
cd sites-available/
ls -al
sudo vi default
```

```nginx
server {
  listen 80 default_server; # 80 port로 서버를 열어달라 IPv4

  listen [::]:80 default_server; # 80 port로 서버를 열어달라 IPv6

  root /var/www/html;
  # root 폴더는 /var/www/html 폴더이다.
  # 아무 설정 없을 시 /var/www/html 폴더로 접근된다

  index index.html index.htm index.nginx-debian.html;
  # 파일 이름이 없이 폴더로만 접근했을 때 응답하기 위해 기본 설정된 파일들

  server_name _;
  # 이름 그대로 서버의 이름 : 도메인

  location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
```

# 웹페이지 배포

```bash
cd /var/www
la -al
```

- drwxr-xr-x <<확인됨
- ubuntu 계정에 대해서 쓰기 권한이 없음

```bash
sudo chmod 777 -R html
```

## 도메인 설정

- 원하는 도메인 이름/ 인스터스 아이피 주소

- '원하는 도메인 이름'.errorcode.help

# SSL(HTTPS) 적용하기

```bash
sudo service nginx restart
brew services restart nginx
```

## certbot

- ssl 인증 받기

```bash
sudo apt-get install certbot python3-certbot-nginx
```

- certbot : SSL 인증 프로그램
- python3-certbot-nginx : nginx, certbot 용 확장 프로그램

### 인증 받기

```bash
sudo certbot --nginx
```

```bash
Enter Email address : 인증이 끝났거나 뭔가 문제가 생겼을 때 연락받을 이메일
```
