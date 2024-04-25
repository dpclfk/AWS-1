npx sequelize init
select \* from user_crypto order by id DESC LIMIT 1,2

# Transaction

- 일의 최소 단위
- 일 자체가 끝나야 적용한다.

## 실습

### 테이블 생성

```sql
CREATE TABLE user_crypto(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(50) UNIQUE NOT NULL,
  pw VARCHAR(64) NOT NULL,
  phone VARCHAR(13) NOT NULL
);
```

- crypto : 암호화
  - encrypto | decrypto

```sql
CREATE TABLE user_info(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  nick VARCHAR(10) NOT NULL DEFAULT "무명",
  FOREIGN KEY (id) REFERENCES user_crypto(id)
);
```

### 데이터 입력

START TRANSACTION을 쓰면 커밋을 하기전까지 DB에 안들어감
커밋하던 터미널에서 SELECT를 하면 들어간게 보이나, 다른 터미널에선 안보임

```sql
START TRANSACTION;
INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test1', 'test1', 'test1');
INSERT INTO user_info (name, nick) VALUES ('test1', 'test1');
COMMIT;

SELECT * FROM user_crypto;
SELECT * FROM user_info;

INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test2', 'test2', 'test2');
INSERT INTO user_info (name) VALUES ('test2');
ROLLBACK;
```

# Join

- 하나의 테이블만 가져오는 것이 아니라 2개 이상의 테이블을 하나의 목록(테이블)로 가져올 수 있게 해준다.

```sql
SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id; -- 왼쪽 벤다이어그램 전부
SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL; -- 벤다이어 그램에서 왼쪽, 겹치지 않는 부분만
SELECT user_crypto.*, user_info.* FROM user_crypto INNER JOIN user_info ON user_crypto.id=user_info.id; -- 벤다이어그램 교집합에서 겹치는 부분만

SELECT uc.user_id, uc.pw, uc.phone, ui.name, ui.nick FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id;

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL; -- 벤다이어 그램에서 합집합

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL; -- 벤다이어 그램에서 왼쪽과 오른쪽의 겹치지 않는 부분만, UNION을 쓰면 두 쿼리문을 하나의 쿼리문처럼 인식

```

include는 쿼리문 join과 같음

```sql

SELECT AVG(age) AS avg_age FROM user_info;

그룹화
SELECT address FROM user_info GROUP BY address;

SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address;

SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address ORDER BY COUNT(*) DESC;

SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt=1;

group by 앞에 where는 이미 조건을 걸어서 가져옴
having는 그룹을 건뒤 조건을 추가로 적용

SELECT uc.id, uc.user_id, uc.pw, uc.phone, ui.name, ui.nick, ui.age, ui.address FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id;

SELECT uc.id, uc.user_id, uc.pw, uc.phone, ui.name, ui.nick, ui.age, ui.address FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id ORDER BY ui.age DESC;

SELECT * FROM user_info LIMIT 1,2;
LIMIT는 맨뒤에 적음
```
