import { logger as baseLogger } from '../utils/logger';

const THIS_SYSTEM = 'sizes-system';

export async function logger(payload: Record<string, any>) { // eslint-disable-line @typescript-eslint/no-explicit-any
  baseLogger({
    ...payload,
    system: THIS_SYSTEM,
  });
}
