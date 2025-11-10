import { rateLimit } from "express-rate-limit";

export const limitarUso = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Muitas requisições (100req por 15min). Tente novamente mais tarde."
})