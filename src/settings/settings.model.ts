import mongoose, { Schema, Document } from 'mongoose';

/**
 * App optional settings
 * @typedef {Object} ISettings
 * @property {string} id Store unique id
 */
export interface ISettings extends Document {
  id: string;
}

/**
 * MongoDB Model
 */
const SettingsSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  shopName: { type: String, required: true },
  disabled: { type: Boolean, required: false }
});

export default mongoose.model<ISettings>('Setttings', SettingsSchema);