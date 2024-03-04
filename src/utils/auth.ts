import { Credential } from "@/types";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const secret = "the_secret_key";

export function generateToken(payload: Credential) {
   return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
   return jwt.verify(token, secret)
}

export function hashPassword(password: string) {
   return bcrypt.hashSync(password, 10)
}

export function comparePassword(password: string, hashedPassword: string) {
   return bcrypt.compareSync(password, hashedPassword)
}