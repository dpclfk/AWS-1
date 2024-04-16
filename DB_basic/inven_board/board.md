```sql
create table user (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(64) NOT NULL,
name VARCHAR(10) NOT NULL,
phone VARCHAR(13) UNIQUE,
email VARCHAR(64) UNIQUE,
nick VARCHAR(12) UNIQUE
);
```

```sql
create table board (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
writer INT UNSIGNED NOT NULL,
created_at DATETIME DEFAULT NOW(),
content VARCHAR(10000) NOT NULL,
post_number INT UNSIGNED UNIQUE,
comment_number INT UNSIGNED UNIQUE,
like_point INT,
FOREIGN KEY (writer) REFERENCES user(id)
ON UPDATE CASCADE
);
```

```sql
create table like_point (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user INT UNSIGNED,
board_id INT UNSIGNED,
FOREIGN KEY (user) REFERENCES user(id),
FOREIGN KEY (board_id) REFERENCES board(id)
);
```

```sql
create table post (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(20) NOT NULL,
FOREIGN KEY (id) REFERENCES board(post_number)
);
```

```sql
create table comment (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
post_number INT UNSIGNED,
FOREIGN KEY (id) REFERENCES board(comment_number),
FOREIGN KEY (post_number) REFERENCES board(post_number)
);
```
