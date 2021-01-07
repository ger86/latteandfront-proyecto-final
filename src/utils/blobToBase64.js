export default function (blob) {
  if (!blob) {
    return new Promise((resolve) => resolve(null));
  }
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onloadend = function () {
      resolve(reader.result);
    };
  });
}