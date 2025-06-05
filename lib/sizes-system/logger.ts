import { logger as baseLogger } from '../utils/logger';

const THIS_SYSTEM = 'sizes-system';

export async function logger(payload: Record<string, any>) {
  baseLogger({
    ...payload,
    system: THIS_SYSTEM,
  });
}
