INSERT INTO
  courses (title, instructor)
VALUES
  ('Javascript Programming Fundamentals', 'Fodé Diop'),
  ('Intro to HTML & CSS', 'Fodé Diop'),
  ('The Ubuntu Operating System', 'Fodé Diop'),
  ('Blockchain Fundamentals', 'Fodé Diop')
;

INSERT INTO
  students (name, email, password)
VALUES
  ('Demba Diop', 'demba@puxxus.com', 'changeme'),
  ('Lala Diallo', 'laladiop@gmail.com', 'changeme'),
  ('Daba Diallo', 'dabadiallo@gmail.com', 'changeme'),
  ('Fatou Diop', 'fatoudiop@gmail.com', 'changeme'),
  ('Binta Diop', 'bintadiop@gmail.com', 'changeme')
;

INSERT INTO
  reviews (content, student_id, course_id)
VALUES
  ('The greatest course ever.', 2, 3),
  ('Good course, but some of the concepts were too abstract', 1, 2),
  ('The instructor needs to get a better microphone.', 3, 1),
  ('This instructor could use some more training. Just saying.', 4, 3)
;
