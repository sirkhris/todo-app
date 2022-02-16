"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const userSql_1 = require("../../sql/user/userSql");
const db_1 = require("../../util/db");
function post(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, completed } = req.body;
        try {
            const data = yield db_1.db
                .query(userSql_1.postQuery, [name, completed])
                .then(response => response.rows[0])
                .catch(err => console.log(err.stack));
            res.status(200).send({ data });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.post = post;
