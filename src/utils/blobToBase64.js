export default function (blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onloadend = function () {
      resolve(reader.result);
    };
  });
}