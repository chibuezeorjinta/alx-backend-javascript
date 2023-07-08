import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photodump = await uploadPhoto();
    const userdump = await createUser();

    return ({ photo: photodump, user: userdump });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
