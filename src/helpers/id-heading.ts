import _id from './_id';
import { Section } from './_types';

export default function(this: Section): string {
  return _id(this.header);
}