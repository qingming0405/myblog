# 生成package.json文件
node init -y

# 安装nodemon
npm install nodemon -D

# mysql开始

# 设置安全模式为0

# -- 表示注释

# 使用myblog数据库
use myblog;

# 显示数据表
show tables;

# 插入语句
insert into blogs (title, content, author, createdAt) values ('标题1', '内容1', '张三', 1234567890123);

# 查询语句
select * from blogs; // 查询整张数据表
select id,author from blogs;
select * from blogs where title='标题1' and author='张三';
select * from blogs where title='标题1' or author='张三';
select * from blogs where title like '%1%';
select * from blogs where author like '%张%' order by id desc;

# 修改语句
update blogs set title='标题3' where content='内容1';

# 删除语句
delete from blogs where title='标题2'

# “软删除”技术，防止错误删除
# 增加一个state字段，默认设置为1表示有效，需要“删除”时将其修改为0表示无效
update blogs set state='0' where id='3'; // 删除id=3的记录
select * from blogs where state<>0; // 查询有效数据 <>表示不等于

# mysql结束
