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
exports.migration1678303917805 = void 0;
class migration1678303917805 {
    constructor() {
        this.name = 'migration1678303917805';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "defix_id" character varying NOT NULL, "email" character varying, "import_id" character varying NOT NULL, "name" character varying, "lastname" character varying, "close_sessions" boolean DEFAULT false, "dosfa" boolean DEFAULT false, "legal_document" character varying, "type_document" character varying, "secret" character varying, "flag_send" boolean, "flag_receive" boolean, "flag_dex" boolean, "flag_fiat" boolean, CONSTRAINT "UQ_5b4b4aa7a7fa89043d7f1ecc415" UNIQUE ("defix_id"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_4761723de32da9c56d745ecdacc" UNIQUE ("import_id"), CONSTRAINT "UQ_a32c406f2cd8265f9dff339a1b2" UNIQUE ("legal_document"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "blockchain" character varying, "address" character varying, "userId" integer, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
            yield queryRunner.query(`DROP TABLE "adresses"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.migration1678303917805 = migration1678303917805;