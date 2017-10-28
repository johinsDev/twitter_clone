import jwt from 'jsonwebtoken';

import constants from '../../config/constants';
import User from './user.model';

export async function requireAuth(user) {
  if(!user || !user.id) {
    throw new Error('Unauthorized');
  }

  const me = await User.findById(user.id);

  if(!me) {
    throw new Error('Unauthorized');
  }

  return me;
}

export function decodeToken(token) {
  const arr = token.split(' ');

  if(arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('Token no valid!');
}
