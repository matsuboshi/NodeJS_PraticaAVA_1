CREATE schema projeto_node;


USE projeto_node;


CREATE TABLE conteudo(
  id int AUTO_INCREMENT PRIMARY KEY,
  categoria varchar(50),
  conteudo varchar(200)
);


INSERT INTO
  conteudo (categoria, conteudo)
VALUES
  ('frontend', 'HTML'),
  ('frontend', 'CSS'),
  ('frontend', 'JS'),
  ('frontend', 'ReactJS'),
  ('backend', 'Express'),
  ('backend', 'PHP'),
  ('backend', 'NodeJS'),
  ('backend', 'SQL'),
  ('frontend', 'AngularJS');