import { createLogger, consoleSink } from "https://deno.land/x/deno_structured_logging@0.4.1/mod.ts";

const log = createLogger().addSink(consoleSink());

//Debug message
log.debug("Something is not working");

//Information message
log.info("Some message");

//Warning message
log.warn("Be careful!");

//Error message
log.error("Something bad happened");

//Critical message
log.critical("Something very bad happened!!! ");

