import { customAlphabet } from 'nanoid';

const createId = customAlphabet('abcdefghijklmnopqrstuvwxyz', 16);

export default createId;
