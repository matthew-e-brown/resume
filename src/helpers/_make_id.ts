export default function (str: string): string {
  return str.toLowerCase().replace(/[^\w+]/g, '-');
}