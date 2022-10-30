"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
class BoardStatusValidationPipe {
    transform(value, metadata) {
        console.log('Value : ', value);
        console.log('metadata : ', metadata);
        return value;
    }
}
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
//# sourceMappingURL=board-status-validation.pipe.js.map