const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, errors, prettyPrint } = format;

function buildDevLogger() {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    level: "debug",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat,
    ),
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
      new transports.Console({
        format: combine(
          format.colorize(), // Keep colorize for console transport
          logFormat,
        ),
      }),
    ],
  });
}

module.exports = buildDevLogger;
