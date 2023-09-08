import { encrypt, decrypt } from '../encrypt-decrypt/encrptdecrypt';

export const sendSuccess = async (
  errorBit: boolean,
  msg: any,
  data: any,
  status: any = 200,
) => {
  return {
    error: errorBit,
    message: msg,
    data: await encrypt(data),
    status,
    timestamp: new Date().toISOString(),
  };
};

export const socketSendSuccess = async (
  key: string,
  server: any,
  errorBit: boolean,
  msg: any,
  data: any,
  status: any = 200,
) => {
  server.emit(key, {
    error: errorBit,
    status: status,
    res: await encrypt(data),
    timestamp: new Date().toISOString(),
  });
};

export const socketFailResponse = async (
  key: string,
  server: any,
  errorBit: boolean,
  msg: any,
  response?: any,
  status: any = 400,
) => {
  server.emit(key, {
    error: errorBit,
    status: status,
    message: msg,
    data: null,
    timestamp: new Date().toISOString(),
  });
};

export const sendError = (errorBit: boolean, msg: any, status: any = 400) => {
  return {
    error: errorBit,
    message: msg,
    status,
    data: null,
    timestamp: new Date().toISOString(),
  };
};
export const failResponse = async (
  errorBit: boolean,
  msg: any,
  response?: any,
  status: any = 400,
  data?: any
) => {
  data = data ?? null;
  response.status(400).send({
    error: errorBit,
    message: msg,
    status,
    data,
    timestamp: new Date().toISOString(),
  });
};
export const successResponse = async (
  message: string,
  data?: any,
  response?: any,
  status: any = 200,
) => {
  response.status(status).send({
    status,
    error: false,
    message,
    data: await encrypt(data),
    timestamp: new Date().toISOString(),
  });
};

export const successResponse2 = async (message: string, data: any) => {
  return {
    error: false,
    message,
    data: await encrypt(data),
    timestamp: new Date().toISOString(),
  };
};

export const errorResponse = async (message: string, data: any) => {
  return {
    error: true,
    message,
    data: await encrypt(data),
    timestamp: new Date().toISOString(),
  };
};
