"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
/**
 * MongoDB Model
 */
const SettingsSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    shopName: { type: String, required: true },
    disabled: { type: Boolean, required: false }
});
exports.default = mongoose_1.default.model('Setttings', SettingsSchema);
//# sourceMappingURL=settings.model.js.map