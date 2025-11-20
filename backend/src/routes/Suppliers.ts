// src/routes/suppliers.ts
import { Router } from "express";
import { Supplier } from "../models/Supplier";

const router = Router();

// GET /api/suppliers
router.get("/", async (_req, res) => {
	try {
		const suppliers = await Supplier.find().lean().exec();
		return res.json(suppliers);
	} catch (err) {
		console.error("[vendorhub-api] Error fetching suppliers:", err);
		return res.status(500).json({
			message: "Failed to fetch suppliers",
		});
	}
});

export default router;
