"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneQuery = exports.putStatusQuery = exports.putQuery = exports.postQuery = exports.getOneQuery = exports.getAllQuery = void 0;
exports.getAllQuery = `
select * from todos
order by id;
`;
exports.getOneQuery = `
select * from todos 
where id = $1;
`;
exports.postQuery = `
insert into todos(name, completed)
values($1, $2)
returning *;
`;
exports.putQuery = `
update todos set name = $2 
where id = $1
returning *;
`;
exports.putStatusQuery = `
update todos set completed = $2 
where id = $1
returning *;
`;
exports.deleteOneQuery = `
delete from todos 
where id = $1
`;
