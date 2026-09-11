create table items (
  id bigint generated always as identity primary key,
  title text not null,
  category text not null,
  description text
);

create table comments (
  id bigint generated always as identity primary key,
  item_id bigint not null references items(id),
  body text not null,
  stars integer not null
);