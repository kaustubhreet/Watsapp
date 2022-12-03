import express from 'express';

import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { getImage, uploadImage } from '../controller/image-controller.js';
import { getMessage, newMessage } from '../controller/message-controller.js';
import { addUser,getUser } from '../controller/user-controller.js';

import upload from '../utils/upload.js';

const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add',newMessage);
route.post('/message/get/:id',getMessage);

route.post('/file/upload',upload.single('file'), uploadImage);
route.get('/file/:filename',getImage);

export default route;