import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  const saltOrRounds = await bcrypt.genSalt();
  return bcrypt.hash(password, saltOrRounds);
}
export async function comparePassword(
  password: string,
  learnerPassword: string,
) {
  return bcrypt.compare(password, learnerPassword);
}
