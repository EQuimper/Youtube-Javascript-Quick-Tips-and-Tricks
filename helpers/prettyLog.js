export default function prettyLog(log) {
  console.log('====================================');
  console.log(JSON.stringify(log, null, 2));
  console.log('====================================');
}