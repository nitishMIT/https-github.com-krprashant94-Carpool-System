import { sqsQueues } from "../sqs/queues";
import { getLogger } from "config/logger";

const logger = getLogger("worker");

let running = false;

export const start = async () => {
	if (running) {
		logger.debug("Worker instance already running, skipping.");
		return;
	}

	logger.info("Micros Lifecycle: Starting queue processing");
	sqsQueues.start();

	running = true;
};

export const stop = async () => {
	if (!running) {
		logger.debug("Worker instance not running, skipping.");
		return;
	}
	logger.info("Micros Lifecycle: Stopping queue processing");

	await sqsQueues.stop();

	running = false;
};
