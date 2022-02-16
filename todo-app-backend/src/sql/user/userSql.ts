export const getAllQuery = `
select * from todos
order by id;
`;

export const getOneQuery = `
select * from todos 
where id = $1;
`;

export const postQuery = `
insert into todos(name, completed)
values($1, $2)
returning *;
`;

export const putQuery = `
update todos set name = $2 
where id = $1
returning *;
`

export const putStatusQuery = `
update todos set completed = $2 
where id = $1
returning *;
`

export const deleteOneQuery = `
delete from todos 
where id = $1
`;