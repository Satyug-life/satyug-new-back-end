import { Request, Response, NextFunction } from "express";
import { failResponse } from "../util/response.handler";
import * as joiOptions from "./joi.validation";
const Joi = require("joi");

export const createProductValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      title: Joi.string().trim().required(),
      image: Joi.string().required(),
      description: Joi.string().min(5).max(500).required(),
      type: Joi.string().required(),
      size: Joi.string().valid('S','M','L', 'XL', 'XXL').required(),
      price: Joi.number().min(1).max(100000).required(),
      quantity:  Joi.number().min(1).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const updateProductValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      title: Joi.string().trim().required(),
      image: Joi.string().required(),
      description: Joi.string().min(5).max(500).required(),
      size: Joi.string().valid('S','M','L', 'XL', 'XXL').required(),
      price: Joi.number().min(1).max(100000).required(),
      quantity:  Joi.number().min(1).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const quizAnswerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      question: Joi.string().trim().required(),
      answer: Joi.string().valid('A','B','C', 'D').required(),
      userId: Joi.string().required()
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const emailValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      email: Joi.string().email().required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const verifyOTPValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      type: Joi.string().optional(),
      email: Joi.string().email().required(),
      otp: Joi.string().required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const collectiveValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      phoneNumber: Joi.string().min(10).max(15).required(),
      collectiveId: Joi.string().required(),
      token: Joi.string().required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const paginationValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqBody = req.params;
    const transSchema = Joi.object({
      type: Joi.string().optional(),
      id: Joi.string().optional(),
      offset: Joi.number().max(1000).required(),
      limit: Joi.number().max(1000).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const donationValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      userId: Joi.string().optional(),
      amount: Joi.number().min(1).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const orderValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      userId: Joi.string().required(),
      amount: Joi.number().min(1).required(),
      qty: Joi.number().min(1).required(),
      productId: Joi.string().required(),
      size: Joi.string().required(),
      addressDetail: Joi.object().keys({
        billing: Joi.object().keys({
          address: Joi.string().required(),
          city: Joi.string().required(),
          pincode: Joi.string().required(),
          state: Joi.string().required(),
          country: Joi.string().required()
        }),
        shipping: Joi.object().keys({
          address: Joi.string().required(),
          city: Joi.string().required(),
          pincode: Joi.string().required(),
          state: Joi.string().required(),
          country: Joi.string().required()
        })   
      }).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().min(10).max(10).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const updateOrderValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      paymentMode: Joi.string().required(),
      status: Joi.string().valid('pending', 'success', 'failed').required(),
      productId: Joi.string().required(),
      razorpayPaymentId: Joi.string().required(),
      qty: Joi.number().min(1).required(),
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const updateDonationValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      status: Joi.string().valid('SUCCESS', 'FAILED').required(),
      razorpayPaymentId: Joi.string().required()
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};

export const contactUsValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const transSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      message: Joi.string().required()
    });

    const { error } = transSchema.validate(reqBody, joiOptions.options);
    if (error) {
      throw {
        message: joiOptions.capitalize(error.details[0].message),
      };
    }
    return next();
  } catch (err: any) {
    return failResponse(true, err?.message, res);
  }
};