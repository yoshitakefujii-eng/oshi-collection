insert into items (title, category, description)
values ('推し①', 'カテゴリA', '説明'),
       ('推し②', 'カテゴリA', '説明'),
       ('推し③', 'カテゴリB', '説明');

select title, description from items
where category = 'カテゴリA'
order by title asc;

select items.title, comments.body, comments.stars
from items
join comments on comments.item_id = items.id;