import url from 'url';
import path from 'path';

export const dirname = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)));
