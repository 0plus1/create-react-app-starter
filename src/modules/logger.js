export const LOG_LEVEL_ERROR = 'ERROR';

export function storeLog(log, level) {
  const logObject = { log, level };
  const logString = `[${logObject.level}] ${logObject.log}`;
  console.log(logString);
}
