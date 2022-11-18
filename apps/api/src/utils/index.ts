import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '123abc'; // TODO: move this to an env var

export type JWTPayload = { sub: number; role: string };

export const hashPassword = (password: string) => bcrypt.hash(password, 10);

export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export const signToken = (payload: JWTPayload) => jwt.sign(payload, SECRET);

export const verifyToken = (token: string) => jwt.verify(token, SECRET);
