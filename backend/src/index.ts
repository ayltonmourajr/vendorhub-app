import { app } from "./app";
import { config } from "./config/env";
import { connectToDatabase } from "./db/mongo";

async function bootstrap() {
	const port = config.port;

	try {
		await connectToDatabase();

		app.listen(port, () => {
			console.log(
				`[vendorhub-api] Server running on http://localhost:${port} in ${config.env} mode`
			);
		});
	} catch (err) {
		console.error("[vendorhub-api] Failed to start server:", err);
		process.exit(1);
	}
}

bootstrap();