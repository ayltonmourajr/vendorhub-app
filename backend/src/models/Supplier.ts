// src/models/Supplier.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISupplier extends Document {
	name: string;
	companyName: string;
	email?: string;
	phone?: string;
	city?: string;
	state?: string;
	active: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const SupplierSchema = new Schema<ISupplier>(
	{
		name: { type: String, required: true, trim: true },
		companyName: { type: String, required: true, trim: true },
		email: { type: String, trim: true },
		phone: { type: String, trim: true },
		city: { type: String, trim: true },
		state: { type: String, trim: true },
		active: { type: Boolean, default: true },
	},
	{
		timestamps: true,
	}
);

export const Supplier: Model<ISupplier> =
	mongoose.models.Supplier ||
	mongoose.model<ISupplier>("Supplier", SupplierSchema);
