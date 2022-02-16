"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = require("express");
const getAll_1 = require("../controller/user/getAll");
const post_1 = require("../controller/user/post");
const getOne_1 = require("../controller/user/getOne");
const put_1 = require("../controller/user/put");
const deleteOne_1 = require("../controller/user/deleteOne");
const putStatus_1 = require("../controller/user/putStatus");
const user = (0, express_1.Router)();
exports.user = user;
user.route('/status/:id').put(putStatus_1.putStatus);
user.route('/:id').get(getOne_1.getOne)
    .put(put_1.put)
    .delete(deleteOne_1.deleteOne);
user.route('/')
    .get(getAll_1.getAll)
    .post(post_1.post);
