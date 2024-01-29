import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    API_KEY: Joi.required(),
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6),
})