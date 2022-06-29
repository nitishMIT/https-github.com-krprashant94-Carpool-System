import { CryptorHttpClient } from "utils/cryptor-http-client";
import { getLogger } from "config/logger";

describe("cryptor-http-client", () => {

	const TEST_LOGGER = getLogger("test");

	it("should hit the docker mock implentation and success", async () => {
		const encrypted = await CryptorHttpClient.encrypt(CryptorHttpClient.GITHUB_SERVER_APP_SECRET, "some-text", TEST_LOGGER);
		expect(encrypted).toBe("encrypted:some-text");
		const decrypted = await CryptorHttpClient.decrypt("encrypted:some-text", TEST_LOGGER);
		expect(decrypted).toBe("some-text");
	});

});